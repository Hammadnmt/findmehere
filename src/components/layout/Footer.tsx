"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="border-t py-8 mt-12"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hammad Javed. All rights reserved.
        </p>

        <div className="flex gap-4">
          <Link href="mailto:hammad.alinmt@gmail.com" className="text-muted-foreground hover:text-brand-dark">
            <Mail className="h-5 w-5" />
          </Link>
          <Link
            href="https://github.com/Hammadnmt"
            target="_blank"
            className="text-muted-foreground hover:text-brand-dark"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hammadali909/"
            target="_blank"
            className="text-muted-foreground hover:text-brand-dark"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
