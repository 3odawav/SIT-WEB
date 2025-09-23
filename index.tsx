

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

// ===== DATA: I18N (TRANSLATIONS) =====
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
      aboutP1:'سايت للتطوير العقاري هي قوة رائدة في سوق العقارات المصري. نحن متخصصون في توفير المساحات المكتبية والتجارية المتميزة المصممة لتمكين الأعمال. محفظتنا هي شهادة على التزامنا بالجودة والاستدامة والموقع الاستراتيجي.',
      aboutP2:'مع وجود واثق في كل محافظة، نجمع بين الخبرة المحلية والمعايير الدولية لتقديم عقارات ليست مجرد مبانٍ، بل معالم للنجاح. مهمتنا هي خلق قيمة لعملائنا ومجتمعاتنا من خلال حلول عقارية مبتكرة ومستدامة.',
      cookieText:'هذا الموقع يستخدم ملفات تعريف الارتباط لضمان حصولك على أفضل تجربة.', cookieBtn:'مفهوم',
      formAlert: 'الرجاء إدخال الاسم ورقم الهاتف.',
      whatsAppMsg: { name: 'الاسم', phone: 'الهاتف', email: 'البريد', property: 'مهتم بـ', footer: '(مُرسل من موقع SIGHT)' }
    },
    en: {
      navProps:'Properties', navContact:'Contact', navAbout:'About',
      heroTitle:'SIGHT REAL ESTATE <strong>DEVELOPMENT</strong>', heroTag:'Sustainable solutions and strategic locations for office & commercial spaces.',
      ctaView:'View Gallery', ctaWhatsapp:'WhatsApp',
      galleryTitle:'PROPERTY GALLERY', searchPlaceholder:'Search properties…',
      featureTitle:'Live Your Independence in Mazarine', rooms:'Bedrooms', baths:'Bathrooms', garage:'Garage', kitchen:'Kitchen', downpayment:'Down payment',
      featureBullets:'Fully finished apartments with gas, water, and electricity. Modern facades and elegant architecture. Strategic location near Rixos & Marina 7. Delivery within 6 months — Installments up to 15 years.',
      bookNow:'Book Now',
      formTitle:'Leave your info & we will contact you', name:'Name', email:'Email', phone:'Phone', namePh:'Your name', emailPh:'your@email.com', phonePh:'0100 000 0000', sendWhats:'Send via WhatsApp',
      aboutTab:'About SIGHT', locTab:'Our Locations', connectTitle:'Connect With Us',
      aboutP1:'SIGHT Real Estate Development is a leading force in the Egyptian real estate market. We specialize in premium office and commercial spaces designed to empower businesses. Our portfolio reflects a commitment to quality, sustainability, and strategic location.',
      aboutP2:'With a confident presence in every governorate, we pair local expertise with international standards to deliver properties that become landmarks of success. Our mission is to create value for our clients and communities through innovative, sustainable real estate solutions.',
      cookieText:'This website uses cookies to ensure you get the best experience on our website.', cookieBtn:'Got it!',
      formAlert: 'Please fill in your name and phone number.',
      whatsAppMsg: { name: 'Name', phone: 'Phone', email: 'Email', property: 'Interested in', footer: '(Sent from SIGHT website)' }
    }
};

// ===== GLOBAL STATE =====
let state = {
  lang: 'en',
  sliderIdx: 0,
  sliderTimer: null,
  selectedProperty: null,
};

// ===== DOM ELEMENTS =====
const DOMElements = {
  html: document.documentElement,
  slidesContainer: document.getElementById('slides'),
  dotsContainer: document.getElementById('dots'),
  galleryGrid: document.getElementById('galleryGrid'),
  formMsg: document.getElementById('formMsg'),
};

// ===== RENDER FUNCTIONS =====
function renderSlides() {
  DOMElements.slidesContainer.innerHTML = SLIDES_DATA.map((slide, i) => `
    <div class="slide ${i === 0 ? 'is-active' : ''}" style="background-image:url('${slide.img}')"></div>
  `).join('');
}

function renderProperties() {
  DOMElements.galleryGrid.innerHTML = PROPERTIES_DATA.map(prop => `
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
  
  // Re-attach listeners after rendering
  attachBookingButtonListeners();
}

// ===== LOGIC & HANDLERS =====
function applyLang(lang) {
  state.lang = lang;
  const dict = I18N_DATA[lang];
  DOMElements.html.lang = (lang === 'ar' ? 'ar' : 'en');
  DOMElements.html.dir = (lang === 'ar' ? 'rtl' : 'ltr');
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
  localStorage.setItem('lang', lang);
}

function handleWhatsAppSend() {
  // FIX: Cast elements to HTMLInputElement to access the 'value' property.
  const name = (document.getElementById('fName') as HTMLInputElement).value.trim();
  const phone = (document.getElementById('fPhone') as HTMLInputElement).value.trim();
  const email = (document.getElementById('fEmail') as HTMLInputElement).value.trim();
  
  DOMElements.formMsg.textContent = ''; // Clear previous messages
  
  if (!name || !phone) {
    DOMElements.formMsg.textContent = I18N_DATA[state.lang].formAlert;
    return;
  }
  
  const dict = I18N_DATA[state.lang].whatsAppMsg;
  const parts = [
    `${dict.name}: ${name}`,
    `${dict.phone}: ${phone}`
  ];
  if (email) {
    parts.push(`${dict.email}: ${email}`);
  }
  if (state.selectedProperty) {
    parts.push(`${dict.property}: ${state.selectedProperty}`);
  }
  parts.push(dict.footer);
  
  const text = encodeURIComponent(parts.join('\n'));
  window.open(`https://wa.me/201099993903?text=${text}`, '_blank');
  state.selectedProperty = null; // Reset after sending
}

// ===== SLIDER LOGIC =====
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slides[state.sliderIdx].classList.remove('is-active');
  state.sliderIdx = (n + slides.length) % slides.length;
  slides[state.sliderIdx].classList.add('is-active');
  
  const dots = document.querySelectorAll('.dot');
  dots.forEach(d => d.classList.remove('is-active'));
  if (dots[state.sliderIdx]) {
    dots[state.sliderIdx].classList.add('is-active');
  }
}

function startSlider() {
  stopSlider();
  state.sliderTimer = setInterval(() => showSlide(state.sliderIdx + 1), 5000);
}

function stopSlider() {
  if (state.sliderTimer) clearInterval(state.sliderTimer);
}

function renderDots() {
    DOMElements.dotsContainer.innerHTML = SLIDES_DATA.map((_, i) =>
        `<b class="dot ${i === state.sliderIdx ? 'is-active' : ''}" data-index="${i}"></b>`
    ).join('');
    
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', (e) => {
            // FIX: Cast e.target to HTMLElement to access 'dataset' property.
            const index = parseInt((e.target as HTMLElement).dataset.index, 10);
            showSlide(index);
            startSlider();
        });
    });
}


// ===== EVENT LISTENERS SETUP =====
function attachBookingButtonListeners() {
  document.querySelectorAll('.book').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      state.selectedProperty = btn.getAttribute('data-property-title');
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      // Optional: Highlight the form or show a message
      const formTitle = document.querySelector('#contact .section-title');
      formTitle.textContent = `Inquiring about: ${state.selectedProperty}`;
      setTimeout(() => formTitle.textContent = I18N_DATA[state.lang].formTitle, 3000);
    });
  });
}

function initEventListeners() {
  // Slider Controls
  document.getElementById('next').addEventListener('click', () => { showSlide(state.sliderIdx + 1); startSlider(); });
  document.getElementById('prev').addEventListener('click', () => { showSlide(state.sliderIdx - 1); startSlider(); });
  document.querySelector('.hero').addEventListener('mouseenter', stopSlider);
  document.querySelector('.hero').addEventListener('mouseleave', startSlider);

  // Form
  document.getElementById('whatsSend').addEventListener('click', handleWhatsAppSend);

  // Cookie Bar
  const cookieBar = document.getElementById('cookieBar');
  if (!localStorage.getItem('cookie_ack')) { cookieBar.classList.add('show'); }
  document.getElementById('cookieOk').addEventListener('click', () => {
    localStorage.setItem('cookie_ack', '1');
    cookieBar.classList.remove('show');
  });

  // Theme Toggle
  document.getElementById('themeToggle').addEventListener('click', () => {
    DOMElements.html.classList.toggle('light');
    localStorage.setItem('theme', DOMElements.html.classList.contains('light') ? 'light' : 'dark');
  });

  // Language Toggle
  document.getElementById('langToggle').addEventListener('click', () => {
    applyLang(state.lang === 'ar' ? 'en' : 'ar');
  });
  
  // QR Modal
  const qrOpen = document.getElementById('qrOpen');
  const qrModal = document.getElementById('qrModal');
  const qrClose = document.getElementById('qrClose');
  if (qrOpen && qrModal) {
    qrOpen.addEventListener('click', (e) => { e.preventDefault(); qrModal.classList.add('show'); });
    qrClose.addEventListener('click', () => qrModal.classList.remove('show'));
    qrModal.addEventListener('click', (e) => { if (e.target === qrModal) qrModal.classList.remove('show'); });
  }

  // Segmented Tabs (About/Location)
  const tabBtns = [...document.querySelectorAll('.seg-btn')];
  const tabPanels = [...document.querySelectorAll('.panel')];
  tabBtns.forEach(btn => btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    tabPanels.forEach(p => p.classList.remove('show'));
    // FIX: Cast btn to HTMLElement to access 'dataset' property.
    const targetPanel = document.getElementById((btn as HTMLElement).dataset.target);
    if (targetPanel) targetPanel.classList.add('show');
  }));
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Initial Renders
  renderSlides();
  renderProperties();
  renderDots();

  // Load preferences from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') DOMElements.html.classList.add('light');
  
  const savedLang = localStorage.getItem('lang');
  applyLang(savedLang === 'ar' ? 'ar' : 'en');
  
  // Setup all event listeners
  initEventListeners();
  
  // Start slider
  startSlider();
});