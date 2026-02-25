"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const programs = [
  {
    title: "Economic Empowerment",
    image: "/day.jpg",
    description: "Skills training in coding, hospitality, and agriculture equips youth with marketable careers.",
    slug: "economic-empowerment",
  },
  {
    title: "Child Protection & Education",
    image: "/fun.jpg",
    description: "Over 2,500 children receive free schooling, tutoring, meals, and protective case management.",
    slug: "child-protection",
  },
  {
    title: "Gender Equity",
    image: "/charity-f.jpg",
    description: "Mentoring, hygiene education, and life skills empower girls and young women to thrive.",
    slug: "gender-equity",
  },
  {
    title: "Spiritual Discipleship",
    image: "/goodies.jpg",
    description: "Mentorship, sports, and Bible study nurture character and Christ‑centered leadership.",
    slug: "spiritual-discipleship",
  },
];

export default function ProgramsShowcase() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            Our Programs
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Programs That Empower & Protect
          </h2>
          <p className="mt-3 text-muted-foreground">
            Targeted initiatives in education, equity, employment and spirituality
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((program, i) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={`/programs/${program.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 hover:border-accent/30"
              >
                {program.image && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative h-48 w-full bg-secondary overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </motion.div>
                )}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {program.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                    Learn More
                    <i className="fas fa-long-arrow-alt-right text-xs" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-7 py-3 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <i className="fas fa-th" />
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
