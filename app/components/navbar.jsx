"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const links = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Education", href: "/#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1]);
  useMotionValueEvent(scrollY, "change", v => setScrolled(v > 40));

  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
      {/* Glass background — fades in on scroll */}
      <motion.div className="absolute inset-0 border-b border-white/6"
        style={{ opacity: bgOpacity, background: "rgba(6,6,15,0.85)", backdropFilter: "blur(24px)" }} />

      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <motion.div className="flex items-center gap-1" whileHover={{ scale: 1.04 }}>
            <span className="text-xl font-extrabold text-white tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Smit</span>
            <span className="text-xl font-extrabold text-violet-400 tracking-tight" style={{ fontFamily: "var(--font-display)" }}>.</span>
          </motion.div>
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.07 }}>
              <Link href={l.href} className="relative px-4 py-2 text-sm text-gray-500 hover:text-white transition-colors duration-200 group">
                {l.name}
                <motion.span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-violet-500 to-cyan-500"
                  initial={{ width: 0 }} whileHover={{ width: "70%" }} transition={{ duration: 0.2 }} />
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div className="hidden lg:block"
          initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }}>
          <Link href="/#contact"
            className="px-5 py-2 text-sm font-medium text-white rounded-xl glass border-violet-500/30 hover:bg-violet-500/15 hover:border-violet-400/50 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-300"
            style={{ border: "1px solid rgba(124,58,237,0.3)" }}>
            Contact Me
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl glass text-gray-400 hover:text-white transition-colors duration-200"
          onClick={() => setOpen(!open)} whileTap={{ scale: 0.9 }}>
          <AnimatePresence mode="wait">
            {open
              ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><HiX size={18} /></motion.span>
              : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><HiMenuAlt3 size={18} /></motion.span>
            }
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-white/6"
            style={{ background: "rgba(6,6,15,0.95)", backdropFilter: "blur(24px)" }}>
            <div className="px-6 py-5 space-y-1">
              {links.map((l, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}>
                  <Link href={l.href} onClick={() => setOpen(false)}
                    className="block py-3 px-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200 text-sm">
                    {l.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="pt-3">
                <Link href="/#contact" onClick={() => setOpen(false)}
                  className="block py-3 px-4 text-center text-white rounded-xl glass text-sm font-medium border-violet-500/30 hover:bg-violet-500/20 transition-all duration-200"
                  style={{ border: "1px solid rgba(124,58,237,0.3)" }}>
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
