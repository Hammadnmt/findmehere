"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    slug: "elite-cms",
    title: "Elite CMS & Business Automation",
    category: "Enterprise SaaS",
    description: "A comprehensive, logic-driven content management system and lead generation engine. Engineered to handle complex industrial quoting and automated client workflows.",
    impact: "Automated 90% of manual quoting processes and centralized lead management for enterprise-scale operations.",
    img: "/homePage.jpeg",
  },
  {
    slug: "whoosh-logistics",
    title: "Whoosh Logistics",
    category: "Full Stack System",
    description: "Built a high-performance transit booking engine capable of handling real-time seat allocation and thousands of concurrent transactions.",
    impact: "30% increase in booking efficiency for local transit providers.",
    img: "/w1.PNG",
  },
  {
    slug: "documind-ai",
    title: "DocuMind AI",
    category: "SaaS Application",
    description: "Engineered an AI-powered document intelligence platform that automates complex PDF parsing and categorizes data with 98% accuracy.",
    impact: "Saved enterprise clients 20+ hours of manual data entry per week.",
    img: "/s1.PNG",
  },
];

export default function ProjectsPage() {
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
            Case Studies
          </p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight">
            Selected <span className="text-muted-foreground">Works.</span>
          </h2>
        </motion.div>

        <div className="grid gap-12">
          {projects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative border-b border-border pb-12"
            >
              <Link href={`/projects/${p.slug}`} className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
                
                <div className="flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-2">
                        {p.category}
                      </p>
                      <h3 className="text-3xl font-light group-hover:text-muted-foreground transition-colors">
                        {p.title}
                      </h3>
                    </div>
                    <div className="h-10 w-10 border border-border flex items-center justify-center rounded-sm transition-colors group-hover:bg-foreground group-hover:text-background">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground font-light leading-relaxed">
                    {p.description}
                  </p>
                  
                  <div className="bg-muted/50 p-6 rounded-sm border-l-2 border-foreground">
                    <p className="text-xs font-bold tracking-widest uppercase mb-1">Impact</p>
                    <p className="text-sm font-medium">{p.impact}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

