

"use client";

import { useEffect, useRef, useState } from "react";

const lessons = [
  {
    title: "What is this mission?",
    text: "NASA wants us to remember space equipment that was left behind on the Moon and Mars.",
    symbol: "01",
  },
  {
    title: "Why was it left there?",
    text: "Some equipment finished its mission, stopped working, or could not be brought back.",
    symbol: "02",
  },
  {
    title: "Why should we remember it?",
    text: "Old equipment can still teach scientists about space and our history of exploration.",
    symbol: "03",
  },
];

const clues = [
  {
    title: "Surveyor 3 landed",
    text: "Surveyor 3 landed on the Moon on April 20, 1967.",
    symbol: "01",
  },
  {
    title: "It saw the Moon",
    text: "Surveyor 3 sent 6,326 television pictures back to Earth.",
    symbol: "02",
  },
  {
    title: "It touched the soil",
    text: "Its surface sampler dug trenches and tested the lunar soil.",
    symbol: "03",
  },
  {
    title: "Someone came back",
    text: "Apollo 12 astronauts visited Surveyor 3 in November 1969.",
    symbol: "04",
  },
];

const questions = [
  {
    question: "What is NASA's challenge about?",
    options: [
      "Building a new rocket",
      "Remembering discarded space equipment",
      "Finding a new planet",
      "Building a Moon hotel",
    ],
    answer: 1,
  },
  {
    question: "Where did Surveyor 3 land?",
    options: ["Mars", "Earth", "The Moon", "The Sun"],
    answer: 2,
  },
  {
    question: "When did Surveyor 3 land?",
    options: ["1967", "1975", "1980", "1990"],
    answer: 0,
  },
  {
    question: "What did Surveyor 3 send back?",
    options: ["Music", "6,326 TV pictures", "People", "A rocket"],
    answer: 1,
  },
  {
    question: "Which Apollo mission visited Surveyor 3?",
    options: ["Apollo 8", "Apollo 11", "Apollo 12", "Apollo 15"],
    answer: 2,
  },
];

function Mira({ size = "medium" }) {
  return (
    <div className={`mira mira-${size}`}>
      <div className="mira-shadow" />

      <div className="mira-backpack">
        <span />
        <span />
        <div className="backpack-light" />
      </div>

      <div className="mira-hair">
        <span className="hair-side-left" />
        <span className="hair-side-right" />
        <span className="hair-bang" />
      </div>

      <div className="mira-head">
        <div className="mira-ear left" />
        <div className="mira-ear right" />

        <div className="mira-eyebrow left" />
        <div className="mira-eyebrow right" />

        <div className="mira-eye left">
          <span className="eye-shine-big" />
          <span className="eye-shine-small" />
        </div>

        <div className="mira-eye right">
          <span className="eye-shine-big" />
          <span className="eye-shine-small" />
        </div>

        <div className="mira-eyelash left">
          <i />
          <i />
          <i />
        </div>

        <div className="mira-eyelash right">
          <i />
          <i />
          <i />
        </div>

        <div className="mira-nose" />

        <div className="mira-mouth">
          <span />
        </div>

        <div className="mira-blush left" />
        <div className="mira-blush right" />
      </div>

      <div className="mira-helmet">
        <div className="helmet-reflection" />
        <div className="helmet-ring" />
        <div className="helmet-glow" />
      </div>

      <div className="mira-neck" />

      <div className="mira-body">
        <div className="mira-shoulder-glow" />

        <div className="mira-chest-panel">
          <div className="panel-dot" />
          <div className="panel-line" />
          <div className="panel-line short" />
        </div>

        <div className="mira-logo">L</div>
      </div>

      <div className="mira-arm mira-arm-left">
        <div className="mira-glove">
          <span />
        </div>
      </div>

      <div className="mira-arm mira-arm-right">
        <div className="mira-glove">
          <span />
        </div>
      </div>

      <div className="mira-leg mira-leg-left">
        <div className="mira-boot">
          <span />
        </div>
      </div>

      <div className="mira-leg mira-leg-right">
        <div className="mira-boot">
          <span />
        </div>
      </div>
    </div>
  );
}

function Earth3D({ small = false }) {
  return (
    <div className={`earth-3d ${small ? "earth-small" : ""}`}>
      <div className="earth-atmosphere" />

      <div className="earth-sphere">
        <div className="earth-land land-one" />
        <div className="earth-land land-two" />
        <div className="earth-land land-three" />
        <div className="earth-land land-four" />

        <div className="earth-cloud cloud-one" />
        <div className="earth-cloud cloud-two" />
        <div className="earth-cloud cloud-three" />

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
        <span className="moon-crater mc-one" />
        <span className="moon-crater mc-two" />
        <span className="moon-crater mc-three" />
        <span className="moon-crater mc-four" />
        <span className="moon-crater mc-five" />
        <span className="moon-crater mc-six" />
        <span className="moon-highlight" />
      </div>
    </div>
  );
}

function Rocket3D() {
  return (
    <div className="rocket-3d">
      <div className="rocket-glow" />

      <div className="rocket-body">
        <div className="rocket-side-depth" />
        <div className="rocket-nose">
          <div className="nose-highlight" />
        </div>

        <div className="rocket-window">
          <span />
          <b />
        </div>

        <div className="rocket-band" />
        <div className="rocket-band-light" />

        <div className="rocket-fin rocket-fin-left">
          <span />
        </div>

        <div className="rocket-fin rocket-fin-right">
          <span />
        </div>

        <div className="rocket-panel-line" />
      </div>

      <div className="rocket-engine">
        <div className="engine-ring" />

        <div className="rocket-flame flame-one">
          <span />
        </div>

        <div className="rocket-flame flame-two">
          <span />
        </div>

        <div className="rocket-flame flame-three">
          <span />
        </div>
      </div>
    </div>
  );
}

function Surveyor3D() {
  return (
    <div className="surveyor-3d">
      <div className="surveyor-glow" />

      <div className="surveyor-main">
        <div className="surveyor-front-depth" />

        <div className="surveyor-top">
          <div className="surveyor-top-ring" />

          <div className="surveyor-camera">
            <span />
            <b />
          </div>
        </div>

        <div className="surveyor-front-panel">
          <span />
          <span />
          <span />
          <i />
        </div>

        <div className="surveyor-side-panel">
          <div className="solar-cell" />
          <div className="solar-shine" />
        </div>

        <div className="surveyor-bottom-detail" />
      </div>

      <div className="surveyor-antenna">
        <span />
        <b />
      </div>

      <div className="surveyor-leg sl-one">
        <span />
      </div>

      <div className="surveyor-leg sl-two">
        <span />
      </div>

      <div className="surveyor-leg sl-three">
        <span />
      </div>

      <div className="surveyor-shadow" />
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

export default function Home() {
  const [scene, setScene] = useState("intro");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [clueIndex, setClueIndex] = useState(0);
  const [foundClues, setFoundClues] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [voiceReady, setVoiceReady] = useState(false);

  const voicesRef = useRef([]);
  const timersRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const voices = window.speechSynthesis.getVoices();

      voicesRef.current = voices;

      setVoiceReady(voices.length > 0);
    };

    loadVoices();

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      loadVoices
    );

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        loadVoices
      );

      window.speechSynthesis.cancel();

      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  const addTimer = (callback, delay) => {
    const timer = setTimeout(callback, delay);

    timersRef.current.push(timer);

    return timer;
  };

  const getBestVoice = () => {
    const voices = voicesRef.current;

    if (!voices.length) return null;

    const preferredNames = [
      "Microsoft Aria Online",
      "Microsoft Aria",
      "Microsoft Jenny Online",
      "Microsoft Jenny",
      "Samantha",
      "Ava",
      "Aria",
      "Jenny",
      "Emma",
      "Olivia",
      "Salli",
      "Karen",
      "Zira",
      "Google US English",
      "Google UK English Female",
    ];

    const englishVoices = voices.filter((voice) =>
      /^en(-|_)/i.test(voice.lang)
    );

    for (const name of preferredNames) {
      const found = englishVoices.find((voice) =>
        voice.name.toLowerCase().includes(name.toLowerCase())
      );

      if (found) return found;
    }

    const femaleVoice = englishVoices.find((voice) =>
      /female|woman|girl/i.test(voice.name)
    );

    if (femaleVoice) return femaleVoice;

    return (
      englishVoices.find((voice) =>
        /US|United States|American/i.test(
          voice.name + " " + voice.lang
        )
      ) ||
      englishVoices[0] ||
      voices[0]
    );
  };

  const speak = (text) => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const cleanText = text
      .replace(/\s+/g, " ")
      .replace(/\.\s+/g, ". ")
      .replace(/,\s+/g, ", ")
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voice = getBestVoice();

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || "en-US";
    } else {
      utterance.lang = "en-US";
    }

    utterance.rate = 0.76;
    utterance.pitch = 1.08;
    utterance.volume = 1;

    utterance.onstart = () => {
      setVoiceReady(true);
    };

    utterance.onerror = () => {
      setVoiceReady(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const playSound = (type) => {
    try {
      const AudioContext =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContext) return;

      const ctx = new AudioContext();

      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      if (type === "click") {
        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
          520,
          ctx.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
          760,
          ctx.currentTime + 0.12
        );
      }

      if (type === "success") {
        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
          620,
          ctx.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
          980,
          ctx.currentTime + 0.22
        );
      }

      if (type === "launch") {
        oscillator.type = "sawtooth";

        oscillator.frequency.setValueAtTime(
          100,
          ctx.currentTime
        );

        oscillator.frequency.exponentialRampToValueAtTime(
          260,
          ctx.currentTime + 0.5
        );
      }

      gain.gain.setValueAtTime(
        0.0001,
        ctx.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.12,
        ctx.currentTime + 0.03
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + 0.45
      );

      oscillator.start();

      oscillator.stop(ctx.currentTime + 0.45);

      addTimer(() => {
        ctx.close();
      }, 600);
    } catch {}
  };

  const startMission = () => {
    playSound("success");

    speak(
      "Hello, Explorer. I am Mira. Today we are going on a very special space adventure."
    );

    addTimer(() => {
      setScene("earth");

      addTimer(() => {
        speak(
          "This is Earth, our beautiful home. But today, we are going somewhere very special. We are going to the Moon."
        );
      }, 700);
    }, 3000);
  };

  const startLesson = () => {
    playSound("success");

    setScene("lesson");

    addTimer(() => {
      speak(
        "Before we fly to the Moon, let me tell you what this NASA challenge is about."
      );
    }, 500);
  };

  const nextLesson = () => {
    playSound("click");

    if (lessonIndex < lessons.length - 1) {
      const next = lessonIndex + 1;

      setLessonIndex(next);

      speak(lessons[next].text);
    } else {
      setScene("launch");

      speak(
        "Now you know the mission. Let's fly to the Moon and look for a real piece of space history."
      );
    }
  };

  const launchRocket = () => {
    playSound("launch");

    setScene("flying");

    speak(
      "Three. Two. One. Blast off. Hold on tight, Explorer."
    );

    addTimer(() => {
      setScene("moon");

      addTimer(() => {
        speak(
          "We made it. Welcome to the Moon. Look carefully. Somewhere here is Surveyor Three."
        );
      }, 800);
    }, 5000);
  };

  const startExplore = () => {
    playSound("success");

    setScene("explore");

    speak(
      "There it is. Surveyor Three. It is a lunar lander that helped scientists learn about the Moon."
    );
  };

  const collectClue = (index) => {
    setClueIndex(index);

    if (foundClues.includes(index)) {
      speak(clues[index].text);
      return;
    }

    playSound("success");

    setFoundClues((previous) => [...previous, index]);

    speak(clues[index].text);
  };

  const nextClue = () => {
    playSound("click");

    if (!foundClues.includes(clueIndex)) {
      speak(
        "Tap the glowing clue first so we can discover it."
      );

      return;
    }

    if (clueIndex < clues.length - 1) {
      const next = clueIndex + 1;

      setClueIndex(next);

      speak(
        "Great. Here is another clue. " +
          clues[next].text
      );
    } else {
      setScene("recap");

      speak(
        "Amazing. We discovered all four clues about Surveyor Three. Now let's see what you remember."
      );
    }
  };

  const startQuiz = () => {
    playSound("success");

    setScene("quiz");
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);

    addTimer(() => {
      speak(questions[0].question);
    }, 600);
  };

  const chooseAnswer = (index) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(index);

    const currentQuestion =
      questions[questionIndex];

    const correct =
      index === currentQuestion.answer;

    let newScore = score;

    if (correct) {
      newScore = score + 1;

      setScore(newScore);

      playSound("success");

      speak(
        "Correct. Fantastic job, Explorer."
      );
    } else {
      playSound("click");

      speak(
        "Good try. That one was a little tricky."
      );
    }

    addTimer(() => {
      if (
        questionIndex <
        questions.length - 1
      ) {
        const next = questionIndex + 1;

        setQuestionIndex(next);
        setSelectedAnswer(null);

        addTimer(() => {
          speak(
            questions[next].question
          );
        }, 350);
      } else {
        setScene("result");

        addTimer(() => {
          speak(
            `Your final score is ${newScore} out of ${questions.length}. Great exploring, Explorer.`
          );
        }, 700);
      }
    }, 1600);
  };

  const returnToEarth = () => {
    playSound("launch");

    setScene("return");

    speak(
      "Our mission is complete. It is time to take our rocket and return home to Earth."
    );

    addTimer(() => {
      setScene("homecoming");

      addTimer(() => {
        speak(
          "Look. Earth is getting closer. We are going home."
        );
      }, 700);
    }, 5000);
  };

  const finishMission = () => {
    playSound("success");

    setScene("final");

    addTimer(() => {
      speak(
        "Welcome home, Explorer. Today you learned that even equipment left behind in space can tell an important story. You are now a Lunara Space Explorer."
      );
    }, 700);
  };

  const restart = () => {
    window.speechSynthesis?.cancel();

    timersRef.current.forEach((timer) =>
      clearTimeout(timer)
    );

    timersRef.current = [];

    setScene("intro");
    setLessonIndex(0);
    setClueIndex(0);
    setFoundClues([]);
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  return (
    <main className={`space-story scene-${scene}`}>
      <Stars />

      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">L</span>
          <span>LUNARA</span>
        </div>

        <div className="mission-label">
          NASA SPACE ADVENTURE
        </div>

        <div className="progress">
          <span
            className={
              scene !== "intro" ? "active" : ""
            }
          >
            <span className="progress-earth" />
          </span>

          <i />

          <span
            className={[
              "moon",
              "explore",
              "recap",
              "quiz",
              "result",
              "return",
              "homecoming",
              "final",
            ].includes(scene)
              ? "active"
              : ""}
          >
            <span className="progress-moon" />
          </span>

          <i />

          <span
            className={[
              "quiz",
              "result",
              "return",
              "homecoming",
              "final",
            ].includes(scene)
              ? "active"
              : ""}
          >
            ★
          </span>
        </div>
      </header>

      {scene === "intro" && (
        <section className="intro-screen">
          <div className="intro-orbit">
            <div className="intro-earth-object">
              <Earth3D small />
            </div>

            <div className="intro-moon-object">
              <Moon3D />
            </div>
          </div>

          <div className="intro-content">
            <div className="small-badge">
              NASA SPACE APPS CHALLENGE 2026
            </div>

            <h1>
              Luna<span>ra</span>
            </h1>

            <h2>Abandoned but Not Forgotten</h2>

            <p>
              A little space adventure where
              young explorers discover the
              stories left behind on the Moon.
            </p>

            <button
              className="main-button"
              onClick={startMission}
            >
              <span className="button-icon">→</span>
              Start Adventure
            </button>

            <div className="voice-note">
              <span className="voice-dot" />
              Mira will guide you
            </div>
          </div>

          <div className="intro-mira">
            <div className="speech">
              Hi! I'm Mira.
              <br />
              Ready, Explorer?
            </div>

            <Mira size="large" />
          </div>
        </section>
      )}

      {scene === "earth" && (
        <section className="story-screen earth-screen">
          <div className="planet earth-big">
            <Earth3D />
          </div>

          <div className="story-card">
            <span className="chapter">
              CHAPTER 01
            </span>

            <h1>Hello, Earth!</h1>

            <p>
              This is our home. Every space
              adventure begins here.
            </p>

            <p className="mira-says">
              <strong>Mira says</strong>
              <br />
              Today we're going to the Moon
              to discover a story that NASA
              doesn't want us to forget.
            </p>

            <button
              className="main-button"
              onClick={startLesson}
            >
              Learn the Mission
              <span className="button-arrow">
                →
              </span>
            </button>
          </div>

          <div className="floating-mira">
            <Mira size="small" />

            <div className="speech">
              Come on!
            </div>
          </div>
        </section>
      )}

      {scene === "lesson" && (
        <section className="lesson-screen">
          <div className="lesson-top">
            <span className="chapter">
              MIRA'S SPACE CLASS
            </span>

            <h1>
              Let's understand the challenge.
            </h1>

            <p>
              No difficult words. Just explore
              and learn.
            </p>
          </div>

          <div className="lesson-layout">
            <div className="lesson-mira">
              <Mira size="medium" />

              <div className="speech large">
                {lessons[lessonIndex].text}
              </div>
            </div>

            <div className="lesson-card">
              <div className="lesson-number">
                {lessonIndex + 1}
                <span>
                  / {lessons.length}
                </span>
              </div>

              <div className="lesson-icon">
                {lessons[lessonIndex].symbol}
              </div>

              <h2>
                {lessons[lessonIndex].title}
              </h2>

              <p>
                {lessons[lessonIndex].text}
              </p>

              <div className="lesson-dots">
                {lessons.map((_, index) => (
                  <span
                    key={index}
                    className={
                      index === lessonIndex
                        ? "selected"
                        : ""
                    }
                  />
                ))}
              </div>

              <button
                className="main-button"
                onClick={nextLesson}
              >
                {lessonIndex <
                lessons.length - 1
                  ? "Next Lesson"
                  : "Let's Go!"}

                <span className="button-arrow">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>
      )}

      {scene === "launch" && (
        <section className="launch-screen">
          <div className="launch-earth">
            <Earth3D small />
          </div>

          <div className="launch-content">
            <div className="launch-mira">
              <Mira size="medium" />
            </div>

            <div className="launch-text">
              <span className="chapter">
                CHAPTER 02
              </span>

              <h1>Ready for the Moon?</h1>

              <p>Mira has one question.</p>

              <div className="speech big">
                Should we go find
                Surveyor 3?
              </div>

              <button
                className="main-button"
                onClick={launchRocket}
              >
                3... 2... 1... BLAST OFF!
              </button>
            </div>

            <div className="rocket-launch">
              <Rocket3D />
            </div>
          </div>
        </section>
      )}

      {scene === "flying" && (
        <section className="flying-screen">
          <div className="travel-earth">
            <Earth3D small />
          </div>

          <div className="travel-line">
            <span />
          </div>

          <div className="travel-moon">
            <Moon3D large />
          </div>

          <div className="flying-rocket">
            <Rocket3D />
          </div>

          <div className="travel-message">
            <div className="speech big">
              We're flying to the Moon!
            </div>

            <p>
              Look outside, Explorer.
            </p>
          </div>
        </section>
      )}

      {scene === "moon" && (
        <section className="moon-screen">
          <div className="moon-large">
            <Moon3D large />
          </div>

          <div className="moon-content">
            <span className="chapter">
              CHAPTER 03
            </span>

            <h1>Welcome to the Moon!</h1>

            <div className="speech big">
              Shhh... Look over there.
              I think I see something.
            </div>

            <p>
              Can you spot the old lunar lander?
            </p>

            <button
              className="main-button"
              onClick={startExplore}
            >
              Explore the Moon
              <span className="button-arrow">
                →
              </span>
            </button>
          </div>

          <div className="moon-ground">
            <div className="ground-crater ground-one" />
            <div className="ground-crater ground-two" />
            <div className="ground-crater ground-three" />
            <div className="ground-rock rock-one" />
            <div className="ground-rock rock-two" />
          </div>
        </section>
      )}

      {scene === "explore" && (
        <section className="explore-screen">
          <div className="explore-header">
            <span className="chapter">
              MOON EXPLORATION
            </span>

            <h1>Meet Surveyor 3</h1>

            <p>
              Tap the glowing clues to discover
              its story.
            </p>
          </div>

          <div className="explore-world">
            <div className="moon-surface">
              <div className="surface-light" />

              <div className="large-crater">
                <span />
              </div>

              <div className="small-surface-crater crater-a" />
              <div className="small-surface-crater crater-b" />
              <div className="small-surface-crater crater-c" />

              <Surveyor3D />

              <button
                className={`clue-point clue-one ${
                  foundClues.includes(0)
                    ? "found"
                    : ""
                }`}
                onClick={() => collectClue(0)}
              >
                {foundClues.includes(0)
                  ? "✓"
                  : "1"}
              </button>

              <button
                className={`clue-point clue-two ${
                  foundClues.includes(1)
                    ? "found"
                    : ""
                }`}
                onClick={() => collectClue(1)}
              >
                {foundClues.includes(1)
                  ? "✓"
                  : "2"}
              </button>

              <button
                className={`clue-point clue-three ${
                  foundClues.includes(2)
                    ? "found"
                    : ""
                }`}
                onClick={() => collectClue(2)}
              >
                {foundClues.includes(2)
                  ? "✓"
                  : "3"}
              </button>

              <button
                className={`clue-point clue-four ${
                  foundClues.includes(3)
                    ? "found"
                    : ""
                }`}
                onClick={() => collectClue(3)}
              >
                {foundClues.includes(3)
                  ? "✓"
                  : "4"}
              </button>
            </div>
          </div>

          <div className="explore-bottom">
            <div className="clue-counter">
              {foundClues.length} / {clues.length}
              <span> clues found</span>
            </div>

            <div className="current-clue">
              <div className="clue-number-box">
                {clues[clueIndex].symbol}
              </div>

              <div>
                <strong>
                  {clues[clueIndex].title}
                </strong>

                <small>
                  {foundClues.includes(clueIndex)
                    ? clues[clueIndex].text
                    : "Tap the clue above to discover it."}
                </small>
              </div>
            </div>

            <button
              className="main-button"
              onClick={nextClue}
            >
              {clueIndex <
              clues.length - 1
                ? "Next Clue"
                : "Finish Exploring"}

              <span className="button-arrow">
                →
              </span>
            </button>
          </div>
        </section>
      )}

      {scene === "recap" && (
        <section className="recap-screen">
          <div className="recap-mira">
            <Mira size="medium" />

            <div className="speech large">
              You did it!
              <br />
              You found all the clues.
            </div>
          </div>

          <div className="recap-card">
            <span className="chapter">
              MISSION RECAP
            </span>

            <h1>What did we discover?</h1>

            <div className="recap-grid">
              {clues.map((clue, index) => (
                <div
                  className="recap-item"
                  key={index}
                >
                  <div className="recap-number">
                    {clue.symbol}
                  </div>

                  <div>
                    <strong>
                      {clue.title}
                    </strong>

                    <small>
                      {clue.text}
                    </small>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="main-button"
              onClick={startQuiz}
            >
              Take Mira's Quiz
              <span className="button-arrow">
                →
              </span>
            </button>
          </div>
        </section>
      )}

      {scene === "quiz" && (
        <section className="quiz-screen">
          <div className="quiz-header">
            <span className="chapter">
              MIRA'S SPACE QUIZ
            </span>

            <div className="quiz-progress">
              Question {questionIndex + 1} of{" "}
              {questions.length}
            </div>

            <h1>
              Let's see what you learned.
            </h1>
          </div>

          <div className="quiz-layout">
            <div className="quiz-mira">
              <Mira size="medium" />

              <div className="speech">
                Think carefully.
              </div>
            </div>

            <div className="quiz-card">
              <div className="question-number">
                {questionIndex + 1}
              </div>

              <h2>
                {questions[questionIndex].question}
              </h2>

              <div className="answers">
                {questions[
                  questionIndex
                ].options.map(
                  (option, index) => {
                    let answerClass = "answer";

                    if (
                      selectedAnswer !== null
                    ) {
                      if (
                        index ===
                        questions[
                          questionIndex
                        ].answer
                      ) {
                        answerClass +=
                          " correct";
                      }

                      if (
                        index ===
                          selectedAnswer &&
                        index !==
                          questions[
                            questionIndex
                          ].answer
                      ) {
                        answerClass += " wrong";
                      }
                    }

                    return (
                      <button
                        key={index}
                        className={answerClass}
                        onClick={() =>
                          chooseAnswer(index)
                        }
                      >
                        <span>
                          {String.fromCharCode(
                            65 + index
                          )}
                        </span>

                        {option}
                      </button>
                    );
                  }
                )}
              </div>

              <div className="quiz-score">
                Score: {score}
              </div>
            </div>
          </div>
        </section>
      )}

      {scene === "result" && (
        <section className="result-screen">
          <div className="confetti">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="result-mira">
            <Mira size="large" />
          </div>

          <div className="result-card">
            <span className="chapter">
              EXPLORER TEST COMPLETE
            </span>

            <h1>Amazing, Explorer!</h1>

            <div className="score-circle">
              <strong>{score}</strong>
              <span>
                / {questions.length}
              </span>
            </div>

            <p>
              Mira has finished the test.
            </p>

            <div className="badge-preview">
              <div className="badge-star">
              
              </div>

              <span>
                LUNARA
                <small>
                  SPACE EXPLORER
                </small>
              </span>
            </div>

            <button
              className="main-button"
              onClick={returnToEarth}
            >
              Return to Earth
              <span className="button-arrow">
                →
              </span>
            </button>
          </div>
        </section>
      )}

      {scene === "return" && (
        <section className="return-screen">
          <div className="return-moon">
            <Moon3D />
          </div>

          <div className="return-rocket">
            <Rocket3D />
          </div>

          <div className="return-earth">
            <Earth3D />
          </div>

          <div className="return-message">
            <div className="speech big">
              Mission complete!
            </div>

            <p>
              Mira and the Explorer are heading
              back home.
            </p>
          </div>
        </section>
      )}

      {scene === "homecoming" && (
        <section className="homecoming-screen">
          <div className="home-earth">
            <Earth3D />
          </div>

          <div className="homecoming-mira">
            <Mira size="medium" />

            <div className="speech large">
              We're almost home!
            </div>
          </div>

          <button
            className="main-button home-button"
            onClick={finishMission}
          >
            Land on Earth
            <span className="button-arrow">
              →
            </span>
          </button>
        </section>
      )}

      {scene === "final" && (
        <section className="final-screen">
          <div className="final-stars">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="final-earth">
            <Earth3D />
          </div>

          <div className="final-mira">
            <Mira size="large" />
          </div>

          <div className="final-card">
            <span className="chapter">
              WELCOME HOME
            </span>

            <h1>
              You are a
              <span>
                Lunara Explorer!
              </span>
            </h1>

            <p>
              You explored the Moon,
              discovered Surveyor 3,
              learned its story, and completed
              Mira's quiz.
            </p>

            <div className="final-message">
              <strong>Mira says</strong>
              <br />
              Remember, Explorer — even things
              left behind can tell amazing
              stories.
            </div>

            <div className="explorer-badge">
              <div className="badge-star">
                
              </div>

              <div>
                <strong>LUNARA</strong>

                <span>
                  SPACE EXPLORER
                </span>
              </div>
            </div>

            <button
              className="main-button"
              onClick={restart}
            >
              Explore Again
            </button>
          </div>
        </section>
      )}

      {!voiceReady && (
        <div className="voice-status">
          Mira voice preparing...
        </div>
      )}
    </main>
  );
}