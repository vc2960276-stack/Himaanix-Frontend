import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Leaf,
    Droplet,
    Recycle,
    Users,
    Heart,
    Package,
    Sun,
    Globe,
    ArrowRight,
    ChevronDown,
    Sprout,
    Wind,
} from "lucide-react";

const PILLARS = [
    {
        icon: Leaf,
        title: "Better Materials",
        body: "Organic cottons, traceable linens, and low-impact dyes. Every fibre is chosen for how it feels, ages, and returns to the earth.",
    },
    {
        icon: Users,
        title: "Fair Craft Partners",
        body: "We work with family-run ateliers who set their own hours and are paid above market. Our makers are named, not numbered.",
    },
    {
        icon: Package,
        title: "Thoughtful Packaging",
        body: "Recycled, recyclable, and plastic-free wherever possible. Our mailers are compostable and our tags are seed-paper.",
    },
    {
        icon: Recycle,
        title: "Made to Last",
        body: "We design against trends. Longer-lasting garments mean fewer replacements, less waste, and a lighter footprint over time.",
    },
];

const MATERIALS = [
    {
        icon: Sprout,
        name: "Organic Cotton",
        origin: "Gujarat & Tamil Nadu, India",
        note: "Grown without synthetic pesticides, using crop rotation and rainwater harvesting.",
    },
    {
        icon: Wind,
        name: "European Linen",
        origin: "Certified mills, Europe",
        note: "Traceable from field to fibre. Flax requires no irrigation and minimal processing.",
    },
    {
        icon: Droplet,
        name: "Low-Impact Dyes",
        origin: "OEKO-TEX certified",
        note: "Free from harmful chemicals, with reduced water usage compared to conventional dyeing.",
    },
    {
        icon: Sun,
        name: "Natural Fibres",
        origin: "Worldwide",
        note: "We prioritise biodegradable fibres and avoid synthetic blends wherever technically possible.",
    },
];

const COMMITMENTS = [
    {
        year: "2026",
        goal: "100% traceable supply chain",
        status: "In progress",
    },
    {
        year: "2026",
        goal: "Zero single-use plastic in packaging",
        status: "Achieved",
    },
    {
        year: "2027",
        goal: "50% of fabrics from certified organic sources",
        status: "In progress",
    },
    {
        year: "2027",
        goal: "Solar-powered primary atelier",
        status: "Planned",
    },
    {
        year: "2028",
        goal: "Carbon-neutral shipping across India",
        status: "Planned",
    },
    {
        year: "2028",
        goal: "Take-back & repair program nationwide",
        status: "Planned",
    },
];

const STATS = [
    { icon: Droplet, value: "70%", label: "Less Water Used" },
    { icon: Recycle, value: "100%", label: "Plastic-Free Packaging" },
    { icon: Users, value: "3", label: "Fair-Trade Ateliers" },
    { icon: Leaf, value: "0", label: "Synthetic Pesticides" },
];

const FAQS = [
    {
        q: "Are your materials really organic?",
        a: "Yes. Our primary cottons are certified organic by recognised bodies, and our linens come from traceable European mills. We publish our sourcing details as our supply chain becomes fully transparent.",
    },
    {
        q: "Is your packaging plastic-free?",
        a: "Yes — 100% of our consumer packaging is plastic-free. Mailers are compostable, tags are printed on recycled paper with soy-based inks, and garment bags are made from recycled paper.",
    },
    {
        q: "How do you ensure fair wages for makers?",
        a: "We pay above-market rates, agree on pricing before production, and visit our craft partners twice a year. Most of our ateliers have been with us since our first collection.",
    },
    {
        q: "Do you offer repairs or take-backs?",
        a: "Not yet — but it's on our 2028 roadmap. In the meantime, we offer free repair advice over email and are happy to help you care for your pieces.",
    },
    {
        q: "How do you measure your carbon footprint?",
        a: "We calculate emissions across materials, production, and shipping, then work to reduce them year over year. Our full impact report will be published in 2027.",
    },
    {
        q: "What's your biggest sustainability challenge?",
        a: "Honestly — scale. Making beautiful things slowly is not yet the norm in fashion. The hardest part of our work is growing without compromising the values we started with.",
    },
];

export default function Sustainability() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div>
            {/* Hero */}
            <section className="bg-[#EFE6DD] py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-4">HIMAANIX / SUSTAINABILITY</div>
                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
                        Made slowly, so it lasts.
                    </h1>
                    <p className="mt-6 text-[#5C524C] max-w-2xl text-base md:text-lg leading-relaxed">
                        Sustainability isn't a marketing line for us. It's the whole
                        reason HIMAANIX exists — to make clothing that respects the earth,
                        the people who make it, and the people who wear it.
                    </p>
                </div>
            </section>

            {/* Pillars */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="hx-eyebrow mb-3">Our Four Commitments</div>
                <h2 className="font-serif text-3xl md:text-5xl mb-12 max-w-2xl">
                    Sustainability in four parts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PILLARS.map((p) => (
                        <div
                            key={p.title}
                            className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8 hover:border-[#1A1110] transition-colors group"
                        >
                            <p.icon className="w-6 h-6 text-[#C89D66] mb-5 group-hover:scale-110 transition-transform" />
                            <h3 className="font-serif text-xl mb-3">{p.title}</h3>
                            <p className="text-sm text-[#5C524C] leading-relaxed">{p.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Numbers band */}
            <section className="bg-[#1A1110] text-[#FDFBF7] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                        {STATS.map((n) => (
                            <div key={n.label} className="text-center">
                                <n.icon className="w-5 h-5 text-[#C89D66] mx-auto mb-4" />
                                <div className="font-serif text-4xl md:text-5xl text-[#FDFBF7]">
                                    {n.value}
                                </div>
                                <div className="hx-eyebrow mt-2 text-[#FDFBF7]/60">
                                    {n.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Materials */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                        <div className="hx-eyebrow mb-3">What We Make With</div>
                        <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                            Materials we're proud to name
                        </h2>
                        <p className="text-[#5C524C] leading-relaxed">
                            We choose fibres for how they feel on the skin, how they age in
                            the wardrobe, and how they return to the earth. No shortcuts, no
                            greenwashing.
                        </p>
                    </div>

                    <div className="lg:col-span-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {MATERIALS.map((m) => (
                                <div
                                    key={m.name}
                                    className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-6"
                                >
                                    <m.icon className="w-5 h-5 text-[#C89D66] mb-4" />
                                    <h3 className="font-serif text-xl mb-2">{m.name}</h3>
                                    <div className="hx-eyebrow text-[#91857D] mb-3">
                                        {m.origin}
                                    </div>
                                    <p className="text-sm text-[#5C524C] leading-relaxed">
                                        {m.note}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Our Roadmap</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 max-w-2xl">
                        Goals we hold ourselves to
                    </h2>
                    <p className="text-[#5C524C] mb-10 max-w-xl leading-relaxed">
                        We publish our commitments publicly so we can be held accountable.
                        Progress reports will be shared every year.
                    </p>

                    <div className="bg-[#FDFBF7] border border-[#2B1B17]/10 overflow-hidden">
                        {COMMITMENTS.map((c, i) => (
                            <div
                                key={i}
                                className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 border-b border-[#2B1B17]/10 last:border-b-0"
                            >
                                <div className="font-serif text-2xl text-[#C89D66] w-16 shrink-0">
                                    {c.year}
                                </div>
                                <div className="flex-1 text-[#1A1110]">{c.goal}</div>
                                <div
                                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] px-3 py-1 border ${c.status === "Achieved"
                                            ? "border-[#5C7A4F] text-[#5C7A4F]"
                                            : c.status === "In progress"
                                                ? "border-[#C89D66] text-[#C89D66]"
                                                : "border-[#91857D] text-[#91857D]"
                                        }`}
                                >
                                    {c.status}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Craft quote */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <Leaf className="w-8 h-8 text-[#C89D66] mx-auto mb-6" />
                <p className="font-serif text-2xl md:text-4xl leading-snug text-[#1A1110] italic">
                    "The most sustainable garment is the one you keep wearing."
                </p>
                <div className="hx-eyebrow mt-6 text-[#91857D]">
                    — HIMAANIX Design Principle
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Questions</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-10">
                        Sustainability FAQs
                    </h2>

                    <div>
                        {FAQS.map((f, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i} className="border-b border-[#2B1B17]/10">
                                    <button
                                        className="w-full py-5 flex items-center justify-between text-left gap-6"
                                        onClick={() => setOpenFaq(open ? null : i)}
                                        data-testid={`sustainability-faq-${i}`}
                                    >
                                        <span className="font-serif text-lg md:text-xl text-[#1A1110]">
                                            {f.q}
                                        </span>
                                        <ChevronDown
                                            className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>
                                    {open && (
                                        <div className="pb-6 text-sm text-[#5C524C] leading-relaxed">
                                            {f.a}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-[#1A1110] text-[#FDFBF7] p-10 md:p-16 text-center">
                    <div className="hx-eyebrow mb-4 text-[#C89D66]">Join The Movement</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
                        Dress with intention. Wear it for years.
                    </h2>
                    <p className="text-[#FDFBF7]/70 leading-relaxed max-w-xl mx-auto mb-8">
                        Explore pieces built to last — or reach out if you have questions
                        about our materials, makers, or methods.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#EFE6DD] transition-colors"
                        >
                            Shop The Edit <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 border border-[#FDFBF7]/40 px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#FDFBF7]/10 transition-colors"
                        >
                            Ask Us Anything
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}