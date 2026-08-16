"use client";

import { useRef, useState } from "react";

const audioNotes = [
  {
    title: "when you're sed (haw)",
    file: "sed.mp4",
  },
  {
    title: "when you're happi",
    file: "happi.mp4",
  },
  {
    title: "when you mish me",
    file: "mish.mp4",
  },
  {
    title: "when you need motivation",
    file: "moti.mp4",
  },
  {
    title: "when you're eepy (awwwlee)",
    file: "eep.mp4",
  },
];

const waveform = [
  8, 15, 11, 24, 18, 32, 14, 27, 38, 20,
  30, 17, 26, 42, 21, 34, 16, 29, 37, 19,
  31, 13, 25, 35, 18, 28, 12, 22, 17, 30,
  14, 24, 10, 19, 27, 15, 22, 11, 18, 8,
];

export default function Home() {
  const [opening, setOpening] = useState(false);
  const [opened, setOpened] = useState(false);

  const [showVoiceNotes, setShowVoiceNotes] = useState(false);
  const [voiceOpening, setVoiceOpening] = useState(false);

  const [goingBack, setGoingBack] = useState(false);

  const [playing, setPlaying] = useState<number | null>(null);

  const [progress, setProgress] = useState<number[]>(
    audioNotes.map(() => 0)
  );

  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);

  const openLetter = () => {
    setOpening(true);

    setTimeout(() => {
      setOpened(true);
      window.scrollTo(0, 0);
    }, 850);
  };

  const openVoiceNotes = () => {
    setVoiceOpening(true);

    setTimeout(() => {
      setShowVoiceNotes(true);
      window.scrollTo(0, 0);
    }, 700);
  };

  const goBack = () => {
    setGoingBack(true);

    setTimeout(() => {
      setOpened(false);
      setShowVoiceNotes(false);
      setVoiceOpening(false);
      setOpening(false);
      setGoingBack(false);
      setPlaying(null);

      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
        }
      });

      window.scrollTo(0, 0);
    }, 700);
  };

  const toggleAudio = (index: number) => {
    const audio = audioRefs.current[index];

    if (!audio) return;

    if (playing === index) {
      audio.pause();
      setPlaying(null);
      return;
    }

    audioRefs.current.forEach((item, i) => {
      if (item && i !== index) {
        item.pause();
        item.currentTime = 0;
      }
    });

    audio.play();
    setPlaying(index);
  };

  const updateProgress = (index: number) => {
    const audio = audioRefs.current[index];

    if (!audio || !audio.duration) return;

    const value =
      (audio.currentTime / audio.duration) * 100;

    setProgress((old) => {
      const updated = [...old];
      updated[index] = value;
      return updated;
    });
  };

  const finishAudio = (index: number) => {
    setPlaying(null);

    setProgress((old) => {
      const updated = [...old];
      updated[index] = 0;
      return updated;
    });
  };

  return (
    <main className="min-h-screen bg-[#f3ead8]">

      {!opened && !showVoiceNotes && (
        <section
          className={`envelope-screen ${
            opening || voiceOpening
              ? "homepage-opening"
              : ""
          }`}
        >
          <div className="homepage-options">

            {/* ENVELOPE */}

            <div className="homepage-option">

              <div className="envelope-hover">
                <img
                  src="/images/closed-envelope.png"
                  alt="A sealed envelope"
                  className="block w-full h-auto"
                />
              </div>

              <button
                onClick={openLetter}
                disabled={opening}
                className="option-button"
              >
                open me ♡
              </button>

            </div>


            {/* TAPE RECORDER */}

            <div className="homepage-option">

              <div
                className={`tape-hover ${
                  voiceOpening
                    ? "tape-opening"
                    : ""
                }`}
              >
                <img
                  src="/images/tape-recorder.png"
                  alt="Just for you"
                  className="block w-full h-auto"
                />
              </div>

              <button
                onClick={openVoiceNotes}
                disabled={voiceOpening}
                className="option-button"
              >
                open me ♡
              </button>

            </div>

          </div>
        </section>
      )}


      {/* LETTER */}

      {opened && (
        <section
          className={`letter-container ${
            goingBack ? "page-going-back" : ""
          }`}
        >

          <button
            onClick={goBack}
            className="back-button"
          >
            <span>←</span>
            back
          </button>


          <div className="letter-paper">

            <div className="letter-content">

              {/* PHOTO */}

              <div className="photo-wrapper">
  <img
    src="/images/us.png"
    alt="us"
    className="letter-photo"
  />
</div>


              {/* TITLE */}

              <h1 className="letter-title">
                My love,
              </h1>


              {/* LETTER */}

              <div className="letter-text">

                <p>
                  srijaannnnnn. it's your birthday. you're 24 now.
                  i don't know why, but i feel so proud of you.
                  i've known u for only about nine months, which
                  sounds so little when i say it out loud, but
                  somehow it feels like you've been a part of my
                  life forever. my days literally begin and end
                  with u now. you're in my random thoughts, my
                  stories, my plans, my little observations, and
                  somehow you've become such a natural part of my
                  everyday life that i can't imagine what my days
                  felt like before u.
                </p>

                <p>
                  i'm so, so grateful that u exist.
                </p>

                <p>
                  when i met u, i genuinely had no idea that this
                  person i was slowly getting comfortable with
                  would become this important to me. i didn't know
                  we'd go from being two very shy people who barely
                  knew what to say to each other to me wanting to
                  tell u every tiny thing that happens in my day.
                  i didn't know i'd become comfortable enough to
                  fall asleep on calls(hehe u eep, i stay on call),
                  yap endlessly, send u random thoughts, ask u to
                  choose my running socks, or tell u about things
                  that i'd normally keep completely to myself.
                </p>

                <p>
                  somehow, everything became a little more special
                  once u entered my life.
                </p>

                <p>
                  u built a website for me, i still feel special
                  because of that. and u added a chat feature so
                  that we can text, i cant tell u how loved u make
                  me feel. it feels like im in a fairytale, you're
                  perfect. u tracked my location so that i could
                  rest in the cab before my kathak class. u named
                  papri (very imp). u comforted me when i was crying
                  endlessly that night. im sure u were tired but u
                  still stayed up to support me. u take out time to
                  talk to me even at home, when its risky. you're
                  so gentle with me. you've no idea how u heal me
                  everyday just by being yourself. i notice every
                  effort u make and im so gateful to u for choosing
                  me. i must've done some good deeds to deserve a
                  boyfriend like u.
                </p>

                <p>
                  and i am so proud of the year you've had.
                </p>

                <p>
                  u went to london. u pitched your product in
                  london. u won two more hackathons, started
                  working at epam, spent six months in hyderabad,
                  experienced a completely different life there,
                  spent time in pune, travelled, tried new things,
                  kept learning, kept working on yourself, took
                  better care of your health, bounced back from
                  your head injury, started running beech mein
                </p>

                <p>
                  and got a girlfriend.
                </p>

                <p>
                  honestly, 10/10 successful year.
                </p>

                <p>
                  i really hope you've stopped for a second and
                  looked back at yourself from a year ago. i wish
                  u could see yourself the way i see u. i think the
                  srijan from a year ago would be so proud of the
                  person standing here today.
                </p>

                <p>
                  i want to see u grow into every version of
                  yourself you've ever told me about. i want to
                  see u get that career you're dreaming about,
                  build the life u keep imagining, travel to all
                  the places u want to see, learn all the random
                  things u want to learn, pick up all the hobbies
                  u keep talking about, and eventually look back
                  and realise that u actually did it.
                </p>

                <p>
                  and selfishly, i want to be there for so much of
                  it.
                </p>

                <p>
                  i want to travel with u. i want to eat yumyum
                  food with u. i want to annoy u muheheheh. i want
                  to comfort u when life gets heavy. i want to cry
                  with u, laugh with u, watch movies with u, cuddle
                  u, fall asleep beside u, wake up beside u, go on
                  little grocery runs with u, argue about where
                  we're going to eat, and make absolutely nothing
                  special, feel special simply because we're doing
                  it together.
                </p>

                <p>
                  i want the big memories.
                </p>

                <p>
                  but i also want the boring ones.
                </p>

                <p>
                  the sleepy mornings. the random tuesday evenings.
                  the "aaj khaane mein kya banana hai?"
                  conversations. the days where nothing happens
                  at all.
                </p>

                <p>
                  i want to collect all of those tiny pieces of our
                  life.
                </p>

                <p>
                  and maybe one day, when we're old, we'll sit
                  somewhere and look through all of them and tell
                  our children about the two people who met at a
                  random hackathon, didnt even talk properly in
                  person but fell in love with each other's soul.
                </p>

                <p>
                  it's still crazy to me that in this enormous
                  world, with billions of people, somehow our lives
                  crossed.
                </p>

                <p>
                  out of everyone.
                </p>

                <p>
                  i found u.
                </p>

                <p>
                  i'll always find us a little magical.
                </p>

                <p>
                  i remember how shy we were in the beginning. i
                  remember how strange it felt to suddenly have
                  someone who mattered so much. and now i look at u
                  and somehow love u even more than i did yesterday.
                </p>

                <p>
                  every day u give me another teeni (hehe) reason.
                </p>

                <p>
                  sometimes it's something huge.
                </p>

                <p>
                  sometimes it's just u being wise
                </p>

                <p>
                  sometimes it's u saying something that makes me
                  laugh.
                </p>

                <p>
                  sometimes it's the way u care about me without
                  even realising you're doing it.
                </p>

                <p>
                  and sometimes it's literally just u existing and
                  me thinking, gosh, i really, really love this boy.
                </p>

                <p>
                  so happy 24th birthday, my srijan.
                </p>

                <p>
                  i hope 24 is kinder to u. i hope it brings u a lot
                  of happiness, growth, adventures, peace, good
                  food, good people, success, and all the little
                  things you've been waiting for.
                </p>

                <p>
                  and i hope i get to be there for as much of it as
                  life lets me.
                </p>

                <p>
                  i love u so, so much.
                </p>

                <p>
                  more than i know how to explain properly.
                </p>

                <p>
                  i love u 💗
                </p>

              </div>

            </div>

          </div>

        </section>
      )}


      {/* VOICE NOTES */}

      {showVoiceNotes && (
        <section
          className={`voice-notes-page ${
            goingBack ? "page-going-back" : ""
          }`}
        >

          <button
            onClick={goBack}
            className="back-button voice-back"
          >
            <span>←</span>
            back
          </button>


          <div className="voice-notes-inner">

            <img
              src="/images/tape-recorder.png"
              alt="Just for you"
              className="voice-tape"
            />

            <h1 className="voice-title">
              little pieces of me ♡
            </h1>

            <p className="voice-subtitle">
              for whenever you need to hear my voice
            </p>


            <div className="voice-note-list">

              {audioNotes.map((note, index) => (

                <div
                  className={`voice-note-card ${
                    playing === index
                      ? "voice-note-playing"
                      : ""
                  }`}
                  key={note.file}
                >

                  <audio
                    ref={(element) => {
                      audioRefs.current[index] = element;
                    }}
                    src={`/audio/${note.file}`}
                    preload="metadata"
                    onTimeUpdate={() =>
                      updateProgress(index)
                    }
                    onEnded={() =>
                      finishAudio(index)
                    }
                  />

                  <button
                    className={`heart-play ${
                      playing === index
                        ? "heart-playing"
                        : ""
                    }`}
                    onClick={() =>
                      toggleAudio(index)
                    }
                  >
                    {playing === index ? "♥" : "♡"}
                  </button>

                  <div className="voice-note-main">

                    <div className="voice-note-title">
                      {note.title}
                    </div>

                    <div className="waveform">

                      {waveform.map(
                        (height, barIndex) => {

                          const barPosition =
                            (barIndex /
                              waveform.length) *
                            100;

                          const active =
                            barPosition <=
                            progress[index];

                          return (
                            <span
                              key={barIndex}
                              className={`wave-bar ${
                                active
                                  ? "wave-bar-active"
                                  : ""
                              }`}
                              style={{
                                height:
                                  `${height}px`,
                              }}
                            />
                          );
                        }
                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  );
}