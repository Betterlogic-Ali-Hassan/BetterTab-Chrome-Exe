"use client";

import { exeFilter } from "@/constant/ExeFilter";
import Badge from "../ui/Badge";
import { useExtensionContext } from "@/context/ExtensionContext";
import { cn } from "@/lib/utils";

const ExtensionFilter = () => {
  const { activeFilter, setActiveFilter } = useExtensionContext();

  return (
    <div className='flex items-center gap-3 flex-wrap'>
      {exeFilter.map((item, i) => (
        <Badge
          key={i}
          text={item.label}
          onClick={() => setActiveFilter(item.value)}
          className={cn(
            "cursor-pointer",
            activeFilter === item.value && "bg-brand text-text-primary"
          )}
        />
      ))}
      <Badge text='Developer Mode' />
    </div>
  );
};

export default ExtensionFilter;
