"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const upcomingEvents = [
  {
    title: "Annual Fundraising Gala 2026",
    date: "March 15, 2026",
    time: "6:00 PM - 10:00 PM EAT",
    location: "Nairobi Serena Hotel, Nairobi",
    type: "Fundraiser",
    description: "Join us for an elegant evening celebrating our impact and raising funds for the coming year's programs.",
    image: "/WhatsApp Image 2026-02-13 at 15.37.22.jpeg",
  },
  {
    title: "Community Open Day",
    date: "April 5, 2026",
    time: "9:00 AM - 4:00 PM EAT",
    location: "Kibera Community Center",
    type: "Community",
    description: "An open day for visitors, sponsors, and partners to see our programs in action firsthand.",
    image: "/56.jpg",
  },
  {
    title: "Talent Show Finals",
    date: "April 20, 2026",
    time: "2:00 PM - 5:00 PM EAT",
    location: "Talent Development Center, Kibera",
    type: "Program",
    description: "Watch our talented students showcase their art, music, dance, and drama in the annual talent show finals.",
    image: "/clean-up.jpg",
  },
];

const pastEvents = [
  { title: "Christmas Celebration 2025", date: "December 20, 2025", type: "Community" },
  { title: "Graduation Ceremony 2025", date: "November 15, 2025", type: "Program" },
  { title: "Charity Run for Education", date: "October 10, 2025", type: "Fundraiser" },
];

function EventsList() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Upcoming */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-calendar-alt" />
            Upcoming Events
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 mb-16">
          {upcomingEvents.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-md hover:border-accent/30"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {event.image && (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative h-64 md:h-full overflow-hidden group">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  </motion.div>
                )}
                <div className="md:col-span-2 p-6">
                  <div className="flex flex-col gap-4 h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-accent/10">
                        <i className="fas fa-calendar-alt text-accent text-lg" />
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                          {event.type}
                        </div>
                        <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><i className="fas fa-calendar-alt text-accent" /> {event.date}</span>
                          <span className="flex items-center gap-1"><i className="fas fa-clock text-accent" /> {event.time}</span>
                          <span className="flex items-center gap-1"><i className="fas fa-map-marker-alt text-accent" /> {event.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-auto">
                      <button className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground hover:shadow-lg">
                        <i className="fas fa-user-plus text-xs" /> Register
                      </button>
                      <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground hover:border-accent/30">
                        <i className="fas fa-bell text-xs text-accent" /> Remind Me
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <i className="fas fa-history" />
            Past Events
          </div>
          <div className="flex flex-col gap-3">
            {pastEvents.map((event) => (
              <div key={event.title} className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-3.5">
                <div className="flex items-center gap-3">
                  <i className="fas fa-calendar-check text-muted-foreground text-sm" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{event.title}</p>
                    <p className="text-xs text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground">{event.type}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Events"
        subtitle="Stay connected with our upcoming events, fundraisers, and community gatherings."
        icon="fas fa-calendar-alt"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />
      <EventsList />
      <Footer />
    </main>
  );
}
