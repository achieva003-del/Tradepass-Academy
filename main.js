/* ============================================================
   TradePass Academy scripts
   Handles: sticky header shrink + shadow, mobile menu, active
   nav indicator (scroll spy), guide search, scroll-reveal
   animations, form confirmations, back-to-top, footer year.
   Every block checks its elements exist, so this one file is
   safe to load on every page of the site.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Header: shadow + shrink on scroll ---------- */
  var header = document.getElementById('header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.getElementById('navToggle'),
      menu   = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Active nav indicator ----------
     On the homepage, highlights the section currently in view.
     On sub-pages the active link is set in the HTML instead. */
  var spySections = document.querySelectorAll('[data-spy]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (spySections.length && navLinks.length && 'IntersectionObserver' in window) {
    var setActive = function (id) {
      navLinks.forEach(function (a) {
        var match = a.getAttribute('href') === '#' + id;
        a.classList.toggle('active', match);
        if (match) { a.setAttribute('aria-current', 'true'); } else { a.removeAttribute('aria-current'); }
      });
    };
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setActive(e.target.id === 'hero-top' ? 'home' : e.target.id);
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    spySections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Guide search (trade, code, title, keyword) ---------- */
  var searchInput = document.getElementById('guideSearch');
  if (searchInput) {
    var cards = document.querySelectorAll('[data-search]');
    var empty = document.getElementById('guideSearchEmpty');
    var soonHead = document.getElementById('soonHead');
    searchInput.addEventListener('input', function () {
      var q = searchInput.value.trim().toLowerCase();
      var visible = 0;
      cards.forEach(function (c) {
        var hit = !q || c.getAttribute('data-search').toLowerCase().indexOf(q) !== -1;
        c.style.display = hit ? '' : 'none';
        if (hit) visible++;
      });
      if (empty) empty.classList.toggle('show', visible === 0);
      if (soonHead) soonHead.style.display = q ? 'none' : '';
    });
  }

  /* ---------- Scroll reveal ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Forms ----------
     If a form has an action= (Formspree endpoint), submit it for real via
     fetch and show the confirmation on success, or a clear error if it
     fails. Forms with no action (not yet connected) keep the old
     confirmation-only behaviour so nothing breaks before setup. */
  document.querySelectorAll('form[data-ok]').forEach(function (f) {
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var ok = f.parentElement.querySelector('.form-ok') || f.nextElementSibling;
      var showMsg = function (text, isError) {
        if (!ok || !ok.classList.contains('form-ok')) return;
        ok.textContent = text;
        ok.style.color = isError ? '#C62828' : '';
        ok.classList.add('show');
      };
      var action = f.getAttribute('action');
      if (!action) {
        // Not yet connected to a form service; keep prior UI-only behaviour.
        showMsg(f.getAttribute('data-ok'), false);
        f.reset();
        return;
      }
      var submitBtn = f.querySelector('button[type="submit"]');
      var originalLabel = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      fetch(action, {
        method: 'POST',
        body: new FormData(f),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          showMsg(f.getAttribute('data-ok'), false);
          f.reset();
        } else {
          showMsg('Something went wrong sending that. Please try again in a moment.', true);
        }
      }).catch(function () {
        showMsg('Could not connect. Check your internet connection and try again.', true);
      }).finally(function () {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalLabel; }
      });
    });
  });

  /* ---------- Back to top ---------- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    var onTopScroll = function () { toTop.classList.toggle('show', window.scrollY > 700); };
    window.addEventListener('scroll', onTopScroll, { passive: true });
    onTopScroll();
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
