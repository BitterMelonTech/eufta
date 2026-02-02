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
    <nav className="sticky top-[48px] z-40 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white font-bold text-lg shadow-lg">
              E
            </div>
            <div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">eufta.in</span>
              <span className="ml-2 text-xs font-medium text-emerald-600">Rotterdam</span>
            </div>
          </Link>
          <div className="hidden space-x-2 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-5 py-2.5 text-sm font-semibold text-slate-700 transition-all duration-200 rounded-lg hover:bg-slate-50 hover:text-emerald-600"
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-t-full"
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
