import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    Instagram,
    Facebook,
    MessageCircle,
    ChevronDown,
} from "lucide-react";
import { toast } from "sonner";
import api from "@/lib/api";

const CONTACT_CARDS = [
    {
        icon: Mail,
        label: "Email Us",
        value: "himaanixtrading@gmail.com",
        sub: "We reply within 24 hours",
        href: "mailto:himaanixtrading@gmail.com",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+91 8958975608",
        sub: "Mon–Sat, 10am – 7pm IST",
        href: "tel:+918958975608",
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+91 8958975608",
        sub: "Fastest response",
        href: "https://wa.me/918958975608",
    },
    {
        icon: MapPin,
        label: "Visit Office",
        value: "Delhi, New Delhi, India",
        sub: "By appointment only",
        href: "#",
    },
];

const FAQS = [
    {
        q: "How long does shipping take?",
        a: "Orders are dispatched within 24–48 hours. Standard delivery takes 3–5 business days across India. Express delivery is available at checkout for metro cities.",
    },
    {
        q: "What is your return policy?",
        a: "We offer 30-day easy returns on all unworn, unwashed items with original tags attached. Simply raise a return request from your account or email us.",
    },
    {
        q: "Do you ship internationally?",
        a: "Yes. We currently ship to over 40 countries. International delivery typically takes 7–14 business days, and duties are calculated at checkout.",
    },
    {
        q: "How can I track my order?",
        a: "Once your order ships, you'll receive an email and SMS with a tracking link. You can also track from the Orders section of your account.",
    },
    {
        q: "Do you offer size guidance?",
        a: "Absolutely. Every product page includes a detailed size guide. For personalised advice, drop us a message — our team is happy to help.",
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [sending, setSending] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            return toast.error("Please fill in your name, email, and message.");
        }
        setSending(true);
        try {
            const { data } = await api.post("/contact", {
                name: form.name.trim(),
                email: form.email.trim(),
                subject: form.subject.trim(),
                message: form.message.trim(),
            });
            toast.success(data.message || "Message sent. We'll be in touch shortly.");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            toast.error(err?.response?.data?.detail || "Something went wrong. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <div>
            {/* Hero */}
            <section className="bg-[#EFE6DD] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">HIMAANIX / CONTACT</div>
                    <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-3xl">
                        We'd love to hear from you
                    </h1>
                    <p className="mt-5 text-[#5C524C] max-w-xl leading-relaxed">
                        Questions about an order, a piece, or a partnership? Our team is here
                        to help — reach out through any channel below.
                    </p>
                </div>
            </section>

            {/* Contact cards */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CONTACT_CARDS.map((c) => (
                        <a
                            key={c.label}
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                            className="bg-[#FDFBF7] border border-[#2B1B17]/10 p-6 hover:border-[#1A1110] transition-colors group"
                            data-testid={`contact-card-${c.label.toLowerCase().replace(/\s/g, "-")}`}
                        >
                            <c.icon className="w-5 h-5 text-[#C89D66] mb-4 group-hover:scale-110 transition-transform" />
                            <div className="hx-eyebrow mb-2">{c.label}</div>
                            <div className="text-sm text-[#1A1110] font-medium">{c.value}</div>
                            <div className="text-xs text-[#91857D] mt-1">{c.sub}</div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Form + Info */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-7">
                        <div className="hx-eyebrow mb-3">Send a Message</div>
                        <h2 className="font-serif text-3xl md:text-4xl mb-8">
                            Tell us how we can help
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="hx-eyebrow block mb-2">Your Name *</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => update("name", e.target.value)}
                                        placeholder="Jane Doe"
                                        className="w-full bg-transparent border border-[#2B1B17]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#1A1110] transition-colors"
                                        data-testid="contact-name"
                                    />
                                </div>
                                <div>
                                    <label className="hx-eyebrow block mb-2">Email *</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => update("email", e.target.value)}
                                        placeholder="jane@example.com"
                                        className="w-full bg-transparent border border-[#2B1B17]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#1A1110] transition-colors"
                                        data-testid="contact-email"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="hx-eyebrow block mb-2">Subject</label>
                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) => update("subject", e.target.value)}
                                    placeholder="Order enquiry, sizing help, collaboration…"
                                    className="w-full bg-transparent border border-[#2B1B17]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#1A1110] transition-colors"
                                    data-testid="contact-subject"
                                />
                            </div>

                            <div>
                                <label className="hx-eyebrow block mb-2">Message *</label>
                                <textarea
                                    rows={6}
                                    value={form.message}
                                    onChange={(e) => update("message", e.target.value)}
                                    placeholder="Write your message here…"
                                    className="w-full bg-transparent border border-[#2B1B17]/20 px-4 py-3 text-sm focus:outline-none focus:border-[#1A1110] transition-colors resize-none"
                                    data-testid="contact-message"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={sending}
                                className="inline-flex items-center gap-2 bg-[#1A1110] text-[#FDFBF7] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                                data-testid="contact-submit"
                            >
                                <Send className="w-4 h-4" />
                                {sending ? "Sending…" : "Send Message"}
                            </button>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 lg:pl-8">
                        <div className="bg-[#F5F0EB] p-8 mb-6">
                            <div className="hx-eyebrow mb-3">Studio Hours</div>
                            <h3 className="font-serif text-2xl mb-4">When we're around</h3>
                            <ul className="space-y-3 text-sm text-[#5C524C]">
                                <li className="flex items-start gap-3">
                                    <Clock className="w-4 h-4 mt-0.5 text-[#C89D66] shrink-0" />
                                    <div>
                                        <div className="text-[#1A1110]">Monday – Friday</div>
                                        <div>10:00 AM – 7:00 PM IST</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="w-4 h-4 mt-0.5 text-[#C89D66] shrink-0" />
                                    <div>
                                        <div className="text-[#1A1110]">Saturday</div>
                                        <div>11:00 AM – 5:00 PM IST</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock className="w-4 h-4 mt-0.5 text-[#C89D66] shrink-0" />
                                    <div>
                                        <div className="text-[#1A1110]">Sunday</div>
                                        <div>Closed</div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-[#1A1110] text-[#FDFBF7] p-8">
                            <div className="hx-eyebrow mb-3 text-[#C89D66]">Follow Along</div>
                            <h3 className="font-serif text-2xl mb-4">Stay in the loop</h3>
                            <p className="text-sm text-[#FDFBF7]/70 leading-relaxed mb-6">
                                New drops, styling notes, and behind-the-scenes — first.
                            </p>
                            <div className="flex gap-3">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 border border-[#FDFBF7]/20 flex items-center justify-center hover:bg-[#FDFBF7] hover:text-[#1A1110] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-10 h-10 border border-[#FDFBF7]/20 flex items-center justify-center hover:bg-[#FDFBF7] hover:text-[#1A1110] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a
                                    href="mailto:hello@himaanix.com"
                                    className="w-10 h-10 border border-[#FDFBF7]/20 flex items-center justify-center hover:bg-[#FDFBF7] hover:text-[#1A1110] transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="bg-[#F5F0EB] py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">FAQ</div>
                    <h2 className="font-serif text-3xl md:text-4xl mb-10">
                        Frequently asked questions
                    </h2>

                    <div>
                        {FAQS.map((f, i) => {
                            const open = openFaq === i;
                            return (
                                <div key={i} className="border-b border-[#2B1B17]/10">
                                    <button
                                        className="w-full py-5 flex items-center justify-between text-left gap-6"
                                        onClick={() => setOpenFaq(open ? null : i)}
                                        data-testid={`faq-${i}`}
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

                    <div className="mt-10 text-sm text-[#5C524C]">
                        Still need help?{" "}
                        <Link to="/contact" className="underline text-[#1A1110]">
                            Reach out to our team
                        </Link>
                        .
                    </div>
                </div>
            </section>
        </div>
    );
}