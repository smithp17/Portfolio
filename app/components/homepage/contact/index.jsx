// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm mb-6">
            <FaPaperPlane />
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Let's <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div className="space-y-8 flex flex-col items-center lg:items-start">
            {/* Info Cards */}
            <div className="space-y-4 w-full max-w-md">
              {/* Email */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <MdEmail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="text-white font-medium">{personalData.email}</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-white/10 transition-all duration-300 hover:border-white/20">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Location</p>
                    <p className="text-white font-medium">{personalData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8 w-full">
              <p className="text-gray-400 mb-6 text-center lg:text-left">Find me on social media</p>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {[
                  { href: personalData.github, icon: IoLogoGithub, color: "from-gray-600 to-gray-800", hoverColor: "hover:shadow-gray-500/25" },
                  { href: personalData.linkedIn, icon: BiLogoLinkedin, color: "from-blue-500 to-blue-700", hoverColor: "hover:shadow-blue-500/25" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    className={`p-4 rounded-xl bg-gradient-to-r ${social.color} text-white transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.hoverColor}`}
                  >
                    <social.icon size={24} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="relative mt-12 p-6 bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-white/5 w-full max-w-md">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-xs">
                Quick Response
              </div>
              <p className="text-gray-400 text-sm">
                I typically respond within 24-48 hours. For urgent matters, feel free to reach out on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
