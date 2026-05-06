"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "@/app/components/helper/section-header";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1920&q=50" alt="" className="w-full h-full object-cover opacity-[0.09]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_110%,rgba(124,58,237,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:52px_52px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="06 — Contact" title="Let's Connect" subtitle="Open to full-time roles, freelance, and interesting collaborations. I respond fast." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left */}
          <motion.div className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2 }}>
            {[
              { Icon: HiOutlineMail, label: "Email", value: personalData.email, href: `mailto:${personalData.email}`, bar:"from-pink-500 to-fuchsia-500" },
              { Icon: HiOutlineMapPin, label: "Location", value: personalData.address, href: null, bar:"from-cyan-500 to-blue-500" },
            ].map(({ Icon, label, value, href, bar }, i) => (
              <motion.div key={i} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
                <div className="relative glass rounded-xl p-5 hover:bg-white/[0.07] transition-all duration-300 overflow-hidden group">
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${bar}`} />
                  <div className="flex items-center gap-4">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 glass`}
                      style={{ background: "rgba(255,255,255,0.06)" }}>
                      <Icon size={18} className="text-gray-300" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-600 font-mono tracking-widest uppercase">{label}</p>
                      {href
                        ? <Link href={href} className="text-white text-base font-medium hover:text-violet-400 transition-colors duration-200">{value}</Link>
                        : <p className="text-white text-base font-medium">{value}</p>}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div className="flex gap-3 pt-2"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
              {[
                { href: personalData.github, Icon: BsGithub, label: "GitHub", cls: "hover:text-white hover:border-white/25 hover:bg-white/8" },
                { href: personalData.linkedIn, Icon: BsLinkedin, label: "LinkedIn", cls: "hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/8" },
              ].filter(s => s.href).map(({ href, Icon, label, cls }, i) => (
                <motion.div key={i} whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.93 }}>
                  <Link href={href} target="_blank" aria-label={label}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-gray-500 text-sm transition-all duration-200 ${cls}`}>
                    <Icon size={15} /><span>{label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="glass rounded-xl p-4 text-xs text-gray-600 font-mono leading-relaxed"
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
              <span className="text-violet-400">⚡ </span>Typically responds within 24 hours. Prefer messages with context about the role or project.
            </motion.div>
          </motion.div>

          {/* Right — Glass terminal */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.3 }}>
            <div className="relative">
              <motion.div className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-pink-500/12 via-fuchsia-500/8 to-violet-500/12 blur-2xl"
                animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 4, repeat: Infinity }} />

              <div className="relative glass-strong rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/6" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <div className="flex gap-1.5">
                    {["#ff5f57","#febc2e","#28c840"].map((c,i) => <div key={i} style={{ background: c }} className="w-2.5 h-2.5 rounded-full opacity-80" />)}
                  </div>
                  <span className="flex-1 text-center text-xs text-gray-600 font-mono">send_message.js</span>
                </div>

                <div className="p-7 font-mono text-[13px] space-y-1 leading-7">
                  {[
                    { indent: false, content: <><span className="text-pink-400">const</span><span className="text-white"> message </span><span className="text-pink-400">= </span><span className="text-gray-600">{"{"}</span></> },
                    { indent: true, content: <><span className="text-violet-400">to</span><span className="text-gray-600">: </span><span className="text-emerald-400">&quot;{personalData.email}&quot;</span><span className="text-gray-600">,</span></> },
                    { indent: true, content: <><span className="text-violet-400">subject</span><span className="text-gray-600">: </span><span className="text-amber-400">&quot;Let&apos;s build something!&quot;</span><span className="text-gray-600">,</span></> },
                    { indent: true, content: <><span className="text-violet-400">from</span><span className="text-gray-600">: </span><span className="text-cyan-400">&quot;you@company.com&quot;</span><span className="text-gray-600">,</span></> },
                    { indent: true, content: <><span className="text-violet-400">open_to</span><span className="text-gray-600">: </span><span className="text-fuchsia-400">&quot;Full-time / Contract&quot;</span><span className="text-gray-600">,</span></> },
                    { indent: false, content: <><span className="text-gray-600">{"}"}</span></> },
                    { indent: false, content: <><span className="text-pink-400">await</span><span className="text-white"> send</span><span className="text-gray-600">(message);</span><motion.span className="inline-block w-2 h-[14px] bg-pink-400 align-middle ml-1.5" animate={{ opacity:[1,0,1] }} transition={{ duration:1, repeat:Infinity }} /></> },
                  ].map(({ indent, content }, i) => (
                    <motion.div key={i} className={indent ? "pl-5" : ""}
                      initial={{ opacity: 0, x: -8 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}>
                      {content}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
