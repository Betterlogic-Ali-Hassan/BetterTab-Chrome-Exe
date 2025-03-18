const Logo = () => {
  return (
    <div className='hidden lg:flex gap-2 items-center px-4 border-b border-b-neutral-800 '>
      <a href='/'>
        <img
          src='https://bookmarkmanager.com/logo/icon.svg'
          alt='Bookmark Manager Logo Icon'
          className='w-7 h-7'
        />
      </a>
      <div className='text-sm font-semibold rounded  bg-white/10 text-white px-2 py-1 leading-none'>
        DEMO
      </div>
    </div>
  );
};

export default Logo;
