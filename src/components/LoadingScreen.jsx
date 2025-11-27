import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const LoadingScreen = () => {
  const controls = useAnimation();

  useEffect(() => {
    const runAnimation = async () => {
      // Simple fade in
      await controls.start("visible");
    };

    runAnimation();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: [0, 1.2, 1],
      opacity: [0, 1, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop",
        delay: i * 0.15,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="min-h-screen bg-white flex items-center justify-center"
    >
      <div className="text-center">
        {/* Loading Text */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-2xl font-semibold text-gray-800 mb-8"
        >
          Loading
        </motion.h2>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              custom={index}
              variants={dotVariants}
              initial="hidden"
              animate="visible"
              className="w-4 h-4 bg-gray-600 rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
