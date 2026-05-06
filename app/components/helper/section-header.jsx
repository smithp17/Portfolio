"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SectionHeader({ eyebrow, title, subtitle, light = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="text-center mb-16 lg:mb-20"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Japan-style centered rule with label */}
      <div className="section-rule mb-5">
        <span className="text-[10px] font-mono tracking-[0.32em] text-gray-600 uppercase whitespace-nowrap">
          {eyebrow}
        </span>
      </div>

      {/* Title */}
      <h2 className="text-3xl lg:text-[2.75rem] font-bold tracking-[0.06em] uppercase text-white leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-4 text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
