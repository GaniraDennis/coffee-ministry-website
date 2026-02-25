"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const categories = ["All", "Impact Stories", "Community", "Education", "Events", "Updates"];

const posts = [
  {
    slug: "transforming-lives-through-education",
    title: "Transforming Lives Through Education in Kibera",
    excerpt: "How our education sponsorship program has changed the trajectory of hundreds of children in one of Africa's largest informal settlements.",
    category: "Education",
    date: "Jan 15, 2026",
    author: "Sarah Ochieng",
    readTime: "5 min",
    comments: 12,
    featured: true,
  },
  {
    slug: "talent-center-grand-opening",
    title: "Grand Opening: New Talent Development Center",
    excerpt: "Our brand-new Talent Development Center is officially open, offering creative arts, music, and technology training to young people.",
    category: "Events",
    date: "Dec 28, 2025",
    author: "James Mwangi",
    readTime: "4 min",
    comments: 8,
    featured: false,
  },
  {
    slug: "stand-with-a-girl-milestone",
    title: "Stand with a Girl Reaches 200 Mentees",
    excerpt: "Our girls' empowerment program celebrates a major milestone as we welcome our 200th mentee into the program.",
    category: "Impact Stories",
    date: "Dec 10, 2025",
    author: "Faith Wanjiku",
    readTime: "6 min",
    comments: 15,
    featured: false,
  },
  {
    slug: "community-health-initiative",
    title: "Launching Community Health Initiative",
    excerpt: "A new partnership brings healthcare access to families in marginalized communities through mobile clinics.",
    category: "Community",
    date: "Nov 25, 2025",
    author: "Dr. Peter Kamau",
    readTime: "3 min",
    comments: 6,
    featured: false,
  },
  {
    slug: "annual-report-2025",
    title: "2025 Annual Report: A Year of Growth",
    excerpt: "Reflecting on our accomplishments, challenges, and the incredible impact we've made together this year.",
    category: "Updates",
    date: "Nov 15, 2025",
    author: "The Coffee Ministry",
    readTime: "8 min",
    comments: 20,
    featured: false,
  },
  {
    slug: "boys-mentorship-success",
    title: "I Choose to Be Great: Boys Mentorship Success",
    excerpt: "Three young men from our boys mentorship program share their journey from Kibera to university scholarships.",
    category: "Impact Stories",
    date: "Oct 30, 2025",
    author: "Daniel Otieno",
    readTime: "7 min",
    comments: 18,
    featured: false,
  },
];

const popularPosts = posts.slice(0, 3);
const recentTags = ["Education", "Kibera", "Mentorship", "Youth", "Community", "Fundraising", "Volunteer", "Impact"];

function BlogGrid() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Search & Filter */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative max-w-sm w-full">
            <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-input bg-background py-2.5 pl-10 pr-4 text-sm text-foreground outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeCategory === cat ? "bg-accent text-accent-foreground" : "bg-secondary text-muted-foreground hover:bg-accent/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="grid gap-8 sm:grid-cols-2">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 bg-gradient-to-br from-coffee/20 to-accent/20 flex items-center justify-center overflow-hidden">
                    <i className="fas fa-newspaper text-accent/30 text-5xl group-hover:scale-110 transition-transform" />
                    <div className="absolute top-3 left-3 rounded-full bg-accent/90 px-3 py-1 text-[10px] font-semibold text-accent-foreground uppercase tracking-wider">
                      <i className="fas fa-tag mr-1" />
                      {post.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><i className="fas fa-calendar-alt" />{post.date}</span>
                      <span className="flex items-center gap-1"><i className="fas fa-clock" />{post.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground leading-snug text-balance group-hover:text-accent transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <i className="fas fa-user text-accent" />{post.author}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <i className="fas fa-comments" />{post.comments}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="py-20 text-center text-muted-foreground">
                <i className="fas fa-search text-3xl mb-4 block" />
                <p>No posts found matching your search.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="flex flex-col gap-8">
            {/* Popular Posts */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                <i className="fas fa-fire text-accent" /> Popular Posts
              </h3>
              <div className="flex flex-col gap-4">
                {popularPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                      <i className="fas fa-newspaper text-accent text-xs" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground leading-snug group-hover:text-accent transition-colors">{p.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{p.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-foreground">
                <i className="fas fa-tags text-accent" /> Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {recentTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground hover:bg-accent/10 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6">
              <h3 className="mb-2 flex items-center gap-2 text-lg font-bold text-foreground">
                <i className="fas fa-envelope-open-text text-accent" /> Newsletter
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Get the latest stories and updates delivered to your inbox.</p>
              <input
                type="email"
                placeholder="your@email.com"
                className="mb-3 w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-accent"
              />
              <button className="w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground">
                <i className="fas fa-paper-plane mr-2 text-xs" />
                Subscribe
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default function BlogPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Blog & News"
        subtitle="Stories of impact, community updates, and the latest from The Coffee Ministry."
        icon="fas fa-blog"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <BlogGrid />
      <Footer />
    </main>
  );
}
