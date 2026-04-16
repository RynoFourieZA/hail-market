"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AttachmentUpload from "@/components/AttachmentUpload";
import LinkInputList from "@/components/LinkInputList";
import SkillsInput from "@/components/SkillsInput";
import AIAssistProposal from "@/components/AIAssistProposal";
import { type Task } from "@/lib/mock-data";

interface ProposalFormProps {
  task: Task;
  onSubmit: (formData: ProposalFormData) => void;
  onBack?: () => void;
  isLoading?: boolean;
}

export interface ProposalFormData {
  proposal: string;
  images: string[];
  links: { label: string; url: string }[];
  skills: string[];
  deliveryTime: string;
  suggestedPrice?: number;
}

export default function ProposalForm({
  task,
  onSubmit,
  onBack,
  isLoading = false,
}: ProposalFormProps) {
  const [proposal, setProposal] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [links, setLinks] = useState<{ label: string; url: string }[]>([]);
  const [skills, setSkills] = useState<string[]>([]);
  const [deliveryTime, setDeliveryTime] = useState("");
  const [suggestedPrice, setSuggestedPrice] = useState("");

  const handleAddLink = (label: string, url: string) => {
    setLinks([...links, { label, url }]);
  };

  const handleRemoveLink = (index: number) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleAddSkill = (skill: string) => {
    setSkills([...skills, skill]);
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!proposal.trim()) {
      alert("Please write a proposal");
      return;
    }

    if (!deliveryTime.trim()) {
      alert("Please specify estimated delivery time");
      return;
    }

    const formData: ProposalFormData = {
      proposal,
      images,
      links,
      skills,
      deliveryTime,
      suggestedPrice: suggestedPrice ? parseFloat(suggestedPrice) : undefined,
    };

    console.log("Proposal submitted:", {
      taskId: task.id,
      ...formData,
    });

    onSubmit(formData);
  };

  const handleGenerateProposal = () => {
    console.log("Generate proposal with AI");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Back Button */}
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary-hail hover:text-primary-container transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Task
        </button>
      )}

      {/* Header */}
      <div>
        <h1 className="mb-2 text-3xl font-bold text-on-surface font-display">
          Apply for Task
        </h1>
        <p className="text-on-surface/70">
          Submit your proposal and stand out from other applicants
        </p>
      </div>

      {/* Proposal Section */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-on-surface">
          Your Proposal <span className="text-rose-500">*</span>
        </label>
        <p className="mb-3 text-xs text-on-surface/60">
          Explain why you're the best fit, how you will approach the task, and
          your relevant experience. Be detailed and professional.
        </p>
        <Textarea
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          placeholder="Explain why you're the best fit, how you will approach the task, and your experience..."
          className="min-h-44 rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-3 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
        />
        <p className="mt-2 text-xs text-on-surface/50">
          {proposal.length} characters
        </p>
      </div>

      <div className="h-px bg-surface-container-low" />

      {/* Attachments Section */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-on-surface font-display">
          Showcase Your Work
        </h2>

        {/* Images */}
        <div className="mb-6">
          <label className="mb-3 block text-sm font-semibold text-on-surface">
            Portfolio Images
          </label>
          <p className="mb-3 text-xs text-on-surface/60">
            Upload screenshots, designs, or examples of your previous work
          </p>
          <AttachmentUpload images={images} onImagesChange={setImages} />
        </div>

        {/* Links */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-on-surface">
            Portfolio Links
          </label>
          <p className="mb-3 text-xs text-on-surface/60">
            Add links to your portfolio, GitHub, Figma, or other work samples
          </p>
          <LinkInputList
            links={links}
            onAdd={handleAddLink}
            onRemove={handleRemoveLink}
          />
        </div>
      </div>

      <div className="h-px bg-surface-container-low" />

      {/* Skills Section */}
      <div>
        <label className="mb-3 block text-sm font-semibold text-on-surface">
          Your Skills
        </label>
        <p className="mb-3 text-xs text-on-surface/60">
          Add relevant skills that match this task. Type or select from suggestions.
        </p>
        <SkillsInput
          skills={skills}
          onAdd={handleAddSkill}
          onRemove={handleRemoveSkill}
        />
      </div>

      <div className="h-px bg-surface-container-low" />

      {/* Delivery Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Estimated Delivery */}
        <div>
          <label className="mb-3 block text-sm font-semibold text-on-surface">
            Estimated Delivery <span className="text-rose-500">*</span>
          </label>
          <Input
            type="text"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            placeholder="e.g., 2 days, 5 hours"
            className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
          />
        </div>

        {/* Suggested Price (if not fixed) */}
        {task.paymentType !== "fixed" && (
          <div>
            <label className="mb-3 block text-sm font-semibold text-on-surface">
              Suggested Price
            </label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-on-surface/60">$</span>
              <Input
                type="number"
                value={suggestedPrice}
                onChange={(e) => setSuggestedPrice(e.target.value)}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 pl-6 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
              />
            </div>
          </div>
        )}
      </div>

      <div className="h-px bg-surface-container-low" />

      {/* AI Assist Section */}
      <AIAssistProposal onGenerate={handleGenerateProposal} />

      <div className="h-px bg-surface-container-low" />

      {/* Submit Section */}
      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          className="flex-1 rounded-lg border border-outline-variant/30 bg-transparent py-2.5 text-on-surface hover:bg-surface-container-low"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
          className="flex-1 rounded-lg bg-gradient-to-135 from-primary-hail to-primary-container py-2.5 font-semibold text-white shadow-sm transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)] disabled:opacity-50"
        >
          {isLoading ? "Submitting..." : "Submit Application"}
        </Button>
      </div>
    </form>
  );
}
