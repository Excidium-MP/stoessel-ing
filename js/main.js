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
    'about.label':            'Sobre Nosotros',
    'about.title':            'Nos dedicamos a los eventos hace más de 20 años',
    'about.p1':               'Somos proveedores de equipamiento técnico para eventos. Ofrecemos calidad y excelencia. Lo logramos gracias a la combinación de nuestro personal apasionado y tecnología innovadora. Nos gusta la calidad y la ofrecemos.',
    'about.p2':               'Mediante desafíos técnicos propios de nuestros clientes, logramos que un evento sea fascinante desde el momento de producción. Generamos verdadera sinergia para que un evento sea exitoso y que logre despertar emociones.',
    'about.p3':               'Nuestra pasión por lo que hacemos, marca la diferencia.',
    'services.label':         'Lo que hacemos',
    'services.title':         'Servicios',
    'services.lighting.kicker':'Iluminación',
    'services.lighting.title':'La luz junto con la tecnología es arte',
    'services.lighting.p1':   'La luz destaca el contenido. Resalta imágenes que perduran en la memoria.',
    'services.lighting.p2':   'Creamos una atmósfera apropiada capaz de transportar hacia otro lugar a una audiencia. Gracias a una amplia gama de equipamiento, podemos generar distintos climas.',
    'services.lighting.p3':   'La buena iluminación y saber utilizarla genera un alto impacto y esto hace que un evento brille.',
    'services.audio.kicker':  'Sonido',
    'services.audio.title':   'La música es sonido organizado',
    'services.audio.p1':      'Desde pequeños a grandes eventos. En lugares abiertos o cerrados. Cualquiera sea el espacio y la magnitud siempre tomamos muy en serio nuestro trabajo.',
    'services.audio.p2':      'Disponemos de diferentes tipos de sistemas de audio acorde a cada necesidad.',
    'services.audio.p3':      'Logramos un sonido puro y de excelencia. Sonido que conquista todos los sentidos.',
    'services.rigging.kicker':'Rigging',
    'services.rigging.title': 'Implacable',
    'services.rigging.p1':    'Nuestros riggers, están presentes desde la fase de planificación. Proporcionan cálculos estructurales en donde la seguridad es la prioridad absoluta. Somos excesivamente rigurosos.',
    'services.rigging.p2':    'Sometemos a cientos de piezas de alta calidad a inspecciones minuciosas y regulares. Nos tomamos la seguridad muy en serio.',
    'services.rigging.p3':    'Miembros Prolyte Group (Holanda).',
    'services.power.kicker':  'Grupos Electrógenos',
    'services.power.title':   'Energía para el éxito',
    'services.power.p1':      'Contamos con generadores desde 5 a 220 KVA. Modernos y silenciosos.',
    'services.power.p2':      'Hacemos exhaustivos mantenimientos preventivos, por lo cual podemos dar confiabilidad a la hora de proveer energía. Proporcionamos distribución eléctrica para stands, ferias, tanto en lugares cerrados como en la vía pública.',
    'services.power.p3':      'Trabajamos bajo normas IRAM para dar seguridad y calidad en todos nuestros trabajos.',
    'quality.title':          'No Hacemos Cantidad, Hacemos Calidad',
    'quality.p1':             'En un mundo centrado en la producción masiva, optamos por diferenciarnos. No buscamos simplemente hacer cantidad y volumen; nuestro enfoque está en la singularidad y la calidad de cada proyecto. Priorizamos la atención individualizada, asegurándonos de que cada cliente se sienta escuchado y satisfecho con el resultado final.',
    'quality.p2':             'En Stöessel, nos enorgullece ofrecer un servicio excepcional, donde la calidad, el recurso humano y la personalización son los pilares fundamentales de nuestro compromiso. Estamos listos para colaborar en la realización de proyectos memorables y significativos.',
    'quality.closing':        '¡Dónde la calidad y la personalización se encuentran!',
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
    'about.label':            'About Us',
    'about.title':            'We have been dedicated to events for more than 20 years',
    'about.p1':               'We are providers of technical equipment for events. We offer quality and excellence. We achieve it thanks to the combination of our passionate staff and innovative technology. We like quality, and we deliver it.',
    'about.p2':               'Through our clients\' own technical challenges, we make an event fascinating from the production stage. We create true synergy so that an event is successful and awakens emotions.',
    'about.p3':               'Our passion for what we do makes the difference.',
    'services.label':         'What we do',
    'services.title':         'Services',
    'services.lighting.kicker':'Lighting',
    'services.lighting.title':'Light combined with technology is art',
    'services.lighting.p1':   'Light highlights the content. It brings out images that last in the memory.',
    'services.lighting.p2':   'We create the right atmosphere, capable of transporting an audience somewhere else. Thanks to a wide range of equipment, we can create different moods.',
    'services.lighting.p3':   'Good lighting, and knowing how to use it, creates high impact — and that makes an event shine.',
    'services.audio.kicker':  'Sound',
    'services.audio.title':   'Music is organized sound',
    'services.audio.p1':      'From small to large events. Indoors or outdoors. Whatever the space and the scale, we always take our work very seriously.',
    'services.audio.p2':      'We offer different types of audio systems to suit every need.',
    'services.audio.p3':      'We achieve pure, excellent sound. Sound that conquers all the senses.',
    'services.rigging.kicker':'Rigging',
    'services.rigging.title': 'Relentless',
    'services.rigging.p1':    'Our riggers are present from the planning phase. They provide structural calculations where safety is the absolute priority. We are exceedingly rigorous.',
    'services.rigging.p2':    'We subject hundreds of high-quality components to thorough, regular inspections. We take safety very seriously.',
    'services.rigging.p3':    'Members of Prolyte Group (Netherlands).',
    'services.power.kicker':  'Power Generators',
    'services.power.title':   'Power for success',
    'services.power.p1':      'We have generators from 5 to 220 KVA. Modern and silent.',
    'services.power.p2':      'We carry out exhaustive preventive maintenance, which is why we can guarantee reliability when providing power. We provide electrical distribution for stands and trade fairs, both indoors and on public roads.',
    'services.power.p3':      'We work under IRAM standards to ensure safety and quality in all our work.',
    'quality.title':          'We Don\'t Do Quantity, We Do Quality',
    'quality.p1':             'In a world centered on mass production, we choose to be different. We are not simply looking to do quantity and volume; our focus is on the uniqueness and quality of each project. We prioritize individualized attention, making sure every client feels heard and satisfied with the final result.',
    'quality.p2':             'At Stöessel, we take pride in offering an exceptional service, where quality, human talent and personalization are the fundamental pillars of our commitment. We are ready to collaborate on memorable and meaningful projects.',
    'quality.closing':        'Where quality and personalization meet!',
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

/* ---- HERO VIDEO ---- */
const heroVideo = document.querySelector('.hero-video');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (scrolled < window.innerHeight && heroVideo) {
    heroVideo.style.transform = `scale(1.08) translateY(${scrolled * 0.25}px)`;
  }
}, { passive: true });

// Resume playback when the tab becomes visible again (browsers pause hidden videos)
if (heroVideo) {
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) heroVideo.play().catch(() => {});
  });
}

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
