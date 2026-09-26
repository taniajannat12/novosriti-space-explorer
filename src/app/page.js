"use client";

import { useEffect, useRef, useState } from "react";

const lessons = [
  {
    title: "What is this mission?",
    text: "NASA wants us to remember space equipment that was left behind on the Moon and Mars.",
    emoji: "🔭",
  },
  {
    title: "Why was it left there?",
    text: "Some equipment finished its mission, stopped working, or could not be brought back.",
    emoji: "🤖",
  },
  {
    title: "Why should we remember it?",
    text: "Old equipment can still teach scientists about space and our history of exploration.",
    emoji: "⭐",
  },
];

const clues = [
  {
    title: "Surveyor 3 landed",
    text: "Surveyor 3 landed on the Moon on April 20, 1967.",
    icon: "📅",
  },
  {
    title: "It saw the Moon",
    text: "Surveyor 3 sent 6,326 television pictures back to Earth.",
    icon: "📺",
  },
  {
    title: "It touched the soil",
    text: "Its surface sampler dug trenches and tested the lunar soil.",
    icon: "🌕",
  },
  {
    title: "Someone came back",
    text: "Apollo 12 astronauts visited Surveyor 3 in November 1969.",
    icon: "👨‍🚀",
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
    options: [
      "Music",
      "6,326 TV pictures",
      "People",
      "A rocket",
    ],
    answer: 1,
  },
  {
    question: "Which Apollo mission visited Surveyor 3?",
    options: ["Apollo 8", "Apollo 11", "Apollo 12", "Apollo 15"],
    answer: 2,
  },
];

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
    };
  }, []);

  const getFemaleVoice = () => {
    const voices = voicesRef.current;

    if (!voices.length) return null;

    const femaleKeywords = [
      "zira",
      "samantha",
      "karen",
      "susan",
      "aria",
      "jenny",
      "jane",
      "emma",
      "olivia",
      "salli",
      "ava",
      "allison",
      "victoria",
      "moira",
      "fiona",
      "female",
    ];

    const englishVoices = voices.filter((voice) =>
      /^en(-|_)/i.test(voice.lang)
    );

    for (const keyword of femaleKeywords) {
      const voice = englishVoices.find((item) =>
        item.name.toLowerCase().includes(keyword)
      );

      if (voice) return voice;
    }

    return englishVoices[0] || voices[0];
  };

  const speak = (text) => {
    if (typeof window === "undefined") return;

    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    const femaleVoice = getFemaleVoice();

    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }

    utterance.lang = "en-US";

    utterance.rate = 0.86;
    utterance.pitch = 1.3;
    utterance.volume = 1;

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
        oscillator.frequency.value = 600;
      }

      if (type === "success") {
        oscillator.frequency.value = 850;
      }

      if (type === "launch") {
        oscillator.frequency.value = 120;
      }

      gain.gain.setValueAtTime(0.0001, ctx.currentTime);

      gain.gain.exponentialRampToValueAtTime(
        0.16,
        ctx.currentTime + 0.03
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + 0.4
      );

      oscillator.start();

      oscillator.stop(ctx.currentTime + 0.4);
    } catch {}
  };

 

  const go = (nextScene, speech) => {
    playSound("click");

    setScene(nextScene);

    if (speech) {
      setTimeout(() => speak(speech), 400);
    }
  };



  const startMission = () => {
    playSound("success");

    speak(
      "Hello, Explorer! I am Mira. Today we are going on a very special NASA adventure."
    );

    setTimeout(() => {
      setScene("earth");

      setTimeout(() => {
        speak(
          "This is Earth, our beautiful home. But today we are going somewhere very special. We are going to the Moon!"
        );
      }, 500);
    }, 3500);
  };



  const startLesson = () => {
    playSound("success");

    setScene("lesson");

    setTimeout(() => {
      speak(
        "Before we fly to the Moon, let me tell you what NASA's challenge is about."
      );
    }, 400);
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
        "Now you know the mission! Let's fly to the Moon and look for a real piece of space history."
      );
    }
  };

 

  const launchRocket = () => {
    playSound("launch");

    setScene("flying");

    speak(
      "Three, two, one! Blast off! Hold on tight, Explorer!"
    );

    setTimeout(() => {
      setScene("moon");

      setTimeout(() => {
        speak(
          "We made it! Welcome to the Moon. Look carefully. Somewhere here is Surveyor 3."
        );
      }, 500);
    }, 5000);
  };


  const startExplore = () => {
    playSound("success");

    setScene("explore");

    speak(
      "There it is! Surveyor 3. It is a lunar lander that helped scientists learn about the Moon."
    );
  };

  

  const collectClue = () => {
    if (foundClues.includes(clueIndex)) return;

    playSound("success");

    setFoundClues((previous) => [
      ...previous,
      clueIndex,
    ]);

    speak(clues[clueIndex].text);
  };

  const nextClue = () => {
    playSound("click");

    if (!foundClues.includes(clueIndex)) {
      speak("Tap the clue first so we can discover it!");
      return;
    }

    if (clueIndex < clues.length - 1) {
      const next = clueIndex + 1;

      setClueIndex(next);

      speak(
        "Great! Here is another clue. " + clues[next].text
      );
    } else {
      setScene("recap");

      speak(
        "Amazing! We discovered all four clues about Surveyor 3. Now let's see what you remember."
      );
    }
  };

 

  const startQuiz = () => {
    playSound("success");

    setScene("quiz");

    setQuestionIndex(0);

    setScore(0);

    setSelectedAnswer(null);

    setTimeout(() => {
      speak(questions[0].question);
    }, 500);
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
        "Correct! Fantastic job, Explorer!"
      );
    } else {
      playSound("click");

      speak(
        "Good try! That one was a little tricky."
      );
    }

    setTimeout(() => {
      if (
        questionIndex <
        questions.length - 1
      ) {
        const next = questionIndex + 1;

        setQuestionIndex(next);

        setSelectedAnswer(null);

        setTimeout(() => {
          speak(
            questions[next].question
          );
        }, 300);
      } else {
        setScene("result");

        setTimeout(() => {
          speak(
            `Your final score is ${newScore} out of ${questions.length}. Great exploring, Explorer!`
          );
        }, 500);
      }
    }, 1500);
  };



  const returnToEarth = () => {
    playSound("launch");

    setScene("return");

    speak(
      "Our mission is complete! It is time to take our rocket and return home to Earth."
    );

    setTimeout(() => {
      setScene("homecoming");

      setTimeout(() => {
        speak(
          "Look! Earth is getting closer. We are going home!"
        );
      }, 500);
    }, 5000);
  };

  const finishMission = () => {
    playSound("success");

    setScene("final");

    setTimeout(() => {
      speak(
        "Welcome home, Explorer! Today you learned that even equipment left behind in space can tell an important story. You are now a NovoSriti Space Explorer!"
      );
    }, 500);
  };

  

  const restart = () => {
    window.speechSynthesis?.cancel();

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



      <div className="stars stars-one" />
      <div className="stars stars-two" />
      <div className="stars stars-three" />

  
      <header className="topbar">

        <div className="brand">
          <span className="brand-star">
            ✦
          </span>

          <span>NOVOSRITI</span>
        </div>

        <div className="mission-label">
          NASA SPACE ADVENTURE
        </div>

        <div className="progress">

          <span
            className={
              scene !== "intro"
                ? "active"
                : ""
            }
          >
            🌍
          </span>

          <i />

          <span
            className={
              [
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
                : ""
            }
          >
            🌙
          </span>

          <i />

          <span
            className={
              [
                "quiz",
                "result",
                "return",
                "homecoming",
                "final",
              ].includes(scene)
                ? "active"
                : ""
            }
          >
            ⭐
          </span>

        </div>

      </header>

      {scene === "intro" && (
        <section className="intro-screen">

          <div className="intro-orbit">
            <div className="intro-earth">
              🌍
            </div>

            <div className="orbit-moon">
              🌙
            </div>
          </div>

          <div className="intro-content">

            <div className="small-badge">
              NASA SPACE APPS CHALLENGE 2026
            </div>

            <h1>
              Novo<span>Sriti</span>
            </h1>

            <h2>
              Abandoned but Not Forgotten
            </h2>

            <p>
              A little space adventure where
              children discover the stories
              left behind on the Moon.
            </p>

            <button
              className="main-button"
              onClick={startMission}
            >
              🚀 Start Adventure
            </button>

            <div className="voice-note">
              🔊 Mira will guide you
            </div>

          </div>

          <div className="intro-mira">
            <div className="mira">
              <div className="mira-hair" />
              <div className="mira-head">
                <div className="eye left" />
                <div className="eye right" />
                <div className="smile" />
              </div>

              <div className="mira-helmet">
                <div className="helmet-glass" />
              </div>

              <div className="mira-body">
                <div className="mira-badge">
                  N
                </div>
              </div>

              <div className="mira-arm left-arm" />
              <div className="mira-arm right-arm" />

              <div className="mira-leg left-leg" />
              <div className="mira-leg right-leg" />
            </div>

            <div className="speech">
              Hi! I'm Mira! 👋
            </div>
          </div>

        </section>
      )}

     

      {scene === "earth" && (
        <section className="story-screen earth-screen">

          <div className="planet earth-big">
            🌍
          </div>

          <div className="story-card">

            <span className="chapter">
              CHAPTER 01
            </span>

            <h1>
              Hello, Earth! 🌍
            </h1>

            <p>
              This is our home.
              Every space adventure begins here.
            </p>

            <p className="mira-says">
              💬 Mira says:
              <br />
              “Today we're going to the Moon
              to discover a story that NASA
              doesn't want us to forget!”
            </p>

            <button
              className="main-button"
              onClick={startLesson}
            >
              📖 Learn the Mission
            </button>

          </div>

          <div className="floating-mira">
            <div className="mira small">
              <div className="mira-hair" />
              <div className="mira-head">
                <div className="eye left" />
                <div className="eye right" />
                <div className="smile" />
              </div>

              <div className="mira-helmet">
                <div className="helmet-glass" />
              </div>

              <div className="mira-body">
                <div className="mira-badge">
                  N
                </div>
              </div>

              <div className="mira-arm left-arm" />
              <div className="mira-arm right-arm" />
              <div className="mira-leg left-leg" />
              <div className="mira-leg right-leg" />
            </div>

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
              Let's understand the challenge! 💡
            </h1>

            <p>
              No difficult words. Just explore and learn.
            </p>

          </div>

          <div className="lesson-layout">

            <div className="lesson-mira">

              <div className="mira medium">
                <div className="mira-hair" />

                <div className="mira-head">
                  <div className="eye left" />
                  <div className="eye right" />
                  <div className="smile" />
                </div>

                <div className="mira-helmet">
                  <div className="helmet-glass" />
                </div>

                <div className="mira-body">
                  <div className="mira-badge">
                    N
                  </div>
                </div>

                <div className="mira-arm left-arm" />
                <div className="mira-arm right-arm" />

                <div className="mira-leg left-leg" />
                <div className="mira-leg right-leg" />

              </div>

              <div className="speech large">
                {lessons[lessonIndex].emoji}{" "}
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
                {lessons[lessonIndex].emoji}
              </div>

              <h2>
                {lessons[lessonIndex].title}
              </h2>

              <p>
                {lessons[lessonIndex].text}
              </p>

              <div className="lesson-dots">

                {lessons.map(
                  (_, index) => (
                    <span
                      key={index}
                      className={
                        index === lessonIndex
                          ? "selected"
                          : ""
                      }
                    />
                  )
                )}

              </div>

              <button
                className="main-button"
                onClick={nextLesson}
              >
                {lessonIndex <
                lessons.length - 1
                  ? "Next Lesson →"
                  : "🚀 Let's Go!"}
              </button>

            </div>

          </div>

        </section>
      )}

    

      {scene === "launch" && (
        <section className="launch-screen">

          <div className="launch-earth">
            🌍
          </div>

          <div className="launch-content">

            <div className="launch-mira">
              <div className="mira medium">
                <div className="mira-hair" />
                <div className="mira-head">
                  <div className="eye left" />
                  <div className="eye right" />
                  <div className="smile" />
                </div>

                <div className="mira-helmet">
                  <div className="helmet-glass" />
                </div>

                <div className="mira-body">
                  <div className="mira-badge">
                    N
                  </div>
                </div>

                <div className="mira-arm left-arm" />
                <div className="mira-arm right-arm" />
                <div className="mira-leg left-leg" />
                <div className="mira-leg right-leg" />
              </div>
            </div>

            <div className="launch-text">

              <span className="chapter">
                CHAPTER 02
              </span>

              <h1>
                Ready for the Moon? 🌙
              </h1>

              <p>
                Mira has one question:
              </p>

              <div className="speech big">
                “Should we go find
                Surveyor 3?”
              </div>

              <button
                className="main-button"
                onClick={launchRocket}
              >
                🚀 3... 2... 1... BLAST OFF!
              </button>

            </div>

            <div className="rocket-launch">

              <div className="rocket">
                <div className="rocket-window" />
                <div className="rocket-fin left" />
                <div className="rocket-fin right" />
                <div className="rocket-fire">
                  🔥
                </div>
              </div>

            </div>

          </div>

        </section>
      )}

    

      {scene === "flying" && (
        <section className="flying-screen">

          <div className="travel-earth">
            🌍
          </div>

          <div className="travel-line" />

          <div className="travel-moon">
            🌙
          </div>

          <div className="flying-rocket">
            🚀
          </div>

          <div className="travel-message">

            <div className="speech big">
              🚀 We're flying to the Moon!
            </div>

            <p>
              Look outside, Explorer! ✨
            </p>

          </div>

        </section>
      )}


      {scene === "moon" && (
        <section className="moon-screen">

          <div className="moon-large">
            🌙
          </div>

          <div className="moon-content">

            <span className="chapter">
              CHAPTER 03
            </span>

            <h1>
              Welcome to the Moon! 🌙
            </h1>

            <div className="speech big">
              “Shhh... Look over there!
              I think I see something.”
            </div>

            <p>
              Can you spot the old lunar lander?
            </p>

            <button
              className="main-button"
              onClick={startExplore}
            >
              🔎 Explore the Moon
            </button>

          </div>

          <div className="moon-ground">

            <div className="crater crater-one" />
            <div className="crater crater-two" />
            <div className="crater crater-three" />

          </div>

        </section>
      )}


      {scene === "explore" && (
        <section className="explore-screen">

          <div className="explore-header">

            <span className="chapter">
              MOON EXPLORATION
            </span>

            <h1>
              Meet Surveyor 3 🤖
            </h1>

            <p>
              Tap the glowing clues to discover its story.
            </p>

          </div>

          <div className="explore-world">

            <div className="moon-surface">

              <div className="large-crater" />

              <div className="surveyor">

                <div className="surveyor-body">
                  <div className="surveyor-camera">
                    📷
                  </div>
                </div>

                <div className="surveyor-panel">
                  ☀️
                </div>

                <div className="surveyor-leg one" />
                <div className="surveyor-leg two" />
                <div className="surveyor-leg three" />

              </div>

              <button
                className={`clue-point clue-one ${
                  foundClues.includes(0)
                    ? "found"
                    : ""
                }`}
                onClick={() => {
                  setClueIndex(0);
                  collectClue();
                }}
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
                onClick={() => {
                  setClueIndex(1);
                  collectClue();
                }}
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
                onClick={() => {
                  setClueIndex(2);
                  collectClue();
                }}
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
                onClick={() => {
                  setClueIndex(3);
                  collectClue();
                }}
              >
                {foundClues.includes(3)
                  ? "✓"
                  : "4"}
              </button>

            </div>

          </div>

          <div className="explore-bottom">

            <div className="clue-counter">
              ⭐ {foundClues.length} /{" "}
              {clues.length} clues found
            </div>

            <div className="current-clue">

              <span>
                {clues[clueIndex].icon}
              </span>

              <div>
                <strong>
                  {clues[clueIndex].title}
                </strong>

                <small>
                  {foundClues.includes(
                    clueIndex
                  )
                    ? clues[clueIndex].text
                    : "Tap the clue above to discover it!"}
                </small>
              </div>

            </div>

            <button
              className="main-button"
              onClick={nextClue}
            >
              {clueIndex <
              clues.length - 1
                ? "Next Clue →"
                : "⭐ Finish Exploring"}
            </button>

          </div>

        </section>
      )}

      {scene === "recap" && (
        <section className="recap-screen">

          <div className="recap-mira">

            <div className="mira medium">
              <div className="mira-hair" />

              <div className="mira-head">
                <div className="eye left" />
                <div className="eye right" />
                <div className="smile" />
              </div>

              <div className="mira-helmet">
                <div className="helmet-glass" />
              </div>

              <div className="mira-body">
                <div className="mira-badge">
                  N
                </div>
              </div>

              <div className="mira-arm left-arm" />
              <div className="mira-arm right-arm" />

              <div className="mira-leg left-leg" />
              <div className="mira-leg right-leg" />

            </div>

            <div className="speech large">
              You did it! ⭐
              <br />
              You found all the clues!
            </div>

          </div>

          <div className="recap-card">

            <span className="chapter">
              MISSION RECAP
            </span>

            <h1>
              What did we discover?
            </h1>

            <div className="recap-grid">

              {clues.map(
                (clue, index) => (
                  <div
                    className="recap-item"
                    key={index}
                  >
                    <span>
                      {clue.icon}
                    </span>

                    <div>
                      <strong>
                        {clue.title}
                      </strong>

                      <small>
                        {clue.text}
                      </small>
                    </div>
                  </div>
                )
              )}

            </div>

            <button
              className="main-button"
              onClick={startQuiz}
            >
              🧠 Take Mira's Quiz
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
              Question{" "}
              {questionIndex + 1} of{" "}
              {questions.length}
            </div>

            <h1>
              Let's see what you learned! 🧠
            </h1>

          </div>

          <div className="quiz-layout">

            <div className="quiz-mira">

              <div className="mira medium">
                <div className="mira-hair" />

                <div className="mira-head">
                  <div className="eye left" />
                  <div className="eye right" />
                  <div className="smile" />
                </div>

                <div className="mira-helmet">
                  <div className="helmet-glass" />
                </div>

                <div className="mira-body">
                  <div className="mira-badge">
                    N
                  </div>
                </div>

                <div className="mira-arm left-arm" />
                <div className="mira-arm right-arm" />

                <div className="mira-leg left-leg" />
                <div className="mira-leg right-leg" />

              </div>

              <div className="speech">
                Think carefully! 💭
              </div>

            </div>

            <div className="quiz-card">

              <div className="question-number">
                {questionIndex + 1}
              </div>

              <h2>
                {questions[
                  questionIndex
                ].question}
              </h2>

              <div className="answers">

                {questions[
                  questionIndex
                ].options.map(
                  (option, index) => {

                    let answerClass =
                      "answer";

                    if (
                      selectedAnswer !==
                      null
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
                        answerClass +=
                          " wrong";
                      }
                    }

                    return (
                      <button
                        key={index}
                        className={
                          answerClass
                        }
                        onClick={() =>
                          chooseAnswer(
                            index
                          )
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
                ⭐ Score: {score}
              </div>

            </div>

          </div>

        </section>
      )}


      {scene === "result" && (
        <section className="result-screen">

          <div className="confetti">
            ✨ ⭐ ✨ ⭐ ✨
          </div>

          <div className="result-mira">

            <div className="mira large">
              <div className="mira-hair" />

              <div className="mira-head">
                <div className="eye left" />
                <div className="eye right" />
                <div className="smile" />
              </div>

              <div className="mira-helmet">
                <div className="helmet-glass" />
              </div>

              <div className="mira-body">
                <div className="mira-badge">
                  N
                </div>
              </div>

              <div className="mira-arm left-arm" />
              <div className="mira-arm right-arm" />

              <div className="mira-leg left-leg" />
              <div className="mira-leg right-leg" />

            </div>

          </div>

          <div className="result-card">

            <span className="chapter">
              EXPLORER TEST COMPLETE
            </span>

            <h1>
              Amazing, Explorer! 🎉
            </h1>

            <div className="score-circle">

              <strong>
                {score}
              </strong>

              <span>
                / {questions.length}
              </span>

            </div>

            <p>
              Mira has finished the test!
            </p>

            <div className="badge-preview">
              🏅
              <span>
                NOVOSRITI
                <small>
                  SPACE EXPLORER
                </small>
              </span>
            </div>

            <button
              className="main-button"
              onClick={returnToEarth}
            >
              🚀 Return to Earth
            </button>

          </div>

        </section>
      )}


      {scene === "return" && (
        <section className="return-screen">

          <div className="return-moon">
            🌙
          </div>

          <div className="return-rocket">
            🚀
          </div>

          <div className="return-earth">
            🌍
          </div>

          <div className="return-message">

            <div className="speech big">
              🚀 Mission complete!
            </div>

            <p>
              Mira and the Explorer are
              heading back home.
            </p>

          </div>

        </section>
      )}


      {scene === "homecoming" && (
        <section className="homecoming-screen">

          <div className="home-earth">
            🌍
          </div>

          <div className="homecoming-mira">

            <div className="mira medium">
              <div className="mira-hair" />

              <div className="mira-head">
                <div className="eye left" />
                <div className="eye right" />
                <div className="smile" />
              </div>

              <div className="mira-helmet">
                <div className="helmet-glass" />
              </div>

              <div className="mira-body">
                <div className="mira-badge">
                  N
                </div>
              </div>

              <div className="mira-arm left-arm" />
              <div className="mira-arm right-arm" />

              <div className="mira-leg left-leg" />
              <div className="mira-leg right-leg" />
            </div>

            <div className="speech large">
              We're almost home! 🌍
            </div>

          </div>

          <button
            className="main-button home-button"
            onClick={finishMission}
          >
            🌍 Land on Earth
          </button>

        </section>
      )}


      {scene === "final" && (
        <section className="final-screen">

          <div className="final-stars">
            ✨ ⭐ ✨ ⭐ ✨
          </div>

          <div className="final-earth">
            🌍
          </div>

          <div className="final-mira">

            <div className="mira large">
              <div className="mira-hair" />

              <div className="mira-head">
                <div className="eye left" />
                <div className="eye right" />
                <div className="smile" />
              </div>

              <div className="mira-helmet">
                <div className="helmet-glass" />
              </div>

              <div className="mira-body">
                <div className="mira-badge">
                  N
                </div>
              </div>

              <div className="mira-arm left-arm" />
              <div className="mira-arm right-arm" />

              <div className="mira-leg left-leg" />
              <div className="mira-leg right-leg" />

            </div>

          </div>

          <div className="final-card">

            <span className="chapter">
              WELCOME HOME
            </span>

            <h1>
              You are a
              <span>
                NovoSriti Explorer!
              </span>
            </h1>

            <p>
              You explored the Moon,
              discovered Surveyor 3,
              learned its story,
              and completed Mira's quiz.
            </p>

            <div className="final-message">
              💬 Mira says:
              <br />
              “Remember, Explorer —
              even things left behind
              can tell amazing stories!”
            </div>

            <div className="explorer-badge">
              <div className="badge-star">
                ⭐
              </div>

              <div>
                <strong>
                  NOVOSRITI
                </strong>

                <span>
                  SPACE EXPLORER
                </span>
              </div>
            </div>

            <button
              className="main-button"
              onClick={restart}
            >
              🔄 Explore Again
            </button>

          </div>

        </section>
      )}

      {/* VOICE STATUS */}

      {!voiceReady && (
        <div className="voice-status">
          🔊 Mira voice loading...
        </div>
      )}

    </main>
  );
}