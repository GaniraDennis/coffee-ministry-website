"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  {
    name: "Get Involved",
    href: "/get-involved",
    children: [
      { name: "Volunteer", href: "/get-involved#volunteer", icon: "fas fa-hands-helping" },
      { name: "Donate", href: "/donate", icon: "fas fa-donate" },
      { name: "Sponsor a Child", href: "/sponsor", icon: "fas fa-hand-holding-heart" },
      { name: "Partner With Us", href: "/get-involved#partner", icon: "fas fa-handshake" },
      { name: "Gallery", href: "/gallery", icon: "fas fa-images" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-border transition-all duration-500"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group relative flex-shrink-0">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            {/* logo file at /public/TCM LOGO.png */}
            <Image
              src="/TCM LOGO.png"
              alt="The Coffee Ministry"
              width={180}
              height={80}
              className="h-16 w-auto lg:h-20"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button
                  className="flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-colors text-foreground hover:bg-secondary"
                >
                  {link.name}
                  <i
                    className={`fas fa-chevron-down text-[10px] transition-transform ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-border bg-background p-3 shadow-xl"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
                        >
                          <i className={`${child.icon} text-accent w-5 text-center`} />
                          {child.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium transition-colors text-foreground hover:bg-secondary"              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="hidden rounded-full p-2.5 transition-colors lg:block text-foreground hover:bg-secondary"
            aria-label="Search"
          >
            <i className="fas fa-search text-sm" />
          </button>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:shadow-xl animate-pulse-glow"
          >
            <i className="fas fa-heart text-xs" />
            <span>Make A Difference</span>
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  mobileOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background"
          >
            <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
              <i className="fas fa-search text-muted-foreground" />
              <input
                type="text"
                placeholder="Search programs, stories, resources..."
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <i className="fas fa-times" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 bg-background lg:hidden"
          >
            <div className="flex h-full flex-col pt-20 px-6 pb-8 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {link.children ? (
                    <div className="border-b border-border py-4">
                      <p className="mb-3 text-lg font-semibold text-foreground">{link.name}</p>
                      <div className="flex flex-col gap-1 pl-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                          >
                            <i className={`${child.icon} text-accent w-5 text-center`} />
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-border py-4 text-lg font-semibold text-foreground transition-colors hover:text-accent"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  href="/donate"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-accent-foreground shadow-lg"
                >
                  <i className="fas fa-heart" />
                  Make A Difference
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
