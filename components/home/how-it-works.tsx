"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const steps = [
  {
    number: "01",
    title: "Identify",
    icon: "fas fa-search-plus",
    description: "We identify children in marginalized communities who need support the most.",
  },
  {
    number: "02",
    title: "Sponsor",
    icon: "fas fa-hand-holding-heart",
    description: "Connect sponsors with children, providing resources for education and basic needs.",
  },
  {
    number: "03",
    title: "Mentor",
    icon: "fas fa-user-friends",
    description: "Pair children with mentors who guide their spiritual and personal development.",
  },
  {
    number: "04",
    title: "Transform",
    icon: "fas fa-rocket",
    description: "Watch as children grow into confident, educated, and empowered community leaders.",
  },
];

export default function HowItWorks() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-cogs" />
            How It Works
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            The Journey of Transformation
          </h2>
          <p className="mt-3 text-muted-foreground">
            From identification to empowerment, every step matters
          </p>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connector Line (desktop only) */}
          <div className="absolute top-16 left-[calc(12.5%)] right-[calc(12.5%)] hidden h-0.5 bg-border md:block">
            <div
              className="h-full bg-accent transition-all duration-1000"
              style={{ width: inView ? "100%" : "0%" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative text-center"
            >
              {/* Circle */}
              <div className="relative mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="hsl(var(--border))"
                    strokeWidth="2"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="46"
                    fill="none"
                    stroke="hsl(var(--accent))"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={289}
                    initial={{ strokeDashoffset: 289 }}
                    animate={inView ? { strokeDashoffset: 289 - (289 * (i + 1)) / 4 } : {}}
                    transition={{ duration: 1, delay: i * 0.3 }}
                  />
                </svg>
                <div className="flex flex-col items-center">
                  <i className={`${step.icon} text-accent text-2xl mb-1`} />
                  <span className="text-xs font-bold text-muted-foreground">{step.number}</span>
                </div>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
