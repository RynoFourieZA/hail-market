"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Upload } from "lucide-react";

interface AttachmentUploadProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
}

export default function AttachmentUpload({
  images,
  onImagesChange,
}: AttachmentUploadProps) {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files) {
      processFiles(files);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files) {
      processFiles(files);
    }
  };

  const processFiles = (files: FileList) => {
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const result = e.target?.result as string;
          if (images.length < 5) {
            onImagesChange([...images, result]);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (index: number) => {
    onImagesChange(images.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      {/* Upload Area */}
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={`rounded-lg border-2 border-dashed p-6 text-center transition-all ${
          dragActive
            ? "border-primary-hail bg-primary-hail/10"
            : "border-outline-variant/30 bg-surface-container-lowest hover:bg-surface-container-low"
        }`}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="flex cursor-pointer flex-col items-center gap-2"
        >
          <Upload className="h-8 w-8 text-primary-hail/60" />
          <div>
            <p className="text-sm font-semibold text-on-surface">
              Drag images here or click to upload
            </p>
            <p className="text-xs text-on-surface/60">
              PNG, JPG, GIF up to 5 images
            </p>
          </div>
        </label>
      </div>

      {/* Preview Grid */}
      {images.length > 0 && (
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-on-surface/60">
            Uploaded Images ({images.length}/5)
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {images.map((image, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-24 w-full bg-surface-container-lowest">
                  <Image
                    src={image}
                    alt={`Upload ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => removeImage(idx)}
                  className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 opacity-0 transition-opacity group-hover:opacity-100"
                >
                  <X className="h-3 w-3 text-white" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
