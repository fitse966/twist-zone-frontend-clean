import React from "react";
import { motion } from "framer-motion";
import { Scissors } from "lucide-react";

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex items-center justify-center space-x-3 mb-8"
        >
          <Scissors className="w-10 h-10 text-rose-600" />
          <span className="text-3xl font-sans font-bold text-gray-800 tracking-tight">
            Twist Zone
          </span>
        </motion.div>

        {/* Spinner */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-rose-200 border-t-rose-600 rounded-full mx-auto mb-6"
        />

        {/* Text */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl font-sans font-semibold text-gray-800 mb-4"
        >
          Getting Ready for You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 font-sans leading-relaxed mb-6"
        >
          Our booking system is starting up. This usually takes 30-60 seconds on
          first visit.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray-500 font-sans"
        >
          Please wait while we prepare your experience...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
