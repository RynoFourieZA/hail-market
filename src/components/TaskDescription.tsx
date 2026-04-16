"use client";

import { type Task } from "@/lib/mock-data";

interface TaskDescriptionProps {
  task: Task;
}

export default function TaskDescription({ task }: TaskDescriptionProps) {
  const descriptionText = task.fullDescription || task.description;
  const paragraphs = descriptionText.split("\n\n").filter((p) => p.trim());

  return (
    <div className="mb-8">
      <div className="rounded-2xl bg-surface-container-low p-6">
        <h2 className="mb-4 text-lg font-semibold text-on-surface font-display">
          Task Overview
        </h2>
        <div className="space-y-4">
          {paragraphs.map((paragraph, idx) => (
            <p
              key={idx}
              className="leading-relaxed text-on-surface/80"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
