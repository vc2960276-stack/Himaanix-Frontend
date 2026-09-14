import React from "react";
import { CheckCircle2, Clock, Package, Truck, Home } from "lucide-react";

const ICONS = {
  confirmed: CheckCircle2,
  packed: Package,
  shipped: Truck,
  delivered: Home,
};

const fmt = (iso) => {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString(undefined, {
      month: "short", day: "numeric", hour: "numeric", minute: "2-digit",
    });
  } catch { return ""; }
};

export default function OrderTimeline({ tracking }) {
  if (!tracking?.timeline?.length) return null;
  const { timeline, current_status, estimated_delivery } = tracking;
  const doneCount = timeline.filter((s) => s.completed).length;
  const progressPct = ((doneCount - 1) / (timeline.length - 1)) * 100;

  return (
    <div className="border border-[#2B1B17]/10 bg-white p-5 md:p-6" data-testid="order-timeline">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="hx-eyebrow text-[10px]">Order Tracking</div>
          <div className="font-serif text-xl mt-1 capitalize">
            {timeline.find((s) => s.key === current_status)?.label || "Confirmed"}
          </div>
        </div>
        <div className="text-right">
          <div className="hx-eyebrow text-[10px]">Estimated Delivery</div>
          <div className="text-sm mt-1">{fmt(estimated_delivery)}</div>
        </div>
      </div>

      <div className="relative">
        {/* rail */}
        <div className="absolute left-0 right-0 top-5 h-[2px] bg-[#2B1B17]/10" />
        <div
          className="absolute left-0 top-5 h-[2px] bg-[#C89D66] transition-all duration-700"
          style={{ width: `${Math.max(0, Math.min(100, progressPct))}%` }}
        />

        <div className="relative grid grid-cols-4 gap-3">
          {timeline.map((s) => {
            const Icon = ICONS[s.key] || Clock;
            const active = s.completed;
            const isCurrent = s.key === current_status;
            return (
              <div key={s.key} className="flex flex-col items-center text-center" data-testid={`timeline-step-${s.key}`}>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${
                    active
                      ? "bg-[#1A1110] text-[#C89D66] border-[#1A1110]"
                      : "bg-[#FDFBF7] text-[#91857D] border-[#2B1B17]/15"
                  } ${isCurrent ? "ring-4 ring-[#C89D66]/25" : ""}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className={`mt-3 text-xs uppercase tracking-[0.2em] ${active ? "text-[#1A1110]" : "text-[#91857D]"}`}>
                  {s.label}
                </div>
                <div className={`mt-1 text-[10px] ${active ? "text-[#5C524C]" : "text-[#91857D]"} font-mono`}>
                  {active ? fmt(s.completed_at) : fmt(s.target_at)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
