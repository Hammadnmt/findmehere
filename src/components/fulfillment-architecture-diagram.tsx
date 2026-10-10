import React from "react";
import { ArrowDown, ArrowRight, AlertCircle, RotateCcw, ShieldCheck, Database, Layers, Truck, FileText } from "lucide-react";

export function FulfillmentArchitectureDiagram() {
  return (
    <div
      className="w-full border border-border rounded-sm bg-muted/20 p-6 md:p-8 space-y-8"
      role="region"
      aria-labelledby="fulfillment-diagram-heading"
    >
      {/* Screen Reader Alternative */}
      <div className="sr-only">
        Architecture Flow:
        Step 1: Orders originate from Shopify or WooCommerce and are transmitted to Webhook endpoints (HMAC verified).
        Step 2: Payloads are validated and transformed via Parse to order schema, then passed to Order service (stored).
        Step 3: The Scheduled processing engine handles orders in 4 sequential steps connected to SAP (Service Layer) / Odoo (RPC):
        1. ERP sales order creation.
        2. Warehouse allocation for the full order.
        3. Courier consignment number allocation.
        4. QR code generation.
        On failure at any step: Error is logged, order is held, and retried on the next run without blocking other orders.
        Step 4: Dispatch Module. Packed orders proceed to Dispatch in bulk, generating an ERP delivery note in SAP (Service Layer) / Odoo (RPC).
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-1">
            System Architecture
          </span>
          <h3 id="fulfillment-diagram-heading" className="text-lg font-light tracking-tight text-foreground">
            Order Intake, Processing Engine &amp; Dispatch Flow
          </h3>
        </div>
        <div className="inline-flex items-center gap-2 border border-border px-3 py-1.5 rounded-sm bg-background text-[11px] font-mono text-muted-foreground">
          <Database size={13} className="text-foreground" />
          <span>ERP: SAP (Service Layer) / Odoo (RPC)</span>
        </div>
      </div>

      {/* Stage 1: Order Intake Flow */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
          <ShieldCheck size={14} className="text-foreground" />
          <span>1. Secure Order Intake</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
          <div className="p-3 border border-border rounded-sm bg-background text-center">
            <p className="text-xs font-medium text-foreground">Shopify / WooCommerce</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Origin Store</p>
          </div>

          <div className="p-3 border border-border rounded-sm bg-background text-center relative">
            <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <ArrowRight size={12} />
            </div>
            <p className="text-xs font-medium text-foreground">Webhook endpoints (HMAC verified)</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Signature Validation</p>
          </div>

          <div className="p-3 border border-border rounded-sm bg-background text-center relative">
            <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <ArrowRight size={12} />
            </div>
            <p className="text-xs font-medium text-foreground">Parse to order schema</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Payload Normalization</p>
          </div>

          <div className="p-3 border border-border rounded-sm bg-background text-center relative">
            <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <ArrowRight size={12} />
            </div>
            <p className="text-xs font-medium text-foreground">Order service (stored)</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Database Persistence</p>
          </div>
        </div>
      </div>

      {/* Connector between Intake and Engine */}
      <div className="flex justify-center -my-3 text-muted-foreground">
        <ArrowDown size={16} />
      </div>

      {/* Stage 2: Scheduled Processing Engine & Retry Flow */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
            <Layers size={14} className="text-foreground" />
            <span>2. Scheduled Processing Engine</span>
          </div>
          <span className="text-[10px] font-mono text-muted-foreground">
            Interacts with: SAP (Service Layer) / Odoo (RPC)
          </span>
        </div>

        <div className="p-5 border border-border rounded-sm bg-background space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            Scheduled processing engine [1 ERP sales order, 2 Warehouse allocation, 3 Courier consignment number, 4 QR code]
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <div className="p-3 border border-border/80 rounded-sm bg-muted/30">
              <span className="text-[10px] font-mono text-muted-foreground">Step 1</span>
              <p className="text-xs font-medium text-foreground mt-1">1 ERP sales order</p>
            </div>
            <div className="p-3 border border-border/80 rounded-sm bg-muted/30">
              <span className="text-[10px] font-mono text-muted-foreground">Step 2</span>
              <p className="text-xs font-medium text-foreground mt-1">2 Warehouse allocation</p>
            </div>
            <div className="p-3 border border-border/80 rounded-sm bg-muted/30">
              <span className="text-[10px] font-mono text-muted-foreground">Step 3</span>
              <p className="text-xs font-medium text-foreground mt-1">3 Courier consignment number</p>
            </div>
            <div className="p-3 border border-border/80 rounded-sm bg-muted/30">
              <span className="text-[10px] font-mono text-muted-foreground">Step 4</span>
              <p className="text-xs font-medium text-foreground mt-1">4 QR code</p>
            </div>
          </div>

          {/* Failure Flow */}
          <div className="mt-4 pt-4 border-t border-dashed border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-muted/20 p-3 rounded-sm">
            <div className="flex items-center gap-2 text-muted-foreground font-medium">
              <AlertCircle size={14} className="text-destructive" />
              <span>on failure:</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-foreground flex-wrap">
              <span className="px-2 py-0.5 border border-border rounded-sm bg-background">Log</span>
              <ArrowRight size={12} className="text-muted-foreground" />
              <span className="px-2 py-0.5 border border-border rounded-sm bg-background">Hold</span>
              <ArrowRight size={12} className="text-muted-foreground" />
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-border rounded-sm bg-background">
                <RotateCcw size={10} />
                Retry next run
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Connector between Processing and Dispatch */}
      <div className="flex justify-center -my-3 text-muted-foreground">
        <ArrowDown size={16} />
      </div>

      {/* Stage 3: Dispatch Module */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground">
          <Truck size={14} className="text-foreground" />
          <span>3. Dispatch Module</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
          <div className="p-3 border border-border rounded-sm bg-background text-center">
            <p className="text-xs font-medium text-foreground">Packed orders</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Bulk Handover</p>
          </div>

          <div className="p-3 border border-border rounded-sm bg-background text-center relative">
            <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <ArrowRight size={12} />
            </div>
            <p className="text-xs font-medium text-foreground">Dispatch</p>
            <p className="text-[10px] text-muted-foreground mt-0.5">Courier Transfer</p>
          </div>

          <div className="p-3 border border-border rounded-sm bg-background text-center relative">
            <div className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              <ArrowRight size={12} />
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <FileText size={13} className="text-foreground" />
              <p className="text-xs font-medium text-foreground">ERP delivery note</p>
            </div>
            <p className="text-[10px] text-muted-foreground mt-0.5">SAP (Service Layer) / Odoo (RPC)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
