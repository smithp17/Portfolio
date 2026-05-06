"use client";

import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import VideoSlider from "./video-slider";
import SectionHeader from "@/app/components/helper/section-header";

const projects = [
  { id:1, name:"ZK-SNARK Private Voting", desc:"Zero-knowledge proof voting with smart contracts, nullifier-based privacy, and ZK circuits using Circom.", tools:["Solidity","Go","Node.js","Circom","ZK-SNARKs","React"], code:"https://github.com/smithp17/zsnark-voting-system-smartcontract-", demo:"", icon:"🗳️", bar:"from-violet-500 to-indigo-500", glow:"rgba(124,58,237,0.3)", size:"lg" },
  { id:2, name:"Botfolio AI Chatbot", desc:"AI resume screening chatbot that reduced recruiter workload by 60% using GPT-4.", tools:["React.js","OpenAI GPT-4","Node.js","Firebase"], code:"https://github.com/smithp17/Botfolio_Application", demo:"", icon:"🤖", bar:"from-cyan-500 to-teal-500", glow:"rgba(6,182,212,0.3)", size:"sm" },
  { id:3, name:"Event Management Platform", desc:"Full-stack EventBrite-style app with RBAC, real-time messaging, and bulk import.", tools:["React","TypeScript","Node.js","PostgreSQL","Socket.io","Docker"], code:"https://github.com/smithp17/Event-Management-App", demo:"", icon:"🎉", bar:"from-pink-500 to-rose-500", glow:"rgba(244,63,94,0.3)", size:"sm" },
  { id:4, name:"Blockchain AI Analyzer", desc:"Ethereum analysis tool combining Web3.py with Perplexity AI and ChromaDB for contract insights.", tools:["Python","Web3.py","Perplexity AI","ChromaDB","Ethereum","React"], code:"https://github.com/smithp17/BlockChain-data-AI-analyzer", demo:"", icon:"⛓️", bar:"from-amber-500 to-orange-500", glow:"rgba(245,158,11,0.3)", size:"lg" },
  { id:5, name:"AutoDialer System", desc:"Automated outbound calling platform with scheduling, analytics, and WebSocket support.", tools:["Python","Twilio","React","Node.js","MongoDB"], code:"https://github.com/smithp17/AutoDialer", demo:"", icon:"📞", bar:"from-emerald-500 to-teal-500", glow:"rgba(16,185,129,0.3)", size:"sm" },
  { id:6, name:"Fraud Detection ML", desc:"End-to-end ML pipeline using Logistic Regression, Random Forest, and XGBoost — 90% accuracy on AWS.", tools:["Python","Scikit-learn","XGBoost","AWS Lambda","S3"], code:"https://github.com/smitpatne/fraud-detection", demo:"", icon:"🔐", bar:"from-blue-500 to-indigo-500", glow:"rgba(37,99,235,0.3)", size:"sm" },
  { id:7, name:"PWC Customer Forecasting", desc:"ANN classification for bank marketing with LIME interpretability — 85% accuracy.", tools:["Python","TensorFlow","Keras","LIME","Pandas"], code:"https://github.com/smithp17/PWC-customer-Forecasting-ANN-", demo:"", icon:"📊", bar:"from-fuchsia-500 to-pink-500", glow:"rgba(192,38,211,0.3)", size:"sm" },
];

const videos = [
  { id:1, title:"ZK-SNARK Voting System Demo", url:"https://www.youtube.com/embed/eVqU3d6-Jg4", videourl:"https://www.youtube.com/watch?v=eVqU3d6-Jg4" },
  { id:2, title:"Botfolio AI Chatbot Demo", url:"https://www.youtube.com/embed/qYJdlz0XpbY", videourl:"https://www.youtube.com/watch?v=qYJdlz0XpbY" },
  { id:3, title:"Event Management Platform Demo", url:"https://www.youtube.com/embed/zr-EFnAjN1w", videourl:"https://www.youtube.com/watch?v=zr-EFnAjN1w" },
  { id:4, title:"Blockchain AI Analyzer Demo", url:"https://www.youtube.com/embed/BWY_vZ5FWx4", videourl:"https://www.youtube.com/watch?v=BWY_vZ5FWx4" },
  { id:5, title:"AutoDialer System Demo", url:"https://www.youtube.com/embed/1_c592pM0SQ", videourl:"https://www.youtube.com/watch?v=1_c592pM0SQ" },
];

function Card({ p, i, isInView }) {
  const [hov, setHov] = useState(false);
  const lg = p.size === "lg";
  return (
    <motion.div className={`relative group ${lg ? "md:col-span-2" : ""}`}
      initial={{ opacity:0, y:28 }}
      animate={isInView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.5, delay:0.08+i*0.07, ease:[0.22,1,0.36,1] }}
      onHoverStart={() => setHov(true)} onHoverEnd={() => setHov(false)}>
      <motion.div className="relative h-full glass rounded-2xl overflow-hidden cursor-default"
        whileHover={{ scale:1.015 }} transition={{ type:"spring", stiffness:260, damping:20 }}>
        {/* Glow */}
        <AnimatePresence>
          {hov && (
            <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} transition={{ duration:0.3 }}
              style={{ boxShadow:`inset 0 0 50px 0 ${p.glow}` }} />
          )}
        </AnimatePresence>
        <div className={`h-px bg-gradient-to-r ${p.bar}`} />
        <div className={`p-6 ${lg ? "lg:p-8" : ""}`}>
          <div className="flex items-start justify-between mb-5">
            <motion.span className="text-3xl" animate={hov ? { scale:1.2, rotate:[-5,5,0] } : { scale:1 }} transition={{ duration:0.4 }}>
              {p.icon}
            </motion.span>
            <span className="font-mono text-xs text-gray-700">{String(i+1).padStart(2,"0")}</span>
          </div>
          <h3 className={`font-bold text-white mb-2 leading-tight ${lg ? "text-xl lg:text-2xl" : "text-lg"}`}>{p.name}</h3>
          <p className="text-gray-500 text-base leading-relaxed mb-5 line-clamp-2">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {p.tools.slice(0, lg?6:4).map((t,j) => (
              <span key={j} className="text-[11px] px-2 py-0.5 rounded-md glass text-gray-500">{t}</span>
            ))}
          </div>
          {p.code && (
            <motion.div whileHover={{ scale:1.04 }} whileTap={{ scale:0.97 }} className="inline-block">
              <Link href={p.code} target="_blank"
                className="flex items-center gap-2 text-xs text-gray-500 hover:text-white glass px-3 py-1.5 rounded-lg hover:border-white/20 transition-all duration-200">
                <FaGithub size={12} /> View Code
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#06060f]" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=50" alt="" className="w-full h-full object-cover opacity-[0.09]" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(6,182,212,0.05),transparent)]" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <SectionHeader eyebrow="04 — Projects" title="Featured Work" subtitle="Blockchain · AI · Full-Stack · Machine Learning" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => <Card key={p.id} p={p} i={i} isInView={isInView} />)}
        </div>
        <VideoSlider videos={videos} />
      </div>
    </section>
  );
}
