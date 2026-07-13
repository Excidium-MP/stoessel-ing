/* =============================================
   STÖESSEL INGENIERÍA — main.js
   GSAP hero · AOS · Swiper · i18n · navbar
   ============================================= */

/* ---- TRANSLATIONS ---- */
const translations = {
  es: {
    'nav.home':               'Inicio',
    'nav.about':              'Nosotros',
    'nav.services':           'Servicios',
    'nav.gallery':            'Galería',
    'nav.contact':            'Contacto',
    'hero.title':             'Stöessel Ingeniería',
    'hero.subtitle':          'Experiencia, tecnología y pasión por los eventos',
    'hero.services':          'Sonido · Iluminación · Rigging · Grupos Electrógenos',
    'hero.cta':               'Ver Proyectos',
    'about.label':            'Sobre Nosotros',
    'about.title':            'Más de 20 años de trayectoria',
    'about.p1':               'Contamos con más de 20 años de trayectoria brindando equipamiento técnico integral para eventos de distinta escala y complejidad.',
    'about.p2':               'Ofrecemos soluciones de alta calidad, resultado de la combinación entre equipos profesionales altamente capacitados y tecnología innovadora, aplicada con criterio técnico y operativo.',
    'about.p3':               'Abordamos cada proyecto desde la etapa de producción, transformando los desafíos técnicos de nuestros clientes en experiencias eficientes, sólidas y memorables.',
    'about.p4':               'Trabajamos en sinergia con organizadores y marcas, asegurando ejecuciones precisas que potencian el impacto del evento y generan experiencias que conectan y emocionan.',
    'services.label':         'Lo que hacemos',
    'services.title':         'Servicios',
    'services.audio.kicker':  'Sonido',
    'services.audio.title':   'El sonido como herramienta de comunicación',
    'services.audio.p1':      'Desde reuniones ejecutivas hasta eventos corporativos de gran escala. En espacios abiertos o cerrados, cada proyecto es abordado con el mismo nivel de planificación, precisión y responsabilidad.',
    'services.audio.p2':      'Contamos con sistemas de audio profesionales, seleccionados según los requerimientos técnicos de cada evento, equipados con las primeras marcas a nivel mundial: JBL Professional, Shure, Sennheiser y RCF.',
    'services.audio.p3':      'Garantizamos claridad, uniformidad y fidelidad sonora, asegurando que cada mensaje se escuche con impacto y excelencia.',
    'services.lighting.kicker':'Iluminación',
    'services.lighting.title':'Iluminación profesional orientada a resultados',
    'services.lighting.p1':   'La iluminación jerarquiza el contenido, define espacios y dirige la atención.',
    'services.lighting.p2':   'Diseñamos soluciones lumínicas alineadas a los objetivos del evento, considerando niveles, color, contraste y dinámica escénica.',
    'services.lighting.p3':   'Con equipamiento profesional y control preciso, generamos climas que optimizan el impacto visual y refuerzan la percepción de marca.',
    'services.rigging.kicker':'Rigging',
    'services.rigging.title': 'Rigging implacable',
    'services.rigging.p1':    'Somos una de las pocas empresas del país especializadas en rigging y trusses, y representantes oficiales de Prolyte (Holanda), operando bajo estándares internacionales.',
    'services.rigging.p2':    'Nuestros riggers intervienen desde la planificación, realizando cálculos estructurales con la seguridad como prioridad absoluta.',
    'services.rigging.p3':    'Aplicamos controles e inspecciones rigurosas sobre cada componente, garantizando montajes confiables y seguros.',
    'services.power.kicker':  'Grupos Electrógenos',
    'services.power.title':   'Energía de respaldo',
    'services.power.p1':      'Contamos con grupos electrógenos de 5 a 220 kVA, modernos y silenciosos, con mantenimiento preventivo riguroso que garantiza confiabilidad operativa.',
    'services.power.p2':      'Brindamos generación y distribución eléctrica para eventos corporativos, ferias y stands, en espacios cerrados y vía pública.',
    'services.power.p3':      'Trabajamos bajo normas IRAM, utilizando equipamiento de marcas líderes como CETEC, asegurando energía continua, segura y de calidad.',
    'quality.title':          'No hacemos cantidad. Hacemos calidad.',
    'quality.p1':             'En un entorno orientado a la producción masiva, elegimos diferenciarnos a través de la excelencia, el detalle y la singularidad de cada proyecto.',
    'quality.p2':             'No priorizamos el volumen, sino la calidad de ejecución, la atención personalizada y la comprensión profunda de los objetivos de cada cliente.',
    'quality.p3':             'En Stöessel, brindamos un servicio integral donde la calidad técnica, el capital humano y la personalización constituyen los pilares de nuestro compromiso profesional.',
    'quality.closing':        'Donde la calidad y la personalización se encuentran.',
    'gallery.label':          'Nuestros eventos',
    'gallery.title':          'Galería de Proyectos',
    'gallery.igLabel':        'Ver en Instagram',
    'gallery.fallbackTag':    'Instagram',
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
    'footer.copyright':       '© 2026 Stöessel Ingeniería. Todos los derechos reservados.',
    'privacy.title':          'Política de Privacidad',
    'privacy.body':           'Stöessel Ingeniería en Eventos respeta su privacidad. Los datos personales proporcionados a través de este sitio serán utilizados exclusivamente para responder consultas y no serán compartidos con terceros. Para más información, contáctenos.',
  },
  en: {
    'nav.home':               'Home',
    'nav.about':              'About',
    'nav.services':           'Services',
    'nav.gallery':            'Gallery',
    'nav.contact':            'Contact',
    'hero.title':             'Stöessel Engineering',
    'hero.subtitle':          'Experience, technology and passion for events',
    'hero.services':          'Sound · Lighting · Rigging · Power Generators',
    'hero.cta':               'See Projects',
    'about.label':            'About Us',
    'about.title':            'Over 20 years of experience',
    'about.p1':               'We have over 20 years of experience providing comprehensive technical equipment for events of every scale and complexity.',
    'about.p2':               'We deliver high-quality solutions, the result of combining highly trained professional teams with innovative technology, applied with technical and operational judgment.',
    'about.p3':               'We approach every project from the production stage, turning our clients\' technical challenges into efficient, solid and memorable experiences.',
    'about.p4':               'We work in synergy with organizers and brands, ensuring precise executions that amplify the impact of each event and create experiences that connect and move people.',
    'services.label':         'What we do',
    'services.title':         'Services',
    'services.audio.kicker':  'Sound',
    'services.audio.title':   'Sound as a communication tool',
    'services.audio.p1':      'From executive meetings to large-scale corporate events. Indoors or outdoors, every project is approached with the same level of planning, precision and responsibility.',
    'services.audio.p2':      'We work with professional audio systems, selected according to the technical requirements of each event, featuring the world\'s leading brands: JBL Professional, Shure, Sennheiser and RCF.',
    'services.audio.p3':      'We guarantee clarity, uniformity and sound fidelity, making sure every message is heard with impact and excellence.',
    'services.lighting.kicker':'Lighting',
    'services.lighting.title':'Professional, results-driven lighting',
    'services.lighting.p1':   'Lighting highlights content, defines spaces and directs attention.',
    'services.lighting.p2':   'We design lighting solutions aligned with the goals of the event, considering levels, color, contrast and stage dynamics.',
    'services.lighting.p3':   'With professional equipment and precise control, we create atmospheres that maximize visual impact and reinforce brand perception.',
    'services.rigging.kicker':'Rigging',
    'services.rigging.title': 'Relentless rigging',
    'services.rigging.p1':    'We are one of the few companies in the country specialized in rigging and trusses, and official representatives of Prolyte (Netherlands), operating under international standards.',
    'services.rigging.p2':    'Our riggers are involved from the planning stage, performing structural calculations with safety as the absolute priority.',
    'services.rigging.p3':    'We apply rigorous controls and inspections to every component, guaranteeing reliable and safe setups.',
    'services.power.kicker':  'Power Generators',
    'services.power.title':   'Backup power',
    'services.power.p1':      'We have modern, silent power generators from 5 to 220 kVA, with rigorous preventive maintenance that guarantees operational reliability.',
    'services.power.p2':      'We provide power generation and electrical distribution for corporate events, trade fairs and stands, indoors and on public roads.',
    'services.power.p3':      'We work under IRAM standards, using equipment from leading brands such as CETEC, ensuring continuous, safe, quality power.',
    'quality.title':          'We don\'t do quantity. We do quality.',
    'quality.p1':             'In an environment geared towards mass production, we choose to stand out through excellence, attention to detail and the uniqueness of every project.',
    'quality.p2':             'We don\'t prioritize volume — we prioritize quality of execution, personalized attention and a deep understanding of each client\'s goals.',
    'quality.p3':             'At Stöessel, we provide an end-to-end service where technical quality, human talent and personalization are the pillars of our professional commitment.',
    'quality.closing':        'Where quality and personalization meet.',
    'gallery.label':          'Our events',
    'gallery.title':          'Project Gallery',
    'gallery.igLabel':        'View on Instagram',
    'gallery.fallbackTag':    'Instagram',
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
    'footer.copyright':       '© 2026 Stöessel Ingeniería. All rights reserved.',
    'privacy.title':          'Privacy Policy',
    'privacy.body':           'Stöessel Ingeniería en Eventos respects your privacy. Personal data provided through this site will be used exclusively to respond to inquiries and will not be shared with third parties. For more information, please contact us.',
  }
};

/* ---- GALLERY STATE (declared before applyLang uses it) ---- */
let cachedPosts  = [];
let gallerySwiper = null;

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
  if (cachedPosts.length) {
    renderInstagramSlides(cachedPosts);
    mountSwiper();
  }
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
const heroVideo = document.querySelector('.hero-video');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight && heroVideo) {
    heroVideo.style.transform = `scale(1.08) translateY(${scrolled * 0.25}px)`;
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

    .fromTo('#heroServices',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6 }, '-=0.45')

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
function buildSlideHTML(thumbUrl, permalink, tag, title, igLabel) {
  return `<div class="swiper-slide">
      <a href="${permalink}" target="_blank" rel="noopener" class="slide-link">
        <div class="slide-img" style="background-image: url('${thumbUrl}')"></div>
        <div class="slide-overlay">
          <span class="slide-tag">${tag}</span>
          <h3 class="slide-title">${title}</h3>
          <span class="slide-ig"><i class="fa-brands fa-instagram"></i> ${igLabel}</span>
        </div>
      </a>
    </div>`;
}

function renderInstagramSlides(posts) {
  cachedPosts = posts;
  const tag     = translations[currentLang]['gallery.fallbackTag'];
  const igLabel = translations[currentLang]['gallery.igLabel'];
  const html = posts.map(p => {
    const firstLine = (p.caption || '').split('\n')[0].replace(/#\S+/g, '').trim();
    const title = firstLine.length > 0
      ? firstLine.slice(0, 55).replace(/[.,;:!?]$/, '')
      : 'Stöessel';
    return buildSlideHTML(p.thumbnail, p.permalink, tag, title, igLabel);
  }).join('');
  document.getElementById('galleryWrapper').innerHTML = html;
}

function renderFallbackSlides() {
  const igLabel = translations[currentLang]['gallery.igLabel'];
  const tag     = translations[currentLang]['gallery.fallbackTag'];
  const profile = 'https://www.instagram.com/stoessel_ing/';
  const slides  = [1, 2, 3, 4, 5, 6].map(n =>
    buildSlideHTML(`assets/img/gallery-${n}.jpg`, profile, tag, 'Stöessel', igLabel)
  ).join('');
  document.getElementById('galleryWrapper').innerHTML = slides;
}

function mountSwiper() {
  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
  gallerySwiper = new Swiper('.gallery-swiper', {
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
}

async function initGallery() {
  const loading = document.getElementById('galleryLoading');
  loading.removeAttribute('hidden');

  try {
    const res  = await fetch('/.netlify/functions/instagram-feed');
    const data = await res.json();
    if (data.posts && data.posts.length > 0) {
      renderInstagramSlides(data.posts);
    } else {
      renderFallbackSlides();
    }
  } catch (_) {
    renderFallbackSlides();
  }

  loading.setAttribute('hidden', '');
  mountSwiper();
}

initGallery();

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
  window.location.href = `mailto:info@stoessel-eventos.com?subject=${subject}&body=${body}`;
});
