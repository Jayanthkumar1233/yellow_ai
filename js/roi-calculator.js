/* ===================================================================
 * YELLOW.AI REAL-TIME ROI CALCULATOR ENGINE
 * =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initRoiCalculator();
});

function initRoiCalculator() {
  const volumeSlider = document.getElementById('roi-volume');
  const costSlider = document.getElementById('roi-cost');
  const deflectionSlider = document.getElementById('roi-deflection');

  const volumeDisplay = document.getElementById('roi-volume-val');
  const costDisplay = document.getElementById('roi-cost-val');
  const deflectionDisplay = document.getElementById('roi-deflection-val');

  const savingsTotalDisplay = document.getElementById('roi-total-savings');
  const hoursSavedDisplay = document.getElementById('roi-hours-saved');
  const deflectionPctDisplay = document.getElementById('roi-deflection-summary');

  if (!volumeSlider || !costSlider || !deflectionSlider) return;

  function calculateROI() {
    const monthlyVolume = parseInt(volumeSlider.value, 10);
    const costPerTicket = parseFloat(costSlider.value);
    const deflectionRate = parseInt(deflectionSlider.value, 10) / 100;

    // Display slider values
    volumeDisplay.textContent = monthlyVolume.toLocaleString();
    costDisplay.textContent = `$${costPerTicket.toFixed(2)}`;
    deflectionDisplay.textContent = `${Math.round(deflectionRate * 100)}%`;

    // Calculations
    const annualVolume = monthlyVolume * 12;
    const automatedTickets = annualVolume * deflectionRate;
    
    // Human cost saved minus platform cost estimate
    const grossSavings = automatedTickets * costPerTicket;
    const netSavings = Math.round(grossSavings * 0.85); // 85% net efficiency margin

    // Avg handle time saved: 8 minutes per ticket
    const hoursSaved = Math.round((automatedTickets * 8) / 60);

    // Format results with animated tickers
    animateValue(savingsTotalDisplay, parseFormattedNumber(savingsTotalDisplay.textContent), netSavings, '$');
    animateValue(hoursSavedDisplay, parseFormattedNumber(hoursSavedDisplay.textContent), hoursSaved, '', ' hrs');
    deflectionPctDisplay.textContent = `${Math.round(deflectionRate * 100)}%`;
  }

  function parseFormattedNumber(str) {
    const cleaned = str.replace(/[^0-9.-]+/g, '');
    return parseFloat(cleaned) || 0;
  }

  function animateValue(element, start, end, prefix = '', suffix = '') {
    if (!element) return;
    const duration = 400;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = Math.round(start + (end - start) * easeProgress);

      if (end >= 1000000) {
        element.textContent = `${prefix}${(current / 1000000).toFixed(2)}M${suffix}`;
      } else if (end >= 1000) {
        element.textContent = `${prefix}${(current / 1000).toFixed(0)}k${suffix}`;
      } else {
        element.textContent = `${prefix}${current.toLocaleString()}${suffix}`;
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  volumeSlider.addEventListener('input', calculateROI);
  costSlider.addEventListener('input', calculateROI);
  deflectionSlider.addEventListener('input', calculateROI);

  calculateROI();
}
