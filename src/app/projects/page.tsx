"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  impactLabel?: string;
  img?: string;
}

const projects: Project[] = [
  {
    slug: "order-fulfillment-erp-integration",
    title: "Automated Order Processing & ERP Integration for a Multi-Channel Fulfillment SaaS",
    category: "SaaS / E-commerce Integration",
    description: "Shopify and WooCommerce orders flowing into SAP or Odoo, with automated processing and dispatch. Built as a full-stack engineer on a SaaS product team.",
    impact: "Scope: order intake, processing engine, dispatch. Duration: about 1 month. Status: not in production; working demo available locally.",
    impactLabel: "Scope & Status",
    img: "/erp_middleware_pitch_1791054743237.jpg",
  },
  {
    slug: "elite-cms",
    title: "Elite CMS & Business Automation",
    category: "Enterprise SaaS",
    description: "A comprehensive, logic-driven content management system and lead generation engine. Engineered to handle complex industrial quoting and automated client workflows.",
    impact: "Automated 90% of manual quoting processes and centralized lead management for enterprise-scale operations.",
    img: "/homePage.jpeg",
  },
  {
    slug: "saudi-uzbek-business-council",
    title: "Saudi Uzbek Business Council (SUBC) — Investor Relations Platform",
    category: "Investor Relations / Headless CMS",
    description: "Investor-facing digital portal for the Saudi Uzbek Business Council (su-bc.com). Engineered with Next.js and a headless Strapi CMS to facilitate cross-border investment inquiries and economic partnerships.",
    impact: "Delivered in 2 weeks; live in production actively facilitating cross-border investor inquiries.",
    impactLabel: "Delivery & Impact",
    img: "/subc-01.png",
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
                  {p.img ? (
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-between p-6 bg-muted/40 border border-border transition-colors group-hover:bg-muted/60">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                          {p.category}
                        </span>
                        <span className="text-[10px] font-mono border border-border px-2 py-0.5 rounded-sm text-foreground bg-background">
                          Live Case Study
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs font-mono text-muted-foreground">
                          Production Platform
                        </p>
                        <p className="text-base font-light text-foreground line-clamp-2">
                          {p.title}
                        </p>
                      </div>
                      <div className="text-[10px] font-mono text-muted-foreground">
                        Next.js &bull; Headless Architecture &bull; Production
                      </div>
                    </div>
                  )}
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
                    <p className="text-xs font-bold tracking-widest uppercase mb-1">{p.impactLabel ?? "Impact"}</p>
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

