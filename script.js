document.addEventListener('DOMContentLoaded', () => {

  /* --- Translation Dictionary --- */
  const translations = {
    nl: {
      hero_badge: "Welkom in mijn wereld!",
      hero_title: "Norah's Zonnige Wereld ☀️",
      hero_subtitle: "Brenger van glimlachen, dol op avontuur, en vriend van iedereen!",
      hero_cta_discover: "Ontdek Meer",
      hero_cta_gallery: "Fotogalerij",
      
      nav_home: "Home",
      nav_about: "Over Norah",
      nav_luna: "Luna de Hond",
      nav_hobbies: "Mijn Hobby's",
      nav_gallery: "Galerij",
      nav_guestbook: "Gastenboek",
      
      about_frame_caption: "Norah ☀️ Schijnt altijd!",
      about_title: "Het meisje met de zonnige persoonlijkheid",
      about_lead: "Norah is een bundel van vreugde, gelach en eindeloze positieve energie. Waar ze ook gaat, brengt ze een zonnige persoonlijkheid die de hele kamer verlicht.",
      about_text: "Ze gelooft dat elke dag een nieuw avontuur is dat wacht om te gebeuren. Of ze nu de natuur verkent, levendige meesterwerken tekent of knuffelt met haar favoriete hond, Norah verspreidt warmte en vriendelijkheid naar iedereen om haar heen.",
      stat_sunshine_title: "Zonnige Energie",
      stat_luna_inf: "Oneindig",
      stat_luna_title: "Liefde voor Luna",
      stat_play_always: "Altijd",
      stat_play_title: "Creëren & Spelen",
      
      luna_badge: "Norah's Beste Vriendin 🐾",
      luna_title: "Luna de Hond",
      luna_lead: "Als er één ding is waar Norah super-duper veel van houdt, dan is het haar geweldige, pluizige hond, Luna!",
      luna_text: "Luna is een prachtige, pluizige Berner Sennenhond met een groot hart en een lief karakter. Ze staat altijd klaar voor een gezellige knuffel, een leuk spelletje in de tuin of een wandeling aan zee. Norah en Luna zijn onafscheidelijke partners in crime!",
      luna_pet_title: "Geef Luna wat liefde! 🐶",
      luna_pet_desc: "Klik op de knop hieronder om Luna te aaien en te zien hoeveel ze ervan houdt!",
      luna_pet_btn: "Aai Luna! ❤️",
      luna_pet_tally_prefix: "Luna is vandaag al",
      luna_pet_tally_suffix: "keer geaaid!",
      luna_frame_caption: "Beste vriendinnen voor altijd: Norah & Luna! 🐾",
      
      hobby_horse_title: "Paardrijden",
      hobby_horse_desc: "Norah houdt van paarden en de sensatie van paardrijden! De wind voelen terwijl ze door de arena draaft, leert haar kracht, geduld en hoe ze voor de paarden moet zorgen.",
      hobby_sailing_title: "Zeilen",
      hobby_sailing_desc: "Uitvaren op het open water is een van Norah's absolute favorieten! Ze houdt ervan de koele wind te voelen, de boot te besturen en met haar familie over de golven te varen.",
      hobby_drawing_title: "Tekenen & Creativiteit",
      hobby_drawing_desc: "Norah uit haar zonnige persoonlijkheid door middel van prachtige, kleurrijke tekeningen. Maak hier zelf een tekening op haar tekenbord!",
      sketchpad_clear: "Wissen 🧹",
      sketchpad_post: "Deel Tekening 🖼️",
      sketchpad_empty_error: "Teken eerst iets moois!",
      hobby_music_title: "Zingen & Dansen",
      hobby_music_desc: "Vrolijke liedjes zingen en dansen op blije ritmes is hoe Norah vreugde verspreidt! Ze staat altijd klaar om een show op te voeren en te swingen.",
      music_widget_title: "Zonnige Melodie ☀️",
      music_widget_btn_start: "Start Dansritme",
      music_widget_btn_stop: "Pauzeer Dansritme",
      hobby_skating_title: "Skeeleren",
      hobby_skating_desc: "Of het nu op inline skates of rolschaatsen is, skeeleren is puur plezier voor Norah! Ze geniet van glijden, nieuwe trucjes leren en rondracen met haar vrienden.",
      skate_hover_text: "Beweeg hierover om de skeelers te spinnen!",
      hobby_karate_title: "Karate",
      hobby_karate_desc: "Vastberadenheid, focus en kracht! Norah oefent karate, leert coole standen, stoten en weringen met haar witte band.",
      
      gallery_title: "Momenten van Geluk 📸",
      gallery_subtitle: "Een blik op Norah's echte avonturen: zeilen, paardrijden, karate en spelen met Luna.",
      
      caption_window: "Zitten bij het raam ☀️",
      caption_luna: "Knuffeltijd met Luna! 🐾",
      caption_pose: "Poseer eens! ✨",
      caption_sailing_cloudy: "Zeilen in de wind ⛵",
      caption_sailing_sunny: "Kapitein Norah! ⛵",
      caption_horse_close: "Ontmoet mijn paardenvriend! 🐎",
      caption_horse_riding: "Paardrijles! 🐎",
      caption_karate1: "Karate Focus! 🥋",
      caption_karate2: "Karate Stand! 🥋",
      
      guestbook_title: "Zonnig Berichtenbord ☀️",
      guestbook_subtitle: "Laat een lief berichtje, een warme wens of een groet achter voor Norah!",
      guestbook_btn_submit: "Stuur Zonnestraal ☀️",
      guestbook_recent_title: "Recente Berichten",
      guestbook_empty: "Nog geen berichten. Wees de eerste om zonnestralen te sturen! ☀️",
      footer_text: "&copy; 2026 Norah's Zonnige Wereld. Gemaakt met ❤️ voor Norah en Luna.",
      
      nav_diary: "Dagboek",
      diary_title: "Norah's Dagboek 📖",
      diary_subtitle: "Blijf op de hoogte van mijn avonturen!",
      diary_login_btn: "Schrijven ✍️",
      diary_logout_btn: "Uitloggen 🔓",
      diary_login_title: "Inloggen voor Dagboek",
      diary_login_submit: "Inloggen",
      diary_login_error: "Onjuiste gebruikersnaam of wachtwoord!",
      diary_new_entry_title: "Nieuw Dagboekbericht",
      diary_field_title: "Titel",
      diary_field_text: "Verhaal",
      diary_field_image: "Kies een foto",
      diary_field_submit: "Plaatsen 📝",
      diary_empty: "Nog geen dagboekberichten."
    },
    en: {
      hero_badge: "Welcome to my world!",
      hero_title: "Norah's Sunshine World ☀️",
      hero_subtitle: "Bringer of smiles, lover of adventure, and friend to all!",
      hero_cta_discover: "Discover More",
      hero_cta_gallery: "Photo Gallery",
      
      nav_home: "Home",
      nav_about: "About Norah",
      nav_luna: "Luna the Dog",
      nav_hobbies: "My Hobbies",
      nav_gallery: "Gallery",
      nav_guestbook: "Guestbook",
      
      about_frame_caption: "Norah ☀️ Always shining bright!",
      about_title: "The Girl with the Sunshine Personality",
      about_lead: "Norah is a bundle of joy, laughter, and endless positive energy. Wherever she goes, she carries a bright 'sunshine personality' that lights up the entire room.",
      about_text: "She believes every day is a new adventure waiting to happen. Whether she's exploring the outdoors, drawing vibrant masterpieces, or cuddling with her favorite dog, Norah spreads warmth and kindness to everyone around her.",
      stat_sunshine_title: "Sunshine Energy",
      stat_luna_inf: "Infinite",
      stat_luna_title: "Loves for Luna",
      stat_play_always: "Always",
      stat_play_title: "Creating & Playing",
      
      luna_badge: "Norah's Best Friend 🐾",
      luna_title: "Luna the Dog",
      luna_lead: "If there's one thing Norah super-duper loves, it's her amazing, fluffy dog, Luna!",
      luna_text: "Luna is a gorgeous, fluffy Bernese Mountain Dog with a big heart and a sweet personality. She is always ready for a cozy hug, a fun play session in the yard, or a walk by the sea. Norah and Luna are inseparable partners-in-crime!",
      luna_pet_title: "Give Luna some love! 🐶",
      luna_pet_desc: "Click the button below to pet Luna and see how much she loves it!",
      luna_pet_btn: "Pet Luna! ❤️",
      luna_pet_tally_prefix: "Luna has been petted",
      luna_pet_tally_suffix: "times today!",
      luna_frame_caption: "Best friends forever: Norah & Luna! 🐾",
      
      hobby_horse_title: "Horse Riding",
      hobby_horse_desc: "Norah loves horses and the thrill of horse riding! Feeling the wind while trotting through the arena teaches her strength, patience, and how to care for animals.",
      hobby_sailing_title: "Sailing",
      hobby_sailing_desc: "Setting sail on the open waters is one of Norah's absolute favorites! She loves feeling the cool wind, steering the boat, and riding the waves with family.",
      hobby_drawing_title: "Drawing & Creativity",
      hobby_drawing_desc: "Norah expresses her sunshine personality through beautiful, colorful drawings. Create a drawing of your own right here on her drawing board!",
      sketchpad_clear: "Clear 🧹",
      sketchpad_post: "Post Drawing 🖼️",
      sketchpad_empty_error: "Draw something beautiful first!",
      hobby_music_title: "Singing & Dancing",
      hobby_music_desc: "Singing cheerful songs and dancing to happy rhythms is how Norah spreads joy! She is always ready to put on a show and groove to the music.",
      music_widget_title: "Sunshine Melody ☀️",
      music_widget_btn_start: "Start Dance Beat",
      music_widget_btn_stop: "Pause Dance Beat",
      hobby_skating_title: "Rollerblading",
      hobby_skating_desc: "Whether on inline skates or rollerblades, rollerblading is pure fun for Norah! She enjoys gliding, learning new tricks, and racing around with her friends.",
      skate_hover_text: "Hover to spin the rollerblades!",
      hobby_karate_title: "Karate",
      hobby_karate_desc: "Determination, focus, and strength! Norah is practicing karate, learning cool stances, punches, and blocks in her white belt.",
      
      gallery_title: "Snapshots of Happiness 📸",
      gallery_subtitle: "A look at some of Norah's real-life adventures: sailing, horse riding, karate, and playing with Luna.",
      
      caption_window: "Sitting by the Window ☀️",
      caption_luna: "Hug Time with Luna! 🐾",
      caption_pose: "Strike a Pose! ✨",
      caption_sailing_cloudy: "Sailing the Wind ⛵",
      caption_sailing_sunny: "Captain Norah! ⛵",
      caption_horse_close: "Meet my Horse Friend! 🐎",
      caption_horse_riding: "Horse Riding Practice! 🐎",
      caption_karate1: "Karate Focus! 🥋",
      caption_karate2: "Karate Stance! 🥋",
      
      guestbook_title: "Sunshine Message Board ☀️",
      guestbook_subtitle: "Leave a sweet note, a warm wish, or a hello for Norah!",
      guestbook_btn_submit: "Send Sunshine ☀️",
      guestbook_recent_title: "Recent Messages",
      guestbook_empty: "No messages yet. Be the first to send some sunshine! ☀️",
      footer_text: "&copy; 2026 Norah's Sunshine World. Created with ❤️ for Norah and Luna.",
      
      nav_diary: "Diary",
      diary_title: "Norah's Diary 📖",
      diary_subtitle: "Keep up with my sunny adventures!",
      diary_login_btn: "Write ✍️",
      diary_logout_btn: "Log Out 🔓",
      diary_login_title: "Login to Diary",
      diary_login_submit: "Login",
      diary_login_error: "Incorrect username or password!",
      diary_new_entry_title: "New Diary Entry",
      diary_field_title: "Title",
      diary_field_text: "Story",
      diary_field_image: "Choose a photo",
      diary_field_submit: "Publish 📝",
      diary_empty: "No diary entries yet."
    }
  };

  const placeholders = {
    nl: {
      guestbook_name_placeholder: "Jouw Naam",
      guestbook_message_placeholder: "Typ hier je zonnige bericht...",
      diary_username_placeholder: "Gebruikersnaam...",
      diary_password_placeholder: "Wachtwoord invoeren..."
    },
    en: {
      guestbook_name_placeholder: "Your Name",
      guestbook_message_placeholder: "Type your sunshine message here...",
      diary_username_placeholder: "Enter username...",
      diary_password_placeholder: "Enter password..."
    }
  };

  let currentLang = localStorage.getItem('norah_active_lang') || 'nl'; // Default to Dutch

  /* --- 1. Language Toggle Mechanism --- */
  const langBtns = document.querySelectorAll('.lang-btn');

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('norah_active_lang', lang);

    // Update simple text translations
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      if (translations[lang] && translations[lang][key] !== undefined) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update inputs/textarea placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
      const key = el.getAttribute('data-translate-placeholder');
      if (placeholders[lang] && placeholders[lang][key] !== undefined) {
        el.setAttribute('placeholder', placeholders[lang][key]);
      }
    });

    // Handle audio visualizer button dynamically
    const playText = playMusicBtn.querySelector('.play-text');
    if (isPlaying) {
      playText.textContent = translations[lang]['music_widget_btn_stop'];
    } else {
      playText.textContent = translations[lang]['music_widget_btn_start'];
    }

    // Refresh guestbook feed so its empty layout or dates switch language
    renderMessages();
    // Refresh user drawing captions
    renderGalleryDrawings();
    
    // Refresh diary feed and auth controls
    if (typeof renderDiary === 'function') {
      renderDiary();
    }
    if (typeof updateDiaryAuthState === 'function') {
      updateDiaryAuthState();
    }
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      langBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const selectedLang = btn.getAttribute('data-lang');
      applyLanguage(selectedLang);
    });
  });

  /* --- 2. Scroll Reveal Fallback Strategy --- */
  const revealElements = document.querySelectorAll('.card-reveal');
  
  if (!CSS.supports('(animation-timeline: view()) and (animation-range: entry)')) {
    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }

  /* --- 3. Luna Petting Emitter & Persistent Counter --- */
  const petLunaBtn = document.getElementById('pet-luna-btn');
  const petCountSpan = document.getElementById('pet-count');
  const animationLayer = document.getElementById('animation-layer');
  
  let petCount = parseInt(localStorage.getItem('luna_pet_count') || '0');
  petCountSpan.textContent = petCount;

  // Load real dog bark audio file
  const realBarkAudio = new Audio('content/luna_bark.mp3');

  // Synthesize a realistic triple dog bark "waf waf waf" using the HTML5 Web Audio API (as a fallback)
  let barkAudioCtx = null;
  function playSynthesizedBark() {
    try {
      if (!barkAudioCtx) {
        barkAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const now = barkAudioCtx.currentTime;

      // Function to play a single "waf" sound
      function playSingleWaf(delay, pitchScale, volumeScale) {
        const time = now + delay;
        
        // 1. Triangle oscillator for the voiced chest/vocal cords ("wa" body)
        const osc = barkAudioCtx.createOscillator();
        osc.type = 'triangle';
        // Pitch sweep representing vocal startup: 135Hz -> 210Hz -> 75Hz
        osc.frequency.setValueAtTime(135 * pitchScale, time);
        osc.frequency.linearRampToValueAtTime(210 * pitchScale, time + 0.03);
        osc.frequency.exponentialRampToValueAtTime(75 * pitchScale, time + 0.12);

        // 2. White noise buffer representing unvoiced throat air friction ("f" tail)
        const bufferSize = barkAudioCtx.sampleRate * 0.16; // 160ms buffer
        const noiseBuffer = barkAudioCtx.createBuffer(1, bufferSize, barkAudioCtx.sampleRate);
        const data = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = Math.random() * 2 - 1;
        }
        
        const noiseNode = barkAudioCtx.createBufferSource();
        noiseNode.buffer = noiseBuffer;

        // Bandpass filter to shape the noise into a throat/breath tone
        const filter = barkAudioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.Q.setValueAtTime(3.5, time);
        filter.frequency.setValueAtTime(450 * pitchScale, time);
        filter.frequency.exponentialRampToValueAtTime(300 * pitchScale, time + 0.12);

        // Gain Nodes to shape and mix components
        const oscGain = barkAudioCtx.createGain();
        const noiseGain = barkAudioCtx.createGain();
        const mainGain = barkAudioCtx.createGain();

        // Vocal body envelope: instant attack, quick decay
        oscGain.gain.setValueAtTime(0, time);
        oscGain.gain.linearRampToValueAtTime(0.25 * volumeScale, time + 0.015);
        oscGain.gain.exponentialRampToValueAtTime(0.001, time + 0.09);

        // Breath envelope: starts slightly later, decays slightly later (the "f" ending)
        noiseGain.gain.setValueAtTime(0, time);
        noiseGain.gain.linearRampToValueAtTime(0, time + 0.01);
        noiseGain.gain.linearRampToValueAtTime(0.4 * volumeScale, time + 0.035);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, time + 0.15);

        // Overall output envelope
        mainGain.gain.setValueAtTime(1, time);
        mainGain.gain.exponentialRampToValueAtTime(0.01, time + 0.16);

        // Connect components
        osc.connect(oscGain);
        oscGain.connect(mainGain);

        noiseNode.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(mainGain);

        mainGain.connect(barkAudioCtx.destination);

        // Start and stop sources
        osc.start(time);
        osc.stop(time + 0.18);
        noiseNode.start(time);
        noiseNode.stop(time + 0.18);
      }

      // Play "waf... waf... waf!" triple bark sequence
      playSingleWaf(0, 1.0, 1.0);        // Bark 1: standard
      playSingleWaf(0.18, 0.95, 0.85);   // Bark 2: slightly lower pitch & softer
      playSingleWaf(0.36, 1.05, 1.05);   // Bark 3: slightly higher pitch & sharper finish
    } catch (err) {
      console.warn("Web Audio API bark synthesis block:", err);
    }
  }

  // Play real audio with synthesized fallback
  function playBarkSound() {
    realBarkAudio.currentTime = 0;
    realBarkAudio.play().catch(err => {
      console.warn("Real audio playback failed, falling back to synthesis:", err);
      playSynthesizedBark();
    });
  }

  petLunaBtn.addEventListener('click', (e) => {
    petCount++;
    localStorage.setItem('luna_pet_count', petCount);
    petCountSpan.textContent = petCount;

    // Play synthesized dog bark
    playBarkSound();

    // Spawn the big paw stamp in the center of the screen
    const bigPaw = document.createElement('div');
    bigPaw.classList.add('big-paw-stamp');
    bigPaw.textContent = '🐾';
    document.body.appendChild(bigPaw);

    bigPaw.addEventListener('animationend', () => {
      bigPaw.remove();
    });

    // Spawn small floating particles around the button
    const rect = petLunaBtn.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + window.scrollY;

    const emojis = ['❤️', '🐾', '🐶', '💖', '✨'];
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const item = document.createElement('div');
        item.classList.add('floating-heart');
        item.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        
        const offsetX = (Math.random() - 0.5) * 80;
        const offsetY = (Math.random() - 0.5) * 30;
        item.style.left = `${btnCenterX + offsetX}px`;
        item.style.top = `${btnCenterY + offsetY}px`;
        
        const rotation = (Math.random() - 0.5) * 45;
        item.style.setProperty('--rotation', `${rotation}deg`);
        
        animationLayer.appendChild(item);

        item.addEventListener('animationend', () => {
          item.remove();
        });
      }, i * 100);
    }
  });

  /* --- 4. Interactive Drawing Canvas (Sketchpad) --- */
  const canvas = document.getElementById('sketchpad');
  const ctx = canvas.getContext('2d');
  const clearBtn = document.getElementById('clear-sketchpad');
  const colorBtns = document.querySelectorAll('.color-btn');

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let currentColor = '#FFD23F';

  ctx.strokeStyle = currentColor;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 5;

  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      colorBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentColor = btn.getAttribute('data-color');
      ctx.strokeStyle = currentColor;
    });
  });

  function getCoordinates(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  }

  function startDrawing(e) {
    isDrawing = true;
    const coords = getCoordinates(e);
    lastX = coords.x;
    lastY = coords.y;
  }

  let hasDrawn = false; // Tracks if user has made any drawings

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    
    const coords = getCoordinates(e);
    
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    
    lastX = coords.x;
    lastY = coords.y;
    hasDrawn = true; // Mark as drawn
  }

  function stopDrawing() {
    isDrawing = false;
  }

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseout', stopDrawing);

  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchend', stopDrawing);

  clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasDrawn = false;
  });

  /* Post Drawing Feature */
  const postBtn = document.getElementById('post-sketchpad');
  const galleryGrid = document.getElementById('gallery-grid');

  function renderGalleryDrawings() {
    // Remove previous user drawing elements to prevent duplicates
    document.querySelectorAll('.gallery-item-user').forEach(el => el.remove());
    
    const userDrawings = JSON.parse(localStorage.getItem('norah_user_drawings') || '[]');
    userDrawings.forEach(drawing => {
      const item = document.createElement('div');
      item.classList.add('gallery-item', 'gallery-item-user');
      item.setAttribute('data-src', drawing.src);
      
      const caption = currentLang === 'nl' ? drawing.caption_nl : drawing.caption_en;
      
      item.innerHTML = `
        <div class="polaroid-frame">
          <img src="${drawing.src}" alt="User Drawing" loading="lazy">
          <div class="polaroid-caption">${caption}</div>
        </div>
      `;
      
      // Prepend to display latest at the top
      galleryGrid.prepend(item);
    });
  }

  postBtn.addEventListener('click', () => {
    if (!hasDrawn) {
      alert(translations[currentLang]['sketchpad_empty_error']);
      return;
    }

    const dataUrl = canvas.toDataURL();
    
    const today = new Date();
    const dateFormatted = today.toLocaleDateString(currentLang === 'nl' ? 'nl-NL' : 'en-US', {
      month: 'short',
      day: 'numeric'
    });

    const newDrawing = {
      src: dataUrl,
      caption_nl: `Gasttekening! 🎨 <br><small>${dateFormatted}</small>`,
      caption_en: `Guest Drawing! 🎨 <br><small>${dateFormatted}</small>`
    };

    const userDrawings = JSON.parse(localStorage.getItem('norah_user_drawings') || '[]');
    userDrawings.push(newDrawing);
    localStorage.setItem('norah_user_drawings', JSON.stringify(userDrawings));

    // Refresh and reward
    renderGalleryDrawings();
    spawnSunbeamCascade(); // Spawn sunburst chimes celebration!
    
    // Clear board
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hasDrawn = false;
  });

  /* --- 5. Interactive Music Box & Synthesizer --- */
  const playMusicBtn = document.getElementById('play-music-btn');
  const musicWidget = document.querySelector('.music-widget');
  const playText = playMusicBtn.querySelector('.play-text');
  const playIcon = playMusicBtn.querySelector('.play-icon');

  let isPlaying = false;
  let synthInterval = null;
  let audioCtx = null;

  const melody = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25];

  function playChimeNote(freq) {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.2);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 1.3);
  }

  playMusicBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    
    if (isPlaying) {
      musicWidget.classList.add('playing');
      playText.textContent = translations[currentLang]['music_widget_btn_stop'];
      playIcon.textContent = '⏸️';

      let noteIndex = 0;
      synthInterval = setInterval(() => {
        const randomNote = melody[Math.floor(Math.random() * melody.length)];
        playChimeNote(randomNote);
        noteIndex++;
      }, 350);

    } else {
      musicWidget.classList.remove('playing');
      playText.textContent = translations[currentLang]['music_widget_btn_start'];
      playIcon.textContent = '▶️';
      
      clearInterval(synthInterval);
    }
  });

  /* --- 6. Polaroid Lightbox Viewer --- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const galleryGridElement = document.getElementById('gallery-grid');

  // Event Delegation for Lightbox clicks (handles statically & dynamically added polaroids)
  galleryGridElement.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) {
      const src = item.getAttribute('data-src');
      const captionText = item.querySelector('.polaroid-caption').innerHTML;
      
      lightboxImg.src = src;
      lightboxCaption.innerHTML = captionText;
      lightbox.style.display = 'block';
    }
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target === lightboxClose) {
      lightbox.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
    }
  });

  /* --- 7. Sunshine Guestbook with LocalStorage --- */
  const guestbookForm = document.getElementById('guestbook-form');
  const visitorNameInput = document.getElementById('visitor-name');
  const visitorMessageInput = document.getElementById('visitor-message');
  const messagesList = document.getElementById('messages-list');

  let messages = JSON.parse(localStorage.getItem('norah_guestbook_messages') || '[]');
  
  function renderMessages() {
    messagesList.innerHTML = '';
    
    if (messages.length === 0) {
      messagesList.innerHTML = `
        <div class="message-item empty-message">
          <p>${translations[currentLang]['guestbook_empty']}</p>
        </div>
      `;
      return;
    }

    const sortedMessages = [...messages].reverse();
    
    sortedMessages.forEach(msg => {
      const item = document.createElement('div');
      item.classList.add('message-item');
      
      const nameEscaped = msg.name.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const messageEscaped = msg.message.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      
      item.innerHTML = `
        <h5>${nameEscaped} ☀️</h5>
        <p>${messageEscaped}</p>
        <div class="message-meta">${msg.date}</div>
      `;
      messagesList.appendChild(item);
    });
  }

  function spawnSunbeamCascade() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const sun = document.createElement('div');
        sun.classList.add('floating-sunbeam');
        sun.textContent = '☀️';
        
        const startX = Math.random() * windowWidth;
        const startY = windowHeight + window.scrollY - 20;
        
        sun.style.left = `${startX}px`;
        sun.style.top = `${startY}px`;
        
        const drift = (Math.random() - 0.5) * 120;
        sun.style.setProperty('--drift', `${drift}px`);
        
        animationLayer.appendChild(sun);

        sun.addEventListener('animationend', () => {
          sun.remove();
        });
      }, i * 150);
    }
  }

  guestbookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nameVal = visitorNameInput.value.trim();
    const messageVal = visitorMessageInput.value.trim();
    
    if (!nameVal || !messageVal) return;

    const today = new Date();
    const dateFormatted = today.toLocaleDateString(currentLang === 'nl' ? 'nl-NL' : 'en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const newMessage = {
      name: nameVal,
      message: messageVal,
      date: dateFormatted
    };

    messages.push(newMessage);
    localStorage.setItem('norah_guestbook_messages', JSON.stringify(messages));
    
    renderMessages();
    spawnSunbeamCascade();
    
    visitorNameInput.value = '';
    visitorMessageInput.value = '';
  });
  /* --- 8. Norah's Diary with Login & LocalStorage --- */
  const diaryLoginBtn = document.getElementById('diary-login-btn');
  const diaryLogoutBtn = document.getElementById('diary-logout-btn');
  const diaryUploadPanel = document.getElementById('diary-upload-panel');
  const diaryForm = document.getElementById('diary-form');
  const diaryGrid = document.getElementById('diary-grid');
  
  const diaryLoginModal = document.getElementById('diary-login-modal');
  const diaryLoginForm = document.getElementById('diary-login-form');
  const closeDiaryLogin = document.getElementById('close-diary-login');
  
  const diaryInputFile = document.getElementById('diary-input-file');
  const diaryFilePreview = document.getElementById('diary-file-preview');
  const diaryPreviewImg = document.getElementById('diary-preview-img');
  const diaryPreviewRemove = document.getElementById('diary-preview-remove');
  
  let diaryLoggedIn = false; // Always logged out by default when page is loaded
  let uploadedFileBase64 = '';

  // Initial Prepopulated Diary Entries
  const defaultDiaryEntries = [
    {
      id: 1,
      date_nl: "24 mei 2026",
      date_en: "May 24, 2026",
      title_nl: "Eerste paardrijles van de week! 🐎",
      title_en: "First horse riding lesson of the week! 🐎",
      text_nl: "Vandaag mocht ik weer rijden! We hebben gedraafd in de bak en ik mocht mijn paardenvriend naderhand verzorgen en lekkere wortels geven.",
      text_en: "Today I got to ride again! We trotted in the arena and I got to groom my horse friend afterwards and feed him some yummy carrots.",
      image: "content/norah_horse_riding.jpg"
    },
    {
      id: 2,
      date_nl: "20 mei 2026",
      date_en: "May 20, 2026",
      title_nl: "Een geweldige dag op het water! ⛵",
      title_en: "An amazing day on the water! ⛵",
      text_nl: "Vandaag zijn we wezen zeilen. Er was een heerlijke bries en de zon scheen volop! Luna bleef op de kade wachten en blafte toen we weer aanlegden.",
      text_en: "Today we went sailing. There was a lovely breeze and the sun was shining bright! Luna waited on the dock and barked happily when we moored.",
      image: "content/norah_sailing_sunny.jpg"
    }
  ];

  function getDiaryEntries() {
    return JSON.parse(localStorage.getItem('norah_diary_entries') || '[]');
  }

  function saveDiaryEntries(entries) {
    localStorage.setItem('norah_diary_entries', JSON.stringify(entries));
  }

  function renderDiary() {
    if (!diaryGrid) return;
    diaryGrid.innerHTML = '';
    const userEntries = getDiaryEntries();
    
    // Combine custom user entries and default entries
    const allEntries = [...userEntries];
    
    defaultDiaryEntries.forEach(defEntry => {
      if (!userEntries.some(e => e.isDefaultShadow && e.defaultId === defEntry.id)) {
        allEntries.push(defEntry);
      }
    });

    allEntries.sort((a, b) => b.id - a.id);

    if (allEntries.length === 0) {
      diaryGrid.innerHTML = `<div class="diary-empty"><p data-translate="diary_empty">${translations[currentLang]['diary_empty']}</p></div>`;
      return;
    }

    allEntries.forEach(entry => {
      const card = document.createElement('div');
      card.classList.add('diary-card');
      
      const date = entry.date ? entry.date : (currentLang === 'nl' ? entry.date_nl : entry.date_en);
      const title = entry.title ? entry.title : (currentLang === 'nl' ? entry.title_nl : entry.title_en);
      const text = entry.text ? entry.text : (currentLang === 'nl' ? entry.text_nl : entry.text_en);
      
      card.innerHTML = `
        <div class="diary-img-container">
          <img src="${entry.image}" alt="${title}" loading="lazy">
        </div>
        <div class="diary-body">
          <div class="diary-date">${date}</div>
          <h4 class="diary-card-title">${title}</h4>
          <p class="diary-text">${text}</p>
        </div>
      `;
      diaryGrid.appendChild(card);
    });
  }

  function updateDiaryAuthState() {
    if (!diaryLoginBtn || !diaryLogoutBtn || !diaryUploadPanel) return;
    if (diaryLoggedIn) {
      diaryLogoutBtn.classList.remove('hidden');
      diaryLoginBtn.innerHTML = currentLang === 'nl' ? "Schrijf Bericht ✍️" : "Write Entry ✍️";
      diaryLoginBtn.classList.add('btn-secondary');
      diaryLoginBtn.classList.remove('btn-primary');
    } else {
      diaryLogoutBtn.classList.add('hidden');
      diaryLoginBtn.innerHTML = currentLang === 'nl' ? "Schrijven ✍️" : "Write ✍️";
      diaryLoginBtn.classList.add('btn-primary');
      diaryLoginBtn.classList.remove('btn-secondary');
      diaryUploadPanel.classList.add('hidden');
    }
  }

  if (diaryLoginBtn) {
    diaryLoginBtn.addEventListener('click', () => {
      if (diaryLoggedIn) {
        diaryUploadPanel.classList.toggle('hidden');
        if (!diaryUploadPanel.classList.contains('hidden')) {
          diaryUploadPanel.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        diaryLoginModal.classList.add('show');
      }
    });
  }

  if (diaryLogoutBtn) {
    diaryLogoutBtn.addEventListener('click', () => {
      diaryLoggedIn = false;
      updateDiaryAuthState();
    });
  }

  if (closeDiaryLogin) {
    closeDiaryLogin.addEventListener('click', () => {
      diaryLoginModal.classList.remove('show');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === diaryLoginModal) {
      diaryLoginModal.classList.remove('show');
    }
  });

  if (diaryLoginForm) {
    diaryLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const userInput = document.getElementById('diary-username');
      const passInput = document.getElementById('diary-password');
      
      const username = userInput.value.trim().toLowerCase();
      const password = passInput.value.trim();
      
      // Norah's credentials: username "norah" and password "sunshine"
      // Also allow "rob" and password "sunshine"
      if ((username === 'norah' && password === 'sunshine') || (username === 'rob' && password === 'sunshine')) {
        diaryLoggedIn = true;
        userInput.value = '';
        passInput.value = '';
        diaryLoginModal.classList.remove('show');
        updateDiaryAuthState();
        diaryUploadPanel.classList.remove('hidden');
        diaryUploadPanel.scrollIntoView({ behavior: 'smooth' });
      } else {
        alert(translations[currentLang]['diary_login_error']);
      }
    });
  }

  if (diaryInputFile) {
    diaryInputFile.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          uploadedFileBase64 = event.target.result;
          diaryPreviewImg.src = uploadedFileBase64;
          diaryFilePreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (diaryPreviewRemove) {
    diaryPreviewRemove.addEventListener('click', () => {
      uploadedFileBase64 = '';
      diaryInputFile.value = '';
      diaryFilePreview.classList.add('hidden');
      diaryPreviewImg.src = '';
    });
  }

  if (diaryForm) {
    diaryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const titleVal = document.getElementById('diary-input-title').value.trim();
      const textVal = document.getElementById('diary-input-text').value.trim();
      
      if (!uploadedFileBase64) {
        alert(currentLang === 'nl' ? "Kies eerst een foto!" : "Please choose a photo first!");
        return;
      }

      const today = new Date();
      const dateFormatted = today.toLocaleDateString(currentLang === 'nl' ? 'nl-NL' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });

      const newEntry = {
        id: Date.now(),
        date: dateFormatted,
        title: titleVal,
        text: textVal,
        image: uploadedFileBase64
      };

      const entries = getDiaryEntries();
      entries.unshift(newEntry);
      saveDiaryEntries(entries);
      
      renderDiary();
      spawnSunbeamCascade();

      diaryForm.reset();
      uploadedFileBase64 = '';
      diaryFilePreview.classList.add('hidden');
      diaryPreviewImg.src = '';
      diaryUploadPanel.classList.add('hidden');
    });
  }

  // Initial rendering
  renderDiary();
  updateDiaryAuthState();

  // Initialize Language and Render
  applyLanguage(currentLang);
});
