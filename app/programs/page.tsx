"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const programs = [
  {
    title: "Economic Empowerment",
    image: "/charity.jpg",
    description: "Skills training in coding, hospitality, and agriculture equips youth with marketable careers.",
    slug: "economic-empowerment",
    category: "Economic",
    participants: "N/A",
    location: "Various",
  },
  {
    title: "Child Protection & Education",
    image: "/feeding-program.jpg",
    description: "Over 2,500 children receive free schooling, tutoring, meals, and protective case management.",
    slug: "child-protection",
    category: "Education",
    participants: "2,500+",
    location: "Kibera",
  },
  {
    title: "Gender Equity",
    image: "/stand-with-a-girl.jpg",
    description: "Mentoring, hygiene education, and life skills empower girls and young women to thrive.",
    slug: "gender-equity",
    category: "Equity",
    participants: "200+",
    location: "Kibera",
  },
  {
    title: "Spiritual Discipleship",
    image: "/soccer.jpg",
    description: "Mentorship, sports, and Bible study nurture character and Christ‑centered leadership.",
    slug: "spiritual-discipleship",
    category: "Spiritual",
    participants: "250+",
    location: "Kibera",
  },
];

const categories = ["All", "Economic", "Education", "Equity", "Spiritual"];

function ProgramsGrid() {
  const [filter, setFilter] = useState("All");
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered = filter === "All" ? programs : programs.filter((p) => p.category === filter);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Filters */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-accent text-accent-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((program, i) => (
            <motion.div
              key={program.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              layout
            >
              <Link
                href={`/programs/${program.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                {program.image ? (
                  <div className="relative h-40 w-full">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-secondary flex items-center justify-center relative overflow-hidden">
                    <i className="fas fa-image text-4xl text-muted-foreground/20" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {program.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-user-friends" />
                      {program.participants}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <i className="fas fa-map-marker-alt" />
                      {program.location}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-accent group-hover:gap-2 transition-all">
                      Learn More
                      <i className="fas fa-long-arrow-alt-right text-[10px]" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ProgramsPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Our Programs"
        subtitle="Holistic interventions designed to break the cycle of poverty and empower the next generation."
        icon="fas fa-tasks"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
      />
      <ProgramsGrid />
      <Footer />
    </main>
  );
}
