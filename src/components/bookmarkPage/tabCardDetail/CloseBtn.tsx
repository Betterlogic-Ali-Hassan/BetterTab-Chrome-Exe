import { useBookmarks } from "@/context/BookmarkContext";

const CloseBtn = () => {
  const { setShowCardDetail } = useBookmarks();
  const handleShowCardDetail = () => {
    setShowCardDetail(false);
  };
  return (
    <button
      onClick={handleShowCardDetail}
      className='absolute top-0 right-0 text-foreground hover:text-text max-lg:hidden'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        className='h-7 w-7 lg:h-6 lg:w-6'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M6 18 18 6M6 6l12 12'
        ></path>
      </svg>
    </button>
  );
};

export default CloseBtn;
