import React from "react";
import { Link } from "react-router-dom";
import {
    Scissors,
    Leaf,
    Heart,
    Sparkles,
    ArrowRight,
    Package,
    Users,
    Globe,
} from "lucide-react";

const VALUES = [
    {
        icon: Scissors,
        title: "Considered Craft",
        body: "Every piece is cut, stitched, and finished with intention. We work with a small circle of master tailors who share our obsession with detail.",
    },
    {
        icon: Leaf,
        title: "Responsible Materials",
        body: "Organic cottons, traceable linens, and low-impact dyes. We choose fabrics that feel beautiful on the skin and gentle on the planet.",
    },
    {
        icon: Heart,
        title: "Made to Last",
        body: "We design against trends. Our silhouettes are timeless, our construction is durable, and our pieces are meant to be worn for years, not seasons.",
    },
    {
        icon: Sparkles,
        title: "Quiet Luxury",
        body: "No loud logos, no fleeting hype. Just refined essentials that speak through cut, cloth, and quiet confidence.",
    },
];

const STATS = [
    { icon: Users, value: "12,000+", label: "Happy Customers" },
    { icon: Package, value: "48 hrs", label: "Dispatch Time" },
    { icon: Globe, value: "40+", label: "Countries Shipped" },
    { icon: Heart, value: "4.9 / 5", label: "Average Rating" },
];

const TIMELINE = [
    {
        year: "2021",
        title: "A Quiet Beginning",
        body: "HIMAANIX started in a small Mumbai studio with a single idea — create clothing that feels as good as it looks, without the noise.",
    },
    {
        year: "2022",
        title: "The First Collection",
        body: "Our debut edit of 12 essentials sold out in three weeks. We knew we were onto something worth building.",
    },
    {
        year: "2023",
        title: "Craft Partners",
        body: "We partnered with family-run ateliers across India, ensuring fair wages and hand-finished quality on every piece.",
    },
    {
        year: "2024",
        title: "Going Global",
        body: "We began shipping internationally, bringing quiet luxury to wardrobes across 40+ countries.",
    },
    {
        year: "2026",
        title: "What's Next",
        body: "New categories, deeper sustainability commitments, and a growing community of people who dress with intention.",
    },
];

export default function About() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-[#EFE6DD] py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-4">HIMAANIX / OUR STORY</div>
                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
                        Clothing with intention, made for the long run.
                    </h1>
                    <p className="mt-6 text-[#5C524C] max-w-2xl text-base md:text-lg leading-relaxed">
                        HIMAANIX is a modern wardrobe house built on a simple belief: fewer,
                        better things. We design timeless essentials in natural fabrics,
                        crafted by hands that care — for people who dress with purpose.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <div className="hx-eyebrow mb-3">Our Philosophy</div>
                        <h2 className="font-serif text-3xl md:text-4xl leading-tight">
                            We believe in the quiet power of well-made things.
                        </h2>
                    </div>
                    <div className="lg:col-span-7 space-y-5 text-[#5C524C] leading-relaxed">
                        <p>
                            The fashion industry moves fast. We chose to move deliberately. Every
                            HIMAANIX piece begins with a question: <em>will this still feel right
                                in five years?</em> If the answer isn't an immediate yes, we go back
                            to the drawing board.
                        </p>
                        <p>
                            That means sourcing fabrics we'd want against our own skin. Cutting
                            patterns that flatter real bodies, not just mannequins. And finishing
                            every seam as though it were for ourselves — because, in a way, it is.
                        </p>
                        <p>
                            We don't chase seasons. We build a wardrobe you can return to, again
                            and again, and always feel like yourself in.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">What We Stand For</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-12 max-w-2xl">
                        Four values behind every stitch
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map((v) => (
                            <div
                                key={v.title}
                                className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8 hover:border-[#1A1110] transition-colors group"
                            >
                                <v.icon className="w-6 h-6 text-[#C89D66] mb-5 group-hover:scale-110 transition-transform" />
                                <h3 className="font-serif text-xl mb-3">{v.title}</h3>
                                <p className="text-sm text-[#5C524C] leading-relaxed">{v.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {STATS.map((s) => (
                        <div key={s.label} className="text-center">
                            <s.icon className="w-5 h-5 text-[#C89D66] mx-auto mb-4" />
                            <div className="font-serif text-4xl md:text-5xl text-[#1A1110]">
                                {s.value}
                            </div>
                            <div className="hx-eyebrow mt-2 text-[#91857D]">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-[#EFE6DD] py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">The Journey</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-14">
                        From one idea to a wardrobe house
                    </h2>

                    <div className="relative">
                        {/* vertical line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#2B1B17]/15 md:-translate-x-1/2" />

                        <div className="space-y-12">
                            {TIMELINE.map((t, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <div
                                        key={t.year}
                                        className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}
                                    >
                                        {/* dot */}
                                        <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-[#1A1110] md:-translate-x-1/2 z-10" />

                                        {isLeft ? (
                                            <>
                                                <div className="pl-12 md:pl-0 md:pr-16 md:text-right">
                                                    <TimelineCard t={t} />
                                                </div>
                                                <div className="hidden md:block" />
                                            </>
                                        ) : (
                                            <>
                                                <div className="hidden md:block" />
                                                <div className="pl-12 md:pl-16">
                                                    <TimelineCard t={t} />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

{/* Corporate Information */}
<div>
  <p>
    <span className="text-[#EFE6DD]/80">CIN:</span>{" "}
    U47711DC2026PTC473946
  </p>

  <p>
    <span className="text-[#EFE6DD]/80">
      Directors:
    </span>{" "}
    Aman & Himanshu
  </p>

  <p>
    <span className="text-[#EFE6DD]/80">
      Grievance Officer:
    </span>{" "}
    Premjeet
  </p>

  <p>
    <span className="text-[#EFE6DD]/80">
      Grievance Officer Email:
    </span>{" "}
    himaanixtrading@gmail.com
  </p>

  <p>
    <span className="text-[#EFE6DD]/80">
      Grievance Officer Mobile:
    </span>{" "}
    +91 9650300157
  </p>

  <p>
    <span className="text-[#EFE6DD]/80">
      Contact & Support:
    </span>{" "}
    +91 8958975608
  </p>
</div>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-[#1A1110] text-[#FDFBF7] p-10 md:p-16 text-center">
                    <div className="hx-eyebrow mb-4 text-[#C89D66]">Ready When You Are</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
                        Discover pieces you'll reach for, again and again.
                    </h2>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#EFE6DD] transition-colors"
                            data-testid="about-shop-cta"
                        >
                            Shop The Edit <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 border border-[#FDFBF7]/40 px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#FDFBF7]/10 transition-colors"
                            data-testid="about-contact-cta"
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function TimelineCard({ t }) {
    return (
        <div className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-6">
            <div className="hx-eyebrow text-[#C89D66] mb-2">{t.year}</div>
            <h3 className="font-serif text-xl md:text-2xl mb-2">{t.title}</h3>
            <p className="text-sm text-[#5C524C] leading-relaxed">{t.body}</p>
        </div>
    );
}
