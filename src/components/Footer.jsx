import React from "react";
import { Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1A1110] text-[#EFE6DD] mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2">
          <div className="font-serif text-3xl tracking-[0.28em]">HIMAANIX</div>
          <p className="mt-4 text-sm text-[#EFE6DD]/60 max-w-sm leading-relaxed">
            Fashion that speaks before you do. Editorial pieces crafted for the modern wardrobe — considered, tactile, timeless.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-[#C89D66]"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#C89D66]"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="hx-eyebrow hover:text-[#C89D66]">Pinterest</a>
            <a href="#" className="hx-eyebrow hover:text-[#C89D66]">WhatsApp</a>
          </div>
        </div>

        <div>
          <div className="hx-eyebrow text-[#C89D66] mb-4">Customer Care</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#C89D66]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Return Policy</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Refund Policy</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <div className="hx-eyebrow text-[#C89D66] mb-4">Company</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-[#C89D66]">About Us</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Our Story</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Careers</a></li>
            <li><a href="#" className="hover:text-[#C89D66]">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <div className="hx-eyebrow text-[#C89D66] mb-4">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/women" className="hover:text-[#C89D66]">Women</Link></li>
            <li><Link to="/men" className="hover:text-[#C89D66]">Men</Link></li>
            <li><Link to="/kids" className="hover:text-[#C89D66]">Kids</Link></li>
            <li><Link to="/new-arrivals" className="hover:text-[#C89D66]">New Arrivals</Link></li>
            <li><Link to="/collections" className="hover:text-[#C89D66]">Collections</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#EFE6DD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EFE6DD]/50">
          <div>© {new Date().getFullYear()} HIMAANIX. All rights reserved.</div>
          <div className="flex items-center gap-3 text-[#EFE6DD]/70">
            <span className="hx-eyebrow text-[10px]">Visa</span>
            <span className="hx-eyebrow text-[10px]">Mastercard</span>
            <span className="hx-eyebrow text-[10px]">AMEX</span>
            <span className="hx-eyebrow text-[10px]">COD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
