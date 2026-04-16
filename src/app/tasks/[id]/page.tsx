"use client";

import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import TaskHeader from "@/components/TaskHeader";
import TaskDescription from "@/components/TaskDescription";
import TaskAttachments from "@/components/TaskAttachments";
import TaskRequirements from "@/components/TaskRequirements";
import AIAssistCard from "@/components/AIAssistCard";
import TaskSidebar from "@/components/TaskSidebar";
import { mockTasks, type Task } from "@/lib/mock-data";

export default function TaskDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const taskId = params.id as string;

  // Find the task by ID
  const task = mockTasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <div className="min-h-screen bg-base-background">
        <Header />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-surface-container-lowest p-8 text-center">
            <h1 className="mb-2 text-2xl font-bold text-on-surface">
              Task Not Found
            </h1>
            <p className="text-on-surface/60">
              The task you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleAccept = () => {
    console.log("Task accepted", taskId);
    // Here you would typically redirect or show a success message
  };

  const handleGenerateWithAI = () => {
    console.log("Generate with AI for task", taskId);
  };

  const handleApply = () => {
    if (task.type === "large") {
      router.push(`/tasks/${taskId}/apply`);
    }
  };

  return (
    <div className="min-h-screen bg-base-background">
      <Header />

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* 2-column layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left side - Main content (70%) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Task Header */}
            <TaskHeader task={task} />

            {/* Task Description */}
            <TaskDescription task={task} />

            {/* Task Attachments (Images & Links) */}
            <TaskAttachments task={task} />

            {/* Task Requirements */}
            <TaskRequirements task={task} />

            {/* AI Assist Section */}
            {task.ai_assist && (
              <AIAssistCard onGenerate={handleGenerateWithAI} />
            )}

            {/* Time & Effort Summary */}
            <div className="rounded-2xl bg-surface-container-low p-6">
              <h2 className="mb-4 text-lg font-semibold text-on-surface font-display">
                Timeline
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
                    Time Estimate
                  </p>
                  <p className="text-lg font-semibold text-on-surface">
                    {task.time_estimate}
                  </p>
                </div>
                {task.deadline && (
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
                      Deadline
                    </p>
                    <p className="text-lg font-semibold text-on-surface">
                      {task.deadline}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side - Sidebar (30%) */}
          <div className="lg:col-span-1">
            <TaskSidebar
              task={task}
              onAccept={handleAccept}
              onApply={handleApply}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
