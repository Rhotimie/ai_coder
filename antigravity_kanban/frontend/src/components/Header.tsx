"use client";

import React from "react";
import { LayoutGrid } from "lucide-react";

interface HeaderProps {
  totalCards: number;
  totalColumns: number;
}

export const Header: React.FC<HeaderProps> = ({ totalCards, totalColumns }) => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur-md px-6 py-3.5 shadow-2xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#032147] text-[#ecad0a] shadow-xs">
            <LayoutGrid className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-[#032147]">
                Project Board
              </h1>
              <span className="rounded-md bg-[#209dd7]/10 px-2 py-0.5 text-xs font-semibold text-[#209dd7]">
                Single Board
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="h-1 w-6 rounded-full bg-[#ecad0a]" />
              <p className="text-xs text-[#888888]">
                Streamlined Agile Workflow
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-[#888888]">
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
            <span className="font-semibold text-[#032147]">{totalColumns}</span>
            <span>Columns</span>
          </div>
          <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200/60">
            <span className="font-semibold text-[#032147]">{totalCards}</span>
            <span>Active Cards</span>
          </div>
        </div>
      </div>
    </header>
  );
};
