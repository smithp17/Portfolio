"use client";

import Link from "next/link";
import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer ref={ref}
      className="relative border-t border-white/6 overflow-hidden"
      style={{ background: "rgba(6,6,15,0.97)", backdropFilter: "blur(24px)" }}
      initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} — Portfolio of{" "}
            <Link href="https://www.linkedin.com/in/smit-patne/" target="_blank"
              className="text-gray-400 hover:text-white transition-colors duration-200">
              Smit Patne
            </Link>
          </p>

          <div className="flex items-center gap-4">
            {[
              { href:"https://github.com/smithp17/Portfolio", Icon:IoStar, label:"Star" },
              { href:"https://github.com/smithp17/Portfolio/fork", Icon:CgGitFork, label:"Fork" },
            ].map(({ href, Icon, label }, i) => (
              <motion.div key={i} whileHover={{ scale: 1.06, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Link href={href} target="_blank"
                  className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-white transition-colors duration-200 uppercase tracking-wider font-mono">
                  <Icon size={13} />{label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
