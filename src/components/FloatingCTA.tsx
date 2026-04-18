"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, MessageCircle, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            className="glass rounded-2xl p-4 w-56 border border-indigo-500/20 shadow-2xl shadow-black/50"
          >
            <p className="text-xs text-slate-400 mb-3 font-medium">
              👋 Let&apos;s connect! I&apos;m open to SDE roles.
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-indigo-500/15"
              >
                <Mail size={14} className="text-indigo-400" />
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-indigo-500/15"
              >
                <Linkedin size={14} className="text-indigo-400" />
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl relative"
        style={{
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          boxShadow: "0 8px 32px rgba(99, 102, 241, 0.45)",
        }}
        aria-label="Open contact options"
      >
        {expanded ? <X size={20} className="text-white" /> : <MessageCircle size={20} className="text-white" />}
        {/* Pulse ring when closed */}
        {!expanded && (
          <span
            className="absolute inset-0 rounded-2xl animate-ping opacity-20"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
          />
        )}
      </motion.button>

      {/* "Open to Work" label */}
      {!expanded && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-full"
        >
          Open to Work
        </motion.span>
      )}
    </div>
  );
}
