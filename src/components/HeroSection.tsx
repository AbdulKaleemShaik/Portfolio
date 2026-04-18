"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChevronDown, Code2, Zap, Sparkles } from "lucide-react";
import { personalInfo, stats } from "@/lib/data";

const roles = [
  "Software Engineer",
  "Backend Engineer",
  "Node.js Developer",
  "Java Developer",
  "Full Stack Engineer",
];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="cursor-blink" />
    </span>
  );
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number; y: number; vx: number; vy: number; size: number; opacity: number;
    }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg grid-bg">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />
      <div className="orb w-[600px] h-[600px] bg-indigo-600/10 -top-40 -left-40" />
      <div className="orb w-[400px] h-[400px] bg-purple-600/10 bottom-0 right-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Open-to-Work badge — most prominent signal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-semibold"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))",
              border: "1px solid rgba(16,185,129,0.35)",
              color: "#34d399",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            🟢 Actively Looking for New Opportunities
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-tight text-white">
            {personalInfo.name}
          </h1>

          {/* Typing role */}
          <div className="flex items-center gap-3 mb-6 text-2xl sm:text-3xl font-semibold h-10">
            <Code2 size={22} className="text-indigo-400 flex-shrink-0" />
            <TypingEffect />
          </div>

          {/* One-liner impact statement */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-4">
            I build backend systems that <strong className="text-slate-200">serve 10K+ users</strong>,
            cut API latency by <strong className="text-slate-200">25%</strong>, and slash DB load by{" "}
            <strong className="text-slate-200">40%</strong> using Redis caching — all in production.
          </p>
          <p className="text-sm text-slate-500 max-w-2xl leading-relaxed mb-10">
            1+ year at Appitsimple · Oracle Certified Java · 300+ LeetCode · B.Tech CSE · Open to SDE roles globally.
          </p>

          {/* CTA Buttons — Resume download is #1 priority */}
          <div className="flex flex-wrap gap-3 mb-16">
            <a
              href="/resume.pdf"
              download="Abdul_Kaleem_Shaik_Resume.pdf"
              className="btn-primary text-sm"
              style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}
            >
              <Download size={15} />
              Download Resume
            </a>
            <a href="#contact" className="btn-primary text-sm">
              <Sparkles size={15} />
              Hire Me
            </a>
            <a href="#projects" className="btn-outline text-sm">
              <Zap size={15} />
              View Projects
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              <Github size={15} />
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
              <Linkedin size={15} />
              LinkedIn
            </a>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="stat-card"
              >
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500"
      >
        <span className="text-xs">Scroll to explore</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
