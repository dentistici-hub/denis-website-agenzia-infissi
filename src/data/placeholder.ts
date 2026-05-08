import type { SiteConfig, NavLink, Service, CaseStudy, TeamMember, Testimonial, Stat, FAQ, PhilosophyPillar, LogoItem, SchemaConfig } from '@components/types/content';

export const site: SiteConfig = {
  name: 'M2E Marketing',
  tagline: 'Marketing verticale per infissi e serramenti',
  description: 'M2E Marketing progetta landing page, campagne e sistemi di follow-up per aziende di infissi che vogliono più preventivi qualificati e meno richieste fuori target.',
  url: 'https://dentistici-hub.github.io/denis-website-agenzia-infissi',
  language: 'it',
  lastUpdated: '2026-05-08',
  contact: {
    email: 'audit@m2emarketing.it',
    phone: '+39 011 1970 4428',
    address: 'Corso Vittorio Emanuele II 92',
    city: 'Torino',
    country: 'IT',
    lat: 45.0642,
    lng: 7.6785,
  },
  social: { linkedin: 'https://www.linkedin.com/company/m2e-marketing' },
};

export const nav: NavLink[] = [
  { label: 'Metodo', href: '#metodo' },
  { label: 'Sistema', href: '#sistema' },
  { label: 'Economia', href: '#economia' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Audit', href: '#contact' },
];

export const services: Service[] = [
  {
    title: 'Landing page per preventivi',
    description: 'Pagine verticali per PVC, alluminio, legno-alluminio, porte blindate e riqualificazione energetica, con messaggi diversi per privati, studi tecnici e imprese.',
  },
  {
    title: 'Campagne Google e Meta',
    description: 'Struttura per zone, intenti e urgenza: sostituzione infissi, isolamento, bonus, posa certificata, showroom e sopralluogo.',
  },
  {
    title: 'Qualifica e follow-up',
    description: 'Moduli brevi, scoring lead, integrazione WhatsApp/CRM e reminder commerciali per evitare che i contatti caldi finiscano nel nulla cosmico.',
  },
  {
    title: 'Ottimizzazione commerciale',
    description: 'Dashboard settimanale su costo per richiesta, costo per sopralluogo, tasso di chiusura e valore medio del preventivo.',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: 'Showroom serramenti premium',
    client: 'Nord Italia',
    description: 'Segmentazione campagne per materiale e fascia prezzo, con landing dedicata ai serramenti in alluminio di alta gamma.',
    image: '/images/hero-showroom-pipeline.webp',
    tags: ['-38% CPL', '+21 sopralluoghi', '90 giorni'],
  },
  {
    title: 'Installatore locale',
    client: 'Provincia competitiva',
    description: 'Filtro iniziale su zona, numero infissi e tempi di intervento per ridurre richieste non servibili.',
    image: '/images/hero-showroom-pipeline.webp',
    tags: ['Lead scoring', 'WhatsApp', 'CRM'],
  },
  {
    title: 'Rete posa certificata',
    client: 'B2B e privati',
    description: 'Messaggi separati per progettisti, imprese edili e proprietari di casa in riqualificazione energetica.',
    image: '/images/hero-showroom-pipeline.webp',
    tags: ['Multi-audience', 'SEO locale', 'Retargeting'],
  },
];

export const team: TeamMember[] = [
  {
    name: 'Strategist serramenti',
    role: 'Domanda e posizionamento',
    bio: 'Analizza zona, margini, mix prodotti e competitor prima di accendere un euro di traffico.',
    image: '/images/hero-showroom-pipeline.webp',
  },
  {
    name: 'Performance lead',
    role: 'Campagne e tracciamento',
    bio: 'Tiene separati lead, sopralluoghi e vendite. Una raffinatezza quasi rivoluzionaria nel marketing locale.',
    image: '/images/hero-showroom-pipeline.webp',
  },
  {
    name: 'Sales ops',
    role: 'CRM e follow-up',
    bio: 'Costruisce routine commerciali per richiamare i contatti giusti al momento giusto.',
    image: '/images/hero-showroom-pipeline.webp',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'Per la prima volta abbiamo visto non solo quanti lead entravano, ma quali preventivi valeva la pena inseguire.',
    author: 'Titolare showroom',
    role: 'Serramenti in alluminio',
    company: 'Piemonte',
  },
  {
    quote: 'Ci hanno tolto richieste fuori zona e curiosi da prezzo. Meno volume inutile, più appuntamenti veri.',
    author: 'Responsabile commerciale',
    role: 'Infissi PVC e posa',
    company: 'Lombardia',
  },
  {
    quote: 'La parte migliore è stata il follow-up: prima chiamavamo quando capitava, adesso abbiamo una coda chiara.',
    author: 'Amministratore',
    role: 'Rete installatori',
    company: 'Nord Ovest',
  },
];

export const testimonial: Testimonial = testimonials[0];

export const stats: Stat[] = [
  { value: '90', label: 'giorni per validare il sistema' },
  { value: '5', label: 'metriche che contano davvero' },
  { value: '1', label: 'verticale: infissi e serramenti' },
  { value: '0', label: 'pacchetti generici da agenzia' },
];

export const philosophy: PhilosophyPillar[] = [
  {
    number: '01',
    title: 'Prima si qualifica',
    description: 'Zona, tipologia, metrature, tempi e budget minimo. Una richiesta senza contesto non è un lead, è una distrazione.',
  },
  {
    number: '02',
    title: 'Poi si misura',
    description: 'Costo per lead e vanity metric non bastano. Il cruscotto arriva fino a sopralluogo, preventivo emesso e vendita.',
  },
  {
    number: '03',
    title: 'Infine si scala',
    description: 'Quando un canale produce appuntamenti profittevoli, si aumenta. Quando produce rumore, si taglia senza nostalgia.',
  },
];

export const logos: LogoItem[] = [
  { name: 'Google Ads', image: '/images/logo-google.svg' },
  { name: 'Meta Ads', image: '/images/logo-meta.svg' },
  { name: 'CRM', image: '/images/logo-crm.svg' },
];

export const insights = [
  {
    slug: 'landing-page-serramenti-che-converte',
    title: 'Perché una landing per serramenti non deve sembrare una brochure',
    date: '2026-05-08',
    category: 'Conversione',
    excerpt: 'La pagina deve separare curiosi, preventivi seri e clienti pronti al sopralluogo. Il design serve a far emergere quella differenza.',
    body: 'Nel settore infissi il problema non è solo generare richieste. Il problema è capire quali richieste meritano tempo commerciale. Una landing efficace mette subito in chiaro zona servita, materiali, livello di qualità, tempi di posa e processo di sopralluogo.\n\nLa struttura migliore non parte da "chi siamo", ma dal motivo per cui il cliente deve fidarsi: prodotto, posa, certificazioni, casi reali e un percorso semplice per richiedere una valutazione. Il modulo deve chiedere pochi dati all’inizio e usare il follow-up per completare la qualifica.\n\nIl risultato non è una pagina più bella. È una pagina che rende misurabile il lavoro commerciale.',
  },
  {
    slug: 'metriche-marketing-infissi',
    title: 'Le metriche da guardare prima del costo per lead',
    date: '2026-05-08',
    category: 'Performance',
    excerpt: 'Un CPL basso può nascondere richieste pessime. Per uno showroom contano sopralluoghi, preventivi validi e vendite.',
    body: 'Il costo per lead è utile solo se il lead ha un percorso commerciale tracciato. Per un’azienda di infissi bisogna misurare costo per richiesta qualificata, costo per sopralluogo, tasso di emissione preventivo, tasso di chiusura e valore medio ordine.\n\nQueste metriche cambiano le decisioni. Una campagna con CPL più alto può essere più profittevole se porta cantieri migliori, materiali ad alto margine o clienti che decidono più rapidamente.\n\nSenza questo livello di tracciamento, il marketing diventa una gara a chi compra contatti più economici. Non è strategia. È roulette con un report elegante.',
  },
  {
    slug: 'follow-up-whatsapp-serramenti',
    title: 'Il follow-up WhatsApp che non fa perdere preventivi caldi',
    date: '2026-05-08',
    category: 'Sales ops',
    excerpt: 'La velocità di risposta è decisiva, ma senza messaggi utili diventa solo pressione commerciale.',
    body: 'Chi chiede un preventivo per infissi spesso sta confrontando più fornitori. La prima risposta deve confermare competenza e ridurre incertezza: materiali trattati, zona servita, tempi medi, cosa serve per una stima attendibile.\n\nUn buon follow-up usa poche domande, chiare e sequenziali. Prima qualifica il bisogno, poi propone lo step successivo: chiamata, invio foto, sopralluogo o visita in showroom.\n\nIl CRM serve a non dimenticare nessuno. WhatsApp serve a rendere naturale la conversazione. La combinazione è molto meno poetica di un funnel diagram, ma funziona meglio.',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Lavorate solo con aziende di infissi?',
    answer: 'Sì. Il posizionamento, le campagne e il follow-up sono costruiti per serramenti, porte, posa certificata, showroom e riqualificazione energetica.',
  },
  {
    question: 'Promettete un numero fisso di lead?',
    answer: 'No. Promettiamo metodo, tracciamento e decisioni rapide sui dati. I lead senza qualità servono solo a riempire fogli Excel e rovinare l’umore.',
  },
  {
    question: 'Serve già un CRM?',
    answer: 'No. Se esiste lo integriamo; se manca, partiamo con una pipeline leggera per richieste, chiamate, sopralluoghi, preventivi e vendite.',
  },
  {
    question: 'Quanto dura il primo ciclo?',
    answer: 'Il primo ciclo dura 90 giorni: diagnosi, pagina, campagne, follow-up e ottimizzazione settimanale. Abbastanza lungo per leggere i dati, abbastanza corto per non perdersi in teatro.',
  },
];

export const schema: SchemaConfig = {
  type: 'ProfessionalService',
  additionalTypes: ['https://schema.org/MarketingAgency'],
  faqs,
  services,
  aggregateRating: { ratingValue: '4.8', reviewCount: '31' },
};
