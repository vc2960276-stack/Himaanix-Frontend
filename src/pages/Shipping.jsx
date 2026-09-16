import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Truck,
    Package,
    MapPin,
    Clock,
    Globe,
    RotateCcw,
    ShieldCheck,
    ChevronDown,
    ArrowRight,
    IndianRupee,
    Plane,
    Home,
} from "lucide-react";

const SHIPPING_OPTIONS = [
    {
        icon: Truck,
        title: "Standard Delivery",
        time: "3–5 business days",
        price: "Free on orders above ₹2,999",
        sub: "₹99 for orders below ₹2,999",
        regions: "Available across all serviceable PIN codes in India",
    },
    {
        icon: Package,
        title: "Express Delivery",
        time: "1–2 business days",
        price: "₹199 flat",
        sub: "Metro cities only",
        regions: "Mumbai, Delhi, Bengaluru, Hyderabad, Chennai, Kolkata, Pune",
    },
    {
        icon: Plane,
        title: "International Shipping",
        time: "7–14 business days",
        price: "Calculated at checkout",
        sub: "Duties & taxes included",
        regions: "Shipping to 40+ countries worldwide",
    },
    {
        icon: Home,
        title: "Store Pickup",
        time: "Ready in 24 hours",
        price: "Free",
        sub: "Select flagship stores",
        regions: "Mumbai, Delhi, Bengaluru",
    },
];

const STEPS = [
    {
        icon: Package,
        title: "Order Placed",
        body: "You receive an instant confirmation email and SMS with your order number.",
    },
    {
        icon: Clock,
        title: "Processing",
        body: "We pick, quality-check, and pack your order within 24–48 hours.",
    },
    {
        icon: Truck,
        title: "Shipped",
        body: "You get a tracking link via email and SMS the moment your parcel leaves our studio.",
    },
    {
        icon: MapPin,
        title: "Delivered",
        body: "Signature required on delivery. You'll be notified an hour before arrival.",
    },
];

const FAQS = [
    {
        q: "How can I track my order?",
        a: "Once your order ships, you'll receive an email and SMS with a tracking link. You can also track it anytime from the Orders section of your account.",
    },
    {
        q: "Do you deliver to my PIN code?",
        a: "We ship to over 26,000 serviceable PIN codes across India. Enter your PIN code at checkout to confirm availability and estimated delivery time.",
    },
    {
        q: "What are the shipping charges?",
        a: "Standard shipping is free on orders above ₹2,999 and ₹99 for orders below that. Express delivery is ₹199 flat for metro cities. International shipping is calculated at checkout based on destination and weight.",
    },
    {
        q: "Can I change my delivery address after ordering?",
        a: "Yes, if your order hasn't been dispatched yet. Contact us within 12 hours of placing the order and we'll update the address. Once shipped, the address cannot be changed.",
    },
    {
        q: "What if I'm not available at delivery time?",
        a: "Our courier partner will attempt delivery up to 3 times. You'll be contacted via phone before each attempt. If all attempts fail, the order is returned and a refund is issued.",
    },
    {
        q: "Do you offer Cash on Delivery (COD)?",
        a: "Yes, COD is available on orders up to ₹10,000 across most serviceable PIN codes. A small handling fee of ₹49 applies.",
    },
    {
        q: "What about customs and duties on international orders?",
        a: "All applicable duties and taxes are calculated and included at checkout, so there are no surprise charges on delivery.",
    },
    {
        q: "Can I return my order?",
        a: "Absolutely. We offer 30-day easy returns on unworn, unwashed items with original tags attached. See our Returns Policy for full details.",
    },
];

export default function Shipping() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div>
            {/* Hero */}
            <section className="bg-[#EFE6DD] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">HIMAANIX / SHIPPING</div>
                    <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-3xl">
                        Shipping & Delivery
                    </h1>
                    <p className="mt-5 text-[#5C524C] max-w-xl leading-relaxed">
                        Everything you need to know about how, when, and where your
                        HIMAANIX order will reach you — safely and on time.
                    </p>
                </div>
            </section>

            {/* Quick highlights */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { icon: Truck, label: "Free Shipping", sub: "On orders above ₹2,999" },
                        { icon: Clock, label: "Fast Dispatch", sub: "Within 24–48 hours" },
                        { icon: Globe, label: "Ships Worldwide", sub: "40+ countries" },
                        { icon: ShieldCheck, label: "Insured Delivery", sub: "Every parcel, every time" },
                    ].map((c) => (
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

            {/* Shipping options */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="hx-eyebrow mb-3">Delivery Options</div>
                <h2 className="font-serif text-3xl md:text-4xl mb-10">
                    Choose the speed that suits you
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SHIPPING_OPTIONS.map((o) => (
                        <div
                            key={o.title}
                            className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-8 hover:border-[#1A1110] transition-colors"
                        >
                            <div className="flex items-start gap-5">
                                <o.icon className="w-6 h-6 text-[#C89D66] shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <h3 className="font-serif text-2xl mb-1">{o.title}</h3>
                                    <div className="hx-eyebrow text-[#91857D] mb-4">
                                        {o.time}
                                    </div>
                                    <div className="text-sm text-[#1A1110] font-medium">
                                        {o.price}
                                    </div>
                                    <div className="text-xs text-[#91857D] mb-4">{o.sub}</div>
                                    <div className="text-sm text-[#5C524C] leading-relaxed pt-4 border-t border-[#2B1B17]/10">
                                        {o.regions}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How it works */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">How It Works</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-12 max-w-2xl">
                        From our studio to your doorstep
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
                </div>
            </section>

            {/* International shipping note */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="bg-[#1A1110] text-[#FDFBF7] p-10 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div className="lg:col-span-8">
                        <div className="hx-eyebrow mb-3 text-[#C89D66]">
                            International Customers
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl mb-4 leading-tight">
                            We ship to over 40 countries worldwide.
                        </h2>
                        <p className="text-[#FDFBF7]/70 leading-relaxed max-w-2xl">
                            All applicable duties and taxes are calculated at checkout, so
                            there are no surprises when your parcel arrives. International
                            orders typically reach you within 7–14 business days.
                        </p>
                    </div>
                    <div className="lg:col-span-4 flex lg:justify-end">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-[#FDFBF7] text-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#EFE6DD] transition-colors"
                        >
                            Ask About Shipping <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">Questions</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-10">
                        Shipping FAQs
                    </h2>

                    <div>
                        {FAQS.map((f, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i} className="border-b border-[#2B1B17]/10">
                                    <button
                                        className="w-full py-5 flex items-center justify-between text-left gap-6"
                                        onClick={() => setOpenFaq(open ? null : i)}
                                        data-testid={`shipping-faq-${i}`}
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

                    <div className="mt-12 bg-[#FDFBF7] border border-[#2B1B17]/10 p-8 text-center">
                        <div className="hx-eyebrow mb-3">Still Need Help?</div>
                        <h3 className="font-serif text-2xl mb-4">
                            Our team is here for you
                        </h3>
                        <p className="text-sm text-[#5C524C] mb-6 max-w-md mx-auto leading-relaxed">
                            Can't find what you're looking for? Reach out and we'll get back
                            to you within 24 hours.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-[#1A1110] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17] transition-colors"
                            >
                                Contact Us
                            </Link>
                            <Link
                                to="/returns"
                                className="inline-flex items-center justify-center gap-2 border border-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#1A1110] hover:text-[#FDFBF7] transition-colors"
                            >
                                <RotateCcw className="w-4 h-4" /> Returns Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}