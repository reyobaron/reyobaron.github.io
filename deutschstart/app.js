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
    streetPhrases: [],
    barouniPhrases: []
  },
  {
    id: 4,
    title: 'Supermarket',
    goal: 'Find products, ask location, and check totals.',
    categories: ['Supermarket', 'Checkout', 'Items'],
    streetPhrases: [],
    barouniPhrases: []
  },
  {
    id: 5,
    title: 'Gas Station',
    goal: 'Request fuel, pay, and ask road support questions.',
    categories: ['Gas Station', 'Car', 'Road'],
    streetPhrases: [],
    barouniPhrases: []
  },
  {
    id: 6,
    title: 'Transport and Street',
    goal: 'Use bus, train, and direction questions in daily travel.',
    categories: ['Bus', 'Train', 'Street'],
    streetPhrases: [],
    barouniPhrases: []
  },
  {
    id: 7,
    title: 'Work Basics',
    goal: 'Use simple speaking for tasks, time, and teamwork.',
    categories: ['Work', 'Office', 'Job'],
    streetPhrases: [],
    barouniPhrases: []
  },
  {
    id: 8,
    title: 'Confident Social Talk',
    goal: 'Speak naturally in social situations with confidence.',
    categories: ['Social', 'Street', 'Community'],
    streetPhrases: [],
    barouniPhrases: []
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
