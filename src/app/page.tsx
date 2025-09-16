"use client";

import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hammad Javed
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg text-muted-foreground"
      >
        Full Stack Developer crafting scalable MERN & Next.js solutions
      </motion.p>
    </section>
  );
}
