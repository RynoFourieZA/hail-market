"use client";

import { Progress } from "@/components/ui/progress";

// ============================================================
// LevelProgress — XP progress bar with tonal layering
// Shows user level and XP progression
// ============================================================

interface LevelProgressProps {
  level: number;
  currentXP: number;
  maxXP: number;
  variant?: "header" | "full";
}

export default function LevelProgress({
  level,
  currentXP,
  maxXP,
  variant = "header",
}: LevelProgressProps) {
  const progressPercent = (currentXP / maxXP) * 100;

  if (variant === "header") {
    // Compact header version
    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-on-surface font-display">Level {level}</span>
          <span className="text-xs font-medium text-on-surface/60">
            {currentXP} / {maxXP} XP
          </span>
        </div>
        <Progress value={progressPercent} className="h-1.5 w-32" />
      </div>
    );
  }

  // Full card version — Tonal layering approach
  return (
    <div className="rounded-[1.5rem] bg-surface-container-lowest p-4 shadow-[0_4px_8px_rgba(11,28,48,0.04)]">
      <div className="mb-2">
        <h3 className="text-sm font-semibold text-on-surface font-display">Level Progress</h3>
        <p className="text-xs text-on-surface/60">Keep completing tasks to level up</p>
      </div>
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-primary-hail font-display">Level {level}</span>
          <span className="text-sm font-medium text-on-surface/70">
            {currentXP} / {maxXP} XP
          </span>
        </div>
        <Progress value={progressPercent} className="h-2" />
      </div>
      <div className="text-xs text-on-surface/50">
        {maxXP - currentXP} XP until next level
      </div>
    </div>
  );
}
