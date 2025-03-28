import { cn } from "@/lib/utils";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}
const Badge = ({ text, onClick, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-block px-3 py-1.5 text-xs font-semibold bg-badge rounded-full text-text opacity-80 hover:opacity-100",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Badge;
