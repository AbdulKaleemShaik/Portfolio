"use client";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { skills } from "@/lib/data";

const categoryColors: Record<string, string> = {
  Backend: "from-indigo-500/20 to-indigo-600/5 border-indigo-500/20",
  Frontend: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20",
  Databases: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20",
  "Cloud & DevOps": "from-orange-500/20 to-orange-600/5 border-orange-500/20",
  Core: "from-purple-500/20 to-purple-600/5 border-purple-500/20",
};

const categoryDotColors: Record<string, string> = {
  Backend: "bg-indigo-400",
  Frontend: "bg-cyan-400",
  Databases: "bg-emerald-400",
  "Cloud & DevOps": "bg-orange-400",
  Core: "bg-purple-400",
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Subtle bg */}
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
              <Layers size={16} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white section-title">Technical Skills</h2>
          </div>
          <p className="text-slate-400 text-sm mb-12 ml-11">
            Technologies I work with daily in production environments.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Object.entries(skills).map(([category, items], i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-gradient-to-br ${categoryColors[category]} border rounded-2xl p-5 backdrop-blur-sm`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2.5 h-2.5 rounded-full ${categoryDotColors[category]}`} />
                  <span className="skill-cat-label">{category}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="tech-tag text-xs">
                      {skill}
                    </span>
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
