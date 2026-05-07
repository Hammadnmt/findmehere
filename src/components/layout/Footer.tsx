"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="border-t border-border py-12 bg-background"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">
          © {new Date().getFullYear()} Hammad Javed. All Rights Reserved.
        </p>

        <div className="flex gap-8">
          {[
            { href: "mailto:hammad.alinmt@gmail.com", icon: Mail },
            { href: "https://github.com/Hammadnmt", icon: Github },
            { href: "https://www.linkedin.com/in/hammadali909/", icon: Linkedin },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.href}
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon size={18} strokeWidth={1.5} />
            </Link>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
