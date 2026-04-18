"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sparkles, FolderOpen, Star } from "lucide-react";
import { projects } from "@/lib/data";

const allTags = ["All", "Node.js", "Java", "Spring Boot", "MongoDB", "Redis", "React", "AWS", "Docker"];

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? projects
    : projects.filter((p) => p.category.includes(filter));

  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <FolderOpen size={16} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white section-title">Projects</h2>
          </div>
          <p className="text-slate-400 text-sm mb-8 ml-11">
            Real-world systems built with focus on performance, scalability, and architecture.
          </p>

          {/* Featured projects */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-5">
              <Star size={14} className="text-amber-400" />
              <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Featured</span>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {featured.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="project-card group relative"
                >
                  {/* Top accent bar */}
                  <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-transparent" />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-2">
                          <Sparkles size={11} /> Featured
                        </span>
                        <h3 className="text-base font-bold text-white leading-snug">{project.title}</h3>
                      </div>
                      <span className="text-xs text-slate-500 flex-shrink-0 ml-2">{project.year}</span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 3).map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2 text-xs text-slate-400">
                          <span className="text-indigo-400 mt-0.5 font-bold flex-shrink-0">→</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-indigo-500/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                      >
                        <Github size={14} /> Source Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === tag
                    ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-indigo-500/10 text-slate-400 border border-indigo-500/20 hover:border-indigo-500/40 hover:text-slate-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* All projects grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  className="project-card"
                >
                  <div className="p-5 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-bold text-white leading-snug flex-1 pr-2">{project.title}</h3>
                      <span className="text-xs text-slate-600 flex-shrink-0">{project.year}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 pt-3 border-t border-indigo-500/10">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors"
                      >
                        <Github size={12} /> Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <ExternalLink size={12} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
