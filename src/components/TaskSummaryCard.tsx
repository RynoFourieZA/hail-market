"use client";

import { Badge } from "@/components/ui/badge";
import { type Task } from "@/lib/mock-data";
import { Clock, Zap, TrendingUp } from "lucide-react";

interface TaskSummaryCardProps {
  task: Task;
}

export default function TaskSummaryCard({ task }: TaskSummaryCardProps) {
  return (
    <div className="sticky top-24 space-y-5">
      {/* Main Summary Card */}
      <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_40px_16px_rgba(11,28,48,0.06)]">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
          Applying for
        </p>
        <h3 className="mb-4 text-lg font-bold leading-tight text-on-surface font-display">
          {task.title}
        </h3>

        {/* Budget Highlight */}
        <div className="mb-5 rounded-xl bg-gradient-to-br from-primary-hail/10 to-primary-container/10 p-4">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
            Budget
          </p>
          <p className="text-3xl font-bold text-on-surface data-highlight">
            ${task.budget.toFixed(2)}
          </p>
        </div>

        {/* Task Details Grid */}
        <div className="space-y-3 border-t border-surface-container-low pt-4">
          {/* Difficulty */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-on-surface/70">Difficulty</span>
            <Badge
              className={`rounded-lg border-0 px-3 py-1 text-xs font-semibold ${
                task.difficulty === "easy"
                  ? "bg-emerald-100/50 text-emerald-700"
                  : task.difficulty === "medium"
                    ? "bg-blue-100/50 text-blue-700"
                    : "bg-rose-100/50 text-rose-700"
              }`}
            >
              {task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)}
            </Badge>
          </div>

          {/* Required Level */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-on-surface/70">Required Level</span>
            <Badge className="rounded-lg border-0 bg-surface-container-low px-3 py-1 text-xs font-semibold text-on-surface">
              Level {task.required_level}+
            </Badge>
          </div>

          {/* Time Estimate */}
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-on-surface/70">
              <Clock className="h-4 w-4" />
              Time
            </span>
            <span className="text-sm font-semibold text-on-surface">
              {task.time_estimate}
            </span>
          </div>

          {/* AI Assist */}
          {task.ai_assist && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-on-surface/70">
                <Zap className="h-4 w-4" />
                AI Assist
              </span>
              <Badge className="rounded-lg border-0 bg-tertiary-fixed-dim/20 px-3 py-1 text-xs font-semibold text-on-tertiary-fixed">
                Available
              </Badge>
            </div>
          )}

          {/* Applicants */}
          {task.applicants !== undefined && (
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-on-surface/70">
                <TrendingUp className="h-4 w-4" />
                Applicants
              </span>
              <span className="text-sm font-semibold text-on-surface">
                {task.applicants}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Description Preview */}
      {task.description && (
        <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_40px_16px_rgba(11,28,48,0.06)]">
          <h4 className="mb-3 text-sm font-semibold text-on-surface">
            Task Overview
          </h4>
          <p className="line-clamp-4 text-sm leading-relaxed text-on-surface/70">
            {task.description}
          </p>
        </div>
      )}
    </div>
  );
}
