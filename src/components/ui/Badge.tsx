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
      } else if (text === "All" || filterType === "all") {
        return extensions.length;
      }
    }
    return null;
  };

  const count = getCount();

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
      {page === "extensions" && (
        <span
          onClick={() => setActiveFilter("all")}
          className='ml-1 mt-0.5 opacity-60 hover:opacity-100'
        >
          <X size={18} />
        </span>
      )}
    </button>
  );
};

export default Badge;
