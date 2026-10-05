const fs = require('fs');
const path = require('path');

// Extract the navbar and footer from index.html so they are 100% synchronized
const indexHtml = fs.readFileSync('c:/Users/jayan/Desktop/yellow_ai/index.html', 'utf8');

const navStart = indexHtml.indexOf('<!-- ===================================================================\n       1. TOP ANNOUNCEMENT BAR');
const heroStart = indexHtml.indexOf('<!-- ===================================================================\n       3. HERO SECTION');
const commonNav = indexHtml.substring(navStart, heroStart);

const footerStart = indexHtml.indexOf('<!-- ===================================================================\n       10. LIVE INTERACTIVE FLOATING AI BOT');
const scriptsStart = indexHtml.indexOf('<!-- Scripts -->');
const commonFooter = indexHtml.substring(footerStart, scriptsStart);

const commonScripts = `  <!-- Scripts -->
  <script type="module" src="/js/main.js"></script>
  <script type="module" src="/js/slider.js"></script>
  <script type="module" src="/js/roi-calculator.js"></script>
  <script type="module" src="/js/ai-bot.js"></script>
</body>
</html>`;

function createPage(filename, title, description, contentHtml, isDarkHero = false) {
  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${title} | Yellow.ai</title>
  <meta name="description" content="${description}">
  <link rel="icon" type="image/webp" href="https://yellow.ai/wp-content/uploads/2025/09/Favicon-48x48.webp">
  
  <!-- Stylesheets -->
  <link rel="stylesheet" href="/css/yellow-theme.css">
  <link rel="stylesheet" href="/css/navbar.css">
  <link rel="stylesheet" href="/css/components.css">
  <link rel="stylesheet" href="/css/pages.css">
</head>
<body class="has-announcement">
${commonNav}
${contentHtml}
${commonFooter}
${commonScripts}
`;

  fs.writeFileSync(path.join('c:/Users/jayan/Desktop/yellow_ai', filename), fullHtml, 'utf8');
  console.log(`Created ${filename}`);
}

// 1. Agentic AI Platform
createPage(
  'agentic-ai-platform.html',
  'Enterprise-Grade Agentic AI Platform',
  'Leverage 15+ cutting-edge LLMs to orchestrate autonomous AI workforces with multi-agent reasoning and zero hallucinations.',
  `
  <section class="subpage-hero dark-theme">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow dark">Autonomous Architecture</span>
          <h1 class="section-title light">Enterprise-Grade Agentic AI Platform</h1>
          <p class="section-subtitle light">Orchestrate multi-agent workforces with persistent memory, autonomous tool execution, and dynamic LLM routing tailored for high-security enterprise environments.</p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="/request-demo.html" class="btn btn-yellow btn-lg">Book Platform Demo</a>
            <a href="/platform-ai-agent-builder.html" class="btn btn-outline-white btn-lg">Explore Agent Builder &rarr;</a>
          </div>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/Frame-427321079-1.webp" alt="Agentic AI Platform Diagram" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>

  <section style="padding:6rem 0;background:#FFFFFF;">
    <div class="wrap">
      <div style="text-align:center;max-width:800px;margin:0 auto 4rem;">
        <span class="section-eyebrow">Next-Generation Orchestration</span>
        <h2 class="section-title">Built from the ground up for autonomous task resolution</h2>
        <p class="section-subtitle" style="margin:0 auto;">Unlike brittle keyword chatbots, Yellow.ai AI Agents decompose complex goals into discrete subtasks, query enterprise databases, execute API transactions, and verify outcomes.</p>
      </div>

      <div class="features-grid-3">
        <div class="feature-box">
          <div class="feature-box-icon">&#129302;</div>
          <h4>Multi-Agent Collaboration</h4>
          <p>Deploy specialized agent teams: Triage agents assess intent, Specialist agents execute domain APIs, and Supervisor agents validate compliance before responding.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#9889;</div>
          <h4>Dynamic LLM Router</h4>
          <p>Intelligently balances speed, accuracy, and token costs by routing each prompt across GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, and private fine-tuned open-source models.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#128274;</div>
          <h4>Zero-Data Retention & Guardrails</h4>
          <p>Real-time PII redaction, prompt injection defense, and strict enterprise hallucination benchmarks prevent brand risk and protect confidential enterprise records.</p>
        </div>
      </div>

      <div style="margin-top:5rem;background:#F8FAFC;border:1px solid #E2E8F0;border-radius:2rem;padding:3.5rem;display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:center;">
        <div>
          <span class="section-eyebrow">Benchmark Results</span>
          <h3 style="font-size:2rem;font-weight:800;color:#0F172A;margin-bottom:1rem;">Superior intent accuracy with patent-pending DynamicNLP&trade;</h3>
          <p style="color:#4B5563;line-height:1.6;margin-bottom:1.5rem;">Pre-trained on billions of enterprise conversations across 135+ languages. Yellow.ai delivers zero-shot accuracy straight out of the box with zero upfront manual training required.</p>
          <ul class="feature-bullets">
            <li><span class="icon">&check;</span> 97.4% benchmarked intent comprehension accuracy</li>
            <li><span class="icon">&check;</span> Continuous learning loops ingest resolved human agent transcripts</li>
            <li><span class="icon">&check;</span> Full semantic audit log with step-by-step reasoning traces</li>
          </ul>
        </div>
        <div>
          <img src="https://yellow.ai/wp-content/uploads/2025/09/new3.webp" alt="Analytics Benchmark" style="width:100%;border-radius:1.5rem;box-shadow:0 15px 35px rgba(0,0,0,0.06);">
        </div>
      </div>
    </div>
  </section>
`
);

// 2. AI Agent Builder 2.0
createPage(
  'platform-ai-agent-builder.html',
  'AI Agent Builder 2.0 | Design, Orchestrate, and Deploy',
  'Create powerful enterprise-ready agents for any channel in minutes with visual drag-and-drop and natural language prompt generation.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Studio 2.0</span>
          <h1 class="section-title">Design, Orchestrate, and Deploy AI Agents in Minutes</h1>
          <p class="section-subtitle">Empower both product managers and developers with intuitive visual canvas workflows, natural language prompt generation, and instant sandboxed test environments.</p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="/request-demo.html" class="btn btn-violet btn-lg">Launch Studio Demo</a>
            <a href="/platform-conversational-knowledge-base.html" class="btn btn-outline-dark btn-lg">Connect Knowledge Base &rarr;</a>
          </div>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/12.webp" alt="Agent Builder Studio" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>

  <section style="padding:6rem 0;background:#FFFFFF;">
    <div class="wrap">
      <div class="features-grid-3">
        <div class="feature-box">
          <div class="feature-box-icon">&#9997;</div>
          <h4>Prompt-to-Agent Studio</h4>
          <p>Type "Build a flight rescheduling agent with baggage add-ons and payment verification" and the Builder automatically constructs the entire logical journey with API hooks.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#128260;</div>
          <h4>Visual Logic Canvas</h4>
          <p>Drag, drop, and link conditional decision nodes, API calls, LLM prompt steps, and human escalation triggers with zero code required.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#128373;</div>
          <h4>Live Sandbox Simulator</h4>
          <p>Test conversational branches in real time. Inspect token usage, prompt variables, API payload responses, and step latencies side-by-side.</p>
        </div>
      </div>
    </div>
  </section>
`
);

// 3. Conversational Knowledge Base (Agentic RAG)
createPage(
  'platform-conversational-knowledge-base.html',
  'Conversational Knowledge Base | Agentic RAG',
  'Turn unstructured enterprise data into instant conversational answers with patent-pending Agentic RAG and real-time indexing.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Agentic RAG Engine</span>
          <h1 class="section-title">Turn Enterprise Knowledge into Autonomous Answers</h1>
          <p class="section-subtitle">Connect SharePoint, Zendesk, Salesforce Knowledge, Google Drive, and PDFs. Agentic RAG extracts, re-ranks, and cites verifiable answers with zero hallucinations.</p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="/request-demo.html" class="btn btn-yellow btn-lg">Schedule Knowledge Demo</a>
            <a href="/agentic-ai-platform.html" class="btn btn-outline-dark btn-lg">View RAG Architecture</a>
          </div>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/Frame.webp" alt="Knowledge Base Interface" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>

  <section style="padding:6rem 0;background:#F8FAFC;">
    <div class="wrap">
      <div class="features-grid-3">
        <div class="feature-box">
          <div class="feature-box-icon">&#128196;</div>
          <h4>Automated Data Connectors</h4>
          <p>Sync structured CRM databases, ticketing history, product manuals, warranty clauses, and policy docs automatically with real-time webhook updates.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#128269;</div>
          <h4>Hybrid Semantic Search</h4>
          <p>Combines dense vector embeddings with sparse keyword BM25 retrieval and cross-encoder re-ranking for pinpoint accuracy on dense technical documentation.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#9989;</div>
          <h4>Source Citations & Guardrails</h4>
          <p>Every response includes direct footnote citations linked back to specific source document pages and paragraph excerpts for complete customer trust.</p>
        </div>
      </div>
    </div>
  </section>
`
);

// 4. AI Copilot
createPage(
  'platform-ai-copilot.html',
  'AI Copilot for Contact Centers & Support Agents',
  'Empower human support teams with real-time suggested replies, auto-generated case summaries, and instant knowledge retrieval.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Human + AI Synergy</span>
          <h1 class="section-title">The Real-Time AI Copilot for Enterprise Support Agents</h1>
          <p class="section-subtitle">Slash average handle time by 45%. AI Copilot listens to voice calls and reads customer chats in real time, auto-suggesting answers, fetching CRM data, and drafting case notes.</p>
          <a href="/request-demo.html" class="btn btn-violet btn-lg">See Copilot in Action</a>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/new3.webp" alt="Copilot Cockpit" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>
`
);

// 5. Automated Testing
createPage(
  'platform-automated-testing.html',
  'Automated Testing Suite | Hallucination Prevention',
  'Ship reliable AI agents faster with autonomous synthetic user simulations, regression testing, and hallucination benchmarking.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Reliability & Trust</span>
          <h1 class="section-title">Ship Reliable AI Agents Faster with Automated Testing</h1>
          <p class="section-subtitle">Synthetic user personas test thousands of edge cases, tone adherence, and security boundaries in minutes prior to production deployment.</p>
          <a href="/request-demo.html" class="btn btn-yellow btn-lg">Request Testing Walkthrough</a>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/Frame-427321079-1.webp" alt="Automated Testing" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>
`
);

// 6. AI Analytics (Analyze)
createPage(
  'platform-ai-analytics.html',
  'AI Analytics & Optimization Engine',
  'Real-time customer sentiment analysis, deflection rate heatmaps, and AI-driven automation opportunity discovery.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Actionable Insights</span>
          <h1 class="section-title">Discover Powerful Analytics for AI Agent Optimization</h1>
          <p class="section-subtitle">Gain full visibility into every interaction. Understand deflection drop-offs, customer sentiment fluctuations, and bot-to-human handover bottlenecks.</p>
          <a href="/request-demo.html" class="btn btn-violet btn-lg">Explore Analytics Dashboard</a>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/new3.webp" alt="Analytics Dashboard" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>
`
);

// 7. Integrations
createPage(
  'platform-integrations.html',
  '100+ Enterprise Integrations | Yellow.ai Ecosystem',
  'Seamlessly connect Yellow.ai with Salesforce, Zendesk, ServiceNow, Genesys, Microsoft Teams, WhatsApp, and 100+ platforms.',
  `
  <section class="subpage-hero" style="text-align:center;">
    <div class="wrap">
      <span class="section-eyebrow">Connect Everything</span>
      <h1 class="section-title">100+ Pre-Built Enterprise Integrations</h1>
      <p class="section-subtitle" style="margin:0 auto 2.5rem;">Plug Yellow.ai autonomous agents into your existing CRM, contact center, ERP, and messaging channels with turnkey security.</p>
      
      <div class="integrations-search-bar">
        <input type="text" placeholder="Search 100+ connectors (e.g. Salesforce, Zendesk, Twilio, SAP)...">
        <button class="btn btn-violet btn-sm">Search</button>
      </div>
    </div>
  </section>

  <section class="integrations-directory">
    <div class="wrap">
      <div class="integrations-grid">
        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">SF</div>
            <h5>Salesforce CRM</h5>
          </div>
          <p>Sync customer records, read contact history, create leads, and trigger automated support cases.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>

        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">ZD</div>
            <h5>Zendesk Suite</h5>
          </div>
          <p>Auto-deflect incoming tickets, update macros, and provide seamless live agent handover.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>

        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">SN</div>
            <h5>ServiceNow</h5>
          </div>
          <p>Automate employee IT requests, password resets, hardware provisioning, and incident tickets.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>

        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">GN</div>
            <h5>Genesys Cloud</h5>
          </div>
          <p>Deploy sub-300ms Voice AI agents onto telephony IVRs with bi-directional audio streaming.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>

        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">HS</div>
            <h5>HubSpot</h5>
          </div>
          <p>Qualify inbound leads 24/7, book meetings on rep calendars, and update pipeline deals.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>

        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">WA</div>
            <h5>WhatsApp Business</h5>
          </div>
          <p>Official WhatsApp BSP with rich interactive catalogs, payments, and 2-way verified messaging.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>

        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">MS</div>
            <h5>Microsoft Teams</h5>
          </div>
          <p>Deliver internal workplace assistant capabilities inside Teams for HR, IT, and Finance queries.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>

        <div class="integration-box">
          <div class="integration-box-header">
            <div class="integration-logo-badge">TW</div>
            <h5>Twilio Flex</h5>
          </div>
          <p>Integrate conversational voice and SMS with programmable telephony and SIP trunking.</p>
          <a href="/request-demo.html" class="btn btn-outline-dark btn-sm">Connect &rarr;</a>
        </div>
      </div>
    </div>
  </section>
`
);

// 8. Enterprise Security
createPage(
  'platform-enterprise-grade-security.html',
  'Enterprise-Grade Security, Privacy & Compliance',
  'SOC 2 Type II, ISO 27001, HIPAA, and GDPR certified enterprise AI with zero-data retention.',
  `
  <section class="subpage-hero dark-theme">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow dark">Trust & Security</span>
          <h1 class="section-title light">Enterprise-Grade Security Built for Regulated Industries</h1>
          <p class="section-subtitle light">Protect enterprise customer data with strict isolation, zero-data retention policies with LLM providers, and real-time automated PII anonymization.</p>
          <a href="/request-demo.html" class="btn btn-yellow btn-lg">Request Security Whitepaper</a>
        </div>
        <div class="subpage-visual-card">
          <div style="background:#111;padding:2rem;border-radius:1rem;color:#FFF;">
            <p style="color:var(--yellow-primary);font-weight:700;margin-bottom:1rem;">&check; Certified & Audited Standards</p>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:0.75rem;font-size:0.95rem;">
              <li>&bull; <strong>SOC 2 Type II:</strong> Annual independent third-party audits</li>
              <li>&bull; <strong>ISO 27001, 27017, 27018:</strong> Complete cloud security governance</li>
              <li>&bull; <strong>HIPAA & HITECH:</strong> Signed BAAs for healthcare compliance</li>
              <li>&bull; <strong>GDPR & CCPA:</strong> Right to be forgotten and data localization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
`
);

// 9. Nexus Universal Platform
createPage(
  'nexus.html',
  'Nexus by Yellow.ai | Universal Agentic Platform',
  'The universal agentic platform built to design, deploy, and self-heal AI agent workforces across enterprises.',
  `
  <section class="subpage-hero dark-theme">
    <div class="wrap" style="text-align:center;">
      <span class="section-eyebrow dark">The Universal Engine</span>
      <h1 class="section-title light" style="font-size:clamp(3rem,6vw,5rem);">Nexus by Yellow.ai</h1>
      <p class="section-subtitle light" style="margin:0 auto 3rem;max-width:800px;">The next evolutionary leap in autonomous enterprise AI. Design, orchestrate, and self-heal multi-agent fleets across every operational department.</p>
      <div style="display:flex;justify-content:center;gap:1.5rem;flex-wrap:wrap;">
        <a href="/nexus-vox.html" class="btn btn-yellow btn-lg">Explore Nexus VOX (Voice)</a>
        <a href="/nexus-edge.html" class="btn btn-outline-white btn-lg">Discover Nexus EDGE (Desktop)</a>
      </div>
    </div>
  </section>
`
);

// 10. Nexus VOX (Voice AI)
createPage(
  'nexus-vox.html',
  'Nexus VOX | Enterprise Voice AI Agents',
  'Deploy enterprise voice AI agents that answer, act, and resolve calls in 500+ languages with sub-300ms latency.',
  `
  <section class="subpage-hero dark-theme">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow dark">Sub-300ms Latency</span>
          <h1 class="section-title light">Human-Like Voice AI Agents for Enterprise Telephony</h1>
          <p class="section-subtitle light">Deliver fluid, natural phone conversations with zero awkward pauses. Nexus VOX handles interruptions, backchanneling, and emotional tone shifts across 500+ languages and accents.</p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="/request-demo.html" class="btn btn-yellow btn-lg">Experience Voice Live</a>
            <a href="/conversational-ai-customer-service.html" class="btn btn-outline-white btn-lg">Customer Service AI &rarr;</a>
          </div>
        </div>
        <div class="subpage-visual-card">
          <div style="background:#111;padding:2rem;border-radius:1rem;color:#FFF;text-align:center;">
            <p style="font-size:0.85rem;color:#9CA3AF;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:0.5rem;">Live Audio Latency Benchmark</p>
            <p style="font-size:3.5rem;font-weight:800;color:var(--yellow-primary);margin-bottom:0.5rem;">285ms</p>
            <p style="color:#D1D5DB;font-size:0.9rem;">From caller voice endpoint to synthesized audio response</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`
);

// 11. Nexus EDGE
createPage(
  'nexus-edge.html',
  'Nexus EDGE | Agentic Desktop Ally for Employees',
  'The agentic desktop ally built for employee experience automation with on-device privacy and human approval on every action.',
  `
  <section class="subpage-hero dark-theme">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow dark">Desktop Agentic AI</span>
          <h1 class="section-title light">Meet Nexus EDGE: The Agentic Desktop Ally</h1>
          <p class="section-subtitle light">Empower employees with an autonomous desktop companion. It performs complex multi-application tasks, fills expense sheets, and retrieves files with human approval on every action.</p>
          <a href="/request-demo.html" class="btn btn-yellow btn-lg">Request EDGE Access</a>
        </div>
        <div class="subpage-visual-card">
          <div class="nexus-menu-promo" style="padding:2.5rem;">
            <h3 class="nexus-menu-promo-title" style="font-size:2rem;">Nexus EDGE</h3>
            <p class="nexus-menu-promo-lead">On-device privacy architecture ensures confidential enterprise credentials never leave your secure perimeter.</p>
            <ul class="nexus-menu-promo-list">
              <li>Human approval on sensitive transactions</li>
              <li>Cross-app browser & ERP automation</li>
              <li>Zero-latency local indexing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
`
);

// 12. Text & Chat Automation
createPage(
  'text-automation.html',
  'Text & Chat Automation | WhatsApp, Web & Social',
  'Automate omnichannel customer messaging across WhatsApp, Instagram, Messenger, SMS, and Web with rich interactive UI.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Omnichannel Text</span>
          <h1 class="section-title">Automate Customer Chat on 35+ Messaging Channels</h1>
          <p class="section-subtitle">Engage customers where they already spend time: WhatsApp, Instagram DMs, Web Chat, Apple Messages, and SMS. Deliver rich carousels, payment links, and instant deflection.</p>
          <a href="/request-demo.html" class="btn btn-violet btn-lg">Explore Text Automation</a>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/Frame.webp" alt="Chat automation interface" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>
`
);

// 13. Customer Service Automation
createPage(
  'conversational-ai-customer-service.html',
  'Conversational AI for Customer Service | 90% Deflection',
  'Automate up to 90% of customer support queries across voice and digital channels while increasing CSAT scores.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Autonomous Resolution</span>
          <h1 class="section-title">Deliver Instant, Memorable Customer Service 24/7</h1>
          <p class="section-subtitle">Empower your brand to resolve support tickets end-to-end. AI agents authenticate users, check order statuses, process refunds, and troubleshoot technical issues in seconds.</p>
          <div style="display:flex;gap:1rem;flex-wrap:wrap;">
            <a href="/request-demo.html" class="btn btn-violet btn-lg">Book Service Demo</a>
            <a href="/case-study.html" class="btn btn-outline-dark btn-lg">Read Customer Stories &rarr;</a>
          </div>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/12.webp" alt="Customer Service Automation" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>
`
);

// 14. Employee Experience AI
createPage(
  'employee-experience-ai.html',
  'Employee Experience AI | IT & HR Service Desk Automation',
  'Automate workplace support for IT helpdesks, HR queries, and payroll questions directly within Slack and Microsoft Teams.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Workplace Efficiency</span>
          <h1 class="section-title">Elevate Employee Experience with Autonomous EX Agents</h1>
          <p class="section-subtitle">Free your internal IT and HR staff from repetitive tickets. Employees get instant software access, password resets, benefit clarifications, and onboarding guidance inside Teams and Slack.</p>
          <a href="/request-demo.html" class="btn btn-violet btn-lg">Transform Employee EX</a>
        </div>
        <div class="subpage-visual-card">
          <img src="https://yellow.ai/wp-content/uploads/2025/09/Frame-427321079-1.webp" alt="Employee Experience" style="width:100%;border-radius:1rem;">
        </div>
      </div>
    </div>
  </section>
`
);

// 15. Industry Solutions
createPage(
  'industries.html',
  'Industry Solutions | BFSI, Healthcare, Retail & Utilities',
  'Tailored agentic AI solutions engineered for high compliance across banking, insurance, healthcare, e-commerce, and energy.',
  `
  <section class="subpage-hero" style="text-align:center;">
    <div class="wrap">
      <span class="section-eyebrow">Specialized AI</span>
      <h1 class="section-title">Tailored Agentic AI for Every Industry</h1>
      <p class="section-subtitle" style="margin:0 auto 3rem;">Pre-built domain intent models, compliance safeguards, and core system connectors built for vertical leadership.</p>
    </div>
  </section>

  <section style="padding:4rem 0 7rem;background:#FFFFFF;">
    <div class="wrap">
      <div class="features-grid-3">
        <div class="feature-box">
          <div class="feature-box-icon">&#127974;</div>
          <h4>BFSI (Banking & Insurance)</h4>
          <p>Automate balance checks, card freezes, loan application pre-screening, and claim filing with SOC2 and PCI-DSS compliance.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#127973;</div>
          <h4>Healthcare & Pharma</h4>
          <p>HIPAA-compliant appointment booking, prescription refills, symptom checking, and insurance eligibility verification.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#128722;</div>
          <h4>Retail & E-commerce</h4>
          <p>Order tracking, exchange/returns handling, personalized cart recovery recommendations, and WhatsApp commerce.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#9889;</div>
          <h4>Utilities & Energy</h4>
          <p>Outage reporting, bill payments, meter reading submissions, and voice-assisted technician dispatch scheduling.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#9992;</div>
          <h4>Travel & Hospitality</h4>
          <p>Flight booking updates, hotel check-in modifications, baggage inquiries, and 24/7 multilingual traveler support.</p>
        </div>
        <div class="feature-box">
          <div class="feature-box-icon">&#128222;</div>
          <h4>Telecom</h4>
          <p>Plan upgrades, SIM activation, network troubleshooting, and automated invoice collections over voice and chat.</p>
        </div>
      </div>
    </div>
  </section>
`
);

// 16. Pricing
createPage(
  'pricing.html',
  'Pricing Plans | Transparent Enterprise ROI',
  'Flexible pricing designed for growing businesses to global Fortune 500 enterprises with guaranteed SLAs.',
  `
  <section class="subpage-hero" style="text-align:center;">
    <div class="wrap">
      <span class="section-eyebrow">Simple & Transparent</span>
      <h1 class="section-title">Pricing Built for Scale and Maximum ROI</h1>
      <p class="section-subtitle" style="margin:0 auto;">Choose the right tier to kickstart autonomous customer service and employee experience automation.</p>
    </div>
  </section>

  <section class="pricing-section">
    <div class="wrap">
      <div class="pricing-cards-grid">
        
        <!-- Starter Plan -->
        <div class="pricing-card">
          <h3 class="pricing-plan-name">Starter</h3>
          <p class="pricing-plan-desc">Essential AI agent automation for fast-growing digital teams.</p>
          <div class="pricing-price-tag">$499 <span>/ month</span></div>
          <ul class="pricing-features-list">
            <li>Up to 5,000 monthly interactions</li>
            <li>Web chat & Email automation</li>
            <li>AI Agent Builder 2.0</li>
            <li>Standard RAG knowledge connectors</li>
            <li>Email & community support</li>
          </ul>
          <a href="/request-demo.html" class="btn btn-outline-dark" style="width:100%;">Get Started</a>
        </div>

        <!-- Growth Plan -->
        <div class="pricing-card">
          <h3 class="pricing-plan-name">Growth</h3>
          <p class="pricing-plan-desc">For mid-market teams scaling customer service automation.</p>
          <div class="pricing-price-tag">$1,499 <span>/ month</span></div>
          <ul class="pricing-features-list">
            <li>Up to 25,000 monthly interactions</li>
            <li>WhatsApp Business & Social channels</li>
            <li>Dynamic LLM routing (GPT-4o, Claude)</li>
            <li>AI Copilot for 15 human agents</li>
            <li>Standard CRM integrations</li>
            <li>Business hours SLA</li>
          </ul>
          <a href="/request-demo.html" class="btn btn-outline-dark" style="width:100%;">Choose Growth</a>
        </div>

        <!-- Business Plan (Featured) -->
        <div class="pricing-card featured">
          <span class="pricing-badge-popular">Most Popular</span>
          <h3 class="pricing-plan-name">Business</h3>
          <p class="pricing-plan-desc">Complete voice and digital omnichannel automation for enterprises.</p>
          <div class="pricing-price-tag">$3,999 <span>/ month</span></div>
          <ul class="pricing-features-list">
            <li>Up to 100,000 monthly interactions</li>
            <li>Nexus VOX Voice AI agents included</li>
            <li>Agentic RAG with citations</li>
            <li>Automated testing & guardrails</li>
            <li>100+ Enterprise Connectors (Salesforce, Zendesk)</li>
            <li>24/7 dedicated support & CSM</li>
          </ul>
          <a href="/request-demo.html" class="btn btn-yellow" style="width:100%;">Start Business Trial</a>
        </div>

        <!-- Enterprise Custom -->
        <div class="pricing-card">
          <h3 class="pricing-plan-name">Enterprise</h3>
          <p class="pricing-plan-desc">Tailored multi-agent fleets, custom LLM fine-tuning, and VPC hosting.</p>
          <div class="pricing-price-tag">Custom</div>
          <ul class="pricing-features-list">
            <li>Unlimited interactions & global scale</li>
            <li>Custom fine-tuned domain models</li>
            <li>Private VPC / On-Premise deployment</li>
            <li>Zero-data retention agreements</li>
            <li>Custom 99.99% uptime SLA</li>
            <li>Dedicated Solutions Architect</li>
          </ul>
          <a href="/request-demo.html" class="btn btn-violet" style="width:100%;">Contact Enterprise Sales</a>
        </div>

      </div>
    </div>
  </section>
`
);

// 17. Case Studies
createPage(
  'case-study.html',
  'Customer Case Studies & Success Stories',
  'Explore how Sony, Sephora, Domino\'s, Waste Connections, and InteleTravel scaled support with Yellow.ai.',
  `
  <section class="subpage-hero" style="text-align:center;">
    <div class="wrap">
      <span class="section-eyebrow">Proven Results</span>
      <h1 class="section-title">Enterprise Customer Success Stories</h1>
      <p class="section-subtitle" style="margin:0 auto 3rem;">See how leading global brands achieve 90%+ deflection and elevate customer satisfaction with Yellow.ai.</p>
    </div>
  </section>

  <section style="padding:5rem 0;background:#FFFFFF;">
    <div class="wrap">
      <div class="testimonials-grid">
        
        <div class="testimonial-video-card" style="background:#FFFFFF;border-color:#E5E7EB;color:#181818;">
          <div class="card-video-box">
            <video autoplay muted loop playsinline src="https://yellow.ai/wp-content/uploads/2025/09/Flow.mp4"></video>
          </div>
          <div class="card-body-content">
            <div class="card-metric-highlight" style="color:var(--violet-primary);">+73% Deflection</div>
            <p class="card-quote" style="color:#4B5563;">"InteleTravel scaled 24/7 global travel customer support with instant deflection and high customer happiness."</p>
            <div class="card-author-info" style="border-top-color:#E5E7EB;">
              <img class="author-avatar" src="https://yellow.ai/wp-content/uploads/2023/03/Dayna-Jordan-1.webp">
              <div>
                <p class="author-name" style="color:#111;">Dayna Jordan</p>
                <p class="author-title">VP Customer Experience, InteleTravel</p>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-video-card" style="background:#FFFFFF;border-color:#E5E7EB;color:#181818;">
          <div class="card-video-box">
            <video autoplay muted loop playsinline src="https://yellow.ai/wp-content/uploads/2025/09/card-2.mp4"></video>
          </div>
          <div class="card-body-content">
            <div class="card-metric-highlight" style="color:var(--violet-primary);">40% Cost Saved</div>
            <p class="card-quote" style="color:#4B5563;">"Waste Connections automated municipal dispatch inquiries with voice AI, slashing wait times to zero."</p>
            <div class="card-author-info" style="border-top-color:#E5E7EB;">
              <div>
                <p class="author-name" style="color:#111;">David Call</p>
                <p class="author-title">CIO, Waste Connections</p>
              </div>
            </div>
          </div>
        </div>

        <div class="testimonial-video-card" style="background:#FFFFFF;border-color:#E5E7EB;color:#181818;">
          <div class="card-video-box">
            <video autoplay muted loop playsinline src="https://yellow.ai/wp-content/uploads/2025/09/card-3.mp4"></video>
          </div>
          <div class="card-body-content">
            <div class="card-metric-highlight" style="color:var(--violet-primary);">&gt;70% Automated</div>
            <p class="card-quote" style="color:#4B5563;">"VIPdesk automated luxury concierge brand support while preserving a 94%+ CSAT rating across peak holidays."</p>
            <div class="card-author-info" style="border-top-color:#E5E7EB;">
              <div>
                <p class="author-name" style="color:#111;">Sally Hurley</p>
                <p class="author-title">CEO, VIPdesk Connect</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
`
);

// 18. Dedicated ROI Calculator
createPage(
  'roi-calculator.html',
  'Interactive ROI Calculator | Estimate Your Enterprise Savings',
  'Simulate your support cost savings, deflection rates, and hours saved with Yellow.ai.',
  `
  <section class="subpage-hero" style="text-align:center;">
    <div class="wrap">
      <span class="section-eyebrow">Financial Impact</span>
      <h1 class="section-title">Calculate Your Enterprise ROI</h1>
      <p class="section-subtitle" style="margin:0 auto 3rem;">See how much your organization can save annually by automating repetitive tickets with Yellow.ai.</p>
    </div>
  </section>

  <section class="roi-section">
    <div class="wrap">
      <div class="roi-card">
        <div class="roi-controls">
          <div class="roi-slider-group">
            <div class="slider-header">
              <span class="slider-label">Monthly Conversations</span>
              <span class="slider-value-display" id="roi-volume-val">50,000</span>
            </div>
            <input type="range" class="custom-range" id="roi-volume" min="10000" max="500000" step="5000" value="50000">
          </div>

          <div class="roi-slider-group">
            <div class="slider-header">
              <span class="slider-label">Current Cost per Ticket</span>
              <span class="slider-value-display" id="roi-cost-val">$6.50</span>
            </div>
            <input type="range" class="custom-range" id="roi-cost" min="2.00" max="25.00" step="0.50" value="6.50">
          </div>

          <div class="roi-slider-group">
            <div class="slider-header">
              <span class="slider-label">Target Automation Rate</span>
              <span class="slider-value-display" id="roi-deflection-val">80%</span>
            </div>
            <input type="range" class="custom-range" id="roi-deflection" min="40" max="95" step="5" value="80">
          </div>
        </div>

        <div class="roi-results-box">
          <p class="roi-metric-main-sub">Projected Net Annual Savings</p>
          <div class="roi-metric-main" id="roi-total-savings">$2.65M</div>
          
          <div class="roi-sub-metrics">
            <div class="roi-sub-metric">
              <h5 id="roi-hours-saved">64,000 hrs</h5>
              <p>Human Hours Saved / Year</p>
            </div>
            <div class="roi-sub-metric">
              <h5 id="roi-deflection-summary">80%</h5>
              <p>Tier-1 Deflection Rate</p>
            </div>
          </div>

          <a href="/request-demo.html" class="btn btn-yellow" style="width:100%;">Book Demo to Unlock Savings &rarr;</a>
        </div>
      </div>
    </div>
  </section>
`
);

// 19. Request Demo
createPage(
  'request-demo.html',
  'Request a Demo | Experience Autonomous AI Agents',
  'Schedule a 30-minute tailored demonstration of the Yellow.ai Agentic Platform with an enterprise AI specialist.',
  `
  <section class="subpage-hero">
    <div class="wrap">
      <div class="subpage-hero-grid">
        <div>
          <span class="section-eyebrow">Experience Yellow.ai</span>
          <h1 class="section-title">See Autonomous Agentic AI in Action</h1>
          <p class="section-subtitle">Join over 1,100+ global enterprises automating customer service and employee experience. Get a custom demonstration tailored to your exact industry use case.</p>
          
          <div style="background:#F9FAFB;border-radius:1rem;padding:1.5rem;border:1px solid #E5E7EB;margin-top:2rem;">
            <p style="font-weight:700;color:#111;margin-bottom:0.75rem;">In your 30-minute demo, you will see:</p>
            <ul class="feature-bullets" style="margin-bottom:0;">
              <li><span class="icon">&check;</span> Real-time voice agent phone call simulation with sub-300ms latency</li>
              <li><span class="icon">&check;</span> Live knowledge base RAG ingestion of your company's documents</li>
              <li><span class="icon">&check;</span> Custom ROI calculation model and deployment timeline</li>
            </ul>
          </div>
        </div>

        <div class="demo-form-card">
          <h3 style="font-size:1.6rem;font-weight:800;color:#111827;margin-bottom:1.5rem;">Book Your Live Demo</h3>
          <form onsubmit="event.preventDefault(); alert('Thank you! An enterprise AI architect from Yellow.ai will contact you within 2 hours to confirm your scheduled time.');">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">First Name *</label>
                <input type="text" class="form-input" required placeholder="John">
              </div>
              <div class="form-group">
                <label class="form-label">Last Name *</label>
                <input type="text" class="form-input" required placeholder="Doe">
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Business Email *</label>
              <input type="email" class="form-input" required placeholder="john.doe@company.com">
            </div>

            <div class="form-row">
              <div class="form-group">
                <label class="form-label">Company Name *</label>
                <input type="text" class="form-input" required placeholder="Acme Global">
              </div>
              <div class="form-group">
                <label class="form-label">Company Size *</label>
                <select class="form-select" required>
                  <option value="">Select size</option>
                  <option>1 - 50 employees</option>
                  <option>51 - 250 employees</option>
                  <option>251 - 1,000 employees</option>
                  <option>1,000 - 5,000 employees</option>
                  <option>5,000+ employees</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label class="form-label">Primary Interest *</label>
              <select class="form-select" required>
                <option>Customer Service Automation</option>
                <option>Voice AI Agents (Nexus VOX)</option>
                <option>Employee Experience AI (Nexus EDGE)</option>
                <option>Agentic RAG / Knowledge Base</option>
                <option>All of the above</option>
              </select>
            </div>

            <button type="submit" class="btn btn-yellow btn-lg" style="width:100%;margin-top:1rem;">Confirm Scheduled Demo &rarr;</button>
          </form>
        </div>
      </div>
    </div>
  </section>
`
);

// 20. About Us
createPage(
  'about-us.html',
  'About Yellow.ai | Our Story, Leadership & Global Offices',
  'Yellow.ai is on a mission to deliver memorable, autonomous experiences across every enterprise customer interaction.',
  `
  <section class="subpage-hero" style="text-align:center;">
    <div class="wrap">
      <span class="section-eyebrow">Our Mission</span>
      <h1 class="section-title">Automating the World's Conversations</h1>
      <p class="section-subtitle" style="margin:0 auto 3rem;max-width:760px;">Founded in 2016, Yellow.ai is the global leader in enterprise conversational and agentic AI, trusted by over 1,100+ global enterprises across 85+ countries.</p>
    </div>
  </section>

  <section style="padding:6rem 0;background:#FFFFFF;">
    <div class="wrap">
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center;margin-bottom:6rem;">
        <div style="background:#F9FAFB;padding:2.5rem;border-radius:1.5rem;border:1px solid #E5E7EB;">
          <h3 style="font-size:3rem;font-weight:800;color:var(--violet-primary);margin-bottom:0.5rem;">1,100+</h3>
          <p style="color:#4B5563;font-weight:600;">Enterprise Customers</p>
        </div>
        <div style="background:#F9FAFB;padding:2.5rem;border-radius:1.5rem;border:1px solid #E5E7EB;">
          <h3 style="font-size:3rem;font-weight:800;color:var(--violet-primary);margin-bottom:0.5rem;">16B+</h3>
          <p style="color:#4B5563;font-weight:600;">Conversations Handled</p>
        </div>
        <div style="background:#F9FAFB;padding:2.5rem;border-radius:1.5rem;border:1px solid #E5E7EB;">
          <h3 style="font-size:3rem;font-weight:800;color:var(--violet-primary);margin-bottom:0.5rem;">135+</h3>
          <p style="color:#4B5563;font-weight:600;">Languages Supported</p>
        </div>
        <div style="background:#F9FAFB;padding:2.5rem;border-radius:1.5rem;border:1px solid #E5E7EB;">
          <h3 style="font-size:3rem;font-weight:800;color:var(--violet-primary);margin-bottom:0.5rem;">$102M</h3>
          <p style="color:#4B5563;font-weight:600;">Raised from Top VCs</p>
        </div>
      </div>

      <div style="text-align:center;margin-bottom:4rem;">
        <span class="section-eyebrow">Global Presence</span>
        <h2 class="section-title">Offices Around the Globe</h2>
        <p class="section-subtitle" style="margin:0 auto;">Headquartered in San Mateo, California, with global engineering and client hubs in Singapore, Bengaluru, Tokyo, Dubai, and Sydney.</p>
      </div>

      <div class="features-grid-3">
        <div class="feature-box">
          <h4>San Mateo, USA (HQ)</h4>
          <p>Silicon Valley headquarters driving enterprise AI innovation, go-to-market, and research alliances.</p>
        </div>
        <div class="feature-box">
          <h4>Bengaluru, India</h4>
          <p>Core AI R&D center, LLM lab, and DynamicNLP engineering hub.</p>
        </div>
        <div class="feature-box">
          <h4>Singapore</h4>
          <p>Asia-Pacific regional headquarters driving international growth across financial services and telecom.</p>
        </div>
      </div>
    </div>
  </section>
`
);

console.log('All pages generated successfully!');
