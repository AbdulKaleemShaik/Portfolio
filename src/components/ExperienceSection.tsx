"use client";
import { motion } from "framer-motion";
import { Briefcase, ChevronRight } from "lucide-react";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <Briefcase size={16} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white section-title">Experience</h2>
          </div>
          <p className="text-slate-400 text-sm mb-12 ml-11">
            Building real systems, delivering real impact.
          </p>

          <div className="space-y-6">
            {experience.map((exp, ei) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ei * 0.1 }}
                className="glow-border rounded-2xl bg-[#12121f] overflow-hidden"
              >
                {/* Company header */}
                <div className="px-6 py-5 border-b border-indigo-500/10">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                      <p className="text-sm text-slate-500">{exp.location}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center border border-indigo-500/20">
                      <Briefcase size={16} className="text-indigo-400" />
                    </div>
                  </div>
                </div>

                {/* Roles */}
                <div className="divide-y divide-indigo-500/10">
                  {exp.roles.map((role, ri) => (
                    <div key={role.title} className="px-6 py-5">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="font-semibold text-slate-200 text-sm">{role.title}</h4>
                          <p className="text-xs text-indigo-400 mt-0.5">{role.tech}</p>
                        </div>
                        <span className="text-xs text-slate-500 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                          {role.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {role.achievements.map((ach, ai) => (
                          <li key={ai} className="flex items-start gap-2.5 group">
                            <ChevronRight
                              size={14}
                              className="text-indigo-500 mt-0.5 flex-shrink-0 group-hover:text-indigo-400 transition-colors"
                            />
                            <span className="text-xs text-slate-400 leading-relaxed">
                              {/* Highlight bold metrics */}
                              {ach.split(/(\d+[\w%+]*(?:\s*→\s*[\w~]+)?|\d+K\+)/).map((part, pi) =>
                                /\d/.test(part) && (part.includes('%') || part.includes('K') || part.includes('+') || part.includes('→') || /^\d+$/.test(part) && parseInt(part) > 3) ? (
                                  <strong key={pi} className="text-slate-200 font-semibold">{part}</strong>
                                ) : (
                                  part
                                )
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
