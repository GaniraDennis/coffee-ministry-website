"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  icon?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageHero({ title, subtitle, icon, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-36 md:pb-24">
      {/* Decorative */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-accent blur-[120px]" />
        <div className="absolute bottom-0 left-20 h-48 w-48 rounded-full bg-green blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 text-sm text-cream/50"
          aria-label="Breadcrumb"
        >
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {i > 0 && <i className="fas fa-chevron-right text-[10px]" />}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-cream/80 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-cream/80">{crumb.label}</span>
              )}
            </span>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {icon && (
            <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20">
              <i className={`${icon} text-accent text-2xl`} />
            </div>
          )}
          <h1 className="text-4xl font-bold text-foreground md:text-5xl lg:text-6xl text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
