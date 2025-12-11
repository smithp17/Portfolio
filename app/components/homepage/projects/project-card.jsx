"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

// Helper function to convert YouTube watch URL to embed URL
const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  // Handle youtube.com/watch?v= format
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  // Handle youtu.be/ format
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  // Already embed format or other
  if (url.includes('/embed/')) {
    return url;
  }
  return url;
};

const ProjectCard = ({ project, index, isActive, onClick }) => {
  const [showVideo, setShowVideo] = useState(false);
  
  // Get the proper embed URL
  const embedUrl = getYouTubeEmbedUrl(project.video);

  return (
    <>
      <div
        className={`flex-shrink-0 w-[380px] lg:w-[420px] transition-all duration-500 ${
          isActive ? "scale-100" : "scale-95 opacity-70"
        }`}
        onClick={onClick}
      >
        <div className="group relative h-full">
          {/* Card Glow */}
          <div
            className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
          ></div>

          <div className="relative h-full bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20">
            {/* Top Gradient Bar */}
            <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`}></div>

            {/* Card Content */}
            <div className="p-6 lg:p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 border border-white/10">
                    #{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                {project.video && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowVideo(true);
                    }}
                    className="p-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-colors duration-300"
                  >
                    <FaYoutube size={18} />
                  </button>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.slice(0, 4).map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg bg-white/5 text-gray-300 text-xs border border-white/5 hover:border-purple-500/30 transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 4 && (
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 text-xs border border-purple-500/20">
                    +{project.tools.length - 4} more
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <Link
                  href={project.code}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <FaGithub size={16} />
                  View Code
                </Link>
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300`}
                  >
                    <FaExternalLinkAlt size={14} />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h4 className="text-white font-semibold">{project.name} - Demo</h4>
              <button
                onClick={() => setShowVideo(false)}
                className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${project.name} demo video`}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;