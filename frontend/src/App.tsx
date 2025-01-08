import React, { useState } from 'react';
import { 
  Brain,
  Share2,
  Search,
  BookOpen,
  Code,
  CheckCircle,
  Lightbulb,
  Radio
} from 'lucide-react';
import './animations.css';

interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  category: string;
}

interface CodeAnalysis {
  welcome: string;
  magic_explained: string;
  code_adventure: string[];
  clever_choices: string[];
  speed_check: string;
  level_up_ideas: string[];
  closing: string;
}

const CODE_EXAMPLES: CodeExample[] = [
  {
    id: 'ce1',
    title: 'Simple Calculator',
    description: 'Learn how to make a basic calculator!',
    code: `def calculator(a, b, operation):
    if operation == '+':
        return a + b    # Adds two numbers
    elif operation == '-':
        return a - b    # Subtracts two numbers
    elif operation == '*':
        return a * b    # Multiplies two numbers
    elif operation == '/':
        if b != 0:     # Checks if dividing by zero
            return a / b
        return "Can't divide by zero!"`,
    category: 'basics'
  },
  {
    id: 'ce2',
    title: 'List Operations',
    description: 'Discover how to work with lists!',
    code: `def list_operations(numbers):
    # Find the biggest number
    maximum = max(numbers)
    
    # Find the smallest number
    minimum = min(numbers)
    
    # Calculate the average
    average = sum(numbers) / len(numbers)
    
    return maximum, minimum, average`,
    category: 'data'
  },
  {
    id: 'ce3',
    title: 'String Fun',
    description: 'Learn cool things with text!',
    code: `def text_analyzer(text):
    # Count words
    word_count = len(text.split())
    
    # Count characters
    char_count = len(text)
    
    # Make it all uppercase
    shouty_text = text.upper()
    
    return {
        "words": word_count,
        "characters": char_count,
        "loud_version": shouty_text
    }`,
    category: 'strings'
  }
];

interface CodeExplanationProps {
  analysis: CodeAnalysis;
}

const CodeExplanation: React.FC<CodeExplanationProps> = ({ analysis }) => {
  return (
    <div className="relative space-y-6 p-6 bg-black bg-opacity-40 rounded-2xl border border-red-500/20 backdrop-blur-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-purple-500/5 rounded-2xl">
        <div className="absolute inset-0 animate-pulse bg-gradient-to-t from-red-500/0 via-red-500/5 to-purple-500/0" />
      </div>

      <div className="relative">
        <div className="flex items-center space-x-3 mb-6">
          <div className="relative">
            <BookOpen className="w-6 h-6 text-red-400" />
            <div className="absolute inset-0 animate-ping bg-red-500 rounded-full opacity-20" />
          </div>
          <h2 className="text-xl font-light text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
            Code Breakdown
          </h2>
        </div>

        <div className="grid gap-6">
          {/* Magic Explained */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/10 to-purple-900/10 border border-red-500/20">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <h3 className="text-green-400 font-light">✨ Magic Explained</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {analysis.magic_explained || "Let's see what your code does! ✨"}
            </p>
          </div>

          {/* Code Adventure */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/10 to-purple-900/10 border border-red-500/20">
            <div className="flex items-center space-x-2 mb-3">
              <Brain className="w-4 h-4 text-purple-400" />
              <h3 className="text-purple-400 font-light">🔍 Code Adventure</h3>
            </div>
            <div className="space-y-2">
              {analysis.code_adventure.map((step, index) => (
                <p key={index} className="text-gray-300 text-sm leading-relaxed">{step}</p>
              ))}
            </div>
          </div>

          {/* Clever Choices */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/10 to-purple-900/10 border border-red-500/20">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <h3 className="text-yellow-400 font-light">💡 Clever Choices</h3>
            </div>
            <div className="space-y-2">
              {analysis.clever_choices.map((choice, index) => (
                <p key={index} className="text-gray-300 text-sm leading-relaxed">{choice}</p>
              ))}
            </div>
          </div>

          {/* Speed Check */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/10 to-purple-900/10 border border-red-500/20">
            <div className="flex items-center space-x-2 mb-3">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <h3 className="text-blue-400 font-light">⚡ Speed Check</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {analysis.speed_check || "Let's check your code's performance! ⚡"}
            </p>
          </div>

          {/* Level-Up Ideas */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/10 to-purple-900/10 border border-red-500/20">
            <div className="flex items-center space-x-2 mb-3">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              <h3 className="text-yellow-400 font-light">🎯 Level-Up Ideas</h3>
            </div>
            <div className="space-y-2">
              {analysis.level_up_ideas.map((idea, index) => (
                <p key={index} className="text-gray-300 text-sm leading-relaxed">{idea}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-red-900/10 to-purple-900/10 border border-red-500/20">
          <p className="text-gray-300 text-sm leading-relaxed">
            {analysis.closing}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [codeInput, setCodeInput] = useState('');
  const [analyzing, setAnalyzing] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [analysis, setAnalysis] = useState<CodeAnalysis>({
    welcome: '',
    magic_explained: '',
    code_adventure: [],
    clever_choices: [],
    speed_check: '',
    level_up_ideas: [],
    closing: ''
  });

  const filteredExamples = CODE_EXAMPLES.filter(example => 
    (selectedCategory === 'all' || example.category === selectedCategory) &&
    (example.title.toLowerCase().includes(searchText.toLowerCase()) ||
     example.description.toLowerCase().includes(searchText.toLowerCase()))
  );

  const analyzeCode = async () => {
    setAnalyzing(true);
    try {
      const response = await fetch('http://localhost:8000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: codeInput,
          language: 'python'
        })
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (error) {
      console.error('Error analyzing code:', error);
    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-purple-500/5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-500/0 via-red-500/[0.03] to-red-500/0" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float delay-1000" />
        </div>
      </div>

      <div className="container mx-auto p-8 relative">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="relative group">
            <Code className="w-8 h-8 text-red-400 relative z-10" />
            <div className="absolute inset-0 bg-red-400/20 rounded-full animate-pulse" />
          </div>
          <h1 className="text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
            Code Explorer
          </h1>
          <div className="flex items-center space-x-2 ml-4">
            <Brain className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-xs text-red-400">Learning Mode Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Example Library */}
          <div className="space-y-4">
            <div className="bg-black bg-opacity-40 rounded-2xl border border-red-500/20 backdrop-blur-xl overflow-hidden">
              <div className="p-4 border-b border-red-500/20">
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4 text-red-400" />
                  <h2 className="text-lg font-light text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400">
                    Code Examples
                  </h2>
                </div>
              </div>

              {/* Search & Categories */}
              <div className="p-4 space-y-3">
                <div className="relative">
                  <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search for examples..."
                    className="w-full bg-black/30 border border-red-500/20 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-red-500/50 pl-10"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-red-400/50" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {['all', 'basics', 'data', 'strings'].map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedCategory(type)}
                      className={`px-4 py-1.5 text-xs rounded-full transition-all duration-300 border 
                                ${selectedCategory === type 
                                  ? 'bg-red-500/20 border-red-500/50 text-red-400' 
                                  : 'bg-black/30 border-red-500/20 text-gray-400 hover:border-red-500/30'}`}
                    >
                      {type === 'all' ? 'All Examples' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Example List */}
              <div className="max-h-96 overflow-y-auto">
                {filteredExamples.map(example => (
                  <div
                    key={example.id}
                    onClick={() => {
                      setCodeInput(example.code);
                    }}
                    className="relative p-4 border-b border-red-500/20 cursor-pointer group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-purple-500/0 group-hover:from-red-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                    
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Code className="w-4 h-4 text-red-400" />
                        <span className="font-light text-gray-200">{example.title}</span>
                      </div>
                      <Share2 className="w-4 h-4 text-gray-500 group-hover:text-red-400" />
                    </div>
                    <p className="mt-1 text-sm text-gray-400">{example.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Code Editor and Analysis */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Code Editor */}

            <div className="rounded-2xl border border-red-500/20 overflow-hidden backdrop-blur-xl">
              <div className="flex items-center px-4 py-2 border-b border-red-500/20 bg-black/40">
                <Code className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-sm text-gray-300">your_code.py</span>
              </div>
              
              <textarea
                value={codeInput}
                onChange={(e) => setCodeInput(e.target.value)}
                className="w-full h-96 bg-black bg-opacity-80 text-red-400 p-4 resize-none focus:outline-none font-mono"
                placeholder="Type or paste your code here, or choose an example!"
                spellCheck="false"
              />
            </div>

            {/* Analyze Button */}
            <button
              onClick={analyzeCode}
              disabled={analyzing || !codeInput.trim()}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-red-500/20 to-purple-500/20 
                       hover:from-red-500/30 hover:to-purple-500/30 border border-red-500/20
                       disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300
                       flex items-center justify-center space-x-2"
            >
              {analyzing ? (
                <Radio className="w-4 h-4 animate-spin" />
              ) : (
                <Brain className="w-4 h-4" />
              )}
              <span>{analyzing ? 'Analyzing Your Code...' : 'Explain This Code!'}</span>
            </button>

            {/* Analysis Display */}
            {(analysis.magic_explained || analysis.code_adventure.length > 0) && (
              <CodeExplanation analysis={analysis} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}