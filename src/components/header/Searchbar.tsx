const Searchbar = () => {
  return (
    <div className='hidden lg:flex gap-4 justify-between items-center py-2 border-b border-b-neutral-800'>
      <div className='flex gap-2 grow'>
        <button className='grow flex items-center gap-2 bg-white/5 ring-white/10 placeholder:text-white/50 focus:ring-blue-500 disabled:bg-white/20 disabled:text-white/70 disabled:ring-white/20 w-full rounded border-0 bg-white py-1.5 px-4 ring-1 ring-inset  focus:ring-2 focus:ring-inset text-sm leading-6 whitespace-nowrap text-neutral-400'>
          <svg
            className='h-5 w-5 text-neutral-400'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
              clip-rule='evenodd'
            ></path>
          </svg>{" "}
          <span>Search</span>{" "}
          <span className='ml-auto inline-block'>Ctrl + K</span>
        </button>{" "}
        <button
          className='rounded bg-white/10 px-3 py-2 text-sm font-semibold  shadow-none  ring-0 ring-inset hover:bg-white/20 disabled:hover:bg-white/10 disabled:cursor-not-allowed text-neutral-200 hover:text-white whitespace-nowrap flex items-center'
          title=''
        >
          <svg
            className='-ml-0.5 mr-1.5 h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path d='M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z'></path>
          </svg>{" "}
          New
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
