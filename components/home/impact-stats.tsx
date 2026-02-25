"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Children Helped", value: 2500, suffix: "+", icon: "fas fa-child", color: "text-accent" },
  { label: "Funds Raised", value: 500, prefix: "$", suffix: "K+", icon: "fas fa-dollar-sign", color: "text-green" },
  { label: "Active Volunteers", value: 120, suffix: "+", icon: "fas fa-users", color: "text-orange-warm" },
  { label: "Communities Reached", value: 15, suffix: "+", icon: "fas fa-map-marker-alt", color: "text-accent" },
];

function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  inView,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactStats() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} className="relative py-20 bg-coffee-dark overflow-hidden">
      {/* Subtle gradient mesh */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-accent/30 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-green/30 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-cream md:text-4xl text-balance">
            Our Impact in Numbers
          </h2>
          <p className="mt-3 text-cream/60">
            Thousands of lives changed through education, meals, and safe spaces
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cream/10 backdrop-blur-sm">
                <i className={`${stat.icon} ${stat.color} text-2xl`} />
              </div>
              <p className="text-3xl font-bold text-cream md:text-4xl lg:text-5xl">
                <AnimatedCounter
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-2 text-sm text-cream/60">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
