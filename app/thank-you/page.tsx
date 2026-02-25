"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <main>
      <Header />
      <section className="relative overflow-hidden bg-background pt-32 pb-32 min-h-[80vh] flex items-center">
        {/* Decorative */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-accent blur-[120px]" />
          <div className="absolute bottom-20 left-20 h-48 w-48 rounded-full bg-green blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green/10">
              <i className="fas fa-check-circle text-green text-5xl" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="text-4xl font-bold text-foreground md:text-5xl text-balance">Thank You!</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Your generosity is making a real difference in the lives of children in Kibera, Kenya.
              Every contribution brings hope and opportunity.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 rounded-2xl border border-border bg-card p-6"
          >
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
              <i className="fas fa-receipt text-accent" />
              A receipt has been sent to your email.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent/30">
                <i className="fas fa-download text-accent text-xs" /> Download Receipt
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground hover:border-accent/30">
                <i className="fas fa-share-alt text-accent text-xs" /> Share
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:shadow-lg">
              <i className="fas fa-home text-xs" /> Go Home
            </Link>
            <Link href="/programs" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-accent/30">
              <i className="fas fa-compass text-accent text-xs" /> Explore Programs
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
