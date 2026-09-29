"use client";

import { useEffect, useRef, useState } from "react";

const lessons = [
  { title: "What is this mission?", text: "NASA wants us to remember space equipment that was left behind on the Moon and Mars.", symbol: "01" },
  { title: "Why was it left there?", text: "Some equipment finished its mission, stopped working, or could not be brought back.", symbol: "02" },
  { title: "Why should we remember it?", text: "Old equipment can still teach scientists about space and our history of exploration.", symbol: "03" },
];

const clues = [
  { title: "Surveyor 3 landed", text: "Surveyor 3 landed on the Moon on April 20, 1967.", symbol: "01" },
  { title: "It saw the Moon", text: "Surveyor 3 sent 6,326 television pictures back to Earth.", symbol: "02" },
  { title: "It touched the soil", text: "Its surface sampler dug trenches and tested the lunar soil.", symbol: "03" },
  { title: "Someone came back", text: "Apollo 12 astronauts visited Surveyor 3 in November 1969.", symbol: "04" },
];

const questions = [
  { question: "What is NASA's challenge about?", options: ["Building a new rocket", "Remembering discarded space equipment", "Finding a new planet", "Building a Moon hotel"], answer: 1 },
  { question: "Where did Surveyor 3 land?", options: ["Mars", "Earth", "The Moon", "The Sun"], answer: 2 },
  { question: "When did Surveyor 3 land?", options: ["1967", "1975", "1980", "1990"], answer: 0 },
  { question: "What did Surveyor 3 send back?", options: ["Music", "6,326 TV pictures", "People", "A rocket"], answer: 1 },
  { question: "Which Apollo mission visited Surveyor 3?", options: ["Apollo 8", "Apollo 11", "Apollo 12", "Apollo 15"], answer: 2 },
];

function Mira({ size = "medium", emotion = "happy" }) {
  return (
    <div className={`mira mira-${size} mira-emotion-${emotion}`}>
      <div className="mira-shadow" />
      <div className="mira-backpack"><span /><span /><div className="backpack-light" /></div>
      <div className="mira-hair"><span className="hair-side-left" /><span className="hair-side-right" /></div>
      <div className="mira-head">
        <div className="mira-ear left" /><div className="mira-ear right" />
        <div className="mira-face" />
        <div className="mira-bangs">
          <span className="bang-1" /><span className="bang-2" /><span className="bang-3" /><span className="bang-4" /><span className="bang-5" />
        </div>
        <div className="mira-eyebrow left" /><div className="mira-eyebrow right" />
        <div className="mira-eye left">
          <span className="eye-iris" /><span className="eye-pupil" /><span className="eye-shine-big" /><span className="eye-shine-small" /><span className="eye-lash-line" />
        </div>
        <div className="mira-eye right">
          <span className="eye-iris" /><span className="eye-pupil" /><span className="eye-shine-big" /><span className="eye-shine-small" /><span className="eye-lash-line" />
        </div>
        <div className="mira-blush left" /><div className="mira-blush right" />
        <div className="mira-nose" />
        <div className="mira-mouth"><span className="mouth-open" /><span className="mouth-tongue" /></div>
      </div>
      <div className="mira-helmet">
        <div className="helmet-reflection" /><div className="helmet-ring" /><div className="helmet-glow" />
      </div>
      <div className="mira-neck" />
      <div className="mira-body">
        <div className="mira-shoulder-glow" />
        <div className="mira-chest-panel">
          <div className="panel-dot" /><div className="panel-line" /><div className="panel-line short" />
        </div>
        <div className="mira-logo">M</div>
      </div>
      <div className="mira-arm mira-arm-left"><div className="mira-glove"><span /></div></div>
      <div className="mira-arm mira-arm-right"><div className="mira-glove"><span /></div></div>
      <div className="mira-leg mira-leg-left"><div className="mira-boot"><span /></div></div>
      <div className="mira-leg mira-leg-right"><div className="mira-boot"><span /></div></div>
    </div>
  );
}

function Earth3D({ small = false }) {
  return (
    <div className={`earth-3d ${small ? "earth-small" : ""}`}>
      <div className="earth-atmosphere" />
      <div className="earth-sphere">
        <div className="earth-land land-one" /><div className="earth-land land-two" />
        <div className="earth-land land-three" /><div className="earth-land land-four" />
        <div className="earth-cloud cloud-one" /><div className="earth-cloud cloud-two" /><div className="earth-cloud cloud-three" />
        <div className="earth-shine" />
      </div>
      <div className="earth-shadow" />
    </div>
  );
}

function Moon3D({ large = false }) {
  return (
    <div className={`moon-3d ${large ? "moon-3d-large" : ""}`}>
      <div className="moon-sphere">
        <span className="moon-crater mc-one" /><span className="moon-crater mc-two" />
        <span className="moon-crater mc-three" /><span className="moon-crater mc-four" />
        <span className="moon-crater mc-five" /><span className="moon-crater mc-six" />
        <span className="moon-highlight" />
      </div>
    </div>
  );
}

function Rocket3D() {
  return (
    <div className="rocket-3d-scene">
      <div className="rocket-3d">
        <div className="rocket-body-3d">
          <div className="rocket-face front">
            <div className="rocket-nose-3d" />
            <div className="rocket-window-3d"><span /><b /></div>
            <div className="rocket-band-3d" />
            <div className="rocket-panel-3d" />
          </div>
          <div className="rocket-face back" />
          <div className="rocket-face left"><div className="rocket-side-stripe" /></div>
          <div className="rocket-face right"><div className="rocket-side-stripe" /></div>
        </div>
        <div className="fin-3d fin-left"><div className="fin-face fin-front" /><div className="fin-face fin-back" /><div className="fin-face fin-side" /></div>
        <div className="fin-3d fin-right"><div className="fin-face fin-front" /><div className="fin-face fin-back" /><div className="fin-face fin-side" /></div>
        <div className="fin-3d fin-center"><div className="fin-face fin-front" /><div className="fin-face fin-back" /></div>
        <div className="engine-nozzle-3d"><div className="nozzle-top" /><div className="nozzle-body" /><div className="nozzle-bottom" /></div>
        <div className="flame-3d flame-main"><span /></div>
        <div className="flame-3d flame-left"><span /></div>
        <div className="flame-3d flame-right"><span /></div>
        <div className="smoke-trail"><span /><span /><span /><span /><span /></div>
        <div className="rocket-glow-3d" />
      </div>
    </div>
  );
}

function Surveyor3D() {
  return (
    <div className="surveyor-3d-scene">
      <div className="surveyor-3d">
        <div className="surveyor-body-3d">
          <div className="surveyor-face s-front">
            <div className="s-front-panel"><span /><span /><span /><i /></div>
            <div className="s-logo">S3</div>
          </div>
          <div className="surveyor-face s-back" />
          <div className="surveyor-face s-left">
            <div className="s-solar-panel"><div className="s-solar-cell" /><div className="s-solar-cell" /><div className="s-solar-cell" /><div className="s-sun-glint" /></div>
          </div>
          <div className="surveyor-face s-right">
            <div className="s-solar-panel"><div className="s-solar-cell" /><div className="s-solar-cell" /><div className="s-solar-cell" /></div>
          </div>
          <div className="surveyor-face s-top">
            <div className="s-top-ring" />
            <div className="s-camera"><span /><b /><div className="s-lens-flare" /></div>
          </div>
          <div className="surveyor-face s-bottom" />
        </div>
        <div className="s-antenna-3d">
          <div className="s-antenna-mast" /><div className="s-antenna-dish" />
          <div className="s-signal-wave wave-1" /><div className="s-signal-wave wave-2" /><div className="s-signal-wave wave-3" />
        </div>
        <div className="s-leg-3d s-leg-1"><div className="s-leg-strut" /><div className="s-leg-foot" /></div>
        <div className="s-leg-3d s-leg-2"><div className="s-leg-strut" /><div className="s-leg-foot" /></div>
        <div className="s-leg-3d s-leg-3"><div className="s-leg-strut" /><div className="s-leg-foot" /></div>
        <div className="s-dust"><span /><span /><span /><span /><span /><span /></div>
        <div className="surveyor-shadow-3d" />
      </div>
    </div>
  );
}

function Stars() {
  return (
    <>
      <div className="stars-layer stars-a" />
      <div className="stars-layer stars-b" />
      <div className="stars-layer stars-c" />
      <div className="nebula nebula-one" />
      <div className="nebula nebula-two" />
    </>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-rocket"><div className="loading-flame" /></div>
        <h1>Mission Remnants</h1>
        <p>Preparing Mira's rocket...</p>
        <div className="loading-bar"><span /></div>
      </div>
    </div>
  );
}

function BadgeIcon({ level = "gold" }) {
  const colors = {
    gold: { a: "#fff1a8", b: "#ffc93c", c: "#a67c00" },
    silver: { a: "#f5f5f5", b: "#c0c0c0", c: "#7a7a7a" },
    bronze: { a: "#ffd9b3", b: "#cd7f32", c: "#7a4518" },
    rookie: { a: "#d6f0ff", b: "#8edbff", c: "#3a88b8" },
  };
  const c = colors[level] || colors.gold;
  return (
    <svg viewBox="0 0 100 100" className="badge-svg" width="60" height="60">
      <defs>
        <linearGradient id={`g-${level}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={c.a} />
          <stop offset="60%" stopColor={c.b} />
          <stop offset="100%" stopColor={c.c} />
        </linearGradient>
      </defs>
      <polygon points="50,5 63,35 95,35 68,55 78,88 50,68 22,88 32,55 5,35 37,35" fill={`url(#g-${level})`} stroke={c.c} strokeWidth="2" />
      <circle cx="50" cy="50" r="22" fill="rgba(255,255,255,0.35)" />
    </svg>
  );
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [showStartOverlay, setShowStartOverlay] = useState(true);
  const [scene, setScene] = useState("intro");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [clueIndex, setClueIndex] = useState(0);
  const [foundClues, setFoundClues] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [miraEmotion, setMiraEmotion] = useState("happy");

  const voicesRef = useRef([]);
  const timersRef = useRef([]);
  const audioCtxRef = useRef(null);
  const audioUnlockedRef = useRef(false);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) voicesRef.current = voices;
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    const t1 = setTimeout(loadVoices, 200);
    const t2 = setTimeout(loadVoices, 600);
    const t3 = setTimeout(loadVoices, 1500);
    const t4 = setTimeout(loadVoices, 3000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.speechSynthesis.cancel();
      timersRef.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  const addTimer = (cb, delay) => {
    const t = setTimeout(cb, delay);
    timersRef.current.push(t);
    return t;
  };

  const unlockAudio = () => {
    if (audioUnlockedRef.current) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AC();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);
      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.12);
      osc.start();
      osc.stop(ctx.currentTime + 0.14);

      if ("speechSynthesis" in window) {
        try {
          window.speechSynthesis.cancel();
          const silent = new SpeechSynthesisUtterance(" ");
          silent.volume = 0;
          window.speechSynthesis.speak(silent);
          const prime = new SpeechSynthesisUtterance("Hi");
          prime.volume = 0;
          prime.rate = 1;
          window.speechSynthesis.speak(prime);
        } catch {}
        const v = window.speechSynthesis.getVoices();
        if (v.length > 0) voicesRef.current = v;
      }

      audioUnlockedRef.current = true;
      setAudioUnlocked(true);
    } catch {}
  };

  const handleStartOverlay = () => {
    unlockAudio();
    setShowStartOverlay(false);
  };

  const getBestVoice = () => {
    const voices = voicesRef.current.length
      ? voicesRef.current
      : typeof window !== "undefined" && window.speechSynthesis
      ? window.speechSynthesis.getVoices()
      : [];
    if (!voices.length) return null;

    const preferredNames = [
      "Microsoft Aria Online (Natural)", "Microsoft Aria Online", "Microsoft Aria",
      "Microsoft Jenny Online (Natural)", "Microsoft Jenny Online", "Microsoft Jenny",
      "Microsoft Michelle Online (Natural)", "Microsoft Ana Online (Natural)",
      "Microsoft Emma Online (Natural)", "Microsoft Ava Online (Natural)",
      "Samantha", "Ava", "Aria", "Jenny", "Emma", "Olivia", "Salli", "Karen", "Zira",
      "Google US English", "Google UK English Female",
    ];

    const english = voices.filter((v) => /^en(-|_)/i.test(v.lang));

    for (const name of preferredNames) {
      const found = english.find((v) => v.name.toLowerCase().includes(name.toLowerCase()));
      if (found) return found;
    }

    const female = english.find((v) => /female|woman|girl|aria|jenny|samantha|zira/i.test(v.name));
    if (female) return female;

    return english[0] || voices[0];
  };

  const speak = (text) => {
    if (!voiceEnabled) return;
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;

    try {
      const clean = text.replace(/\s+/g, " ").trim();
      if (!clean) return;

      window.speechSynthesis.cancel();

      setTimeout(() => {
        try {
          const u = new SpeechSynthesisUtterance(clean);
          const voice = getBestVoice();
          if (voice) {
            u.voice = voice;
            u.lang = voice.lang || "en-US";
          } else {
            u.lang = "en-US";
          }
          u.rate = 0.9;
          u.pitch = 1.35;
          u.volume = 1;

          if (window.speechSynthesis.paused) window.speechSynthesis.resume();
          window.speechSynthesis.speak(u);
        } catch {}
      }, 80);
    } catch {}
  };

  const playSound = (type) => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AC();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "click") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(520, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(760, ctx.currentTime + 0.12);
      }
      if (type === "success") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(620, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(980, ctx.currentTime + 0.22);
      }
      if (type === "launch") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(100, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(260, ctx.currentTime + 0.5);
      }

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);

      osc.start();
      osc.stop(ctx.currentTime + 0.45);
    } catch {}
  };

  const playLaugh = () => {
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AC();
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;

      [0, 0.15].forEach((offset, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        const baseFreq = i === 0 ? 620 : 700;
        osc.frequency.setValueAtTime(baseFreq, now + offset);
        osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + offset + 0.09);
        gain.gain.setValueAtTime(0.0001, now + offset);
        gain.gain.exponentialRampToValueAtTime(0.09, now + offset + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + offset + 0.13);
        osc.start(now + offset);
        osc.stop(now + offset + 0.15);
      });
    } catch {}
  };

  const startMission = () => {
    unlockAudio();
    playSound("success");
    setMiraEmotion("happy");
    speak("Hello there, Explorer! I am Mira, your space guide. I am so happy to meet you! Today we are going on a very special adventure together. Are you ready?");
    addTimer(() => playLaugh(), 5500);
    addTimer(() => {
      setScene("earth");
      addTimer(() => {
        speak("Look at this beautiful blue planet. This is Earth, our home. Every great space adventure begins right here. But today, we are going somewhere very special. We are going to the Moon!");
      }, 900);
    }, 6200);
  };

  const startLesson = () => {
    playSound("success");
    setScene("lesson");
    setMiraEmotion("surprised");
    addTimer(() => speak("Before we fly to the Moon, let me tell you what this NASA challenge is about. It is simple, I promise!"), 400);
    addTimer(() => setMiraEmotion("happy"), 3000);
  };

  const nextLesson = () => {
    playSound("click");
    if (lessonIndex < lessons.length - 1) {
      const next = lessonIndex + 1;
      setLessonIndex(next);
      speak(lessons[next].text);
    } else {
      setScene("launch");
      setMiraEmotion("surprised");
      speak("Now you know the mission! Let's fly to the Moon and look for a real piece of space history together.");
    }
  };

  const launchRocket = () => {
    playSound("launch");
    setScene("flying");
    speak("Three... two... one... Blast off! Hold on tight, Explorer!");
    addTimer(() => {
      setScene("moon");
      addTimer(() => speak("We made it! Welcome to the Moon. Look carefully, somewhere here is Surveyor Three, waiting for us."), 900);
    }, 5200);
  };

  const startExplore = () => {
    playSound("success");
    setScene("explore");
    setMiraEmotion("happy");
    speak("There it is! Surveyor Three. It is a lunar lander that helped scientists learn so many things about the Moon.");
  };

  const collectClue = (index) => {
    setClueIndex(index);
    if (foundClues.includes(index)) {
      speak(clues[index].text);
      return;
    }
    playSound("success");
    setMiraEmotion("surprised");
    setFoundClues((prev) => [...prev, index]);
    speak(clues[index].text);
    addTimer(() => setMiraEmotion("happy"), 2500);
  };

  const nextClue = () => {
    playSound("click");
    if (!foundClues.includes(clueIndex)) {
      speak("Tap the glowing clue first so we can discover it together.");
      return;
    }
    if (clueIndex < clues.length - 1) {
      const next = clueIndex + 1;
      setClueIndex(next);
      speak("Great job! Here is another clue. " + clues[next].text);
    } else {
      setScene("recap");
      setMiraEmotion("happy");
      speak("Amazing work! We discovered all four clues about Surveyor Three. Now let's see what you remember.");
    }
  };

  const startQuiz = () => {
    playSound("success");
    setScene("quiz");
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setMiraEmotion("happy");
    addTimer(() => speak("Here is your first question. " + questions[0].question), 600);
  };

  const chooseAnswer = (index) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    const current = questions[questionIndex];
    const correct = index === current.answer;
    let newScore = score;

    if (correct) {
      newScore = score + 1;
      setScore(newScore);
      playSound("success");
      setMiraEmotion("happy");
      speak("Correct! Fantastic job, Explorer!");
    } else {
      playSound("click");
      setMiraEmotion("sad");
      speak("Good try! That one was a little tricky.");
    }

    addTimer(() => {
      if (questionIndex < questions.length - 1) {
        const next = questionIndex + 1;
        setQuestionIndex(next);
        setSelectedAnswer(null);
        setMiraEmotion("happy");
        addTimer(() => speak(questions[next].question), 400);
      } else {
        setScene("result");
        addTimer(() => speak(`Your final score is ${newScore} out of ${questions.length}. You did wonderfully, Explorer!`), 800);
      }
    }, 1800);
  };

  const returnToEarth = () => {
    playSound("launch");
    setScene("return");
    speak("Our mission is complete! It is time to take our rocket and return home to beautiful Earth.");
    addTimer(() => {
      setScene("homecoming");
      addTimer(() => speak("Look, Earth is getting closer and closer. We are almost home!"), 800);
    }, 5200);
  };

  const finishMission = () => {
    playSound("success");
    setScene("final");
    setMiraEmotion("happy");
    addTimer(() => {
      speak("Welcome home, Explorer! Today you learned that even equipment left behind in space can tell an important story. You are now officially a Mission Remnants Space Explorer!");
      addTimer(() => playLaugh(), 7000);
    }, 700);
  };

  const restart = () => {
    window.speechSynthesis?.cancel();
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
    setScene("intro");
    setLessonIndex(0);
    setClueIndex(0);
    setFoundClues([]);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setMiraEmotion("happy");
  };

  const toggleVoice = () => {
    if (voiceEnabled) {
      window.speechSynthesis?.cancel();
      setVoiceEnabled(false);
    } else {
      setVoiceEnabled(true);
      unlockAudio();
    }
  };

  const getBadgeType = () => {
    const ratio = score / questions.length;
    if (ratio === 1) return { level: "gold", label: "Gold Explorer", color: "#ffc93c" };
    if (ratio >= 0.6) return { level: "silver", label: "Silver Explorer", color: "#c0c0c0" };
    if (ratio >= 0.4) return { level: "bronze", label: "Bronze Explorer", color: "#cd7f32" };
    return { level: "rookie", label: "Keep Trying", color: "#8edbff" };
  };

  const downloadBadge = () => {
    try {
      const badgeType = getBadgeType();
      const canvas = document.createElement("canvas");
      canvas.width = 900;
      canvas.height = 620;
      const ctx = canvas.getContext("2d");

      const grad = ctx.createLinearGradient(0, 0, 900, 620);
      grad.addColorStop(0, "#04102a");
      grad.addColorStop(1, "#1a0d3f");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 900, 620);

      ctx.fillStyle = "white";
      for (let i = 0; i < 140; i++) {
        ctx.globalAlpha = Math.random() * 0.9 + 0.1;
        ctx.beginPath();
        ctx.arc(Math.random() * 900, Math.random() * 620, Math.random() * 1.8 + 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      ctx.strokeStyle = badgeType.color;
      ctx.lineWidth = 6;
      ctx.strokeRect(24, 24, 852, 572);
      ctx.strokeStyle = "rgba(255,255,255,0.25)";
      ctx.lineWidth = 2;
      ctx.strokeRect(38, 38, 824, 544);

      ctx.textAlign = "center";
      ctx.fillStyle = "#8edbff";
      ctx.font = "bold 58px Arial, sans-serif";
      ctx.fillText("MISSION REMNANTS", 450, 120);
      ctx.fillStyle = "#ffd36e";
      ctx.font = "26px Arial, sans-serif";
      ctx.fillText("Certificate of Completion", 450, 165);

      const cx = 450, cy = 290, spikes = 5, outer = 70, inner = 32;
      ctx.beginPath();
      for (let i = 0; i < spikes * 2; i++) {
        const r = i % 2 === 0 ? outer : inner;
        const a = (Math.PI / spikes) * i - Math.PI / 2;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      const starGrad = ctx.createLinearGradient(cx, cy - outer, cx, cy + outer);
      starGrad.addColorStop(0, "#fff1a8");
      starGrad.addColorStop(1, badgeType.color);
      ctx.fillStyle = starGrad;
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 30px Arial, sans-serif";
      ctx.fillText(badgeType.label, 450, 400);
      ctx.fillStyle = "#8edbff";
      ctx.font = "24px Arial, sans-serif";
      ctx.fillText(`Score: ${score} / ${questions.length}`, 450, 445);
      ctx.fillStyle = "#9db8cb";
      ctx.font = "18px Arial, sans-serif";
      const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      ctx.fillText(`Awarded on ${date}`, 450, 490);
      ctx.fillStyle = "#6f89a0";
      ctx.font = "14px Arial, sans-serif";
      ctx.fillText("NASA Space Apps Challenge 2026", 450, 540);

      const link = document.createElement("a");
      link.download = `mission-remnants-${badgeType.level}-badge.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      playSound("success");
    } catch {}
  };

  if (loading) return <LoadingScreen />;

  const badge = getBadgeType();

  return (
    <main className={`space-story scene-${scene}`}>
      <Stars />

      {showStartOverlay && (
        <div className="start-overlay">
          <div className="start-overlay-content">
            <div className="start-overlay-mira">
              <Mira size="large" emotion="happy" />
            </div>
            <h1>Mission Remnants</h1>
            <p>Tap the button below to begin</p>
            <button className="start-tap-btn" type="button" onClick={handleStartOverlay}>
              Tap to Start
            </button>
            <small>Sound &amp; Mira's voice will play after tapping</small>
          </div>
        </div>
      )}

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">M</span>
          <span className="brand-text">MISSION REMNANTS</span>
        </div>
        <div className="mission-label">NASA SPACE ADVENTURE</div>
        <div className="topbar-right">
          <button className={`voice-toggle ${voiceEnabled ? "on" : "off"}`} onClick={toggleVoice} aria-label="Toggle voice">
            {voiceEnabled ? "🔊" : "🔇"}
          </button>
          <div className="progress">
            <span className={scene !== "intro" ? "active" : ""}><span className="progress-earth" /></span>
            <i />
            <span className={["moon","explore","recap","quiz","result","return","homecoming","final"].includes(scene) ? "active" : ""}>
              <span className="progress-moon" />
            </span>
            <i />
            <span className={["quiz","result","return","homecoming","final"].includes(scene) ? "active" : ""}>★</span>
          </div>
        </div>
      </header>

      {scene === "intro" && (
        <section className="intro-screen">
          <div className="intro-orbit">
            <div className="intro-earth-object"><Earth3D small /></div>
            <div className="intro-moon-object"><Moon3D /></div>
          </div>
          <div className="intro-content">
            <div className="small-badge">NASA SPACE APPS CHALLENGE 2026</div>
            <h1>Mission<span>Remnants</span></h1>
            <h2>Abandoned but Not Forgotten</h2>
            <p>A little space adventure where young explorers discover the stories left behind on the Moon.</p>
            <button className="main-button" onClick={startMission}>
              <span className="button-icon">→</span> Start Adventure
            </button>
            <div className="voice-note"><span className="voice-dot" />Mira will guide you</div>
          </div>
          <div className="intro-mira">
            <div className="speech">Hi! I'm Mira.<br />Ready, Explorer?</div>
            <Mira size="large" emotion="happy" />
          </div>
        </section>
      )}

      {scene === "earth" && (
        <section className="story-screen earth-screen">
          <div className="planet earth-big"><Earth3D /></div>
          <div className="story-card">
            <span className="chapter">CHAPTER 01</span>
            <h1>Hello, Earth!</h1>
            <p>This is our home. Every space adventure begins here.</p>
            <p className="mira-says">
              <strong>Mira says</strong><br />
              Today we're going to the Moon to discover a story that NASA doesn't want us to forget.
            </p>
            <button className="main-button" onClick={startLesson}>
              Learn the Mission<span className="button-arrow">→</span>
            </button>
          </div>
          <div className="floating-mira">
            <Mira size="small" emotion="happy" />
            <div className="speech">Come on!</div>
          </div>
        </section>
      )}

      {scene === "lesson" && (
        <section className="lesson-screen">
          <div className="lesson-top">
            <span className="chapter">MIRA'S SPACE CLASS</span>
            <h1>Let's understand the challenge.</h1>
            <p>No difficult words. Just explore and learn.</p>
          </div>
          <div className="lesson-layout">
            <div className="lesson-mira">
              <Mira size="medium" emotion={miraEmotion} />
              <div className="speech large">{lessons[lessonIndex].text}</div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">{lessonIndex + 1}<span>/ {lessons.length}</span></div>
              <div className="lesson-icon">{lessons[lessonIndex].symbol}</div>
              <h2>{lessons[lessonIndex].title}</h2>
              <p>{lessons[lessonIndex].text}</p>
              <div className="lesson-dots">
                {lessons.map((_, index) => (
                  <span key={index} className={index === lessonIndex ? "selected" : ""} />
                ))}
              </div>
              <button className="main-button" onClick={nextLesson}>
                {lessonIndex < lessons.length - 1 ? "Next Lesson" : "Let's Go!"}
                <span className="button-arrow">→</span>
              </button>
            </div>
          </div>
        </section>
      )}

      {scene === "launch" && (
        <section className="launch-screen">
          <div className="launch-earth"><Earth3D small /></div>
          <div className="launch-content">
            <div className="launch-mira"><Mira size="medium" emotion={miraEmotion} /></div>
            <div className="launch-text">
              <span className="chapter">CHAPTER 02</span>
              <h1>Ready for the Moon?</h1>
              <p>Mira has one question.</p>
              <div className="speech big">Should we go find Surveyor 3?</div>
              <button className="main-button" onClick={launchRocket}>3... 2... 1... BLAST OFF!</button>
            </div>
            <div className="rocket-launch"><Rocket3D /></div>
          </div>
        </section>
      )}

      {scene === "flying" && (
        <section className="flying-screen">
          <div className="travel-earth"><Earth3D small /></div>
          <div className="travel-line"><span /></div>
          <div className="travel-moon"><Moon3D large /></div>
          <div className="flying-rocket"><Rocket3D /></div>
          <div className="travel-message">
            <div className="speech big">We're flying to the Moon!</div>
            <p>Look outside, Explorer.</p>
          </div>
        </section>
      )}

      {scene === "moon" && (
        <section className="moon-screen">
          <div className="moon-large"><Moon3D large /></div>
          <div className="moon-content">
            <span className="chapter">CHAPTER 03</span>
            <h1>Welcome to the Moon!</h1>
            <div className="speech big">Shhh... Look over there. I think I see something.</div>
            <p>Can you spot the old lunar lander?</p>
            <button className="main-button" onClick={startExplore}>
              Explore the Moon<span className="button-arrow">→</span>
            </button>
          </div>
          <div className="moon-ground">
            <div className="ground-crater ground-one" /><div className="ground-crater ground-two" /><div className="ground-crater ground-three" />
            <div className="ground-rock rock-one" /><div className="ground-rock rock-two" />
          </div>
        </section>
      )}

      {scene === "explore" && (
        <section className="explore-screen">
          <div className="explore-header">
            <span className="chapter">MOON EXPLORATION</span>
            <h1>Meet Surveyor 3</h1>
            <p>Tap the glowing clues to discover its story.</p>
          </div>
          <div className="explore-world">
            <div className="moon-surface">
              <div className="surface-light" />
              <div className="large-crater"><span /></div>
              <div className="small-surface-crater crater-a" />
              <div className="small-surface-crater crater-b" />
              <div className="small-surface-crater crater-c" />
              <Surveyor3D />
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  className={`clue-point clue-${["one", "two", "three", "four"][i]} ${foundClues.includes(i) ? "found" : ""}`}
                  onClick={() => collectClue(i)}
                  aria-label={`Clue ${i + 1}`}
                >
                  {foundClues.includes(i) ? "✓" : i + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="explore-bottom">
            <div className="clue-counter">{foundClues.length} / {clues.length}<span> clues found</span></div>
            <div className="current-clue">
              <div className="clue-number-box">{clues[clueIndex].symbol}</div>
              <div>
                <strong>{clues[clueIndex].title}</strong>
                <small>{foundClues.includes(clueIndex) ? clues[clueIndex].text : "Tap the clue above to discover it."}</small>
              </div>
            </div>
            <button className="main-button" onClick={nextClue}>
              {clueIndex < clues.length - 1 ? "Next Clue" : "Finish Exploring"}
              <span className="button-arrow">→</span>
            </button>
          </div>
        </section>
      )}

      {scene === "recap" && (
        <section className="recap-screen">
          <div className="recap-mira">
            <Mira size="medium" emotion="happy" />
            <div className="speech large">You did it!<br />You found all the clues.</div>
          </div>
          <div className="recap-card">
            <span className="chapter">MISSION RECAP</span>
            <h1>What did we discover?</h1>
            <div className="recap-grid">
              {clues.map((clue, index) => (
                <div className="recap-item" key={index}>
                  <div className="recap-number">{clue.symbol}</div>
                  <div>
                    <strong>{clue.title}</strong>
                    <small>{clue.text}</small>
                  </div>
                </div>
              ))}
            </div>
            <button className="main-button" onClick={startQuiz}>
              Take Mira's Quiz<span className="button-arrow">→</span>
            </button>
          </div>
        </section>
      )}

      {scene === "quiz" && (
        <section className="quiz-screen">
          <div className="quiz-header">
            <span className="chapter">MIRA'S SPACE QUIZ</span>
            <div className="quiz-progress">Question {questionIndex + 1} of {questions.length}</div>
            <h1>Let's see what you learned.</h1>
          </div>
          <div className="quiz-layout">
            <div className="quiz-mira">
              <Mira size="medium" emotion={miraEmotion} />
              <div className="speech">Think carefully.</div>
            </div>
            <div className="quiz-card">
              <div className="question-number">{questionIndex + 1}</div>
              <h2>{questions[questionIndex].question}</h2>
              <div className="answers">
                {questions[questionIndex].options.map((option, index) => {
                  let cls = "answer";
                  if (selectedAnswer !== null) {
                    if (index === questions[questionIndex].answer) cls += " correct";
                    if (index === selectedAnswer && index !== questions[questionIndex].answer) cls += " wrong";
                  }
                  return (
                    <button key={index} className={cls} onClick={() => chooseAnswer(index)}>
                      <span>{String.fromCharCode(65 + index)}</span>
                      {option}
                    </button>
                  );
                })}
              </div>
              <div className="quiz-score">Score: {score}</div>
            </div>
          </div>
        </section>
      )}

      {scene === "result" && (
        <section className="result-screen">
          <div className="confetti"><span /><span /><span /><span /><span /><span /><span /></div>
          <div className="result-mira"><Mira size="large" emotion="happy" /></div>
          <div className="result-card">
            <span className="chapter">EXPLORER TEST COMPLETE</span>
            <h1>Amazing, Explorer!</h1>
            <div className="score-circle"><strong>{score}</strong><span>/ {questions.length}</span></div>
            <p>Mira has finished the test.</p>
            <div className="badge-preview">
              <BadgeIcon level={badge.level} />
              <span>
                MISSION REMNANTS
                <small>{badge.label.toUpperCase()}</small>
              </span>
            </div>
            <div className="result-buttons">
              <button className="main-button" onClick={returnToEarth}>
                Return to Earth<span className="button-arrow">→</span>
              </button>
              <button className="secondary-button" onClick={downloadBadge}>Download Certificate</button>
            </div>
          </div>
        </section>
      )}

      {scene === "return" && (
        <section className="return-screen">
          <div className="return-moon"><Moon3D /></div>
          <div className="return-rocket"><Rocket3D /></div>
          <div className="return-earth"><Earth3D /></div>
          <div className="return-message">
            <div className="speech big">Mission complete!</div>
            <p>Mira and the Explorer are heading back home.</p>
          </div>
        </section>
      )}

      {scene === "homecoming" && (
        <section className="homecoming-screen">
          <div className="home-earth"><Earth3D /></div>
          <div className="homecoming-mira">
            <Mira size="medium" emotion="happy" />
            <div className="speech large">We're almost home!</div>
          </div>
          <button className="main-button home-button" onClick={finishMission}>
            Land on Earth<span className="button-arrow">→</span>
          </button>
        </section>
      )}

      {scene === "final" && (
        <section className="final-screen">
          <div className="final-stars"><span /><span /><span /><span /><span /></div>
          <div className="final-earth"><Earth3D /></div>
          <div className="final-mira"><Mira size="large" emotion="happy" /></div>
          <div className="final-card">
            <span className="chapter">WELCOME HOME</span>
            <h1>You are a<span>Mission Remnants Explorer!</span></h1>
            <p>You explored the Moon, discovered Surveyor 3, learned its story, and completed Mira's quiz.</p>
            <div className="final-message">
              <strong>Mira says</strong><br />
              Remember, Explorer — even things left behind can tell amazing stories.
            </div>
            <div className="explorer-badge">
              <BadgeIcon level={badge.level} />
              <div>
                <strong>MISSION REMNANTS</strong>
                <span>{badge.label.toUpperCase()}</span>
              </div>
            </div>
            <div className="result-buttons">
              <button className="main-button" onClick={restart}>Explore Again</button>
              <button className="secondary-button" onClick={downloadBadge}>Download Certificate</button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}