"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import TypeWriter from "@/app/components/helper/typewriter";

/* ── Floating particles ── */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current; if (!c) return;
    const ctx = c.getContext("2d");
    let id;
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1 + 0.3,
      dx: (Math.random() - 0.5) * 0.3, dy: (Math.random() - 0.5) * 0.3,
      o: Math.random() * 0.4 + 0.1,
      col: ["#7c3aed","#06b6d4","#ffffff"][Math.floor(Math.random() * 3)],
    }));
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.col; ctx.globalAlpha = p.o; ctx.fill();
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0) p.x = c.width; if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height; if (p.y > c.height) p.y = 0;
      });
      ctx.globalAlpha = 1; id = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 pointer-events-none opacity-35" />;
}

/* ── Magnetic button ── */
function Mag({ href, target, children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 280, damping: 18 });
  const sy = useSpring(y, { stiffness: 280, damping: 18 });
  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }}
      onMouseMove={e => { const r = ref.current.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.28); y.set((e.clientY - r.top - r.height / 2) * 0.28); }}
      onMouseLeave={() => { x.set(0); y.set(0); }} className="inline-block">
      <Link href={href} target={target} className={className}>{children}</Link>
    </motion.div>
  );
}

/* ── Animated code line ── */
function CodeRow({ children, indent = false }) {
  return (
    <motion.div className={indent ? "pl-5" : ""}
      variants={{ hidden: { opacity: 0, x: -8 }, visible: { opacity: 1, x: 0, transition: { duration: 0.3 } } }}>
      {children}
    </motion.div>
  );
}

const roles = ["build Full-Stack Apps", "ship AI Systems", "craft Web3 Solutions", "write Clean Code", "deploy to Production 🚀"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[#06060f]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1920&q=50" alt="" className="w-full h-full object-cover opacity-[0.09]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-5%,rgba(124,58,237,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <Particles />

      <div className="relative z-10 w-full">
        {/* Badge */}
        <motion.div className="mb-10 flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <motion.span className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ scale: [1,1.7,1], opacity:[1,0.3,1] }} transition={{ duration: 2, repeat: Infinity }} />
          <span className="text-[11px] font-mono tracking-[0.22em] text-gray-500 uppercase">Available for opportunities</span>
        </motion.div>

        {/* Name */}
        <div className="mb-10">
          <motion.p className="text-[11px] tracking-[0.35em] text-gray-600 mb-5 font-mono uppercase"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}>
            Software Engineer · Full-Stack · AI
          </motion.p>
          <div className="overflow-hidden">
            <motion.h1 className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-light leading-[1] tracking-[-0.01em] text-white/80"
              initial={{ y: "105%" }} animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              Smit
            </motion.h1>
          </div>
          <div className="overflow-hidden flex items-baseline gap-4">
            <motion.h1 className="text-[clamp(1.9rem,4.2vw,3.6rem)] font-black leading-[1] tracking-[-0.02em] text-white"
              initial={{ y: "105%" }} animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}>
              Patne
            </motion.h1>
            <motion.span className="w-3 h-3 rounded-full bg-violet-500 mb-3 flex-shrink-0"
              initial={{ scale: 0 }} animate={{ scale: 1 }}
              transition={{ delay: 0.55, type: "spring", stiffness: 300 }} />
          </div>
          <motion.div className="h-px mt-4 bg-gradient-to-r from-white/20 via-violet-500/50 to-transparent"
            initial={{ scaleX: 0, originX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }} />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div className="space-y-7"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.6 }}>

            {/* Typewriter role */}
            <p className="text-lg text-gray-400 leading-relaxed">
              I <TypeWriter words={roles} className="text-white font-semibold" />
            </p>

            {/* Brief bio */}
            <p className="text-base text-gray-500 leading-relaxed">
              Versatile engineer with <span className="text-gray-300">2+ years</span> building AI systems, full-stack applications, and cloud infrastructure. Passionate about turning complex problems into elegant, scalable solutions.
            </p>

            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: "30+", l: "Projects", color: "from-violet-500/20 to-violet-500/5" },
                { n: "2+",  l: "Years Exp", color: "from-cyan-500/20 to-cyan-500/5" },
                { n: "5",   l: "Companies", color: "from-pink-500/20 to-pink-500/5" },
              ].map(({ n, l, color }, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className={`glass rounded-xl p-4 text-center bg-gradient-to-b ${color} group cursor-default`}
                  whileHover={{ y: -3 }}>
                  <p className="text-2xl font-black text-white group-hover:text-violet-300 transition-colors duration-300">{n}</p>
                  <p className="text-[11px] text-gray-600 font-mono tracking-widest mt-1 uppercase">{l}</p>
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {[
                { href: personalData.linkedIn, Icon: BsLinkedin, label: "LinkedIn", cls: "hover:bg-blue-500/15 hover:border-blue-500/40 hover:text-blue-400" },
                { href: personalData.github, Icon: BsGithub, label: "GitHub", cls: "hover:bg-white/10 hover:border-white/25 hover:text-white" },
              ].filter(s => s.href).map(({ href, Icon, label, cls }, i) => (
                <motion.div key={i} whileHover={{ scale: 1.12, y: -3 }} whileTap={{ scale: 0.92 }}>
                  <Link href={href} target="_blank" aria-label={label}
                    className={`flex items-center justify-center w-11 h-11 rounded-xl glass text-gray-500 transition-all duration-200 ${cls}`}>
                    <Icon size={18} />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Mag href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass font-semibold text-sm text-white hover:bg-violet-500/15 hover:border-violet-400/50 hover:shadow-[0_0_28px_rgba(124,58,237,0.35)] transition-all duration-300"
                style={{ border: "1px solid rgba(124,58,237,0.3)" }}>
                <RiContactsFill size={16} /> Contact Me
              </Mag>
              {personalData.resume && (
                <Mag href={personalData.resume} target="_blank"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl glass font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300">
                  <motion.span animate={{ y: [0,3,0] }} transition={{ duration: 1.8, repeat: Infinity }}>
                    <MdDownload size={16} />
                  </motion.span>
                  Resume
                </Mag>
              )}
            </div>
          </motion.div>

          {/* ── Code Card — preserved exactly as in screenshot ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Glow */}
            <motion.div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-violet-600/20 via-fuchsia-600/10 to-cyan-600/15 blur-2xl"
              animate={{ opacity: [0.5, 0.9, 0.5] }} transition={{ duration: 4, repeat: Infinity }} />

            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ background: "rgba(13,10,25,0.92)", border: "1px solid rgba(255,255,255,0.09)", backdropFilter: "blur(24px)" }}
              whileHover={{ scale: 1.012, rotateX: -1, rotateY: 2 }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/6" style={{ background: "rgba(255,255,255,0.025)" }}>
                <div className="flex gap-1.5">
                  {["#ff5f57","#febc2e","#28c840"].map((c,i) => <div key={i} style={{ background: c }} className="w-3 h-3 rounded-full" />)}
                </div>
                <span className="flex-1 text-center text-xs text-gray-500 font-mono">developer.js</span>
                <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                  animate={{ opacity: [1,0.2,1] }} transition={{ duration: 1.8, repeat: Infinity }} />
              </div>

              {/* Code — exactly matching the screenshot style */}
              <div className="p-7 font-mono text-[13.5px] leading-8">
                <motion.div className="space-y-0.5"
                  initial="hidden" animate="visible"
                  variants={{ hidden:{}, visible:{ transition:{ staggerChildren:0.07, delayChildren:0.85 }}}}>
                  <CodeRow>
                    <span className="text-pink-400">const</span>
                    <span className="text-white"> developer </span>
                    <span className="text-pink-400">= </span>
                    <span className="text-gray-500">{"{"}</span>
                  </CodeRow>
                  <CodeRow indent>
                    <span className="text-violet-400">name</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-emerald-400">&apos;Smit Patne&apos;</span>
                    <span className="text-gray-500">,</span>
                  </CodeRow>
                  <CodeRow indent>
                    <span className="text-violet-400">skills</span>
                    <span className="text-gray-500">: [</span>
                    <div className="pl-4 text-amber-300">
                      &apos;React&apos;, &apos;Python&apos;, &apos;AWS&apos;,<br />
                      &apos;JavaScript&apos;, &apos;MySQL&apos;, &apos;Node.js&apos;, &apos;Docker&apos;
                    </div>
                    <span className="text-gray-500">],</span>
                  </CodeRow>
                  <CodeRow indent>
                    <span className="text-violet-400">hardWorker</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-cyan-400">true</span>
                    <span className="text-gray-500">,</span>
                  </CodeRow>
                  <CodeRow indent>
                    <span className="text-violet-400">quickLearner</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-cyan-400">true</span>
                    <span className="text-gray-500">,</span>
                  </CodeRow>
                  <CodeRow indent>
                    <span className="text-violet-400">problemSolver</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-cyan-400">true</span>
                    <span className="text-gray-500">,</span>
                  </CodeRow>
                  <CodeRow indent>
                    <span className="text-emerald-400">hireable</span>
                    <span className="text-gray-500">: </span>
                    <span className="text-pink-400">function</span>
                    <span className="text-gray-500">() {"{"}</span>
                  </CodeRow>
                  <CodeRow indent>
                    <div className="pl-4">
                      <span className="text-pink-400">return </span>
                      <span className="text-gray-500">(</span>
                      <div className="pl-4 text-gray-300">
                        <span className="text-cyan-400">this</span>.hardWorker <span className="text-pink-400">&&</span><br />
                        <span className="text-cyan-400">this</span>.problemSolver <span className="text-pink-400">&&</span><br />
                        <span className="text-cyan-400">this</span>.skills.length <span className="text-pink-400">&gt;=</span> <span className="text-amber-400">5</span>
                      </div>
                      <span className="text-gray-500">);</span>
                    </div>
                  </CodeRow>
                  <CodeRow indent><span className="text-gray-500">{"}"}</span></CodeRow>
                  <CodeRow><span className="text-gray-500">{"};"}</span></CodeRow>
                  <CodeRow>
                    <motion.span className="inline-block w-2 h-[14px] bg-violet-400 align-middle"
                      animate={{ opacity: [1,0,1] }} transition={{ duration: 1, repeat: Infinity }} />
                  </CodeRow>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        <span className="text-[9px] tracking-[0.35em] text-gray-700 uppercase font-mono">scroll</span>
        <motion.div className="w-px h-7 bg-gradient-to-b from-gray-600 to-transparent"
          animate={{ scaleY: [0,1,0], originY: 0 }} transition={{ duration: 1.8, repeat: Infinity }} />
      </motion.div>
    </section>
  );
}
