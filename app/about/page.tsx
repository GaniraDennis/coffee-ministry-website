"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import ImpactNumbers from "@/components/home/impact-stats";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <PageHero
        title="About The Coffee Ministry"
        subtitle="A faith-based nonprofit empowering children and youth in Kenya's underserved communities."
        icon="fas fa-info-circle"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <p>The Coffee Ministry is a child- and youth-centered community organization operating in underserved urban settlements in Kenya. We implement structured programs that address barriers to education, youth unemployment, gender inequality, digital exclusion, and child protection risks.</p>
          <p>Our model integrates education access, leadership development, safeguarding compliance, and long-term sustainability planning to ensure measurable and lasting impact.</p>

          {/* Image section */}
          <div className="grid grid-cols-2 gap-4 my-8">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative h-64 rounded-lg overflow-hidden group">
              <Image src="/56.jpg" alt="Children learning" fill className="object-cover transition-transform group-hover:scale-110" />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative h-64 rounded-lg overflow-hidden group">
              <Image src="/charity-f.jpg" alt="Feeding program" fill className="object-cover transition-transform group-hover:scale-110" />
            </motion.div>
          </div>

          <h3 className="text-2xl font-semibold text-foreground">Organizational Overview</h3>
          <p>As part of our growth strategy, we are strengthening governance structures and preparing for future transition into a foundation framework to expand scale, partnerships, and sustainability.</p>

          <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
          <p>To empower young people and children in marginalized communities by improving access to education, leadership development, protection systems, and long-term opportunity.</p>

          <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
          <p>A future where every young person and child, regardless of background, has equitable access to education, safety, dignity, and economic opportunity.</p>

          <h3 className="text-2xl font-semibold text-foreground">Our Core Values</h3>
          <ul className="list-disc list-inside space-y-2 text-foreground">
            <li><strong>Child-Centered Focus</strong> – We prioritize the safety, dignity, and best interests of every child.</li>
            <li><strong>Integrity &amp; Accountability</strong> – We commit to responsible stewardship of resources and transparent reporting.</li>
            <li><strong>Inclusion &amp; Equity</strong> – We believe opportunity should not be limited by poverty or gender.</li>
            <li><strong>Community Partnership</strong> – We work alongside families and local stakeholders to build sustainable solutions.</li>
            <li><strong>Continuous Growth</strong> – We are committed to strengthening systems, governance, and long-term impact.</li>
          </ul>
        </div>
      </section>

      {/* programs section */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Our Programs</h3>
          <p>Economic empowerment programs preparing youth with marketable skills in coding, hospitality, and agriculture.</p>
          <p>Child protection &amp; education ensuring 2,500+ receive free schooling, tutoring, nutritional support and protective case management.</p>
          <p>Gender equity through mentorship, hygiene education, and life skills for girls and young women.</p>
          <p>Spiritual discipleship nurturing character and leadership through mentorship, sports, and Bible study.</p>
        </div>
      </section>

      {/* impact section */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Our Impact</h3>
          <p>Thousands of lives have been transformed through education, meals, and safe spaces; many alumni are now employed or pursuing higher education.</p>
          <ImpactNumbers />
        </div>
      </section>

      {/* sustainability */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Sustainability</h3>
          <p>We pursue a mix of donor support, social enterprise & local partnerships to ensure long‑term stability. Transparency and stewardship drive every financial decision.</p>
        </div>
      </section>

      {/* investment opportunities */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Investment Opportunities</h3>
          <p>Join us as a monthly sponsor, corporate partner, or legacy donor. Customized partnership packages align with your philanthropic goals.</p>
        </div>
      </section>

      {/* governance */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Governance</h3>
          <p>Our board comprises local leaders and international advisors. Regular audits, annual reports, and strict child protection policies keep us accountable.</p>
        </div>
      </section>

      {/* get involved */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Get Involved</h3>
          <p>Volunteer, sponsor a child, participate in our cultural tours, or simply spread the word. Every action moves us closer to a future where no child is left behind.</p>
          <Link href="/get-involved" className="inline-block rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground">
            Learn How to Help
          </Link>
        </div>
      </section>

      {/* contact snippet */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">Contact</h3>
          <p>Reach us at <a href="mailto:info@coffee-ministry.org" className="text-accent underline">info@coffee-ministry.org</a> or call +254-723-317-197.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
