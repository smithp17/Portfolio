"use client";

import { useState, useRef, useEffect } from "react";
import { experiences } from "@/utils/data/experience";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { BsBriefcaseFill } from "react-icons/bs";
import ExpCard from "./exp-card";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % experiences.length);
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Scroll to active card
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 500;
      const gap = 24;
      const scrollPosition = activeIndex * (cardWidth + gap);
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? experiences.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm mb-6">
                <BsBriefcaseFill className="animate-pulse" />
                Career Journey
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Work{" "}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Experience
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                My professional journey through various roles and companies, building impactful solutions.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 group"
              >
                <FaChevronLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-pink-500/50 transition-all duration-300 group"
              >
                <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Experience Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-8 px-6 lg:px-[calc((100vw-1280px)/2+24px)] cursor-grab active:cursor-grabbing no-scrollbar"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {experiences.map((exp, index) => (
            <ExpCard
              key={index}
              exp={exp}
              index={index}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-pink-500 to-purple-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-3xl blur-lg"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    {experiences.length}+
                  </p>
                  <p className="text-gray-400 mt-2">Companies</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                    2+
                  </p>
                  <p className="text-gray-400 mt-2">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                    15+
                  </p>
                  <p className="text-gray-400 mt-2">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                    100%
                  </p>
                  <p className="text-gray-400 mt-2">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;