"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const partners = [
  "Faith Community Church",
  "Kenya Education Fund",
  "Hope International",
  "Kibera Foundation",
  "Africa Rising",
  "Grace Mission",
  "Youth Empowerment Kenya",
  "Child Welfare Society",
];

export default function Partners() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-secondary overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-muted-foreground text-sm">
            <i className="fas fa-handshake text-accent" />
            Our Partners & Supporters
          </div>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-r from-secondary to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 z-10 w-24 bg-gradient-to-l from-secondary to-transparent" />

          <div className="flex animate-scroll-left gap-8">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="flex-shrink-0 flex h-16 items-center justify-center rounded-xl border border-border bg-background px-8 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/get-involved#partner"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 group"
          >
            <i className="fas fa-plus-circle" />
            Become a Partner
            <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
