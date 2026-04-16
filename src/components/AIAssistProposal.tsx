"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { generateProposalData } from "@/lib/proposal-generator";
import { type Task } from "@/lib/mock-data";
import { type ProposalFormData } from "@/components/ProposalForm";

interface AIAssistProposalProps {
  task: Task;
  onGenerate: (formData: ProposalFormData) => void;
}

export default function AIAssistProposal({
  task,
  onGenerate,
}: AIAssistProposalProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateClick = async () => {
    setIsGenerating(true);
    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const proposalData = generateProposalData(task);
    console.log("Generated proposal data:", proposalData);
    onGenerate(proposalData);

    setIsGenerating(false);
  };

  return (
    <div className="rounded-2xl bg-gradient-to-br from-tertiary-fixed-dim/20 to-surface-container-low p-6 border border-tertiary-fixed-dim/30">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-tertiary-fixed-dim">
          <Sparkles className="h-6 w-6 text-on-tertiary-fixed" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-lg font-semibold text-on-surface font-display">
            ⚡ Improve Your Proposal with AI
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-on-surface/70">
            Let our AI assistant help you craft a compelling proposal that showcases
            your skills and experience. It will enhance clarity and professionalism.
          </p>
          <Button
            onClick={handleGenerateClick}
            disabled={isGenerating}
            className="rounded-lg bg-gradient-to-135 from-primary-hail to-primary-container px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)] disabled:opacity-50"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            {isGenerating ? "Generating..." : "Generate Proposal"}
          </Button>
        </div>
      </div>
    </div>
  );
}
