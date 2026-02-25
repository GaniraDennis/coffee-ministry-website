"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";

const posts: Record<string, { title: string; category: string; date: string; author: string; readTime: string; content: string[] }> = {
  "transforming-lives-through-education": {
    title: "Transforming Lives Through Education in Kibera",
    category: "Education",
    date: "January 15, 2026",
    author: "Sarah Ochieng",
    readTime: "5 min read",
    content: [
      "Education is the most powerful weapon which you can use to change the world. In Kibera, one of Africa's largest informal settlements, this truth rings louder than ever. The Coffee Ministry's education sponsorship program has been at the forefront of transforming young lives through the power of learning.",
      "Since our inception, we have sponsored over 500 children through primary and secondary school. Each child receives not just tuition support, but comprehensive care including school supplies, uniforms, daily meals, and mentorship. This holistic approach ensures that children can focus on their studies without worrying about basic needs.",
      "One of our greatest success stories is Amara, who joined our program at age 6. Today, she's a top student at her school with dreams of becoming a doctor. 'Before The Coffee Ministry, I didn't think school was possible for me,' she says. 'Now I know I can achieve anything.'",
      "Our education program doesn't just benefit individual children - it transforms entire families and communities. When one child succeeds, they become a beacon of hope for others. Parents become more engaged in their children's education, siblings are inspired to excel, and the community's perspective on education shifts.",
      "Looking ahead, we plan to expand our education sponsorship to reach 1,000 children by 2027. This ambitious goal requires dedicated sponsors, volunteers, and partners who believe in the transformative power of education. Together, we can ensure that every child in Kibera has access to quality education.",
    ],
  },
  "talent-center-grand-opening": {
    title: "Grand Opening: New Talent Development Center",
    category: "Events",
    date: "December 28, 2025",
    author: "James Mwangi",
    readTime: "4 min read",
    content: [
      "After months of construction and preparation, The Coffee Ministry is thrilled to announce the grand opening of our new Talent Development Center in the heart of Kibera. This state-of-the-art facility represents a major milestone in our mission to empower young people through creative arts and skills development.",
      "The center features dedicated spaces for visual arts, music, dance, drama, and digital technology. Equipped with professional-grade tools and materials, it provides young people with the resources they need to discover and develop their talents.",
      "At the opening ceremony, over 200 community members, sponsors, and partners gathered to celebrate. Young artists displayed their work, musicians performed original compositions, and dancers showcased choreography they had been developing for months.",
      "The Talent Development Center will serve as a hub for creativity and innovation, offering daily workshops, weekly classes, and monthly exhibitions. Our goal is to nurture the next generation of artists, musicians, and creative entrepreneurs from Kibera.",
    ],
  },
};

const defaultPost = {
  title: "Blog Post",
  category: "General",
  date: "2026",
  author: "The Coffee Ministry",
  readTime: "3 min read",
  content: ["This blog post is coming soon. Check back later for the full story."],
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = posts[slug] || defaultPost;

  return (
    <main>
      <Header />
      {/* Hero */}
      <section className="relative overflow-hidden bg-coffee-dark pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 h-64 w-64 rounded-full bg-accent blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 lg:px-8">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 flex items-center gap-2 text-sm text-cream/50">
            <Link href="/" className="hover:text-cream/80">Home</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <Link href="/blog" className="hover:text-cream/80">Blog</Link>
            <i className="fas fa-chevron-right text-[10px]" />
            <span className="text-cream/80">{post.category}</span>
          </motion.nav>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
              <i className="fas fa-tag" /> {post.category}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-cream md:text-4xl lg:text-5xl text-balance leading-tight">{post.title}</h1>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-cream/50">
              <span className="flex items-center gap-1"><i className="fas fa-user" /> {post.author}</span>
              <span className="flex items-center gap-1"><i className="fas fa-calendar-alt" /> {post.date}</span>
              <span className="flex items-center gap-1"><i className="fas fa-clock" /> {post.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="prose-custom">
            {post.content.map((paragraph, i) => (
              <p key={i} className="mb-6 text-foreground leading-relaxed">{paragraph}</p>
            ))}
          </motion.article>

          {/* Share */}
          <div className="mt-12 border-t border-border pt-8">
            <p className="mb-3 text-sm font-semibold text-foreground">Share this article</p>
            <div className="flex items-center gap-3">
              {[
                { icon: "fab fa-facebook-f", label: "Facebook" },
                { icon: "fab fa-twitter", label: "Twitter" },
                { icon: "fab fa-linkedin-in", label: "LinkedIn" },
                { icon: "fab fa-whatsapp", label: "WhatsApp" },
              ].map((social) => (
                <button key={social.label} className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors" aria-label={`Share on ${social.label}`}>
                  <i className={social.icon} />
                </button>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
              <i className="fas fa-arrow-left" /> Back to all posts
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
