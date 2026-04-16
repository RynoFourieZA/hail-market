"use client";

import TaskCard from "@/components/TaskCard";
import PremiumTaskCard from "@/components/PremiumTaskCard";
import { type Task } from "@/lib/mock-data";
import { Inbox, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// ============================================================
// TaskGrid — Asymmetric Bento-style grid with breathing space
// Row 1: 2-col featured card + 1-col small card
// Row 2: Two equal cards + premium card
// Then: View More button + count
// ============================================================

interface TaskGridProps {
  tasks: Task[];
  totalCount: number;
}

export default function TaskGrid({ tasks, totalCount }: TaskGridProps) {
  // Empty state
  if (tasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] bg-surface-container-low py-20">
        <Inbox className="mb-4 h-12 w-12 text-on-surface/20" />
        <h3 className="text-lg font-semibold text-on-surface/60">No tasks found</h3>
        <p className="mt-1 text-sm text-on-surface/40">
          Try adjusting your filters or check back later
        </p>
      </div>
    );
  }

  // Separate premium from regular tasks
  const premiumTask = tasks.find((t) => t.premium);
  const regularTasks = tasks.filter((t) => !t.premium);

  // Split into rows for the asymmetric layout
  const row1Large = regularTasks[0]; // Featured large card
  const row1Small = regularTasks[1]; // Small right card
  const row2Left = regularTasks[2]; // Bottom-left
  const row2Right = regularTasks[3]; // Bottom-center
  const remaining = regularTasks.slice(4); // Any remaining cards

  return (
    <div className="space-y-8">
      {/* ---- Row 1: Large card (2 cols) + Small card (1 col) ---- */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {row1Large && (
          <div className="md:col-span-2">
            <TaskCard task={row1Large} size="large" />
          </div>
        )}
        {row1Small && (
          <div className="md:col-span-1">
            <TaskCard task={row1Small} />
          </div>
        )}
      </div>

      {/* ---- Row 2: Two cards + Premium card ---- */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {row2Left && (
          <div>
            <TaskCard task={row2Left} />
          </div>
        )}
        {row2Right && (
          <div>
            <TaskCard task={row2Right} />
          </div>
        )}
        {premiumTask && (
          <div>
            <PremiumTaskCard task={premiumTask} />
          </div>
        )}
      </div>

      {/* ---- Remaining tasks in uniform grid ---- */}
      {remaining.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {remaining.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}

      {/* ---- View More button ---- */}
      <div className="flex flex-col items-center gap-3 pt-6">
        <Button
          variant="outline"
          className="rounded-full border-0 bg-surface-container-low px-8 py-3 text-sm font-semibold text-on-surface hover:bg-surface-container-highest transition-colors"
        >
          View More Tasks
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        <p className="text-xs text-on-surface/50">
          Showing {tasks.length} of {totalCount.toLocaleString()} available
          opportunities for your level.
        </p>
      </div>
    </div>
  );
}
