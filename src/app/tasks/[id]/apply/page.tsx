"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import ProposalForm, { type ProposalFormData } from "@/components/ProposalForm";
import TaskSummaryCard from "@/components/TaskSummaryCard";
import { mockTasks } from "@/lib/mock-data";

export default function TaskApplyPage() {
  const params = useParams();
  const router = useRouter();
  const taskId = params.id as string;

  // Find the task by ID
  const task = mockTasks.find((t) => t.id === taskId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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
              The task you're trying to apply for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = async (formData: ProposalFormData) => {
    setIsSubmitting(true);

    // Simulate submission delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Full application data:", {
      taskId: task.id,
      taskTitle: task.title,
      ...formData,
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);

    // Show success message for 2 seconds then redirect
    setTimeout(() => {
      router.push(`/tasks/${taskId}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-base-background">
      <Header />

      {/* Success Message */}
      {submitSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mx-auto">
              <span className="text-3xl">✓</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold text-on-surface">
              Application Submitted!
            </h2>
            <p className="text-on-surface/60">
              Thank you for applying. The task creator will review your proposal.
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left side - Form (70%) */}
          <div className="lg:col-span-2">
            <ProposalForm
              task={task}
              onSubmit={handleSubmit}
              onBack={() => router.push(`/tasks/${taskId}`)}
              isLoading={isSubmitting}
            />
          </div>

          {/* Right side - Task Summary (30%) */}
          <div className="lg:col-span-1">
            <TaskSummaryCard task={task} />
          </div>
        </div>
      </main>
    </div>
  );
}
