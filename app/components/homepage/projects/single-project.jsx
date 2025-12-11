"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaYoutube } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const SingleProject = ({ project, featured = false }) => {
  const [showVideo, setShowVideo] = useState(false);

  if (featured) {
    return (
      <>
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur-lg"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs mb-4">
                  <HiSparkles />
                  Featured Project
                </span>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 rounded-lg bg-purple-500/10 text-purple-300 text-sm border border-purple-500/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <Link
                    href={project.code}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    <FaGithub />
                    View on GitHub
                  </Link>
                  {project.video && (
                    <button
                      onClick={() => setShowVideo(true)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all duration-300"
                    >
                      <FaPlay />
                      Watch Demo
                    </button>
                  )}
                </div>
              </div>
              
              {/* Code Preview or Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-2xl"></div>
                {project.codePreview ? (
                  <div className="relative bg-slate-900/80 rounded-2xl border border-white/10 p-6 font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-gray-500 text-xs">{project.codeFile || "code.js"}</span>
                    </div>
                    <pre className="text-gray-300 overflow-x-auto">
                      <code>{project.codePreview}</code>
                    </pre>
                  </div>
                ) : project.image ? (
                  <div className="relative rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ) : (
                  <div className="relative bg-slate-900/80 rounded-2xl border border-white/10 p-8 flex items-center justify-center min-h-[300px]">
                    <div className="text-center">
                      <span className="text-6xl mb-4 block">{project.icon || "🚀"}</span>
                      <p className="text-gray-500">Project Preview</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {showVideo && project.video && (
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
                  src={project.video}
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
  }

  // Regular project card
  return (
    <>
      <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative h-full bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20">
          {/* Project Image */}
          {project.image && (
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              
              {/* Video button overlay */}
              {project.video && (
                <button
                  onClick={() => setShowVideo(true)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-red-500/80 text-white hover:bg-red-500 transition-colors duration-300"
                >
                  <FaYoutube size={16} />
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
              {project.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.slice(0, 3).map((tool, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-md bg-white/5 text-gray-400 text-xs"
                >
                  {tool}
                </span>
              ))}
              {project.tools.length > 3 && (
                <span className="px-2 py-1 rounded-md bg-purple-500/10 text-purple-400 text-xs">
                  +{project.tools.length - 3}
                </span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              <Link
                href={project.code}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-gray-300 text-sm hover:bg-white/10 transition-colors duration-300"
              >
                <FaGithub size={14} />
                Code
              </Link>
              {project.demo && (
                <Link
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                  <FaExternalLinkAlt size={12} />
                  Demo
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && project.video && (
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
                src={project.video}
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

export default SingleProject;