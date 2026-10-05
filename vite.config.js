import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

export default defineConfig({
  server: {
    port: 3000,
    open: false,
    host: true
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        agenticPlatform: resolve(import.meta.dirname, 'agentic-ai-platform.html'),
        agentBuilder: resolve(import.meta.dirname, 'platform-ai-agent-builder.html'),
        knowledgeBase: resolve(import.meta.dirname, 'platform-conversational-knowledge-base.html'),
        copilot: resolve(import.meta.dirname, 'platform-ai-copilot.html'),
        automatedTesting: resolve(import.meta.dirname, 'platform-automated-testing.html'),
        analytics: resolve(import.meta.dirname, 'platform-ai-analytics.html'),
        integrations: resolve(import.meta.dirname, 'platform-integrations.html'),
        security: resolve(import.meta.dirname, 'platform-enterprise-grade-security.html'),
        nexus: resolve(import.meta.dirname, 'nexus.html'),
        nexusVox: resolve(import.meta.dirname, 'nexus-vox.html'),
        nexusEdge: resolve(import.meta.dirname, 'nexus-edge.html'),
        textAutomation: resolve(import.meta.dirname, 'text-automation.html'),
        customerService: resolve(import.meta.dirname, 'conversational-ai-customer-service.html'),
        employeeExperience: resolve(import.meta.dirname, 'employee-experience-ai.html'),
        industries: resolve(import.meta.dirname, 'industries.html'),
        pricing: resolve(import.meta.dirname, 'pricing.html'),
        caseStudy: resolve(import.meta.dirname, 'case-study.html'),
        roiCalculator: resolve(import.meta.dirname, 'roi-calculator.html'),
        requestDemo: resolve(import.meta.dirname, 'request-demo.html'),
        aboutUs: resolve(import.meta.dirname, 'about-us.html')
      }
    }
  },
  plugins: [
    {
      name: 'html-rewrite-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && !req.url.includes('.') && req.url !== '/') {
            const cleanPath = req.url.split('?')[0].replace(/\/$/, '');
            const filePath = resolve(import.meta.dirname, `${cleanPath.slice(1)}.html`);
            if (fs.existsSync(filePath)) {
              req.url = `${cleanPath}.html${req.url.includes('?') ? '?' + req.url.split('?')[1] : ''}`;
            }
          }
          next();
        });
      }
    }
  ]
});
