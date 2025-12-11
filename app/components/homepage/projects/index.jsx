"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import ProjectCard from "./project-card";
import VideoSlider from "./video-slider";

// Projects data embedded in component
const projectsData = [
  {
    id: 1,
    name: "ZK-SNARK Private Voting System",
    description: "A complete zero-knowledge proof voting system with smart contracts, nullifier-based privacy, and modern UI. Implements ZK circuits using Circom for anonymous voting while ensuring vote integrity.",
    tools: ["Solidity", "Go", "Node.js", "Circom", "ZK-SNARKs", "React"],
    code: "https://github.com/smithp17/zsnark-voting-system-smartcontract-",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_1",
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    icon: "🗳️"
  },
  {
    id: 2,
    name: "Botfolio - AI Resume Chatbot",
    description: "Solved real-world hiring challenges by automating resume screening, reducing recruiter workload by 60%. Job seekers upload resumes and generate unique AI-powered chatbot links with GPT-4.",
    tools: ["React.js", "OpenAI GPT-4", "Node.js", "Firebase", "Prompt Engineering"],
    code: "https://github.com/smithp17/Botfolio_Application",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_2",
    gradient: "from-cyan-600 via-teal-600 to-emerald-600",
    icon: "🤖"
  },
  {
    id: 3,
    name: "Event Management Platform",
    description: "Full-stack EventBrite-style platform with role-based access control featuring regular users, RSO users, and administrators. Includes real-time messaging, event CRUD, and bulk import.",
    tools: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    code: "https://github.com/smithp17/Event-Management-App",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_3",
    gradient: "from-pink-600 via-rose-600 to-red-600",
    icon: "🎉"
  },
  {
    id: 4,
    name: "Blockchain AI Analyzer",
    description: "Ethereum blockchain data analysis tool combining Web3.py with Perplexity AI and ChromaDB vector database. Analyzes transactions, smart contracts, and provides AI-powered insights.",
    tools: ["Python", "Web3.py", "Perplexity AI", "ChromaDB", "Ethereum", "React"],
    code: "https://github.com/smithp17/BlockChain-data-AI-analyzer",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_4",
    gradient: "from-amber-600 via-orange-600 to-yellow-600",
    icon: "⛓️"
  },
  {
    id: 5,
    name: "AutoDialer System",
    description: "Automated dialing system for efficient outbound calling campaigns. Features call scheduling, contact management, and analytics dashboard for tracking campaign performance.",
    tools: ["Python", "Twilio", "React", "Node.js", "MongoDB", "WebSocket"],
    code: "https://github.com/smithp17/AutoDialer",
    demo: "",
    video: "https://www.youtube.com/embed/YOUR_VIDEO_ID_5",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    icon: "📞"
  },
  {
    id: 6,
    name: "Credit Card Fraud Detection",
    description: "End-to-end ML project using Logistic Regression, Random Forest, and XGBoost. Applied PCA for dimensionality reduction and achieved 90% accuracy. Deployed on AWS.",
    tools: ["Python", "Scikit-learn", "XGBoost", "AWS Lambda", "S3", "Elastic Beanstalk"],
    code: "https://github.com/smitpatne/fraud-detection",
    demo: "",
    video: "",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    icon: "🔐"
  },
  {
    id: 7,
    name: "PWC Customer Forecasting",
    description: "Built ANN classification model to predict customer response in bank marketing campaigns. Implemented LIME for model interpretability, achieving 85% accuracy.",
    tools: ["Python", "TensorFlow", "Keras", "LIME", "Pandas", "NumPy"],
    code: "https://github.com/smithp17/PWC-customer-Forecasting-ANN-",
    demo: "",
    video: "",
    gradient: "from-fuchsia-600 via-pink-600 to-rose-600",
    icon: "📊"
  }
];

// Helper function to convert YouTube watch URL to embed URL
const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  // Handle youtube.com/watch?v= format
  const watchMatch = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  // Handle youtu.be/ format
  const shortMatch = url.match(/youtu\.be\/([^?]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  // Already embed format or other
  return url;
};

// Videos data with correct embed URLs
const videosData = [
  {
    id: 1,
    title: "ZK-SNARK Voting System Demo",
    url: "https://www.youtube.com/embed/eVqU3d6-Jg4",
    videourl: "https://www.youtube.com/watch?v=eVqU3d6-Jg4"
  },
  {
    id: 2,
    title: "Botfolio AI Chatbot Demo",
    url: "https://www.youtube.com/embed/qYJdlz0XpbY",
    videourl: "https://www.youtube.com/watch?v=qYJdlz0XpbY"
  },
  {
    id: 3,
    title: "Event Management Platform Demo",
    url: "https://www.youtube.com/embed/zr-EFnAjN1w",
    videourl: "https://www.youtube.com/watch?v=zr-EFnAjN1w"
  },
  {
    id: 4,
    title: "Blockchain AI Analyzer Demo",
    url: "https://www.youtube.com/embed/BWY_vZ5FWx4",
    videourl: "https://www.youtube.com/watch?v=BWY_vZ5FWx4"
  },
  {
    id: 5,
    title: "AutoDialer System Demo",
    url: "https://www.youtube.com/embed/1_c592pM0SQ",
    videourl: "https://www.youtube.com/watch?v=1_c592pM0SQ"
  }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef(null);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setActiveIndex((prev) => (prev + 1) % projectsData.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  // Scroll to active card
  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = 420;
      const gap = 24;
      const scrollPosition = activeIndex * (cardWidth + gap);
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
    }
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projectsData.length);
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
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm mb-6">
                <HiSparkles className="animate-pulse" />
                Featured Work
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-gray-400 max-w-xl">
                A showcase of my recent work spanning blockchain, AI, full-stack development, and more.
              </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <FaChevronLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Slider */}
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
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projectsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-purple-500 to-pink-500"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Video Demos Section */}
        <VideoSlider videos={videosData} />
      </div>
    </section>
  );
};

export default Projects;