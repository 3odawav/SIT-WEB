// ===== DATA: SLIDES =====
const SLIDES_DATA = [
  { img: 'https://i.ibb.co/99MV2rn0/10.png' },
  { img: 'https://i.ibb.co/DfMPbtX3/5.png' },
  { img: 'https://i.ibb.co/vxbVjcM0/7.png' },
  { img: 'https://i.ibb.co/27zHbgMF/8.png' }
];

// ===== DATA: PROPERTIES =====
const PROPERTIES_DATA = [
  {
    title: "Mazarine New Alamein",
    img: "https://i.ibb.co/mCXMSSKW/Whisk-7eb8fcd38f784ec80f54b416f43923e5dr.jpg",
    price: "Contact for price",
    facts: [
      "Swimming pools, malls, restaurants, clinics, 24/7 security.",
      "Enjoy modern life services in a luxurious compound."
    ]
  },
  {
    title: "The Towers",
    img: "https://i.ibb.co/BV0R1bVh/Whisk-ff8a25183e6593f8e80440e1f16936f5dr.jpg",
    price: "35,760,000 LE",
    facts: [
      "217 m² / 2 rooms",
      "1.2% down payment (429,120 LE)",
      "Annual installments"
    ]
  },
  {
    title: "Seaside Residence",
    img: "https://i.ibb.co/Hfb5yLB7/Whisk-b1b928524b38ce0bb1c4c42721665c96dr.jpg",
    price: "9,187,000 LE",
    facts: [
      "120 m² Latin Quarter, sea view",
      "1.2% down payment (110,244 LE)",
      "Monthly installment: 27,276 LE"
    ]
  },
  {
    title: "Mazarine New Alamein",
    img: "https://i.ibb.co/F4KZVW2w/Whisk-a5271090ae21e90b6cc417a435a0c9c3dr.jpg",
    price: "Contact for price",
    facts: [
      "Strategic location next to Rixos.",
      "Steps away from O Mall.",
      "Fully finished apartments."
    ]
  }
];

// ===== I18N =====
const I18N_DATA = {
  ar: {
    navProps:'العقارات', navContact:'تواصل', navAbout:'عنّا',
    heroTitle:'SIGHT REAL ESTATE <strong>DEVELOPMENT</strong>', heroTag:'حلول مستدامة ومواقع استراتيجية للمكاتب والمساحات التجارية.',
    ctaView:'تصفُّح المعروض', ctaWhatsapp:'واتساب',
    galleryTitle:'معرض العقارات', searchPlaceholder:'ابحث عن عقار…',
    featureTitle:'عيش استقلالك في مزارين', rooms:'غرف', baths:'حمام', garage:'جراج', kitchen:'مطبخ', downpayment:'المقدم',
    featureBullets:'شقق متشطبة بالكامل (غاز ومياه وكهرباء). واجهات حديثة وتصميم أنيق. موقع استراتيجي بجوار ركسوس ومارينا 7. استلام خلال 6 شهور — تقسيط حتى 15 سنة.',
    bookNow:'احجز الآن',
    formTitle:'اترك بياناتك ونتواصل معك', name:'الاسم', email:'البريد', phone:'موبايل', namePh:'اسمك', emailPh:'example@mail.com', phonePh:'0100 000 0000', sendWhats:'إرسال عبر واتساب',
    aboutTab:'عن SIGHT', locTab:'مواقعنا', connectTitle:'تواصل معنا',
    aboutP1:'سايت للتطوير العقاري هي قوة رائدة في سوق العقارات المصري...',
    aboutP2:'مع وجود واثق في كل محافظة...',
    cookieText:'هذا الموقع يستخدم ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة.', cookieBtn:'مفهوم',
    formAlerts: {
      nameMissing: 'الرجاء إدخال الاسم.',
      phoneMissing: 'الرجاء إدخال رقم الهاتف.',
      phoneInvalid: 'الرجاء إدخال رقم هاتف صحيح مكون من 11 رقمًا (مثال: 01xxxxxxxxx).',
      emailInvalid: 'الرجاء إدخال بريد إلكتروني صالح.'
    },
    whatsAppMsg: { name: 'الاسم', phone: 'الهاتف', email: 'البريد', property: 'مهتم بـ', footer: '(مُرسل من موقع SIGHT)' }
  },
  en: {
    navProps:'Properties', navContact:'Contact', navAbout:'About',
    heroTitle:'SIGHT REAL ESTATE <strong>DEVELOPMENT</strong>', heroTag:'Sustainable solutions and strategic locations for office & commercial spaces.',
    ctaView:'View Gallery', ctaWhatsapp:'WhatsApp',
    galleryTitle:'PROPERTY GALLERY', searchPlaceholder:'Search properties…',
    featureTitle:'Live Your Independence in Mazarine', rooms:'Bedrooms', baths:'Bathrooms', garage:'Garage', kitchen:'Kitchen', downpayment:'Down payment',
    featureBullets:'Fully finished apartments with gas, water, and electricity...',
    bookNow:'Book Now',
    formTitle:'Leave your info & we will contact you', name:'Name', email:'Email', phone:'Phone', namePh:'Your name', emailPh:'your@email.com', phonePh:'0100 000 0000', sendWhats:'Send via WhatsApp',
    aboutTab:'About SIGHT', locTab:'Our Locations', connectTitle:'Connect With Us',
    aboutP1:'SIGHT Real Estate Development is a leading force...',
    aboutP2:'With a confident presence in every governorate...',
    cookieText:'This website uses cookies to ensure you get the best experience on our website.', cookieBtn:'Got it!',
    formAlerts: {
      nameMissing: 'Please enter your name.',
      phoneMissing: 'Please enter your phone number.',
      phoneInvalid: 'Please enter a valid 11-digit Egyptian phone number (e.g. 01xxxxxxxxx).',
      emailInvalid: 'Please enter a valid email address.'
    },
    whatsAppMsg: { name: 'Name', phone: 'Phone', email: 'Email', property: 'Interested in', footer: '(Sent from SIGHT website)' }
  }
};

// ===== GLOBAL STATE =====
let state: {
  lang: 'en' | 'ar';
  sliderIdx: number;
  sliderTimer: any;
  selectedProperty: string | null;
} = {
  lang: 'en',
  sliderIdx: 0,
  sliderTimer: null,
  selectedProperty: null
};

// ===== LAZY DOM RESOLVER =====
function getDOM() {
  const html = document.documentElement;
  const slidesContainer = document.getElementById('slides');
  const dotsContainer = document.getElementById('dots');
  const galleryGrid = document.getElementById('galleryGrid');
  const formMsg = document.getElementById('formMsg');
  const propertySearch = document.getElementById('propertySearch') as HTMLInputElement | null;
  return { html, slidesContainer, dotsContainer, galleryGrid, formMsg, propertySearch };
}

// ===== RENDER FUNCTIONS =====
function renderSlides() {
  const { slidesContainer } = getDOM();
  if (!slidesContainer) return console.warn('[ui] #slides not found');
  slidesContainer.innerHTML = SLIDES_DATA.map((slide, i) =>
    `<div class="slide ${i === 0 ? 'is-active' : ''}" style="background-image:url('${slide.img}')"></div>`
  ).join('');
}

function renderProperties(properties = PROPERTIES_DATA) {
  const { galleryGrid } = getDOM();
  if (!galleryGrid) return console.warn('[ui] #galleryGrid not found');

  if (properties.length === 0) {
    galleryGrid.innerHTML = `<p class="no-results">No properties found matching your search.</p>`;
    return;
  }
  galleryGrid.innerHTML = properties.map(prop => `
    <article class="card">
      <div class="thumb" style="background-image:url('${prop.img}')"></div>
      <div class="card-body">
        <h3 class="card-title">${prop.title}</h3>
        <p class="price">${prop.price}</p>
        <ul class="facts">
          ${prop.facts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
        <button class="btn book" data-property-title="${prop.title}">Book Now</button>
      </div>
    </article>
  `).join('');

  attachBookingButtonListeners();
}

function renderDots() {
  const { dotsContainer } = getDOM();
  if (!dotsContainer) return;

  dotsContainer.innerHTML = SLIDES_DATA.map((_, i) =>
    `<b class="dot ${i === state.sliderIdx ? 'is-active' : ''}" data-index="${i}"></b>`
  ).join('');

  document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
      const el = e.target as HTMLElement | null;
      const idxAttr = el?.dataset?.index;
      if (typeof idxAttr === 'undefined') return;
      const index = parseInt(idxAttr, 10);
      if (Number.isFinite(index)) {
        showSlide(index);
        startSlider();
      }
    });
  });
}

// ===== LOGIC =====
function applyLang(lang: 'en' | 'ar') {
  state.lang = lang;
  const dict = I18N_DATA[lang];
  const { html } = getDOM();
  html.lang = (lang === 'ar' ? 'ar' : 'en');
  html.dir = (lang === 'ar' ? 'rtl' : 'ltr');

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n')!;
    if ((dict as any)[key] !== undefined) el.innerHTML = (dict as any)[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder')!;
    if ((dict as any)[key] !== undefined) el.setAttribute('placeholder', (dict as any)[key]);
  });
  localStorage.setItem('lang', lang);
}

function showSlide(n: number) {
  const slides = document.querySelectorAll<HTMLElement>('.slide');
  if (slides.length === 0) return;
  slides[state.sliderIdx]?.classList.remove('is-active');
  state.sliderIdx = (n + slides.length) % slides.length;
  slides[state.sliderIdx]?.classList.add('is-active');

  const dots = document.querySelectorAll<HTMLElement>('.dot');
  dots.forEach(d => d.classList.remove('is-active'));
  dots[state.sliderIdx]?.classList.add('is-active');
}

function startSlider() {
  stopSlider();
  state.sliderTimer = setInterval(() => showSlide(state.sliderIdx + 1), 5000);
}
function stopSlider() {
  if (state.sliderTimer) clearInterval(state.sliderTimer);
}

function handleWhatsAppSend() {
  const name = (document.getElementById('fName') as HTMLInputElement | null)?.trim?.() ?? (document.getElementById('fName') as HTMLInputElement | null)?.value?.trim() ?? '';
  const phone = (document.getElementById('fPhone') as HTMLInputElement | null)?.value?.trim() ?? '';
  const email = (document.getElementById('fEmail') as HTMLInputElement | null)?.value?.trim() ?? '';
  const { formMsg } = getDOM();
  if (formMsg) formMsg.textContent = '';

  const formAlerts = I18N_DATA[state.lang].formAlerts;

  if (!name) { formMsg && (formMsg.textContent = formAlerts.nameMissing); return; }
  if (!phone) { formMsg && (formMsg.textContent = formAlerts.phoneMissing); return; }
  const phoneRegex = /^01\d{9}$/;
  if (!phoneRegex.test(phone)) { formMsg && (formMsg.textContent = formAlerts.phoneInvalid); return; }
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) { formMsg && (formMsg.textContent = formAlerts.emailInvalid); return; }
  }

  const dict = I18N_DATA[state.lang].whatsAppMsg;
  const parts = [
    `${dict.name}: ${name}`,
    `${dict.phone}: ${phone}`
  ];
  if (email) parts.push(`${dict.email}: ${email}`);
  if (state.selectedProperty) parts.push(`${dict.property}: ${state.selectedProperty}`);
  parts.push(dict.footer);

  const text = encodeURIComponent(parts.join('\n'));
  window.open(`https://wa.me/201099993903?text=${text}`, '_blank');
  state.selectedProperty = null;
}

// ===== EVENTS =====
function attachBookingButtonListeners() {
  document.querySelectorAll<HTMLButtonElement>('.book').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      state.selectedProperty = btn.getAttribute('data-property-title');
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

      const formTitle = document.querySelector<HTMLElement>('#contact .section-title');
      if (formTitle) {
        formTitle.textContent = `Inquiring about: ${state.selectedProperty}`;
        setTimeout(() => { formTitle.textContent = I18N_DATA[state.lang].formTitle; }, 3000);
      }
    });
  });
}

function initEventListeners() {
  document.getElementById('next')?.addEventListener('click', () => { showSlide(state.sliderIdx + 1); startSlider(); });
  document.getElementById('prev')?.addEventListener('click', () => { showSlide(state.sliderIdx - 1); startSlider(); });
  document.querySelector('.hero')?.addEventListener('mouseenter', stopSlider);
  document.querySelector('.hero')?.addEventListener('mouseleave', startSlider);

  document.getElementById('whatsSend')?.addEventListener('click', handleWhatsAppSend);

  const cookieBar = document.getElementById('cookieBar');
  if (cookieBar && !localStorage.getItem('cookie_ack')) cookieBar.classList.add('show');
  document.getElementById('cookieOk')?.addEventListener('click', () => {
    localStorage.setItem('cookie_ack', '1');
    cookieBar?.classList.remove('show');
  });

  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const { html } = getDOM();
    html.classList.toggle('light');
    localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
  });

  document.getElementById('langToggle')?.addEventListener('click', () => {
    applyLang(state.lang === 'ar' ? 'en' : 'ar');
  });

  const qrOpen = document.getElementById('qrOpen');
  const qrModal = document.getElementById('qrModal');
  const qrClose = document.getElementById('qrClose');
  if (qrOpen && qrModal) {
    qrOpen.addEventListener('click', (e) => { e.preventDefault(); qrModal.classList.add('show'); });
    qrClose?.addEventListener('click', () => qrModal.classList.remove('show'));
    qrModal.addEventListener('click', (e) => { if (e.target === qrModal) qrModal.classList.remove('show'); });
  }

  const { propertySearch } = getDOM();
  propertySearch?.addEventListener('keyup', () => {
    const searchTerm = propertySearch.value.toLowerCase().trim();
    const filtered = PROPERTIES_DATA.filter(p => p.title.toLowerCase().includes(searchTerm));
    renderProperties(filtered);
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderSlides();
  renderProperties();
  renderDots();

  // Prefs
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') document.documentElement.classList.add('light');

  const savedLang = localStorage.getItem('lang');
  applyLang(savedLang === 'ar' ? 'ar' : 'en');

  initEventListeners();
  startSlider();

  // Dev checks (بدل ما نكسر الصفحة)
  const missing: string[] = [];
  if (!document.getElementById('slides')) missing.push('#slides');
  if (!document.getElementById('galleryGrid')) missing.push('#galleryGrid');
  if (missing.length) console.warn('[ui] Missing elements:', missing.join(', '));
});
