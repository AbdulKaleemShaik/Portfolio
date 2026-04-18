"use client";
import { motion } from "framer-motion";
import { User, BookOpen, Award } from "lucide-react";
import { personalInfo, education, certifications } from "@/lib/data";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <User size={16} className="text-indigo-400" />
            </div>
            <h2 className="text-2xl font-bold text-white section-title">About Me</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left – avatar + bio */}
            <div className="space-y-6">
              <div className="flex items-start gap-6">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden glow-border">
                    <Image
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full border-2 border-[#0a0a0f]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{personalInfo.name}</h3>
                  <p className="text-indigo-400 text-sm font-medium">{personalInfo.title}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-slate-400">Available for opportunities</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed text-sm">
                {personalInfo.summary}
              </p>

              <p className="text-slate-400 leading-relaxed text-sm">
                I thrive at the intersection of performance engineering and clean architecture — whether
                that&apos;s slashing API latency with Redis caching strategies, building zero-trust auth
                flows, or architecting event-driven microservices on AWS. Every problem I work on starts
                with understanding the system deeply, then solving it with precision.
              </p>

              {/* Social links */}
              <div className="flex gap-3 flex-wrap">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="tech-tag hover:cursor-pointer"
                >
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-tag hover:cursor-pointer"
                >
                  LeetCode 300+
                </a>
              </div>
            </div>

            {/* Right – education + certs */}
            <div className="space-y-6">
              {/* Education card */}
              <div className="glow-border rounded-2xl p-6 bg-[#12121f]">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-indigo-400" />
                  <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Education
                  </span>
                </div>
                <h4 className="text-base font-bold text-white">{education.university}</h4>
                <p className="text-sm text-slate-400 mt-1">{education.degree}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-slate-500">{education.period}</span>
                  <span className="highlight-chip">CGPA {education.cgpa}</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="glow-border rounded-2xl p-6 bg-[#12121f]">
                <div className="flex items-center gap-2 mb-4">
                  <Award size={16} className="text-indigo-400" />
                  <span className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Achievements
                  </span>
                </div>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-sm text-slate-200 font-medium">{cert.name}</span>
                        <span className="text-slate-500 text-sm"> — {cert.detail}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
