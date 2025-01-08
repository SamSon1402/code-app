from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from openai import AsyncOpenAI
import os
from dotenv import load_dotenv
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic models
class CodeAnalysisRequest(BaseModel):
    code: str
    language: str

class CodeAnalysisResponse(BaseModel):
    welcome: str
    magic_explained: str
    code_adventure: List[str]
    clever_choices: List[str]
    speed_check: str
    level_up_ideas: List[str]
    closing: str

def get_system_prompt() -> str:
    return '''# CodeBuddy Analysis System Prompt

You are CodeBuddy, an enthusiastic and expert programming mentor specializing in making complex concepts accessible and fun. Your mission is to analyze code while maintaining the perfect balance between technical accuracy and friendly explanation.

## Core Personality
- Enthusiasm Level: High but not overwhelming
- Technical Depth: Expert with ability to simplify
- Teaching Style: Interactive and analogy-based
- Tone: Warm, encouraging, and engaging

## Response Structure

### 1. Welcome Message
Start with a personalized, warm greeting:
"Hey coding adventurer! 👋 [Personalized observation about their code]"

### 2. Analysis Sections

#### ✨ Magic Explained (Overview)
- Simple explanation of code purpose
- Real-world analogy
- Why it's useful/important

#### 🔍 Code Adventure (Detailed Breakdown)
- Line-by-line explanation
- Simple analogies for each concept
- Interactive questions about the code

#### 💡 Clever Choices (Best Practices)
- Positive reinforcement
- Gentle improvement suggestions
- Examples of good practices used

#### ⚡ Speed Check (Performance)
- Simple performance explanation
- Relatable analogies
- Optimization opportunities

#### 🎯 Level-Up Ideas (Improvements)
- Encouraging suggestions
- Clear examples
- Learning opportunities

### 3. Closing
- Positive reinforcement
- Next steps suggestion
- Invitation for questions'''

def get_analysis_prompt(code: str, language: str) -> str:
    return f'''Hey there! Let's analyze this {language} code together!

CODE TO ANALYZE:
```{language}
{code}
```

Please structure your response exactly like this:

👋 WELCOME
[Your warm, personalized greeting here]

✨ MAGIC EXPLAINED
[Simple explanation of what the code does]

🔍 CODE ADVENTURE
[Detailed breakdown of the code]

💡 CLEVER CHOICES
[Good practices used and positive reinforcement]

⚡ SPEED CHECK
[Performance analysis in simple terms]

🎯 LEVEL-UP IDEAS
[Encouraging suggestions for improvement]

🌟 CLOSING
[Positive reinforcement and invitation for questions]

Remember to:
- Keep explanations friendly and clear
- Use real-world analogies
- Maintain technical accuracy
- Keep emojis as shown above
- Be encouraging throughout'''

# Initialize OpenAI client
client = AsyncOpenAI(api_key=os.getenv("OPENAI_API_KEY"))

@app.post("/analyze", response_model=CodeAnalysisResponse)
async def analyze_code(request: CodeAnalysisRequest):
    """
    Analyze code using OpenAI's GPT model with CodeBuddy's friendly, educational style.
    Returns structured analysis with encouragement and suggestions.
    """
    try:
        logger.info(f"Received code analysis request for language: {request.language}")
        
        # Verify API key
        if not os.getenv("OPENAI_API_KEY"):
            raise HTTPException(status_code=500, detail="OpenAI API key not configured")

        # Call OpenAI API
        response = await client.chat.completions.create(
            model="gpt-4-turbo-preview",
            messages=[
                {"role": "system", "content": get_system_prompt()},
                {"role": "user", "content": get_analysis_prompt(request.code, request.language)}
            ],
            temperature=0.7,
            max_tokens=2000
        )
        
        # Get the response content
        analysis = response.choices[0].message.content
        logger.info("Received response from OpenAI")
        logger.debug(f"Raw response: {analysis}")

        # Split response into sections
        sections = analysis.split('\n\n')
        
        # Extract sections
        welcome = next((s for s in sections if '👋' in s), 
                      "Hey coding adventurer! 👋 Let's explore your code!")
        
        magic_explained = next((s for s in sections if '✨' in s), 
                             "Let's see what this code does! ✨")
        
        code_adventure = [s for s in sections if '🔍' in s]
        if not code_adventure:
            code_adventure = ["Let's break this down step by step! 🔍"]
        
        clever_choices = [s for s in sections if '💡' in s]
        if not clever_choices:
            clever_choices = ["Here are some smart choices in your code! 💡"]
        
        speed_check = next((s for s in sections if '⚡' in s), 
                          "Let's check your code's performance! ⚡")
        
        level_up_ideas = [s for s in sections if '🎯' in s]
        if not level_up_ideas:
            level_up_ideas = ["Here are some cool ways to level up your code! 🎯"]
        
        closing = next((s for s in sections if '🌟' in s),
                      "Keep coding and exploring! You're doing great! 🌟")

        # Prepare response
        response_data = CodeAnalysisResponse(
            welcome=welcome,
            magic_explained=magic_explained,
            code_adventure=code_adventure,
            clever_choices=clever_choices,
            speed_check=speed_check,
            level_up_ideas=level_up_ideas,
            closing=closing
        )

        # Log the response we're sending
        logger.info("Sending analysis response")
        logger.debug(f"Response data: {response_data.dict()}")
        
        return response_data
        
    except Exception as e:
        logger.error(f"Error during code analysis: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail=f"Error analyzing code: {str(e)}"
        )

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "ok",
        "service": "code-analyzer"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)