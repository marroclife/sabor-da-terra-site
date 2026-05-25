// --- DATA STORES: BOTANICAL HERBARIUM & PRODUCTS ---

const herbarioData = [
  {
    id: "curcuma",
    name: "Cúrcuma",
    scientificName: "Curcuma longa",
    type: "spice",
    benefits: ["Anti-inflamatório", "Antioxidante", "Digestivo", "Imunidade"],
    tags: ["Imunidade", "Digestivo", "Anti-inflamatório"],
    origin: "Sul da Ásia / Índia",
    description: "Conhecida também como açafrão-da-terra, é uma raiz dourada venerada na medicina Ayurveda há milênios por suas potentes propriedades terapêuticas derivadas da curcumina.",
    compounds: "Curcumina, óleos essenciais (turmerona), potássio, ferro e vitamina B6.",
    howToUse: "Adicione em sopas, arroz, vegetais assados, frango, ovos mexidos e currys. Combina muito bem com pimenta-preta.",
    contraindications: "Evitar o uso terapêutico de altas doses durante a gestação ou por pessoas com cálculos biliares.",
    preparation: {
      type: "cooking",
      time: 600, // 10 mins de cozimento para liberação
      temp: "100°C",
      tip: "Sempre adicione uma pitada de pimenta-preta (piperina) e gordura saudável (azeite ou óleo de coco) ao cozinhar com cúrcuma. Isso aumenta a absorção da curcumina no corpo em até 2000%!"
    },
    storeProducts: ["prod-curcuma-po"],
    image: "assets/curcuma.jpg"
  },
  {
    id: "cardamomo",
    name: "Cardamomo",
    scientificName: "Elettaria cardamomum",
    type: "tea-spice",
    benefits: ["Digestivo", "Termogênico", "Respiratório", "Calmante"],
    tags: ["Digestivo", "Calmante"],
    origin: "Sul da Índia e Sri Lanka",
    description: "Conhecida como a 'Rainha das Especiarias'. Suas delicadas bagas verdes protegem sementes pretas de sabor intensamente aromático, doce, cítrico e mentolado.",
    compounds: "Cineol, limoneno, terpineno, acetato de terpinila e minerais essenciais.",
    howToUse: "Delicioso no preparo do café árabe tradicional, no chá Chai indiano, em bolos de especiarias e no arroz basmati salgado.",
    contraindications: "Geralmente seguro. Consumir moderadamente em casos de úlceras estomacais.",
    preparation: {
      type: "infusion",
      time: 480, // 8 mins
      temp: "95°C",
      tip: "Esmague as bagas verdes sutilmente com os dedos ou pilão antes de colocar na água quente ou prato. Isso rompe a casca protetora e liberta os óleos voláteis aromáticos."
    },
    storeProducts: ["prod-cardamomo-bagas", "prod-blend-chai"],
    image: "assets/cardamomo.jpg"
  },
  {
    id: "oregano",
    name: "Orégano",
    scientificName: "Origanum vulgare",
    type: "spice",
    benefits: ["Antibacteriano", "Antifúngico", "Digestivo", "Antioxidante"],
    tags: ["Digestivo", "Imunidade"],
    origin: "Região do Mediterrâneo",
    description: "Uma das ervas mais amadas do mundo culinário. Suas folhas secas concentram carvacrol e timol, poderosos compostos que combatem infecções e ajudam na conservação de alimentos.",
    compounds: "Carvacrol, timol, flavonoides, ácido rosmarínico e fibras minerais.",
    howToUse: "Indispensável em molhos de tomate, pizzas, queijos marinados, legumes grelhados e marinadas de aves.",
    contraindications: "Muito seguro. Consumir em quantidades culinárias normais.",
    preparation: {
      type: "cooking",
      time: 300, // 5 mins
      temp: "95°C",
      tip: "Esfregue as folhas secas entre as palmas das mãos logo antes de jogá-las na panela. O calor do atrito ajuda a reativar os óleos aromáticos adormecidos."
    },
    storeProducts: ["prod-oregano-premium"],
    image: "assets/oregano.jpg"
  },
  {
    id: "camomila",
    name: "Camomila",
    scientificName: "Matricaria chamomilla",
    type: "tea",
    benefits: ["Calmante", "Digestivo", "Anti-inflamatório", "Relaxamento"],
    tags: ["Calmante", "Digestivo"],
    origin: "Europa e Ásia Ocidental",
    description: "O chá do aconchego. Suas flores amarelas e brancas de aroma doce e frutado contêm apigenina, um composto natural que atua no cérebro promovendo sono e calmaria profunda.",
    compounds: "Apigenina, camazuleno, bisabolol e cumarina.",
    howToUse: "Principalmente como chá relaxante noturno, mas suas flores podem decorar sobremesas ou compor banhos de assento terapêuticos.",
    contraindications: "Pessoas com raras alergias graves a plantas da família Asteraceae (como margaridas) devem tomar cuidado.",
    preparation: {
      type: "infusion",
      time: 300, // 5 mins
      temp: "90°C",
      tip: "Abafe a xícara ou bule durante a infusão. Os óleos medicinais da camomila evaporam muito facilmente; mantendo o vapor dentro da xícara, os compostos permanecem na água."
    },
    storeProducts: ["prod-camomila-inteira", "prod-blend-relax"],
    image: "assets/camomila.jpg"
  },
  {
    id: "alecrim",
    name: "Alecrim",
    scientificName: "Salvia rosmarinus",
    type: "tea-spice",
    benefits: ["Foco e Concentração", "Digestivo", "Circulatório", "Antioxidante"],
    tags: ["Energizante", "Digestivo"],
    origin: "Encostas do Mediterrâneo",
    description: "A 'Erva da Alegria e Memória'. Seus aromas de pinho revigoram o sistema nervoso, estimulando a circulação sanguínea no cérebro, melhorando a cognição e aliviando a exaustão mental.",
    compounds: "Ácido rosmarínico, cineol, cânfora, flavonoides e taninos.",
    howToUse: "Fabuloso com batatas assadas, pães artesanais (focaccia), carne bovina e suína, e em chás estimulantes para as manhãs de estudo.",
    contraindications: "Evitar chás concentrados de alecrim em grávidas ou indivíduos hipertensos em uso de medicações fortes.",
    preparation: {
      type: "infusion",
      time: 420, // 7 mins
      temp: "95°C",
      tip: "Perfeito para misturar com chá verde ou limão logo cedo. O alecrim dá um 'boost' de energia limpa sem causar a ansiedade ou o pico de adrenalina que o café provoca."
    },
    storeProducts: ["prod-alecrim-organico"],
    image: "assets/alecrim.jpg"
  },
  {
    id: "hortela",
    name: "Hortelã",
    scientificName: "Mentha x piperita",
    type: "tea",
    benefits: ["Digestivo", "Respiratório", "Espasmolítico", "Refrescante"],
    tags: ["Digestivo", "Energizante"],
    origin: "Europa e Oriente Médio",
    description: "Uma explosão refrescante de mentol. Atua diretamente relaxando os músculos do trato digestivo, aliviando cólicas estomacais, gases e desobstruindo vias aéreas de forma imediata.",
    compounds: "Mentol, mentona, flavonoides e acetato de mentila.",
    howToUse: "Infusão gelada com limão nas tardes quentes, no tempero de pratos árabes (como quibe e tabule) e saladas de frutas.",
    contraindications: "Evitar o uso em pessoas com refluxo gastroesofágico grave, pois o relaxamento do esfíncter pode acentuar a azia.",
    preparation: {
      type: "infusion",
      time: 300, // 5 mins
      temp: "90°C",
      tip: "Caso queira um chá de hortelã super refrescante, dê um 'tapa' nas folhas frescas ou esfregue-as para quebrar as vesículas de mentol antes de jogar a água quente por cima."
    },
    storeProducts: ["prod-camomila-inteira"], // Fallback link
    image: "assets/hortela.jpg"
  },
  {
    id: "gengibre",
    name: "Gengibre",
    scientificName: "Zingiber officinale",
    type: "tea-spice",
    benefits: ["Termogênico", "Anti-inflamatório", "Anti-náusea", "Imunidade"],
    tags: ["Imunidade", "Energizante", "Anti-inflamatório"],
    origin: "Ilhas da Indonésia / Sul da Ásia",
    description: "Um rizoma picante e ardente de ação termogênica. O gingerol presente nas fibras atua acalmando enjôos, acelerando o metabolismo e combatendo inflamações corporais crônicas.",
    compounds: "Gingerol, chogaol, óleos voláteis e vitamina C.",
    howToUse: "Chás estimulantes de inverno, raspas em sucos verdes detox, refogados orientais na panela Wok e sopas de abóbora.",
    contraindications: "Indivíduos com distúrbios hemorrágicos ou que tomam anticoagulantes devem consumir de forma moderada.",
    preparation: {
      type: "cooking",
      time: 600, // 10 mins
      temp: "100°C",
      tip: "Para aproveitar a potência anti-náusea e termogênica total, corte o gengibre em fatias finas e faça uma decocção (cozinhar na água fervendo por 10 minutos) em vez de apenas derramar água quente."
    },
    storeProducts: ["prod-curcuma-po"], // Fallback link
    image: "assets/gengibre.jpg"
  },
  {
    id: "hibisco",
    name: "Hibisco",
    scientificName: "Hibiscus sabdariffa",
    type: "tea",
    benefits: ["Diurético", "Antioxidante", "Hipotensor", "Emagrecedor"],
    tags: ["Imunidade"],
    origin: "África Oriental e Ásia",
    description: "Flores vermelhas e carnudas (cálices) de acidez exuberante que lembram frutas vermelhas. Ricas em antocianinas, ajudam no controle da pressão arterial e na eliminação de retenção hídrica.",
    compounds: "Ácido cítrico, ácido málico, antocianinas, flavonoides e vitamina C.",
    howToUse: "Chá gelado com rodelas de laranja e canela, geléias artesanais gourmet ou em xaropes caseiros saudáveis para drinks.",
    contraindications: "Evitar o consumo em excesso por mulheres que estão tentando engravidar ou gestantes devido a leve ação estrogênica.",
    preparation: {
      type: "infusion",
      time: 360, // 6 mins
      temp: "95°C",
      tip: "O hibisco gelado fica incrivelmente encorpado e delicioso. Para um chá refrescante de verão, prepare com água quente, espere amornar, junte hortelã fresca e gelo à vontade!"
    },
    storeProducts: ["prod-camomila-inteira"], // Fallback link
    image: "assets/hibisco.jpg"
  }
];

const produtosData = [
  {
    id: "prod-curcuma-po",
    name: "Cúrcuma Premium Em Pó (Açafrão-da-Terra)",
    category: "spice",
    price: 24.90,
    description: "Raiz selecionada moída na pedra, ultra concentrada em curcumina ativa. Sabor terroso clássico e cor dourada vibrante.",
    badge: "Mais Vendido",
    weight: "120g",
    image: "assets/prod_curcuma.jpg"
  },
  {
    id: "prod-cardamomo-bagas",
    name: "Cardamomo Verde Em Bagas Inteiras",
    category: "spice",
    price: 38.00,
    description: "Bagas verdes premium importadas do Sri Lanka. Aroma exótico de mentol doce ideal para moagem na hora.",
    badge: "Raro",
    weight: "50g",
    image: "assets/prod_cardamomo.jpg"
  },
  {
    id: "prod-oregano-premium",
    name: "Orégano Chileno Desidratado Premium",
    category: "spice",
    price: 18.50,
    description: "Folhas secas selecionadas ao sol nas encostas andinas chilenas. Sabor intensamente aromático e picante.",
    badge: "Orgânico",
    weight: "60g",
    image: "assets/prod_oregano.jpg"
  },
  {
    id: "prod-camomila-inteira",
    name: "Flor de Camomila Inteira Extra Categoria",
    category: "tea",
    price: 22.00,
    description: "Apenas flores douradas e inteiras de camomila colhidas manualmente. Doçura frutada sutil que acalma a noite.",
    badge: "100% Flores",
    weight: "50g",
    image: "assets/prod_camomila.jpg"
  },
  {
    id: "prod-alecrim-organico",
    name: "Alecrim Aromático Orgânico Desidratado",
    category: "spice",
    price: 16.00,
    description: "Folhas de alecrim de cultivo agroecológico local. Secagem lenta que preserva os óleos voláteis do pinho.",
    badge: "Artesanal",
    weight: "70g",
    image: "assets/prod_alecrim.jpg"
  },
  {
    id: "prod-blend-relax",
    name: "Blend Herbal Relaxamento Profundo",
    category: "tea",
    price: 29.90,
    description: "Combinação sinérgica de Flor de Camomila, Capim-Limão e Melissa. Ideal para preparar o corpo para o sono.",
    badge: "Autoral",
    weight: "60g",
    image: "assets/prod_blend_relax.jpg"
  },
  {
    id: "prod-blend-chai",
    name: "Classic Masala Chai Especiarias",
    category: "tea",
    price: 32.00,
    description: "Chá preto encorpado misturado com cardamomo, canela, gengibre, cravo e pimenta-preta. Energia exótica e quente.",
    badge: "Fórmula Clássica",
    weight: "80g",
    image: "assets/prod_blend_chai.jpg"
  },
  {
    id: "prod-infusor-aço",
    name: "Infusor de Chá Pinça (Golden Edition)",
    category: "accessories",
    price: 45.00,
    description: "Aço inoxidável com revestimento eletrostático dourado. Mola de pressão perfeita para chá individual.",
    badge: "Edição Limitada",
    weight: "1 unidade",
    image: "assets/prod_infusor.jpg"
  }
];

// --- APP STATE ---
const state = {
  cart: [],
  activeView: "home-view",
  currentTheme: "light",
  herbariumSearchQuery: "",
  herbariumSelectedBenefit: "all",
  activeProductCategory: "all",
  
  // Timer State
  timerInterval: null,
  timerTimeLeft: 0,
  timerTotalTime: 0,
  timerIsRunning: false,
  timerActiveHerbId: null,

  // Quiz State
  quizAnswers: {},
  quizCurrentStep: 1
};

// --- DOM ELEMENTS REFERENCE ---
const DOM = {
  navLinks: document.querySelectorAll('.nav-link'),
  views: document.querySelectorAll('.view-panel'),
  logo: document.getElementById('header-logo'),
  heroGotoStore: document.getElementById('hero-goto-store'),
  heroGotoHerbarium: document.getElementById('hero-goto-herbarium'),
  homeGotoFullHerbarium: document.getElementById('home-goto-full-herbarium'),
  curationBtnTeas: document.getElementById('curation-btn-teas'),
  curationBtnSpices: document.getElementById('curation-btn-spices'),
  searchTrigger: document.getElementById('search-trigger'),
  
  // Herbarium & Store Grid elements
  featuredHerbsContainer: document.getElementById('featured-herbs-container'),
  productsGrid: document.getElementById('products-grid'),
  herbariumGrid: document.getElementById('herbarium-grid'),
  
  // Filters
  herbariumSearch: document.getElementById('herbarium-search'),
  herbBenefitFilters: document.querySelectorAll('.filter-pill'),
  storeCategoryFilters: document.querySelectorAll('.category-btn'),
  
  // Drawers & Backdrops
  backdrop: document.getElementById('main-drawer-backdrop'),
  botanicalDrawer: document.getElementById('botanical-drawer'),
  botanicalClose: document.getElementById('botanical-close'),
  botanicalContent: document.getElementById('botanical-drawer-content'),
  cartDrawer: document.getElementById('cart-drawer'),
  cartClose: document.getElementById('cart-close'),
  cartTrigger: document.getElementById('cart-trigger'),
  cartItemsWrapper: document.getElementById('cart-items-wrapper'),
  cartBadgeCount: document.getElementById('cart-badge-count'),
  
  // Cart footer details
  cartSubtotal: document.getElementById('cart-subtotal-value'),
  cartShipping: document.getElementById('cart-shipping-value'),
  cartTotal: document.getElementById('cart-total-value'),
  shippingText: document.getElementById('shipping-progress-text'),
  shippingFill: document.getElementById('shipping-progress-fill'),
  checkoutBtn: document.getElementById('cart-checkout-btn'),
  
  // Theme Toggle
  themeToggleBtn: document.getElementById('theme-toggle'),
  sunIcon: document.querySelector('.sun-icon'),
  moonIcon: document.querySelector('.moon-icon'),
  
  // Quiz
  homeTriggerQuiz: document.getElementById('home-trigger-quiz'),
  curationQuizTrigger: document.getElementById('curation-quiz'),
  quizModalBackdrop: document.getElementById('quiz-modal-backdrop'),
  quizClose: document.getElementById('quiz-close'),
  quizSteps: document.querySelectorAll('.quiz-step'),
  quizStepsContainer: document.getElementById('quiz-steps-container'),
  quizProgressFill: document.getElementById('quiz-progress-fill'),
  quizPrevBtn: document.getElementById('quiz-prev-btn'),
  quizNextBtn: document.getElementById('quiz-next-btn'),
  
  // Toast
  toastContainer: document.getElementById('toast-container')
};

// --- INITIALIZE APPLICATION ---
function init() {
  // 1. Setup Theme
  initTheme();
  
  // 2. Setup SPA Views & Event Listeners
  setupNavigation();
  
  // 3. Render Initial Dynamic Elements
  renderFeaturedHerbs();
  renderProducts();
  renderHerbarium();
  updateCartUI();
  
  // 4. Setup Filters
  setupFilters();

  // 5. Setup Drawers, Modals & Triggers
  setupDrawers();
  setupQuiz();
  
  // Handle direct url hashes
  handleURLHash();
}

// --- SYNTHESIZE BOTANICAL SOUND CHIME (Web Audio API) ---
// Elegant sound that triggers when the tea timer finishes without needing external file requests.
function playChimeEffect() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    
    // Note 1 (E5)
    playTone(ctx, 659.25, 0.0, 0.4);
    // Note 2 (G#5)
    playTone(ctx, 830.61, 0.15, 0.45);
    // Note 3 (B5)
    playTone(ctx, 987.77, 0.3, 0.5);
    // Note 4 (E6) - Pure high chime
    playTone(ctx, 1318.51, 0.45, 0.8);
    
  } catch (e) {
    console.warn("Navegador bloqueou reprodução de áudio:", e);
  }
}

function playTone(ctx, frequency, delay, duration) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  // Create beautiful pure bell sound using Sine wave combined with subtle Triangle
  osc.type = 'sine';
  osc.frequency.setValueAtTime(frequency, ctx.currentTime + delay);
  
  gain.gain.setValueAtTime(0, ctx.currentTime + delay);
  // Attack
  gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + delay + 0.05);
  // Decay
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + duration);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(ctx.currentTime + delay);
  osc.stop(ctx.currentTime + delay + duration);
}

// --- LIGHT / DARK MODE ---
function initTheme() {
  state.currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', state.currentTheme);
  updateThemeToggleUI();
  
  DOM.themeToggleBtn.addEventListener('click', () => {
    state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.currentTheme);
    localStorage.setItem('theme', state.currentTheme);
    updateThemeToggleUI();
    showToast("Tema alterado com sucesso!", "✨");
  });
}

function updateThemeToggleUI() {
  if (state.currentTheme === 'dark') {
    DOM.sunIcon.style.display = 'block';
    DOM.moonIcon.style.display = 'none';
  } else {
    DOM.sunIcon.style.display = 'none';
    DOM.moonIcon.style.display = 'block';
  }
}

// --- SPA VIEW ROUTING ---
function setupNavigation() {
  DOM.navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.getAttribute('data-view');
      switchView(targetView);
    });
  });

  // Footer Navigation links mapping
  document.querySelectorAll('.footer-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetView = link.getAttribute('data-view');
      if (targetView) {
        e.preventDefault();
        switchView(targetView);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  });

  // Hero / curation buttons
  DOM.logo.addEventListener('click', (e) => {
    e.preventDefault();
    switchView('home-view');
  });

  DOM.heroGotoStore.addEventListener('click', () => switchView('store-view'));
  DOM.heroGotoHerbarium.addEventListener('click', () => switchView('herbarium-view'));
  DOM.homeGotoFullHerbarium.addEventListener('click', () => switchView('herbarium-view'));
  
  DOM.curationBtnTeas.addEventListener('click', () => {
    setProductCategoryFilter('tea');
    switchView('store-view');
  });
  
  DOM.curationBtnSpices.addEventListener('click', () => {
    setProductCategoryFilter('spice');
    switchView('store-view');
  });

  DOM.searchTrigger.addEventListener('click', () => {
    switchView('herbarium-view');
    setTimeout(() => DOM.herbariumSearch.focus(), 400);
  });
}

function switchView(viewId) {
  state.activeView = viewId;
  
  // Update view panel classes
  DOM.views.forEach(view => {
    if (view.id === viewId) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  // Update navigation menu active states
  DOM.navLinks.forEach(link => {
    if (link.getAttribute('data-view') === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  
  // Close any drawers when changing view
  closeAllDrawers();
}

function handleURLHash() {
  const hash = window.location.hash;
  if (hash === '#loja') switchView('store-view');
  else if (hash === '#herbario') switchView('herbarium-view');
  else if (hash === '#sobre') switchView('about-view');
  else switchView('home-view');
}

// --- RENDER DYNAMIC CARDS ---

// Render 3 featured herbs on the Home page
function renderFeaturedHerbs() {
  const featuredIds = ["curcuma", "cardamomo", "camomila"];
  const featured = herbarioData.filter(h => featuredIds.includes(h.id));
  
  DOM.featuredHerbsContainer.innerHTML = featured.map(herb => createHerbCardHTML(herb)).join('');
  setupHerbCardListeners(DOM.featuredHerbsContainer);
}

// Render products in the Emporium grid
function renderProducts() {
  const filteredProducts = produtosData.filter(p => {
    if (state.activeProductCategory === "all") return true;
    return p.category === state.activeProductCategory;
  });

  if (filteredProducts.length === 0) {
    DOM.productsGrid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; color: var(--text-secondary);">Nenhum produto cadastrado nesta categoria.</p>`;
    return;
  }

  DOM.productsGrid.innerHTML = filteredProducts.map(prod => `
    <div class="product-card" id="card-${prod.id}">
      <div class="product-img-wrapper">
        ${prod.badge ? `<span class="product-badge">${prod.badge}</span>` : ''}
        <img src="${prod.image}" alt="${prod.name}" class="product-img" onerror="this.src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600'">
      </div>
      <div class="product-body">
        <span class="product-category">${prod.category === 'tea' ? 'Chá / Infusão' : prod.category === 'spice' ? 'Tempero' : 'Acessório'} • ${prod.weight}</span>
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-description">${prod.description}</p>
        <div class="product-footer">
          <span class="product-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
          <button class="product-add-btn" data-id="${prod.id}" aria-label="Adicionar ${prod.name} ao carrinho">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Add event listeners to "Quick Add" buttons
  DOM.productsGrid.querySelectorAll('.product-add-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      addToCart(id);
    });
  });
}

// Render Encyclopedia entries in Herbarium Grid
function renderHerbarium() {
  const query = state.herbariumSearchQuery.toLowerCase().trim();
  const benefit = state.herbariumSelectedBenefit;

  const filteredHerbs = herbarioData.filter(herb => {
    // 1. Text Filter
    const matchesText = herb.name.toLowerCase().includes(query) ||
                        herb.scientificName.toLowerCase().includes(query) ||
                        herb.description.toLowerCase().includes(query) ||
                        herb.origin.toLowerCase().includes(query) ||
                        herb.compounds.toLowerCase().includes(query);
    
    // 2. Benefit Filter
    const matchesBenefit = (benefit === "all") || herb.benefits.includes(benefit);
    
    return matchesText && matchesBenefit;
  });

  if (filteredHerbs.length === 0) {
    DOM.herbariumGrid.innerHTML = `
      <div class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--text-secondary);">
        <p style="font-size: 1.2rem; margin-bottom: 8px;">Nenhuma planta encontrada.</p>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Tente buscar termos como "calmante", "digestão", "cúrcuma" ou redefina os filtros.</p>
      </div>
    `;
    return;
  }

  DOM.herbariumGrid.innerHTML = filteredHerbs.map(herb => createHerbCardHTML(herb)).join('');
  setupHerbCardListeners(DOM.herbariumGrid);
}

// Reusable card template generator
function createHerbCardHTML(herb) {
  const typeLabel = herb.type === 'tea' ? 'Chá / Infusão' : herb.type === 'spice' ? 'Especiaria' : 'Especiaria & Chá';
  
  return `
    <div class="herb-card" id="herb-${herb.id}">
      <div class="herb-card-img-wrapper">
        <span class="herb-type-badge">${typeLabel}</span>
        <img src="${herb.image}" alt="Planta ${herb.name}" class="herb-card-img" onerror="this.src='https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&q=80&w=600'">
      </div>
      <div class="herb-card-body">
        <span class="herb-scientific-name">${herb.scientificName}</span>
        <h3 class="herb-card-title">${herb.name}</h3>
        <p class="herb-card-description">${herb.description}</p>
        <div class="herb-tags-list">
          ${herb.tags.map(t => `<span class="herb-benefit-tag">${t}</span>`).join('')}
        </div>
        <div class="herb-card-footer">
          <span class="herb-origin-pill">
            📍 ${herb.origin.split('/')[0].trim()}
          </span>
          <a href="#" class="herb-learn-more-btn" data-id="${herb.id}">
            Ver Ficha Botânica
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none" style="display:inline-block; vertical-align:middle;">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `;
}

function setupHerbCardListeners(container) {
  container.querySelectorAll('.herb-learn-more-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      openBotanicalDrawer(id);
    });
  });
}

// --- FILTRATION CONTROLS AND DYNAMICS ---
function setupFilters() {
  // Store Categories
  DOM.storeCategoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.storeCategoryFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeProductCategory = btn.getAttribute('data-category');
      renderProducts();
    });
  });

  // Herbarium Search
  DOM.herbariumSearch.addEventListener('input', (e) => {
    state.herbariumSearchQuery = e.target.value;
    renderHerbarium();
  });

  // Herbarium Benefits Filter pills
  DOM.herbBenefitFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      DOM.herbBenefitFilters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.herbariumSelectedBenefit = btn.getAttribute('data-benefit');
      renderHerbarium();
    });
  });
}

function setProductCategoryFilter(category) {
  state.activeProductCategory = category;
  DOM.storeCategoryFilters.forEach(btn => {
    if (btn.getAttribute('data-category') === category) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderProducts();
}

// --- DRAWERS HANDLING (CART & BOTANICAL FILE) ---
function setupDrawers() {
  // Backdrop click triggers close on all active panels
  DOM.backdrop.addEventListener('click', closeAllDrawers);
  
  // Close buttons
  DOM.botanicalClose.addEventListener('click', closeAllDrawers);
  DOM.cartClose.addEventListener('click', closeAllDrawers);
  
  // Open Cart trigger
  DOM.cartTrigger.addEventListener('click', openCartDrawer);
}

function closeAllDrawers() {
  DOM.backdrop.classList.remove('active');
  DOM.botanicalDrawer.classList.remove('active');
  DOM.cartDrawer.classList.remove('active');
  
  // If timer is running and we close the drawer, it keeps running in background
  // but let's clear the interval if we open another drawer to avoid overlaps
}

function openCartDrawer() {
  closeAllDrawers();
  DOM.backdrop.classList.add('active');
  DOM.cartDrawer.classList.add('active');
}

// --- THE BOTANICAL DRAWER (INCLUDES TEA TIMER) ---
function openBotanicalDrawer(herbId) {
  const herb = herbarioData.find(h => h.id === herbId);
  if (!herb) return;

  closeAllDrawers();
  
  // Load products details inside the drawer
  const linkedProds = produtosData.filter(p => herb.storeProducts.includes(p.id));
  const productsHTML = linkedProds.map(prod => `
    <div class="drawer-product-card" id="drawer-prod-${prod.id}">
      <img src="${prod.image}" alt="${prod.name}" class="drawer-product-img" onerror="this.src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=100'">
      <div class="drawer-product-details">
        <h4 class="drawer-product-name">${prod.name}</h4>
        <span class="drawer-product-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
      </div>
      <button class="drawer-product-buy" data-id="${prod.id}" aria-label="Adicionar ${prod.name} ao carrinho">🛒</button>
    </div>
  `).join('');

  // Setup dynamic details
  DOM.botanicalContent.innerHTML = `
    <!-- Herb Visual Header -->
    <div class="botanical-visual">
      <img src="${herb.image}" alt="${herb.name}" class="botanical-img" onerror="this.src='https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&q=80&w=600'">
    </div>

    <!-- Metadata Section -->
    <div class="botanical-meta">
      <span class="botanical-sci">${herb.scientificName}</span>
      <h2 style="font-family: var(--font-serif); font-size:2rem; margin-bottom:6px;">${herb.name}</h2>
      <p class="botanical-origin-info">📍 <strong>Origem:</strong> ${herb.origin}</p>
    </div>

    <!-- General info -->
    <div class="botanical-section">
      <p class="botanical-text">${herb.description}</p>
    </div>

    <!-- Active compounds -->
    <div class="botanical-section">
      <h3 class="botanical-subtitle">🧪 Compostos Ativos</h3>
      <p class="botanical-text">${herb.compounds}</p>
    </div>

    <!-- Key Benefits list -->
    <div class="botanical-section">
      <h3 class="botanical-subtitle">💚 Benefícios Terapêuticos</h3>
      <div class="botanical-benefits-grid">
        ${herb.benefits.map(b => `
          <div class="botanical-benefit-card">
            <span class="botanical-benefit-card-icon">✔</span>
            <span>${b}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Usage recommendations -->
    <div class="botanical-section">
      <h3 class="botanical-subtitle">🍳 Sugestão de Uso & Preparo</h3>
      <div class="botanical-use-instruction">${herb.howToUse}</div>
      <div class="botanical-tip-box">
        💡 <strong>Dica de Boticário:</strong> ${herb.preparation.tip}
      </div>
    </div>

    <!-- Interactive Tea Timer Section (Shows up for teas/infusions) -->
    ${herb.preparation.type === 'infusion' ? `
      <div class="botanical-section">
        <h3 class="botanical-subtitle">⏱ Cronômetro de Infusão</h3>
        <p class="botanical-text" style="margin-bottom: 16px;">Prepare sua xícara a <strong>${herb.preparation.temp}</strong> e ative o tempo ideal de <strong>${herb.preparation.time / 60} minutos</strong> para esta erva:</p>
        
        <div class="timer-container" id="timer-box">
          <div class="timer-circular-visual">
            <svg class="timer-svg">
              <circle class="timer-circle-bg" cx="70" cy="70" r="60"></circle>
              <circle class="timer-circle-progress" id="timer-circle-fill" cx="70" cy="70" r="60"></circle>
            </svg>
            <div class="timer-text" id="timer-countdown">00:00</div>
          </div>
          
          <div class="timer-controls">
            <button class="timer-btn timer-btn-start" id="timer-start-btn">Iniciar Infusão</button>
            <button class="timer-btn timer-btn-pause" id="timer-pause-btn" style="display:none;">Pausar</button>
            <button class="timer-btn timer-btn-pause" id="timer-reset-btn">Resetar</button>
          </div>
        </div>
      </div>
    ` : ''}

    <!-- Direct Store Purchase integration -->
    <div class="botanical-section">
      <h3 class="botanical-subtitle">🛍 Adquira no Empório</h3>
      <p class="botanical-text" style="margin-bottom: 16px;">Experimente a pureza do ingrediente original com nossa seleção selada a vácuo:</p>
      <div class="drawer-product-links">
        ${productsHTML}
      </div>
    </div>

    <!-- Contraindications -->
    <div class="botanical-section">
      <h3 class="botanical-subtitle" style="color: #A0522D;">⚠ Contraindicações e Cuidados</h3>
      <p class="botanical-text" style="font-size:0.85rem; color: var(--text-secondary);">${herb.contraindications}</p>
    </div>
  `;

  // Dynamic initialization of the tea brewing timer
  if (herb.preparation.type === 'infusion') {
    initTeaTimer(herb);
  }

  // Direct product purchase action in drawer
  DOM.botanicalContent.querySelectorAll('.drawer-product-buy').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      addToCart(id);
    });
  });

  // Open Drawer UI
  DOM.backdrop.classList.add('active');
  DOM.botanicalDrawer.classList.add('active');
}

// --- DYNAMIC INTERACTIVE TEA BREWING TIMER ---
function initTeaTimer(herb) {
  // Clear any existing global interval first
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
  }

  state.timerTotalTime = herb.preparation.time;
  state.timerTimeLeft = state.timerTotalTime;
  state.timerIsRunning = false;
  state.timerActiveHerbId = herb.id;

  const countdownText = document.getElementById('timer-countdown');
  const circleFill = document.getElementById('timer-circle-fill');
  const startBtn = document.getElementById('timer-start-btn');
  const pauseBtn = document.getElementById('timer-pause-btn');
  const resetBtn = document.getElementById('timer-reset-btn');

  // SVG parameters
  const circleCircumference = 2 * Math.PI * 60; // 377
  circleFill.style.strokeDasharray = circleCircumference;
  circleFill.style.strokeDashoffset = 0;

  updateTimerDisplay(state.timerTimeLeft, countdownText);

  // Play button click
  startBtn.addEventListener('click', () => {
    state.timerIsRunning = true;
    startBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
    
    showToast(`Infusão de ${herb.name} iniciada! Abafe a xícara.`, "🍵");

    state.timerInterval = setInterval(() => {
      if (state.timerIsRunning) {
        state.timerTimeLeft--;
        updateTimerDisplay(state.timerTimeLeft, countdownText);
        
        // Update circular SVG progress fill
        const progressOffset = ((state.timerTotalTime - state.timerTimeLeft) / state.timerTotalTime) * circleCircumference;
        circleFill.style.strokeDashoffset = progressOffset;

        if (state.timerTimeLeft <= 0) {
          clearInterval(state.timerInterval);
          state.timerIsRunning = false;
          
          // Complete Event Actions
          playChimeEffect();
          showToast(`Seu chá de ${herb.name} está perfeitamente infundido e pronto!`, "🔔");
          countdownText.innerText = "Pronto! 🍵";
          countdownText.style.color = "var(--gold-color)";
          
          startBtn.style.display = 'inline-block';
          pauseBtn.style.display = 'none';
        }
      }
    }, 1000);
  });

  // Pause button click
  pauseBtn.addEventListener('click', () => {
    state.timerIsRunning = false;
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    clearInterval(state.timerInterval);
  });

  // Reset button click
  resetBtn.addEventListener('click', () => {
    clearInterval(state.timerInterval);
    state.timerIsRunning = false;
    state.timerTimeLeft = state.timerTotalTime;
    
    startBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
    countdownText.style.color = "var(--text-primary)";
    
    updateTimerDisplay(state.timerTimeLeft, countdownText);
    circleFill.style.strokeDashoffset = 0;
  });
}

function updateTimerDisplay(secondsTotal, textEl) {
  const min = Math.floor(secondsTotal / 60);
  const sec = secondsTotal % 60;
  textEl.innerText = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}

// --- E-COMMERCE CART LOGIC ---

function addToCart(productId) {
  const product = produtosData.find(p => p.id === productId);
  if (!product) return;

  const existingItem = state.cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    state.cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCartUI();
  openCartDrawer();
  showToast(`"${product.name}" adicionado ao carrinho!`, "🛍");
}

function updateCartUI() {
  const itemsCount = state.cart.reduce((acc, item) => acc + item.quantity, 0);
  DOM.cartBadgeCount.innerText = itemsCount;

  if (state.cart.length === 0) {
    DOM.cartItemsWrapper.innerHTML = `
      <div class="cart-empty-message">
        <div class="cart-empty-icon">🛒</div>
        <p style="font-weight:700; margin-bottom:6px;">Seu carrinho está vazio</p>
        <p style="font-size:0.85rem; color: var(--text-muted);">Explore nosso empório de delícias botânicas e encha suas sacolas de bem-estar!</p>
      </div>
    `;
    
    DOM.cartSubtotal.innerText = "R$ 0,00";
    DOM.cartShipping.innerText = "R$ 0,00";
    DOM.cartTotal.innerText = "R$ 0,00";
    
    DOM.shippingText.innerHTML = `Adicione mais <span>R$ 100,00</span> para ganhar Frete Grátis!`;
    DOM.shippingFill.style.width = "0%";
    return;
  }

  // Render cart items
  DOM.cartItemsWrapper.innerHTML = state.cart.map(item => `
    <div class="cart-item" id="cart-item-${item.id}">
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=100'">
      <div class="cart-item-info">
        <h4 class="cart-item-title">${item.name}</h4>
        <div class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</div>
        <div class="cart-item-quantity">
          <button class="quantity-btn count-minus" data-id="${item.id}">-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn count-plus" data-id="${item.id}">+</button>
        </div>
      </div>
      <button class="cart-item-remove" data-id="${item.id}" aria-label="Remover do carrinho">&times;</button>
    </div>
  `).join('');

  // Cart math logic
  const subtotal = state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const freeShippingThreshold = 100.00;
  let shipping = 15.00;
  
  // Free shipping bar math
  if (subtotal >= freeShippingThreshold) {
    shipping = 0.00;
    DOM.shippingText.innerHTML = `🌟 Parabéns! Você ganhou <strong>Frete Grátis</strong>!`;
    DOM.shippingFill.style.width = "100%";
  } else {
    const remaining = freeShippingThreshold - subtotal;
    DOM.shippingText.innerHTML = `Adicione mais <span>R$ ${remaining.toFixed(2).replace('.', ',')}</span> para ganhar Frete Grátis!`;
    const percent = (subtotal / freeShippingThreshold) * 100;
    DOM.shippingFill.style.width = `${percent}%`;
  }

  const total = subtotal + shipping;

  DOM.cartSubtotal.innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
  DOM.cartShipping.innerText = shipping === 0 ? "Grátis" : `R$ ${shipping.toFixed(2).replace('.', ',')}`;
  DOM.cartTotal.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;

  // Hook event actions
  DOM.cartItemsWrapper.querySelectorAll('.count-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = state.cart.find(i => i.id === id);
      if (item) {
        item.quantity++;
        updateCartUI();
      }
    });
  });

  DOM.cartItemsWrapper.querySelectorAll('.count-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const item = state.cart.find(i => i.id === id);
      if (item) {
        item.quantity--;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(i => i.id !== id);
        }
        updateCartUI();
      }
    });
  });

  DOM.cartItemsWrapper.querySelectorAll('.cart-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      state.cart = state.cart.filter(i => i.id !== id);
      updateCartUI();
      showToast("Item removido do carrinho.", "🗑");
    });
  });
}

// Simulated checkout mock
DOM.checkoutBtn.addEventListener('click', () => {
  if (state.cart.length === 0) return;
  
  closeAllDrawers();
  showToast("Redirecionando para o ambiente seguro de pagamento...", "💳");
  
  setTimeout(() => {
    state.cart = [];
    updateCartUI();
    showToast("Pedido Finalizado com Sucesso (Simulado)! Um recibo foi enviado por e-mail.", "🎉");
  }, 2500);
});

// --- CUSTOM ALCHEMY BLENDS QUIZ MODAL ---
function setupQuiz() {
  DOM.homeTriggerQuiz.addEventListener('click', openQuizModal);
  DOM.curationQuizTrigger.addEventListener('click', openQuizModal);
  DOM.quizClose.addEventListener('click', closeQuizModal);
  DOM.quizModalBackdrop.addEventListener('click', (e) => {
    if (e.target === DOM.quizModalBackdrop) closeQuizModal();
  });
  
  DOM.quizPrevBtn.addEventListener('click', quizPrevStep);
  DOM.quizNextBtn.addEventListener('click', quizNextStep);

  // Setup options selection
  DOM.quizStepsContainer.querySelectorAll('.quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      // Find current active step container
      const currentStepEl = card.closest('.quiz-step');
      const stepNum = parseInt(currentStepEl.getAttribute('data-step'));
      
      // Toggle selection in active group
      currentStepEl.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      
      // Save answer
      const answerVal = card.getAttribute('data-answer');
      state.quizAnswers[stepNum] = answerVal;
      
      // Unlock "Avançar" button
      DOM.quizNextBtn.removeAttribute('disabled');
    });
  });
}

function openQuizModal() {
  state.quizAnswers = {};
  state.quizCurrentStep = 1;
  DOM.quizNextBtn.innerText = "Avançar";
  DOM.quizNextBtn.setAttribute('disabled', 'true');
  DOM.quizPrevBtn.style.visibility = 'hidden';
  
  // Show step 1, hide others
  DOM.quizSteps.forEach(step => {
    const stepNum = step.getAttribute('data-step');
    if (stepNum == "1") step.classList.add('active');
    else step.classList.remove('active');
    
    // Clear old card selections
    step.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
  });
  
  DOM.quizProgressFill.style.width = "33.3%";
  DOM.quizModalBackdrop.classList.add('active');
}

function closeQuizModal() {
  DOM.quizModalBackdrop.classList.remove('active');
}

function quizNextStep() {
  if (state.quizCurrentStep < 3) {
    state.quizCurrentStep++;
    
    // Change steps view
    DOM.quizSteps.forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'));
      if (stepNum === state.quizCurrentStep) step.classList.add('active');
      else step.classList.remove('active');
    });

    // Check if next step already has a selected answer to unlock next button
    if (state.quizAnswers[state.quizCurrentStep]) {
      DOM.quizNextBtn.removeAttribute('disabled');
    } else {
      DOM.quizNextBtn.setAttribute('disabled', 'true');
    }

    DOM.quizPrevBtn.style.visibility = 'visible';
    
    // Update progress bar
    const percent = (state.quizCurrentStep / 3) * 100;
    DOM.quizProgressFill.style.width = `${percent}%`;

    if (state.quizCurrentStep === 3) {
      DOM.quizNextBtn.innerText = "Ver Recomendação";
    }
  } else if (state.quizCurrentStep === 3) {
    // Show results
    evaluateQuizResult();
  }
}

function quizPrevStep() {
  if (state.quizCurrentStep > 1) {
    state.quizCurrentStep--;
    
    // Change steps view
    DOM.quizSteps.forEach(step => {
      const stepNum = parseInt(step.getAttribute('data-step'));
      if (stepNum === state.quizCurrentStep) step.classList.add('active');
      else step.classList.remove('active');
    });

    // Previous steps are already answered, so unlock next
    DOM.quizNextBtn.removeAttribute('disabled');
    DOM.quizNextBtn.innerText = "Avançar";

    if (state.quizCurrentStep === 1) {
      DOM.quizPrevBtn.style.visibility = 'hidden';
    }

    const percent = (state.quizCurrentStep / 3) * 100;
    DOM.quizProgressFill.style.width = `${percent}%`;
  }
}

// Algorithmic evaluation of answers to recommend the ideal blend
function evaluateQuizResult() {
  state.quizCurrentStep = "result";
  DOM.quizPrevBtn.style.visibility = 'hidden';
  DOM.quizNextBtn.style.display = 'none';
  DOM.quizPrevBtn.style.display = 'none';
  DOM.quizProgressFill.style.width = "100%";

  const focus = state.quizAnswers[1];
  const profile = state.quizAnswers[2];
  const timing = state.quizAnswers[3];

  let recommendedProductId = "prod-blend-relax"; // default fallback
  let titleExplanation = "Blend de Harmonização Diária";
  
  if (focus === "anxiety" || timing === "night") {
    recommendedProductId = "prod-blend-relax";
    titleExplanation = "Seu corpo e mente pedem paz e descompressão após longas horas de atrito diário.";
  } else if (focus === "digestion" || timing === "after-meals") {
    if (profile === "spicy-bold") {
      recommendedProductId = "prod-cardamomo-bagas";
      titleExplanation = "O cardamomo ativa as glândulas salivares e gástricas de forma potente para refeições pesadas.";
    } else {
      recommendedProductId = "prod-oregano-premium";
      titleExplanation = "Ideal para infusões digestivas suaves ou para temperar refeições que pedem leveza estomacal.";
    }
  } else if (focus === "energy" || timing === "morning") {
    if (profile === "spicy-bold" || profile === "herbal-earthy") {
      recommendedProductId = "prod-blend-chai";
      titleExplanation = "Uma fusão de cafeína natural do chá preto com especiarias ativadoras para uma manhã cheia de foco.";
    } else {
      recommendedProductId = "prod-curcuma-po";
      titleExplanation = "A cúrcuma com gengibre atua como excelente termogênico e estimulante imunológico logo cedo.";
    }
  } else if (focus === "immunity") {
    recommendedProductId = "prod-curcuma-po";
    titleExplanation = "Reforce o escudo natural das células com agentes anti-inflamatórios e antioxidantes dourados.";
  }

  const prod = produtosData.find(p => p.id === recommendedProductId);

  // Injet recommendations layout
  const resultStepEl = document.getElementById('quiz-result-step');
  resultStepEl.innerHTML = `
    <div class="quiz-recommendation">
      <div class="quiz-recommendation-icon">🍃</div>
      <span class="quiz-rec-subtitle">Alquimia Revelada!</span>
      <h3 class="quiz-rec-title" style="font-family: var(--font-serif); font-size:1.6rem; margin-bottom:12px;">Seu Resultado:</h3>
      <p class="botanical-text text-center" style="margin-bottom: 24px; font-style:italic;">"${titleExplanation}"</p>
      
      <div class="quiz-rec-card">
        <img src="${prod.image}" alt="${prod.name}" class="quiz-rec-img" onerror="this.src='https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=150'">
        <div class="quiz-rec-details">
          <h4>${prod.name}</h4>
          <p>${prod.description}</p>
          <span class="quiz-rec-price">R$ ${prod.price.toFixed(2).replace('.', ',')}</span>
        </div>
      </div>
      
      <div style="display:flex; gap:12px; justify-content:center;">
        <button class="btn btn-gold" id="quiz-buy-rec-btn" data-id="${prod.id}">Adicionar ao Carrinho & Comprar</button>
        <button class="btn btn-secondary" id="quiz-restart-btn">Refazer Teste</button>
      </div>
    </div>
  `;

  // Display results step
  DOM.quizSteps.forEach(step => {
    if (step.id === 'quiz-result-step') step.classList.add('active');
    else step.classList.remove('active');
  });

  // Re-hook result buttons listeners
  document.getElementById('quiz-buy-rec-btn').addEventListener('click', () => {
    addToCart(prod.id);
    closeQuizModal();
  });

  document.getElementById('quiz-restart-btn').addEventListener('click', () => {
    // Reset layout for buttons and go back to step 1
    DOM.quizNextBtn.style.display = 'inline-block';
    DOM.quizPrevBtn.style.display = 'inline-block';
    openQuizModal();
  });
}

// --- UTILITY TOAST NOTIFICATIONS ---
function showToast(message, icon = "🌿") {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;
  
  DOM.toastContainer.appendChild(toast);
  
  // Audio synched warning if tea is ready (icon bell)
  if (icon === "🔔" && state.timerIsRunning === false) {
    // Trigger is handled by playChimeEffect already, but safeguards are good
  }

  // Toast removes itself after animation completes
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

// --- APP LAUNCH ---
window.addEventListener('DOMContentLoaded', init);
window.addEventListener('hashchange', handleURLHash);
