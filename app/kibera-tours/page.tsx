"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const tours = [
  {
    name: "Community Walk",
    duration: "2 hours",
    groupSize: "2-8",
    price: 30,
    includes: ["Local guide", "Refreshments", "Community visit", "Photo opportunities"],
    description: "An intimate walking tour through Kibera, visiting local businesses, schools, and community projects.",
  },
  {
    name: "Half-Day Experience",
    duration: "4 hours",
    groupSize: "2-12",
    price: 55,
    includes: ["Local guide", "Lunch", "School visit", "Art workshop", "Community interaction"],
    description: "A deeper dive into Kibera life, including visits to our programs and hands-on activities.",
  },
  {
    name: "Full-Day Immersion",
    duration: "8 hours",
    groupSize: "2-6",
    price: 95,
    includes: ["Local guide", "All meals", "Multiple program visits", "Workshop participation", "Cultural exchange"],
    description: "The complete Kibera experience with visits to all our programs and meaningful community engagement.",
  },
];

const reviews = [
  { name: "Sarah T.", location: "UK", rating: 5, text: "An eye-opening and deeply moving experience. Our guide was incredible and the children's warmth was unforgettable." },
  { name: "Michael R.", location: "USA", rating: 5, text: "Not your typical tour. This is a genuine, respectful way to understand life in Kibera while supporting the community." },
  { name: "Anna L.", location: "Germany", rating: 5, text: "Life-changing. I came to visit and left having sponsored a child. The impact is real and visible." },
];

const guides = [
  { name: "David Ouma", languages: "English, Swahili", experience: "5 years", specialty: "Community history" },
  { name: "Mary Akinyi", languages: "English, Swahili, French", experience: "3 years", specialty: "Youth programs" },
];

function TourOptions() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-route" />
            Tour Options
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Choose Your Experience</h2>
          <p className="mt-3 text-muted-foreground">All tour proceeds directly support our community programs.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl border p-6 transition-all hover:shadow-lg ${
                i === 1 ? "border-accent bg-accent/5 relative" : "border-border bg-card"
              }`}
            >
              {i === 1 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-bold text-accent-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-foreground">{tour.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tour.description}</p>

              <div className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><i className="fas fa-hourglass-half text-accent text-xs" /> {tour.duration}</span>
                <span className="flex items-center gap-2"><i className="fas fa-users text-accent text-xs" /> {tour.groupSize} people</span>
                <span className="flex items-center gap-2"><i className="fas fa-dollar-sign text-accent text-xs" /> ${tour.price} per person</span>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold text-foreground mb-2">Includes:</p>
                <ul className="flex flex-col gap-1">
                  {tour.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <i className="fas fa-check-circle text-green" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg">
                <i className="fas fa-calendar-check mr-2" />
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuidesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-secondary">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground text-balance">Meet Our Guides</h2>
          <p className="mt-3 text-muted-foreground">All our guides are local residents with deep community connections.</p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {guides.map((guide, i) => (
            <motion.div key={guide.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-6 text-center">
              <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center">
                <i className="fas fa-user text-accent text-2xl" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{guide.name}</h3>
              <div className="mt-3 flex flex-col gap-1 text-sm text-muted-foreground">
                <span><i className="fas fa-language text-accent mr-2" />{guide.languages}</span>
                <span><i className="fas fa-award text-accent mr-2" />{guide.experience}</span>
                <span><i className="fas fa-star text-accent mr-2" />{guide.specialty}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground text-balance">Visitor Reviews</h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review, i) => (
            <motion.div key={review.name} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <i key={j} className="fas fa-star text-accent text-sm" />
                ))}
              </div>
              <i className="fas fa-quote-left text-accent/20 text-2xl mb-2 block" />
              <p className="text-sm text-muted-foreground italic">{review.text}</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <i className="fas fa-user text-accent text-xs" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [submitted, setSubmitted] = useState(false);

  return (
    <section ref={ref} id="booking" className="py-24 bg-secondary scroll-mt-20">
      <div className="mx-auto max-w-2xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground text-balance">Book Your Tour</h2>
        </motion.div>
        {submitted ? (
          <div className="rounded-2xl border border-green/30 bg-green/10 p-12 text-center">
            <i className="fas fa-check-double text-green text-4xl mb-4 block" />
            <h3 className="text-xl font-semibold text-foreground">Booking Received!</h3>
            <p className="mt-2 text-muted-foreground">We&apos;ll confirm your booking within 24 hours.</p>
          </div>
        ) : (
          <motion.form initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }} onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="rounded-2xl border border-border bg-card p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground"><i className="fas fa-user text-accent text-xs mr-2" />Name</label>
                <input required type="text" placeholder="Full name" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground"><i className="fas fa-envelope text-accent text-xs mr-2" />Email</label>
                <input required type="email" placeholder="your@email.com" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground"><i className="fas fa-calendar-alt text-accent text-xs mr-2" />Preferred Date</label>
                <input required type="date" className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-foreground"><i className="fas fa-user-plus text-accent text-xs mr-2" />Group Size</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent">
                  <option>1-2</option><option>3-4</option><option>5-8</option><option>9-12</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-foreground"><i className="fas fa-route text-accent text-xs mr-2" />Tour Type</label>
                <select className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent">
                  <option>Community Walk ($30)</option><option>Half-Day Experience ($55)</option><option>Full-Day Immersion ($95)</option>
                </select>
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:shadow-lg">
              <i className="fas fa-check-double text-xs" /> Confirm Booking
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}

export default function KiberaToursPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Kibera Tours"
        subtitle="Experience the vibrant community of Kibera through ethical, community-led tours that support local programs."
        icon="fas fa-map-signs"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }, { label: "Kibera Tours" }]}
      />
      <TourOptions />
      <GuidesSection />
      <ReviewsSection />
      <BookingForm />
      <Footer />
    </main>
  );
}
