"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { type Task } from "@/lib/mock-data";
import { Star } from "lucide-react";

// ============================================================
// PremiumTaskCard — Featured card with Glass & Gradient rule
// Blue gradient (primary to primary_container at 135°), glassmorphism
// ============================================================

interface PremiumTaskCardProps {
  task: Task;
}

export default function PremiumTaskCard({ task }: PremiumTaskCardProps) {
  const handleApply = () => {
    console.log("Applied", task.id);
  };

  const difficultyColors: Record<string, string> = {
    easy: "text-emerald-300",
    medium: "text-blue-200",
    hard: "text-rose-300",
  };

  return (
    <div 
      className="flex h-full flex-col justify-between rounded-[1.5rem] bg-gradient-to-135 from-primary-hail to-primary-container p-6 text-white shadow-[0_40px_24px_rgba(0,76,202,0.2)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_40px_32px_rgba(0,76,202,0.3)]"
      style={{
        backgroundImage: 'linear-gradient(135deg, #004cca 0%, #0062ff 100%)'
      }}
    >
      {/* ---- Premium label ---- */}
      <div className="mb-4 flex items-center gap-2">
        <Star className="h-4 w-4 text-amber-300" fill="currentColor" />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
          Premium Contract
        </span>
      </div>

      {/* ---- Title — Manrope for editorial authority ---- */}
      <h3 className="mb-3 text-2xl font-bold leading-tight font-display">
        {task.title}
      </h3>

      {/* ---- Description ---- */}
      <p className="mb-6 flex-1 text-sm leading-relaxed text-white/80">
        {task.description}
      </p>

      {/* ---- Tags (if any) ---- */}
      {task.tags && task.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {task.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border-0 bg-white/20 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-sm"
            >
              {tag === "High Demand" ? "🔥" : tag === "Quick Task" ? "⚡" : "🧠"} {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* ---- Fee + Difficulty ---- */}
      <div className="mb-5 flex items-end justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
            Fixed Fee
          </p>
          <p className="text-3xl font-bold">
            ${task.budget.toFixed(2)}
          </p>
        </div>
        <div className="text-right">
          <span className={`text-sm font-semibold ${difficultyColors[task.difficulty]}`}>
            {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
          </span>
          <p className="text-xs text-white/60">{task.time_estimate}</p>
        </div>
      </div>

      {/* ---- Apply button — Glassmorphism style ---- */}
      <Button
        onClick={handleApply}
        className="w-full rounded-xl border-2 border-white/30 bg-white/10 py-2.5 text-sm font-semibold text-white transition-all backdrop-blur-sm hover:border-white/60 hover:bg-white/20"
      >
        Apply for Task
      </Button>
    </div>
  );
}
