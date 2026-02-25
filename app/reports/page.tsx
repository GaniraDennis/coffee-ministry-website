"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const reports = [
  { year: "2025", title: "Annual Report 2025", description: "A comprehensive look at our programs, finances, and impact over the past year.", highlights: ["500+ children sponsored", "$250K raised", "7 active programs"] },
  { year: "2024", title: "Annual Report 2024", description: "Growth, partnerships, and expanding our reach in Kibera and beyond.", highlights: ["400+ children sponsored", "$180K raised", "5 active programs"] },
  { year: "2023", title: "Annual Report 2023", description: "Launching new programs and strengthening community connections.", highlights: ["300+ children sponsored", "$120K raised", "4 active programs"] },
  { year: "2022", title: "Annual Report 2022", description: "Recovering from COVID-19 and building back stronger for our communities.", highlights: ["200+ children sponsored", "$80K raised", "3 active programs"] },
];

function ReportsList() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <div className="flex flex-col gap-6">
          {reports.map((report, i) => (
            <motion.div
              key={report.year}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                    <i className="far fa-file-pdf text-accent text-xl" />
                  </div>
                  <div>
                    <div className="mb-1 inline-flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-xs font-semibold text-muted-foreground">
                      {report.year}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{report.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{report.description}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {report.highlights.map((h) => (
                        <span key={h} className="flex items-center gap-1 rounded-full bg-green/10 px-2.5 py-0.5 text-xs text-green font-medium">
                          <i className="fas fa-check text-[8px]" /> {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:shadow-lg">
                    <i className="fas fa-download text-xs" /> Download
                  </button>
                  <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/30">
                    <i className="fas fa-eye text-xs text-accent" /> View
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ReportsPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Annual Reports"
        subtitle="Transparency and accountability are core to our mission. View our annual reports."
        icon="fas fa-chart-bar"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Annual Reports" }]}
      />
      <ReportsList />
      <Footer />
    </main>
  );
}
