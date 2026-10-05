/* ===================================================================
 * YELLOW.AI FLOATING CONVERSATIONAL AI AGENT WIDGET
 * =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initAiBotWidget();
});

function initAiBotWidget() {
  const launcher = document.querySelector('.ai-bot-launcher');
  const windowEl = document.querySelector('.ai-bot-window');
  const closeBtn = document.querySelector('.ai-bot-close-btn');
  const messagesBox = document.querySelector('.ai-bot-messages');
  const inputEl = document.querySelector('.ai-bot-input');
  const sendBtn = document.querySelector('.ai-bot-send');

  if (!launcher || !windowEl) return;

  // Toggle Bot window
  launcher.addEventListener('click', () => {
    windowEl.classList.toggle('open');
    if (windowEl.classList.contains('open')) {
      inputEl.focus();
      scrollBottom();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      windowEl.classList.remove('open');
    });
  }

  // Pre-configured knowledge base responses
  const aiKnowledge = [
    {
      keywords: ['what is', 'yellow.ai', 'about', 'platform', 'tell me'],
      response: "Yellow.ai is the world's leading enterprise-grade Agentic AI platform. We orchestrate 15+ cutting-edge LLMs (GPT-4o, Claude 3.5, Gemini 1.5, Llama 3) to automate up to 90% of customer and employee interactions across voice and chat in 135+ languages."
    },
    {
      keywords: ['voice', 'call', 'nexus vox', 'telephony', 'phone'],
      response: "Nexus VOX is our voice AI engine delivering natural turn-taking with sub-300ms latency across 500+ languages and accents. It connects seamlessly to SIP, Genesys, Twilio, and Avaya for zero-latency deflection."
    },
    {
      keywords: ['price', 'pricing', 'cost', 'plan', 'tier'],
      response: "We offer tailored plans: Starter (for growing teams), Professional (for mid-market scaling), and Enterprise (with custom SLAs, dedicated models, and on-prem/VPC deployment). Would you like to view our Pricing page or book a demo?"
    },
    {
      keywords: ['demo', 'book', 'schedule', 'try', 'contact', 'sales'],
      response: "You can book a live interactive demo anytime! Click on the 'Book a demo' button in the top navigation or head over to our <a href='/request-demo.html' style='color:#5C42FC;font-weight:700;'>Request Demo</a> page to pick a date."
    },
    {
      keywords: ['rag', 'knowledge', 'kb', 'data'],
      response: "Our Conversational Knowledge Base uses Agentic RAG to index unstructured data from SharePoint, Zendesk, Salesforce, and PDFs with citations, real-time hallucination guardrails, and automated indexing."
    },
    {
      keywords: ['security', 'soc2', 'hipaa', 'gdpr', 'compliance'],
      response: "Yellow.ai is certified for SOC2 Type II, ISO 27001, HIPAA, GDPR, ISO 27017, and ISO 27018. We operate zero-data retention LLM policies and enterprise PII redaction."
    }
  ];

  function getAiResponse(userText) {
    const lower = userText.toLowerCase();
    for (const item of aiKnowledge) {
      if (item.keywords.some(k => lower.includes(k))) {
        return item.response;
      }
    }
    return "Thanks for reaching out! Yellow.ai empowers enterprises with autonomous AI agents across Voice, Web, WhatsApp, and internal systems. Would you like to explore our Platform features, check ROI, or schedule an executive demo?";
  }

  function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    // Append user message
    appendMessage(text, 'user');
    inputEl.value = '';

    // Typing indicator
    const typingId = appendTypingIndicator();
    scrollBottom();

    // Simulated AI response
    setTimeout(() => {
      removeTypingIndicator(typingId);
      const answer = getAiResponse(text);
      appendMessage(answer, 'ai');
      scrollBottom();
    }, 600);
  }

  if (sendBtn) sendBtn.addEventListener('click', handleSend);
  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  // Quick chips
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('bot-chip')) {
      const chipText = e.target.textContent;
      inputEl.value = chipText;
      handleSend();
    }
  });

  function appendMessage(text, sender) {
    const msg = document.createElement('div');
    msg.className = `bot-msg ${sender}`;
    msg.innerHTML = text;
    messagesBox.appendChild(msg);
    scrollBottom();
  }

  function appendTypingIndicator() {
    const id = 'typing-' + Date.now();
    const typing = document.createElement('div');
    typing.id = id;
    typing.className = 'bot-msg ai';
    typing.innerHTML = '<span style="font-style:italic;color:#9CA3AF;">Yellow.ai is typing...</span>';
    messagesBox.appendChild(typing);
    return id;
  }

  function removeTypingIndicator(id) {
    const el = document.getElementById(id);
    if (el) el.remove();
  }

  function scrollBottom() {
    messagesBox.scrollTop = messagesBox.scrollHeight;
  }
}
