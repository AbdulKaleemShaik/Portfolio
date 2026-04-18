"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Send, MapPin, CheckCircle, XCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "@/lib/data";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // If keys not configured yet, fall back to mailto so the button still works
    if (!serviceId || serviceId === "your_service_id") {
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: personalInfo.email,
          reply_to: form.email,
        },
        publicKey
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="orb w-[400px] h-[400px] bg-indigo-600/8 top-0 right-0 pointer-events-none" />

      {/* Toast notification */}
      <AnimatePresence>
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.1))",
              border: "1px solid rgba(16,185,129,0.4)",
              backdropFilter: "blur(20px)",
            }}
          >
            <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Message sent successfully!</p>
              <p className="text-xs text-emerald-300 mt-0.5">I'll get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.1))",
              border: "1px solid rgba(239,68,68,0.4)",
              backdropFilter: "blur(20px)",
            }}
          >
            <XCircle size={18} className="text-red-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-white">Failed to send message.</p>
              <p className="text-xs text-red-300 mt-0.5">
                Email me directly at{" "}
                <a href={`mailto:${personalInfo.email}`} className="underline">
                  {personalInfo.email}
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <Mail size={16} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white section-title">Get In Touch</h2>
          </div>
          <p className="text-slate-400 text-sm mb-12 ml-11">
            Open to full-time roles and interesting backend engineering challenges.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <div className="glow-border rounded-2xl p-6 bg-[#12121f]">
                <h3 className="text-base font-bold text-white mb-2">Let&apos;s build something great</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I&apos;m actively looking for opportunities where I can build impactful systems, work
                  with high-quality engineers, and grow as a backend engineer. If that sounds like a fit,
                  I&apos;d love to hear from you.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 glow-border rounded-xl bg-[#12121f] hover:border-indigo-500/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Mail size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Email</div>
                    <div className="text-sm text-slate-200 font-medium">{personalInfo.email}</div>
                  </div>
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glow-border rounded-xl bg-[#12121f] hover:border-indigo-500/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Github size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">GitHub</div>
                    <div className="text-sm text-slate-200 font-medium">AbdulKaleemShaik</div>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glow-border rounded-xl bg-[#12121f] hover:border-indigo-500/40 transition-all group"
                >
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/30 transition-colors">
                    <Linkedin size={16} className="text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">LinkedIn</div>
                    <div className="text-sm text-slate-200 font-medium">skabdulkaleem</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glow-border rounded-xl bg-[#12121f]">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <MapPin size={16} className="text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Location</div>
                    <div className="text-sm text-slate-200 font-medium">India · Open to Relocation</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="contact-input"
                  disabled={status === "sending"}
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="contact-input"
                  disabled={status === "sending"}
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="contact-input resize-none"
                  disabled={status === "sending"}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              <p className="text-xs text-slate-500 text-center">
                I typically respond within 24 hours.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
