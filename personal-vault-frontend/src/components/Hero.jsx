import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Personal Knowledge Vault
        </h1>
        <p className="text-zinc-400 text-base md:text-lg mb-10">
          Your AI-powered companion for organizing notes and managing to-dos.
          <br className="hidden md:block" />
          Secure, smart, and beautifully simple.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/signup">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
            >
              Get Started
            </motion.button>
          </Link>
          <Link to="/login">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="border border-purple-500 hover:bg-purple-600 transition px-6 py-3 rounded-xl text-white font-semibold shadow-lg"
            >
              Log In
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
