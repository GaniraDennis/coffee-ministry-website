import Header from "@/components/header";
import Link from "next/link";import Image from "next/image";import Footer from "@/components/footer";
import HeroSection from "@/components/home/hero-section";
import ImpactStats from "@/components/home/impact-stats";
import AboutPreview from "@/components/home/about-preview";
import MissionVision from "@/components/home/mission-vision";
import ProgramsShowcase from "@/components/home/programs-showcase";
import Testimonials from "@/components/home/testimonials";
import Partners from "@/components/home/partners";
import BlogPreview from "@/components/home/blog-preview";
import Newsletter from "@/components/home/newsletter";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutPreview />
      <MissionVision />
      <ProgramsShowcase />
      <ImpactStats />
      <section className="relative py-20 bg-coffee-dark text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/stand-with-a-girl.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-coffee-dark/90" />
        
        <div className="relative mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-cream">
            Join our community and be part of a movement sweeping across Nairobi's settlements.
          </h2>
          <Link
            href="/get-involved"
            className="mt-6 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground hover:shadow-lg transition-shadow"
          >
            Get Involved
          </Link>
        </div>
      </section>
      <Testimonials />
      <Partners />
      <BlogPreview />
      <Newsletter />
      <Footer />
    </main>
  );
}
