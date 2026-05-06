"use client";

import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BsAward } from "react-icons/bs";
import SectionHeader from "@/app/components/helper/section-header";

const bars = ["from-violet-500 to-fuchsia-500","from-cyan-500 to-blue-500"];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1920&q=50" alt="" className="w-full h-full object-cover opacity-[0.09]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_30%,rgba(6,182,212,0.05),transparent)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="05 — Education" title="Education & Degrees" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {educations.map((edu, i) => (
            <motion.div key={edu.id}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.15 }}
              whileHover={{ y: -5 }}>
              <div className="relative glass rounded-2xl p-6 overflow-hidden hover:bg-white/[0.07] transition-all duration-300 group">
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${bars[i % bars.length]}`} />
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden glass flex-shrink-0 bg-white/5 flex items-center justify-center p-1">
                    <Image src={edu.image} alt={edu.institution} width={56} height={56} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <BsAward className="text-amber-400 flex-shrink-0" size={14} />
                      <h3 className="text-white font-bold text-sm leading-snug">{edu.title}</h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-1">{edu.institution}</p>
                    <span className="text-[11px] font-mono text-gray-600">{edu.duration}</span>
                    {edu.gpa && <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">{edu.gpa}</p>}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
