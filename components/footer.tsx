"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Careers", href: "/careers" },
  { name: "Annual Reports", href: "/reports" },
];

const programLinks = [
  { name: "Economic Empowerment", href: "/programs/economic-empowerment" },
  { name: "Child Protection & Education", href: "/programs/child-protection" },
  { name: "Gender Equity", href: "/programs/gender-equity" },
  { name: "Spiritual Discipleship", href: "/programs/spiritual-discipleship" },
];

const socialLinks = [
  { icon: "fab fa-facebook-f", href: "https://www.facebook.com/coffeeministry.ke", label: "Facebook" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/the_coffee_ministry/", label: "Instagram" },
  { icon: "fab fa-x-twitter", href: "https://x.com/ministry_coffee", label: "X" },
  { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/coffee-ministry-4857ab262/", label: "LinkedIn" },
  { icon: "fab fa-tiktok", href: "https://www.tiktok.com/@coffee_ministry", label: "TikTok" },
  { icon: "fab fa-youtube", href: "https://www.youtube.com/@thecoffeeministry2280/", label: "YouTube" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-coffee-dark text-cream/90">
      {/* Wave Divider */}
      <div className="absolute -top-px left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          className="w-full h-10 md:h-16"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,35 1440,30 L1440,60 L0,60 Z"
            fill="hsl(var(--coffee-dark))"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-16 pb-8 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            {/* logo at /public/TCM LOGO.png */}
            <Image
              src="/TCM LOGO.png"
              alt="The Coffee Ministry"
              width={140}
              height={60}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed text-cream/70 mb-6">
              A faith-based nonprofit empowering children in Kenya&apos;s
              marginalized communities through education, mentorship, and love.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-sm text-cream/70 transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/70 transition-colors hover:text-accent"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Programs
            </h4>
            <ul className="flex flex-col gap-2.5">
              {programLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-cream/70 transition-colors hover:text-accent"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cream">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-cream/70">
                <i className="fas fa-map-marker-alt mt-0.5 text-accent" />
                <span>Laini Saba, Kibera — P.O BOX 22068 - 00523, Nairobi</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <i className="fas fa-phone text-accent" />
                <span>+254 700 277112</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/70">
                <i className="fas fa-envelope text-accent" />
                <span>info@thecoffeeministry.org</span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-shadow hover:shadow-lg"
              >
                <i className="fas fa-heart text-xs" />
                Support Our Mission
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 md:flex-row">
          <p className="text-xs text-cream/50">
            <i className="far fa-copyright" /> {new Date().getFullYear()} The
            Coffee Ministry. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-cream/50">
            <Link href="#" className="hover:text-cream/80">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-cream/80">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-shadow hover:shadow-xl"
        aria-label="Back to top"
      >
        <i className="fas fa-chevron-up" />
      </motion.button>
    </footer>
  );
}
