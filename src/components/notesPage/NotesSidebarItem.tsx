import { cn } from "@/lib/utils";

interface Props {
  id: number | string;
  title: string;
  des: string;
  timestamp: string;
  selected: boolean;
  onSelect: (id: number | string) => void;
  cardView: boolean;
}
const NotesSidebarItem = ({
  selected,
  title,
  des,
  id,
  timestamp,
  onSelect,
  cardView,
}: Props) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <button
      type='button'
      className={cn(
        "p-5 bg-card hover:bg-hover transition duration-200 border border-border  rounded-sm max-h-[136px] min-h-[136px]  ",
        selected && "bg-card border border-brand",
        cardView && "max-h-[260px] min-h-[260px] max-w-[164px]"
      )}
      onClick={handleClick}
    >
      <div className='flex gap-2 flex-col items-start'>
        <div className='flex flex-col items-start gap-1'>
          <h4
            className={cn(
              "text-sm font-medium text-text",
              cardView && "text-start"
            )}
          >
            {title}
          </h4>
          <div
            className={cn(
              " text-text opacity-70 text-left text-[13px] max-w-full line-clamp-2 overflow-hidden text-ellipsis",
              cardView && "line-clamp-[7]"
            )}
          >
            <span>{des}</span>
          </div>
        </div>
        <span className='text-text opacity-70 text-xs mt-2'>{timestamp}</span>
      </div>
    </button>
  );
};

export default NotesSidebarItem;
