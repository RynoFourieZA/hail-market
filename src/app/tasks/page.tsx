"use client";

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FilterBar from "@/components/FilterBar";
import TaskGrid from "@/components/TaskGrid";
import { mockTasks } from "@/lib/mock-data";

// ============================================================
// /tasks — Task Marketplace Dashboard
// Sidebar + main content with filters and bento task grid
// ============================================================

export default function TasksPage() {
  // ---- Filter state ----
  const [category, setCategory] = useState("All Categories");
  const [difficulty, setDifficulty] = useState("all");
  const [sort, setSort] = useState("newest");

  // ---- Filter and sort tasks ----
  const filteredTasks = useMemo(() => {
    let tasks = [...mockTasks];

    // Apply category filter
    if (category !== "All Categories") {
      tasks = tasks.filter((t) => t.category === category);
    }

    // Apply difficulty filter
    if (difficulty !== "all") {
      tasks = tasks.filter((t) => t.difficulty === difficulty);
    }

    // Apply sorting
    switch (sort) {
      case "highest_pay":
        tasks.sort((a, b) => b.budget - a.budget);
        break;
      case "lowest_pay":
        tasks.sort((a, b) => a.budget - b.budget);
        break;
      case "easiest": {
        const order = { easy: 0, medium: 1, hard: 2 };
        tasks.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
        break;
      }
      default:
        break;
    }

    return tasks;
  }, [category, difficulty, sort]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* ---- Top header ---- */}
      <Header />

      <div className="flex flex-1">
        {/* ---- Left sidebar ---- */}
        <Sidebar />

        {/* ---- Main content ---- */}
        <main className="flex-1 overflow-y-auto px-6 py-8 lg:px-10">
          {/* ---- Breadcrumb + Title row ---- */}
          <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-on-surface/50">
                <span>Marketplace</span>
                <span className="text-on-surface/30">/</span>
                <span className="text-primary-hail">Browse</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-on-surface font-display">
                Available Tasks
              </h1>
              <p className="mt-2 text-sm text-on-surface/60">
                Browse and complete tasks to earn money
              </p>
            </div>

            {/* ---- Filter controls ---- */}
            <FilterBar
              category={category}
              difficulty={difficulty}
              sort={sort}
              onCategoryChange={setCategory}
              onDifficultyChange={setDifficulty}
              onSortChange={setSort}
            />
          </div>

          {/* ---- Task grid ---- */}
          <TaskGrid tasks={filteredTasks} totalCount={1248} />
        </main>
      </div>
    </div>
  );
}
