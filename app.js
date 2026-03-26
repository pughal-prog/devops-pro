const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>DevOps Pipeline App</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
          }
          .container {
            text-align: center;
            padding: 50px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
            max-width: 700px;
            width: 90%;
          }
          h1 { font-size: 2.5rem; margin-bottom: 10px; color: #e94560; }
          .subtitle { font-size: 1rem; color: #a8b2d8; margin-bottom: 30px; }
          .status {
            display: inline-block;
            background: #00b894;
            color: white;
            padding: 8px 20px;
            border-radius: 20px;
            font-weight: bold;
            margin-bottom: 30px;
          }
          .tools {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-top: 20px;
          }
          .tool {
            background: rgba(255,255,255,0.1);
            padding: 15px;
            border-radius: 10px;
            font-size: 0.9rem;
          }
          .tool span { font-size: 1.5rem; display: block; margin-bottom: 5px; }
          .footer { margin-top: 30px; color: #a8b2d8; font-size: 0.8rem; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 DevOps Pipeline App</h1>
          <p class="subtitle">Full Stack DevOps Project by pughal-prog</p>
          <div class="status">✅ Status: Healthy & Running</div>
          <p style="margin-bottom:20px; color:#a8b2d8;">Deployed on AWS EKS using a fully automated CI/CD pipeline</p>
          <div class="tools">
            <div class="tool"><span>🐙</span>GitHub</div>
            <div class="tool"><span>⚙️</span>GitHub Actions</div>
            <div class="tool"><span>🐳</span>Docker</div>
            <div class="tool"><span>🏗️</span>Terraform</div>
            <div class="tool"><span>☸️</span>Kubernetes</div>
            <div class="tool"><span>🔧</span>Jenkins</div>
          </div>
          <div class="footer">
            <p>Running on Node.js | AWS EKS | us-east-1</p>
            <p>Version 1.0.0</p>
          </div>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.get('/api/info', (req, res) => {
  res.json({
    app: 'DevOps Pipeline App',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
