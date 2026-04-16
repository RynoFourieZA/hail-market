"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface AIAssistProposalProps {
  onGenerate: () => void;
}

export default function AIAssistProposal({ onGenerate }: AIAssistProposalProps) {
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
            onClick={onGenerate}
            className="rounded-lg bg-primary-hail px-4 py-4 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Generate Proposal
          </Button>
        </div>
      </div>
    </div>
  );
}
