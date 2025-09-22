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

const projectDetails: Record<string, { title: string; desc: string; img: string[]; tech?: string[] }> = {
  whooshbus: {
    title: "WhooshBus",
    desc: "A full-stack Next.js bus booking platform with authentication, seat booking, and real-time updates.",
    img: ["/w1.PNG", "/w2.PNG", "/w3.PNG", "/w4.PNG", "/w5.PNG"],
    tech: ["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Socket.io"],
  },
  "mini-ecommerce": {
    title: "Mini E-commerce",
    desc: "A small-scale e-commerce demo app with product pages, cart functionality, and responsive UI.",
    img: ["/ecom.png", "/ecom3.png", "/ecom4.png", "/ecom2.png"],
    tech: ["Next.js", "Shadcn/UI", "Stripe", "MongoDB"],
  },
  pdfparsingpiplinesaas: {
    title: "DocuMind",
    desc: "Ai powered Saas application , which solves problem related to parsing pdf and explain the different nature of uploaded documents. Use Google Gemini APi for parsing and explaining the pdfs. It also has a feature to upload pdfs and get the summary of the pdf. ",
    img: ["/s1.PNG", "/s2.PNG", "/s3.PNG", "/s5.PNG"],
    tech: ["Next.js", "TailwindCSS", "Shadcn", "MongoDB", "Gemini AI", "Saas", "Admin Dashboard"],
  },
};

export default function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const project = projectDetails[slug];

  if (!project) return <p className="p-6">Project not found.</p>;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-center"
      >
        {project.title}
      </motion.h1>

      {/* Carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Carousel className="w-full max-w-4xl mx-auto mb-8">
          <CarouselContent>
            {project.img.map((src, idx) => (
              <CarouselItem key={idx}>
                <div className="relative flex justify-center">
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    width={900}
                    height={550}
                    className="rounded-xl shadow-lg"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-muted-foreground text-center mb-6"
      >
        {project.desc}
      </motion.p>

      {/* Tech Stack */}
      {project.tech && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="flex flex-wrap justify-center gap-3"
        >
          {project.tech.map((t, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
              <Badge variant="secondary" className="px-4 py-1 text-sm">
                {t}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
