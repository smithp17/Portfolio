"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function Spotlight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });
  const bg = useMotionTemplate`radial-gradient(700px circle at ${springX}px ${springY}px, rgba(124,58,237,0.11) 0%, rgba(6,182,212,0.05) 45%, transparent 70%)`;

  useEffect(() => {
    const move = (e) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return <motion.div className="pointer-events-none fixed inset-0 z-30" style={{ background: bg }} />;
}
