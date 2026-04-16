"use client";

import { type Task } from "@/lib/mock-data";

interface TaskRequirementsProps {
  task: Task;
}

export default function TaskRequirements({ task }: TaskRequirementsProps) {
  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Requirements */}
      {task.requirements && task.requirements.length > 0 && (
        <div className="rounded-2xl bg-surface-container-low p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-on-surface/60">
            Skills Required
          </h3>
          <ul className="space-y-2.5">
            {task.requirements.map((req, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm text-on-surface"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary-hail flex-shrink-0" />
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tools */}
      {task.tools && task.tools.length > 0 && (
        <div className="rounded-2xl bg-surface-container-low p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-on-surface/60">
            Tools & Resources
          </h3>
          <ul className="space-y-2.5">
            {task.tools.map((tool, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm text-on-surface"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span>{tool}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Deliverables */}
      {task.deliverables && task.deliverables.length > 0 && (
        <div className="rounded-2xl bg-surface-container-low p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-on-surface/60">
            Deliverables
          </h3>
          <ul className="space-y-2.5">
            {task.deliverables.map((deliverable, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-sm text-on-surface"
              >
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span>{deliverable}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
