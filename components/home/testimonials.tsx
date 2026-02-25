"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const testimonials = [
  {
    quote: "The Coffee Ministry changed my life. I was a street child with no hope, and now I am in university studying to become a teacher.",
    name: "James Ochieng",
    role: "Education Sponsorship Graduate",
    initials: "JO",
  },
  {
    quote: "Through the Stand with a Girl program, I learned to value myself and my education. Today I mentor other girls in my community.",
    name: "Faith Wanjiku",
    role: "Girls Mentorship Program",
    initials: "FW",
  },
  {
    quote: "As a young mother, I thought my life was over. The daycare program gave me a second chance to pursue my dreams while caring for my child.",
    name: "Mary Njeri",
    role: "Young Mothers Program",
    initials: "MN",
  },
  {
    quote: "The boys mentorship program taught me that real strength comes from character, not from the streets. I choose to be great every day.",
    name: "Peter Kamau",
    role: "I Choose to Be Great Alumni",
    initials: "PK",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-heart" />
            Impact Stories
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Lives Transformed, Stories Shared
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <i className="fas fa-quote-left text-4xl text-accent/30 mb-6 block" />
              <p className="text-lg text-foreground italic leading-relaxed md:text-xl lg:text-2xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold text-lg">
                  {testimonials[current].initials}
                </div>
                <div>
                  <p className="text-base font-medium text-foreground">
                    {testimonials[current].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left text-sm" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-accent" : "w-2 bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-accent hover:text-accent"
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
