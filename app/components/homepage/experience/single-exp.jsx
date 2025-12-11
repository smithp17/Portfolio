"use client";

import Image from "next/image";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

const SingleExp = ({ exp, featured = false }) => {
  if (featured) {
    return (
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-lg"></div>
        <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Company Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 bg-slate-700/50">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                  <p className="text-pink-400 font-medium">{exp.title}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <span className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaCalendarAlt className="text-pink-400" />
                  {exp.duration}
                </span>
                {exp.location && (
                  <span className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaMapMarkerAlt className="text-purple-400" />
                    {exp.location}
                  </span>
                )}
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-pink-500/10 text-pink-300 text-sm border border-pink-500/20"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Highlights */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-900/80 rounded-2xl border border-white/10 p-6">
                <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <BsBriefcaseFill className="text-pink-400" />
                  Key Achievements
                </h4>
                <ul className="space-y-3">
                  {exp.highlights ? (
                    exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 text-sm">{exp.description}</li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Regular experience card
  return (
    <div className="group relative">
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 p-6 transition-all duration-500 hover:border-white/20">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 bg-slate-700/50 flex-shrink-0">
            <Image
              src={exp.image}
              alt={exp.company}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white truncate">{exp.company}</h3>
            <p className="text-pink-400 text-sm">{exp.title}</p>
          </div>
          <span className="px-3 py-1 rounded-full bg-pink-500/10 text-pink-300 text-xs border border-pink-500/20 flex-shrink-0">
            {exp.duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {exp.description}
        </p>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {exp.tools.slice(0, 4).map((tool, i) => (
            <span
              key={i}
              className="px-2 py-1 rounded-md bg-white/5 text-gray-400 text-xs"
            >
              {tool}
            </span>
          ))}
          {exp.tools.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-pink-500/10 text-pink-400 text-xs">
              +{exp.tools.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleExp;