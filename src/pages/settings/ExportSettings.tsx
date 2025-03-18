const ExportSettings = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <h2 className='text-xl font-semibold mb-6'>Export Bookmarks</h2>
      <p className='mb-6 text-text'>
        Export your bookmarks as an HTML file that can be imported into other
        apps and browsers.
      </p>
      <div className='mb-5'>
        <button
          className='btn secondary flex items-center gap-2 rounded disabled:cursor-not-allowed disabled:opacity-50 '
          disabled
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-5 h-5 text-neutral-400'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
            ></path>
          </svg>
          Export Bookmarks (0)
        </button>
        <p className='mt-2 text-foreground'>No bookmarks to export.</p>
      </div>
    </div>
  );
};

export default ExportSettings;
