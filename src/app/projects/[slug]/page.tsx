"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

const projectDetails: Record<string, { title: string; category: string; fullDesc: string; img: string[]; tech: string[]; impact: string; liveUrl?: string }> = {
  "elite-cms": {
    title: "Elite CMS & Business Automation",
    category: "Enterprise SaaS",
    fullDesc: "A bespoke content management system developed for high-scale industrial operations. This project involved architecting a modular dashboard, role-based access control, and a complex logic-driven quoting engine. The system centralizes lead management and automates customer communications through Twilio and custom email triggers.",
    img: ["/homePage.jpeg", "/costEstimator.jpeg", "/contactUs.jpeg"],
    tech: ["Next.js 15", "NestJS", "PostgreSQL", "Digital Ocean Spaces", "Twilio", "Framer Motion"],
    impact: "Reduced manual quoting time by 90% and increased lead capture by 40% through integrated CRM tools.",
    liveUrl: "https://staging.etazsystems.com",
  },
  "whoosh-logistics": {
    title: "Whoosh Logistics",
    category: "Full Stack System",
    fullDesc: "A real-time transit and logistics management platform. The core challenge was building a highly concurrent seat allocation engine that prevents overbooking during peak traffic. Integrated with multiple payment gateways and a real-time notification system for passengers and operators.",
    img: ["/w1.PNG", "/w2.PNG", "/w3.PNG", "/w4.PNG", "/w5.PNG"],
    tech: ["Next.js", "Node.js", "Socket.io", "MongoDB", "Express", "TailwindCSS"],
    impact: "Successfully handled 10,000+ monthly bookings with zero allocation errors.",
  },
  "documind-ai": {
    title: "DocuMind AI",
    category: "AI SaaS Application",
    fullDesc: "An intelligent document processing pipeline that leverages LLMs (Google Gemini) to parse, categorize, and summarize complex PDF documents. Designed for enterprise clients who handle high volumes of legal and technical documentation, providing instant insights and automated data extraction.",
    img: ["/s1.PNG", "/s2.PNG", "/s3.PNG", "/s5.PNG"],
    tech: ["Next.js", "Google Gemini API", "Vector Databases", "Shadcn UI", "MongoDB"],
    impact: "Saved clients an average of 20 hours per week in manual document review.",
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const project = projectDetails[slug];

  if (!project) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4">Project Not Found.</h1>
        <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
          Return to Works
        </Link>
      </div>
    </div>
  );

  return (
    <div className="bg-background min-h-screen pb-32">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/projects" className="group inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Works
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_400px] gap-24">
          {/* Main Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6">
                {project.category}
              </p>
              <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl">
                {project.fullDesc}
              </p>
            </motion.div>

            {/* Carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {project.img.map((src, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                        <Image
                          src={src}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          fill
                          className="object-cover opacity-90"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute bottom-6 right-16 flex gap-2">
                  <CarouselPrevious className="relative left-0 translate-y-0 rounded-sm bg-background border-border hover:bg-muted" />
                  <CarouselNext className="relative right-0 translate-y-0 rounded-sm bg-background border-border hover:bg-muted" />
                </div>
              </Carousel>
            </motion.div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-12 pt-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Core Impact</h4>
                <div className="p-6 border border-border rounded-sm bg-muted/30">
                  <p className="text-lg font-light leading-relaxed italic text-foreground">
                    &quot;{project.impact}&quot;
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase mb-4">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <Badge key={i} variant="outline" className="rounded-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider border-border">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.liveUrl && (
                <div className="pt-8">
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 bg-foreground text-background px-8 py-4 rounded-sm font-bold tracking-widest uppercase text-[11px] transition-all hover:opacity-90"
                  >
                    Live Preview
                    <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}


