"use client";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const AVAILABLE_SKILLS = [
  "React",
  "TypeScript",
  "Python",
  "AI/ML",
  "Design",
  "UI/UX",
  "Data Analysis",
  "Video Editing",
  "Content Writing",
  "Translation",
  "Code Review",
  "Testing",
  "DevOps",
  "Node.js",
  "Next.js",
  "Cloud Architecture",
  "Database Design",
  "Security",
];

interface SkillsInputProps {
  skills: string[];
  onAdd: (skill: string) => void;
  onRemove: (index: number) => void;
}

export default function SkillsInput({
  skills,
  onAdd,
  onRemove,
}: SkillsInputProps) {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const input = e.currentTarget;
      const value = input.value.trim();

      if (value && !skills.includes(value)) {
        onAdd(value);
        input.value = "";
      }
    }
  };

  const handleSuggestionClick = (skill: string) => {
    if (!skills.includes(skill)) {
      onAdd(skill);
    }
  };

  const unusedSkills = AVAILABLE_SKILLS.filter((s) => !skills.includes(s));

  return (
    <div className="space-y-3">
      {/* Input */}
      <Input
        type="text"
        placeholder="Type a skill and press Enter"
        onKeyPress={handleKeyPress}
        className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
      />

      {/* Selected Skills */}
      {skills.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
            Selected Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <Badge
                key={idx}
                className="flex items-center gap-2 rounded-full border-0 bg-primary-hail/20 px-3 py-1.5 text-xs font-semibold text-primary-hail"
              >
                {skill}
                <button
                  onClick={() => onRemove(idx)}
                  className="hover:opacity-70"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Suggestions */}
      {unusedSkills.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
            Suggestions
          </p>
          <div className="flex flex-wrap gap-2">
            {unusedSkills.slice(0, 6).map((skill) => (
              <button
                key={skill}
                onClick={() => handleSuggestionClick(skill)}
                className="rounded-full border border-primary-hail/30 bg-primary-hail/5 px-3 py-1.5 text-xs font-semibold text-primary-hail transition-all hover:border-primary-hail hover:bg-primary-hail/10"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
