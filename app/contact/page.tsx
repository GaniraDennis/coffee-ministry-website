"use client";

import React from "react"

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";

const contactCards = [
  {
    icon: "fas fa-building",
    title: "Kenyan Office",
    info: "Laini Saba, Kibera",
    sub: "P.O BOX 22068 - 00523, Nairobi, Kenya",
  },
  {
    icon: "fas fa-phone-alt",
    title: "Phone / WhatsApp",
    info: "+254 700 277112",
    sub: "WhatsApp available",
  },
  { icon: "fas fa-envelope", title: "Email", info: "info@thecoffeeministry.org", sub: "support@thecoffeeministry.org" },
  { icon: "fas fa-clock", title: "Hours", info: "Mon - Fri: 8AM - 5PM EAT", sub: "Sat: 9AM - 1PM EAT" },
];

function ContactForm() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info Cards */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}>
            <div className="mb-8">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                <i className="fas fa-map-marked-alt" />
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold text-foreground text-balance">We&apos;d Love to Hear From You</h2>
              <p className="mt-3 text-muted-foreground">Whether you have a question, want to volunteer, or partner with us, reach out anytime.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contactCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-5 transition-all hover:shadow-md"
                >
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <i className={`${card.icon} text-accent`} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">{card.title}</h3>
                  <p className="mt-1 text-sm text-foreground">{card.info}</p>
                  <p className="text-xs text-muted-foreground">{card.sub}</p>
                  {card.title === "Phone / WhatsApp" && (
                    <a href={`https://wa.me/254700277112`} target="_blank" rel="noopener noreferrer" className="mt-2 block text-sm text-accent hover:underline">Open WhatsApp chat</a>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-6 rounded-2xl border border-border bg-card overflow-hidden"
            >
              <iframe
                src="https://maps.google.com/maps?q=-1.3118333,36.7951944&z=16&output=embed"
                className="w-full h-64"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The Coffee Ministry - Kibera Office"
              />
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
            {submitted ? (
              <div className="rounded-2xl border border-green/30 bg-green/10 p-12 text-center h-full flex flex-col items-center justify-center">
                <i className="fas fa-check-circle text-4xl text-green mb-4" />
                <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We&apos;ll get back to you within 24-48 hours.</p>
              </div>
            ) : (
              <div className="rounded-2xl border border-border bg-card p-8">
                {/* Image at top */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative h-48 rounded-lg overflow-hidden mb-6 -mx-8 -mt-8 w-[calc(100%+4rem)] group">
                  <Image src="/goodies.jpg" alt="Contact us" fill className="object-cover transition-transform group-hover:scale-110" />
                </motion.div>
                
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      <i className="fas fa-user text-accent text-xs mr-2" />Name
                    </label>
                    <input required type="text" placeholder="Your full name" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      <i className="fas fa-envelope text-accent text-xs mr-2" />Email
                    </label>
                    <input required type="email" placeholder="your@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      <i className="fas fa-phone text-accent text-xs mr-2" />Phone
                    </label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      <i className="fas fa-edit text-accent text-xs mr-2" />Subject
                    </label>
                    <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent">
                      <option>General Inquiry</option>
                      <option>Volunteering</option>
                      <option>Partnership</option>
                      <option>Sponsorship</option>
                      <option>Donations</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      <i className="fas fa-comment-alt text-accent text-xs mr-2" />Message
                    </label>
                    <textarea required rows={5} placeholder="How can we help you?" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none" />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <><i className="fas fa-spinner fa-spin text-xs" /> Sending...</>
                  ) : (
                    <><i className="fas fa-paper-plane text-xs" /> Send Message</>
                  )}
                </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>

        {/* Full width map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 rounded-2xl border border-border bg-card overflow-hidden"
        >
          <iframe
            src="https://maps.google.com/maps?q=-1.3118333,36.7951944&z=16&output=embed"
            className="w-full h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="The Coffee Ministry - Kibera Office"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Contact Us"
        subtitle="Have a question or want to get involved? We're here to help."
        icon="fas fa-address-book"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />
      <ContactForm />
      <Footer />
    </main>
  );
}
