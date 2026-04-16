"use client";

import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

interface AIAssistCardProps {
  onGenerate: () => void;
}

export default function AIAssistCard({ onGenerate }: AIAssistCardProps) {
  return (
    <div className="mb-8 rounded-2xl bg-gradient-to-br from-tertiary-fixed-dim/20 to-surface-container-low p-6 border border-tertiary-fixed-dim/30">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-tertiary-fixed-dim">
          <Sparkles className="h-6 w-6 text-on-tertiary-fixed" />
        </div>
        <div className="flex-1">
          <h3 className="mb-1 text-lg font-semibold text-on-surface font-display">
            ⚡ Complete Faster with AI
          </h3>
          <p className="mb-4 text-sm leading-relaxed text-on-surface/70">
            Use our AI assistant to generate a proposal, estimate time, and
            suggest approach strategies based on the task requirements.
          </p>
          <Button
            onClick={onGenerate}
            className="rounded-lg bg-gradient-to-135 from-primary-hail to-primary-container px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Generate with AI
          </Button>
        </div>
      </div>
    </div>
  );
}
