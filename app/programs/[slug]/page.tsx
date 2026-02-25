"use client";

import { use } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const programData: Record<string, {
  title: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  impact: { label: string; value: string; icon: string }[];
  howItWorks: { title: string; description: string; icon: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  "economic-empowerment": {
    title: "Economic Empowerment",
    icon: "fas fa-briefcase",
    description: "Skills training in coding, hospitality, and agriculture equips youth with marketable careers.",
    longDescription: "Our economic empowerment initiatives provide practical vocational training in sectors with high local demand such as software, hospitality, and sustainable agriculture. Participants graduate with real-world skills and connections to employment opportunities or micro‑enterprise support.",
    features: [
      "Coding bootcamps and digital skills",
      "Hospitality and customer service training",
      "Agriculture and urban farming workshops",
      "Entrepreneurship and business development",
      "Job placement assistance",
      "Micro‑loan referrals",
    ],
    impact: [
      { label: "Youth Trained", value: "300+", icon: "fas fa-graduation-cap" },
      { label: "Jobs Secured", value: "120+", icon: "fas fa-briefcase" },
      { label: "Micro‑enterprises", value: "45+", icon: "fas fa-store" },
    ],
    howItWorks: [
      { title: "Enroll", description: "Young people sign up through community centers.", icon: "fas fa-user-plus" },
      { title: "Train", description: "Hands‑on classes led by industry professionals.", icon: "fas fa-tools" },
      { title: "Graduate", description: "Participants complete projects and receive certification.", icon: "fas fa-certificate" },
      { title: "Launch", description: "Support with job placement or business start‑up.", icon: "fas fa-rocket" },
    ],
    faqs: [
      { question: "Who can join?", answer: "Any youth aged 15-25 living in our partner communities." },
      { question: "Is there a fee?", answer: "No, all training is fully subsidized by donors." },
      { question: "How long are the courses?", answer: "Programs typically run 3–6 months depending on specialization." },
    ],
  },
  "child-protection": {
    title: "Child Protection & Education",
    icon: "fas fa-shield-alt",
    description: "Comprehensive support to keep children safe and learning.",
    longDescription: "More than 2,500 children receive free schooling, tutoring, nutritious meals and protective case management through our combined education and safeguarding program. We work closely with families and local authorities to ensure each child is safe, healthy and able to pursue their education.",
    features: [
      "Free school fees, uniforms and books",
      "Daily meal program",
      "After‑school tutoring and mentorship",
      "Child protection case teams",
      "Family outreach and counseling",
    ],
    impact: [
      { label: "Children Supported", value: "2,500+", icon: "fas fa-child" },
      { label: "Meals Served", value: "50,000+", icon: "fas fa-utensils" },
      { label: "Safety Cases", value: "1,200+", icon: "fas fa-shield-alt" },
    ],
    howItWorks: [
      { title: "Identify", description: "Vulnerable children are referred by schools and social workers.", icon: "fas fa-search" },
      { title: "Enroll", description: "Children are enrolled into the education package.", icon: "fas fa-school" },
      { title: "Support", description: "Regular monitoring ensures safety and academic progress.", icon: "fas fa-hand-holding-heart" },
      { title: "Graduate", description: "Graduates transition into higher education or vocational training.", icon: "fas fa-graduation-cap" },
    ],
    faqs: [
      { question: "Can outsiders sponsor a specific child?", answer: "Yes, sponsors can select children and receive progress reports." },
      { question: "How is child safety maintained?", answer: "Our staff are trained in child protection and we conduct regular home visits." },
    ],
  },
  "gender-equity": {
    title: "Gender Equity",
    icon: "fas fa-venus",
    description: "Empowering girls and young women through mentorship and education.",
    longDescription: "Our gender equity program offers mentorship, hygiene education, life skills, and leadership training to girls and young women. Participants gain confidence, practical knowledge, and access to education and economic opportunities.",
    features: [
      "Life skills and hygiene workshops",
      "Reproductive health education",
      "Leadership and advocacy training",
      "Mentor pairings and peer groups",
    ],
    impact: [
      { label: "Girls Served", value: "200+", icon: "fas fa-female" },
      { label: "Workshops Held", value: "150+", icon: "fas fa-book" },
      { label: "Leaders Trained", value: "75+", icon: "fas fa-star" },
    ],
    howItWorks: [
      { title: "Join", description: "Girls enroll through school programs and referrals.", icon: "fas fa-user-plus" },
      { title: "Learn", description: "Attend regular workshops and mentorship sessions.", icon: "fas fa-school" },
      { title: "Act", description: "Participants lead community initiatives.", icon: "fas fa-hands-helping" },
      { title: "Grow", description: "Graduates mentor the next cohort.", icon: "fas fa-seedling" },
    ],
    faqs: [
      { question: "What age groups are eligible?", answer: "Our program serves girls aged 10–21." },
      { question: "Can boys join?", answer: "The primary focus is girls, but we involve boys in gender‑sensitivity workshops." },
    ],
  },
  "spiritual-discipleship": {
    title: "Spiritual Discipleship",
    icon: "fas fa-pray",
    description: "Nurturing character and leadership through faith-based mentoring.",
    longDescription: "Through mentorship, sports, Bible study, and worship activities, our spiritual discipleship program develops Christ‑centered character and leadership among youth. Participants are equipped to serve as positive role models in their communities.",
    features: [
      "Weekly Bible study groups",
      "Sports and team-building activities",
      "One-on-one mentoring",
      "Leadership retreats",
    ],
    impact: [
      { label: "Youth Involved", value: "300+", icon: "fas fa-users" },
      { label: "Mentors", value: "40+", icon: "fas fa-user-friends" },
      { label: "Retreats", value: "6/year", icon: "fas fa-campground" },
    ],
    howItWorks: [
      { title: "Welcome", description: "Youth are invited into our community space.", icon: "fas fa-door-open" },
      { title: "Study", description: "Engage in Bible study and group discussions.", icon: "fas fa-book" },
      { title: "Mentor", description: "Pair with a trained spiritual mentor.", icon: "fas fa-user-friends" },
      { title: "Serve", description: "Apply what they learn through service projects.", icon: "fas fa-heart" },
    ],
    faqs: [
      { question: "Is this only for Christians?", answer: "While Christ-centered, all are welcome to participate." },
      { question: "How can I become a mentor?", answer: "Volunteers receive training and go through a screening process." },
    ],
  },
  "talent-development": {
    title: "Talent Development Center",
    icon: "fas fa-palette",
    description: "Nurturing creative talents in art, music, dance, and technology.",
    longDescription: "The Talent Development Center provides a safe space for children and young people to discover, nurture, and develop their God-given talents. Through structured programs in visual arts, performing arts, music, dance, and technology, we equip children with skills that open doors to meaningful careers and creative expression.",
    features: [
      "Art and painting workshops",
      "Music lessons (instruments and voice)",
      "Dance and choreography classes",
      "Digital literacy and coding",
      "Annual talent showcase events",
      "Mentorship from professional artists",
    ],
    impact: [
      { label: "Children Enrolled", value: "150+", icon: "fas fa-child" },
      { label: "Classes Per Week", value: "20+", icon: "fas fa-calendar" },
      { label: "Talent Shows", value: "12/yr", icon: "fas fa-star" },
      { label: "Graduates Employed", value: "45+", icon: "fas fa-briefcase" },
    ],
    howItWorks: [
      { title: "Enroll", description: "Children are identified and enrolled through community outreach.", icon: "fas fa-user-plus" },
      { title: "Discover", description: "Talent assessments help identify each child's unique gifts.", icon: "fas fa-search" },
      { title: "Develop", description: "Structured classes with professional trainers build skills.", icon: "fas fa-tools" },
      { title: "Showcase", description: "Regular events let children perform and exhibit their work.", icon: "fas fa-theater-masks" },
    ],
    faqs: [
      { question: "What age groups do you serve?", answer: "We serve children aged 6-18, with specialized programs for different age groups." },
      { question: "Is there a cost to participate?", answer: "No, all programs are free of charge. We are fully funded through donations and sponsorships." },
      { question: "How can I support this program?", answer: "You can support through monthly donations, sponsoring a child, or volunteering your skills as a mentor." },
    ],
  },
  "education-sponsorship": {
    title: "Education Sponsorship",
    icon: "fas fa-school",
    description: "Full academic scholarships for children who cannot afford education.",
    longDescription: "Our Education Sponsorship program provides comprehensive support for children from marginalized communities to access quality education. This includes school fees, uniforms, books, supplies, and a daily feeding program to ensure children can focus on learning.",
    features: ["Full tuition coverage", "School uniforms and supplies", "Daily school meals", "After-school tutoring", "Academic mentorship", "Parent engagement programs"],
    impact: [
      { label: "Students Sponsored", value: "500+", icon: "fas fa-graduation-cap" },
      { label: "Graduation Rate", value: "92%", icon: "fas fa-chart-line" },
      { label: "Partner Schools", value: "12", icon: "fas fa-school" },
      { label: "Meals Served Monthly", value: "10K+", icon: "fas fa-utensils" },
    ],
    howItWorks: [
      { title: "Identify", description: "Community workers identify children in need of sponsorship.", icon: "fas fa-search-plus" },
      { title: "Match", description: "Children are matched with sponsors who fund their education.", icon: "fas fa-handshake" },
      { title: "Support", description: "Comprehensive support including meals, supplies, and tutoring.", icon: "fas fa-hand-holding-heart" },
      { title: "Graduate", description: "Children complete their education and pursue higher learning.", icon: "fas fa-graduation-cap" },
    ],
    faqs: [
      { question: "How much does it cost to sponsor a child?", answer: "Full sponsorship is $50 per month, covering tuition, meals, uniform, and supplies." },
      { question: "Can I communicate with my sponsored child?", answer: "Yes! We facilitate regular updates, letters, and even video calls between sponsors and children." },
      { question: "What happens after secondary school?", answer: "We help connect graduates with vocational training, university scholarships, and employment opportunities." },
    ],
  },
  "stand-with-a-girl": {
    title: "Stand with a Girl",
    icon: "fas fa-female",
    description: "Empowering young girls through mentorship and life skills.",
    longDescription: "Stand with a Girl is our comprehensive girls empowerment program that provides mentorship, life skills training, reproductive health education, and economic empowerment for vulnerable girls in Kibera and surrounding communities.",
    features: ["Weekly mentorship sessions", "Reproductive health education", "Life skills workshops", "Economic empowerment training", "Safe space gatherings", "Leadership development"],
    impact: [
      { label: "Girls Enrolled", value: "200+", icon: "fas fa-female" },
      { label: "Mentors Active", value: "30+", icon: "fas fa-user-friends" },
      { label: "Sessions Per Year", value: "100+", icon: "fas fa-calendar" },
      { label: "Success Stories", value: "150+", icon: "fas fa-star" },
    ],
    howItWorks: [
      { title: "Outreach", description: "Identify vulnerable girls through community networks.", icon: "fas fa-search" },
      { title: "Mentor", description: "Pair each girl with a trained female mentor.", icon: "fas fa-user-friends" },
      { title: "Train", description: "Life skills, health education, and leadership training.", icon: "fas fa-book" },
      { title: "Empower", description: "Girls become advocates and leaders in their communities.", icon: "fas fa-fist-raised" },
    ],
    faqs: [
      { question: "What age range does this program serve?", answer: "We serve girls aged 10-21 with age-appropriate programming." },
      { question: "How are mentors selected?", answer: "Mentors go through a rigorous vetting process and receive specialized training." },
      { question: "Can I volunteer as a mentor?", answer: "Yes! We welcome female volunteers who are passionate about empowering girls." },
    ],
  },
  "boys-mentorship": {
    title: "I Choose to Be Great",
    icon: "fas fa-male",
    description: "Boys mentorship developing character and positive masculinity.",
    longDescription: "I Choose to Be Great is our transformative boys mentorship program that develops character, leadership, and positive masculinity in young men through faith-based discipleship, life skills training, and community engagement.",
    features: ["Character development workshops", "Leadership training", "Sports and recreation", "Career guidance", "Faith-based discipleship", "Community service projects"],
    impact: [
      { label: "Boys Enrolled", value: "180+", icon: "fas fa-male" },
      { label: "Male Mentors", value: "25+", icon: "fas fa-user-friends" },
      { label: "Community Projects", value: "20+", icon: "fas fa-project-diagram" },
      { label: "Alumni Network", value: "100+", icon: "fas fa-users" },
    ],
    howItWorks: [
      { title: "Recruit", description: "Boys are recruited through schools and community outreach.", icon: "fas fa-bullhorn" },
      { title: "Mentor", description: "Weekly sessions with trained male mentors.", icon: "fas fa-user-friends" },
      { title: "Develop", description: "Character building, sports, and leadership activities.", icon: "fas fa-dumbbell" },
      { title: "Lead", description: "Boys become peer mentors and community leaders.", icon: "fas fa-crown" },
    ],
    faqs: [
      { question: "What age group is this for?", answer: "The program serves boys aged 10-21." },
      { question: "What makes this different from other mentorship programs?", answer: "Our faith-centered approach addresses the whole person - spiritual, emotional, and physical development." },
      { question: "How can I support?", answer: "You can donate, volunteer as a mentor, or sponsor sports equipment and program materials." },
    ],
  },
  "kibera-tours": {
    title: "Kibera Tours & Tuition Support",
    icon: "fas fa-route",
    description: "Community-led tours funding education in Kibera.",
    longDescription: "Our Kibera Tours provide authentic, respectful community experiences led by local guides while generating funds that directly support children's education. Visitors gain insight into the resilience and creativity of Kibera's residents.",
    features: ["Community-led walking tours", "Cultural immersion experiences", "Local artisan visits", "School and program visits", "Photography opportunities", "Direct impact funding"],
    impact: [
      { label: "Tours Conducted", value: "500+", icon: "fas fa-route" },
      { label: "Children Funded", value: "300+", icon: "fas fa-child" },
      { label: "Local Guides", value: "15+", icon: "fas fa-map-signs" },
      { label: "Countries Reached", value: "40+", icon: "fas fa-globe" },
    ],
    howItWorks: [
      { title: "Book", description: "Schedule your tour online or through our partners.", icon: "fas fa-calendar-check" },
      { title: "Experience", description: "Guided walk through Kibera with a community member.", icon: "fas fa-walking" },
      { title: "Connect", description: "Meet children, visit schools, and see programs in action.", icon: "fas fa-handshake" },
      { title: "Impact", description: "Your tour fee directly funds children's education.", icon: "fas fa-heart" },
    ],
    faqs: [
      { question: "How long is a typical tour?", answer: "Tours range from 2-4 hours depending on the package." },
      { question: "Is it safe?", answer: "Yes, all tours are led by trained local guides who know the community well." },
      { question: "How much goes to education?", answer: "80% of tour proceeds go directly to children's tuition support." },
    ],
  },
  "daycare": {
    title: "Daycare & Young Mothers Program",
    icon: "fas fa-baby",
    description: "Supporting young mothers with childcare and vocational training.",
    longDescription: "Our Daycare and Young Mothers Program provides a comprehensive support system for young mothers, offering quality childcare, vocational training, counseling, and pathways to self-sufficiency and independence.",
    features: ["Quality daycare services", "Vocational skills training", "Counseling and therapy", "Business development support", "Parenting classes", "Peer support groups"],
    impact: [
      { label: "Mothers Supported", value: "80+", icon: "fas fa-female" },
      { label: "Children in Daycare", value: "100+", icon: "fas fa-baby" },
      { label: "Businesses Started", value: "25+", icon: "fas fa-store" },
      { label: "Skills Trained", value: "10+", icon: "fas fa-tools" },
    ],
    howItWorks: [
      { title: "Enroll", description: "Young mothers register for daycare and training programs.", icon: "fas fa-user-plus" },
      { title: "Care", description: "Children receive quality daycare while mothers train.", icon: "fas fa-baby" },
      { title: "Train", description: "Vocational skills, business development, and life skills.", icon: "fas fa-graduation-cap" },
      { title: "Launch", description: "Mothers start businesses and achieve independence.", icon: "fas fa-rocket" },
    ],
    faqs: [
      { question: "What age must the child be?", answer: "We accept children from 6 months to 5 years old." },
      { question: "What vocational skills are offered?", answer: "Tailoring, hairdressing, baking, beadwork, and digital skills." },
      { question: "Is there a fee?", answer: "Services are subsidized. Mothers pay a small fee based on ability." },
    ],
  },
  "mentorship": {
    title: "Mentorship & Discipleship",
    icon: "fas fa-pray",
    description: "Faith-based mentoring building spiritual foundations.",
    longDescription: "Our Mentorship & Discipleship program builds strong spiritual foundations in children and young people through Bible study, prayer, worship, and one-on-one mentoring relationships that nurture Christ-centered character and leadership.",
    features: ["Weekly Bible studies", "One-on-one mentoring", "Worship and prayer sessions", "Leadership conferences", "Spiritual retreats", "Community outreach training"],
    impact: [
      { label: "Youth Mentored", value: "250+", icon: "fas fa-pray" },
      { label: "Bible Study Groups", value: "15+", icon: "fas fa-book-open" },
      { label: "Youth Leaders", value: "40+", icon: "fas fa-crown" },
      { label: "Retreats Per Year", value: "4", icon: "fas fa-campground" },
    ],
    howItWorks: [
      { title: "Welcome", description: "Youth are welcomed into fellowship and community.", icon: "fas fa-door-open" },
      { title: "Disciple", description: "Structured Bible study and spiritual formation.", icon: "fas fa-bible" },
      { title: "Mentor", description: "One-on-one mentoring for personal growth.", icon: "fas fa-user-friends" },
      { title: "Send", description: "Equipped youth serve and lead in their communities.", icon: "fas fa-paper-plane" },
    ],
    faqs: [
      { question: "Is this program open to all faiths?", answer: "We welcome everyone. Our approach is Christian-based but respectful of all backgrounds." },
      { question: "How often do groups meet?", answer: "Bible study groups meet weekly, with monthly retreats and special events." },
      { question: "Can I volunteer as a mentor?", answer: "Yes! We provide training for all volunteer mentors." },
    ],
  },
};

function ProgramContent({ slug }: { slug: string }) {
  const data = programData[slug];
  const { ref: featRef, inView: featInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: howRef, inView: howInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: faqRef, inView: faqInView } = useInView({ threshold: 0.1, triggerOnce: true });

  if (!data) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold text-foreground">Program not found</h2>
        <Link href="/programs" className="mt-4 inline-block text-accent hover:underline">
          Back to Programs
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageHero
        title={data.title}
        subtitle={data.description}
        icon={data.icon}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: data.title },
        ]}
      />

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <i className="fas fa-info-circle" />
            Overview
          </div>
          <p className="text-lg text-foreground leading-relaxed">{data.longDescription}</p>

          {/* Impact stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {data.impact.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <i className={`${stat.icon} text-accent text-xl mb-2 block`} />
                <p className="text-xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section ref={featRef} className="py-24 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-foreground">Key Features</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {data.features.map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={featInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 rounded-xl bg-background p-4"
              >
                <i className="fas fa-check-circle text-green" />
                <span className="text-sm text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={howRef} className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold text-foreground">How It Works</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {data.howItWorks.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={howInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                  <i className={`${step.icon} text-accent text-xl`} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                {i < data.howItWorks.length - 1 && (
                  <div className="absolute top-8 right-0 hidden translate-x-1/2 md:block">
                    <i className="fas fa-arrow-right text-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section ref={faqRef} className="py-24 bg-secondary">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-3">
            {data.faqs.map((faq, i) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl border border-border bg-background"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 text-sm font-medium text-foreground">
                  <span className="flex items-center gap-3">
                    <i className="fas fa-question-circle text-accent" />
                    {faq.question}
                  </span>
                  <i className="fas fa-plus text-xs text-muted-foreground transition-transform group-open:rotate-45" />
                </summary>
                <div className="px-5 pb-5 pl-11 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-coffee-dark text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-3xl font-bold text-cream text-balance">
            Ready to Make a Difference?
          </h2>
          <p className="mt-3 text-cream/60">
            Your support transforms lives. Get involved today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground"
            >
              <i className="fas fa-hand-holding-usd" />
              Make A Difference
            </Link>
            <Link
              href="/get-involved#volunteer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-cream/40 px-7 py-3 text-sm font-semibold text-cream hover:bg-cream hover:text-coffee-dark transition-all"
            >
              <i className="fas fa-hands" />
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  return (
    <main>
      <Header />
      <ProgramContent slug={slug} />
      <Footer />
    </main>
  );
}
