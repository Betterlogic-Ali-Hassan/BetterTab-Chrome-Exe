import HomeSidebar from "@/components/homeSidebar/HomeSidebar";
import NotesPage from "@/components/textEditor/notesPage/NotesPage";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

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
