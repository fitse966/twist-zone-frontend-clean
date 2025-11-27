import React from "react";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Soft Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-amber-200 to-rose-200 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.08, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-rose-200 rounded-full blur-3xl"
      />

      {/* Animated Road */}
      <div className="absolute bottom-32 left-0 right-0 h-2 bg-gray-300/40 rounded-full mx-8">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 0%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-full bg-gradient-to-r from-transparent via-gray-400/50 to-transparent bg-[length:200%_100%] rounded-full"
        />
      </div>

      {/* Moving Car */}
      <motion.div
        animate={{
          x: [-100, window.innerWidth + 100],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-28 z-20"
      >
        {/* Car Body */}
        <motion.div
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-16 h-8 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg relative shadow-lg"
        >
          {/* Car Top */}
          <div className="w-12 h-6 bg-rose-400 rounded-t-lg absolute -top-3 left-2 shadow-md" />
          {/* Car Windows */}
          <div className="w-10 h-3 bg-sky-200/80 rounded-t-sm absolute -top-2 left-3" />
          {/* Wheels */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-2 -left-1 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-2 -right-1 w-4 h-4 bg-gray-800 rounded-full border-2 border-gray-600"
          />
          {/* Headlight Glow */}
          <motion.div
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-1 top-2 w-2 h-1 bg-amber-300 rounded-l-full blur-sm"
          />
        </motion.div>
      </motion.div>

      {/* Animated Trees */}
      {[0, 1].map((index) => (
        <motion.div
          key={index}
          className={`absolute bottom-32 ${
            index === 0 ? "left-20" : "right-20"
          } z-10`}
        >
          {/* Tree Trunk */}
          <div className="w-3 h-12 bg-amber-900 rounded-t mx-auto" />
          {/* Tree Leaves */}
          <motion.div
            animate={{
              rotate: [0, -3, 0, 3, 0],
              scale: [1, 1.02, 1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 2,
            }}
            className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full -mt-4 relative shadow-lg"
          >
            {/* Leaf Details */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1.5,
              }}
              className="absolute top-2 left-2 w-6 h-6 bg-emerald-400 rounded-full"
            />
            <motion.div
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 1,
              }}
              className="absolute top-4 right-3 w-5 h-5 bg-emerald-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Floating Leaves */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-emerald-400/60 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight * 0.5 + 100,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: [null, -50, null],
            x: [null, i % 2 === 0 ? 30 : -30, null],
            rotate: [0, 180, 360],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-md relative z-10"
      >
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            delay: 0.3,
          }}
          className="flex items-center justify-center space-x-3 mb-12"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Scissors className="w-14 h-14 text-rose-600" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="text-5xl font-sans font-bold bg-gradient-to-r from-amber-600 via-rose-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
              Twist Zone
            </span>
          </motion.div>
        </motion.div>

        {/* Large Loading Text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-16"
        >
          <motion.h2
            animate={{
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.3)",
                "0 0 30px rgba(244, 114, 182, 0.4)",
                "0 0 20px rgba(251, 191, 36, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-4xl font-sans font-bold text-gray-800 mb-4"
          >
            Loading...
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg text-gray-600 font-sans"
          >
            Preparing something beautiful for you
          </motion.p>
        </motion.div>

        {/* Subtle Progress Dots */}
        <motion.div className="flex justify-center space-x-3">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 1, 0.4],
                backgroundColor: [
                  "rgb(251, 191, 36)",
                  "rgb(244, 114, 182)",
                  "rgb(192, 132, 252)",
                  "rgb(251, 191, 36)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
                ease: "easeInOut",
              }}
              className="w-3 h-3 rounded-full bg-amber-400 shadow-sm"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
