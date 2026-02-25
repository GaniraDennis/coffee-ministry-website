"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cards = [
  {
    title: "Our Mission",
    icon: "fas fa-bullseye",
    description:
      "To empower young people and children in marginalized communities by improving access to education, leadership development, protection systems, and long-term opportunity.",
    gradient: "from-accent/20 to-orange-warm/10",
    iconColor: "text-accent",
  },
  {
    title: "Our Vision",
    icon: "fas fa-eye",
    description:
      "A future where every young person and child, regardless of background, has equitable access to education, safety, dignity, and economic opportunity.",
    gradient: "from-green/20 to-green-light/10",
    iconColor: "text-green",
  },
  {
    title: "Join Our Community",
    icon: "fas fa-users",
    description:
      "Become a sponsor, volunteer, or partner and help us reach more children with hope and opportunity.",
    gradient: "from-coffee/20 to-coffee-light/10",
    iconColor: "text-coffee",
  },
];

export default function MissionVision() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            What Drives Us Forward
          </h2>
          <p className="mt-3 text-muted-foreground">
            Faith-led action, strategic purpose, and steadfast dedication to children
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                  <i className={`${card.icon} ${card.iconColor} text-2xl`} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
