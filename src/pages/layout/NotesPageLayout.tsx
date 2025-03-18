import HomeSidebar from "@/components/homeSidebar/HomeSidebar";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

import NotesPage from "@/components/notesPage/NotesPage";

interface NotesPageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function NotesPageLayout({
  className,
  children,
}: NotesPageLayoutProps) {
  return (
    <div className={cn("flex ", className)}>
      <div>
        <HomeSidebar />
        <NotesPage />
      </div>
      {children}
    </div>
  );
}
