import { cn } from "@/lib/utils";

interface Props {
  text: number;
  isSelected: boolean;
  isDisabled: boolean;
  onSelect: () => void;
}

const HoursBall = ({ text, isSelected, isDisabled, onSelect }: Props) => {
  return (
    <div
      className={cn(
        "max-w-[25px] flex items-center justify-center transition duration-200 cursor-pointer min-w-[25px] h-[25px] rounded-full bg-card  hover:bg-hover text-[11px]",
        isSelected && "bg-text  text-card   hover:bg-text dark:hover:text-card",
        isDisabled &&
          "opacity-50 cursor-not-allowed hover:bg-card  hover:text-text "
      )}
      onClick={!isDisabled ? onSelect : undefined}
    >
      {text}
    </div>
  );
};

export default HoursBall;
