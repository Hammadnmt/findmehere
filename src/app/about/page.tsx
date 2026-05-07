"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const services = [
    {
      title: "Custom SaaS Development",
      desc: "Architecting end-to-end cloud applications with Next.js and Node.js. Focused on multi-tenant security and horizontal scalability.",
    },
    {
      title: "Performance Audits",
      desc: "Diagnosing and fixing bottlenecked applications. Optimizing Core Web Vitals to improve search rankings and user retention.",
    },
    {
      title: "AI Pipeline Engineering",
      desc: "Integrating LLMs and automated data processing into existing workflows to reduce manual overhead and drive intelligence.",
    },
    {
      title: "CTO as a Service",
      desc: "Providing strategic technical leadership for startups. Helping you choose the right stack and build a foundation for growth.",
    },
  ];

  return (
    <section className="bg-background min-h-screen py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6">
            The Expertise
          </p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight max-w-4xl">
            Bridging the gap between <br />
            <span className="text-muted-foreground">Vision and Execution.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-light leading-relaxed text-muted-foreground">
              I am a Full Stack Engineer with a obsession for <span className="text-foreground font-medium">engineering excellence</span>. 
              My background isn&apos;t just about writing code; it&apos;s about solving business 
              frictions. Over the last 2+ years, I&apos;ve evolved from a technical foundation 
              in .NET to architecting complex, high-impact systems in the Next.js ecosystem.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xl font-light leading-relaxed text-muted-foreground">
              I specialize in working with founders and technical leaders to turn 
              high-level concepts into robust, production-ready software. Whether 
              it&apos;s a real-time logistics engine or an AI-powered SaaS, my goal 
              is to build tools that not only work but <span className="text-foreground font-medium">scale</span>.
            </p>
          </motion.div>
        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 border border-border rounded-sm hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-lg font-bold tracking-tight mb-4 uppercase">{s.title}</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
