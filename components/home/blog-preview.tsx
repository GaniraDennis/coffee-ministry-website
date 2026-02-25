"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const posts = [
  {
    title: "How Education is Breaking the Cycle of Poverty in Kibera",
    excerpt: "Discover how our education sponsorship program is creating lasting change in one of Africa's largest informal settlements.",
    category: "Education",
    date: "Jan 15, 2026",
    readTime: "5 min read",
    slug: "education-breaking-poverty-cycle",
    image: "/clean-up.jpg",
  },
  {
    title: "Meet the Graduates: Class of 2025 Success Stories",
    excerpt: "Celebrating the achievements of our latest graduates who defied the odds to complete their education.",
    category: "Stories",
    date: "Jan 8, 2026",
    readTime: "4 min read",
    slug: "graduates-class-2025",
    image: "/day.jpg",
  },
  {
    title: "Expanding Our Reach: New Community Programs for 2026",
    excerpt: "An exciting update on our plans to launch new programs in three additional communities this year.",
    category: "News",
    date: "Dec 28, 2025",
    readTime: "3 min read",
    slug: "expanding-reach-2026",
    image: "/fun.jpg",
  },
];

export default function BlogPreview() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left"
        >
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              <i className="fas fa-newspaper" />
              Latest News
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl text-balance">
              Stories From the Field
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border-2 border-accent px-6 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-accent-foreground"
          >
            View All Posts
            <i className="fas fa-arrow-right text-xs" />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-background overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative aspect-video w-full bg-secondary overflow-hidden">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <i className="fas fa-newspaper text-3xl text-muted-foreground/30" />
                    </div>
                  )}
                </motion.div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 font-medium text-accent">
                      <i className="fas fa-tag text-[10px]" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-calendar-alt text-[10px]" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground group-hover:text-accent transition-colors text-balance">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-clock" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-accent group-hover:gap-2 transition-all">
                      Read More
                      <i className="fas fa-arrow-right text-[10px]" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
