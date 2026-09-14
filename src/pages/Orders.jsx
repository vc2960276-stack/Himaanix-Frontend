import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Package, ChevronRight, MapPin, Truck } from "lucide-react";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import ProductImage from "@/components/ProductImage";
import OrderTimeline from "@/components/OrderTimeline";
import { formatPrice } from "@/lib/currency";

const STATUS_TONE = {
  confirmed: { label: "Confirmed",  dot: "#C89D66", text: "#2B1B17" },
  packed:    { label: "Packed",     dot: "#B78A56", text: "#2B1B17" },
  shipped:   { label: "In Transit", dot: "#8A6D3A", text: "#2B1B17" },
  delivered: { label: "Delivered",  dot: "#3E5C3A", text: "#2B1B17" },
  cancelled: { label: "Cancelled",  dot: "#A85D48", text: "#A85D48" },
};

const fmtDate = (iso) => {
  try {
    return new Date(iso).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  } catch { return ""; }
};

export default function Orders() {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState(null);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate("/auth?next=/account/orders"); return; }
    (async () => {
      try {
        const { data } = await api.get("/orders");
        setOrders(data.orders || []);
      } catch (e) { setOrders([]); }
    })();
  }, [user, authLoading, navigate]);

  if (authLoading || orders === null) {
    return <div className="min-h-[60vh] flex items-center justify-center text-[#91857D]">Loading your orders…</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="orders-page">
      <div className="hx-eyebrow mb-3">My Account</div>
      <h1 className="font-serif text-4xl md:text-5xl">Order History</h1>
      <p className="mt-3 text-[#5C524C]">All your HIMAANIX orders, in one considered place.</p>

      {orders.length === 0 ? (
        <div className="mt-16 text-center border border-[#2B1B17]/10 py-20 px-6" data-testid="orders-empty">
          <Package className="w-10 h-10 mx-auto text-[#C89D66]" />
          <h2 className="font-serif text-3xl mt-6">No orders yet.</h2>
          <p className="mt-3 text-[#5C524C]">When you place an order, it will appear here.</p>
          <Link to="/products" className="inline-block mt-8 bg-[#1A1110] text-[#FDFBF7] px-6 py-3 text-xs uppercase tracking-[0.28em]">Start Shopping</Link>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {orders.map((o) => {
            const tone = STATUS_TONE[o.status] || STATUS_TONE.confirmed;
            const open = !!expanded[o.id];
            const itemCount = o.items.reduce((s, it) => s + it.quantity, 0);
            return (
              <div key={o.id} className="border border-[#2B1B17]/10 bg-white" data-testid={`order-${o.id}`}>
                <button
                  onClick={() => setExpanded((s) => ({ ...s, [o.id]: !s[o.id] }))}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left hover:bg-[#F5F0EB]/40 transition-colors"
                  data-testid={`order-toggle-${o.id}`}
                >
                  <div className="flex-1 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-6 items-center">
                    <div>
                      <div className="hx-eyebrow text-[10px]">Order</div>
                      <div className="font-mono text-sm mt-1">{o.id}</div>
                    </div>
                    <div>
                      <div className="hx-eyebrow text-[10px]">Placed</div>
                      <div className="text-sm mt-1">{fmtDate(o.created_at)}</div>
                    </div>
                    <div>
                      <div className="hx-eyebrow text-[10px]">Items</div>
                      <div className="text-sm mt-1">{itemCount} piece{itemCount === 1 ? "" : "s"}</div>
                    </div>
                    <div>
                      <div className="hx-eyebrow text-[10px]">Total</div>
                      <div className="font-serif text-lg mt-1">{formatPrice(o.total)}</div>
                    </div>
                    <div>
                      <div className="hx-eyebrow text-[10px]">Status</div>
                      <div className="mt-1 inline-flex items-center gap-2 text-sm" style={{ color: tone.text }}>
                        <span className="w-2 h-2 rounded-full" style={{ background: tone.dot }} />
                        {tone.label}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-5 h-5 ml-4 transition-transform ${open ? "rotate-90" : ""}`} />
                </button>

                {open && (
                  <div className="border-t border-[#2B1B17]/10 p-5 md:p-6 space-y-6 bg-[#FDFBF7]" data-testid={`order-details-${o.id}`}>
                    {o.tracking && <OrderTimeline tracking={o.tracking} />}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="hx-eyebrow mb-2">Delivery Address</div>
                        <div className="flex gap-2 text-sm text-[#5C524C]">
                          <MapPin className="w-4 h-4 flex-shrink-0 text-[#C89D66] mt-0.5" />
                          <div>
                            <div className="text-[#1A1110]">{o.address.full_name}</div>
                            <div>{o.address.address_line1}{o.address.address_line2 ? `, ${o.address.address_line2}` : ""}</div>
                            <div>{o.address.city}, {o.address.state} {o.address.pincode}</div>
                            <div>{o.address.country}</div>
                            <div className="mt-1">Phone: {o.address.phone}</div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="hx-eyebrow mb-2">Payment</div>
                        <div className="flex items-center gap-2 text-sm">
                          <Truck className="w-4 h-4 text-[#C89D66]" />
                          {o.payment_method === "COD" ? "Cash on Delivery" : o.payment_method}
                        </div>
                        <div className="mt-3 text-xs text-[#91857D] space-y-1">
                          <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(o.subtotal)}</span></div>
                          <div className="flex justify-between"><span>Shipping</span><span>{o.shipping === 0 ? "Free" : formatPrice(o.shipping)}</span></div>
                          <div className="flex justify-between text-[#1A1110] font-medium pt-1 border-t border-[#2B1B17]/10 mt-1"><span>Total</span><span>{formatPrice(o.total)}</span></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="hx-eyebrow mb-3">Items</div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {o.items.map((it, i) => (
                          <div key={i} className="flex gap-4 border border-[#2B1B17]/8 p-3">
                            <div className="w-16 flex-shrink-0">
                              <ProductImage seed={it.product_id} alt={it.name} ratio="aspect-[3/4]" monogramSize="text-base" />
                            </div>
                            <div className="flex-1 text-sm">
                              <Link to={`/product/${it.product_id}`} className="font-serif text-base leading-tight hover:text-[#C89D66]">{it.name}</Link>
                              <div className="text-xs text-[#91857D] mt-1">{it.size && `Size ${it.size} · `}{it.color} · Qty {it.quantity}</div>
                              <div className="mt-1">{formatPrice(it.price * it.quantity)}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
