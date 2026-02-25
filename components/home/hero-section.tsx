"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// stats removed to keep hero video clean; only background video now
const stats: Array<{ label: string; value: string; icon: string }> = []; // no stats

export default function HeroSection() {
  const [muted, setMuted] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={`https://www.youtube.com/embed/HLiguYHO6UY?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=HLiguYHO6UY&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] min-w-full min-h-full pointer-events-none"
          title="The Coffee Ministry hero video"
        />
      </div>

      {/* Dark Overlay (stronger for text readability) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Mute/Unmute */}
      <button
        onClick={() => setMuted(!muted)}
        className="absolute top-24 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-foreground/20 text-cream backdrop-blur-sm transition-all hover:bg-foreground/30"
        aria-label={muted ? "Unmute" : "Mute"}
      >
        <i className={`fas ${muted ? "fa-volume-mute" : "fa-volume-up"} text-sm`} />
      </button>

      {/* Content (moved down slightly for better spacing) */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-lg"
        >
          Investing in Hope, Transforming Communities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-base text-white md:text-lg lg:text-xl drop-shadow-md"
        >
          When you invest in TCM, you’re investing in far more than just kids –
          you’re investing in teachers, tutors, nurses, mentors, cooks, and local
          leaders who serve alongside them.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/programs"
            className="group inline-flex items-center gap-2.5 rounded-full border-2 border-accent bg-white px-7 py-3.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            View Programs
          </Link>
          <Link
            href="/get-involved#donate"
            className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90"
          >
            Donate Now
          </Link>
        </motion.div>


      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-cream/50"
        >
          <i className="fas fa-chevron-down text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
