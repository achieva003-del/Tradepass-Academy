/* ============================================================
   TradePass Academy - scripts
   Handles: sticky header shadow, mobile menu, scroll-reveal
   animations, form confirmations, footer year.
   ============================================================ */

(function(){
  // Header shadow on scroll
  var header=document.getElementById('header');
  var onScroll=function(){header.classList.toggle('scrolled',window.scrollY>8)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  // Mobile menu
  var toggle=document.getElementById('navToggle'),menu=document.getElementById('mobileMenu');
  toggle.addEventListener('click',function(){
    var open=menu.classList.toggle('open');
    toggle.classList.toggle('open',open);
    toggle.setAttribute('aria-expanded',open?'true':'false');
    toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
  });
  menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){
    menu.classList.remove('open');toggle.classList.remove('open');toggle.setAttribute('aria-expanded','false');
  })});

  // Scroll reveal
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
  }else{
    document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});
  }

  // Forms (front-end confirmation only)
  document.querySelectorAll('form[data-ok]').forEach(function(f){
    f.addEventListener('submit',function(ev){
      ev.preventDefault();
      var ok=f.parentElement.querySelector('.form-ok')||f.nextElementSibling;
      if(ok&&ok.classList.contains('form-ok')){ok.textContent=f.getAttribute('data-ok');ok.classList.add('show')}
      f.reset();
    });
  });

  // Year
  document.getElementById('year').textContent=new Date().getFullYear();
})();
