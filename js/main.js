/* ===================================================================
 * YELLOW.AI MAIN JAVASCRIPT: NAVBAR, SCROLL, AND GLOBAL INTERACTIONS
 * =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initAnnouncementBar();
  initVideoPlayers();
});

/**
 * Initializes sticky navbar transitions, mega menus, and mobile drawer
 */
function initNavbar() {
  const header = document.querySelector('.new-header-main');
  const menuSingles = document.querySelectorAll('.menu-single');
  const megaPanels = document.querySelectorAll('.menu-single-content');
  const hamburger = document.querySelector('.hamburger');
  const menuSection = document.querySelector('.menu-section');
  const menuOverlay = document.querySelector('.menu-overlay');

  if (!header) return;

  let lastScrollTop = 0;
  const HIDE_THRESHOLD = 400;

  // 1. Scroll listener for sticky background transition & smart autohide
  window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Toggle .scroll class for frosted glass / white background & dark logo
    if (currentScrollTop > 20) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }

    // Smart autohide when scrolling down fast, show when scrolling up
    if (currentScrollTop > HIDE_THRESHOLD) {
      if (currentScrollTop > lastScrollTop + 10) {
        // Scrolling down -> hide header
        header.classList.add('header-hidden');
        closeAllMegaMenus();
      } else if (currentScrollTop < lastScrollTop - 10) {
        // Scrolling up -> show header
        header.classList.remove('header-hidden');
      }
    } else {
      header.classList.remove('header-hidden');
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }, { passive: true });

  // 2. Mega menu dropdown toggle
  menuSingles.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const menuId = trigger.getAttribute('data-menuid');
      const targetPanel = document.getElementById(menuId);
      const isAlreadyActive = trigger.classList.contains('active');

      // Close all other menus first
      closeAllMegaMenus();

      if (!isAlreadyActive && targetPanel) {
        trigger.classList.add('active');
        targetPanel.classList.add('active');
      }
    });
  });

  // 3. Close mega menus when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-section') && !e.target.closest('.menu-single-content')) {
      closeAllMegaMenus();
    }
  });

  // Close menus on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllMegaMenus();
      closeMobileMenu();
    }
  });

  function closeAllMegaMenus() {
    menuSingles.forEach(item => item.classList.remove('active'));
    megaPanels.forEach(panel => panel.classList.remove('active'));
  }

  // 4. Mobile Hamburger Drawer
  if (hamburger && menuSection) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = hamburger.classList.toggle('active');
      menuSection.classList.toggle('mobile-open', isOpen);
      if (menuOverlay) menuOverlay.classList.toggle('active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (menuOverlay) {
      menuOverlay.addEventListener('click', () => {
        closeMobileMenu();
      });
    }
  }

  function closeMobileMenu() {
    if (hamburger) hamburger.classList.remove('active');
    if (menuSection) menuSection.classList.remove('mobile-open');
    if (menuOverlay) menuOverlay.classList.remove('active');
    document.body.style.overflow = '';
    closeAllMegaMenus();
  }
}

/**
 * Initializes announcement bar close button and rotating slide
 */
function initAnnouncementBar() {
  const topSlider = document.querySelector('.top-header-slider');
  const closeBtn = document.querySelector('.close-announcement');

  if (!topSlider) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      topSlider.classList.add('hidden');
      document.body.classList.remove('has-announcement');
    });
  }
}

/**
 * Ensures HTML5 background videos play reliably across browsers
 */
function initVideoPlayers() {
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay policy prevented playback, video will play on first interaction
        document.addEventListener('click', () => video.play(), { once: true });
      });
    }
  });
}
