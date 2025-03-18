interface Props {
  setShowCardDetail: (show: boolean) => void;
}
const CloseBtn = ({ setShowCardDetail }: Props) => {
  return (
    <button
      onClick={() => setShowCardDetail(false)}
      className='absolute top-0 right-0 text-neutral-400 hover:text-white'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        stroke-width='1.5'
        stroke='currentColor'
        className='h-7 w-7 lg:h-6 lg:w-6'
      >
        <path
          stroke-linecap='round'
          stroke-linejoin='round'
          d='M6 18 18 6M6 6l12 12'
        ></path>
      </svg>
    </button>
  );
};

export default CloseBtn;
