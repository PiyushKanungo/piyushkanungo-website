"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [showBot, setShowBot] = useState(false);
  const [showGameplay, setShowGameplay] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
  
    if (showBot && !showGameplay) {
      audio.play().catch((err) => {
        console.error("Audio play failed:", err);
      });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [showBot, showGameplay]);
  

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Image
        src="/images/bghunter.jpeg"
        alt="Hunter x Hunter Background"
        fill
        priority
        className="object-cover brightness-75"
      />

      <div className="relative z-10 max-w-4xl text-center px-4">
        <p className="text-3xl md:text-4xl font-semibold text-white italic drop-shadow-lg">
          {`"You Should Enjoy the Little Detours to the Fullest Because That's Where You'll Find Things More Important Than What You Want"`}
        </p>
        <p className="mt-4 text-xl text-gray-300 font-medium">- Ging Freecss</p>

        {/* Fun prank section starts here */}
        {!showBot && (
          <button
          onClick={() => setShowBot(true)}
          className="mt-10 px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-300"
        >
          Click here to see a bot 🤖
        </button>
        )}

        {showBot && !showGameplay && (
          <div className="flex flex-col items-center mt-6 space-y-4">
            <audio ref={audioRef} src="/audio/botmusic.mp3" loop />
            <Image
              src="/images/bot.jpeg"
              alt="Bot"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            />
            <button
              onClick={() => setShowGameplay(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Click here to see bot's gameplay 🎮
            </button>
          </div>
        )}

        {showGameplay && (
          <div className="mt-6">
            <video
              controls
              autoPlay
              className="rounded-lg max-w-full border shadow-lg"
            >
              <source src="/videos/botgame.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </main>
  );
}
