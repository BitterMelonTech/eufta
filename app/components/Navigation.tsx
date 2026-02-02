"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/fta-industries", label: "FTA Industries" },
  { href: "/fiscal-representation", label: "Fiscal Representation" },
  { href: "/marketplace-enablement", label: "Marketplace Enablement" },
  { href: "/compliance-bridge", label: "Compliance Bridge" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-[48px] z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-slate-900">eufta.in</span>
            <span className="text-xs text-emerald-600">Rotterdam</span>
          </Link>
          <div className="hidden space-x-1 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-emerald-600"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
