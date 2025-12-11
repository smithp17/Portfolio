// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";


function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-40 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-40 left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Available for opportunities</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Hey there,
              <br />
              I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {personalData.name}
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400">
              I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-semibold">
                {personalData.designation}
              </span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { href: personalData.linkedIn, icon: BsLinkedin, color: "hover:text-blue-400" },
              { href: personalData.github, icon: BsGithub, color: "hover:text-gray-100" },
              
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
              >
                <social.icon size={22} />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Contact me</span>
              <RiContactsFill className="relative z-10" size={18} />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/5 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/10 hover:scale-105"
            >
              <span>Get Resume</span>
              <MdDownload size={18} className="group-hover:animate-bounce" />
            </Link>
          </div>
        </div>

        {/* Right Content - Code Card */}
        <div className="relative">
          {/* Glow effect behind card */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
          
          <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-sm text-gray-500 font-mono">developer.js</span>
            </div>

            {/* Code Content */}
            <div className="p-6 lg:p-8 font-mono text-sm lg:text-base">
              <div className="space-y-2">
                <div>
                  <span className="text-pink-400">const</span>
                  <span className="text-white"> developer</span>
                  <span className="text-pink-400"> = </span>
                  <span className="text-gray-500">{"{"}</span>
                </div>
                
                <div className="pl-6">
                  <span className="text-purple-300">name</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-emerald-400">'Smit Patne'</span>
                  <span className="text-gray-500">,</span>
                </div>

                <div className="pl-6">
                  <span className="text-purple-300">skills</span>
                  <span className="text-gray-500">: [</span>
                  <div className="pl-4 text-amber-300">
                    'React', 'Python', 'AWS',
                    <br />
                    'JavaScript', 'MySQL', 'Node.js', 'Docker'
                  </div>
                  <span className="text-gray-500">],</span>
                </div>

                <div className="pl-6">
                  <span className="text-purple-300">hardWorker</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-cyan-400">true</span>
                  <span className="text-gray-500">,</span>
                </div>

                <div className="pl-6">
                  <span className="text-purple-300">quickLearner</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-cyan-400">true</span>
                  <span className="text-gray-500">,</span>
                </div>

                <div className="pl-6">
                  <span className="text-purple-300">problemSolver</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-cyan-400">true</span>
                  <span className="text-gray-500">,</span>
                </div>

                <div className="pl-6">
                  <span className="text-emerald-400">hireable</span>
                  <span className="text-gray-500">: </span>
                  <span className="text-pink-400">function</span>
                  <span className="text-gray-500">() {"{"}</span>
                </div>

                <div className="pl-10">
                  <span className="text-pink-400">return </span>
                  <span className="text-gray-500">(</span>
                </div>

                <div className="pl-14 text-gray-300">
                  <span className="text-cyan-400">this</span>.hardWorker <span className="text-pink-400">&&</span>
                  <br />
                  <span className="text-cyan-400">this</span>.problemSolver <span className="text-pink-400">&&</span>
                  <br />
                  <span className="text-cyan-400">this</span>.skills.length <span className="text-pink-400">&gt;=</span> <span className="text-amber-400">5</span>
                </div>

                <div className="pl-10">
                  <span className="text-gray-500">);</span>
                </div>

                <div className="pl-6">
                  <span className="text-gray-500">{"}"}</span>
                </div>

                <div>
                  <span className="text-gray-500">{"};"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;