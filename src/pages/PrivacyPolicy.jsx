import React from "react";
import { Link } from "react-router-dom";
import {
    ShieldCheck,
    Lock,
    Eye,
    Cookie,
    UserCheck,
    Mail,
    Clock,
    ArrowRight,
    FileText,
    Globe,
    Baby,
    RefreshCw,
    Share2,
} from "lucide-react";

const LAST_UPDATED = "September 16, 2026";

const SECTIONS = [
    {
        id: "introduction",
        number: "01",
        title: "Introduction",
        body: [
            "At HIMAANIX (\"we\", \"our\", \"us\"), your privacy matters. This Privacy Policy explains what personal information we collect, why we collect it, how we use and protect it, and the choices you have about your data.",
            "This policy applies to our website, mobile experience, and any related services (collectively, the \"Services\"). By using the Services, you agree to the practices described here.",
            "If you do not agree with this policy, please discontinue use of the Services. We've written this in plain language wherever possible — because you deserve to actually understand what happens to your data.",
        ],
    },
    {
        id: "information-we-collect",
        number: "02",
        title: "Information We Collect",
        body: [
            "We collect information in three ways: what you give us, what we collect automatically, and what we receive from third parties.",
            "Information You Provide — When you create an account, place an order, subscribe to our newsletter, or contact us, we may collect your name, email address, phone number, shipping and billing address, and payment information.",
            "Information Collected Automatically — When you visit the Services, we automatically collect certain technical information such as your IP address, browser type, device type, operating system, referring URLs, pages viewed, and time spent on pages.",
            "Information From Third Parties — We may receive information about you from payment processors, delivery partners, analytics providers, and advertising partners, in line with their own privacy policies.",
        ],
    },
    {
        id: "how-we-use",
        number: "03",
        title: "How We Use Your Information",
        body: [
            "We use the information we collect for the following purposes:",
        ],
        list: [
            "To process and fulfill your orders, including shipping and delivery.",
            "To communicate with you about your orders, account, and enquiries.",
            "To personalise your experience and recommend products we think you'll love.",
            "To send you marketing communications, only if you have opted in.",
            "To improve our website, products, and services.",
            "To detect, prevent, and address fraud, security, or technical issues.",
            "To comply with legal obligations and enforce our terms.",
        ],
    },
    {
        id: "legal-basis",
        number: "04",
        title: "Legal Basis for Processing",
        body: [
            "If you are located in a jurisdiction with data protection laws (such as the GDPR in the EU or the DPDP Act in India), we process your personal information on the following legal bases:",
            "Contract — To fulfil orders and provide the Services you've requested.",
            "Consent — For marketing communications and non-essential cookies. You may withdraw consent at any time.",
            "Legitimate Interests — To improve our Services, prevent fraud, and secure our systems, balanced against your rights.",
            "Legal Obligation — To comply with applicable laws, tax requirements, and lawful requests from authorities.",
        ],
    },
    {
        id: "cookies",
        number: "05",
        title: "Cookies & Tracking Technologies",
        body: [
            "We use cookies and similar technologies (such as pixels and local storage) to enhance your experience and understand how the Services are used. Cookies fall into four categories:",
            "Essential Cookies — Necessary for the website to function, such as keeping items in your cart or remembering your login session. These cannot be disabled.",
            "Performance Cookies — Help us understand how visitors interact with the site, so we can improve navigation and content.",
            "Functional Cookies — Remember your preferences, such as language, region, and recently viewed items.",
            "Marketing Cookies — Used to deliver relevant advertisements and measure the effectiveness of our campaigns.",
            "You can manage or disable non-essential cookies through your browser settings or our cookie preference centre. Disabling certain cookies may affect the functionality of the Services.",
        ],
    },
    {
        id: "sharing",
        number: "06",
        title: "How We Share Your Information",
        body: [
            "We do not sell your personal information. We share it only in the following limited circumstances:",
        ],
        list: [
            "Service Providers — Payment processors, courier partners, email providers, and cloud hosting providers who help us operate the Services.",
            "Analytics Partners — Trusted third parties who help us understand website usage and improve performance.",
            "Legal Requirements — When required by law, court order, or to protect the rights, property, or safety of HIMAANIX, our customers, or others.",
            "Business Transfers — In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.",
            "With Your Consent — In any other case, we'll ask for your explicit permission before sharing.",
        ],
    },
    {
        id: "security",
        number: "07",
        title: "How We Protect Your Information",
        body: [
            "We take the security of your personal information seriously and use industry-standard safeguards to protect it:",
            "Encryption — All data transmitted between your browser and our servers is encrypted using SSL/TLS technology.",
            "Secure Payments — Payment card details are processed by PCI-DSS compliant payment gateways. We do not store full card numbers on our servers.",
            "Access Controls — Only authorised team members have access to personal data, and only for legitimate business purposes.",
            "Monitoring — We continuously monitor our systems for vulnerabilities and unauthorised access attempts.",
            "No system is 100% secure. While we work hard to protect your data, we cannot guarantee absolute security. If you suspect unauthorised activity on your account, please contact us immediately.",
        ],
    },
    {
        id: "retention",
        number: "08",
        title: "How Long We Keep Your Information",
        body: [
            "We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, unless a longer retention period is required by law.",
            "Order data is retained for up to 7 years to comply with tax and accounting regulations.",
            "Account information is retained for as long as your account is active, plus a reasonable period afterwards in case you return.",
            "Marketing preferences are retained until you unsubscribe or withdraw consent.",
            "When data is no longer needed, we securely delete or anonymise it.",
        ],
    },
    {
        id: "your-rights",
        number: "09",
        title: "Your Rights & Choices",
        body: [
            "Depending on where you live, you may have the following rights regarding your personal information:",
        ],
        list: [
            "Access — Request a copy of the personal information we hold about you.",
            "Correction — Ask us to correct any inaccurate or incomplete data.",
            "Deletion — Request deletion of your personal information, subject to legal retention requirements.",
            "Objection — Object to certain processing activities, such as direct marketing.",
            "Portability — Receive your data in a structured, machine-readable format.",
            "Withdraw Consent — Withdraw any consent you've previously given at any time.",
        ],
    },
    {
        id: "children",
        number: "10",
        title: "Children's Privacy",
        body: [
            "Our Services are not directed to children under the age of 13 (or under 16 in certain jurisdictions). We do not knowingly collect personal information from children.",
            "If you are a parent or guardian and believe that your child has provided us with personal information, please contact us. We will take prompt steps to delete such information from our systems.",
        ],
    },
    {
        id: "third-party",
        number: "11",
        title: "Third-Party Links & Services",
        body: [
            "The Services may contain links to third-party websites, plugins, or applications (for example, social media platforms or payment providers). We are not responsible for the privacy practices of those third parties.",
            "We encourage you to review the privacy policies of any third-party service you interact with. This Privacy Policy applies solely to information collected by HIMAANIX.",
        ],
    },
    {
        id: "international",
        number: "12",
        title: "International Data Transfers",
        body: [
            "HIMAANIX operates globally, and your information may be transferred to, stored in, and processed in countries other than the one in which you reside. These countries may have different data protection laws.",
            "When we transfer personal information internationally, we take steps to ensure it receives an adequate level of protection, including contractual safeguards and standard data protection clauses where required.",
        ],
    },
    {
        id: "changes",
        number: "13",
        title: "Changes to This Policy",
        body: [
            "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or operational needs. When we make material changes, we will update the 'Last Updated' date at the top of this page.",
            "If the changes are significant, we may also notify you by email or by a prominent notice on the Services. We encourage you to review this page periodically to stay informed about how we protect your information.",
        ],
    },
    {
        id: "contact",
        number: "14",
        title: "Contact Us",
        body: [
            "If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, our privacy team is here to help.",
            "Email: privacy@himaanix.com",
            "Phone: +91 98765 43210 (Mon–Sat, 10am–7pm IST)",
            "You can also reach us through our Contact page. We aim to respond to all privacy-related requests within 7 business days.",
        ],
    },
];

export default function PrivacyPolicy() {
    return (
        <div>
            {/* Hero */}
            <section className="bg-[#EFE6DD] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="hx-eyebrow mb-3">HIMAANIX / LEGAL</div>
                    <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-3xl">
                        Privacy Policy
                    </h1>
                    <p className="mt-5 text-[#5C524C] max-w-xl leading-relaxed">
                        Your data, your rights. Here's exactly what we collect, why, and
                        how we protect it.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-xs text-[#91857D]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Last updated: {LAST_UPDATED}</span>
                    </div>
                </div>
            </section>

            {/* Intro highlights */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 md:-mt-14 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        {
                            icon: ShieldCheck,
                            label: "We Don't Sell Data",
                            sub: "Never have, never will",
                        },
                        {
                            icon: Lock,
                            label: "Encrypted",
                            sub: "SSL/TLS on every request",
                        },
                        {
                            icon: UserCheck,
                            label: "Your Rights",
                            sub: "Access, correct, delete",
                        },
                        {
                            icon: Eye,
                            label: "Transparent",
                            sub: "Plain-language policy",
                        },
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

            {/* Main content */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Sticky TOC */}
                    <aside className="lg:col-span-3">
                        <div className="lg:sticky lg:top-24">
                            <div className="hx-eyebrow mb-4">Contents</div>
                            <nav className="space-y-2.5">
                                {SECTIONS.map((s) => (
                                    <a
                                        key={s.id}
                                        href={`#${s.id}`}
                                        className="block text-sm text-[#5C524C] hover:text-[#1A1110] transition-colors leading-snug"
                                    >
                                        <span className="text-[#C89D66] mr-2">{s.number}</span>
                                        {s.title}
                                    </a>
                                ))}
                            </nav>

                            <div className="mt-8 pt-8 border-t border-[#2B1B17]/10">
                                <div className="text-xs text-[#91857D] leading-relaxed">
                                    Have a privacy question?{" "}
                                    <Link to="/contact" className="underline text-[#1A1110]">
                                        Contact us
                                    </Link>
                                    .
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Sections */}
                    <div className="lg:col-span-9 max-w-3xl">
                        {SECTIONS.map((s) => (
                            <div
                                key={s.id}
                                id={s.id}
                                className="scroll-mt-24 pb-12 mb-12 border-b border-[#2B1B17]/10 last:border-b-0 last:mb-0 last:pb-0"
                            >
                                <div className="flex items-baseline gap-4 mb-4">
                                    <span className="font-serif text-2xl text-[#C89D66]">
                                        {s.number}
                                    </span>
                                    <h2 className="font-serif text-3xl md:text-4xl text-[#1A1110]">
                                        {s.title}
                                    </h2>
                                </div>

                                <div className="space-y-4 text-[#5C524C] leading-relaxed">
                                    {s.body.map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}

                                    {s.list && (
                                        <ul className="space-y-3 pt-2">
                                            {s.list.map((item) => (
                                                <li
                                                    key={item}
                                                    className="flex items-start gap-3 text-sm"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-[#C89D66] shrink-0 mt-2" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>

                                {/* Section 05: Cookies — accent panel */}
                                {s.id === "cookies" && (
                                    <div className="mt-6 bg-[#FDFBF7] border border-[#2B1B17]/10 p-6 flex items-start gap-4">
                                        <Cookie className="w-5 h-5 text-[#C89D66] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#5C524C] leading-relaxed">
                                            <span className="text-[#1A1110] font-medium">
                                                Manage preferences:
                                            </span>{" "}
                                            You can update your cookie choices at any time from the
                                            cookie banner or your browser settings. Essential
                                            cookies are always active for security and functionality.
                                        </p>
                                    </div>
                                )}

                                {/* Section 09: Rights — grid of cards */}
                                {s.id === "your-rights" && (
                                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {[
                                            { icon: Eye, title: "Access", body: "Get a copy of your data" },
                                            { icon: FileText, title: "Correction", body: "Fix inaccurate details" },
                                            { icon: RefreshCw, title: "Deletion", body: "Request erasure" },
                                            { icon: Share2, title: "Portability", body: "Export in a common format" },
                                        ].map((r) => (
                                            <div
                                                key={r.title}
                                                className="border border-[#2B1B17]/10 p-5 bg-[#FDFBF7]"
                                            >
                                                <r.icon className="w-4 h-4 text-[#C89D66] mb-3" />
                                                <div className="text-sm text-[#1A1110] font-medium mb-1">
                                                    {r.title}
                                                </div>
                                                <div className="text-xs text-[#91857D]">{r.body}</div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Section 10: Children — icon accent */}
                                {s.id === "children" && (
                                    <div className="mt-6 bg-[#FDFBF7] border border-[#2B1B17]/10 p-6 flex items-start gap-4">
                                        <Baby className="w-5 h-5 text-[#C89D66] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#5C524C] leading-relaxed">
                                            We do not knowingly collect data from anyone under 13. If
                                            you believe a child has provided us with information,
                                            email{" "}
                                            <a
                                                href="mailto:privacy@himaanix.com"
                                                className="underline text-[#1A1110]"
                                            >
                                                privacy@himaanix.com
                                            </a>{" "}
                                            and we'll remove it promptly.
                                        </p>
                                    </div>
                                )}

                                {/* Section 12: International — globe accent */}
                                {s.id === "international" && (
                                    <div className="mt-6 bg-[#FDFBF7] border border-[#2B1B17]/10 p-6 flex items-start gap-4">
                                        <Globe className="w-5 h-5 text-[#C89D66] shrink-0 mt-0.5" />
                                        <p className="text-sm text-[#5C524C] leading-relaxed">
                                            We use standard contractual clauses and data processing
                                            agreements with all international service providers to
                                            keep your data protected wherever it travels.
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Footer CTA */}
                        <div className="mt-8 bg-[#1A1110] text-[#FDFBF7] p-8 md:p-10">
                            <div className="hx-eyebrow mb-3 text-[#C89D66]">
                                Privacy Requests
                            </div>
                            <h3 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">
                                Want to access, correct, or delete your data?
                            </h3>
                            <p className="text-sm text-[#FDFBF7]/70 leading-relaxed mb-6 max-w-lg">
                                Email our privacy team with your request and we'll respond
                                within 7 business days. You may be asked to verify your
                                identity before we act.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="mailto:privacy@himaanix.com"
                                    className="inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#1A1110] px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#EFE6DD] transition-colors"
                                >
                                    <Mail className="w-4 h-4" /> Email Privacy Team
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center gap-2 border border-[#FDFBF7]/40 px-8 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#FDFBF7]/10 transition-colors"
                                >
                                    Contact Us <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Related links */}
                        <div className="mt-10 pt-8 border-t border-[#2B1B17]/10">
                            <div className="hx-eyebrow mb-4">Related Policies</div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <Link
                                    to="/refund-policy"
                                    className="flex items-center justify-between border border-[#2B1B17]/10 p-5 text-sm text-[#1A1110] hover:border-[#1A1110] transition-colors group"
                                >
                                    <span>Refund Policy</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/returns"
                                    className="flex items-center justify-between border border-[#2B1B17]/10 p-5 text-sm text-[#1A1110] hover:border-[#1A1110] transition-colors group"
                                >
                                    <span>Returns Policy</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    to="/shipping"
                                    className="flex items-center justify-between border border-[#2B1B17]/10 p-5 text-sm text-[#1A1110] hover:border-[#1A1110] transition-colors group"
                                >
                                    <span>Shipping & Delivery</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}