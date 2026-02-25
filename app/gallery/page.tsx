"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Image from "next/image";

const galleryCategories = ["All", "Programs", "Events", "Community", "Children"];

// Use actual images from public/ provided by user
const galleryItems = [
  { id: 1, category: "Programs", type: "photo", image: "/56.jpg", title: "Talent Development Center Workshop", description: "Students learning painting during our weekly art class." },
  { id: 2, category: "Events", type: "photo", image: "/charity f.jpg", title: "Annual Community Festival", description: "Families gathering for our yearly celebration event." },
  { id: 3, category: "Children", type: "photo", image: "/charity.jpg", title: "Sponsored Students", description: "Our education sponsorship students at morning assembly." },
  { id: 4, category: "Community", type: "photo", image: "/clean up.jpg", title: "Community Meeting", description: "Local leaders discussing community development plans." },
  { id: 5, category: "Programs", type: "video", image: "/day.jpg", title: "Mentorship Session", description: "A glimpse into our weekly discipleship and mentorship gatherings." },
  { id: 6, category: "Events", type: "photo", image: "/feeding program.jpg", title: "Graduation Day", description: "Celebrating our program graduates and their achievements." },
  { id: 7, category: "Children", type: "photo", image: "/feeding.jpg", title: "After School Club", description: "Kids enjoying creative activities at our after-school program." },
  { id: 8, category: "Community", type: "photo", image: "/fun.jpg", title: "Kibera Tour Group", description: "Visitors experiencing Kibera's vibrant community spirit." },
  { id: 9, category: "Programs", type: "photo", image: "/goodies.jpg", title: "Stand with a Girl", description: "Young women participating in our mentorship circles." },
];

const gradients = [
  "from-coffee/30 to-accent/20",
  "from-accent/20 to-green/20",
  "from-green/20 to-coffee/30",
  "from-orange/20 to-accent/20",
  "from-coffee/20 to-green/30",
  "from-accent/30 to-orange/20",
  "from-green/30 to-coffee/20",
  "from-orange/30 to-green/20",
  "from-coffee/30 to-orange/20",
];

function GalleryGrid() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {/* Filters */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === cat ? "bg-accent text-accent-foreground shadow" : "bg-secondary text-muted-foreground hover:bg-accent/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden cursor-pointer"
            >
              <div className={`relative h-56 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center`}>
                {item.image ? (
                  <div className="absolute inset-0 h-full w-full relative">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                ) : (
                  <i className={`${item.type === "video" ? "fas fa-video" : "fas fa-image"} text-accent/30 text-4xl group-hover:scale-110 transition-transform`} />
                )}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/90 text-accent-foreground shadow-lg">
                      <i className="fas fa-play text-lg ml-0.5" />
                    </div>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-coffee-dark/0 group-hover:bg-coffee-dark/60 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                  <div className="flex items-center gap-3">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-background/20 text-cream hover:bg-background/40">
                      <i className="fas fa-download text-xs" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-background/20 text-cream hover:bg-background/40">
                      <i className="fas fa-share-alt text-xs" />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-background/20 text-cream hover:bg-background/40">
                      <i className="fas fa-expand text-xs" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                <span className="mt-2 inline-block rounded-full bg-secondary px-2 py-0.5 text-[10px] text-muted-foreground">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="Gallery"
        subtitle="Explore photos and videos from our programs, events, and community life."
        icon="fas fa-images"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />
      <GalleryGrid />
      <Footer />
    </main>
  );
}
