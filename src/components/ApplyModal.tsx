"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { type Task } from "@/lib/mock-data";

interface ApplyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  task: Task;
}

export default function ApplyModal({
  open,
  onOpenChange,
  task,
}: ApplyModalProps) {
  const [proposal, setProposal] = useState("");
  const [estimatedTime, setEstimatedTime] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    console.log("Application submitted", {
      taskId: task.id,
      proposal,
      estimatedTime,
      message,
    });
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    onOpenChange(false);
    setProposal("");
    setEstimatedTime("");
    setMessage("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-2xl bg-base-background">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-on-surface font-display">
            Apply for Task
          </DialogTitle>
          <DialogDescription className="text-sm text-on-surface/70">
            {task.title}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-4">
          {/* Proposal */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-on-surface">
              Your Proposal
            </label>
            <Textarea
              placeholder="Explain your approach and why you're the right fit for this task..."
              value={proposal}
              onChange={(e) => setProposal(e.target.value)}
              className="min-h-28 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-3 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
            />
          </div>

          {/* Estimated time */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-on-surface">
              Estimated Completion Time
            </label>
            <Select value={estimatedTime} onValueChange={setEstimatedTime}>
              <SelectTrigger className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest">
                <SelectValue placeholder="Select time estimate" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15min">15 minutes</SelectItem>
                <SelectItem value="30min">30 minutes</SelectItem>
                <SelectItem value="1hour">1 hour</SelectItem>
                <SelectItem value="2hours">2 hours</SelectItem>
                <SelectItem value="halfday">Half day</SelectItem>
                <SelectItem value="fullday">Full day</SelectItem>
                <SelectItem value="multiple">Multiple days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Optional message */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-on-surface">
              Optional Message (optional)
            </label>
            <Textarea
              placeholder="Add any additional notes or questions..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="min-h-20 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-3 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 border-t border-surface-container-low pt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1 rounded-lg border border-outline-variant/30 bg-transparent text-on-surface hover:bg-surface-container-low"
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!proposal.trim() || !estimatedTime || isSubmitting}
            className="flex-1 rounded-lg bg-gradient-to-135 from-primary-hail to-primary-container py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)] disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
