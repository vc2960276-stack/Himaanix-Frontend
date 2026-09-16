import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    RotateCcw,
    Package,
    Truck,
    CreditCard,
    CheckCircle2,
    XCircle,
    Clock,
    ShieldCheck,
    ChevronDown,
    ArrowRight,
    FileText,
    AlertCircle,
} from "lucide-react";

const HIGHLIGHTS = [
    { icon: Clock, label: "30-Day Returns", sub: "From date of delivery" },
    { icon: RotateCcw, label: "Easy Process", sub: "3 simple steps" },
    { icon: Truck, label: "Free Pickup", sub: "On all returns in India" },
    { icon: CreditCard, label: "Fast Refunds", sub: "Within 5–7 business days" },
];

const STEPS = [
    {
        icon: FileText,
        title: "Raise a Request",
        body: "Log into your account and raise a return request from the Orders section, or email us at returns@himaanix.com with your order number.",
    },
    {
        icon: Package,
        title: "Pack Your Item",
        body: "Place the item back in its original packaging with all tags attached. Include the return slip we email you.",
    },
    {
        icon: Truck,
        title: "Schedule Pickup",
        body: "Choose a convenient date and time for pickup. Our courier partner will collect the parcel from your doorstep — free of charge.",
    },
    {
        icon: CreditCard,
        title: "Get Refunded",
        body: "Once we receive and inspect the item, your refund is processed within 5–7 business days to your original payment method.",
    },
];

const ELIGIBLE = [
    "Unworn, unwashed items in original condition",
    "Items with all original tags attached",
    "Items in their original packaging",
    "Returns raised within 30 days of delivery",
    "Items with a valid proof of purchase",
];

const NOT_ELIGIBLE = [
    "Worn, washed, or altered items",
    "Items with removed or damaged tags",
    "Intimate wear, swimwear, and innerwear",
    "Personalized or custom-made items",
    "Items marked as 'Final Sale' at purchase",
];

const REFUND_TIMELINE = [
    { method: "Credit / Debit Card", time: "5–7 business days" },
    { method: "UPI / Net Banking", time: "3–5 business days" },
    { method: "Original Store Credit", time: "Instant" },
    { method: "Cash on Delivery Refund", time: "5–7 business days (bank transfer)" },
];

const FAQS = [
    {
        q: "How long do I have to return an item?",
        a: "You have 30 days from the date of delivery to raise a return request. Requests raised after this window cannot be accepted.",
    },
    {
        q: "Is return shipping free?",
        a: "Yes, return pickup is completely free across all serviceable PIN codes in India. For international orders, return shipping is borne by the customer.",
    },
    {
        q: "How long does the refund take?",
        a: "Once your returned item passes inspection, refunds are processed within 5–7 business days. Store credit is issued instantly.",
    },
    {
        q: "Can I exchange instead of returning?",
        a: "Yes. You can request an exchange for a different size or colour, subject to availability. Exchanges follow the same 30-day window.",
    },
    {
        q: "What if I received a damaged or wrong item?",
        a: "We're so sorry. Please contact us within 48 hours of delivery with photos of the item, and we'll arrange an immediate replacement or full refund.",
    },
    {
        q: "Do you accept returns on sale items?",
        a: "Yes, sale items are eligible for return unless marked 'Final Sale' at the time of purchase. Final Sale items cannot be returned or exchanged.",
    },
    {
        q: "Can I return part of my order?",
        a: "Absolutely. You can return individual items from your order. Just select the specific items when raising your return request.",
    },
    {
        q: "How will I know my return is received?",
        a: "You'll receive an email and SMS confirming receipt as soon as the parcel reaches our warehouse. Refund processing begins immediately after.",
    },
];

export default function Returns() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div>
            {/* Hero */}
            <section className="bg-[#EFE6DD] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">HIMAANIX / RETURNS</div>
                    <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-3xl">
                        Returns & Refunds
                    </h1>
                    <p className="mt-5 text-[#5C524C] max-w-xl leading-relaxed">
                        Not quite right? No problem. We offer 30-day easy returns on all
                        eligible items — because finding the perfect piece should feel
                        effortless.
                    </p>
                </div>
            </section>

            {/* Highlights */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {HIGHLIGHTS.map((c) => (
                        <div
                            key={c.label}
                            className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-6"
                        >
                            <c.icon className="w-5 h-5 text-[#C89D66] mb-4" />
                            <div className="hx-eyebrow mb-2">{c.label}</div>
                            <div className="text-sm text-[#5C524C]">{c.sub}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How to return */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="hx-eyebrow mb-3">How To Return</div>
                <h2 className="font-serif text-3xl md:text-4xl mb-12 max-w-2xl">
                    Four simple steps to send it back
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STEPS.map((s, i) => (
                        <div key={s.title} className="relative">
                            <div className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8 h-full">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-full bg-[#1A1110] text-[#FDFBF7] flex items-center justify-center font-serif text-lg">
                                        {i + 1}
                                    </div>
                                    <s.icon className="w-5 h-5 text-[#C89D66]" />
                                </div>
                                <h3 className="font-serif text-xl mb-2">{s.title}</h3>
                                <p className="text-sm text-[#5C524C] leading-relaxed">
                                    {s.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Eligibility */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Eligibility</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-12 max-w-2xl">
                        What can — and can't — be returned
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Eligible */}
                        <div className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle2 className="w-5 h-5 text-[#5C7A4F]" />
                                <h3 className="font-serif text-2xl">Eligible for Return</h3>
                            </div>
                            <ul className="space-y-3">
                                {ELIGIBLE.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-[#5C524C] leading-relaxed"
                                    >
                                        <CheckCircle2 className="w-4 h-4 text-[#5C7A4F] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Not eligible */}
                        <div className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8">
                            <div className="flex items-center gap-3 mb-6">
                                <XCircle className="w-5 h-5 text-[#A85D48]" />
                                <h3 className="font-serif text-2xl">Not Eligible</h3>
                            </div>
                            <ul className="space-y-3">
                                {NOT_ELIGIBLE.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 text-sm text-[#5C524C] leading-relaxed"
                                    >
                                        <XCircle className="w-4 h-4 text-[#A85D48] shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 bg-[#FDFBF7] border border-[#2B1B17]/10 p-6 flex items-start gap-4">
                        <AlertCircle className="w-5 h-5 text-[#C89D66] shrink-0 mt-0.5" />
                        <p className="text-sm text-[#5C524C] leading-relaxed">
                            <span className="text-[#1A1110] font-medium">Important:</span>{" "}
                            Items must be returned in their original condition. We reserve the
                            right to refuse a return if the item has been used, damaged, or is
                            missing tags or packaging.
                        </p>
                    </div>
                </div>
            </section>

            {/* Refund timeline */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="hx-eyebrow mb-3">Refund Timeline</div>
                <h2 className="font-serif text-3xl md:text-4xl mb-10 max-w-2xl">
                    How long will my refund take?
                </h2>

                <div className="bg-[#FDFBF7] border border-[#2B1B17]/10 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2B1B17]/10">
                        {REFUND_TIMELINE.map((r) => (
                            <div
                                key={r.method}
                                className="p-6 md:p-8 flex items-center justify-between gap-6 border-b md:border-b-0 border-[#2B1B17]/10 last:border-b-0"
                            >
                                <div className="flex items-center gap-3">
                                    <CreditCard className="w-4 h-4 text-[#C89D66]" />
                                    <span className="text-sm text-[#1A1110]">{r.method}</span>
                                </div>
                                <span className="hx-eyebrow text-[#91857D] whitespace-nowrap">
                                    {r.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <p className="mt-6 text-sm text-[#91857D] leading-relaxed">
                    Refunds are processed to the original payment method. Store credit is
                    issued instantly and never expires.
                </p>
            </section>

            {/* Assurance band */}
            <section className="bg-[#1A1110] text-[#FDFBF7] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="w-6 h-6 text-[#C89D66] shrink-0 mt-1" />
                            <div>
                                <div className="font-serif text-xl mb-1">
                                    100% Secure Refunds
                                </div>
                                <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">
                                    Every refund is tracked and confirmed by our support team.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <RotateCcw className="w-6 h-6 text-[#C89D66] shrink-0 mt-1" />
                            <div>
                                <div className="font-serif text-xl mb-1">No Hidden Charges</div>
                                <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">
                                    Free returns, no restocking fees. Ever.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="w-6 h-6 text-[#C89D66] shrink-0 mt-1" />
                            <div>
                                <div className="font-serif text-xl mb-1">Quick Turnaround</div>
                                <p className="text-sm text-[#FDFBF7]/70 leading-relaxed">
                                    Most returns are resolved within one week.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Questions</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-10">
                        Returns FAQs
                    </h2>

                    <div>
                        {FAQS.map((f, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i} className="border-b border-[#2B1B17]/10">
                                    <button
                                        className="w-full py-5 flex items-center justify-between text-left gap-6"
                                        onClick={() => setOpenFaq(open ? null : i)}
                                        data-testid={`returns-faq-${i}`}
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

                    {/* CTA */}
                    <div className="mt-12 bg-[#FDFBF7] border border-[#2B1B17]/10 p-8 text-center">
                        <div className="hx-eyebrow mb-3">Need Help With a Return?</div>
                        <h3 className="font-serif text-2xl mb-4">
                            We're here to make it easy
                        </h3>
                        <p className="text-sm text-[#5C524C] mb-6 max-w-md mx-auto leading-relaxed">
                            Reach out to our returns team and we'll guide you through every
                            step.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="mailto:returns@himaanix.com"
                                className="inline-flex items-center justify-center gap-2 bg-[#1A1110] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17] transition-colors"
                            >
                                Email Returns Team
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 border border-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7] transition-colors"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}