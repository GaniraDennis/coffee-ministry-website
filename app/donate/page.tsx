"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const donationAmounts = [
  { amount: 25, label: "School Supplies", icon: "fas fa-book", description: "Provides books and supplies for one child for a term." },
  { amount: 50, label: "Monthly Meals", icon: "fas fa-utensils", description: "Feeds one child at school for an entire month." },
  { amount: 100, label: "School Uniform", icon: "fas fa-graduation-cap", description: "Provides a complete school uniform set for one child." },
  { amount: 250, label: "Full Sponsorship", icon: "fas fa-school", description: "Monthly sponsorship covering education, meals, and supplies." },
];

const impactMetrics = [
  { icon: "fas fa-book", label: "Books Provided", value: "12,000+" },
  { icon: "fas fa-utensils", label: "Meals Served", value: "50,000+" },
  { icon: "fas fa-graduation-cap", label: "Uniforms Given", value: "2,500+" },
  { icon: "fas fa-school", label: "Children Educated", value: "500+" },
];

function DonateForm() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selected, setSelected] = useState(1);
  const [recurring, setRecurring] = useState(true);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-donate" />
            Make a Donation
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Every Gift Changes a Life
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-muted-foreground">
            100% of your donation goes directly to supporting children in Kenya&apos;s most marginalized communities.
          </p>
        </motion.div>

        {/* Recurring Toggle */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!recurring ? "text-foreground" : "text-muted-foreground"}`}>One-Time</span>
          <button
            onClick={() => setRecurring(!recurring)}
            className={`relative h-7 w-12 rounded-full transition-colors ${recurring ? "bg-accent" : "bg-border"}`}
            aria-label="Toggle recurring donation"
          >
            <div className={`absolute top-1 h-5 w-5 rounded-full bg-background shadow transition-transform ${recurring ? "translate-x-6" : "translate-x-1"}`} />
          </button>
          <span className={`text-sm font-medium ${recurring ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
        </div>

        {/* Amount Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {donationAmounts.map((da, i) => (
            <motion.button
              key={da.amount}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => { setSelected(i); setCustomAmount(""); }}
              className={`rounded-2xl border p-6 text-left transition-all ${
                selected === i && !customAmount
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-border bg-card hover:border-accent/30"
              }`}
            >
              <i className={`${da.icon} text-accent text-xl mb-3 block`} />
              <p className="text-2xl font-bold text-foreground">
                ${da.amount}
                {recurring && <span className="text-sm font-normal text-muted-foreground">/mo</span>}
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">{da.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{da.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Custom Amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <label className="mb-2 block text-sm font-medium text-foreground text-center">
            <i className="fas fa-edit text-accent text-xs mr-2" />
            Or enter a custom amount
          </label>
          <div className="mx-auto max-w-sm relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelected(-1); }}
              placeholder="Enter amount"
              className="w-full rounded-xl border border-input bg-background px-4 py-3 pl-8 text-center text-lg font-semibold text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
        </motion.div>

        {/* Donate Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:shadow-xl hover:scale-105">
            <i className="fas fa-lock text-xs" />
            Donate {customAmount ? `$${customAmount}` : `$${donationAmounts[selected]?.amount || 50}`}
            {recurring ? "/month" : ""}
          </button>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><i className="fas fa-lock" /> Secure</span>
            <span className="flex items-center gap-1"><i className="far fa-credit-card" /> Card</span>
            <span className="flex items-center gap-1"><i className="fab fa-paypal" /> PayPal</span>
            <span className="flex items-center gap-1"><i className="fas fa-mobile-alt" /> M-Pesa</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-chart-line" />
            Your Impact
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Where Your Money Goes</h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <i className={`${m.icon} text-accent text-2xl mb-3 block`} />
              <p className="text-2xl font-bold text-foreground">{m.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{m.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Fund Allocation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-2xl border border-border bg-card p-8"
        >
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">
            <i className="fas fa-chart-pie text-accent mr-2" />
            Fund Allocation
          </h3>
          <div className="flex flex-col gap-4">
            {[
              { label: "Education", pct: 40, icon: "fas fa-book", color: "bg-accent" },
              { label: "Nutrition", pct: 25, icon: "fas fa-apple-alt", color: "bg-green" },
              { label: "Healthcare", pct: 20, icon: "fas fa-heartbeat", color: "bg-orange" },
              { label: "Activities", pct: 15, icon: "fas fa-running", color: "bg-coffee" },
            ].map((item) => (
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

export default function DonatePage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Donate"
        subtitle="Your generosity transforms lives and builds brighter futures for children in Kenya."
        icon="fas fa-donate"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate" }]}
      />
      <DonateForm />
      <ImpactSection />
      <Footer />
    </main>
  );
}
