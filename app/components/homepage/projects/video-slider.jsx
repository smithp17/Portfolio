"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { FaPlay, FaChevronLeft, FaChevronRight, FaYoutube } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const getEmbedUrl = (url) => {
  if (!url) return "";
  const w = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (w) return `https://www.youtube.com/embed/${w[1]}`;
  const s = url.match(/youtu\.be\/([^?]+)/);
  if (s) return `https://www.youtube.com/embed/${s[1]}`;
  return url;
};

export default function VideoSlider({ videos }) {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const checkScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
    setCanLeft(scrollLeft > 0);
    setCanRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir) => {
    sliderRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
    setTimeout(checkScroll, 350);
  };

  if (!videos?.length) return null;

  return (
    <motion.div
      ref={sectionRef}
      className="mt-20 pt-16 border-t border-white/6"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <motion.div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaYoutube size={12} />
            Video Demos
          </motion.div>
          <h3 className="text-xl font-bold text-white">Watch in Action</h3>
        </div>

        {/* Arrow controls */}
        <div className="flex gap-2">
          {[
            { dir: -1, disabled: !canLeft, icon: FaChevronLeft },
            { dir: 1, disabled: !canRight, icon: FaChevronRight },
          ].map(({ dir, disabled, icon: Icon }, i) => (
            <motion.button
              key={i}
              onClick={() => scroll(dir)}
              disabled={disabled}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center transition-all duration-200 ${
                disabled
                  ? "border-white/5 text-gray-700 cursor-not-allowed bg-white/2"
                  : "border-white/10 text-gray-400 hover:text-white hover:border-red-500/40 hover:bg-red-500/8 bg-white/4"
              }`}
              whileTap={disabled ? {} : { scale: 0.9 }}
            >
              <Icon size={12} />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={sliderRef}
        className="flex gap-5 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
        onScroll={checkScroll}
      >
        {videos.map((video, i) => (
          <motion.div
            key={video.id || i}
            className="group flex-shrink-0 w-[300px] lg:w-[360px]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            whileHover={{ y: -4 }}
          >
            <div className="relative bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden hover:border-red-500/25 transition-all duration-300">
              {/* Red top stripe */}
              <div className="h-0.5 bg-gradient-to-r from-red-500 to-orange-500" />

              {/* Iframe */}
              <div className="relative aspect-video bg-black overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(video.url)}
                  title={video.title}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h4 className="text-white text-sm font-semibold mb-3 line-clamp-1 group-hover:text-red-400 transition-colors duration-200">
                  {video.title}
                </h4>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  <Link
                    href={video.videourl}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium hover:bg-red-500/20 hover:text-red-300 transition-all duration-200"
                  >
                    <FaPlay size={10} />
                    Watch on YouTube
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
