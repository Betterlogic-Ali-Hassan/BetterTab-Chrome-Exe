interface Props {
  setShowSelectionCard: (show: boolean) => void;
  showSelectionCard: boolean;
  selectAll: () => void;
  setShowCardDetail: (show: boolean) => void;
  clearSelection: () => void;
}
const DropDownContent = ({
  setShowSelectionCard,
  showSelectionCard,
  selectAll,
  setShowCardDetail,
  clearSelection,
}: Props) => {
  const handleSelectAll = () => {
    setShowSelectionCard(true);
    selectAll();
    setShowCardDetail(false);
  };
  const handleShowSelectionCard = () => {
    setShowSelectionCard(true);
    setShowCardDetail(false);
  };
  const handleCloseSelectionCard = () => {
    setShowSelectionCard(false);
    clearSelection();
  };
  return (
    <div className='absolute right-2 top-10 lg:right-1 lg:top-7 z-30 w-48 origin-top-right rounded bg-neutral-700 py-1 shadow-black/70 ring-1 ring-black ring-opacity-5 focus:outline-none'>
      {!showSelectionCard && (
        <button
          className='px-4 py-2 text-sm text-white text-start w-full flex items-center gap-3 hover:bg-black/20'
          onClick={handleShowSelectionCard}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='1.5'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='h-5 w-5 text-neutral-400'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
            <path d='M9 11l3 3l8 -8'></path>
            <path d='M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9'></path>
          </svg>
          <span>Select multiple</span>
        </button>
      )}

      <button
        className='px-4 py-2 text-sm text-white text-start w-full flex items-center gap-3 hover:bg-black/20'
        onClick={handleSelectAll}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          stroke-width='1.5'
          stroke-linecap='round'
          stroke-linejoin='round'
          className='h-5 w-5 text-neutral-400'
        >
          <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
          <path d='M9 11l3 3l8 -8'></path>
          <path d='M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9'></path>
        </svg>
        <span>Select all</span>
      </button>
      {showSelectionCard && (
        <button
          className='px-4 py-2 text-sm text-white text-start w-full flex items-center gap-3 hover:bg-black/20'
          onClick={handleCloseSelectionCard}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='h-5 w-5 text-neutral-400'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M6 18 18 6M6 6l12 12'
            ></path>
          </svg>
          <span>Cancel selection</span>
        </button>
      )}
    </div>
  );
};

export default DropDownContent;
