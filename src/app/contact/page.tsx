"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactPage() {
  const contacts = [
    {
      label: "Email",
      value: "hammad.alinmt@gmail.com",
      href: "mailto:hammad.alinmt@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/hammadali909",
      href: "https://linkedin.com/in/hammadali909",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "github.com/Hammadnmt",
      href: "https://github.com/Hammadnmt",
      icon: Github,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Let’s Connect ✨
      </motion.h2>

      <div className="grid gap-6">
        {contacts.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <Card className="hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardContent className="flex items-center gap-4 py-4">
                  <Icon className="w-6 h-6 text-brand-dark" />
                  <div>
                    <p className="font-medium">{c.label}</p>
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-brand-dark underline"
                    >
                      {c.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-10"
      >
        <a
          href="mailto:hammad.alinmt@gmail.com"
          className="inline-block px-6 py-3 rounded-2xl bg-brand-dark text-white font-semibold hover:bg-brand-light transition"
        >
          Drop Me a Message 🚀
        </a>
      </motion.div>
    </section>
  );
}
