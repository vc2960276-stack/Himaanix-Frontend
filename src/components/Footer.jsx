import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1A1110] text-[#EFE6DD] mt-24">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-2 md:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="col-span-2">
          <div className="font-serif text-3xl tracking-[0.28em]">
            HIMAANIX
          </div>

          <p className="mt-4 text-sm text-[#EFE6DD]/60 max-w-sm leading-relaxed">
            Fashion that speaks before you do. Editorial pieces crafted for
            the modern wardrobe — considered, tactile, timeless.
          </p>

          {/* Company Legal Information */}
          <div className="mt-8 max-w-sm">
            <div className="hx-eyebrow text-[#C89D66] mb-4">
              HIMAANIX TRADING PRIVATE LIMITED
            </div>

            <div className="space-y-2 text-xs text-[#EFE6DD]/55 leading-relaxed">



              <p>
                <span className="text-[#EFE6DD]/80">GSTIN:</span>{" "}
                07AAICH8742H1ZA
              </p>

              <p>
                <span className="text-[#EFE6DD]/80">CIN:</span>{" "}
                U47711DC2026PTC473946
              </p>

              <p>
                <span className="text-[#EFE6DD]/80">
                  Grievance Officer:
                </span>{" "}
                himaanixtrading@gmail.com
              </p>

              <p>
                <span className="text-[#EFE6DD]/80">Contact & Support:</span>{" "}
                89-5897-5608
              </p>

            </div>
          </div>
        </div>

        {/* Legal */}
        <div>
          <div className="hx-eyebrow text-[#C89D66] mb-4">
            Legal
          </div>

          <ul className="space-y-2 text-sm">

            <li>
              <Link
                to="/contact"
                className="hover:text-[#C89D66] transition-colors"
              >
                Contact Us
              </Link>
            </li>

            <li>
              <Link
                to="/shipping"
                className="hover:text-[#C89D66] transition-colors"
              >
                Shipping & Delivery
              </Link>
            </li>

            <li>
              <Link
                to="/returns"
                className="hover:text-[#C89D66] transition-colors"
              >
                Return Policy
              </Link>
            </li>

            <li>
              <Link
                to="/refund-policy"
                className="hover:text-[#C89D66] transition-colors"
              >
                Refund Policy
              </Link>
            </li>

            <li>
              <Link
                to="/privacy-policy"
                className="hover:text-[#C89D66] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms-conditions"
                className="hover:text-[#C89D66] transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>

          </ul>
        </div>

        {/* Company */}
        <div>
          <div className="hx-eyebrow text-[#C89D66] mb-4">
            Company
          </div>

          <ul className="space-y-2 text-sm">

            <li>
              <Link
                to="/about-us"
                className="hover:text-[#C89D66] transition-colors"
              >
                About Us
              </Link>
            </li>

            {/* <li>
              <Link
                to="/our-story"
                className="hover:text-[#C89D66] transition-colors"
              >
                Our Story
              </Link>
            </li> */}

            <li>
              <Link
                to="/careers"
                className="hover:text-[#C89D66] transition-colors"
              >
                Careers
              </Link>
            </li>

            <li>
              <Link
                to="/sustainability"
                className="hover:text-[#C89D66] transition-colors"
              >
                Sustainability
              </Link>
            </li>

          </ul>
        </div>

        {/* Shop */}
        <div>
          <div className="hx-eyebrow text-[#C89D66] mb-4">
            Shop
          </div>

          <ul className="space-y-2 text-sm">

            <li>
              <Link
                to="/women"
                className="hover:text-[#C89D66] transition-colors"
              >
                Women
              </Link>
            </li>

            <li>
              <Link
                to="/men"
                className="hover:text-[#C89D66] transition-colors"
              >
                Men
              </Link>
            </li>

            <li>
              <Link
                to="/kids"
                className="hover:text-[#C89D66] transition-colors"
              >
                Kids
              </Link>
            </li>

            <li>
              <Link
                to="/new-arrivals"
                className="hover:text-[#C89D66] transition-colors"
              >
                New Arrivals
              </Link>
            </li>

            <li>
              <Link
                to="/collections"
                className="hover:text-[#C89D66] transition-colors"
              >
                Collections
              </Link>
            </li>

          </ul>
        </div>

      </div>

      {/* Registered Office Address */}
      <div className="border-t border-[#EFE6DD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          <div className="max-w-3xl">
            <div className="hx-eyebrow text-[#C89D66] mb-3">
              Registered Office
            </div>

            <p className="text-xs text-[#EFE6DD]/55 leading-relaxed">
              1295 First Floor, Pan Mandi, Sadar Bazar, Delhi — 110006
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#EFE6DD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Copyright */}
          <div className="text-xs text-[#EFE6DD]/50">
            © {new Date().getFullYear()} HIMAANIX TRADING PRIVATE LIMITED.
            All rights reserved.
          </div>

          {/* Payment Methods */}
          <div>
            <div className="text-sm font-semibold text-white mb-3">
              Payment Methods
            </div>

            <div className="flex items-center gap-2">

              {/* VISA */}
              <div className="w-[55px] h-[32px] rounded-md bg-[#1A237E] flex items-center justify-center">
                <span className="text-white italic font-bold text-[13px] tracking-tight">
                  VISA
                </span>
              </div>

              {/* Mastercard */}
              <div className="w-[45px] h-[32px] rounded-md bg-white flex items-center justify-center">
                <div className="relative w-[24px] h-[18px]">
                  <span className="absolute left-0 top-[2px] w-[15px] h-[15px] rounded-full bg-[#EB001B]" />
                  <span className="absolute right-0 top-[2px] w-[15px] h-[15px] rounded-full bg-[#F79E1B]" />
                </div>
              </div>

              {/* Payoneer */}
              <div className="w-[65px] h-[32px] rounded-md bg-white flex items-center justify-center">
                <span className="text-[#E54B23] font-semibold text-[10px]">
                  Payoneer
                </span>
              </div>

              {/* Affirm */}
              <div className="w-[53px] h-[32px] rounded-md bg-white flex items-center justify-center">
                <span className="text-[#1769FF] italic font-semibold text-[11px]">
                  affirm
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
