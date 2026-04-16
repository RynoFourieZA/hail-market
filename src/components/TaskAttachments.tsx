"use client";

import { useState } from "react";
import Image from "next/image";
import { type Task } from "@/lib/mock-data";
import { X, Download, ExternalLink } from "lucide-react";

interface TaskAttachmentsProps {
  task: Task;
}

export default function TaskAttachments({ task }: TaskAttachmentsProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const hasContent = (task.images && task.images.length > 0) || (task.links && task.links.length > 0);

  if (!hasContent) return null;

  return (
    <div className="mb-8">
      <div className="rounded-2xl bg-surface-container-low p-6">
        <h2 className="mb-6 text-lg font-semibold text-on-surface font-display">
          Resources & Attachments
        </h2>

        <div className="space-y-6">
          {/* Images Section */}
          {task.images && task.images.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-on-surface/70">
                Reference Images
              </h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {task.images.map((image, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-xl bg-surface-container-lowest"
                  >
                    <button
                      onClick={() => setSelectedImage(image)}
                      className="relative block w-full overflow-hidden rounded-xl"
                    >
                      <div className="relative h-40 w-full bg-surface-container-lowest">
                        <Image
                          src={image}
                          alt={`Reference image ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          onError={() => {
                            // Fallback for broken images
                          }}
                        />
                      </div>
                      {/* Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">
                        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <Download className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links Section */}
          {task.links && task.links.length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-on-surface/70">
                Reference Links
              </h3>
              <div className="space-y-2">
                {task.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg bg-surface-container-lowest px-4 py-3 text-sm transition-all hover:bg-primary-hail/10"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-hail/20">
                      <ExternalLink className="h-4 w-4 text-primary-hail" />
                    </div>
                    <span className="flex-1 font-medium text-on-surface hover:text-primary-hail">
                      {link.label}
                    </span>
                    <ExternalLink className="h-4 w-4 text-on-surface/40" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-full max-w-4xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg bg-black/50 text-white hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="relative h-96 w-full bg-black sm:h-screen sm:max-h-96">
              <Image
                src={selectedImage}
                alt="Full size reference"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
