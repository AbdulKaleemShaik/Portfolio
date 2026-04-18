"use client";
import { motion } from "framer-motion";
import { Zap, Shield, Layers, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Performance-First",
    desc: "25% latency reduction, 40% DB load cut using Redis in production at 10K+ users.",
    color: "text-indigo-400",
    bg: "from-indigo-500/15 to-indigo-500/5 border-indigo-500/20",
  },
  {
    icon: Shield,
    title: "Security-Aware",
    desc: "Zero-trust JWT auth with refresh-token rotation & Redis-backed session blacklisting.",
    color: "text-emerald-400",
    bg: "from-emerald-500/15 to-emerald-500/5 border-emerald-500/20",
  },
  {
    icon: Layers,
    title: "System Design",
    desc: "Multi-tenant SaaS, microservices, AWS Lambda pipelines — production-grade architecture.",
    color: "text-purple-400",
    bg: "from-purple-500/15 to-purple-500/5 border-purple-500/20",
  },
  {
    icon: TrendingUp,
    title: "Full Ownership",
    desc: "Shipped 8 features end-to-end — from DB schema to CI/CD to AWS deployment.",
    color: "text-amber-400",
    bg: "from-amber-500/15 to-amber-500/5 border-amber-500/20",
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 relative border-y border-indigo-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/20 to-purple-950/10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-xs text-indigo-400 font-semibold uppercase tracking-widest mb-3">
            What I bring to your team
          </p>
          <h2 className="text-center text-2xl font-bold text-white mb-10">
            Why hire me?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${p.bg} border rounded-2xl p-5 transition-all hover:-translate-y-1 duration-300`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${p.color}`}
                  style={{ background: "rgba(255,255,255,0.05)" }}>
                  <p.icon size={18} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
