"use client";

import { Badge } from "@/components/ui/badge";
import { type Task } from "@/lib/mock-data";
import { Sparkles } from "lucide-react";

interface TaskHeaderProps {
  task: Task;
}

export default function TaskHeader({ task }: TaskHeaderProps) {
  return (
    <div className="mb-8">
      {/* Task title */}
      <h1 className="mb-5 text-3xl font-bold leading-tight text-on-surface font-display">
        {task.title}
      </h1>

      {/* Badge row */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Difficulty badge */}
        <Badge
          variant="secondary"
          className={`rounded-lg border-0 px-3 py-1.5 text-xs font-semibold ${
            task.difficulty === "easy"
              ? "bg-emerald-100/50 text-emerald-700"
              : task.difficulty === "medium"
                ? "bg-blue-100/50 text-blue-700"
                : "bg-rose-100/50 text-rose-700"
          }`}
        >
          {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)} Level
        </Badge>

        {/* Required level badge */}
        <Badge
          variant="secondary"
          className="rounded-lg border-0 bg-surface-container-low px-3 py-1.5 text-xs font-semibold text-on-surface"
        >
          Level {task.required_level}+
        </Badge>

        {/* AI Assist badge */}
        {task.ai_assist && (
          <Badge
            variant="secondary"
            className="rounded-lg border-0 bg-tertiary-fixed-dim/20 px-3 py-1.5 text-xs font-semibold text-on-tertiary-fixed"
          >
            <Sparkles className="mr-1.5 inline h-3 w-3" />
            AI Assist Available
          </Badge>
        )}

        {/* Category badge */}
        <Badge
          variant="secondary"
          className="rounded-lg border-0 bg-primary-hail/10 px-3 py-1.5 text-xs font-semibold text-primary-hail"
        >
          {task.category}
        </Badge>
      </div>
    </div>
  );
}
