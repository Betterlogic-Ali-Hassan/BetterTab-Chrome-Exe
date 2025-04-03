"use client";

import { extensions } from "@/constant/extensionData";
import { useBookmarks } from "@/context/BookmarkContext";
import { useExtensionContext } from "@/context/ExtensionContext";
import { usePageContext } from "@/context/PageContext";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  active?: boolean;
  filterType?: string;
}

const Badge = ({ text, onClick, className, active, filterType }: Props) => {
  const { page } = usePageContext();
  const { cards } = useBookmarks();
  const { enabledExtensions, pinnedExtensions, setActiveFilter } =
    useExtensionContext();

  const getCount = () => {
    if (page === "extensions") {
      if (text === "Enabled" || filterType === "enabled") {
        return enabledExtensions.size;
      } else if (text === "Disabled" || filterType === "disabled") {
        return cards.length - enabledExtensions.size;
      } else if (text === "Pinned" || filterType === "pinned") {
        return pinnedExtensions.size;
      } else if (text === "Recently Installed" || filterType === "recent") {
        // Count only extensions installed today
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to beginning of today

        // Get today's date in YYYY/MM/DD format for comparison
        const todayFormatted = `${today.getFullYear()}/${String(
          today.getMonth() + 1
        ).padStart(2, "0")}/${String(today.getDate()).padStart(2, "0")}`;

        return extensions.filter((ext) => {
          if (!ext.installDate) return false;

          // Compare the date part only (assuming installDate is in YYYY/MM/DD format)
          return ext.installDate.startsWith(todayFormatted);
        }).length;
      } else if (text === "All" || filterType === "all") {
        return extensions.length;
      }
    }
    return null;
  };

  const count = getCount();
  const clearFilter = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveFilter("");
  };
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center px-3 py-1.5 text-xs font-semibold bg-badge rounded-full text-text opacity-80 hover:opacity-100 ",
        active && "bg-brand text-text-primary",
        className
      )}
    >
      {text}
      {count !== null && <span className='ml-1 text-xs'>({count})</span>}
      {page === "extensions" && active && (
        <span
          onClick={clearFilter}
          className='ml-1 mt-0.5 opacity-60 hover:opacity-100'
        >
          <X size={18} />
        </span>
      )}
    </button>
  );
};

export default Badge;
