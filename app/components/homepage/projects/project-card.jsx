"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
  return url;
};

const ProjectCard = ({ project, index, isActive, onClick }) => {
  const [showVideo, setShowVideo] = useState(false);
  const embedUrl = getYouTubeEmbedUrl(project.video);

  return (
    <>
      <motion.div
        className="flex-shrink-0 w-[380px] lg:w-[420px] cursor-pointer"
        onClick={onClick}
        animate={{
          scale: isActive ? 1 : 0.94,
          opacity: isActive ? 1 : 0.6,
          y: isActive ? 0 : 12,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        whileHover={{ scale: isActive ? 1.01 : 0.96, opacity: 1 }}
      >
        <motion.div className="group relative h-full" initial="rest" whileHover="hover" animate="rest">
          {/* Card Glow */}
          <motion.div
            className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg`}
            variants={{ rest: { opacity: 0 }, hover: { opacity: 0.45, transition: { duration: 0.3 } } }}
          />

          <div className="relative h-full bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors duration-300">
            {/* Top Bar */}
            <motion.div
              className={`h-1.5 bg-gradient-to-r ${project.gradient}`}
              animate={{ scaleX: isActive ? 1 : 0.5, originX: 0 }}
              transition={{ duration: 0.5 }}
            />

            <div className="p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <motion.span
                    className="text-3xl"
                    animate={{ rotate: isActive ? [0, -5, 5, 0] : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {project.icon}
                  </motion.span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                {project.video && (
                  <motion.button
                    onClick={(e) => { e.stopPropagation(); setShowVideo(true); }}
                    className="p-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaYoutube size={18} />
                  </motion.button>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 line-clamp-2">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.slice(0, 4).map((tool, i) => (
                  <motion.span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 text-xs border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {tool}
                  </motion.span>
                ))}
                {project.tools.length > 4 && (
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">
                    +{project.tools.length - 4} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
                  <Link
                    href={project.code}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-full"
                  >
                    <FaGithub size={16} />
                    View Code
                  </Link>
                </motion.div>
                {project.demo && (
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="flex-1">
                    <Link
                      href={project.demo}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium hover:shadow-lg transition-all duration-300 w-full`}
                    >
                      <FaExternalLinkAlt size={14} />
                      Live Demo
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setShowVideo(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-white/10"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h4 className="text-white font-semibold">{project.name} — Demo</h4>
                <motion.button
                  onClick={() => setShowVideo(false)}
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>
              </div>
              <div className="aspect-video">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${project.name} demo`}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
