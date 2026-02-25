"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const children = [
  { name: "Amara K.", age: 8, school: "Kibera Primary", interests: "Drawing, Dancing", need: "Education", gender: "Girl" },
  { name: "Daniel O.", age: 10, school: "Olympic Primary", interests: "Football, Science", need: "Education", gender: "Boy" },
  { name: "Faith W.", age: 7, school: "Ayany Primary", interests: "Singing, Math", need: "Nutrition", gender: "Girl" },
  { name: "James M.", age: 11, school: "Toi Primary", interests: "Reading, Art", need: "Healthcare", gender: "Boy" },
  { name: "Grace N.", age: 9, school: "Kibera Primary", interests: "Dance, Writing", need: "Education", gender: "Girl" },
  { name: "Peter A.", age: 12, school: "Olympic Primary", interests: "Music, Running", need: "Activities", gender: "Boy" },
];

const steps = [
  { icon: "fas fa-user-check", title: "Select a Child", description: "Browse profiles and choose a child to sponsor based on their needs and interests." },
  { icon: "fas fa-file-alt", title: "Fill Your Details", description: "Complete a simple sponsorship form with your information and preferences." },
  { icon: "fas fa-credit-card", title: "Set Up Payment", description: "Choose a payment plan that works for you starting at just $50/month." },
];

const allocation = [
  { label: "Education", pct: 40, icon: "fas fa-book", color: "bg-accent" },
  { label: "Nutrition", pct: 25, icon: "fas fa-apple-alt", color: "bg-green" },
  { label: "Healthcare", pct: 20, icon: "fas fa-heartbeat", color: "bg-orange" },
  { label: "Activities", pct: 15, icon: "fas fa-running", color: "bg-coffee" },
];

function ChildProfiles() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? children : children.filter((c) => c.gender === filter);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-child" />
            Children Waiting for Sponsors
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Meet the Children</h2>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {["All", "Girl", "Boy"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                filter === f ? "bg-accent text-accent-foreground shadow" : "bg-secondary text-muted-foreground hover:bg-accent/10"
              }`}
            >
              <i className={`${f === "All" ? "fas fa-users" : f === "Girl" ? "fas fa-female" : "fas fa-male"} mr-2 text-xs`} />
              {f === "All" ? "All Children" : `${f}s`}
            </button>
          ))}
        </div>

        {/* Child Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((child, i) => (
            <motion.div
              key={child.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Avatar placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-coffee/20 to-accent/20 flex items-center justify-center">
                <div className="h-24 w-24 rounded-full bg-background/80 flex items-center justify-center">
                  <i className={`${child.gender === "Girl" ? "fas fa-female" : "fas fa-male"} text-accent text-3xl`} />
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-semibold text-accent-foreground">
                  {child.need}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <i className="fas fa-id-badge text-accent text-sm" />
                  {child.name}
                </h3>
                <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-child text-accent text-xs" /> Age: {child.age}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fas fa-school text-accent text-xs" /> {child.school}
                  </span>
                  <span className="flex items-center gap-2">
                    <i className="fas fa-star text-accent text-xs" /> {child.interests}
                  </span>
                </div>
                <button className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg">
                  <i className="fas fa-hand-holding-heart" />
                  Sponsor {child.name.split(" ")[0]}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SponsorshipProcess() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-cogs" />
            How It Works
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Sponsorship Process</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="relative rounded-2xl border border-border bg-card p-8 text-center"
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <i className={`${step.icon} text-accent text-2xl`} />
              </div>
              <div className="absolute top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {i + 1}
              </div>
              <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Fund Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            <i className="fas fa-chart-pie text-accent mr-2" />
            How Sponsorship Funds Are Allocated
          </h3>
          <div className="flex flex-col gap-4">
            {allocation.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <i className={`${item.icon} text-accent`} />
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{item.pct}%</span>
                </div>
                <div className="h-2.5 rounded-full bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function SponsorPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Sponsor a Child"
        subtitle="For just $50/month, you can change a child's entire future by providing education, meals, and care."
        icon="fas fa-hands-helping"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Sponsor a Child" }]}
      />
      <ChildProfiles />
      <SponsorshipProcess />

      {/* CTA */}
      <section className="py-20 bg-coffee-dark text-center">
        <div className="mx-auto max-w-2xl px-4">
          <i className="fas fa-heart text-accent text-4xl mb-6 block" />
          <h2 className="text-3xl font-bold text-cream text-balance">Ready to Make a Difference?</h2>
          <p className="mt-3 text-cream/60">Every child deserves the chance to dream big and achieve their potential.</p>
          <Link href="/donate" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg">
            <i className="fas fa-donate" />
            Make A Difference
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
