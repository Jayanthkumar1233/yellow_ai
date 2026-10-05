/* ===================================================================
 * YELLOW.AI 3D CAROUSEL, TABS, & VIDEO MODAL CONTROLS
 * =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  init3DCarousel();
  initLifecycleTabs();
  initVideoModal();
});

/**
 * 3D Rotating Interactive Demos Carousel
 */
function init3DCarousel() {
  const container = document.querySelector('.carousel-3d-container');
  const slides = document.querySelectorAll('.carousel-3d-slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');

  if (!slides.length) return;

  const totalSlides = slides.length;
  let currentIndex = 0;
  let autoSlideTimer = null;

  // Layered 3D transformation configs matching Yellow.ai
  const positions = {
    0: { x: 0, y: 0, scale: 1, zIndex: 10, opacity: 1 },
    1: { x: 220, y: -40, scale: 0.85, zIndex: 4, opacity: 0.75 },
    2: { x: 120, y: -80, scale: 0.72, zIndex: 2, opacity: 0.5 },
    3: { x: -120, y: -80, scale: 0.72, zIndex: 2, opacity: 0.5 },
    4: { x: -220, y: -40, scale: 0.85, zIndex: 4, opacity: 0.75 }
  };

  function updateSlidePositions() {
    const isMobile = window.innerWidth <= 768;

    slides.forEach((slide, index) => {
      const relPos = (index - currentIndex + totalSlides) % totalSlides;
      const pos = positions[relPos] || positions[2];

      if (isMobile) {
        slide.style.transform = `translateX(-50%) scale(${relPos === 0 ? 1 : 0.88})`;
        slide.style.zIndex = relPos === 0 ? 10 : 2;
        slide.style.opacity = relPos === 0 ? 1 : 0.4;
      } else {
        slide.style.transform = `translateX(calc(-50% + ${pos.x}px)) translateY(${pos.y}px) scale(${pos.scale})`;
        slide.style.zIndex = pos.zIndex;
        slide.style.opacity = pos.opacity;
      }

      if (relPos === 0) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePositions();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePositions();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetTimer(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetTimer(); });

  slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
      currentIndex = index;
      updateSlidePositions();
      resetTimer();
    });
  });

  function startTimer() {
    autoSlideTimer = setInterval(nextSlide, 4500);
  }

  function resetTimer() {
    clearInterval(autoSlideTimer);
    startTimer();
  }

  window.addEventListener('resize', updateSlidePositions);
  updateSlidePositions();
  startTimer();
}

/**
 * Interactive Lifecycle Tabs Switcher
 */
function initLifecycleTabs() {
  const tabBtns = document.querySelectorAll('.lifecycle-tab-btn');
  const panels = document.querySelectorAll('.lifecycle-tab-panel');

  if (!tabBtns.length || !panels.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabTarget = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePanel = document.getElementById(tabTarget);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/**
 * Video Modal Player for Demos and Case Studies
 */
function initVideoModal() {
  const modalBackdrop = document.querySelector('.video-modal-backdrop');
  const modalVideo = document.querySelector('.video-modal-container video');
  const closeBtn = document.querySelector('.video-modal-close');
  const triggerBtns = document.querySelectorAll('[data-video-src]');

  if (!modalBackdrop || !modalVideo) return;

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const videoSrc = btn.getAttribute('data-video-src');
      if (videoSrc) {
        modalVideo.src = videoSrc;
        modalBackdrop.classList.add('open');
        modalVideo.play();
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop.classList.contains('open')) closeModal();
  });

  function closeModal() {
    modalBackdrop.classList.remove('open');
    modalVideo.pause();
    modalVideo.src = '';
  }
}
