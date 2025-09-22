"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    slug: "whooshbus",
    title: "WhooshBus",
    desc: "Full-stack bus booking system built with Next.js & MongoDB.",
    img: "/w1.PNG",
  },
  {
    slug: "mini-ecommerce",
    title: "Mini E-commerce",
    desc: "Landing page, product page, and cart feature with Next.js.",
    img: "/ecom.png",
  },
  {
    slug: "pdfparsingpiplinesaas",
    title: "DocuMind",
    desc: "Ai powered Saas application , which solves problem related to parsing pdf and explain the different nature of uploaded documents",
    img: "/s1.PNG",
  },
];

export default function ProjectsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <Link href={`/projects/${p.slug}`}>
              <Image
                src={p.img}
                alt={p.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
