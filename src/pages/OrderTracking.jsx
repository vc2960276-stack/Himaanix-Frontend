import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, MapPin, Package, Truck } from "lucide-react";
import api from "@/lib/api";
import { useAuth } from "@/Context/AuthContext";
import OrderTimeline from "@/components/OrderTimeline";
import { formatPrice } from "@/lib/currency";

const formatDate = (value) => {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function OrderTracking() {
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    if (authLoading) return undefined;
    if (!user) {
      navigate(`/auth?next=${encodeURIComponent(`/account/orders/${id}`)}`);
      return undefined;
    }

    let cancelled = false;
    api.get(`/orders/${id}`)
      .then(({ data }) => {
        if (!cancelled) setOrder(data);
      })
      .catch(() => {
        if (!cancelled) setLoadError(true);
      });

    return () => { cancelled = true; };
  }, [id, user, authLoading, navigate]);

  if (authLoading || (!order && !loadError)) {
    return <div className="min-h-[60vh] flex items-center justify-center text-[#91857D]">Loading order tracking…</div>;
  }

  if (loadError || !order) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center" data-testid="order-tracking-error">
        <Package className="w-10 h-10 mx-auto text-[#C89D66]" />
        <h1 className="font-serif text-3xl mt-5">Order not found</h1>
        <p className="mt-3 text-sm text-[#5C524C]">We couldn’t load this order. Check the order number or open your order history.</p>
        <Link to="/account/orders" className="inline-flex items-center gap-2 mt-7 bg-[#1A1110] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#FDFBF7]">
          <ArrowLeft className="w-4 h-4" /> View My Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-testid="order-tracking-page">
      <Link to="/account/orders" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#5C524C] hover:text-[#1A1110]">
        <ArrowLeft className="w-4 h-4" /> View My Orders
      </Link>
      <div className="hx-eyebrow mt-8">Order Tracking</div>
      <h1 className="font-serif text-4xl md:text-5xl mt-2">{order.id}</h1>
      <p className="mt-2 text-sm text-[#5C524C]">Placed {formatDate(order.created_at)}</p>

      <div className="mt-8">
        <OrderTimeline tracking={order.tracking} />
      </div>

      <section className="mt-8 grid gap-8 border-t border-[#2B1B17]/10 pt-8 md:grid-cols-2">
        <div>
          <div className="hx-eyebrow mb-3">Items</div>
          <div className="space-y-4">
            {order.items.map((item, index) => (
              <div key={`${item.product_id}-${index}`} className="flex justify-between gap-4 text-sm">
                <div>
                  <div className="text-[#1A1110]">{item.name}</div>
                  <div className="mt-1 text-xs text-[#91857D]">
                    {item.size ? `Size ${item.size} · ` : ""}{item.color} · Qty {item.quantity}
                  </div>
                </div>
                <div className="shrink-0">{formatPrice(item.price * item.quantity)}</div>
              </div>
            ))}
          </div>
          <div className="mt-5 border-t border-[#2B1B17]/10 pt-3 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatPrice(order.subtotal)}</span></div>
            <div className="flex justify-between mt-2"><span>Shipping</span><span>{order.shipping === 0 ? "Free" : formatPrice(order.shipping)}</span></div>
            <div className="flex justify-between mt-3 border-t border-[#2B1B17]/10 pt-3 font-medium"><span>Total</span><span>{formatPrice(order.total)}</span></div>
          </div>
        </div>

        <div className="space-y-7">
          <div>
            <div className="hx-eyebrow mb-3">Delivery Address</div>
            <div className="flex gap-2 text-sm text-[#5C524C]">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C89D66]" />
              <div>
                <div className="text-[#1A1110]">{order.address.full_name}</div>
                <div>{order.address.address_line1}{order.address.address_line2 ? `, ${order.address.address_line2}` : ""}</div>
                <div>{order.address.city}, {order.address.state} {order.address.pincode}</div>
                <div>{order.address.country}</div>
                <div className="mt-1">Phone: {order.address.phone}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="hx-eyebrow mb-3">Payment</div>
            <div className="flex items-center gap-2 text-sm text-[#5C524C]">
              <Truck className="h-4 w-4 text-[#C89D66]" />
              {order.payment_method === "COD" ? "Cash on Delivery" : order.payment_method}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}