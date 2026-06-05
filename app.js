const businesses = [
  {
    name: "Osteria Molo 7",
    category: "Ristorante",
    distance: "450 m",
    lat: 42.0336,
    lng: 13.4277,
    address: "Via Corradini, Avezzano",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
    caption: "Menu pranzo di stagione con calice incluso. Solo oggi punti doppi per chi prenota da iAvezzano.",
    stats: "Aperto ora"
  },
  {
    name: "Caffe Risorgimento",
    category: "Bar",
    distance: "600 m",
    lat: 42.0320,
    lng: 13.4250,
    address: "Piazza Risorgimento, Avezzano",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=80",
    caption: "Colazione in centro: brioche artigianale e cappuccino a prezzo speciale fino alle 10:30.",
    stats: "Sconto attivo"
  },
  {
    name: "Atelier Marsica",
    category: "Abbigliamento",
    distance: "900 m",
    lat: 42.0313,
    lng: 13.4218,
    address: "Via XX Settembre, Avezzano",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
    caption: "Preview saldi weekend: salva il coupon e mostra il QR in cassa per il 20% extra.",
    stats: "Nuovi arrivi"
  }
];

const userSubmittedBusinesses = [
  {
    name: "Marynda",
    category: "Abbigliamento",
    distance: "Centro",
    lat: 42.0357,
    lng: 13.4230,
    address: "Via Garibaldi 136, Avezzano",
    phone: "+3908631871946",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    caption: "Negozio di abbigliamento inserito nella rete iAvezzano."
  },
  {
    name: "Avezzano Center",
    category: "Shopping mall",
    distance: "Zona Tiburtina",
    lat: 42.0345,
    lng: 13.4384,
    address: "Via Tiburtina Valeria 112, Avezzano",
    phone: "+390863448059",
    stats: "Attivita inserita",
    photo: "https://www.fabricasgr.com/wp-content/uploads/2019/10/ipercoop_terni1-300x169.jpg",
    photoCredit: "Fabrica SGR",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    caption: "Centro shopping locale inserito nella rete iAvezzano."
  },
  {
    name: "Dell'Olio 1920",
    category: "Abbigliamento",
    distance: "Centro",
    lat: 42.0330,
    lng: 13.4256,
    address: "Via Camillo Corradini 172, Avezzano",
    phone: "+39086332128",
    stats: "Attivita inserita",
    photo: "https://dellolio1920avezzano.it/img/dellolio-storia-avezzano.jpg",
    logo: "https://dellolio1920avezzano.it/img/dellolio__logo-desktop.svg",
    photoCredit: "Dell'Olio 1920",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    caption: "Negozio di abbigliamento inserito nella rete iAvezzano."
  },
  {
    name: "Renzo e Caterina",
    category: "Ristorante",
    distance: "Centro",
    lat: 42.0318,
    lng: 13.4269,
    address: "Via Orazio Mattei 27, Avezzano",
    phone: "+393477956213",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    caption: "Ristorante inserito nella rete iAvezzano."
  },
  {
    name: "Nithael Abbigliamento",
    category: "Abbigliamento",
    distance: "Zona Francia",
    lat: 42.0338,
    lng: 13.4191,
    address: "Via Francia 33, Avezzano",
    phone: "+393288827472",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    caption: "Negozio di abbigliamento inserito nella rete iAvezzano."
  },
  {
    name: "Shopping Park Ten",
    category: "Abbigliamento",
    distance: "Via XX Settembre",
    lat: 42.0274,
    lng: 13.4126,
    address: "Via XX Settembre 411, Avezzano",
    phone: "",
    stats: "Attivita inserita",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Shopping_Park_Ten.jpg/330px-Shopping_Park_Ten.jpg",
    photoCredit: "Wikimedia Commons",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    caption: "Attivita commerciale inserita nella rete iAvezzano."
  },
  {
    name: "Tezenis",
    category: "Abbigliamento",
    distance: "Centro",
    lat: 42.0331,
    lng: 13.4252,
    address: "Via Camillo Corradini 115/117, Avezzano",
    phone: "+39086321855",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    caption: "Negozio di abbigliamento inserito nella rete iAvezzano."
  },
  {
    name: "Ristorante Pizzeria L'Acquario",
    category: "Ristorante",
    distance: "Zona Brunelleschi",
    lat: 42.0272,
    lng: 13.4198,
    address: "Via Filippo Brunelleschi 65, Avezzano",
    phone: "+39086325941",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    caption: "Ristorante e pizzeria inserito nella rete iAvezzano."
  },
  {
    name: "Libero Home",
    category: "Abbigliamento",
    distance: "Zona Bagnoli",
    lat: 42.0418,
    lng: 13.4269,
    address: "V. Monsignor Pio Marcello Bagnoli 75/79, Avezzano",
    phone: "+39086325280",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
    caption: "Attivita locale inserita nella rete iAvezzano."
  },
  {
    name: "OMG SRL",
    category: "Shopping mall",
    distance: "Via XX Settembre",
    lat: 42.0279,
    lng: 13.4130,
    address: "Via XX Settembre 396, Avezzano",
    phone: "+39086338225",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    caption: "Attivita commerciale inserita nella rete iAvezzano."
  },
  {
    name: "Rigatoni Avezzano",
    category: "Ristorante",
    distance: "Via Roma",
    lat: 42.0304,
    lng: 13.4142,
    address: "Via Roma 323, Avezzano",
    phone: "+390863451919",
    stats: "Attivita inserita",
    logo: "assets/app-icon.svg",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
    caption: "Ristorante inserito nella rete iAvezzano."
  }
];

let mapPlaces = businesses.concat(userSubmittedBusinesses, [
  {
    name: "Moon Club",
    category: "Discoteca",
    distance: "1,4 km",
    lat: 42.0372,
    lng: 13.4324,
    address: "Zona Nord, Avezzano",
    stats: "Evento stasera",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "FitLab Avezzano",
    category: "Palestra",
    distance: "1,8 km",
    lat: 42.0291,
    lng: 13.4292,
    address: "Via Roma, Avezzano",
    stats: "Prova gratuita",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Bakery Marsica",
    category: "Nuova apertura",
    distance: "700 m",
    lat: 42.0345,
    lng: 13.4240,
    address: "Centro Avezzano",
    stats: "Apre sabato",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Pub La Marsica",
    category: "Pub",
    distance: "850 m",
    lat: 42.0301,
    lng: 13.4266,
    address: "Corso della Liberta, Avezzano",
    stats: "Live music",
    image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=500&q=80"
  }
]).map((place, index) => ({
  ...place,
  id: `place-${index}`
}));

const AVEZZANO_CENTER = { lat: 42.0326, lng: 13.4256 };
let interactiveMap;
let routeLine;
let userMarker;
let selectedPlace = mapPlaces[0];
let userPosition = null;
let mapMarkers = new Map();
let realPlacesLoaded = false;
let isLoadingRealPlaces = false;
const OSM_CACHE_KEY = "iavezzano_osm_businesses_v1";
const MAX_REAL_PLACES = 120;
const wikidataImageCache = new Map();
const DEMO_STATE_KEY = "iavezzano_demo_state";
const ONBOARDING_KEY = "iavezzano_onboarding_seen";

const categoryImages = {
  "Ristorante": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80",
  "Bar": "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
  "Pub": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80",
  "Discoteca": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=600&q=80",
  "Abbigliamento": "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  "Palestra": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80",
  "Centro estetico": "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
  "Farmacia": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80",
  "Hotel": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
  "Negozio": "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
  "Servizio": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
  "Attivita locale": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
};

const quickActions = [
  ["Eventi stasera", "3 serate e 1 live music", "events"],
  ["Sconti vicini", "Coupon utilizzabili oggi", "coupons"],
  ["Nuove aperture", "Locali e negozi appena aperti", "feed"],
  ["Pranzo e cena", "Ristoranti con offerte attive", "map"],
  ["Weekend", "Programma dei prossimi giorni", "events"]
];

const cityHighlights = [
  {
    type: "Evento stasera",
    title: "Aperitivo lungo in centro",
    place: "Caffe Risorgimento",
    when: "Oggi - 19:30",
    detail: "Drink promo, tavoli disponibili e reminder automatico prima dell'inizio.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1000&q=80",
    cta: "Prenota"
  },
  {
    type: "Sconto",
    title: "2x1 aperitivo entro le 20:00",
    place: "Caffe Risorgimento",
    when: "Scade oggi",
    detail: "Mostra il QR alla cassa, usa il coupon e accumula punti fedelta.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1000&q=80",
    cta: "Apri coupon"
  },
  {
    type: "Nuova apertura",
    title: "Bakery Marsica inaugura sabato",
    place: "Centro Avezzano",
    when: "Sabato - 10:00",
    detail: "Degustazione gratuita, promo lancio e indicazioni rapide per raggiungerla.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    cta: "Salva"
  },
  {
    type: "Evento in disco",
    title: "Latin Party al Moon Club",
    place: "Moon Club",
    when: "Oggi - 22:45",
    detail: "Prevendita digitale, lista tavoli e reminder per l'ingresso.",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
    cta: "Dettagli"
  },
  {
    type: "Shopping",
    title: "Saldi weekend da Atelier Marsica",
    place: "Atelier Marsica",
    when: "Valido fino a domenica",
    detail: "Extra 20% con coupon digitale e mappa per arrivare in negozio.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80",
    cta: "Usa sconto"
  },
  {
    type: "Sport",
    title: "Prova gratuita FitLab Avezzano",
    place: "FitLab Avezzano",
    when: "Prenota entro 48 ore",
    detail: "Ingresso prova, scheda iniziale e punti fedelta al check-in.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80",
    cta: "Prenota"
  }
];

const eventCategories = [
  ["Divertimento", "Tutto quello che anima la serata"],
  ["Feste", "Compleanni, party e feste a tema"],
  ["Serate", "Aperitivi, live music e karaoke"],
  ["Eventi in disco", "DJ set, guest e prevendite"],
  ["Calendario", "Programma completo della citta"]
];

const tonightEvents = [
  {
    title: "Aperitivo lungo in centro",
    place: "Caffe Risorgimento",
    time: "19:30",
    type: "Serata",
    meta: "Ingresso libero - coupon drink",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Latin Party",
    place: "Moon Club",
    time: "22:45",
    type: "Eventi in disco",
    meta: "Prevendita digitale - 130 prenotazioni",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Live acoustic night",
    place: "Pub La Marsica",
    time: "21:15",
    type: "Divertimento",
    meta: "Musica live - tavoli disponibili",
    image: "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?auto=format&fit=crop&w=900&q=80"
  }
];

const events = [
  ["Festa anni 90", "Ven 14 giugno - 22:30", "Disco - prevendite aperte", "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=900&q=80"],
  ["Street food in piazza", "Sab 15 giugno - 20:00", "Festa - 18 stand", "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=900&q=80"],
  ["Karaoke night", "Dom 16 giugno - 21:00", "Serata - ingresso libero", "https://images.unsplash.com/photo-1521337581100-8ca9a73a5f79?auto=format&fit=crop&w=900&q=80"]
];

const coupons = [
  ["Aperitivo 2x1", "Caffe Risorgimento", "Scade oggi alle 20:00", "35 punti"],
  ["-20% nuova collezione", "Atelier Marsica", "Valido fino a domenica", "80 usi rimasti"],
  ["Ingresso prova gratuito", "FitLab Avezzano", "Prenota entro 48 ore", "50 punti"]
];

const rewards = [
  ["Cena locale", "1.500 punti", "Premio presso i ristoranti aderenti."],
  ["Beauty hour", "900 punti", "Trattamento express nei centri estetici partner."],
  ["Ticket evento", "1.200 punti", "Biglietto digitale per eventi selezionati."]
];

const savedProfileCoupons = [
  ["Aperitivo 2x1", "Caffe Risorgimento", "Scade oggi alle 20:00"],
  ["-20% nuova collezione", "Atelier Marsica", "Valido fino a domenica"],
  ["Prova gratuita", "FitLab Avezzano", "Prenota entro 48 ore"]
];

const savedProfileEvents = [
  ["Aperitivo lungo in centro", "Oggi - 19:30", "Reminder attivo"],
  ["Latin Party", "Oggi - 22:45", "Prenotazione salvata"],
  ["Street food in piazza", "Sabato - 20:00", "Da confermare"]
];

const userPreferences = ["Eventi", "Sconti", "Nuove aperture", "Ristoranti", "Palestre", "Shopping"];

const titles = {
  feed: "Cosa succede ad Avezzano",
  map: "Mappa interattiva",
  events: "Eventi",
  coupons: "Coupon digitali",
  loyalty: "Sistema fedelta",
  profile: "Profilo utente",
  merchant: "Crea il tuo negozio",
  admin: "Admin panel"
};

const onboardingSteps = [
  {
    view: "feed",
    eyebrow: "Primo ingresso",
    title: "La home ti mostra cosa conta oggi",
    copy: "iAvezzano non e pensata come un social infinito: apre subito su eventi, sconti, nuove aperture e cose utili in citta.",
    points: ["Scorri le card principali", "Salva quello che ti interessa", "Apri subito mappa, coupon o eventi"]
  },
  {
    view: "events",
    eyebrow: "Serate",
    title: "Trova cosa fare questa sera",
    copy: "La sezione Eventi raccoglie divertimento, feste, serate, disco e calendario, con prenotazione demo e reminder.",
    points: ["Filtra per tipo di evento", "Prenota una serata", "Attiva un reminder automatico"]
  },
  {
    view: "map",
    eyebrow: "Mappa",
    title: "Scopri locali e negozi vicino a te",
    copy: "La mappa usa segnaposto a goccia con logo/foto del locale e puo aprire Google Maps per la navigazione reale.",
    points: ["Importa attivita reali da OpenStreetMap", "Usa la tua posizione", "Apri la destinazione in Google Maps"]
  },
  {
    view: "coupons",
    eyebrow: "Vantaggi",
    title: "Usa coupon QR e raccogli punti",
    copy: "I coupon digitali si salvano nel profilo, possono essere scansionati in demo e alimentano il sistema fedelta.",
    points: ["Apri i coupon disponibili", "Scansiona un QR demo", "Riscatta premi con i punti"]
  },
  {
    view: "profile",
    eyebrow: "Profilo",
    title: "Tutto resta nel tuo pannello utente",
    copy: "Dopo la registrazione trovi coupon, eventi, preferenze, foto profilo e il percorso per creare il tuo negozio a pagamento.",
    points: ["Registrati con Google, Apple, telefono o email", "Gestisci preferenze e salvataggi", "Crea una scheda negozio da 12,99 EUR/mese"]
  }
];

function getDemoState() {
  try {
    return JSON.parse(localStorage.getItem(DEMO_STATE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveDemoState(state) {
  localStorage.setItem(DEMO_STATE_KEY, JSON.stringify(state));
}

function addDemoItem(key, item) {
  const state = getDemoState();
  const list = state[key] || [];
  if (!list.some((entry) => entry.title === item.title)) {
    list.push({ ...item, savedAt: new Date().toISOString() });
  }
  state[key] = list;
  saveDemoState(state);
  return list.length;
}

function showToast(message, type = "info") {
  const stack = document.querySelector("#toastStack");
  if (!stack) return;
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  stack.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

function smartImageUrl(url, width = 640) {
  if (!url || !url.includes("images.unsplash.com")) return url || "assets/app-icon.svg";
  const next = new URL(url);
  next.searchParams.set("auto", "format");
  next.searchParams.set("fit", "crop");
  next.searchParams.set("w", String(width));
  next.searchParams.set("q", "58");
  return next.toString();
}

function mediaAttrs(url, width = 640) {
  return `data-bg="${smartImageUrl(url, width)}"`;
}

function hydrateLazyMedia(scope = document, eager = false) {
  const nodes = [...scope.querySelectorAll("[data-bg]:not(.is-loaded)")];
  if (!nodes.length) return;

  const load = (node) => {
    node.style.backgroundImage = `url('${node.dataset.bg}')`;
    node.classList.add("is-loaded");
  };

  if (eager || !("IntersectionObserver" in window)) {
    nodes.forEach(load);
    return;
  }

  const observer = new IntersectionObserver((entries, io) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      load(entry.target);
      io.unobserve(entry.target);
    });
  }, { rootMargin: "160px" });

  nodes.forEach((node) => observer.observe(node));
}

let onboardingIndex = 0;

function renderOnboardingStep() {
  const step = onboardingSteps[onboardingIndex];
  if (!step) return;

  document.querySelector("#onboardingEyebrow").textContent = step.eyebrow;
  document.querySelector("#onboardingTitle").textContent = step.title;
  document.querySelector("#onboardingCopy").textContent = step.copy;
  document.querySelector("#onboardingPoints").innerHTML = step.points.map((point) => `<li>${point}</li>`).join("");
  document.querySelector("#onboardingProgress").style.width = `${((onboardingIndex + 1) / onboardingSteps.length) * 100}%`;
  document.querySelector("#onboardingDots").innerHTML = onboardingSteps.map((_, index) => `
    <button class="${index === onboardingIndex ? "active" : ""}" data-onboarding-step="${index}" type="button" aria-label="Step ${index + 1}"></button>
  `).join("");
  document.querySelector("#prevOnboarding").disabled = onboardingIndex === 0;
  document.querySelector("#nextOnboarding").textContent = onboardingIndex === onboardingSteps.length - 1 ? "Inizia" : "Avanti";

  switchView(step.view);
}

function openOnboarding(reset = false) {
  if (reset) onboardingIndex = 0;
  const overlay = document.querySelector("#onboardingOverlay");
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  renderOnboardingStep();
}

function closeOnboarding(markSeen = true) {
  const overlay = document.querySelector("#onboardingOverlay");
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  if (markSeen) localStorage.setItem(ONBOARDING_KEY, "true");
}

function maybeStartOnboarding(delay = 700) {
  if (localStorage.getItem(ONBOARDING_KEY)) return;
  setTimeout(() => {
    localStorage.setItem(ONBOARDING_KEY, "hinted");
    showToast("Guida rapida disponibile dal pulsante Guida.");
  }, delay);
}

function render() {
  document.querySelector("#stories").innerHTML = quickActions.map(([title, text, view]) => `
    <button class="shortcut-card" data-view-target="${view}" type="button">
      <strong>${title}</strong>
      <span>${text}</span>
    </button>
  `).join("");

  document.querySelector("#feedList").innerHTML = cityHighlights.map((item) => {
    const relatedPlace = findPlaceByName(item.place);
    const searchText = [item.type, item.title, item.place, item.when, item.detail, item.cta, relatedPlace?.category, relatedPlace?.stats].filter(Boolean).join(" ");
    return `
    <article class="post utility-card" data-search="${searchText.toLowerCase()}">
      <div class="post-top">
        <div class="utility-badge">${item.type}</div>
        <div>
          <strong>${item.title}</strong>
          <span>${item.place} - ${item.when}</span>
        </div>
      </div>
      <div class="post-media lazy-media" ${mediaAttrs(item.image, 720)}></div>
      <div class="post-body">
        <p>${item.detail}</p>
        <div class="post-actions">
          <button data-action="highlight-primary" data-title="${item.title}" data-type="${item.type}" type="button">${item.cta}</button>
          <button data-action="open-map-place" data-place="${item.place}" type="button">Apri mappa</button>
          <button class="save-action" data-action="save-highlight" data-title="${item.title}" data-type="${item.type}" type="button">Salva</button>
        </div>
      </div>
    </article>
  `;
  }).join("");

  renderNearbyList();

  renderMapBusinessList();

  document.querySelector("#eventCategories").innerHTML = eventCategories.map(([title, text], index) => `
    <button class="event-chip ${index === 0 ? "active" : ""}" data-action="event-category" data-category="${title}" type="button">
      <strong>${title}</strong>
      <span>${text}</span>
    </button>
  `).join("");

  document.querySelector("#tonightGrid").innerHTML = tonightEvents.map((item) => `
    <article class="tonight-card">
      <div class="tonight-media lazy-media" ${mediaAttrs(item.image, 720)}></div>
      <div class="tonight-body">
        <div class="tonight-time">${item.time}</div>
        <p class="eyebrow">${item.type}</p>
        <h2>${item.title}</h2>
        <p>${item.place} - ${item.meta}</p>
        <div class="post-actions">
          <button data-action="book-event" data-title="${item.title}" type="button">Prenota</button>
          <button data-action="save-event" data-title="${item.title}" type="button">Salva</button>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelector("#eventsGrid").innerHTML = events.map(([title, date, meta, image]) => `
    <article class="event-card">
      <div class="card-media lazy-media" ${mediaAttrs(image, 640)}></div>
      <div class="card-body">
        <h2>${title}</h2>
        <p>${date}</p>
        <span class="pill">${meta}</span>
      </div>
    </article>
  `).join("");

  document.querySelector("#couponsGrid").innerHTML = coupons.map(([title, place, expires, meta]) => `
    <article class="coupon-card">
      <div class="card-body">
        <p class="eyebrow">${place}</p>
        <h2>${title}</h2>
        <p>${expires}</p>
        <span class="pill success">${meta}</span>
        <div class="qr" aria-label="QR Code demo"></div>
      </div>
    </article>
  `).join("");

  document.querySelector("#rewardsGrid").innerHTML = rewards.map(([title, points, text]) => `
    <article class="reward-card">
      <div class="card-body">
        <p class="eyebrow">${points}</p>
        <h2>${title}</h2>
        <p>${text}</p>
        <button class="ghost" data-action="redeem-reward" data-title="${title}" type="button">Riscatta</button>
      </div>
    </article>
  `).join("");

  renderUserProfile("settings");
  renderMerchantArea();
  applySearchFilter();
  hydrateLazyMedia(document.querySelector(".view.active") || document, true);
}

function profileRows(items) {
  return items.map(([title, meta, status]) => `
    <div class="profile-row">
      <div>
        <strong>${title}</strong>
        <span>${meta}</span>
      </div>
      <span class="pill">${status}</span>
    </div>
  `).join("");
}

function uniqueProfileRows(rows) {
  const seen = new Set();
  return rows.filter(([title]) => {
    const key = title.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function profileCouponRows() {
  const state = getDemoState();
  return uniqueProfileRows([
    ...savedProfileCoupons,
    ...(state.coupons || []).map((item) => [item.title, item.type || "Coupon salvato", "Salvato"]),
    ...(state.couponRedemptions || []).map((item) => [item.title, "Scansione QR", "Usato"])
  ]);
}

function profileEventRows() {
  const state = getDemoState();
  return uniqueProfileRows([
    ...savedProfileEvents,
    ...(state.events || []).map((item) => [item.title, item.type || "Evento iAvezzano", "Salvato"]),
    ...(state.reminders || []).map((item) => [item.title, "Notifica eventi", "Reminder attivo"])
  ]);
}

function settingsPanel(user) {
  if (!user) {
    return `
      <div class="empty-profile">
        <strong>Accedi per gestire il tuo profilo</strong>
        <span>Registrandoti puoi salvare coupon, eventi, preferenze e creare una scheda negozio.</span>
        <button class="primary-action" id="profilePanelSignup" type="button">Registrati ora</button>
      </div>
    `;
  }

  return `
    <div class="settings-list">
      <label class="setting-toggle">
        <span>Notifiche eventi e serate</span>
        <input type="checkbox" checked />
      </label>
      <label class="setting-toggle">
        <span>Coupon in scadenza</span>
        <input type="checkbox" checked />
      </label>
      <label class="setting-toggle">
        <span>Nuove aperture vicino a me</span>
        <input type="checkbox" checked />
      </label>
      <label class="setting-toggle">
        <span>Newsletter settimanale</span>
        <input type="checkbox" />
      </label>
      <button class="ghost full-button" data-action="open-onboarding" type="button">Rivedi demo guidata</button>
      <button class="ghost full-button" id="profileOpenAccountModal" type="button">Gestisci account e logout</button>
    </div>
  `;
}

function preferencesPanel() {
  return `
    <div class="preference-chips">
      ${userPreferences.map((item, index) => `<button class="${index < 4 ? "active" : ""}" data-action="toggle-preference" type="button">${item}</button>`).join("")}
    </div>
  `;
}

function renderProfilePanel(panel = "settings") {
  const user = getStoredUser();
  const couponRows = profileCouponRows();
  const eventRows = profileEventRows();
  const titleMap = {
    settings: ["Impostazioni", "Account"],
    coupons: ["I miei coupon", `${couponRows.length} salvati`],
    events: ["I miei eventi", `${eventRows.length} attivi`],
    preferences: ["Preferenze", "Categorie"]
  };
  const [title, badge] = titleMap[panel] || titleMap.settings;
  document.querySelector("#profilePanelTitle").textContent = title;
  document.querySelector("#profilePanelBadge").textContent = badge;

  const content = {
    settings: settingsPanel(user),
    coupons: profileRows(couponRows),
    events: profileRows(eventRows),
    preferences: preferencesPanel()
  }[panel] || settingsPanel(user);

  document.querySelector("#profilePanelContent").innerHTML = content;

  const signupButton = document.querySelector("#profilePanelSignup");
  if (signupButton) signupButton.addEventListener("click", openSignup);
  const accountButton = document.querySelector("#profileOpenAccountModal");
  if (accountButton) accountButton.addEventListener("click", openSignup);
}

function renderUserProfile(panel = "settings") {
  const user = getStoredUser();
  const avatar = user?.avatar || "assets/app-icon.svg";
  document.querySelector("#profileAvatar").src = avatar;
  document.querySelector("#profileName").textContent = user ? user.name : "Accedi a iAvezzano";
  document.querySelector("#profileMeta").textContent = user
    ? `${user.provider} - ${user.email || user.phone || "account locale"}`
    : "Crea un account per salvare coupon, eventi e preferenze.";
  document.querySelector("#profileCouponCount").textContent = user ? profileCouponRows().length : 0;
  document.querySelector("#profileEventCount").textContent = user ? profileEventRows().length : 0;
  document.querySelector("#profilePointCount").textContent = user ? "1.240" : 0;
  document.querySelector("#profileLevel").textContent = user ? "Gold" : "Base";
  document.querySelector("#profileSignupButton").hidden = Boolean(user);
  renderProfilePanel(panel);
}

function renderMerchantArea() {
  const subscription = getMerchantSubscription();
  const user = getStoredUser();
  const hasActiveMerchantPlan = Boolean(subscription && user && subscription.userId === user.id);
  const paywall = document.querySelector("#merchantPaywall");
  const dashboard = document.querySelector("#merchantDashboard");
  if (!paywall || !dashboard) return;

  paywall.hidden = hasActiveMerchantPlan;
  dashboard.hidden = !hasActiveMerchantPlan;

  if (!hasActiveMerchantPlan) return;

  document.querySelector("#merchantSubscriptionTitle").textContent = `${subscription.plan} - ${subscription.businessName}`;
  document.querySelector("#merchantSubscriptionMeta").textContent = `${subscription.price} EUR/mese - ${subscription.category} - attivo dal ${subscription.startedAt}`;
  document.querySelector("#merchantPlanPill").textContent = subscription.plan;
}

function toRadians(value) {
  return value * Math.PI / 180;
}

function distanceInKm(from, to) {
  const earthRadiusKm = 6371;
  const dLat = toRadians(to.lat - from.lat);
  const dLng = toRadians(to.lng - from.lng);
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return earthRadiusKm * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function formatDistance(place) {
  const origin = userPosition || AVEZZANO_CENTER;
  const distance = distanceInKm(origin, place);
  return distance < 1 ? `${Math.round(distance * 1000)} m` : `${distance.toFixed(1).replace(".", ",")} km`;
}

function navigationUrl(place) {
  const destination = `${place.lat},${place.lng}`;
  const origin = userPosition ? `&origin=${userPosition.lat},${userPosition.lng}` : "";
  return `https://www.google.com/maps/dir/?api=1${origin}&destination=${destination}&travelmode=walking`;
}

function markerTone(place) {
  if (place.category.includes("Ristorante") || place.category.includes("Bar") || place.category.includes("Pub")) return "food";
  if (place.category.includes("Discoteca")) return "night";
  if (place.category.includes("Abbigliamento") || place.category.includes("Nuova")) return "shop";
  if (place.category.includes("Palestra")) return "sport";
  return "default";
}

function categoryFromTags(tags) {
  const amenity = tags.amenity;
  const shop = tags.shop;
  const leisure = tags.leisure;
  const tourism = tags.tourism;

  if (amenity === "restaurant" || amenity === "fast_food" || amenity === "ice_cream") return "Ristorante";
  if (amenity === "bar" || amenity === "cafe") return "Bar";
  if (amenity === "pub" || amenity === "biergarten") return "Pub";
  if (amenity === "nightclub") return "Discoteca";
  if (amenity === "pharmacy") return "Farmacia";
  if (leisure === "fitness_centre" || leisure === "sports_centre") return "Palestra";
  if (shop === "clothes" || shop === "shoes" || shop === "fashion" || shop === "boutique") return "Abbigliamento";
  if (shop === "hairdresser" || shop === "beauty" || shop === "cosmetics") return "Centro estetico";
  if (tourism === "hotel" || tourism === "guest_house" || tourism === "apartment") return "Hotel";
  if (shop) return "Negozio";
  if (tags.office || tags.craft || tags.healthcare) return "Servizio";
  return "Attivita locale";
}

function addressFromTags(tags) {
  const street = tags["addr:street"] || tags["addr:place"];
  const number = tags["addr:housenumber"];
  if (street && number) return `${street} ${number}, Avezzano`;
  if (street) return `${street}, Avezzano`;
  return "Avezzano";
}

function commonsFilePath(fileName) {
  const cleanName = fileName.replace(/^File:/, "").trim();
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(cleanName)}`;
}

async function wikidataImage(wikidataId) {
  if (!wikidataId) return "";
  if (wikidataImageCache.has(wikidataId)) return wikidataImageCache.get(wikidataId);

  try {
    const response = await fetch(`https://www.wikidata.org/wiki/Special:EntityData/${wikidataId}.json`);
    if (!response.ok) throw new Error("Wikidata image not available");
    const data = await response.json();
    const fileName = data.entities?.[wikidataId]?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
    const image = fileName ? commonsFilePath(fileName) : "";
    wikidataImageCache.set(wikidataId, image);
    return image;
  } catch {
    wikidataImageCache.set(wikidataId, "");
    return "";
  }
}

async function imageFromOsmTags(tags, category) {
  const directImage = tags.image || tags.logo;
  const commons = tags.wikimedia_commons;

  if (directImage?.startsWith("http")) return directImage;
  if (directImage?.startsWith("File:")) return commonsFilePath(directImage);
  if (commons?.startsWith("File:")) return commonsFilePath(commons);

  const wikidata = await wikidataImage(tags.wikidata);
  return wikidata || categoryImages[category] || categoryImages["Attivita locale"];
}

async function osmElementToPlace(element, index) {
  const tags = element.tags || {};
  const lat = element.lat || element.center?.lat;
  const lng = element.lon || element.center?.lon;
  const category = categoryFromTags(tags);

  return {
    id: `osm-${element.type}-${element.id}`,
    name: tags.name,
    category,
    distance: "",
    lat,
    lng,
    address: addressFromTags(tags),
    stats: tags.opening_hours ? "Orari disponibili" : tags.website || tags["contact:website"] ? "Sito disponibile" : "Dato reale OSM",
    image: await imageFromOsmTags(tags, category),
    phone: tags.phone || tags["contact:phone"] || "",
    website: tags.website || tags["contact:website"] || "",
    osmType: element.type,
    osmId: element.id,
    source: "OpenStreetMap",
    sortIndex: index
  };
}

function createMapIcon(place) {
  const logo = place.photo || place.logo || place.image || "assets/app-icon.svg";

  return L.divIcon({
    className: "google-map-marker-shell",
    html: `<span class="google-map-marker ${markerTone(place)}"><img src="${logo}" alt=""></span>`,
    iconSize: [48, 58],
    iconAnchor: [24, 56],
    popupAnchor: [0, -46]
  });
}

function renderMapBusinessList() {
  document.querySelector("#mapBusinessList").innerHTML = mapPlaces.map((place) => `
    <button class="destination-item ${selectedPlace.id === place.id ? "active" : ""}" data-place-id="${place.id}" type="button">
      <img class="destination-logo" src="${smartImageUrl(place.photo || place.logo || place.image, 96)}" alt="" loading="lazy" decoding="async" />
      <span class="destination-copy">
        <strong>${place.name}</strong>
        <span>${place.category} - ${formatDistance(place)}</span>
        <small>${[place.address, place.phone, place.photo ? "Foto reale" : "", place.stats].filter(Boolean).join(" - ")}</small>
      </span>
    </button>
  `).join("");
  document.querySelector("#realBusinessCount").textContent = realPlacesLoaded ? `${mapPlaces.length} reali` : "Demo";
  applySearchFilter();
}

function renderNearbyList() {
  document.querySelector("#nearbyList").innerHTML = mapPlaces.slice(0, 6).map((item) => `
    <div><strong>${item.name}</strong><span>${item.category}</span></div>
  `).join("");
}

function rebuildMapMarkers() {
  if (!interactiveMap || !window.L) return;

  mapMarkers.forEach((marker) => marker.remove());
  mapMarkers.clear();

  mapPlaces.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], { icon: createMapIcon(place) }).addTo(interactiveMap);
    marker.bindPopup(`<strong>${place.name}</strong><br>${place.category}<br>${place.address}`, {
      closeButton: false,
      className: "google-popup"
    });
    marker.on("click", () => selectMapPlace(place.id, false));
    mapMarkers.set(place.id, marker);
  });
}

function applyImportedPlaces(places, statusText) {
  if (!places.length) return;

  const curated = businesses.concat(userSubmittedBusinesses).map((place, index) => ({
    ...place,
    id: place.id || `curated-${index}`
  }));
  const seen = new Set(curated.map((place) => `${place.name.toLowerCase()}-${place.address.toLowerCase()}`));
  const imported = places.filter((place) => {
    const key = `${place.name.toLowerCase()}-${place.address.toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  mapPlaces = curated.concat(imported).slice(0, MAX_REAL_PLACES);
  selectedPlace = mapPlaces[0];
  realPlacesLoaded = true;
  renderMapBusinessList();
  renderNearbyList();

  if (interactiveMap && window.L) {
    rebuildMapMarkers();
    const bounds = L.latLngBounds(mapPlaces.map((place) => [place.lat, place.lng]));
    interactiveMap.fitBounds(bounds, { padding: [34, 34], maxZoom: 15 });
  }

  selectMapPlace(selectedPlace.id, false);
  document.querySelector("#mapStatus").textContent = statusText;
}

function cachedOsmPlaces() {
  try {
    return JSON.parse(localStorage.getItem(OSM_CACHE_KEY)) || [];
  } catch {
    return [];
  }
}

function overpassQuery() {
  const radius = 7500;
  return `
    [out:json][timeout:35];
    (
      nwr(around:${radius},${AVEZZANO_CENTER.lat},${AVEZZANO_CENTER.lng})["name"]["shop"];
      nwr(around:${radius},${AVEZZANO_CENTER.lat},${AVEZZANO_CENTER.lng})["name"]["amenity"~"restaurant|bar|cafe|pub|fast_food|ice_cream|biergarten|nightclub|cinema|theatre|pharmacy|bank|fuel|clinic|doctors|dentist|veterinary|marketplace"];
      nwr(around:${radius},${AVEZZANO_CENTER.lat},${AVEZZANO_CENTER.lng})["name"]["leisure"~"fitness_centre|sports_centre|dance|bowling_alley"];
      nwr(around:${radius},${AVEZZANO_CENTER.lat},${AVEZZANO_CENTER.lng})["name"]["tourism"~"hotel|guest_house|apartment|attraction|museum"];
      nwr(around:${radius},${AVEZZANO_CENTER.lat},${AVEZZANO_CENTER.lng})["name"]["craft"];
      nwr(around:${radius},${AVEZZANO_CENTER.lat},${AVEZZANO_CENTER.lng})["name"]["office"];
      nwr(around:${radius},${AVEZZANO_CENTER.lat},${AVEZZANO_CENTER.lng})["name"]["healthcare"];
    );
    out center;
  `;
}

async function loadRealAvezzanoBusinesses(force = false) {
  if (isLoadingRealPlaces || (realPlacesLoaded && !force)) return;

  const status = document.querySelector("#mapStatus");
  isLoadingRealPlaces = true;
  status.textContent = "Importazione attivita reali da OpenStreetMap in corso...";

  if (!force) {
    const cached = cachedOsmPlaces();
    if (cached.length) {
      applyImportedPlaces(cached, `${cached.length} attivita caricate dalla cache locale. Aggiornamento online in corso...`);
    }
  }

  try {
    const response = await fetch("https://overpass-api.de/api/interpreter", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
      body: new URLSearchParams({ data: overpassQuery() })
    });

    if (!response.ok) throw new Error("Overpass non disponibile");
    const data = await response.json();
    const seen = new Set();
    const elements = (data.elements || []).filter((element) => {
      const tags = element.tags || {};
      const lat = element.lat || element.center?.lat;
      const lng = element.lon || element.center?.lon;
      if (!tags.name || !lat || !lng) return false;
      const key = `${tags.name.toLowerCase()}-${lat.toFixed(4)}-${lng.toFixed(4)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

    const places = (await Promise.all(elements.map(osmElementToPlace)))
      .sort((a, b) => distanceInKm(AVEZZANO_CENTER, a) - distanceInKm(AVEZZANO_CENTER, b))
      .slice(0, MAX_REAL_PLACES);

    if (!places.length) throw new Error("Nessuna attivita trovata");
    localStorage.setItem(OSM_CACHE_KEY, JSON.stringify(places));
    applyImportedPlaces(places, `${places.length} attivita reali importate da OpenStreetMap. Le foto sono reali dove disponibili, altrimenti categoria demo.`);
  } catch {
    const cached = cachedOsmPlaces();
    if (cached.length) {
      applyImportedPlaces(cached, `${cached.length} attivita caricate dalla cache locale. Import online non riuscito.`);
    } else {
      status.textContent = "Import online non riuscito. La demo resta con dati locali; riprova con connessione attiva.";
    }
  } finally {
    isLoadingRealPlaces = false;
  }
}

function updateRouteLine() {
  if (!interactiveMap || !selectedPlace || !window.L) return;
  if (routeLine) routeLine.remove();

  if (userPosition) {
    routeLine = L.polyline(
      [[userPosition.lat, userPosition.lng], [selectedPlace.lat, selectedPlace.lng]],
      { color: "#007aff", weight: 6, opacity: 0.82, dashArray: "10 10" }
    ).addTo(interactiveMap);
  }
}

function selectMapPlace(placeId, shouldPan = true) {
  const place = mapPlaces.find((item) => item.id === placeId) || mapPlaces[0];
  selectedPlace = place;

  document.querySelector("#mapCard").innerHTML = `
    <strong>${place.name}</strong>
    <span>${[place.category, place.phone, place.photo ? "foto reale" : "", formatDistance(place)].filter(Boolean).join(" · ")}</span>
  `;
  document.querySelector("#navigationLink").href = navigationUrl(place);
  document.querySelector("#mapStatus").textContent = userPosition
    ? `Percorso da posizione attuale a ${place.name}. Apri Google Maps per la navigazione turn-by-turn.`
    : `Destinazione selezionata: ${place.name}. Usa la tua posizione o apri Google Maps.`;

  renderMapBusinessList();
  updateRouteLine();

  if (interactiveMap && shouldPan) {
    interactiveMap.setView([place.lat, place.lng], 16);
    const marker = mapMarkers.get(place.id);
    if (marker) marker.openPopup();
  }

  mapMarkers.forEach((marker, id) => {
    const element = marker.getElement();
    if (element) element.classList.toggle("selected", id === place.id);
  });
}

function initInteractiveMap() {
  const mapElement = document.querySelector("#realMap");
  const status = document.querySelector("#mapStatus");
  if (!mapElement || !status) return;

  if (!window.L) {
    mapElement.classList.add("map-offline");
    status.textContent = "Mappa online non disponibile: controlla la connessione o usa Avvia navigazione per aprire Google Maps.";
    selectMapPlace(selectedPlace.id, false);
    return;
  }

  if (interactiveMap) {
    interactiveMap.invalidateSize();
    const cached = cachedOsmPlaces();
    if (cached.length && !realPlacesLoaded) {
      applyImportedPlaces(cached.slice(0, MAX_REAL_PLACES), `${Math.min(cached.length, MAX_REAL_PLACES)} attivita caricate dalla cache locale.`);
    }
    return;
  }

  interactiveMap = L.map("realMap", {
    zoomControl: false,
    scrollWheelZoom: true
  }).setView([AVEZZANO_CENTER.lat, AVEZZANO_CENTER.lng], 14);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
    attribution: "&copy; OpenStreetMap &copy; CARTO"
  }).addTo(interactiveMap);

  L.control.zoom({ position: "topright" }).addTo(interactiveMap);

  rebuildMapMarkers();

  selectMapPlace(selectedPlace.id, false);
  const cached = cachedOsmPlaces();
  if (cached.length) {
    applyImportedPlaces(cached.slice(0, MAX_REAL_PLACES), `${Math.min(cached.length, MAX_REAL_PLACES)} attivita caricate dalla cache locale. Usa "Importa attivita reali" per aggiornare.`);
  } else {
    status.textContent = "Demo veloce attiva. Usa Importa attivita reali per aggiornare da OpenStreetMap.";
  }
  setTimeout(() => interactiveMap.invalidateSize(), 80);
}

function switchView(view, updateHash = true) {
  const targetView = document.querySelector(`#${view}View`);
  if (!targetView) return;

  document.querySelectorAll(".view").forEach((el) => el.classList.remove("active"));
  targetView.classList.add("active");
  document.querySelectorAll(".nav-item").forEach((item) => {
    const isActive = item.dataset.view === view;
    item.classList.toggle("active", isActive);
    item.toggleAttribute("aria-current", isActive);
  });
  document.querySelector("#pageTitle").textContent = titles[view];
  hydrateLazyMedia(targetView, true);
  applySearchFilter();

  if (updateHash && window.location.hash !== `#${view}`) {
    history.replaceState(null, "", `#${view}`);
  }

  if (view === "map") {
    setTimeout(initInteractiveMap, 80);
  }

  if (view === "profile") {
    renderUserProfile();
  }

  closeMobileMenu();
}

function setMobileMenu(open) {
  const toggle = document.querySelector("#mobileMenuToggle");
  const backdrop = document.querySelector("#mobileMenuBackdrop");
  document.body.classList.toggle("menu-open", open);
  if (toggle) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Chiudi menu" : "Apri menu");
  }
  if (backdrop) backdrop.hidden = !open;
}

function closeMobileMenu() {
  setMobileMenu(false);
}

document.querySelector("#mobileMenuToggle")?.addEventListener("click", () => {
  setMobileMenu(!document.body.classList.contains("menu-open"));
});

document.querySelector("#mobileMenuBackdrop")?.addEventListener("click", closeMobileMenu);

document.querySelector("#mainNav").addEventListener("click", (event) => {
  const button = event.target.closest("[data-view]");
  if (button) switchView(button.dataset.view);
});

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-view-target]");
  if (button) switchView(button.dataset.viewTarget);
});

function findPlaceByName(name) {
  const lower = name.toLowerCase();
  return mapPlaces.find((place) => place.name.toLowerCase().includes(lower) || lower.includes(place.name.toLowerCase()));
}

function handleAction(button) {
  const action = button.dataset.action;
  if (!action) return;

  if (action === "open-onboarding") {
    openOnboarding(true);
    return;
  }

  if (action === "notifications") {
    showToast("Hai 3 notifiche demo: 1 evento stasera, 1 coupon in scadenza, 1 nuova apertura.");
    switchView("profile");
    renderProfilePanel("settings");
    return;
  }

  if (action === "filter-nearby") {
    mapPlaces = [...mapPlaces].sort((a, b) => distanceInKm(AVEZZANO_CENTER, a) - distanceInKm(AVEZZANO_CENTER, b));
    renderNearbyList();
    showToast("Lista vicina a te ordinata per distanza dal centro di Avezzano.");
    return;
  }

  if (action === "create-reminder") {
    const total = addDemoItem("reminders", { title: "Reminder eventi di stasera" });
    showToast(`Reminder attivato. Totale reminder: ${total}.`, "success");
    switchView("profile");
    renderProfilePanel("events");
    return;
  }

  if (action === "calendar-month") {
    showToast("Vista mensile demo: 3 eventi questa settimana e 8 nel mese.");
    return;
  }

  if (action === "scan-qr") {
    const total = addDemoItem("couponRedemptions", { title: "QR demo scansionato" });
    showToast(`QR demo letto correttamente. Scansioni salvate: ${total}.`, "success");
    return;
  }

  if (action === "highlight-primary") {
    const title = button.dataset.title;
    const type = button.dataset.type || "";
    if (type.includes("Sconto") || type.includes("Shopping")) {
      addDemoItem("coupons", { title });
      showToast(`Coupon salvato: ${title}.`, "success");
      switchView("coupons");
      return;
    }
    addDemoItem("events", { title });
    showToast(`Prenotazione demo salvata: ${title}.`, "success");
    switchView("profile");
    renderProfilePanel("events");
    return;
  }

  if (action === "save-highlight") {
    const title = button.dataset.title;
    const type = button.dataset.type || "Elemento";
    const key = type.includes("Sconto") || type.includes("Shopping") ? "coupons" : "saved";
    addDemoItem(key, { title, type });
    button.textContent = "Salvato";
    showToast(`Salvato: ${title}.`, "success");
    return;
  }

  if (action === "open-map-place") {
    const place = findPlaceByName(button.dataset.place || "");
    switchView("map");
    setTimeout(() => {
      if (place) selectMapPlace(place.id);
      showToast(place ? `Mappa aperta su ${place.name}.` : "Mappa aperta. Seleziona una destinazione.");
    }, 120);
    return;
  }

  if (action === "event-category") {
    document.querySelectorAll(".event-chip").forEach((chip) => chip.classList.toggle("active", chip === button));
    showToast(`Filtro eventi attivo: ${button.dataset.category}.`);
    return;
  }

  if (action === "book-event") {
    const total = addDemoItem("events", { title: button.dataset.title });
    button.textContent = "Prenotato";
    showToast(`Evento prenotato. Totale eventi salvati: ${total}.`, "success");
    return;
  }

  if (action === "save-event") {
    addDemoItem("events", { title: button.dataset.title });
    button.textContent = "Salvato";
    showToast(`Evento salvato: ${button.dataset.title}.`, "success");
    return;
  }

  if (action === "redeem-reward") {
    const total = addDemoItem("rewards", { title: button.dataset.title });
    button.textContent = "Richiesto";
    showToast(`Premio richiesto: ${button.dataset.title}. Richieste: ${total}.`, "success");
    return;
  }

  if (action === "toggle-preference") {
    button.classList.toggle("active");
    showToast(`Preferenza ${button.textContent.trim()} ${button.classList.contains("active") ? "attivata" : "disattivata"}.`);
    return;
  }

  if (action === "upload-media") {
    showToast("Upload demo pronto: in produzione aprira galleria/camera.");
    return;
  }

  if (action === "create-coupon") {
    addDemoItem("merchantCoupons", { title: "Nuovo coupon QR demo" });
    showToast("Coupon QR demo creato e aggiunto alla campagna.", "success");
    return;
  }

  if (action === "new-campaign") {
    addDemoItem("campaigns", { title: "Nuova campagna demo" });
    showToast("Nuova campagna demo creata.", "success");
  }
}

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  handleAction(button);
});

document.querySelector("#closeOnboarding").addEventListener("click", () => {
  closeOnboarding(true);
});

document.querySelector("#skipOnboarding").addEventListener("click", () => {
  closeOnboarding(true);
  showToast("Demo guidata completata. Puoi riaprirla da Guida o dal profilo.");
});

document.querySelector("#prevOnboarding").addEventListener("click", () => {
  if (onboardingIndex === 0) return;
  onboardingIndex -= 1;
  renderOnboardingStep();
});

document.querySelector("#nextOnboarding").addEventListener("click", () => {
  if (onboardingIndex === onboardingSteps.length - 1) {
    closeOnboarding(true);
    showToast("Perfetto, iAvezzano e pronto da esplorare.", "success");
    return;
  }
  onboardingIndex += 1;
  renderOnboardingStep();
});

document.querySelector("#onboardingDots").addEventListener("click", (event) => {
  const dot = event.target.closest("[data-onboarding-step]");
  if (!dot) return;
  onboardingIndex = Number(dot.dataset.onboardingStep);
  renderOnboardingStep();
});

document.querySelector("#onboardingOverlay").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) closeOnboarding(true);
});

document.addEventListener("keydown", (event) => {
  const overlay = document.querySelector("#onboardingOverlay");
  if (event.key === "Escape" && overlay.classList.contains("active")) {
    closeOnboarding(true);
  }
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
    closeMobileMenu();
  }
});

document.querySelector("#mapBusinessList").addEventListener("click", (event) => {
  const item = event.target.closest("[data-place-id]");
  if (item) selectMapPlace(item.dataset.placeId);
});

document.querySelector("#useLocation").addEventListener("click", () => {
  const status = document.querySelector("#mapStatus");
  if (!navigator.geolocation) {
    status.textContent = "Geolocalizzazione non disponibile su questo browser.";
    return;
  }

  status.textContent = "Richiesta posizione in corso...";
  navigator.geolocation.getCurrentPosition(
    (position) => {
      userPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      if (interactiveMap && window.L) {
        if (userMarker) userMarker.remove();
        userMarker = L.circleMarker([userPosition.lat, userPosition.lng], {
          radius: 10,
          color: "#ffffff",
          weight: 4,
          fillColor: "#007aff",
          fillOpacity: 1
        }).addTo(interactiveMap).bindPopup("La tua posizione");

        interactiveMap.fitBounds(
          [[userPosition.lat, userPosition.lng], [selectedPlace.lat, selectedPlace.lng]],
          { padding: [52, 52], maxZoom: 16 }
        );
      }

      selectMapPlace(selectedPlace.id, false);
    },
    () => {
      status.textContent = "Posizione non autorizzata. Puoi comunque avviare la navigazione verso la destinazione selezionata.";
    },
    { enableHighAccuracy: true, timeout: 9000, maximumAge: 60000 }
  );
});

document.querySelector("#recenterMap").addEventListener("click", () => {
  if (interactiveMap) {
    interactiveMap.setView([AVEZZANO_CENTER.lat, AVEZZANO_CENTER.lng], 14);
  }
  document.querySelector("#mapStatus").textContent = "Mappa centrata sul centro di Avezzano.";
});

document.querySelector("#importRealBusinesses").addEventListener("click", () => {
  loadRealAvezzanoBusinesses(true);
});

function applySearchFilter() {
  const searchInput = document.querySelector("#searchInput");
  const clearSearch = document.querySelector("#clearSearch");
  const searchStatus = document.querySelector("#searchStatus");
  const term = searchInput.value.trim().toLowerCase();
  const searchable = document.querySelectorAll(".post, .tonight-card, .event-card, .coupon-card, .reward-card, .destination-item");
  searchable.forEach((item) => {
    const haystack = `${item.dataset.search || ""} ${item.textContent}`.toLowerCase();
    item.hidden = Boolean(term) && !haystack.includes(term);
  });

  if (clearSearch) clearSearch.hidden = !term;

  if (searchStatus) {
    const activeView = document.querySelector(".view.active");
    const activeResults = [...activeView.querySelectorAll(".post, .tonight-card, .event-card, .coupon-card, .reward-card, .destination-item")]
      .filter((item) => !item.hidden);
    searchStatus.hidden = !term;
    searchStatus.classList.toggle("is-empty", Boolean(term) && activeResults.length === 0);
    searchStatus.textContent = activeResults.length
      ? `${activeResults.length} risultati per "${searchInput.value.trim()}"`
      : `Nessun risultato per "${searchInput.value.trim()}"`;
  }

  if (term && document.querySelector("#feedView").classList.contains("active")) {
    const bestPlace = findPlaceByName(term);
    if (bestPlace) {
      document.querySelector("#navigationLink").href = navigationUrl(bestPlace);
    }
  }
}

document.querySelector("#searchInput").addEventListener("input", () => {
  applySearchFilter();
});

document.querySelector("#clearSearch").addEventListener("click", () => {
  const searchInput = document.querySelector("#searchInput");
  searchInput.value = "";
  applySearchFilter();
  searchInput.focus();
});

document.querySelector("#publishDemo").addEventListener("click", () => {
  const button = document.querySelector("#publishDemo");
  addDemoItem("merchantPosts", { title: "Nuovo contenuto commerciante" });
  button.textContent = "Pubblicato";
  showToast("Contenuto demo pubblicato nella dashboard commerciante.", "success");
  setTimeout(() => { button.textContent = "Pubblica"; }, 1600);
});

const authOverlay = document.querySelector("#authOverlay");
const openSignupButtons = [document.querySelector("#openSignup"), document.querySelector("#openSignupMini")];
const AUTH_STORAGE_KEY = "iavezzano_user";
const MERCHANT_STORAGE_KEY = "iavezzano_merchant_subscription";
const authFeedback = document.querySelector("#authFeedback");
const signupCopy = document.querySelector("#signupCopy");
const phoneField = document.querySelector("#phoneField");
const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");
const signupPhone = document.querySelector("#signupPhone");
const createAccountButton = document.querySelector("#createAccount");
const logoutAccountButton = document.querySelector("#logoutAccount");
const merchantCheckout = document.querySelector("#merchantCheckout");
const merchantCheckoutFeedback = document.querySelector("#merchantCheckoutFeedback");
let selectedMerchantPlan = { plan: "Starter", price: "12,99" };

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
  } catch {
    return null;
  }
}

function saveUser(user) {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
}

function getMerchantSubscription() {
  try {
    return JSON.parse(localStorage.getItem(MERCHANT_STORAGE_KEY));
  } catch {
    return null;
  }
}

function saveMerchantSubscription(subscription) {
  localStorage.setItem(MERCHANT_STORAGE_KEY, JSON.stringify(subscription));
}

function setFeedback(message, type = "info") {
  authFeedback.textContent = message;
  authFeedback.className = `auth-feedback ${type}`;
}

function setMerchantFeedback(message, type = "info") {
  merchantCheckoutFeedback.textContent = message;
  merchantCheckoutFeedback.className = `auth-feedback ${type}`;
}

function closeSignup() {
  authOverlay.classList.remove("active");
  authOverlay.setAttribute("aria-hidden", "true");
}

function openSignup() {
  const user = getStoredUser();
  authOverlay.classList.add("active");
  authOverlay.setAttribute("aria-hidden", "false");
  setFeedback(user ? `Accesso attivo come ${user.name}.` : "");
  updateAuthUi();
}

function updateAuthUi() {
  const user = getStoredUser();
  const accountLabel = user ? "Account" : "Entra";
  const miniLabel = user ? "Account" : "Accedi";

  document.querySelector("#openSignup").textContent = accountLabel;
  document.querySelector("#openSignupMini").textContent = miniLabel;
  signupCopy.textContent = user
    ? `Ciao ${user.name}, il tuo account iAvezzano e attivo.`
    : "Crea il tuo account per salvare eventi, coupon, nuove aperture e reminder cittadini.";

  createAccountButton.hidden = Boolean(user);
  logoutAccountButton.hidden = !user;
  document.querySelectorAll(".signup-actions, .divider, .field:not(.phone-field)").forEach((item) => {
    item.hidden = Boolean(user);
  });
  phoneField.hidden = true;
  renderUserProfile("settings");
  renderMerchantArea();
}

function completeRegistration(provider, details = {}) {
  const name = details.name || provider;
  const user = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name,
    email: details.email || "",
    phone: details.phone || "",
    provider,
    createdAt: new Date().toISOString()
  };

  saveUser(user);
  setFeedback(`Registrazione completata con ${provider}. Benvenuto, ${name}.`, "success");
  updateAuthUi();
  setTimeout(closeSignup, 900);
  maybeStartOnboarding(1100);
}

openSignupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (getStoredUser()) {
      switchView("profile");
      return;
    }
    openSignup();
  });
});

document.querySelector("#closeSignup").addEventListener("click", () => {
  closeSignup();
});

authOverlay.addEventListener("click", (event) => {
  if (event.target === authOverlay) {
    closeSignup();
  }
});

document.querySelectorAll("[data-auth-provider]").forEach((button) => {
  button.addEventListener("click", () => {
    completeRegistration(button.dataset.authProvider, {
      name: `${button.dataset.authProvider} User`
    });
  });
});

document.querySelector("#phoneSignupMode").addEventListener("click", () => {
  phoneField.hidden = false;
  signupPhone.focus();
  setFeedback("Inserisci il numero di telefono e premi Crea account.", "info");
});

createAccountButton.addEventListener("click", () => {
  const name = signupName.value.trim();
  const email = signupEmail.value.trim();
  const password = signupPassword.value.trim();
  const phone = signupPhone.value.trim();
  const phoneMode = !phoneField.hidden;

  if (phoneMode) {
    if (!/^\+?\d[\d\s]{7,}$/.test(phone)) {
      setFeedback("Inserisci un numero di telefono valido.", "error");
      return;
    }
    completeRegistration("Telefono", { name: name || "Utente iAvezzano", phone });
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setFeedback("Inserisci un indirizzo email valido.", "error");
    return;
  }

  if (password.length < 6) {
    setFeedback("La password deve contenere almeno 6 caratteri.", "error");
    return;
  }

  completeRegistration("Email", {
    name: name || email.split("@")[0],
    email
  });
});

logoutAccountButton.addEventListener("click", () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  signupName.value = "";
  signupEmail.value = "";
  signupPassword.value = "";
  signupPhone.value = "";
  setFeedback("Sei uscito dall'account.", "info");
  updateAuthUi();
});

document.querySelector("#profileSignupButton").addEventListener("click", openSignup);

document.querySelector(".profile-actions-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-profile-panel]");
  if (!button) return;

  document.querySelectorAll(".profile-action-card").forEach((item) => {
    item.classList.toggle("active", item === button);
  });
  renderProfilePanel(button.dataset.profilePanel);
});

document.querySelector("#profilePhotoInput").addEventListener("change", (event) => {
  const file = event.target.files?.[0];
  const user = getStoredUser();

  if (!user) {
    openSignup();
    return;
  }

  if (!file || !file.type.startsWith("image/")) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    user.avatar = reader.result;
    saveUser(user);
    renderUserProfile();
    setFeedback("Foto profilo aggiornata.", "success");
  });
  reader.readAsDataURL(file);
});

document.querySelectorAll(".start-plan").forEach((button) => {
  button.addEventListener("click", () => {
    const user = getStoredUser();
    selectedMerchantPlan = {
      plan: button.dataset.plan,
      price: button.dataset.price
    };

    document.querySelector("#selectedPlanBadge").textContent = `${selectedMerchantPlan.plan} - ${selectedMerchantPlan.price} EUR/mese`;
    merchantCheckout.hidden = false;
    merchantCheckout.scrollIntoView({ behavior: "smooth", block: "center" });

    if (!user) {
      setMerchantFeedback("Per creare un negozio devi prima registrarti o accedere.", "error");
      openSignup();
      return;
    }

    setMerchantFeedback(`Piano ${selectedMerchantPlan.plan} selezionato. Completa il checkout demo.`, "info");
  });
});

document.querySelector("#confirmMerchantPayment").addEventListener("click", () => {
  const user = getStoredUser();
  const businessName = document.querySelector("#merchantBusinessName").value.trim();
  const category = document.querySelector("#merchantBusinessCategory").value.trim();
  const paymentMethod = document.querySelector("#merchantPaymentMethod").value.trim();

  if (!user) {
    setMerchantFeedback("Accedi prima di completare il pagamento.", "error");
    openSignup();
    return;
  }

  if (businessName.length < 2) {
    setMerchantFeedback("Inserisci il nome della tua attivita.", "error");
    return;
  }

  if (category.length < 2) {
    setMerchantFeedback("Inserisci la categoria della tua attivita.", "error");
    return;
  }

  if (paymentMethod.length < 4) {
    setMerchantFeedback("Inserisci un metodo di pagamento demo.", "error");
    return;
  }

  saveMerchantSubscription({
    userId: user.id,
    businessName,
    category,
    plan: selectedMerchantPlan.plan,
    price: selectedMerchantPlan.price,
    status: "active",
    startedAt: new Date().toLocaleDateString("it-IT")
  });

  setMerchantFeedback("Pagamento demo completato. Dashboard negozio attivata.", "success");
  setTimeout(renderMerchantArea, 700);
});

document.querySelector("#cancelMerchantPlan").addEventListener("click", () => {
  localStorage.removeItem(MERCHANT_STORAGE_KEY);
  merchantCheckout.hidden = true;
  setMerchantFeedback("Abbonamento demo annullato.", "info");
  renderMerchantArea();
});

render();
selectMapPlace(selectedPlace.id, false);
updateAuthUi();

const initialView = window.location.hash.replace("#", "");
switchView(titles[initialView] ? initialView : "feed", false);

maybeStartOnboarding();

window.addEventListener("hashchange", () => {
  const view = window.location.hash.replace("#", "");
  if (titles[view]) switchView(view, false);
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Service workers require http(s) or localhost; file:// previews can ignore this.
    });
  });
}
