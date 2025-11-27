import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Scissors } from "lucide-react";

// Constants for timing control
const TOTAL_LOADING = 5000; // 5 seconds total
const PHASES = {
  INTRO: { start: 0, end: 600 },
  MID: { start: 600, end: 2400 },
  MICRO: { start: 2400, end: 4400 },
  EXIT: { start: 4400, end: TOTAL_LOADING },
};

const LoadingScreen = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const carRef = useRef(null);

  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  useEffect(() => {
    if (prefersReducedMotion) {
      // Skip animation for reduced motion preference
      controls.set("visible");
      return;
    }

    const runAnimationSequence = async () => {
      try {
        // Phase 1: Intro (0s - 0.6s)
        await controls.start("intro");

        // Phase 2: Mid-phase (0.6s - 2.4s)
        await controls.start("mid");

        // Phase 3: Micro-interactions (2.4s - 4.4s)
        await controls.start("micro");

        // Phase 4: Exit/Settle (4.4s - 5s)
        await controls.start("exit");
      } catch (error) {
        console.warn("Animation interrupted:", error);
      }
    };

    runAnimationSequence();
  }, [controls, prefersReducedMotion]);

  // Variants for coordinated timeline
  const containerVariants = {
    hidden: { opacity: 0 },
    intro: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.2, 0.9, 0.3, 1] },
    },
    mid: { opacity: 1 },
    micro: { opacity: 1 },
    exit: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.2, 0.9, 0.3, 1] },
    },
    visible: { opacity: 1 },
  };

  const logoVariants = {
    hidden: { scale: 0.6, opacity: 0 },
    intro: {
      scale: 1.03,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 240,
        damping: 22,
        duration: 0.5,
      },
    },
    mid: { scale: 1.0 },
    micro: { scale: 1.0 },
    exit: { scale: 1.0 },
    visible: { scale: 1, opacity: 1 },
  };

  const headlineVariants = {
    hidden: { opacity: 0, y: 10 },
    intro: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.2, 0.9, 0.3, 1] },
    },
    mid: {
      opacity: 1,
      textShadow: [
        "0 0 20px rgba(251, 191, 36, 0.3)",
        "0 0 30px rgba(244, 114, 182, 0.4)",
        "0 0 20px rgba(251, 191, 36, 0.3)",
      ],
      transition: {
        textShadow: {
          duration: 1.5,
          repeat: 1,
          ease: "easeInOut",
        },
      },
    },
    micro: { opacity: 1 },
    exit: { opacity: 1 },
    visible: { opacity: 1, y: 0 },
  };

  const carVariants = {
    hidden: { x: -120 },
    intro: { x: -120 },
    mid: {
      x: "100vw",
      transition: {
        duration: 1.8,
        ease: [0.2, 0.9, 0.3, 1],
      },
    },
    micro: { x: "100vw" },
    exit: { x: "100vw" },
    visible: { x: "100vw" },
  };

  const wheelVariants = {
    hidden: { rotate: 0 },
    intro: { rotate: 0 },
    mid: {
      rotate: 1440, // 4 full rotations during 1.8s travel
      transition: {
        duration: 1.8,
        ease: "linear",
      },
    },
    micro: { rotate: 1440 },
    exit: { rotate: 1440 },
    visible: { rotate: 1440 },
  };

  const treeVariants = {
    hidden: { rotate: 0, scale: 1 },
    intro: { rotate: 0, scale: 1 },
    mid: {
      rotate: [0, -3, 0, 3, 0],
      scale: [1, 1.01, 1, 1.01, 1],
      transition: {
        duration: 2.4,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1],
      },
    },
    micro: { rotate: 0, scale: 1 },
    exit: { rotate: 0, scale: 1 },
    visible: { rotate: 0, scale: 1 },
  };

  const leafVariants = {
    hidden: { opacity: 0, y: 0, rotate: 0 },
    intro: { opacity: 0 },
    mid: (i) => ({
      opacity: [0, 1, 0],
      y: -50 - i * 15,
      x: i % 2 === 0 ? 30 : -30,
      rotate: 180,
      transition: {
        duration: 2 + i * 0.5,
        ease: "easeInOut",
        delay: i * 0.3,
      },
    }),
    micro: { opacity: 0 },
    exit: { opacity: 0 },
    visible: { opacity: 0 },
  };

  const progressDotVariants = {
    hidden: { scale: 1, opacity: 0.4 },
    intro: { scale: 1, opacity: 0.4 },
    mid: (i) => ({
      scale: [1, 1.4, 1],
      opacity: [0.4, 1, 0.4],
      backgroundColor: [
        "rgb(251, 191, 36)",
        "rgb(244, 114, 182)",
        "rgb(251, 191, 36)",
      ],
      transition: {
        duration: 0.8,
        repeat: 2,
        delay: i * 0.2,
        ease: "easeInOut",
      },
    }),
    micro: { scale: 1, opacity: 0.4 },
    exit: {
      scale: (i) => (i === 3 ? 1.4 : 1),
      opacity: (i) => (i === 3 ? 1 : 0.4),
      backgroundColor: (i) =>
        i === 3 ? "rgb(192, 132, 252)" : "rgb(251, 191, 36)",
      transition: {
        duration: 0.3,
        ease: [0.2, 0.9, 0.3, 1],
      },
    },
    visible: { scale: 1, opacity: 0.4 },
  };

  const glowVariants = {
    hidden: { scale: 1, opacity: 0.1 },
    intro: { scale: 1, opacity: 0.1 },
    mid: {
      scale: 1.2,
      opacity: 0.15,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
    micro: {
      scale: 1.1,
      opacity: 0.12,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: { scale: 1, opacity: 0.1 },
    visible: { scale: 1, opacity: 0.1 },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 flex items-center justify-center p-6 relative overflow-hidden"
      style={{ willChange: "transform, opacity" }}
    >
      {/* Crisp Background Glows */}
      <motion.div
        variants={glowVariants}
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full blur-xl"
        style={{ willChange: "transform, opacity" }}
      />

      <motion.div
        variants={glowVariants}
        className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-gradient-to-r from-purple-200 to-rose-200 rounded-full blur-xl"
        style={{ willChange: "transform, opacity" }}
      />

      {/* Animated Road */}
      <div className="absolute bottom-32 left-0 right-0 h-1 bg-gray-300/30 rounded-full mx-8">
        <motion.div
          variants={{
            hidden: { backgroundPosition: "0% 0%" },
            intro: { backgroundPosition: "0% 0%" },
            mid: {
              backgroundPosition: "100% 0%",
              transition: {
                duration: 1.8,
                ease: "linear",
              },
            },
            micro: { backgroundPosition: "100% 0%" },
            exit: { backgroundPosition: "100% 0%" },
            visible: { backgroundPosition: "100% 0%" },
          }}
          className="h-full bg-gradient-to-r from-transparent via-gray-400/40 to-transparent bg-[length:200%_100%] rounded-full"
        />
      </div>

      {/* Moving Car */}
      <motion.div
        ref={carRef}
        variants={carVariants}
        className="absolute bottom-28 z-20"
        style={{ willChange: "transform" }}
      >
        {/* Car Body */}
        <motion.div
          variants={{
            hidden: { y: 0 },
            intro: { y: 0 },
            mid: {
              y: [0, -1, 0],
              transition: {
                duration: 0.8,
                repeat: 2,
                ease: "easeInOut",
              },
            },
            micro: { y: 0 },
            exit: { y: 0 },
            visible: { y: 0 },
          }}
          className="w-16 h-8 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg relative shadow-lg"
          style={{
            boxShadow: "0 6px 24px rgba(16, 24, 40, 0.08)",
            willChange: "transform",
          }}
        >
          {/* Car Top */}
          <div className="w-12 h-6 bg-rose-400 rounded-t-lg absolute -top-3 left-2 shadow-md" />
          {/* Car Windows */}
          <div className="w-10 h-3 bg-sky-200/80 rounded-t-sm absolute -top-2 left-3" />
          {/* Wheels */}
          <motion.div
            variants={wheelVariants}
            className="absolute -bottom-2 -left-1 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
            style={{ willChange: "transform" }}
          />
          <motion.div
            variants={wheelVariants}
            className="absolute -bottom-2 -right-1 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
            style={{ willChange: "transform" }}
          />
          {/* Headlight Glow */}
          <motion.div
            variants={{
              hidden: { opacity: 0.4 },
              intro: { opacity: 0.4 },
              mid: {
                opacity: [0.4, 0.8, 0.4],
                transition: {
                  duration: 1,
                  repeat: 1,
                  ease: "easeInOut",
                },
              },
              micro: { opacity: 0.4 },
              exit: { opacity: 0.4 },
              visible: { opacity: 0.4 },
            }}
            className="absolute -right-1 top-2 w-2 h-1 bg-amber-300 rounded-l-full blur-sm"
          />
        </motion.div>
      </motion.div>

      {/* Animated Trees */}
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          variants={treeVariants}
          className={`absolute bottom-32 ${
            index === 0 ? "left-20" : "right-20"
          } z-10`}
          style={{ willChange: "transform" }}
        >
          {/* Tree Trunk */}
          <div className="w-3 h-12 bg-amber-900 rounded-t mx-auto" />
          {/* Tree Leaves */}
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full -mt-4 relative shadow-lg">
            {/* Leaf Details */}
            <div className="absolute top-2 left-2 w-6 h-6 bg-emerald-400 rounded-full" />
            <div className="absolute top-4 right-3 w-5 h-5 bg-emerald-400 rounded-full" />
          </div>
        </motion.div>
      ))}

      {/* Floating Leaves */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          variants={leafVariants}
          custom={i}
          className="absolute w-3 h-3 bg-emerald-400/70 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center max-w-md relative z-10">
        {/* Animated Logo */}
        <motion.div
          variants={logoVariants}
          className="flex items-center justify-center space-x-3 mb-12"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.div
            variants={{
              hidden: { rotate: 0 },
              intro: { rotate: 0 },
              mid: {
                rotate: 180,
                transition: {
                  duration: 1.8,
                  ease: "easeInOut",
                },
              },
              micro: { rotate: 180 },
              exit: { rotate: 180 },
              visible: { rotate: 180 },
            }}
            style={{ willChange: "transform" }}
          >
            <Scissors className="w-14 h-14 text-rose-600" />
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -10 },
              intro: {
                opacity: 1,
                x: 0,
                transition: { delay: 0.3, duration: 0.4 },
              },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span className="text-5xl font-sans font-black bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Twist Zone
            </span>
          </motion.div>
        </motion.div>

        {/* Large Loading Text */}
        <motion.div
          variants={headlineVariants}
          className="mb-16"
          style={{ willChange: "transform, opacity" }}
        >
          <motion.h2
            variants={{}}
            className="text-5xl font-sans font-black text-gray-900 mb-4"
            style={{ willChange: "text-shadow" }}
          >
            Loading...
          </motion.h2>

          <motion.p
            variants={{
              hidden: { opacity: 0 },
              intro: {
                opacity: 1,
                transition: { delay: 0.5, duration: 0.3 },
              },
              visible: { opacity: 1 },
            }}
            className="text-lg text-gray-700 font-sans font-medium"
          >
            Preparing something beautiful for you
          </motion.p>
        </motion.div>

        {/* Progress Dots */}
        <motion.div className="flex justify-center space-x-3">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              variants={progressDotVariants}
              custom={index}
              className="w-3 h-3 rounded-full bg-amber-400 shadow-sm"
              style={{ willChange: "transform, opacity, background-color" }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
