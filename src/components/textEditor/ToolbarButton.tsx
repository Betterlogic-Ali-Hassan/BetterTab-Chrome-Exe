"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ToolbarButtonProps {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  title: string;
  icon: ReactNode;
}

export default function ToolbarButton({
  onClick,
  isActive = false,
  disabled = false,
  title,
  icon,
}: ToolbarButtonProps) {
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={onClick}
      className={cn(isActive ? "bg-muted" : "")}
      disabled={disabled}
      title={title}
    >
      {icon}
    </Button>
  );
}
