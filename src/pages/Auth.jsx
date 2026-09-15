import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/Context/AuthContext";
import { toast } from "sonner";
import ProductImage from "@/components/ProductImage";

function formatDetail(d) {
  if (!d) return "Something went wrong.";
  if (typeof d === "string") return d;
  if (Array.isArray(d)) return d.map((e) => e?.msg || JSON.stringify(e)).join(" ");
  return String(d);
}

export default function Auth() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const next = new URLSearchParams(location.search).get("next") || "/";

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "login") await login(form.email, form.password);
      else await register(form.name, form.email, form.password);
      toast.success(mode === "login" ? "Welcome back." : "Welcome to HIMAANIX.");
      navigate(next);
    } catch (err) {
      toast.error(formatDetail(err?.response?.data?.detail));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 min-h-[80vh]">
      <div className="hidden md:block">
        <ProductImage src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80&auto=format&fit=crop" seed="auth-editorial" alt="HIMAANIX member" ratio="h-full min-h-[80vh]" monogramSize="text-9xl" label="MEMBER · HIMAANIX" />
      </div>
      <div className="flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <Link to="/" className="hx-eyebrow">← Back to HIMAANIX</Link>
          <h1 className="font-serif text-4xl md:text-5xl mt-6">{mode === "login" ? "Welcome back." : "Create your account."}</h1>
          <p className="mt-3 text-[#5C524C]">
            {mode === "login" ? "Sign in to your HIMAANIX account." : "Join for early access, exclusive edits and faster checkout."}
          </p>

          <div className="mt-8 flex border-b border-[#2B1B17]/20">
            <button onClick={() => setMode("login")} className={`flex-1 py-3 text-xs uppercase tracking-[0.28em] ${mode === "login" ? "border-b-2 border-[#1A1110] text-[#1A1110]" : "text-[#91857D]"}`} data-testid="auth-tab-login">Sign In</button>
            <button onClick={() => setMode("register")} className={`flex-1 py-3 text-xs uppercase tracking-[0.28em] ${mode === "register" ? "border-b-2 border-[#1A1110] text-[#1A1110]" : "text-[#91857D]"}`} data-testid="auth-tab-register">Create Account</button>
          </div>

          <form onSubmit={submit} className="mt-8 space-y-5">
            {mode === "register" && (
              <label className="block">
                <span className="hx-eyebrow text-[10px]">Full Name</span>
                <input required value={form.name} onChange={(e) => update("name", e.target.value)} className="mt-1 w-full bg-transparent border-b border-[#2B1B17]/20 py-2 focus:outline-none focus:border-[#1A1110]" data-testid="auth-name-input" />
              </label>
            )}
            <label className="block">
              <span className="hx-eyebrow text-[10px]">Email</span>
              <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1 w-full bg-transparent border-b border-[#2B1B17]/20 py-2 focus:outline-none focus:border-[#1A1110]" data-testid="auth-email-input" />
            </label>
            <label className="block">
              <span className="hx-eyebrow text-[10px]">Password</span>
              <input required type="password" minLength={6} value={form.password} onChange={(e) => update("password", e.target.value)} className="mt-1 w-full bg-transparent border-b border-[#2B1B17]/20 py-2 focus:outline-none focus:border-[#1A1110]" data-testid="auth-password-input" />
            </label>
            <button disabled={loading} className="w-full bg-[#1A1110] text-[#FDFBF7] py-4 text-xs uppercase tracking-[0.28em] disabled:opacity-60" data-testid={mode === "login" ? "auth-login-submit-button" : "auth-signup-submit-button"}>
              {loading ? "Please wait…" : mode === "login" ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="mt-6 text-xs text-[#91857D]">
            By continuing you agree to our Terms & Conditions and Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
}
