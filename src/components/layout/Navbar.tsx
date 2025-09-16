"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-b bg-white/80 dark:bg-black/80 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading font-bold text-xl">
          HJ<span className="text-brand-dark">.</span>
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-dark",
                pathname === link.href ? "text-brand-dark" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
