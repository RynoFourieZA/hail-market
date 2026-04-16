"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

interface LinkInputListProps {
  links: { label: string; url: string }[];
  onAdd: (label: string, url: string) => void;
  onRemove: (index: number) => void;
}

export default function LinkInputList({
  links,
  onAdd,
  onRemove,
}: LinkInputListProps) {
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const label = formData.get("label") as string;
    const url = formData.get("url") as string;

    if (label.trim() && url.trim()) {
      onAdd(label, url);
      e.currentTarget.reset();
    }
  };

  return (
    <div className="space-y-3">
      {/* Input Form */}
      <form onSubmit={handleAdd} className="space-y-2">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Input
            name="label"
            placeholder="e.g., GitHub Profile"
            className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
          />
          <Input
            name="url"
            type="url"
            placeholder="https://example.com"
            className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-3 py-2 text-sm text-on-surface placeholder:text-on-surface/40 focus:border-primary-hail focus:outline-none focus:ring-1 focus:ring-primary-hail"
          />
        </div>
        <Button
          type="submit"
          className="w-full rounded-lg border border-primary-hail bg-transparent px-3 py-2 text-sm font-semibold text-primary-hail hover:bg-primary-hail/10 sm:w-auto"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Link
        </Button>
      </form>

      {/* Links List */}
      {links.length > 0 && (
        <div className="space-y-2 pt-2">
          {links.map((link, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between rounded-lg bg-surface-container-lowest px-3 py-2.5"
            >
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-on-surface/60">
                  {link.label}
                </p>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="truncate text-sm text-primary-hail hover:underline"
                >
                  {link.url}
                </a>
              </div>
              <button
                onClick={() => onRemove(idx)}
                className="ml-2 flex-shrink-0 rounded-lg p-1 hover:bg-red-100"
              >
                <X className="h-4 w-4 text-red-500" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
