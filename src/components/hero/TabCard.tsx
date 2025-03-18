import { cn } from "@/lib/utils";
import { Card } from "@/types/TabCardType";

interface Props {
  setShowCardDetail: (show: boolean) => void;
  toggleCard: (cardId: number) => void;
  selected: boolean;
  id: number;
  showSelectionCard: boolean;
  data: Card;
  setActiveTab: (tab: number) => void;
}
const TabCard = ({
  setShowCardDetail,
  toggleCard,
  id,
  selected,
  showSelectionCard,
  data,
  setActiveTab,
}: Props) => {
  const handleToggle = () => {
    if (showSelectionCard) toggleCard(id);
    setActiveTab(id);
  };
  const handleCardDetail = () => {
    setShowCardDetail(true);
  };
  return (
    <div
      className={cn(
        " border-transparent bg-neutral-900 hover:bg-neutral-800  bookmark overflow-hidden select-none w-full relative border block rounded-md group",
        selected && "hover:bg-blue-200/20 border-blue-300/50 bg-blue-200/10 ",
        showSelectionCard && "cursor-pointer"
      )}
      onClick={handleToggle}
    >
      <div className='flex items-center'>
        <a
          target='_blank'
          className={cn(
            "focus:outline-none focus-visible:ring-1 ring-inset   ring-neutral-300 rounded truncate grow flex items-center gap-3 px-5 lg:px-4 h-14 lg:h-12",
            showSelectionCard && "pointer-events-none"
          )}
          href={data.path}
        >
          <object
            type='image/png'
            className='w-[16px] h-[16px] flex-none rounded-sm overflow-hidden'
            data={data.icon}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-[16px] h-[16px] text-slate-400'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
              ></path>
            </svg>
          </object>
          <div className='truncate text-sm font-medium text-white pr-8'>
            {data.title}
          </div>
        </a>
        {!showSelectionCard && (
          <button
            className='hidden group-hover:block focus:outline-none focus-visible:ring-1 ring-inset ring-neutral-300 rounded-r px-4 lg:px-3 h-14 lg:h-12 text-neutral-400 hover:text-white hover:bg-white/5 '
            onClick={handleCardDetail}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
              ></path>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default TabCard;
