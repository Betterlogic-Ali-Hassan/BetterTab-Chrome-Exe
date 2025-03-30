"use client";

import { exeFilter } from "@/constant/ExeFilter";
import Badge from "../ui/Badge";
import { useExtensionContext } from "@/context/ExtensionContext";

const ExtensionFilter = () => {
  const { activeFilter, setActiveFilter } = useExtensionContext();

  return (
    <div className='flex items-center gap-3 flex-wrap'>
      {exeFilter.map((item, i) => (
        <Badge
          key={i}
          text={item.label}
          onClick={() => setActiveFilter(item.value)}
          active={activeFilter === item.value}
        />
      ))}
      <Badge text='Developer Mode' />
    </div>
  );
};

export default ExtensionFilter;
