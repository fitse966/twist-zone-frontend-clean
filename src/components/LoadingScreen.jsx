import React from "react";
import { motion } from "framer-motion";
import { Scissors, Sparkles } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Animated Elements */}

      {/* Soft Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full blur-xl opacity-30"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-200 to-rose-200 rounded-full blur-xl opacity-20"
      />

      {/* Floating Bubbles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm border border-white/40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: [null, -100, null],
            scale: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Wavy Lines */}
      <motion.div
        animate={{
          x: [-100, 100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
        }}
        className="absolute top-1/2 left-0 w-48 h-1 bg-gradient-to-r from-transparent via-amber-300/20 to-transparent blur-sm"
      />

      <motion.div
        animate={{
          x: [100, -100],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          repeatType: "reverse",
          delay: 2,
        }}
        className="absolute bottom-1/3 right-0 w-32 h-1 bg-gradient-to-r from-transparent via-rose-300/20 to-transparent blur-sm"
      />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md relative z-10"
      >
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 100,
            delay: 0.2,
          }}
          className="flex items-center justify-center space-x-3 mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Scissors className="w-12 h-12 text-rose-600" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-4xl font-sans font-bold bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Twist Zone
            </span>
          </motion.div>
        </motion.div>

        {/* Pulsing Gradient Orb */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            background: [
              "radial-gradient(circle, #fbbf24, #f472b6, #c084fc)",
              "radial-gradient(circle, #f472b6, #c084fc, #fbbf24)",
              "radial-gradient(circle, #c084fc, #fbbf24, #f472b6)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 rounded-full mx-auto mb-8 flex items-center justify-center backdrop-blur-sm border border-white/30 shadow-lg"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* Geometric Pattern Background for Text */}
        <div className="relative">
          {/* Floating Triangles */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -top-4 -right-4 w-8 h-8 border-r-2 border-t-2 border-rose-400/30"
          />
          <motion.div
            animate={{
              rotate: 180,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute -bottom-4 -left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/30"
          />
          <motion.div
            animate={{
              rotate: -180,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-amber-400/30"
          />

          {/* Text Content */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-2xl font-sans font-semibold text-gray-800 mb-4"
          >
            Preparing Your Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-gray-600 font-sans leading-relaxed"
          >
            We're getting everything perfect for you
          </motion.p>
        </div>

        {/* Subtle Progress Dots */}
        <motion.div className="flex justify-center space-x-2 mt-8">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
                backgroundColor: [
                  "rgb(251, 191, 36)",
                  "rgb(244, 114, 182)",
                  "rgb(192, 132, 252)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
                ease: "easeInOut",
              }}
              className="w-2 h-2 rounded-full bg-amber-400"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
