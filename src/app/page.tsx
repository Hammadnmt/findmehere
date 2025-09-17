"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Hammad Javed
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto"
        >
          Full Stack Developer crafting scalable MERN & Next.js solutions
        </motion.p>
      </section>

      {/* About Me */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          Full Stack Software Engineer with 2 years of experience in{" "}
          <span className="font-semibold">Next.js</span> and <span className="font-semibold">Node.js</span>. I
          specialize in building scalable applications with{" "}
          <span className="font-semibold">React, TailwindCSS, and modern UI libraries</span>. Outside of
          coding, I enjoy playing <span className="font-semibold">Tekken</span> and{" "}
          <span className="font-semibold">Sniper Elite</span>.
        </motion.p>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {[
            { icon: <Code size={28} />, label: "Next.js" },
            { icon: <Code size={28} />, label: "Node.js" },
            { icon: <Code size={28} />, label: "React" },
            { icon: <Code size={28} />, label: "TailwindCSS" },
            { icon: <Code size={28} />, label: "MongoDB" },
            { icon: <Code size={28} />, label: "TypeScript" },
            { icon: <Code size={28} />, label: "AWS" },
            { icon: <Code size={28} />, label: "Docker" },
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 sm:p-4 rounded-xl bg-muted hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-2 text-primary">{skill.icon}</div>
              <p className="text-xs sm:text-sm md:text-base font-medium">{skill.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Learning Journey Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-8"
        >
          Learning Journey
        </motion.h2>

        <div className="relative border-l border-muted-foreground/30 space-y-8">
          {[
            { year: "Start", text: ".NET foundation" },
            { year: "Transition", text: "Node.js + Express" },
            { year: "Frontend", text: "React + HTML + CSS + Bootstrap" },
            { year: "UI Upgrade", text: "React + Tailwind + ShadCN" },
            { year: "Now", text: "Next.js Full Stack + Tailwind + ShadCN" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              className="ml-6"
            >
              <div className="absolute -left-3 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-primary rounded-full border-2 border-background"></div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold">{item.year}</h3>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
