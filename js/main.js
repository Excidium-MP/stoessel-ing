/* =============================================
   STÖESSEL INGENIERÍA — main.js
   GSAP hero · AOS · Swiper · i18n · navbar
   ============================================= */

/* ---- TRANSLATIONS ---- */
const translations = {
  es: {
    'nav.home':               'Inicio',
    'nav.services':           'Servicios',
    'nav.gallery':            'Galería',
    'nav.contact':            'Contacto',
    'hero.title':             'Stöessel Ingeniería',
    'hero.subtitle':          'Sonido · Iluminación · Producción',
    'hero.cta':               'Ver Proyectos',
    'services.label':         'Lo que hacemos',
    'services.title':         'Ingeniería al servicio del evento',
    'services.desc':          'Diseñamos y ejecutamos soluciones técnicas integrales para conciertos, corporativos, festivales y más. Cada evento es una obra de ingeniería.',
    'services.audio.title':   'Audio Profesional',
    'services.audio.desc':    'Sistemas de sonido line array, monitoreo en escena y diseño acústico para cualquier recinto.',
    'services.lighting.title':'Iluminación Escénica',
    'services.lighting.desc': 'Moving heads, LEDs, control DMX y diseño de iluminación que transforma cada espacio.',
    'services.video.title':   'Video & Proyección',
    'services.video.desc':    'Pantallas LED, videowall, mapping y sistemas de proyección de alta definición.',
    'services.production.title':'Producción Integral',
    'services.production.desc': 'Coordinación técnica completa: backline, estructura, rigging y dirección de producción.',
    'gallery.label':          'Nuestros eventos',
    'gallery.title':          'Galería de Proyectos',
    'gallery.slide1.tag':     'Concierto',
    'gallery.slide1.title':   'Evento 01',
    'gallery.slide2.tag':     'Festival',
    'gallery.slide2.title':   'Evento 02',
    'gallery.slide3.tag':     'Corporativo',
    'gallery.slide3.title':   'Evento 03',
    'gallery.slide4.tag':     'Show',
    'gallery.slide4.title':   'Evento 04',
    'gallery.slide5.tag':     'Producción',
    'gallery.slide5.title':   'Evento 05',
    'contact.label':          'Hablemos',
    'contact.title':          'Contacto',
    'contact.phone.label':    'Teléfono',
    'contact.email.label':    'Email',
    'contact.location.label': 'Ubicación',
    'contact.location.value': 'Buenos Aires, Argentina',
    'contact.whatsapp':       'Escribinos por WhatsApp',
    'contact.form.name':      'Nombre',
    'contact.form.email':     'Email',
    'contact.form.message':   'Mensaje',
    'contact.form.send':      'Enviar mensaje',
    'footer.tagline':         'Ingeniería en Eventos',
    'footer.links':           'Enlaces',
    'footer.legal':           'Legal',
    'footer.privacy':         'Política de Privacidad',
    'footer.terms':           'Términos y Condiciones',
    'footer.copyright':       '© 2025 Stöessel Ingeniería. Todos los derechos reservados.',
    'privacy.title':          'Política de Privacidad',
    'privacy.body':           'Stöessel Ingeniería en Eventos respeta su privacidad. Los datos personales proporcionados a través de este sitio serán utilizados exclusivamente para responder consultas y no serán compartidos con terceros. Para más información, contáctenos.',
  },
  en: {
    'nav.home':               'Home',
    'nav.services':           'Services',
    'nav.gallery':            'Gallery',
    'nav.contact':            'Contact',
    'hero.title':             'Stöessel Engineering',
    'hero.subtitle':          'Sound · Lighting · Production',
    'hero.cta':               'See Projects',
    'services.label':         'What we do',
    'services.title':         'Engineering for every event',
    'services.desc':          'We design and execute comprehensive technical solutions for concerts, corporate events, festivals and more. Every event is a work of engineering.',
    'services.audio.title':   'Professional Audio',
    'services.audio.desc':    'Line array sound systems, stage monitoring and acoustic design for any venue.',
    'services.lighting.title':'Stage Lighting',
    'services.lighting.desc': 'Moving heads, LEDs, DMX control and lighting design that transforms every space.',
    'services.video.title':   'Video & Projection',
    'services.video.desc':    'LED screens, videowalls, mapping and high-definition projection systems.',
    'services.production.title':'Full Production',
    'services.production.desc': 'Complete technical coordination: backline, structure, rigging and production management.',
    'gallery.label':          'Our events',
    'gallery.title':          'Project Gallery',
    'gallery.slide1.tag':     'Concert',
    'gallery.slide1.title':   'Event 01',
    'gallery.slide2.tag':     'Festival',
    'gallery.slide2.title':   'Event 02',
    'gallery.slide3.tag':     'Corporate',
    'gallery.slide3.title':   'Event 03',
    'gallery.slide4.tag':     'Show',
    'gallery.slide4.title':   'Event 04',
    'gallery.slide5.tag':     'Production',
    'gallery.slide5.title':   'Event 05',
    'contact.label':          "Let's talk",
    'contact.title':          'Contact',
    'contact.phone.label':    'Phone',
    'contact.email.label':    'Email',
    'contact.location.label': 'Location',
    'contact.location.value': 'Buenos Aires, Argentina',
    'contact.whatsapp':       'Message us on WhatsApp',
    'contact.form.name':      'Name',
    'contact.form.email':     'Email',
    'contact.form.message':   'Message',
    'contact.form.send':      'Send message',
    'footer.tagline':         'Event Engineering',
    'footer.links':           'Links',
    'footer.legal':           'Legal',
    'footer.privacy':         'Privacy Policy',
    'footer.terms':           'Terms & Conditions',
    'footer.copyright':       '© 2025 Stöessel Ingeniería. All rights reserved.',
    'privacy.title':          'Privacy Policy',
    'privacy.body':           'Stöessel Ingeniería en Eventos respects your privacy. Personal data provided through this site will be used exclusively to respond to inquiries and will not be shared with third parties. For more information, please contact us.',
  }
};

/* ---- I18N ---- */
let currentLang = localStorage.getItem('stoesselLang') || 'es';

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  const btn = document.getElementById('langToggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
  currentLang = lang;
  localStorage.setItem('stoesselLang', lang);
}

document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

// Apply on load
applyLang(currentLang);

/* ---- NAVBAR ---- */
const navbar  = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks.classList.toggle('open');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ---- HERO PARALLAX ---- */
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight && heroBg) {
    heroBg.style.transform = `scale(1.08) translateY(${scrolled * 0.25}px)`;
  }
}, { passive: true });

/* ---- GSAP HERO REVEAL ---- */
window.addEventListener('load', () => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to('#heroLogo',    { opacity: 1, y: 0, duration: 0.9, delay: 0.2 }, 'start')
    .fromTo('#heroLogo', { y: 30 }, { y: 0, duration: 0.9 }, 'start')

    .to('.hero-content', { opacity: 1, duration: 0 }, 'start')

    .fromTo('#heroTitle',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8 }, '-=0.4')

    .fromTo('#heroSubtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 }, '-=0.5')

    .fromTo('#heroCta',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
});

/* ---- AOS INIT ---- */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

/* ---- SWIPER GALLERY ---- */
new Swiper('.gallery-swiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3800,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    600:  { slidesPerView: 1.5, spaceBetween: 24 },
    900:  { slidesPerView: 2.2, spaceBetween: 28 },
    1200: { slidesPerView: 2.8, spaceBetween: 32 },
  },
});

/* ---- PRIVACY MODAL ---- */
const modal    = document.getElementById('privacyModal');
const backdrop = document.getElementById('modalBackdrop');
const closeBtn = document.getElementById('modalClose');
const openBtn  = document.getElementById('privacyLink');

function openModal() {
  modal.classList.add('open');
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modal.classList.remove('open');
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

if (openBtn)  openBtn.addEventListener('click', e => { e.preventDefault(); openModal(); });
if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (backdrop) backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ---- CONTACT FORM ---- */
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name    = this.name.value.trim();
  const email   = this.email.value.trim();
  const message = this.message.value.trim();

  // Build mailto link
  const subject = encodeURIComponent(`Consulta de ${name}`);
  const body    = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:info@stoessel.com?subject=${subject}&body=${body}`;
});
