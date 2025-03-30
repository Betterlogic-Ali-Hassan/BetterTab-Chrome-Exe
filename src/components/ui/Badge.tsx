import { cn } from "@/lib/utils";

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
  active?: boolean;
}

const Badge = ({ text, onClick, className, active }: Props) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "inline-block px-3 py-1.5 text-xs font-semibold bg-badge rounded-full text-text opacity-80 hover:opacity-100",
        active && "bg-brand text-text-primary",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Badge;
