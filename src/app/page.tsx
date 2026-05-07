"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Globe, Zap } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6"
          >
            Available for Freelance Projects
          </motion.p>
          
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-8 max-w-5xl"
          >
            I Build Systems That <br />
            <span className="text-muted-foreground">Grow With Your Business.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed"
          >
            Full Stack Engineer specializing in high-performance Next.js architectures 
            and scalable Node.js backends. Turning complex business requirements 
            into seamless digital experiences.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="group flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-[11px] transition-all hover:opacity-90"
            >
              Start a Project
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="flex items-center gap-3 border border-border px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-[11px] transition-all hover:bg-muted"
            >
              View Case Studies
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="relative z-10 border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: <Zap className="text-primary w-8 h-8" />,
                title: "Scalable Architecture",
                desc: "Systems built to handle growth. From day one, your application is ready for thousands of users without breaking a sweat.",
              },
              {
                icon: <Cpu className="text-primary w-8 h-8" />,
                title: "AI Integration",
                desc: "Modernizing workflows with custom AI pipelines. Transforming raw data into automated insights that drive decision-making.",
              },
              {
                icon: <Globe className="text-primary w-8 h-8" />,
                title: "Performance First",
                desc: "Optimizing for speed and SEO. Delivering lightning-fast experiences that keep users engaged and search engines happy.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                {feature.icon}
                <h3 className="text-2xl font-light">{feature.title}</h3>
                <p className="text-muted-foreground font-light leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { label: "Years Experience", value: "2+" },
            { label: "Projects Delivered", value: "15+" },
            { label: "Performance Score", value: "99%" },
            { label: "Happy Clients", value: "100%" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-4xl md:text-5xl font-light mb-2">{stat.value}</h4>
              <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

