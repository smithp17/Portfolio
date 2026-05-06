"use client";

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/app/components/helper/section-header";

function SkillPill({ skill }) {
  return (
    <motion.div
      className="mx-2.5 flex items-center gap-2.5 px-4 py-2.5 rounded-xl glass cursor-default group transition-all duration-200 hover:border-violet-500/35 hover:bg-violet-500/8"
      whileHover={{ scale: 1.08, y: -3 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      <div className="w-5 h-5 flex-shrink-0">
        <Image src={skillsImage(skill)?.src} alt={skill} width={20} height={20} className="w-full h-full object-contain" />
      </div>
      <span className="text-sm text-gray-400 group-hover:text-white transition-colors duration-200 whitespace-nowrap font-medium">
        {skill}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=50" alt="" className="w-full h-full object-cover opacity-[0.09]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(124,58,237,0.07),transparent)]" />

      <div className="relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeader eyebrow="03 — Skills" title="Tech Stack" subtitle={`${skillsData.length} technologies across frontend, backend, cloud, and AI.`} />
        </div>

        <motion.div className="space-y-4"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.3, duration: 0.7 }}>
          <Marquee speed={38} pauseOnHover gradient={false} direction="left">
            {skillsData.map((s, i) => <SkillPill key={i} skill={s} />)}
          </Marquee>
          <Marquee speed={28} pauseOnHover gradient={false} direction="right">
            {[...skillsData].reverse().map((s, i) => <SkillPill key={i} skill={s} />)}
          </Marquee>
        </motion.div>

        <motion.div className="flex justify-center mt-10"
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-gray-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {skillsData.length} technologies mastered
          </div>
        </motion.div>
      </div>
    </section>
  );
}
