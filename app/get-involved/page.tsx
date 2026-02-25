"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const donationAmounts = [
  { amount: 25, label: "School Supplies", icon: "fas fa-book", description: "Provides books and supplies for one child for a term." },
  { amount: 50, label: "Monthly Meals", icon: "fas fa-utensils", description: "Feeds one child at school for an entire month." },
  { amount: 100, label: "School Uniform", icon: "fas fa-graduation-cap", description: "Provides a complete school uniform set for one child." },
  { amount: 250, label: "Full Sponsorship", icon: "fas fa-school", description: "Monthly sponsorship covering education, meals, and supplies." },
];

const partnerTiers = [
  { tier: "Bronze", color: "#CD7F32", benefits: ["Logo on website", "Annual report mention", "Newsletter updates"] },
  { tier: "Silver", color: "#C0C0C0", benefits: ["All Bronze benefits", "Social media features", "Quarterly impact reports"] },
  { tier: "Gold", color: "#FFD700", benefits: ["All Silver benefits", "Event sponsorship naming", "Site visit invitation"] },
  { tier: "Platinum", color: "#E5E4E2", benefits: ["All Gold benefits", "Board advisory access", "Custom program support"] },
];

function VolunteerSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section ref={ref} id="volunteer" className="py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-hands-helping" />
            Volunteer
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Give Your Time, Change a Life
          </h2>
          <p className="mt-3 text-muted-foreground">
            Join our team of dedicated volunteers making a difference in Kenya.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-2xl border border-green/30 bg-green/10 p-12 text-center"
          >
            <i className="fas fa-check-circle text-4xl text-green mb-4 block" />
            <h3 className="text-xl font-semibold text-foreground">Application Received!</h3>
            <p className="mt-2 text-muted-foreground">
              We&apos;ll review your application and get back to you within 48 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="rounded-2xl border border-border bg-card p-8"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  <i className="fas fa-user text-accent text-xs mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  <i className="fas fa-envelope text-accent text-xs mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  <i className="fas fa-phone text-accent text-xs mr-2" />
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground">
                  <i className="fas fa-map-marker-alt text-accent text-xs mr-2" />
                  Location
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="City, Country"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-foreground">
                  <i className="fas fa-toolbox text-accent text-xs mr-2" />
                  Skills & Interests
                </label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                  placeholder="Tell us about your skills and how you'd like to contribute..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg"
            >
              <i className="fas fa-paper-plane text-xs" />
              Submit Application
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

function DonateSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [selected, setSelected] = useState(1);
  const [recurring, setRecurring] = useState(true);

  return (
    <section ref={ref} id="donate" className="py-24 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-donate" />
            Donate
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Every Gift Counts
          </h2>
          <p className="mt-3 text-muted-foreground">
            Your donation directly supports children&apos;s education and wellbeing.
          </p>
        </motion.div>

        {/* Recurring Toggle */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className={`text-sm font-medium ${!recurring ? "text-foreground" : "text-muted-foreground"}`}>
            One-Time
          </span>
          <button
            onClick={() => setRecurring(!recurring)}
            className={`relative h-7 w-12 rounded-full transition-colors ${recurring ? "bg-accent" : "bg-border"}`}
            aria-label="Toggle recurring donation"
          >
            <div
              className={`absolute top-1 h-5 w-5 rounded-full bg-background shadow transition-transform ${
                recurring ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${recurring ? "text-foreground" : "text-muted-foreground"}`}>
            Monthly
          </span>
        </div>

        {/* Amount Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {donationAmounts.map((da, i) => (
            <motion.button
              key={da.amount}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className={`rounded-2xl border p-6 text-left transition-all ${
                selected === i
                  ? "border-accent bg-accent/5 shadow-lg"
                  : "border-border bg-background hover:border-accent/30"
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

        {/* Donate Button */}
        <div className="mt-10 text-center">
          <button className="inline-flex items-center gap-2 rounded-full bg-accent px-10 py-4 text-base font-semibold text-accent-foreground shadow-lg transition-all hover:shadow-xl">
            <i className="fas fa-lock text-xs" />
            Donate ${donationAmounts[selected].amount}
            {recurring ? "/month" : ""}
          </button>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <i className="fas fa-lock" />
              Secure
            </span>
            <span className="flex items-center gap-1">
              <i className="far fa-credit-card" />
              Card
            </span>
            <span className="flex items-center gap-1">
              <i className="fab fa-paypal" />
              PayPal
            </span>
            <span className="flex items-center gap-1">
              <i className="fas fa-mobile-alt" />
              M-Pesa
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnerSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} id="partner" className="py-24 bg-background scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-handshake" />
            Partner With Us
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
            Corporate & Institutional Partnerships
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {partnerTiers.map((tier, i) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg"
            >
              <i className="fas fa-medal text-3xl mb-3 block" style={{ color: tier.color }} />
              <h3 className="mb-4 text-lg font-bold text-foreground">{tier.tier}</h3>
              <ul className="flex flex-col gap-2">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <i className="fas fa-check text-green text-xs" />
                    {b}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GetInvolvedPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Get Involved"
        subtitle="There are many ways to support our mission. Volunteer, donate, partner, or sponsor a child."
        icon="fas fa-hands-helping"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Get Involved" },
        ]}
      />
      <VolunteerSection />
      <DonateSection />
      <PartnerSection />

      {/* Sponsor CTA */}
      <section className="py-20 bg-coffee-dark text-center">
        <div className="mx-auto max-w-2xl px-4">
          <i className="fas fa-hand-holding-heart text-accent text-4xl mb-6 block" />
          <h2 className="text-3xl font-bold text-cream text-balance">
            Sponsor a Child Today
          </h2>
          <p className="mt-3 text-cream/60">
            For just $50/month, you can change a child&apos;s entire future.
          </p>
          <Link
            href="/sponsor"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg"
          >
            <i className="fas fa-heart" />
            Sponsor a Child
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
