"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Task } from "@/lib/mock-data";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card } from "./ui/card";

// ============================================================
// TaskCard — Tonal layering, no-border design per APF
// Shows icon, badges, title, description, budget/meta row, CTA
// ============================================================

/** Color mapping for difficulty text */
const difficultyColors: Record<string, string> = {
  easy: "text-emerald-500",
  medium: "text-blue-500",
  hard: "text-rose-500",
};

interface TaskCardProps {
  task: Task;
  size?: "default" | "large";
}

export default function TaskCard({ task, size = "default" }: TaskCardProps) {

   const router = useRouter()

  const handleAccept = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Accepted", task.id);
  };

  const handleApply = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Applied", task.id);
    router.push(`/tasks/${task.id}`) // Navigate to task details page on apply
  };

  return (
    <Card>
      <div className="flex h-full flex-col rounded-[1.5rem] bg-surface-container-lowest p-5 shadow-[0_40px_16px_rgba(11,28,48,0.06)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_40px_24px_rgba(11,28,48,0.1)]">
      {/* ---- Top row: Icon + Badges ---- */}
      <div className="mb-4 flex items-start justify-between">
        {/* Task icon */}
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl text-lg ${task.iconBg}`}
        >
          {task.icon}
        </div>

        {/* Badges */}
        <div className="flex items-center gap-1.5">
          {task.ai_assist && (
            <Badge
              variant="secondary"
              className="rounded-full border-0 bg-tertiary-fixed-dim/20 px-2.5 py-1 text-[10px] font-semibold text-on-tertiary-fixed"
            >
              <Sparkles className="mr-1 h-3 w-3" />
              AI Assist
            </Badge>
          )}
          <Badge
            variant="secondary"
            className="rounded-full border-0 bg-surface-container-low px-2.5 py-1 text-[10px] font-semibold text-on-surface"
          >
            Level {task.required_level}+
          </Badge>
        </div>
      </div>

      {/* ---- Title — Manrope for editorial authority ---- */}
      <h3 className="mb-2 text-base font-semibold leading-snug text-on-surface font-display">
        {task.title}
      </h3>

      {/* ---- Description ---- */}
      <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-on-surface/70">
        {task.description}
      </p>

      {/* ---- Tags row ---- */}
      {task.tags && task.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {task.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border-0 bg-surface-container-highest px-2.5 py-1 text-[10px] font-medium text-primary-hail"
            >
              {tag === "High Demand" ? "🔥" : tag === "Quick Task" ? "⚡" : "🧠"} {tag}
            </Badge>
          ))}
        </div>
      )}

      {/* ---- Meta row: Budget, Requirement, Time, Difficulty ---- */}
      {size === "large" ? (
        <div className="mb-4 grid grid-cols-4 gap-3">
          <MetaItem label="Budget" value={`$${task.budget.toFixed(2)}`} highlight />
          <MetaItem label="Requirement" value={`Level ${task.required_level}+`} />
          <MetaItem label="Time" value={task.time_estimate} />
          <MetaItem
            label="Difficulty"
            value={task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
            className={difficultyColors[task.difficulty]}
          />
        </div>
      ) : (
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface/60">
              Budget
            </p>
            <p className="text-lg font-bold text-on-surface data-highlight">
              ${task.budget.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-on-surface/60">
            <span className={`font-semibold ${difficultyColors[task.difficulty]}`}>
              {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
            </span>
            <span>·</span>
            <span>{task.time_estimate}</span>
          </div>
        </div>
      )}

      {/* ---- Posted time (large cards only) ---- */}
      {size === "large" && (
        <p className="mb-4 text-xs italic text-on-surface/50">
          Posted {task.created_at}
        </p>
      )}

      {/* ---- CTA Button based on task type ---- */}
      {task.type === "micro" ? (
        <Button
          onClick={handleAccept}
          className="w-full rounded-xl bg-primary-hail to-primary-container py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]"
        >
          Accept Task
        </Button>
      ) : (
        <Button
          onClick={handleApply}
          className="w-full rounded-xl bg-primary-hail to-primary-container py-4 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]"
        >
          Apply for Task
        </Button>
      )}
      </div>
    </Card>
  );
}

// ---- Helper: Meta info item for the large card layout ----
function MetaItem({
  label,
  value,
  highlight,
  className,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  className?: string;
}) {
  return (
    <div>
      <p className="text-[10px] font-semibold uppercase tracking-wider text-on-surface/60">
        {label}
      </p>
      <p
        className={`text-sm font-bold ${
          highlight ? "text-lg text-on-surface data-highlight" : className || "text-on-surface"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
