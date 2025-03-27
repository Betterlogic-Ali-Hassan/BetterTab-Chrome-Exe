import { useFolderSelect } from "@/hooks/use-folder-select";
import { SearchInput } from "./SearchInput";
import { FolderList } from "./SelectFolderList";
import { cn } from "@/lib/utils";

export const PopoverContent = ({ className }: { className?: string }) => {
  const { searchTerm, filteredFolders, handleSearch, handleSelect } =
    useFolderSelect();
  return (
    <div
      className={cn(
        " z-50 max-h-96 w-[720px]  overflow-hidden rounded-md border bg-card text-popover-foreground shadow-md p-0",
        className
      )}
    >
      <SearchInput value={searchTerm} onChange={handleSearch} />
      <FolderList folders={filteredFolders} onSelect={handleSelect} />
    </div>
  );
};
