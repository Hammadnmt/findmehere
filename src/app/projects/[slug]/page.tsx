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
import { cn } from "@/lib/utils";
import { FulfillmentArchitectureDiagram } from "@/components/fulfillment-architecture-diagram";
import { CrmArchitectureViewer } from "@/components/crm-architecture-viewer";

interface ProjectDetail {
  title: string;
  category: string;
  fullDesc: string;
  img?: string[];
  tech: string[];
  impact: string;
  impactLabel?: string;
  liveUrl?: string;
}

const projectDetails: Record<string, ProjectDetail> = {
  "crm-integrated-website-supabase-web-app": {
    title: "CRM-Integrated Website with a Supabase Web App",
    category: "Architecture Design / Integration",
    fullDesc: `1. Overview
I designed this comprehensive system architecture for a modern small business website—modeled on a fictional accounting and professional services firm—whose lead generation and intake booking forms flow directly into external CRMs, backed by an authenticated client dashboard powered by Supabase.

Please note: The accounting firm client is entirely fictional, and this is a self-initiated portfolio architecture project designed to model, test, and document production-minded integration practices.

2. Goals
The core technical and architectural objectives of this design are:
• Connect a marketing frontend to multiple enterprise CRMs: Seamlessly bridge public-facing web forms with HubSpot, GoHighLevel, and Karbon.
• Build a modern authenticated web app on Supabase: Demonstrate Supabase Auth, PostgreSQL with Row-Level Security (RLS), Edge Functions, and Realtime live subscriptions.
• Implement production-grade integration practices: Replace brittle direct API calls with idempotent endpoints, cryptographic signature validation, background retry queues with exponential backoff, dead-letter storage, and clear source-of-truth resolution.

3. Architecture
The full architecture diagram shown above illustrates the end-to-end data lifecycle across four primary layers:

• Frontend (Next.js on Vercel):
A performant marketing site built with Next.js (SSG) for fast initial loads and SEO. It features a public lead/contact form equipped with validation and CAPTCHA, a structured multi-step client intake and booking form (following a Karbon-style onboarding flow), and an authenticated client dashboard displaying active leads, deals, and sync status.

• Integration Layer (API Routes & Edge Functions):
A centralized intake handler (POST /api/lead) validating inputs via Zod schemas and deduplicating submissions using client-generated idempotency keys. Individual CRM adapters (HubSpotClient, GHLClient, KarbonClient) normalize API differences. Webhook receivers (/api/webhooks/{crm}) verify provider signatures before processing, and a background retry worker manages transient failures with exponential backoff and dead-letter recording. Secrets and OAuth tokens are isolated in environment variables.

• Supabase (Data, Auth & Realtime):
Supabase Auth handles user sessions and JWT issuance. PostgreSQL manages structured data across four dedicated tables: leads, crm_contacts, sync_events, and webhook_log, strictly isolated by Row-Level Security (RLS). Edge Functions handle scheduled CRM sync jobs via cron, Supabase Realtime pushes live lead and sync updates to the frontend dashboard, and Supabase Storage securely holds intake attachments.

• External CRMs:
Integrates with HubSpot (Forms, Contacts, and Deals API; incoming webhooks), GoHighLevel (Contacts and Opportunities API; workflow webhooks), and Karbon (Contacts and Work Items API; webhooks, subject to trial/partner access).

4. Key Design Decisions
• Idempotent Webhook Handling: Webhook delivery is notoriously at-least-once. Inbound webhooks compute a deterministic hash or read the vendor's event ID, logging each to the webhook_log table to guarantee idempotency and avoid duplicate lead creation.
• Source-of-Truth & Conflict Handling: Supabase is authoritative for initial form submissions and client intake data, while the CRM remains the system of record for deal stages and sales pipeline transitions. Bi-directional sync reconciles state based on updated_at timestamps, with every mutation recorded in sync_events.
• Why an Adapter Pattern per CRM: Each CRM features distinct authentication protocols (API keys vs. OAuth2), payload schemas, and rate limits. The adapter pattern isolates vendor-specific nuances behind a standardized interface, allowing CRMs to be swapped or added without touching frontend components or schema models.
• Why Row-Level Security (RLS): RLS enforces strict security at the database engine level. Even in the event of an API misconfiguration, authenticated dashboard users are restricted to querying only their own tenant and account records.
• Why Retries and a Dead-Letter Table: External CRM endpoints occasionally suffer transient 429 rate limits or network blips. Failed dispatches undergo up to 5 retries with jittered exponential backoff. Completely unrecoverable payloads route into a dead-letter table for inspection rather than being permanently lost.

5. Planned Hardening
Based on the architectural diagram's missing-layer specifications, the following hardening steps are planned prior to production launch:
• Observability: Sentry error tracking, structured JSON logs with trace correlation IDs, and synthetic endpoint uptime monitoring.
• Abuse Protection: Turnstile/CAPTCHA verification on public forms, IP-based edge rate limiting, and hidden honeypot fields to block automated spam.
• CI/CD with Staging: Automated GitHub Actions pipelines, Vercel preview deployments, Supabase branch databases for schema migrations, and isolated CRM sandbox accounts.
• Infrastructure: Cloudflare DNS with Web Application Firewall (WAF) rules and edge caching.
• Compliance & Governance: Clear consent checkboxes, privacy policy disclosures, user data deletion routines, and explicit demo-data watermarks.
• Testing: Automated Playwright end-to-end integration tests and simulated webhook delivery suites.

6. Tech Stack
Next.js, React, TypeScript, TailwindCSS, Supabase, PostgreSQL, Row-Level Security (RLS), HubSpot API, GoHighLevel API, Karbon API, Edge Functions, Zod, Framer Motion.

7. Status and Links
Status: Architecture Design Only.
This project is currently documented as an architectural design specification and system integration blueprint. There is no public live deployment or production repository link (no fake URLs). Implementation is planned.

8. What I'd Do Next (Planned Implementation)
• Set up sandbox accounts for HubSpot and GoHighLevel to validate OAuth2 token refresh and webhook signature verification routines.
• Author declarative PostgreSQL schema migration scripts in Supabase, codifying RLS policies, indexes, and audit triggers.
• Implement the background queue worker using Supabase Edge Functions with a dedicated dead-letter management view.
• Build out automated integration tests with Playwright to verify lead submission and real-time dashboard updates under simulated network failures.`,
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security (RLS)",
      "HubSpot API",
      "GoHighLevel API",
      "Karbon API",
      "Edge Functions",
      "Zod",
    ],
    impact: "Status: Architecture Design Only (self-initiated design specification; not deployed to production).",
    impactLabel: "Status & Scope",
  },
  "saudi-uzbek-business-council": {
    title: "Saudi Uzbek Business Council (SUBC) — Investor Relations Platform",
    category: "Investor Relations / Headless CMS",
    fullDesc: `Overview
Built the investor-facing website for the Saudi Uzbek Business Council (su-bc.com) as part of an engineering team. The platform serves as the digital gateway for bilateral economic cooperation and institutional investment between Saudi Arabia and Uzbekistan. I owned the Strapi CMS backend architecture and the Next.js frontend implementation end-to-end: custom content collection types, the API layer to render that content, an investor inquiry form with submission handling, Lenis smooth-scroll interactions, and dark/light theming.

What I built
1. Strapi CMS Backend Architecture: Configured and deployed custom content collection types, single types, and structured relations, providing non-technical council administrators with a robust headless content management interface.
2. Next.js API & Rendering Layer: Built a performant data-fetching layer consuming Strapi REST endpoints to hydrate investor-facing pages dynamically with minimal server overhead.
3. Investor Inquiry Engine: Engineered an investor inquiry form with comprehensive client-side validation, server-side payload handling, and reliable email/webhook submission routing.
4. Lenis Smooth Scrolling & Motion: Integrated Lenis smooth-scroll interactions combined with Framer Motion transitions for a modern, executive-grade digital presence.
5. Adaptive Theme System: Implemented dark and light theme support adhering to clean typographic and high-contrast design standards.`,
    tech: [
      "Next.js",
      "Strapi CMS",
      "TypeScript",
      "TailwindCSS",
      "REST API",
      "Lenis Scroll",
      "Framer Motion",
      "React",
    ],
    impact: "Delivered in 2 weeks, live in production, with investors actively submitting inquiries through it.",
    impactLabel: "Delivery & Impact",
    liveUrl: "https://su-bc.com",
    img: ["/subc-01.png", "/subc-02.png", "/subc-03.png"],
  },
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
  "order-fulfillment-erp-integration": {
    title: "Automated Order Processing & ERP Integration for a Multi-Channel Fulfillment SaaS",
    category: "SaaS / E-commerce Integration",
    fullDesc: `Overview
My company built a SaaS platform that automates order fulfillment for online sellers. It connects Shopify and WooCommerce stores to an ERP (SAP or Odoo) and carries each order through warehouse allocation, packing, courier handover and delivery. It is licensed per client: a license sets limits such as number of warehouses and monthly orders (for example 3 warehouses and 1,000 orders), and extra sales channels can be unlocked as add-ons on top of the base license. I was a full-stack engineer on the team and owned the order intake, the automated order processing engine and the dispatch module, including their ERP integration, logging and error handling.

What I built
1. Secure order intake. Webhook endpoints for Shopify and WooCommerce, HMAC signature verification so only genuine requests are accepted, and parsing of each platform's payload into the platform's order schema before handing the order to the order service for storage.
2. Order processing engine (scheduled job). Picks up confirmed orders plus previously failed ones and runs four steps: create the ERP sales order, allocate a warehouse that can fulfil the whole order, allocate a courier consignment number, generate a QR code. If a step fails, the error is logged and the order is held and retried on a later run without blocking other orders.
3. Dispatch module. Packed orders are handed to a courier person in bulk; each dispatch creates a delivery note in the ERP.
4. ERP integration. SAP through Service Layer APIs and Odoo through RPC calls, behind one shared processing flow.
5. Logging and error handling. Failures are recorded as structured logs so a failed order can be traced to its cause and recovered.`,
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "React",
      "SAP Service Layer API",
      "Odoo RPC",
      "Shopify Webhooks",
      "WooCommerce Webhooks",
      "HMAC-SHA256",
    ],
    impact: "Scope: order intake, processing engine, dispatch. Duration: about 1 month. Status: not in production; working demo available locally.",
    impactLabel: "Scope & Status",
    img: ["/erp_middleware_pitch_1791054743237.jpg"],
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
              <div className="text-xl text-muted-foreground font-light leading-relaxed max-w-3xl whitespace-pre-line">
                {project.fullDesc}
              </div>
            </motion.div>

            {/* Visual Media (Image/Carousel, Architecture Diagram or Live Platform Banner) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="space-y-8"
            >
              {slug === "crm-integrated-website-supabase-web-app" ? (
                <CrmArchitectureViewer />
              ) : project.img && project.img.length > 0 ? (
                <div className="relative">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.img.map((src, idx) => (
                        <CarouselItem key={idx}>
                          <div className="relative aspect-[16/10] overflow-hidden bg-muted border border-border rounded-sm">
                            <Image
                              src={src}
                              alt={`${project.title} visual ${idx + 1}`}
                              fill
                              className="object-cover opacity-90"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.img.length > 1 && (
                      <div className="absolute bottom-6 right-16 flex gap-2">
                        <CarouselPrevious className="relative left-0 translate-y-0 rounded-sm bg-background border-border hover:bg-muted" />
                        <CarouselNext className="relative right-0 translate-y-0 rounded-sm bg-background border-border hover:bg-muted" />
                      </div>
                    )}
                  </Carousel>
                </div>
              ) : project.liveUrl && slug !== "order-fulfillment-erp-integration" ? (
                <div className="aspect-[16/10] border border-border rounded-sm bg-muted/20 flex flex-col justify-between p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                      Production Platform
                    </span>
                    <span className="inline-flex items-center gap-2 text-[10px] font-mono border border-border px-3 py-1 rounded-sm text-foreground bg-background">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Live in Production
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl md:text-3xl font-light text-foreground">
                      {project.title}
                    </p>
                    <p className="text-sm md:text-base text-muted-foreground font-light max-w-xl leading-relaxed">
                      Explore the live investor relations website, headless Strapi CMS dynamic pages, and interactive inquiry flow directly online.
                    </p>
                  </div>
                  <div>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 bg-foreground text-background px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-all"
                    >
                      Visit su-bc.com
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ) : null}

              {slug === "order-fulfillment-erp-integration" && (
                <FulfillmentArchitectureDiagram />
              )}
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
                <h4 className="text-xs font-bold tracking-widest uppercase mb-4">
                  {project.impactLabel ?? "Core Impact"}
                </h4>
                <div className="p-6 border border-border rounded-sm bg-muted/30">
                  <p className={cn("text-lg font-light leading-relaxed text-foreground", !project.impactLabel && "italic")}>
                    {project.impactLabel ? project.impact : `"${project.impact}"`}
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


