"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FaPlay, FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

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
  // Already embed format
  return url;
};

const VideoSlider = ({ videos }) => {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: "smooth" });
      setTimeout(checkScrollButtons, 300);
    }
  };

  if (!videos || videos.length === 0) return null;

  return (
    <div className="max-w-7xl mx-auto px-6 mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            <FaYoutube />
            Video Demos
          </span>
          <h3 className="text-2xl font-bold text-white">Watch in Action</h3>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full border transition-all duration-300 ${
              canScrollLeft
                ? "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-red-500/50"
                : "bg-white/2 border-white/5 text-gray-600 cursor-not-allowed"
            }`}
          >
            <FaChevronLeft size={14} />
          </button>
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`p-3 rounded-full border transition-all duration-300 ${
              canScrollRight
                ? "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-red-500/50"
                : "bg-white/2 border-white/5 text-gray-600 cursor-not-allowed"
            }`}
          >
            <FaChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Videos Horizontal Scroll */}
      <div
        ref={sliderRef}
        className="flex gap-6 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
        onScroll={checkScrollButtons}
      >
        {videos.map((video, index) => (
          <div
            key={video.id || index}
            className="group flex-shrink-0 w-[320px] lg:w-[380px]"
          >
            <div className="relative">
              {/* Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-white/20">
                {/* Video Thumbnail/Embed */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <iframe
                    className="w-full h-full"
                    src={getYouTubeEmbedUrl(video.url)}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Play overlay on hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                      <FaPlay className="text-white ml-1" size={24} />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h4 className="text-white font-semibold mb-4 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400 transition-all duration-300">
                    {video.title}
                  </h4>
                  <Link
                    href={video.videourl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
                  >
                    <FaPlay size={12} />
                    Watch on YouTube
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Scroll to see more</span>
          <FaChevronRight size={12} className="animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;