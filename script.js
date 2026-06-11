/* ═══════════════════════════════════════════════════════
   PORTFOLIO — JavaScript
   Theme toggle, scroll reveal, navbar, mobile menu
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ── Theme Toggle ────────────────────────────────────
  const html = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const iconSun = document.getElementById('icon-sun');
  const iconMoon = document.getElementById('icon-moon');
  const iconSunM = document.querySelector('.icon-sun-m');
  const iconMoonM = document.querySelector('.icon-moon-m');

  // Load saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);

  function setTheme(theme) {
    if (theme === 'dark') {
      html.classList.add('dark');
      if (iconSun) iconSun.classList.add('hidden');
      if (iconMoon) iconMoon.classList.remove('hidden');
      if (iconSunM) iconSunM.classList.add('hidden');
      if (iconMoonM) iconMoonM.classList.remove('hidden');
    } else {
      html.classList.remove('dark');
      if (iconSun) iconSun.classList.remove('hidden');
      if (iconMoon) iconMoon.classList.add('hidden');
      if (iconSunM) iconSunM.classList.remove('hidden');
      if (iconMoonM) iconMoonM.classList.add('hidden');
    }
    localStorage.setItem('theme', theme);
  }

  function toggleTheme() {
    const current = html.classList.contains('dark') ? 'dark' : 'light';
    setTheme(current === 'dark' ? 'light' : 'dark');
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener('click', toggleTheme);

  // ── Navbar Scroll ───────────────────────────────────
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  function handleNavbarScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // Initial check

  // ── Mobile Menu ─────────────────────────────────────
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu on link click
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // ── Scroll Reveal ───────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 60;

    revealElements.forEach(function (el) {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        // Respect animation-delay set via inline styles
        const delay = el.style.animationDelay;
        if (delay) {
          const ms = parseFloat(delay) * 1000;
          setTimeout(function () {
            el.classList.add('visible');
          }, ms);
        } else {
          el.classList.add('visible');
        }
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  // Trigger once on load
  setTimeout(revealOnScroll, 100);

  // ── Smooth Scroll for anchor links ──────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });

  // ── Active nav link highlighting ────────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function highlightNav() {
    const scrollPos = window.scrollY + 120;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('text-accent');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('text-accent');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });
  highlightNav();

  // ── Skill pills stagger animation ──────────────────
  const skillPills = document.querySelectorAll('.skill-pill');
  skillPills.forEach(function (pill, index) {
    pill.style.transitionDelay = (index * 0.03) + 's';
  });

})();
