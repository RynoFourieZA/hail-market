"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CATEGORIES } from "@/lib/mock-data";
import { Layers, BarChart3, DollarSign, SlidersHorizontal } from "lucide-react";

// ============================================================
// FilterBar — Pill-shaped filters with tonal layering, no borders
// ============================================================

interface FilterBarProps {
  category: string;
  difficulty: string;
  sort: string;
  onCategoryChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
  onSortChange: (value: string) => void;
}

export default function FilterBar({
  category,
  difficulty,
  sort,
  onCategoryChange,
  onDifficultyChange,
  onSortChange,
}: FilterBarProps) {
  const safeChange = (fn: (v: string) => void, fallback: string) => {
    return (value: string | null) => fn(value ?? fallback);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Category pill — No border, tonal background */}
      <Select value={category} onValueChange={safeChange(onCategoryChange, "All Categories")}>
        <SelectTrigger className="h-10 gap-2 rounded-full border-0 bg-surface-container-low px-4 text-sm font-medium text-on-surface shadow-none hover:bg-surface-container-highest transition-colors">
          <Layers className="h-4 w-4 text-on-surface/60" />
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent className="border-0 bg-surface-container-lowest">
          {CATEGORIES.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Difficulty pill */}
      <Select value={difficulty} onValueChange={safeChange(onDifficultyChange, "all")}>
        <SelectTrigger className="h-10 gap-2 rounded-full border-0 bg-surface-container-low px-4 text-sm font-medium text-on-surface shadow-none hover:bg-surface-container-highest transition-colors">
          <BarChart3 className="h-4 w-4 text-on-surface/60" />
          <SelectValue placeholder="Difficulty" />
        </SelectTrigger>
        <SelectContent className="border-0 bg-surface-container-lowest">
          <SelectItem value="all">All Difficulties</SelectItem>
          <SelectItem value="easy">Easy</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="hard">Hard</SelectItem>
        </SelectContent>
      </Select>

      {/* Budget Range pill */}
      <Select value={sort} onValueChange={safeChange(onSortChange, "newest")}>
        <SelectTrigger className="h-10 gap-2 rounded-full border-0 bg-surface-container-low px-4 text-sm font-medium text-on-surface shadow-none hover:bg-surface-container-highest transition-colors">
          <DollarSign className="h-4 w-4 text-on-surface/60" />
          <SelectValue placeholder="Budget Range" />
        </SelectTrigger>
        <SelectContent className="border-0 bg-surface-container-lowest">
          <SelectItem value="newest">Newest First</SelectItem>
          <SelectItem value="highest_pay">Highest Pay</SelectItem>
          <SelectItem value="lowest_pay">Lowest Pay</SelectItem>
          <SelectItem value="easiest">Easiest First</SelectItem>
        </SelectContent>
      </Select>

      {/* Filter toggle button — Gradient button */}
      <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-135 from-primary-hail to-primary-container text-white shadow-[0_4px_12px_rgba(0,76,202,0.15)] transition-all hover:shadow-[0_8px_16px_rgba(0,76,202,0.2)]">
        <SlidersHorizontal className="h-4 w-4" />
      </button>
    </div>
  );
}
