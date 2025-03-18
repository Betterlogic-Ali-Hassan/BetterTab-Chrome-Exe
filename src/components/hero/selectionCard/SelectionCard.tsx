import AlertDialogBox from "@/components/AlertDialogBox";
import TagAlertBox from "@/components/TagAlertBox";
import { cn } from "@/lib/utils";

interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectedCards: number[];
  clearSelection: () => void;
}
const SelectionCard = ({
  setShowSelectionCard,
  showSelectionCard,
  selectedCards,
  clearSelection,
}: Props) => {
  const handleCancel = () => {
    clearSelection();
    setShowSelectionCard(false);
  };
  const isDisabled = selectedCards.length === 0;
  return (
    <div
      className={cn(
        "hidden lg:block relative  opacity-0 translate-x-[50%] transition-all duration-300",
        showSelectionCard && "opacity-100 translate-x-0"
      )}
    >
      <div className='sticky top-0 left-0 w-full max-w-md min-w-72 text-white ml-2'>
        <div>
          <div className='text-sm flex flex-col items-start text-white  z-30 rounded-md bg-neutral-900 overflow-hidden'>
            <div className='rounded-t-md py-2.5 px-4 font-medium  text-white bg-blue-200/10 w-full whitespace-nowrap flex items-center justify-between'>
              <span>{selectedCards.length} selected</span>
              <button
                className='text-neutral-400 hover:text-white'
                onClick={handleCancel}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M6 18 18 6M6 6l12 12'
                  ></path>
                </svg>
              </button>
            </div>
            <TagAlertBox disabled={isDisabled} />
            <button
              className='hover:bg-white/5 w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={isDisabled}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-5 w-5 text-neutral-400 shrink-0'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                ></path>
              </svg>
              Open
            </button>
            <button
              className='hover:bg-white/5 w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
              disabled={isDisabled}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-5 w-5 text-neutral-400 shrink-0'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
                ></path>
              </svg>
              Copy URLs
            </button>

            <AlertDialogBox
              disabled={isDisabled}
              className='hover:bg-white/5 w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer text-white [&_svg]:text-[#a3a3a3]'
              allowText
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionCard;
