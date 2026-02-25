"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AboutPreview() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <Image
                    src="/charity.jpg"
                    alt="Children receiving support"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/feeding.jpg"
                    alt="Feeding program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="/soccer.jpg"
                    alt="Youth activities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
                  <Image
                    src="/stand-with-a-girl.jpg"
                    alt="Stand With a Girl program"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full border-4 border-accent/20" />
            <div className="absolute -top-6 -right-6 h-16 w-16 rounded-full bg-accent/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <i className="fas fa-info-circle" />
              About Us
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Investing in Children, Transforming Communities
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              When you invest in TCM, you’re investing in far more than just kids
              – you’re investing in hope, opportunity, and a brighter future for
              entire communities.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every child we reach is a step toward healthier families, safer
              neighbourhoods and a brighter future for the whole city.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our programs are designed to break the cycle of poverty by
              combining education, protection, spiritual formation, vocational
              training, and community development.
            </p>

            {/* Keep values list if still desired or remove entirely -- leaving basic list for now */}
            <div className="mt-8">
              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>Faith-centered, child-focused programming</li>
                <li>Community partnerships built on trust and respect</li>
                <li>Commitment to transparency, protection and sustainability</li>
              </ul>
            </div>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent/80 group"
            >
              Read Our Story
              <i className="fas fa-arrow-right text-xs transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
