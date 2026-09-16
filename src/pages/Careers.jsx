import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Briefcase,
    MapPin,
    Clock,
    Heart,
    Users,
    Leaf,
    Sparkles,
    ArrowRight,
    ChevronDown,
    Upload,
    Mail,
    Globe,
} from "lucide-react";
import { toast } from "sonner";

const VALUES = [
    {
        icon: Heart,
        title: "People First, Always",
        body: "Fair pay, flexible hours, and genuine care. We believe you can't make beautiful things if you're not treated beautifully.",
    },
    {
        icon: Leaf,
        title: "Slow, On Purpose",
        body: "We don't chase deadlines that compromise craft. We plan carefully, ship deliberately, and protect the quality of the work.",
    },
    {
        icon: Users,
        title: "Small Team, Big Ownership",
        body: "Everyone here owns their domain. You'll have real autonomy, real impact, and direct access to the founder.",
    },
    {
        icon: Sparkles,
        title: "Craft Over Hype",
        body: "We hire for taste, rigour, and honesty — not for buzzwords or titles. If you care deeply about the details, you'll fit right in.",
    },
];

const OPENINGS = [
    {
        id: "senior-designer",
        title: "Senior Womenswear Designer",
        department: "Design",
        location: "Mumbai, India",
        type: "Full-time",
        experience: "5+ years",
        summary:
            "Lead the design of our next womenswear collection — from concept sketches to final fits — working closely with our founder and craft partners in Jaipur.",
    },
    {
        id: "menswear-designer",
        title: "Menswear Designer",
        department: "Design",
        location: "Mumbai, India",
        type: "Full-time",
        experience: "3+ years",
        summary:
            "Shape the future of HIMAANIX menswear: refine existing silhouettes, develop new pieces, and obsess over every seam along the way.",
    },
    {
        id: "supply-chain",
        title: "Supply Chain & Sourcing Lead",
        department: "Operations",
        location: "Mumbai / Jaipur",
        type: "Full-time",
        experience: "4+ years",
        summary:
            "Own relationships with our ateliers and fabric mills. Ensure fair partnerships, on-time production, and full traceability across our supply chain.",
    },
    {
        id: "content-lead",
        title: "Brand Content Lead",
        department: "Marketing",
        location: "Remote (India)",
        type: "Full-time",
        experience: "3+ years",
        summary:
            "Tell our story with restraint and clarity — across the website, campaigns, social, and packaging. Words matter here as much as visuals.",
    },
    {
        id: "customer-care",
        title: "Customer Care Specialist",
        department: "Support",
        location: "Mumbai, India",
        type: "Full-time",
        experience: "1+ years",
        summary:
            "Be the voice of HIMAANIX. Handle order queries, returns, and product questions with the same care we put into every garment.",
    },
    {
        id: "intern-design",
        title: "Design Internship (6 months)",
        department: "Design",
        location: "Mumbai, India",
        type: "Internship",
        experience: "Fresher",
        summary:
            "Work alongside our design team on sketches, fabric research, and sample reviews. A paid, hands-on introduction to slow fashion.",
    },
];

const BENEFITS = [
    "Competitive salary, reviewed twice a year",
    "Flexible working hours and remote options",
    "Health insurance for you and your family",
    "Annual craft immersion trip to our atelier in Jaipur",
    "Generous employee discount on all HIMAANIX pieces",
    "Learning budget for courses, books, and conferences",
    "Paid parental leave, above statutory minimum",
    "25 days of paid time off plus public holidays",
];

const PROCESS = [
    {
        step: "01",
        title: "Apply",
        body: "Send us your CV and a short note about why HIMAANIX. We read every application personally.",
    },
    {
        step: "02",
        title: "Intro Call",
        body: "A 30-minute conversation with our team to understand your background, interests, and expectations.",
    },
    {
        step: "03",
        title: "Craft Interview",
        body: "A deeper conversation — and, for design roles, a portfolio review or short creative brief.",
    },
    {
        step: "04",
        title: "Offer",
        body: "We move quickly when it's right. Most candidates hear from us within two weeks of applying.",
    },
];

const FAQS = [
    {
        q: "Do you offer remote roles?",
        a: "Yes. Roles marked 'Remote (India)' are fully remote. Others are based in our Mumbai studio with flexible options, and some are hybrid with travel to Jaipur.",
    },
    {
        q: "Do you hire interns or freshers?",
        a: "Yes — we run a paid internship program twice a year and are open to fresher applicants for support and content roles.",
    },
    {
        q: "What does your interview process look like?",
        a: "Every process has four stages: application review, an intro call, a craft interview (with a portfolio or brief for design roles), and an offer. We aim to complete all stages within two weeks.",
    },
    {
        q: "Can I apply speculatively if there's no open role?",
        a: "Absolutely. Email careers@himaanix.com with your CV and a short note. We keep strong profiles on file and reach out when a fit appears.",
    },
    {
        q: "What is the culture like?",
        a: "Small, calm, and rigorous. We work in focused sprints, respect deep work, and avoid performative busyness. You'll have autonomy and high expectations in equal measure.",
    },
];

export default function Careers() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div>
            {/* Hero */}
            <section className="bg-[#EFE6DD] py-20 md:py-28">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-4">HIMAANIX / CAREERS</div>
                    <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] max-w-4xl">
                        Build something worth keeping.
                    </h1>
                    <p className="mt-6 text-[#5C524C] max-w-2xl text-base md:text-lg leading-relaxed">
                        We're a small team making considered clothing for people who dress
                        with intention. If that sounds like you, we'd love to meet.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                        <a
                            href="#openings"
                            className="inline-flex items-center justify-center gap-2 bg-[#1A1110] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17] transition-colors"
                        >
                            See Open Roles <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:careers@himaanix.com"
                            className="inline-flex items-center justify-center gap-2 border border-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7] transition-colors"
                        >
                            <Mail className="w-4 h-4" /> Say Hello
                        </a>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="hx-eyebrow mb-3">Life At HIMAANIX</div>
                <h2 className="font-serif text-3xl md:text-5xl mb-12 max-w-2xl">
                    Four things we actually believe
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
            </section>

            {/* Openings */}
            <section id="openings" className="bg-[#F5F0EB] py-20 scroll-mt-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Open Roles</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-4 max-w-2xl">
                        {OPENINGS.length} roles currently open
                    </h2>
                    <p className="text-[#5C524C] mb-10 max-w-xl leading-relaxed">
                        Don't see your role? We're always open to meeting people who share
                        our values — email us at{" "}
                        <a
                            href="mailto:careers@himaanix.com"
                            className="underline text-[#1A1110]"
                        >
                            careers@himaanix.com
                        </a>
                        .
                    </p>

                    <div className="space-y-3">
                        {OPENINGS.map((job) => (
                            <details
                                key={job.id}
                                className="group bg-[#FDFBF7] border border-[#2B1B17]/10 hover:border-[#1A1110] transition-colors"
                            >
                                <summary className="cursor-pointer list-none p-6 md:p-8 flex items-start md:items-center gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                                            <span className="hx-eyebrow text-[#C89D66]">
                                                {job.department}
                                            </span>
                                            <span className="hx-eyebrow text-[#91857D]">
                                                · {job.type}
                                            </span>
                                        </div>
                                        <h3 className="font-serif text-2xl md:text-3xl mb-3">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#91857D]">
                                            <span className="inline-flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5" />
                                                {job.location}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Briefcase className="w-3.5 h-3.5" />
                                                {job.experience}
                                            </span>
                                            <span className="inline-flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5" />
                                                {job.type}
                                            </span>
                                        </div>
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-[#91857D] shrink-0 group-open:rotate-180 transition-transform" />
                                </summary>

                                <div className="px-6 md:px-8 pb-8 border-t border-[#2B1B17]/10 pt-6">
                                    <p className="text-sm text-[#5C524C] leading-relaxed mb-6 max-w-2xl">
                                        {job.summary}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <a
                                            href={`mailto:careers@himaanix.com?subject=Application: ${encodeURIComponent(
                                                job.title
                                            )}`}
                                            className="inline-flex items-center justify-center gap-2 bg-[#1A1110] text-[#FDFBF7] px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17] transition-colors"
                                        >
                                            Apply For This Role <ArrowRight className="w-4 h-4" />
                                        </a>
                                        <a
                                            href={`mailto:careers@himaanix.com?subject=Question: ${encodeURIComponent(
                                                job.title
                                            )}`}
                                            className="inline-flex items-center justify-center gap-2 border border-[#1A1110] px-6 py-3 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7] transition-colors"
                                        >
                                            Ask A Question
                                        </a>
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <div className="hx-eyebrow mb-3">What You'll Get</div>
                        <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
                            Benefits that respect the whole of you
                        </h2>
                        <p className="text-[#5C524C] leading-relaxed">
                            We don't believe in perks that look good on paper but never
                            materialise. Everything listed here is available from day one —
                            and we're always open to adding more.
                        </p>
                    </div>
                    <div className="lg:col-span-7">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                            {BENEFITS.map((b) => (
                                <li
                                    key={b}
                                    className="flex items-start gap-3 text-sm text-[#5C524C] leading-relaxed"
                                >
                                    <span className="w-1 h-1 rounded-full bg-[#C89D66] shrink-0 mt-2" />
                                    <span>{b}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-[#EFE6DD] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Our Hiring Process</div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-12 max-w-2xl">
                        Four steps, no games
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PROCESS.map((s) => (
                            <div
                                key={s.step}
                                className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8"
                            >
                                <div className="font-serif text-4xl text-[#C89D66] mb-4">
                                    {s.step}
                                </div>
                                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                                <p className="text-sm text-[#5C524C] leading-relaxed">
                                    {s.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Questions</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-10">
                        Careers FAQs
                    </h2>

                    <div>
                        {FAQS.map((f, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i} className="border-b border-[#2B1B17]/10">
                                    <button
                                        className="w-full py-5 flex items-center justify-between text-left gap-6"
                                        onClick={() => setOpenFaq(open ? null : i)}
                                        data-testid={`careers-faq-${i}`}
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
                    <div className="hx-eyebrow mb-4 text-[#C89D66]">
                        Don't See Your Role?
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
                        We'd still love to hear from you.
                    </h2>
                    <p className="text-[#FDFBF7]/70 leading-relaxed max-w-xl mx-auto mb-8">
                        Send your CV and a short note about what you'd love to work on. We
                        read every message personally.
                    </p>
                    <a
                        href="mailto:careers@himaanix.com"
                        className="inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#EFE6DD] transition-colors"
                    >
                        <Mail className="w-4 h-4" /> Email Careers Team
                    </a>
                </div>
            </section>
        </div>
    );
}