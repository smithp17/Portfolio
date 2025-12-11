// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">About Me</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
          <span className="text-6xl font-bold text-white/5">01</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group order-1 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-purple-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -inset-4 border-2 border-cyan-500/20 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              
              <Image
                src="/png/profile.jpg"
                width={450}
                height={450}
                alt="Smit Patne"
                className="relative rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />

              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-800/90 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/10 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2+</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Years of</p>
                    <p className="text-gray-400 text-sm">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 order-2 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              <span className="text-purple-400 font-medium">Who am I?</span>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                {personalData.description}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {personalData.description2}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {[
                { value: "10+", label: "Projects Completed" },
                { value: "5+", label: "Technologies" },
                { value: "100%", label: "Dedication" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;