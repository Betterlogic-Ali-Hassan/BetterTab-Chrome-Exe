import { useEffect, useRef, useState } from "react";
import DropDownContent from "./DropDownContent";
interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectAll: () => void;
  setShowCardDetail: (show: boolean) => void;
  clearSelection: () => void;
}
const DropDown = ({
  setShowSelectionCard,
  showSelectionCard,
  selectAll,
  setShowCardDetail,
  clearSelection,
}: Props) => {
  const [openDropDown, setOpenDropDown] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!btnRef.current) return;
      if (!btnRef.current.contains(event.target as Node)) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className='hidden lg:flex lg:h-[3.25rem] items-center justify-end'>
      <div className='flex items-center px-4 whitespace-nowrap text-neutral-500 text-sm'>
        70 bookmarks
        <div className='relative flex justify-center items-center'>
          <button
            ref={btnRef}
            className='p-2 lg:p-0.5 text-white lg:text-neutral-400 hover:text-white'
            onClick={() => setOpenDropDown(!openDropDown)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='2'
              stroke='currentColor'
              className='w-6 h-6 lg:w-5 lg:h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z'
              ></path>
            </svg>
          </button>
          {openDropDown && (
            <DropDownContent
              setShowCardDetail={setShowCardDetail}
              selectAll={selectAll}
              setShowSelectionCard={setShowSelectionCard}
              showSelectionCard={showSelectionCard}
              clearSelection={clearSelection}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDown;
