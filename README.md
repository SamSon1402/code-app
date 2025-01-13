<!DOCTYPE html>
<html>
<head>
<style>
  body {
    background: linear-gradient(to bottom, #0a0a2a, #1a1a3a);
    color: #e0e0ff;
    font-family: 'Space Mono', monospace;
    line-height: 1.6;
    padding: 20px;
  }
  
  .header {
    background: linear-gradient(45deg, #2b2b7e, #1e1e5c);
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 20px rgba(88, 88, 255, 0.2);
    margin-bottom: 30px;
  }
  
  .title {
    color: #00ffff;
    text-align: center;
    text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    font-size: 2.5em;
    margin: 0;
  }
  
  .station {
    color: #50fa7b;
    font-family: monospace;
    white-space: pre;
    text-align: center;
    margin: 20px 0;
  }
  
  .section {
    background: rgba(30, 30, 70, 0.6);
    border-left: 4px solid #00ffff;
    padding: 20px;
    margin: 20px 0;
    border-radius: 0 10px 10px 0;
  }
  
  .section h2 {
    color: #ff79c6;
    margin-top: 0;
  }
  
  .tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  
  .tech-item {
    background: rgba(40, 40, 90, 0.6);
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #8be9fd;
  }
  
  .status {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 15px;
    background: #50fa7b;
    color: #282a36;
    font-weight: bold;
  }
  
  .code-block {
    background: #282a36;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #bd93f9;
    font-family: monospace;
    overflow-x: auto;
  }
  
  .feature-list {
    list-style: none;
    padding: 0;
  }
  
  .feature-item {
    margin: 10px 0;
    padding: 10px;
    background: rgba(40, 40, 90, 0.4);
    border-radius: 5px;
    border-left: 3px solid #50fa7b;
  }
  
  .glow {
    animation: glow 2s ease-in-out infinite alternate;
  }
  
  @keyframes glow {
    from {
      text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #0073e6, 0 0 20px #0073e6;
    }
    to {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0073e6, 0 0 40px #0073e6;
    }
  }
  
  .pulse {
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.8;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .cosmic-dust {
    position: fixed;
    width: 2px;
    height: 2px;
    background: white;
    border-radius: 50%;
    opacity: 0.5;
    animation: twinkle 1s infinite;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.5; }
    50% { opacity: 1; }
    100% { opacity: 0.5; }
  }
</style>
</head>
<body>

<div class="header">
  <h1 class="title glow">⚡ CODE/EXPLORER ⚡</h1>
  <p class="subtitle" style="text-align: center; color: #8be9fd;">Navigate the Code Universe</p>
</div>

<div class="station">
                     /\
                    /  \
                   / /\ \
                  / /  \ \
                 / /    \ \
                /_/      \_\
          _____/  \      /  \_____
         /     \  /      \  /     \
        /       \/        \/       \
        \       /\        /\       /
         \_____/  \      /  \_____/
                \_/      \_/
</div>

<div class="section">
  <h2>🚀 PROJECT OVERVIEW</h2>
  <p>An AI-powered programming tutor that helps users learn coding through intelligent analysis and personalized feedback.</p>
</div>

<div class="section">
  <h2>💫 CORE SYSTEMS</h2>
  <ul class="feature-list">
    <li class="feature-item">🔍 SCAN - Code Analysis & Review</li>
    <li class="feature-item">⭐ PRIME - Best Practices Engine</li>
    <li class="feature-item">⚡ BOOST - Performance Optimization</li>
    <li class="feature-item">🔄 SYNC - Real-time Feedback Loop</li>
    <li class="feature-item">🌍 BABEL - Multi-Language Support</li>
  </ul>
</div>

<div class="section">
  <h2>🛸 TECH CONSTELLATION</h2>
  <div class="tech-grid">
    <div class="tech-item">🌟 FRONTEND<br>React + TypeScript + Vite</div>
    <div class="tech-item">🌟 BACKEND<br>Python + FastAPI</div>
    <div class="tech-item">🌟 AI_CORE<br>OpenAI GPT-4</div>
    <div class="tech-item">🌟 PLATFORM<br>Vercel</div>
  </div>
</div>

<div class="section">
  <h2>🌌 REQUIREMENTS</h2>
  <div class="code-block">
├── 🛠️ Node.js (v16+)
├── 🐍 Python 3.9+
├── 📦 npm/yarn
└── 🔑 OpenAI API Key
  </div>
</div>

<div class="section">
  <h2>🌠 LAUNCH SEQUENCE</h2>
  <div class="code-block">
# Clone Repository
git clone [your-repository-url]
cd programming-tutor

# Frontend Setup
cd frontend
npm install
npm run dev

# Backend Setup
cd backend
python -m venv venv
pip install -r requirements.txt
  </div>
</div>

<div class="section">
  <h2>✨ CONTRIBUTION PROTOCOL</h2>
  <div class="code-block">
1. Fork Repository
2. Create Branch
3. Commit Changes
4. Push Branch
5. Create Pull Request
  </div>
</div>

<footer style="text-align: center; margin-top: 40px; padding: 20px; background: rgba(30, 30, 70, 0.6); border-radius: 10px;">
  <div class="pulse">
    <h3 style="color: #50fa7b;">[ MISSION CONTROL CENTER ]</h3>
    <p style="color: #8be9fd;">Exploring the Code Universe, One Commit at a Time</p>
    <span class="status">🌟 STATUS: ONLINE 🌟</span>
  </div>
</footer>

<script>
// Add cosmic dust effect
function createCosmicDust() {
  const dust = document.createElement('div');
  dust.className = 'cosmic-dust';
  dust.style.left = Math.random() * window.innerWidth + 'px';
  dust.style.top = Math.random() * window.innerHeight + 'px';
  document.body.appendChild(dust);
}

for (let i = 0; i < 50; i++) {
  createCosmicDust();
}
</script>

</body>
</html>
