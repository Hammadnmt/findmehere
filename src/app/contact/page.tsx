"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      label: "Direct Email",
      value: "hammad.alinmt@gmail.com",
      href: "mailto:hammad.alinmt@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn Professional",
      value: "linkedin.com/in/hammadali909",
      href: "https://linkedin.com/in/hammadali909",
      icon: Linkedin,
    },
    {
      label: "GitHub Repositories",
      value: "github.com/Hammadnmt",
      href: "https://github.com/Hammadnmt",
      icon: Github,
    },
  ];

  return (
    <section className="bg-background min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-xs font-bold tracking-[0.3em] text-muted-foreground uppercase mb-6">
            Get in Touch
          </p>
          <h2 className="text-5xl md:text-7xl font-light tracking-tight">
            Ready to <span className="text-muted-foreground">Scale?</span>
          </h2>
        </motion.div>

        <div className="grid gap-4">
          {contacts.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
              >
                <a
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-8 border border-border rounded-sm hover:border-foreground/20 transition-all"
                >
                  <div className="flex items-center gap-6">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground mb-1">
                        {c.label}
                      </p>
                      <p className="text-lg font-bold tracking-tight group-hover:text-foreground transition-colors">
                        {c.value}
                      </p>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-muted-foreground font-bold tracking-[0.1em] uppercase text-xs mb-8">
            Currently accepting new engineering partnerships.
          </p>
          <a
            href="mailto:hammad.alinmt@gmail.com"
            className="inline-block px-12 py-5 bg-foreground text-background font-bold tracking-[0.2em] uppercase text-xs rounded-sm hover:opacity-90 transition-all"
          >
            Send a Brief
          </a>
        </motion.div>
      </div>
    </section>
  );
}
