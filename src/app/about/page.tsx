"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Rocket, Users, Award } from "lucide-react";

export default function AboutPage() {
  const highlights = [
    {
      icon: Code2,
      title: "Crafting Scalable Systems",
      desc: "Designed and developed robust APIs and backend solutions using Node.js and Next.js, handling thousands of requests seamlessly.",
    },
    {
      icon: Users,
      title: "User-Centered Development",
      desc: "Built intuitive, responsive interfaces with React & Tailwind, ensuring smooth UX across devices and boosting user engagement.",
    },
    {
      icon: Rocket,
      title: "Driving Impact",
      desc: "Contributed to real-world products like bus booking platforms and e-commerce apps, streamlining operations and improving customer satisfaction.",
    },
    {
      icon: Award,
      title: "Continuous Growth",
      desc: "From intern to full-stack engineer, continuously learning advanced architectures, DevOps practices, and serverless solutions.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        About Me 🌟
      </motion.h2>

      {/* Story */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12"
      >
        I’m a <span className="font-semibold text-foreground">Full Stack Software Engineer</span> with 2+
        years of experience building scalable, high-impact applications. My journey started with debugging
        APIs and crafting small features. Today I design end-to-end solutions that solve real problems, from
        real-time bus booking systems to e-commerce platforms.
        <br /> <br />
        Every line of code I write is driven by a simple goal:{" "}
        <span className="font-medium">create meaningful experiences for people</span>.
      </motion.p>

      {/* Highlights */}
      <div className="grid gap-6 md:grid-cols-2">
        {highlights.map((h, i) => {
          const Icon = h.icon;
          return (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="flex gap-4 items-start py-6">
                  <Icon className="w-7 h-7 text-brand-dark mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{h.title}</h3>
                    <p className="text-muted-foreground">{h.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Closing Line */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-12 text-center text-lg font-medium"
      >
        🚀 My mission: keep pushing boundaries, building solutions that not only work but inspire.
      </motion.p>
    </section>
  );
}
