import { cn } from "@/lib/utils";

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  id?: string;
}

const Button = ({ children, className, onClick, id }: buttonProps) => {
  return (
    <button
      id={id}
      className={cn(
        "rounded bg-card  px-3 py-2 text-sm font-semibold text-text shadow-sm  ring-1 dark:ring-0 ring-inset ring-border hover:bg-btn-hover   disabled:cursor-not-allowed whitespace-nowrap flex items-center",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
