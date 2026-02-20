"use client";

export default function Badge({ children }: { variant?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-md bg-light/40 px-2 py-1 text-xs font-medium text-foreground">
      {children}
    </div>
  );
}
