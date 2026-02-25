"use client";

import React from "react"

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section ref={ref} className="py-24 bg-coffee-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-accent blur-[80px]" />
        <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-green blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="mb-6">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <i className="fas fa-envelope-open-text text-4xl text-accent" />
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance">
            Stay Connected With Our Journey
          </h2>
          <p className="mt-3 text-cream/60">
            Get monthly updates on our programs, impact stories, and ways to
            get involved.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 rounded-2xl border border-green/30 bg-green/10 p-6"
            >
              <i className="fas fa-check-circle text-3xl text-green mb-3 block" />
              <p className="text-cream font-semibold">
                Thank you for subscribing!
              </p>
              <p className="mt-1 text-sm text-cream/60">
                You&apos;ll receive our next newsletter in your inbox.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <i className="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-cream/40" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-full border border-cream/20 bg-cream/10 py-3.5 pl-11 pr-4 text-sm text-cream placeholder:text-cream/40 outline-none focus:border-accent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg"
                >
                  <i className="fas fa-paper-plane text-xs" />
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-cream/40">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
