"use client";
import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-indigo-500/10 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Code2 size={12} className="text-white" />
            </div>
            <span className="font-bold text-sm text-slate-300">
              Abdul Kaleem<span className="text-indigo-400">.</span>
            </span>
          </div>

          <p className="text-xs text-slate-500 flex items-center gap-1">
            Built with <Heart size={11} className="text-red-400 fill-red-400" /> using Next.js & Tailwind CSS
          </p>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-indigo-500/20 transition-all"
              aria-label="Email"
            >
              <Mail size={14} />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-indigo-500/20 transition-all"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white hover:bg-indigo-500/20 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          © {year} Abdul Kaleem Shaik. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
