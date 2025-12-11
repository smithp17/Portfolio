"use client";

import * as React from "react";
import Image from "next/image";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function ExpCard({ exp, index, isActive, onClick }) {
  // Different gradient for each card
  const gradients = [
    "from-pink-600 via-rose-600 to-red-600",
    "from-purple-600 via-violet-600 to-indigo-600",
    "from-cyan-600 via-teal-600 to-emerald-600",
    "from-amber-600 via-orange-600 to-yellow-600",
    "from-blue-600 via-indigo-600 to-purple-600",
  ];

  const gradient = gradients[index % gradients.length];

  return (
    <div
      className={`flex-shrink-0 w-[450px] lg:w-[500px] transition-all duration-500 ${
        isActive ? "scale-100" : "scale-95 opacity-70"
      }`}
      onClick={onClick}
    >
      <div className="group relative h-full">
        {/* Card Glow */}
        <div
          className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
        ></div>

        <div className="relative h-full bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20">
          {/* Top Gradient Bar */}
          <div className={`h-1.5 bg-gradient-to-r ${gradient}`}></div>

          {/* Header with window controls */}
          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Company Logo & Name */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-slate-700/50">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-white font-semibold">{exp.company}</span>
              </div>

              <span className="text-gray-500 text-xs font-mono">experience.js</span>
            </div>
          </div>

          {/* Code Content */}
          <div className="p-6 font-mono text-sm">
            <div className="space-y-2">
              {/* Opening */}
              <div>
                <span className="text-pink-400">const</span>
                <span className="text-white"> job</span>
                <span className="text-pink-400"> = </span>
                <span className="text-gray-500">{"{"}</span>
              </div>

              {/* Role */}
              <div className="pl-6">
                <span className="text-purple-300">role</span>
                <span className="text-gray-500">: </span>
                <span className="text-emerald-400">"{exp.title}"</span>
                <span className="text-gray-500">,</span>
              </div>

              {/* Duration */}
              <div className="pl-6">
                <span className="text-purple-300">duration</span>
                <span className="text-gray-500">: </span>
                <span className="text-amber-400">"{exp.duration}"</span>
                <span className="text-gray-500">,</span>
              </div>

              {/* Tools */}
              <div className="pl-6">
                <span className="text-purple-300">tools</span>
                <span className="text-gray-500">: [</span>
              </div>
              <div className="pl-10 flex flex-wrap gap-1">
                {exp.tools.map((tool, i) => (
                  <React.Fragment key={i}>
                    <span className="text-cyan-400">"{tool}"</span>
                    {i < exp.tools.length - 1 && (
                      <span className="text-gray-500">, </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="pl-6">
                <span className="text-gray-500">],</span>
              </div>

              {/* Description */}
              <div className="pl-6">
                <span className="text-purple-300">impact</span>
                <span className="text-gray-500">: </span>
                <span className="text-gray-400 text-xs leading-relaxed block pl-2 border-l-2 border-cyan-500/30 mt-1">
                  // {exp.description}
                </span>
              </div>

              {/* Closing */}
              <div>
                <span className="text-gray-500">{"};"}</span>
              </div>
            </div>
          </div>

          {/* Footer with quick info */}
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
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 text-xs border border-pink-500/20">
                #{String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpCard;