"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, Minimize2, Info } from "lucide-react";

export function CrmArchitectureViewer() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full space-y-3">
      {/* Container */}
      <div
        className="w-full border border-border rounded-sm bg-card p-4 md:p-6 overflow-hidden transition-all shadow-sm"
        role="region"
        aria-labelledby="crm-architecture-heading"
      >
        {/* Header toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4 mb-4">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
              System Architecture Diagram
            </span>
            <h3 id="crm-architecture-heading" className="text-base font-medium text-foreground">
              End-to-End CRM &amp; Supabase Integration Blueprint
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono border border-border px-2.5 py-1 rounded-sm text-muted-foreground bg-muted/40">
              1406 × 730 px · Vector SVG
            </span>
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider border border-border px-3 py-1.5 rounded-sm hover:bg-muted text-foreground transition-colors cursor-pointer"
              title="Expand diagram in lightbox view"
            >
              <Maximize2 size={13} />
              <span className="hidden sm:inline">Fullscreen</span>
            </button>
          </div>
        </div>

        {/* Scrollable Diagram Area */}
        <div className="relative overflow-x-auto pb-2 focus:outline-none focus:ring-1 focus:ring-ring rounded-sm">
          <div className="min-w-[900px] lg:min-w-full flex justify-center py-2">
            <object
              data="/arch.svg"
              type="image/svg+xml"
              className="w-full h-auto max-w-full pointer-events-auto rounded-sm"
              aria-label="Comprehensive system architecture diagram for CRM-integrated website and Supabase web app"
            >
              {/* Fallback image */}
              <Image
                src="/arch.svg"
                alt="System architecture diagram showing Next.js on Vercel, API integration layer, Supabase PostgreSQL with RLS, and External CRMs (HubSpot, GoHighLevel, Karbon)"
                width={1406}
                height={730}
                className="w-full h-auto"
                unoptimized
              />
            </object>
          </div>
        </div>

        {/* Screen Reader Alternative */}
        <div className="sr-only">
          Architecture overview:
          1. Frontend (Next.js on Vercel): Marketing site (SSG) for a fictional accounting/service firm, lead/contact form with validation and CAPTCHA, client intake/booking form (Karbon-style flow), and an authenticated dashboard for leads, deals, and sync status.
          2. Integration Layer (API routes and Edge Functions): POST /api/lead with Zod validation and idempotency key, CRM adapters (HubSpotClient, GHLClient, KarbonClient), webhook receivers at /api/webhooks/[crm] with signature verification, retry queue/worker with exponential backoff and dead-letter handling, and secrets management.
          3. Supabase: Auth with email/OAuth and JWT, Postgres with Row-Level Security across leads, crm_contacts, sync_events, and webhook_log tables, Edge Functions for scheduled CRM sync cron, Realtime for live dashboard updates, and Storage for intake attachments.
          4. External CRMs: HubSpot (Forms, Contacts, Deals API, Webhooks), GoHighLevel (Contacts, Opportunities API, Workflow webhooks), and Karbon (Contacts, Work Items API, webhooks).
        </div>

        {/* Caption */}
        <div className="pt-3 border-t border-border/80 flex items-start gap-2 text-xs text-muted-foreground font-light">
          <Info size={14} className="mt-0.5 shrink-0 text-foreground" />
          <p>
            <span className="font-medium text-foreground">Figure 1:</span> Architectural flow showing visitor intake from Next.js on Vercel through the middleware adapter layer into Supabase Postgres with Row-Level Security, synchronizing bidirectionally with external CRMs.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isExpanded && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md p-4 md:p-8 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
                High-Resolution Diagram Viewer
              </p>
              <h4 className="text-lg font-light text-foreground">
                CRM-Integrated Website + Supabase Web App Architecture
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="inline-flex items-center gap-2 border border-border px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider hover:bg-muted transition-colors cursor-pointer"
            >
              <Minimize2 size={14} />
              Close Fullscreen
            </button>
          </div>

          <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
            <object
              data="/arch.svg"
              type="image/svg+xml"
              className="w-full max-w-6xl h-auto pointer-events-auto"
              aria-label="High-resolution architecture diagram"
            >
              <Image
                src="/arch.svg"
                alt="High-resolution architecture diagram"
                width={1406}
                height={730}
                className="w-full max-w-6xl h-auto"
                unoptimized
              />
            </object>
          </div>

          <div className="border-t border-border pt-3 text-center text-xs text-muted-foreground">
            Press Close or click outside to return to the case study
          </div>
        </div>
      )}
    </div>
  );
}
