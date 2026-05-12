import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    desc: "Optimized performance out of the box. Sub-second load times on every device.",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    desc: "Enterprise-grade encryption and authentication built into every layer.",
  },
  {
    icon: "📊",
    title: "Real-time Analytics",
    desc: "Track every metric that matters with live dashboards and smart insights.",
  },
  {
    icon: "🤝",
    title: "Team Collaboration",
    desc: "Invite your team, assign roles, and ship together with zero friction.",
  },
];

const plans = [
  {
    name: "Free",
    price: "₦0",
    period: "forever",
    desc: "Perfect for individuals getting started.",
    features: ["Up to 3 projects", "5GB storage", "Basic analytics", "Community support"],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₦4,999",
    period: "per month",
    desc: "For growing teams who need more power.",
    features: ["Unlimited projects", "50GB storage", "Advanced analytics", "Priority support", "Custom domain"],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    desc: "For large teams with custom requirements.",
    features: ["Everything in Pro", "Unlimited storage", "Dedicated manager", "SLA guarantee", "SSO & SAML"],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function LandingPage() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50 px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-purple-400">FlowSaaS</span>
        <div className="flex items-center gap-4">
          <a href="#features" className="text-sm text-gray-400 hover:text-white transition hidden sm:block">Features</a>
          <a href="#pricing" className="text-sm text-gray-400 hover:text-white transition hidden sm:block">Pricing</a>
          <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition border border-gray-700 hover:border-purple-500 px-4 py-1.5 rounded-full">
            ← Portfolio
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="pt-32 pb-24 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs rounded-full mb-6">
              Now in Public Beta
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Build faster.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Ship smarter.
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-10">
              FlowSaaS gives your team everything it needs to go from idea to production in record time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#pricing"
                className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition"
              >
                Start for Free
              </a>
              <a
                href="#features"
                className="px-8 py-3.5 border border-gray-700 hover:border-purple-500 hover:text-purple-400 rounded-full transition"
              >
                See Features
              </a>
            </div>
          </motion.div>

          {/* Mock UI card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 bg-gray-900 border border-gray-800 rounded-2xl p-6 text-left shadow-2xl"
          >
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-500/60" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <span className="w-3 h-3 rounded-full bg-green-500/60" />
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-gray-800 rounded w-3/4" />
              <div className="h-3 bg-gray-800 rounded w-1/2" />
              <div className="h-3 bg-purple-500/20 rounded w-2/3" />
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-16 bg-gray-800 rounded-xl border border-gray-700" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-gray-400 max-w-md mx-auto">Powerful features built for modern teams who move fast and ship often.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-950 border border-gray-800 hover:border-purple-500/40 rounded-2xl p-6 transition"
              >
                <span className="text-3xl mb-4 block">{f.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing</h2>
            <p className="text-gray-400 mb-6">No hidden fees. Cancel anytime.</p>
            <div className="inline-flex bg-gray-900 border border-gray-800 rounded-full p-1">
              {["monthly", "yearly"].map((b) => (
                <button
                  key={b}
                  onClick={() => setBilling(b)}
                  className={`px-5 py-1.5 rounded-full text-sm capitalize transition ${
                    billing === b ? "bg-purple-600 text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {b} {b === "yearly" && <span className="text-xs text-green-400 ml-1">-20%</span>}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl p-6 border flex flex-col ${
                  plan.highlighted
                    ? "bg-purple-600/10 border-purple-500"
                    : "bg-gray-900 border-gray-800"
                }`}
              >
                {plan.highlighted && (
                  <span className="text-xs bg-purple-500 text-white px-3 py-1 rounded-full self-start mb-4">Most Popular</span>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold">
                    {plan.price === "Custom" ? plan.price : billing === "yearly" && plan.price !== "₦0"
                      ? "₦" + Math.round(parseInt(plan.price.replace(/[₦,]/g, "")) * 0.8).toLocaleString()
                      : plan.price}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">/ {plan.period}</span>
                </div>
                <ul className="space-y-2 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-purple-400">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition ${
                    plan.highlighted
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "border border-gray-700 hover:border-purple-500 hover:text-purple-400 text-gray-300"
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-600 text-sm">
        © 2026 FlowSaaS. Built by Muizat Hammed.
      </footer>

    </div>
  );
}
