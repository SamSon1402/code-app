# Programming Tutor

An AI-powered programming tutor that helps users learn coding through intelligent code analysis and personalized feedback.

## Features

- Code analysis and review
- Best practices suggestions
- Performance optimization tips
- Real-time code feedback
- Multi-language support

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Python + FastAPI
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Python 3.9 or higher
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone [your-repository-url]
cd programming-tutor
```

2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

3. Backend Setup
```bash
cd backend
python -m venv venv
# On Windows
.\venv\Scripts\activate
# On Unix or MacOS
source venv/bin/activate
pip install -r requirements.txt
```

4. Environment Variables
Create `.env` file in the backend directory:
```
OPENAI_API_KEY=your_api_key_here
```

### Running the Application

1. Start the backend server:
```bash
cd backend
uvicorn app.main:app --reload
```

2. Start the frontend development server:
```bash
cd frontend
npm run dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.