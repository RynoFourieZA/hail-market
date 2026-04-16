"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Flame,
  Clock,
  BarChart3,
  Settings,
  HelpCircle,
  FileText,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================================
// Sidebar — Left navigation with tonal layering & no-line rule
// ============================================================

const SIDEBAR_LINKS = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Active Bids", href: "/tasks", icon: Flame },
  { label: "History", href: "/history", icon: Clock },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Settings", href: "/settings", icon: Settings },
];

const BOTTOM_LINKS = [
  { label: "Support", href: "/support", icon: HelpCircle },
  { label: "Documentation", href: "/docs", icon: FileText },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-56 shrink-0 bg-surface-container-low lg:flex lg:flex-col">
      <div className="flex flex-1 flex-col px-4 py-6">
        {/* ---- The Curator branding ---- */}
        <div className="mb-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-on-surface/50">
            Curation Engine
          </p>
          <p className="mt-0.5 text-sm font-bold text-primary-hail font-display">The Curator</p>
        </div>

        {/* ---- Main navigation ---- */}
        <nav className="flex flex-1 flex-col gap-1">
          {SIDEBAR_LINKS.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-surface-container-highest text-primary-hail"
                    : "text-on-surface/60 hover:bg-surface-container-highest hover:text-on-surface"
                }`}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ---- Bottom links ---- */}
        <div className="mt-auto space-y-1">
          {BOTTOM_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 text-sm text-on-surface/50 transition-colors hover:text-on-surface"
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </Link>
            );
          })}

          {/* Post New Task CTA — Gradient button */}
          <Button className="mt-4 w-full rounded-xl bg-gradient-to-135 from-primary-hail to-primary-container text-white font-semibold hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]">
            <Plus className="mr-2 h-4 w-4" />
            Post New Task
          </Button>
        </div>
      </div>
    </aside>
  );
}
