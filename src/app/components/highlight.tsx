'use client';

interface HighlightProps {
  children: React.ReactNode;
}

export default function Highlight({ children }: HighlightProps) {
  return (
    <span className="text-acya font-bold leading-none tracking-tight">
      {children}
    </span>
  );
}