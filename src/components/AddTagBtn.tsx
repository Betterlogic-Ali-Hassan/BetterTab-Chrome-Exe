import { cn } from "@/lib/utils";

export function TagButton({
  tag,
  isSelected,
  onClick,
}: {
  tag: string;
  isSelected: boolean | undefined;
  onClick: () => void;
}) {
  return (
    <button
      type='button'
      className={cn(
        "flex-none cursor-pointer inline-block  whitespace-nowrap truncate hover:!bg-hover max-w-xs tag py-2 px-3 rounded-[0.25rem] text-sm font-semibold btn text-text !bg-transparent capitalize",
        isSelected && " !bg-brand text-white hover:!bg-brand-hover"
      )}
      onClick={onClick}
      aria-pressed={isSelected}
    >
      {tag}
    </button>
  );
}
