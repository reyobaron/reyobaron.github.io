const LEVELS = [
  {
    id: 1,
    title: 'Introductions',
    goal: 'Say hello, introduce yourself, and ask basic identity questions.',
    categories: ['Street', 'New Person', 'First Contact'],
    streetPhrases: [
      { de: 'Hallo, wie geht es Ihnen?', en: 'Hello, how are you?', pron: 'HA-loh vee gayt es EE-nen?' },
      { de: 'Ich heisse Alex.', en: 'My name is Alex.', pron: 'ikh HAI-seh AL-eks' },
      { de: 'Wie heissen Sie?', en: 'What is your name?', pron: 'vee HAI-sen zee?' },
      { de: 'Ich komme aus Bosnien.', en: 'I come from Bosnia.', pron: 'ikh KO-meh ows BOS-nee-en' },
      { de: 'Wo wohnen Sie?', en: 'Where do you live?', pron: 'voh VOH-nen zee?' }
    ],
    barouniPhrases: [
      { de: 'Hallo, ich heisse Barouni.', en: 'Hello, my name is Barouni.', pron: 'HA-loh ikh HAI-seh ba-ROO-nee' },
      { de: 'Ich wohne in Sarajevo.', en: 'I live in Sarajevo.', pron: 'ikh VOH-neh in sa-RA-ye-voh' },
      { de: 'Ich arbeite in IT.', en: 'I work in IT.', pron: 'ikh AR-bai-teh in ee-tee' },
      { de: 'Freut mich, Sie kennenzulernen.', en: 'Nice to meet you.', pron: 'froyt mikh, zee KEN-en-tsu-ler-nen' }
    ]
  },
  {
    id: 2,
    title: 'Daily Needs',
    goal: 'Ask for common things in public places with polite language.',
    categories: ['Street', 'Cafe', 'Help'],
    streetPhrases: [
      { de: 'Entschuldigung, wo ist die Toilette?', en: 'Excuse me, where is the toilet?', pron: 'ent-SHOOL-dee-goong, voh ist dee toy-LET-teh?' },
      { de: 'Ich brauche Wasser.', en: 'I need water.', pron: 'ikh BROW-kheh VA-ser' },
      { de: 'Kann ich mit Karte zahlen?', en: 'Can I pay by card?', pron: 'kan ikh mit KAR-teh TSA-len?' },
      { de: 'Danke fuer Ihre Hilfe.', en: 'Thank you for your help.', pron: 'DAN-keh fyoor EE-reh HIL-feh' }
    ],
    barouniPhrases: [
      { de: 'Ich bin neu in Deutschland.', en: 'I am new in Germany.', pron: 'ikh bin noy in DOYTCH-land' },
      { de: 'Koennen Sie langsam sprechen?', en: 'Can you speak slowly?', pron: 'KER-nen zee LANG-zam SHPRE-khen?' },
      { de: 'Bitte, nur einfache Woerter.', en: 'Please, only simple words.', pron: 'BIT-teh, noor AIN-fa-kheh VER-ter' }
    ]
  },
  {
    id: 3,
    title: 'Shopping',
    goal: 'Handle prices, sizes, and payment in shops.',
    categories: ['Shop', 'Clothes', 'Payment'],
    streetPhrases: [
      { de: 'Guten Tag, ich suche eine Jacke.', en: 'Good day, I am looking for a jacket.', pron: 'GOO-ten tahk, ikh ZOO-kheh AI-neh YA-keh' },
      { de: 'Haben Sie diese in Groesse M?', en: 'Do you have this in size M?', pron: 'HA-ben zee DEE-zeh in GRER-seh em?' },
      { de: 'Kann ich das anprobieren?', en: 'Can I try this on?', pron: 'kan ikh das AN-pro-bee-ren?' },
      { de: 'Wie viel kostet das?', en: 'How much does that cost?', pron: 'vee feel KOS-tet das?' },
      { de: 'Das ist zu teuer.', en: 'That is too expensive.', pron: 'das ist tsoo TOY-er' },
      { de: 'Ich nehme es.', en: 'I will take it.', pron: 'ikh NAY-meh es' },
      { de: 'Kann ich mit Karte zahlen?', en: 'Can I pay by card?', pron: 'kan ikh mit KAR-teh TSA-len?' },
      { de: 'Vielen Dank, auf Wiedersehen.', en: 'Many thanks, goodbye.', pron: 'FEE-len dank, owf VEE-der-zay-en' }
    ],
    barouniPhrases: [
      { de: 'Hallo, ich brauche Arbeitsschuhe.', en: 'Hello, I need work shoes.', pron: 'HA-loh, ikh BROW-kheh AR-baits-shoo-eh' },
      { de: 'Ich arbeite auf der Baustelle.', en: 'I work on the construction site.', pron: 'ikh AR-bai-teh owf dare BOW-shtel-leh' },
      { de: 'Gibt es ein guenstiges Modell?', en: 'Is there a low-cost model?', pron: 'gibt es ayn GUENS-tee-ges moh-DEL?' },
      { de: 'Ich nehme die robuste Variante.', en: 'I take the robust version.', pron: 'ikh NAY-meh dee roh-BOOS-teh va-ree-AN-teh' },
      { de: 'Brauche ich eine Quittung fuer die Firma.', en: 'Do I need a receipt for the company.', pron: 'BROW-kheh ikh AI-neh KVI-toong fyoor dee FIR-ma' },
      { de: 'Koennen Sie den Preis erklaeren?', en: 'Can you explain the price?', pron: 'KER-nen zee den prais er-KLE-ren?' },
      { de: 'Ich zahle heute bar.', en: 'I pay cash today.', pron: 'ikh TSA-leh HOY-teh bar' },
      { de: 'Danke, das hilft mir sehr.', en: 'Thank you, that helps me a lot.', pron: 'DAN-keh, das hilft meer zair' }
    ]
  },
  {
    id: 4,
    title: 'Supermarket',
    goal: 'Find products, ask location, and check totals.',
    categories: ['Supermarket', 'Checkout', 'Items'],
    streetPhrases: [
      { de: 'Entschuldigung, wo finde ich Brot?', en: 'Excuse me, where do I find bread?', pron: 'ent-SHOOL-dee-goong, voh FIN-deh ikh broht?' },
      { de: 'Ist die Milch frisch?', en: 'Is the milk fresh?', pron: 'ist dee milkh frish?' },
      { de: 'Ich brauche auch Eier und Kaese.', en: 'I also need eggs and cheese.', pron: 'ikh BROW-kheh owkh AI-er oont KAY-zeh' },
      { de: 'Wo ist die Kasse?', en: 'Where is the checkout?', pron: 'voh ist dee KA-seh?' },
      { de: 'Haben Sie eine Kundenkarte?', en: 'Do you have a customer card?', pron: 'HA-ben zee AI-neh KOON-den-kar-teh?' },
      { de: 'Moechten Sie eine Tuete?', en: 'Would you like a bag?', pron: 'MER-khten zee AI-neh TOE-teh?' },
      { de: 'Nein danke, ich habe eine Tasche.', en: 'No thanks, I have a bag.', pron: 'nain DAN-keh, ikh HA-beh AI-neh TA-sheh' },
      { de: 'Stimmt der Betrag?', en: 'Is the amount correct?', pron: 'shtimt dare beh-TRAHG?' }
    ],
    barouniPhrases: [
      { de: 'Ich kaufe fuer die Woche ein.', en: 'I am shopping for the week.', pron: 'ikh KOW-feh fyoor dee VO-kheh ayn' },
      { de: 'Ich brauche Reis, Gemuese und Huhn.', en: 'I need rice, vegetables and chicken.', pron: 'ikh BROW-kheh rais, geh-MUE-zeh oont hoon' },
      { de: 'Wo steht das Olivenoel?', en: 'Where is the olive oil?', pron: 'voh shteyt das oh-LEE-ven-erl?' },
      { de: 'Ist heute etwas im Angebot?', en: 'Is anything on offer today?', pron: 'ist HOY-teh ET-vas im AN-geh-boht?' },
      { de: 'Ich vergleiche die Preise.', en: 'I compare the prices.', pron: 'ikh fer-GLAI-kheh dee PRAI-zeh' },
      { de: 'Bitte getrennt bezahlen.', en: 'Please pay separately.', pron: 'BIT-teh geh-TRENT beh-TSA-len' },
      { de: 'Ich bezahle mit Karte.', en: 'I pay by card.', pron: 'ikh beh-TSA-leh mit KAR-teh' },
      { de: 'Vielen Dank und schoenen Abend.', en: 'Thank you very much and have a nice evening.', pron: 'FEE-len dank oont SHER-nen AH-bent' }
    ]
  },
  {
    id: 5,
    title: 'Gas Station',
    goal: 'Request fuel, pay, and ask road support questions.',
    categories: ['Gas Station', 'Car', 'Road'],
    streetPhrases: [
      { de: 'Guten Abend, ich brauche Diesel.', en: 'Good evening, I need diesel.', pron: 'GOO-ten AH-bent, ikh BROW-kheh DEE-zel' },
      { de: 'Welche Zapfsaeule ist frei?', en: 'Which pump is free?', pron: 'VEL-kheh TSAPF-zoy-leh ist frai?' },
      { de: 'Bitte volltanken.', en: 'Please fill it up.', pron: 'BIT-teh FOL-tan-ken' },
      { de: 'Kann ich den Reifendruck pruefen?', en: 'Can I check tire pressure?', pron: 'kan ikh den RAI-fen-drook PRUE-fen?' },
      { de: 'Wo ist die Waschanlage?', en: 'Where is the car wash?', pron: 'voh ist dee VASH-an-lah-geh?' },
      { de: 'Ich moechte hier bezahlen.', en: 'I would like to pay here.', pron: 'ikh MER-khteh heer beh-TSA-len' },
      { de: 'Brauche ich einen Beleg?', en: 'Do I need a receipt?', pron: 'BROW-kheh ikh AI-nen beh-LEG?' },
      { de: 'Danke, gute Fahrt.', en: 'Thanks, have a good trip.', pron: 'DAN-keh, GOO-teh fart' }
    ],
    barouniPhrases: [
      { de: 'Ich fahre frueh zur Arbeit.', en: 'I drive early to work.', pron: 'ikh FA-reh frueh tsoor AR-bait' },
      { de: 'Mein Tank ist fast leer.', en: 'My tank is almost empty.', pron: 'main tank ist fast lair' },
      { de: 'Ich tanke fuer etwa vierzig Euro.', en: 'I fuel for about forty euros.', pron: 'ikh TAN-keh fyoor ET-va FEER-tsig OY-roh' },
      { de: 'Haben Sie AdBlue?', en: 'Do you have AdBlue?', pron: 'HA-ben zee AD-bloo?' },
      { de: 'Ich brauche eine Vignette fuer die Autobahn.', en: 'I need a sticker for the highway.', pron: 'ikh BROW-kheh AI-neh vig-NET-teh fyoor dee OW-toh-bahn' },
      { de: 'Meine Karte funktioniert nicht.', en: 'My card does not work.', pron: 'MAI-neh KAR-teh foonk-tsee-oh-NEERT nikht' },
      { de: 'Kann ich bar bezahlen?', en: 'Can I pay cash?', pron: 'kan ikh bar beh-TSA-len?' },
      { de: 'Perfekt, jetzt kann ich weiterfahren.', en: 'Perfect, now I can continue driving.', pron: 'per-FEKT, yetst kan ikh VAI-ter-fah-ren' }
    ]
  },
  {
    id: 6,
    title: 'Transport and Street',
    goal: 'Use bus, train, and direction questions in daily travel.',
    categories: ['Bus', 'Train', 'Street'],
    streetPhrases: [
      { de: 'Wo ist die Bushaltestelle?', en: 'Where is the bus stop?', pron: 'voh ist dee BOOSH-hal-te-shtel-leh?' },
      { de: 'Wann kommt der naechste Bus?', en: 'When does the next bus come?', pron: 'van komt dare NEKH-steh boos?' },
      { de: 'Faehrt dieser Bus zum Bahnhof?', en: 'Does this bus go to the train station?', pron: 'fert DEE-zer boos tsoom BAHN-hof?' },
      { de: 'Ich brauche ein Ticket nach Berlin.', en: 'I need a ticket to Berlin.', pron: 'ikh BROW-kheh ayn TI-ket nakh ber-LEEN' },
      { de: 'Wo muss ich umsteigen?', en: 'Where do I have to change?', pron: 'voh moos ikh OOM-shtai-gen?' },
      { de: 'Ist dieser Platz frei?', en: 'Is this seat free?', pron: 'ist DEE-zer plats frai?' },
      { de: 'Entschuldigung, ich muss raus.', en: 'Excuse me, I have to get out.', pron: 'ent-SHOOL-dee-goong, ikh moos rows' },
      { de: 'Danke fuer die Auskunft.', en: 'Thank you for the information.', pron: 'DAN-keh fyoor dee OWS-koonft' }
    ],
    barouniPhrases: [
      { de: 'Ich pendle jeden Tag zur Arbeit.', en: 'I commute to work every day.', pron: 'ikh PEN-dleh YAY-den tahk tsoor AR-bait' },
      { de: 'Die S-Bahn ist heute verspaetet.', en: 'The suburban train is delayed today.', pron: 'dee ES-bahn ist HOY-teh fer-SHPAY-tet' },
      { de: 'Kann ich hier ein Monatsticket kaufen?', en: 'Can I buy a monthly ticket here?', pron: 'kan ikh heer ayn moh-NATS-ti-ket KOW-fen?' },
      { de: 'Welche Linie faehrt nach Mitte?', en: 'Which line goes to Mitte?', pron: 'VEL-kheh LEE-nee-eh fert nakh MIT-teh?' },
      { de: 'Ich steige am Alex aus.', en: 'I get off at Alex.', pron: 'ikh SHTAI-geh am AH-leks ows' },
      { de: 'Koennen Sie mir den Weg zeigen?', en: 'Can you show me the way?', pron: 'KER-nen zee meer den vayk TSAI-gen?' },
      { de: 'Ich bin noch neu in der Stadt.', en: 'I am still new in the city.', pron: 'ikh bin nokh noy in dare shtat' },
      { de: 'Super, jetzt finde ich es.', en: 'Great, now I can find it.', pron: 'ZOO-per, yetst FIN-deh ikh es' }
    ]
  },
  {
    id: 7,
    title: 'Work Basics',
    goal: 'Use simple speaking for tasks, time, and teamwork.',
    categories: ['Work', 'Office', 'Job'],
    streetPhrases: [
      { de: 'Guten Morgen zusammen.', en: 'Good morning everyone.', pron: 'GOO-ten MOR-gen tsoo-ZAM-men' },
      { de: 'Was ist heute meine Aufgabe?', en: 'What is my task today?', pron: 'vas ist HOY-teh MAI-neh OWF-gah-beh?' },
      { de: 'Ich beginne um acht Uhr.', en: 'I start at eight oclock.', pron: 'ikh beh-GIN-neh oom akht oor' },
      { de: 'Koennen Sie das bitte wiederholen?', en: 'Can you please repeat that?', pron: 'KER-nen zee das BIT-teh VEE-der-ho-len?' },
      { de: 'Ich brauche Hilfe bei diesem Schritt.', en: 'I need help with this step.', pron: 'ikh BROW-kheh HIL-feh bai DEE-zem shrit' },
      { de: 'Ist die Arbeit jetzt fertig?', en: 'Is the work finished now?', pron: 'ist dee AR-bait yetst FER-tikh?' },
      { de: 'Wir machen eine kurze Pause.', en: 'We take a short break.', pron: 'veer MA-khen AI-neh KOOR-tseh POW-zeh' },
      { de: 'Danke fuer die gute Zusammenarbeit.', en: 'Thank you for the good cooperation.', pron: 'DAN-keh fyoor dee GOO-teh tsoo-ZAM-men-ar-bait' }
    ],
    barouniPhrases: [
      { de: 'Ich arbeite heute auf Baustelle drei.', en: 'I work on construction site three today.', pron: 'ikh AR-bai-teh HOY-teh owf BOW-shtel-leh dree' },
      { de: 'Um wie viel Uhr starten wir?', en: 'At what time do we start?', pron: 'oom vee feel oor SHTAR-ten veer?' },
      { de: 'Ich brauche noch Material.', en: 'I still need materials.', pron: 'ikh BROW-kheh nokh mah-teh-ree-AL' },
      { de: 'Der Kunde wartet schon.', en: 'The client is already waiting.', pron: 'dare KOON-deh VAR-tet shohn' },
      { de: 'Bitte erklaeren Sie den Plan langsam.', en: 'Please explain the plan slowly.', pron: 'BIT-teh er-KLE-ren zee den plan LANG-zam' },
      { de: 'Ich dokumentiere alles mit Fotos.', en: 'I document everything with photos.', pron: 'ikh doh-koo-men-TEE-reh AL-les mit FO-tohs' },
      { de: 'Wir sind in einer Stunde fertig.', en: 'We are done in one hour.', pron: 'veer zint in AI-ner SHTOON-deh FER-tikh' },
      { de: 'Morgen machen wir den Rest.', en: 'Tomorrow we do the rest.', pron: 'MOR-gen MA-khen veer den rest' }
    ]
  },
  {
    id: 8,
    title: 'Confident Social Talk',
    goal: 'Speak naturally in social situations with confidence.',
    categories: ['Social', 'Street', 'Community'],
    streetPhrases: [
      { de: 'Schoenes Wetter heute, oder?', en: 'Nice weather today, right?', pron: 'SHER-nes VET-ter HOY-teh, OH-der?' },
      { de: 'Was machen Sie am Wochenende?', en: 'What do you do on the weekend?', pron: 'vas MA-khen zee am VO-khen-en-deh?' },
      { de: 'Ich lerne noch Deutsch, aber jeden Tag besser.', en: 'I am still learning German, but better every day.', pron: 'ikh LER-neh nokh doytch, AH-ber YAY-den tahk BES-ser' },
      { de: 'Woher kommen Sie urspruenglich?', en: 'Where do you originally come from?', pron: 'voh-HER KO-men zee OOR-shproong-likh?' },
      { de: 'Seit wann leben Sie hier?', en: 'Since when have you lived here?', pron: 'zait van LAY-ben zee heer?' },
      { de: 'Haben Sie Zeit fuer einen Kaffee?', en: 'Do you have time for a coffee?', pron: 'HA-ben zee tsait fyoor AI-nen KA-feh?' },
      { de: 'Das freut mich sehr zu hoeren.', en: 'I am very glad to hear that.', pron: 'das froyt mikh zair tsoo HER-ren' },
      { de: 'Bis bald und einen schoenen Tag.', en: 'See you soon and have a nice day.', pron: 'bis balt oont AI-nen SHER-nen tahk' }
    ],
    barouniPhrases: [
      { de: 'Ich moechte mein Deutsch aktiv benutzen.', en: 'I want to use my German actively.', pron: 'ikh MER-khteh main doytch ak-TEEF beh-NOOT-tsen' },
      { de: 'In Bosnien war ich oft mit Kunden im Kontakt.', en: 'In Bosnia I was often in contact with clients.', pron: 'in BOS-nee-en var ikh oft mit KOON-den im KON-takt' },
      { de: 'Hier baue ich mir ein neues Leben auf.', en: 'Here I am building a new life.', pron: 'heer BOW-eh ikh meer ayn NOY-es LAY-ben owf' },
      { de: 'Ich suche gute Leute fuer Zusammenarbeit.', en: 'I am looking for good people for cooperation.', pron: 'ikh ZOO-kheh GOO-teh LOY-teh fyoor tsoo-ZAM-men-ar-bait' },
      { de: 'Wenn etwas unklar ist, frage ich direkt.', en: 'If something is unclear, I ask directly.', pron: 'ven ET-vas oon-KLAR ist, FRA-geh ikh dee-REKT' },
      { de: 'Ich respektiere Zeit und Absprachen.', en: 'I respect time and agreements.', pron: 'ikh res-pek-TEE-reh tsait oont AP-shprah-khen' },
      { de: 'Mit Uebung spreche ich immer fluessiger.', en: 'With practice I speak more and more fluently.', pron: 'mit UE-boong SHPRE-kheh ikh IM-mer FLUE-see-ger' },
      { de: 'Danke fuer das gute Gespraech.', en: 'Thank you for the good conversation.', pron: 'DAN-keh fyoor das GOO-teh geh-SHPRAYKH' }
    ]
  }
];

const MODE = {
  STREET: 'street',
  BAROUNI: 'barouni'
};

let currentMode = MODE.STREET;
let currentLevelId = 1;
let theme = 'dark';
const USE_CLOUD_TTS = false;
const cloudAudio = new Audio();

const supportsSpeech = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

const streetModeBtn = document.getElementById('streetModeBtn');
const barouniModeBtn = document.getElementById('barouniModeBtn');
const modeDescription = document.getElementById('modeDescription');
const levelsGrid = document.getElementById('levelsGrid');
const lessonTitle = document.getElementById('lessonTitle');
const lessonBadge = document.getElementById('lessonBadge');
const lessonGoal = document.getElementById('lessonGoal');
const categoryChips = document.getElementById('categoryChips');
const phrasesList = document.getElementById('phrasesList');
const dialogList = document.getElementById('dialogList');
const themeToggleBtn = document.getElementById('themeToggleBtn');

const THEME_KEY = 'deutschstart-theme';

function applyTheme(nextTheme) {
  theme = nextTheme === 'light' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', theme);
  themeToggleBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
}

function initializeTheme() {
  const storedTheme = localStorage.getItem(THEME_KEY);
  if (storedTheme === 'light' || storedTheme === 'dark') {
    applyTheme(storedTheme);
    return;
  }

  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  applyTheme(prefersLight ? 'light' : 'dark');
}

function getGermanVoices() {
  if (!supportsSpeech) return [];
  return speechSynthesis.getVoices().filter((v) => v.lang && v.lang.toLowerCase().startsWith('de'));
}

function pickVoiceByPreset() {
  const voices = getGermanVoices();
  if (!voices.length) return null;

  const scoreVoice = (voice) => {
    const name = (voice.name || '').toLowerCase();
    let score = 0;

    // Prefer newer natural/neural voices where available.
    if (name.includes('natural')) score += 6;
    if (name.includes('neural')) score += 6;
    if (name.includes('online')) score += 2;

    // Strongly prefer known natural German voices.
    if (name.includes('katja') && name.includes('online')) score += 8;
    if (name.includes('conrad') && name.includes('online')) score += 8;

    // Favor known high-quality German voices on common platforms.
    if (name.includes('katja') || name.includes('conrad') || name.includes('anna') || name.includes('hedda')) {
      score += 3;
    }

    // Older local desktop voices can sound rough/robotic.
    if (voice.localService) score -= 1;
    if (name.includes('desktop')) score -= 3;
    if (name.includes('classic')) score -= 2;

    return score;
  };

  return voices.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0] || null;
}

function isLikelyNaturalVoice(voice) {
  if (!voice) return false;
  const name = (voice.name || '').toLowerCase();
  return name.includes('natural') || name.includes('neural') || name.includes('online');
}

function getGermanVoice() {
  if (!supportsSpeech) return null;
  const selected = pickVoiceByPreset();
  if (selected) return selected;

  const voices = speechSynthesis.getVoices();
  return voices.find((v) => v.lang && v.lang.toLowerCase().includes('de')) || null;
}

function getCloudTtsUrl(text) {
  const query = encodeURIComponent(text);
  return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=de&q=${query}`;
}

async function speakGermanCloud(text) {
  if (!navigator.onLine) return false;

  return new Promise((resolve) => {
    const cleanup = () => {
      cloudAudio.onended = null;
      cloudAudio.onerror = null;
      cloudAudio.oncanplay = null;
    };

    cloudAudio.oncanplay = async () => {
      try {
        await cloudAudio.play();
      } catch {
        cleanup();
        resolve(false);
      }
    };

    cloudAudio.onended = () => {
      cleanup();
      resolve(true);
    };

    cloudAudio.onerror = () => {
      cleanup();
      resolve(false);
    };

    cloudAudio.src = getCloudTtsUrl(text);
    cloudAudio.load();
  });
}

async function speakGerman(text) {
  if (!text) return;
  const cleanText = text
    .replace(/\s+/g, ' ')
    .replace(/\s*([,.!?;:])\s*/g, '$1 ')
    .trim();

  if (USE_CLOUD_TTS) {
    const played = await speakGermanCloud(cleanText);
    if (played) return;
  }

  if (!supportsSpeech) return;

  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'de-DE';
  // Softer, smoother human cadence.
  utterance.rate = 0.9;
  utterance.pitch = 0.98;
  utterance.volume = 0.96;
  const voice = getGermanVoice();
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang || 'de-DE';
  }
  setTimeout(() => {
    speechSynthesis.speak(utterance);
  }, 40);
}

function getCurrentLevel() {
  return LEVELS.find((l) => l.id === currentLevelId);
}

function renderLevels() {
  levelsGrid.innerHTML = '';

  LEVELS.forEach((level) => {
    const btn = document.createElement('button');
    btn.className = 'level-btn' + (level.id === currentLevelId ? ' active' : '');
    btn.innerHTML = `
      <span class="level-num">Level ${level.id}</span>
      <span class="level-name">${level.title}</span>
    `;

    btn.addEventListener('click', () => {
      currentLevelId = level.id;
      render();
    });

    levelsGrid.appendChild(btn);
  });
}

function renderMode() {
  streetModeBtn.classList.toggle('active', currentMode === MODE.STREET);
  barouniModeBtn.classList.toggle('active', currentMode === MODE.BAROUNI);

  modeDescription.textContent =
    currentMode === MODE.STREET
      ? 'Street Mode: neutral phrases for any learner in Germany.'
      : 'Barouni Mode: personal scenario style (Barouni in shop, street, gas station, and daily life).';

  const canPlayAudio = USE_CLOUD_TTS || supportsSpeech;
  if (!canPlayAudio) {
    modeDescription.textContent += ' Audio is not supported in this browser.';
    return;
  }

  const voice = getGermanVoice();
  if (supportsSpeech && !isLikelyNaturalVoice(voice)) {
    modeDescription.textContent += ' For a more human voice, open this app in Microsoft Edge and install German speech voices (Natural).';
  }
}

function renderLesson() {
  const level = getCurrentLevel();
  const phrases = currentMode === MODE.STREET ? level.streetPhrases : level.barouniPhrases;

  lessonTitle.textContent = `Level ${level.id}: ${level.title}`;
  lessonBadge.textContent = currentMode === MODE.STREET ? 'Street Mode' : 'Barouni Mode';
  lessonGoal.textContent = level.goal;

  categoryChips.innerHTML = '';
  level.categories.forEach((cat) => {
    const chip = document.createElement('span');
    chip.className = 'category-chip';
    chip.textContent = cat;
    categoryChips.appendChild(chip);
  });

  phrasesList.innerHTML = '';
  if (!phrases.length) {
    const empty = document.createElement('div');
    empty.className = 'phrase-card';
    empty.innerHTML = '<span class="en">Content coming next for this level.</span>';
    phrasesList.appendChild(empty);
  } else {
    phrases.forEach((p) => {
      const card = document.createElement('div');
      card.className = 'phrase-card';
      card.innerHTML = `
        <div class="phrase-head">
          <span class="de">${p.de}</span>
          <button class="play-btn" data-speak="${p.de.replace(/"/g, '&quot;')}">Play</button>
        </div>
        <span class="en">${p.en}</span>
        <span class="pron">Pronunciation: ${p.pron}</span>
      `;
      phrasesList.appendChild(card);
    });
  }

  renderDialog(phrases);
}

function renderDialog(phrases) {
  dialogList.innerHTML = '';

  if (!phrases.length) {
    const line = document.createElement('div');
    line.className = 'dialog-line';
    line.textContent = 'Mini dialog for this level will appear when phrases are added.';
    dialogList.appendChild(line);
    return;
  }

  const dialogData = [
    { speaker: 'A', text: phrases[0].de },
    { speaker: 'B', text: phrases[Math.min(1, phrases.length - 1)].de },
    { speaker: 'A', text: phrases[Math.min(2, phrases.length - 1)].de }
  ];

  dialogData.forEach((row) => {
    const line = document.createElement('div');
    line.className = 'dialog-line';
    line.innerHTML = `
      <div class="dialog-head">
        <span><span class="speaker">${row.speaker}:</span> ${row.text}</span>
        <button class="play-btn" data-speak="${row.text.replace(/"/g, '&quot;')}">Play</button>
      </div>
    `;
    dialogList.appendChild(line);
  });
}

function bindDynamicAudioButtons() {
  document.querySelectorAll('.play-btn[data-speak]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-speak') || '';
      speakGerman(text);
    });
  });
}

function render() {
  renderMode();
  renderLevels();
  renderLesson();
  bindDynamicAudioButtons();
}

streetModeBtn.addEventListener('click', () => {
  currentMode = MODE.STREET;
  render();
});

barouniModeBtn.addEventListener('click', () => {
  currentMode = MODE.BAROUNI;
  render();
});

themeToggleBtn.addEventListener('click', () => {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  localStorage.setItem(THEME_KEY, nextTheme);
});

if (supportsSpeech) {
  speechSynthesis.onvoiceschanged = () => {
    // Trigger voice list initialization in some browsers.
    getGermanVoice();
  };
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      const scope = registration.scope || '';
      if (scope.includes('/deutschstart/')) {
        registration.unregister();
      }
    });
  }).catch(() => {
    // Ignore service worker cleanup errors.
  });
}

initializeTheme();
render();
