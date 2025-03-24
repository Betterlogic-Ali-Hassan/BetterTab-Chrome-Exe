const ShortcutBox = ({ text }: { text: string }) => {
  return (
    <a href='#' className='flex items-center flex-col'>
      <div className='h-[60px] w-[60px] rounded-md bg-card flex items-center justify-center hover:bg-hover'>
        <img
          src='/google.png'
          alt='google'
          className='h-4 w-4'
          loading='lazy'
        />
      </div>
      <span className='text-[13px] font-medium text-text max-w-[60px] truncate'>
        {text}
      </span>
    </a>
  );
};

export default ShortcutBox;
