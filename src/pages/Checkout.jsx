import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "@/context/ShopContext";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

export default function Checkout() {
  const { cart, totals, clearCart } = useShop();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [placing, setPlacing] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [form, setForm] = useState({
    full_name: user?.name || "", phone: "", address_line1: "", address_line2: "",
    city: "", state: "", pincode: "", country: "India",
  });

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please sign in to place your order.");
      return navigate("/auth?next=/checkout");
    }
    if (cart.length === 0) return toast.error("Your bag is empty.");
    setPlacing(true);
    try {
      const { data } = await api.post("/orders", {
        items: cart.map((it) => ({
          product_id: it.product_id, name: it.name, price: it.price,
          size: it.size, color: it.color, quantity: it.quantity,
        })),
        address: form,
        subtotal: totals.subtotal,
        shipping: totals.shipping,
        total: totals.total,
        payment_method: "COD",
      });
      setOrderId(data.order_id);
      clearCart();
    } catch (err) {
      toast.error(err?.response?.data?.detail || "Could not place order.");
    } finally {
      setPlacing(false);
    }
  };

  if (orderId) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center" data-testid="order-confirmation">
        <CheckCircle2 className="w-14 h-14 text-[#C89D66] mx-auto" />
        <div className="hx-eyebrow mt-6">Order Confirmed</div>
        <h1 className="font-serif text-4xl md:text-5xl mt-3">Thank you for your order.</h1>
        <p className="mt-4 text-[#5C524C]">Your order <span className="font-mono text-[#1A1110]">{orderId}</span> has been placed. We'll notify you when it ships.</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/account/orders" className="bg-[#1A1110] text-[#FDFBF7] px-6 py-3 text-xs uppercase tracking-[0.28em]" data-testid="view-orders-link">View My Orders</Link>
          <Link to="/products" className="border border-[#1A1110] px-6 py-3 text-xs uppercase tracking-[0.28em]">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="hx-eyebrow mb-3">Checkout</div>
      <h1 className="font-serif text-4xl md:text-5xl">Complete your order.</h1>

      <div className="grid md:grid-cols-3 gap-10 mt-10">
        <form onSubmit={submit} className="md:col-span-2 space-y-8">
          <div>
            <div className="hx-eyebrow mb-4">Delivery Address</div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["full_name", "Full Name", "col-span-2"],
                ["phone", "Phone", "col-span-2 md:col-span-1"],
                ["pincode", "Pincode", "col-span-2 md:col-span-1"],
                ["address_line1", "Address Line 1", "col-span-2"],
                ["address_line2", "Address Line 2 (optional)", "col-span-2"],
                ["city", "City", "col-span-1"],
                ["state", "State", "col-span-1"],
                ["country", "Country", "col-span-2"],
              ].map(([k, label, span]) => (
                <label key={k} className={`block ${span}`}>
                  <span className="hx-eyebrow text-[10px]">{label}</span>
                  <input
                    required={k !== "address_line2"}
                    value={form[k]} onChange={(e) => update(k, e.target.value)}
                    className="mt-1 w-full bg-transparent border-b border-[#2B1B17]/20 py-2 focus:outline-none focus:border-[#1A1110]"
                    data-testid={`checkout-${k}`}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <div className="hx-eyebrow mb-4">Payment Method</div>
            <label className="flex items-start gap-4 border border-[#1A1110] p-5 cursor-pointer">
              <input type="radio" checked readOnly className="mt-1 accent-[#1A1110]" data-testid="checkout-payment-cod" />
              <div>
                <div className="font-serif text-xl">Cash on Delivery</div>
                <div className="text-sm text-[#5C524C] mt-1">Pay in cash when your order is delivered. Available everywhere HIMAANIX ships.</div>
              </div>
            </label>
          </div>

          <button
            type="submit"
            disabled={placing}
            className="w-full md:w-auto bg-[#1A1110] text-[#FDFBF7] px-10 py-4 text-xs uppercase tracking-[0.28em] hover:bg-[#2B1B17] disabled:opacity-60"
            data-testid="checkout-place-order-button"
          >
            {placing ? "Placing order…" : "Place Order · COD"}
          </button>
        </form>

        <aside className="md:col-span-1 bg-[#EFE6DD] p-6 h-fit">
          <div className="hx-eyebrow mb-4">Order Summary</div>
          <div className="space-y-3 max-h-80 overflow-auto pr-1">
            {cart.map((it) => (
              <div key={it.key} className="flex items-center justify-between text-sm">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-xs text-[#91857D]">{it.size} · {it.color} · Qty {it.quantity}</div>
                </div>
                <div>${(it.price * it.quantity).toFixed(2)}</div>
              </div>
            ))}
            {cart.length === 0 && <div className="text-sm text-[#5C524C]">Your bag is empty. <Link to="/products" className="underline">Shop now</Link></div>}
          </div>
          <div className="border-t border-[#2B1B17]/15 mt-5 pt-4 space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{totals.subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between text-[#5C524C]"><span>Shipping</span><span>{totals.shipping === 0 ? "Free" : `₹${totals.shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between font-serif text-xl border-t border-[#2B1B17]/15 pt-3"><span>Total</span><span>₹{totals.total.toFixed(2)}</span></div>
          </div>
        </aside>
      </div>
    </div>
  );
}
