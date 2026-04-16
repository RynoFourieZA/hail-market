"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type Task } from "@/lib/mock-data";
import { Star, Users, Clock, CheckCircle2 } from "lucide-react";

interface TaskSidebarProps {
  task: Task;
  onAccept?: () => void;
  onApply?: () => void;
}

export default function TaskSidebar({
  task,
  onAccept,
  onApply,
}: TaskSidebarProps) {
  return (
    <div className="sticky top-24 space-y-5">
      {/* Payment Card */}
      <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_40px_16px_rgba(11,28,48,0.06)]">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
          Budget
        </p>
        <p className="mb-6 text-4xl font-bold text-on-surface data-highlight font-display">
          ${task.budget.toFixed(2)}
        </p>

        {/* Payment Type */}
        {task.paymentType && (
          <div>
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
              Payment Type
            </p>
            <Badge className="rounded-lg border-0 bg-primary-hail/10 px-3 py-1 text-xs font-semibold text-primary-hail">
              {task.paymentType === "fixed" ? "Fixed Price" : "Per Task Basis"}
            </Badge>
          </div>
        )}
      </div>

      {/* Task Info Card */}
      <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_40px_16px_rgba(11,28,48,0.06)]">
        <h3 className="mb-4 text-sm font-semibold text-on-surface">Task Info</h3>

        <div className="space-y-3 text-sm">
          {/* Posted time */}
          <div className="flex items-center gap-3 text-on-surface/70">
            <Clock className="h-4 w-4 flex-shrink-0 text-primary-hail" />
            <div>
              <p className="text-xs font-semibold text-on-surface/60">Posted</p>
              <p>{task.created_at}</p>
            </div>
          </div>

          {/* Applicants */}
          {task.applicants !== undefined && (
            <div className="flex items-center gap-3 text-on-surface/70">
              <Users className="h-4 w-4 flex-shrink-0 text-blue-500" />
              <div>
                <p className="text-xs font-semibold text-on-surface/60">Applicants</p>
                <p>{task.applicants} interested</p>
              </div>
            </div>
          )}

          {/* Deadline */}
          {task.deadline && (
            <div className="flex items-center gap-3 text-on-surface/70">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-emerald-500" />
              <div>
                <p className="text-xs font-semibold text-on-surface/60">Deadline</p>
                <p>{task.deadline}</p>
              </div>
            </div>
          )}

          {/* Task Type Badge */}
          <div className="pt-2">
            <Badge
              className={`rounded-lg border-0 px-3 py-1 text-xs font-semibold ${
                task.type === "micro"
                  ? "bg-emerald-100/50 text-emerald-700"
                  : "bg-blue-100/50 text-blue-700"
              }`}
            >
              {task.type === "micro" ? "Microtask" : "Contract Task"}
            </Badge>
          </div>
        </div>
      </div>

      {/* Creator Info Card */}
      {task.creatorName && (
        <div className="rounded-2xl bg-surface-container-lowest p-6 shadow-[0_40px_16px_rgba(11,28,48,0.06)]">
          <h3 className="mb-4 text-sm font-semibold text-on-surface">Posted By</h3>

          <div className="space-y-3">
            <p className="font-semibold text-on-surface">{task.creatorName}</p>

            {task.creatorRating !== undefined && (
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(task.creatorRating!)
                            ? "fill-amber-400 text-amber-400"
                            : "text-on-surface/20"
                        }`}
                      />
                    ))}
                </div>
                <span className="text-sm font-semibold text-on-surface">
                  {task.creatorRating.toFixed(1)}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="space-y-2.5">
        {task.type === "micro" ? (
          <Button
            onClick={onAccept}
            className="w-full rounded-xl bg-primary-hail py-4 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Accept Task
          </Button>
        ) : (
          <>
            <Button
              onClick={onApply}
              className="w-full rounded-xl bg-primary-hail py-4 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]"
            >
              Apply for Task
            </Button>
            <p className="text-center text-xs text-on-surface/50">
              Requires approval from task creator
            </p>
          </>
        )}
      </div>
    </div>
  );
}
