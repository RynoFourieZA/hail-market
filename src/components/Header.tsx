"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, Grid3X3, User, LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LevelProgress from "@/components/LevelProgress";

// ============================================================
// Header — Glassmorphic top navigation with The Digital Curator
// HAIL logo, nav links, level/wallet info, icons, avatar
// ============================================================

const NAV_LINKS = [
  { label: "Marketplace", href: "/tasks" },
  { label: "My Tasks", href: "/my-tasks" },
  { label: "Earnings", href: "/earnings" },
  { label: "Governance", href: "/governance" },
];

export default function Header() {
  const pathname = usePathname();
  // Mock user level data
  const userLevel = 5;
  const userXP = 120;
  const userMaxXP = 200;
  const walletAddress = "0x71c...492";
  const walletBalance = 2450.75;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl shadow-[0_40px_0_0_rgba(11,28,48,0.06)]">
      <div className="flex h-16 items-center justify-between px-6">
        {/* ---- Left: Logo + Nav ---- */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/tasks" className="text-xl font-extrabold tracking-tight text-on-surface font-display">
            HAIL
          </Link>

          {/* Navigation links */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? "text-primary-hail border-b-2 border-primary-hail pb-0.5"
                      : "text-on-surface/60 hover:text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* ---- Right: Level progress, wallet, icons, avatar ---- */}
        <div className="flex items-center gap-6">
          {/* Level + XP progress */}
          <div className="hidden xl:block">
            <LevelProgress
              level={userLevel}
              currentXP={userXP}
              maxXP={userMaxXP}
              variant="header"
            />
          </div>

          {/* Wallet + Level (compact for smaller screens) */}
          <div className="hidden flex-col items-end text-right sm:flex xl:hidden">
            <span className="text-xs font-bold text-on-surface font-display">Level {userLevel}</span>
            <span className="font-mono text-[10px] text-on-surface/60">{walletAddress}</span>
          </div>

          {/* Wallet info (desktop only) — Tonal layer styling */}
          <div className="hidden items-center gap-2 rounded-xl bg-surface-container-low px-4 py-2.5 sm:flex">
            <span className="text-xs text-on-surface/70">Wallet:</span>
            <span className="font-mono text-xs font-semibold text-on-surface">
              ${walletBalance.toFixed(2)}
            </span>
          </div>

          {/* Notification bell */}
          <button className="rounded-lg p-2 text-on-surface/50 transition-colors hover:bg-surface-container-low hover:text-on-surface">
            <Bell className="h-4 w-4" />
          </button>

          {/* Grid icon */}
          <button className="rounded-lg p-2 text-on-surface/50 transition-colors hover:bg-surface-container-low hover:text-on-surface">
            <Grid3X3 className="h-4 w-4" />
          </button>

          {/* Avatar dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Avatar className="h-8 w-8 border-2 border-surface-container-low">
                <AvatarFallback className="bg-gradient-to-br from-primary-hail to-primary-container text-xs font-semibold text-white">
                  JD
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="w-48 bg-surface-container-lowest/95 backdrop-blur-lg border-surface-container-low/50"
            >
              <div className="px-2 py-1.5">
                <p className="text-sm font-semibold text-on-surface">John Doe</p>
                <p className="text-xs text-on-surface/60">john@hail.io</p>
              </div>
              <DropdownMenuSeparator className="bg-surface-container-low" />
              <DropdownMenuItem className="hover:bg-surface-container-low cursor-pointer">
                <User className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-surface-container-low cursor-pointer">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
