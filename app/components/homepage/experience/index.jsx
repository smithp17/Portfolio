"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/app/components/helper/section-header";

const dots = ["bg-violet-500","bg-cyan-500","bg-emerald-500","bg-amber-500","bg-pink-500"];
const bars = ["from-violet-500 to-fuchsia-500","from-cyan-500 to-blue-500","from-emerald-500 to-teal-500","from-amber-500 to-orange-500","from-pink-500 to-rose-500"];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=50" alt="" className="w-full h-full object-cover opacity-[0.09]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="02 — Experience" title="Work Experience" subtitle="Building impactful solutions across startups, agencies, and academia." />

        {/* Timeline */}
        <div className="relative">
          {/* Line */}
          <motion.div className="absolute left-[18px] top-2 bottom-4 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/30 to-transparent"
            initial={{ scaleY: 0, originY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }} />

          <div className="space-y-3">
            {experiences.map((exp, i) => (
              <motion.div key={exp.id} className="flex gap-8"
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}>
                {/* Dot */}
                <div className="flex-shrink-0 pt-5 flex flex-col items-center">
                  <motion.div className={`w-3.5 h-3.5 rounded-full ${dots[i % dots.length]} shadow-lg z-10`}
                    animate={{ boxShadow: [`0 0 0 0 rgba(139,92,246,0.5)`,`0 0 0 8px rgba(139,92,246,0)`,`0 0 0 0 rgba(139,92,246,0)`] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }} />
                </div>

                {/* Glass card */}
                <motion.div className="flex-1 mb-8 group"
                  whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                  <div className="relative glass rounded-xl p-6 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${bars[i % bars.length]}`} />

                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg overflow-hidden glass flex-shrink-0 flex items-center justify-center">
                        <Image src={exp.image} alt={exp.company} width={40} height={40} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h3 className="text-white font-bold text-sm">{exp.title}</h3>
                          {i === 0 && (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 font-mono">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-[11px] text-gray-600 font-mono hidden sm:block whitespace-nowrap flex-shrink-0">{exp.duration}</span>
                    </div>

                    <p className="text-gray-500 text-base leading-relaxed mb-4">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tools.map((t, j) => (
                        <span key={j} className="text-[11px] px-2.5 py-1 rounded-lg glass text-gray-500 hover:text-violet-300 hover:border-violet-500/30 transition-colors duration-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}>
          {[{val:`${experiences.length}`,label:"Companies"},{val:"2+",label:"Years"},{val:"15+",label:"Projects"},{val:"100%",label:"Dedication"}].map(({val,label},i)=>(
            <div key={i} className="glass rounded-xl p-4 text-center hover:border-violet-500/25 transition-colors duration-300 group">
              <p className="text-2xl font-black text-white group-hover:text-violet-400 transition-colors duration-300">{val}</p>
              <p className="text-[10px] text-gray-600 font-mono tracking-widest mt-1 uppercase">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
