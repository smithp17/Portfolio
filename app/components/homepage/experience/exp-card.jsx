"use client";

import * as React from "react";
import Image from "next/image";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const gradients = [
  "from-pink-600 via-rose-600 to-red-600",
  "from-purple-600 via-violet-600 to-indigo-600",
  "from-cyan-600 via-teal-600 to-emerald-600",
  "from-amber-600 via-orange-600 to-yellow-600",
  "from-blue-600 via-indigo-600 to-purple-600",
];

function ExpCard({ exp, index, isActive, onClick }) {
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      className={`flex-shrink-0 w-[450px] lg:w-[500px] cursor-pointer`}
      onClick={onClick}
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.65,
        y: isActive ? 0 : 10,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      whileHover={{ scale: isActive ? 1.01 : 0.97, opacity: 1 }}
    >
      <motion.div
        className="group relative h-full"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Card Glow */}
        <motion.div
          className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-lg`}
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 0.5, transition: { duration: 0.3 } },
          }}
        />

        <div className="relative h-full bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300">
          {/* Top Gradient Bar */}
          <motion.div
            className={`h-1.5 bg-gradient-to-r ${gradient}`}
            animate={{ scaleX: isActive ? 1 : 0.6, originX: 0 }}
            transition={{ duration: 0.5 }}
          />

          {/* Window Header */}
          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {["bg-red-500", "bg-amber-500", "bg-green-500"].map((c, i) => (
                  <div key={i} className={`w-3 h-3 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-slate-700/50">
                  <Image src={exp.image} alt={exp.company} width={40} height={40} className="w-full h-full object-cover" />
                </div>
                <span className="text-white font-semibold">{exp.company}</span>
              </div>
              <span className="text-gray-500 text-xs font-mono">experience.js</span>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm">
            <div className="space-y-2">
              <div>
                <span className="text-pink-400">const</span>
                <span className="text-white"> job</span>
                <span className="text-pink-400"> = </span>
                <span className="text-gray-500">{"{"}</span>
              </div>
              <div className="pl-6">
                <span className="text-purple-300">role</span>
                <span className="text-gray-500">: </span>
                <span className="text-emerald-400">{`"${exp.title}"`}</span>
                <span className="text-gray-500">,</span>
              </div>
              <div className="pl-6">
                <span className="text-purple-300">duration</span>
                <span className="text-gray-500">: </span>
                <span className="text-amber-400">{`"${exp.duration}"`}</span>
                <span className="text-gray-500">,</span>
              </div>
              <div className="pl-6">
                <span className="text-purple-300">tools</span>
                <span className="text-gray-500">: [</span>
              </div>
              <div className="pl-10 flex flex-wrap gap-1">
                {exp.tools.map((tool, i) => (
                  <React.Fragment key={i}>
                    <span className="text-cyan-400">{`"${tool}"`}</span>
                    {i < exp.tools.length - 1 && <span className="text-gray-500">, </span>}
                  </React.Fragment>
                ))}
              </div>
              <div className="pl-6"><span className="text-gray-500">],</span></div>
              <div className="pl-6">
                <span className="text-purple-300">impact</span>
                <span className="text-gray-500">: </span>
                <span className="text-gray-400 text-xs leading-relaxed block pl-2 border-l-2 border-cyan-500/30 mt-1">
                  {`// ${exp.description}`}
                </span>
              </div>
              <div><span className="text-gray-500">{"};"}</span></div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-white/10 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 text-gray-400 text-xs">
                  <FaCalendarAlt className="text-pink-400" />
                  {exp.duration}
                </span>
                <span className="flex items-center gap-2 text-gray-400 text-xs">
                  <BsBriefcaseFill className="text-purple-400" />
                  {exp.title.split(" ")[0]}
                </span>
              </div>
              <motion.span
                className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-xs border border-pink-500/20"
                animate={{ opacity: isActive ? 1 : 0.4 }}
              >
                #{String(index + 1).padStart(2, "0")}
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ExpCard;
