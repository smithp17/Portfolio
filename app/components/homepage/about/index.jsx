"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionHeader from "@/app/components/helper/section-header";

function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let s = 0, step = to / 60;
    const t = setInterval(() => {
      s += step;
      if (s >= to) { setVal(to); clearInterval(t); } else setVal(Math.floor(s));
    }, 20);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1920&q=50" alt="" className="w-full h-full object-cover opacity-[0.09]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_15%_50%,rgba(124,58,237,0.06),transparent)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="01 — About" title="About Me" subtitle="Versatile software engineer who builds end-to-end solutions spanning full-stack, ML, and cloud." />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* Image */}
          <motion.div className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}>
            <div className="relative group">
              <motion.div
                className="absolute -top-2.5 -left-2.5 w-20 h-20 border-t-2 border-l-2 border-violet-500/50 rounded-tl-lg"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} />
              <motion.div
                className="absolute -bottom-2.5 -right-2.5 w-20 h-20 border-b-2 border-r-2 border-cyan-500/50 rounded-br-lg"
                initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} />
              <div className="overflow-hidden rounded-xl glass">
                <Image src="/png/profile.jpg" width={400} height={480} alt="Smit Patne" className="w-full h-auto object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-5 -right-5 glass-strong rounded-xl px-4 py-3"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -2 }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-black">2+</span>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Years of</p>
                    <p className="text-gray-500 text-[10px]">Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}>
            <p className="text-gray-300 text-lg leading-relaxed">{personalData.description}</p>
            <p className="text-gray-500 text-base leading-relaxed">{personalData.description2}</p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Full-Stack Dev","Machine Learning","Cloud (AWS/GCP)","Data Engineering","AI/RAG Systems","Web3 / Blockchain"].map((s, i) => (
                <motion.span key={i}
                  className="text-sm px-3 py-1.5 rounded-lg glass text-gray-400 hover:text-violet-300 hover:border-violet-500/30 transition-all duration-200 cursor-default"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}>
                  {s}
                </motion.span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/6">
              {[{to:30,suffix:"+",label:"Projects"},{to:5,suffix:"+",label:"Companies"},{to:100,suffix:"%",label:"Dedication"}].map(({to,suffix,label},i) => (
                <motion.div key={i}
                  className="glass rounded-xl p-4 text-center hover:border-violet-500/25 transition-colors duration-300 group"
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.55 + i * 0.1 }}>
                  <p className="text-2xl font-black text-white group-hover:text-violet-400 transition-colors duration-300">
                    <Counter to={to} suffix={suffix} />
                  </p>
                  <p className="text-[10px] text-gray-600 font-mono tracking-widest mt-1 uppercase">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
