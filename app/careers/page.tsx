"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const jobs = [
  { title: "Program Coordinator", type: "Full-Time", location: "Nairobi, Kenya", icon: "fas fa-briefcase", description: "Manage and coordinate our education sponsorship programs across Kibera communities." },
  { title: "Community Outreach Officer", type: "Full-Time", location: "Nairobi, Kenya", icon: "fas fa-users", description: "Build relationships with local communities and expand our outreach initiatives." },
  { title: "Social Media & Communications", type: "Part-Time", location: "Remote", icon: "fas fa-bullhorn", description: "Create compelling content that shares our impact stories across social platforms." },
  { title: "Fundraising Intern", type: "Internship", location: "Remote / Nairobi", icon: "fas fa-user-graduate", description: "Support our fundraising team with donor management, events, and campaigns." },
];

function JobListings() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-briefcase" />
            Open Positions
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">Join Our Team</h2>
          <p className="mt-3 text-muted-foreground">We&apos;re looking for passionate people who want to make a real difference.</p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:border-accent/30"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <i className={`${job.icon} text-accent text-lg`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><i className="fas fa-clock text-accent" />{job.type}</span>
                      <span className="flex items-center gap-1"><i className="fas fa-map-marker-alt text-accent" />{job.location}</span>
                    </div>
                  </div>
                </div>
                <button className="shrink-0 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg">
                  <i className="fas fa-file-upload text-xs" /> Apply
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Careers"
        subtitle="Build your career while building brighter futures for children in Kenya."
        icon="fas fa-briefcase"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Careers" }]}
      />
      <JobListings />
      <Footer />
    </main>
  );
}
