import AlertDialogBox from "@/components/AlertDialogBox";

const ActionsBtns = () => {
  return (
    <div className='flex items-center justify-start'>
      <button
        className='px-4 py-2 text-sm text-neutral-400 hover:text-white'
        role='menuitem'
        title='Edit'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='h-6 w-6 lg:h-5 lg:w-5'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
          ></path>
        </svg>
      </button>
      <button
        className='px-4 py-2 text-sm text-neutral-400 hover:text-white'
        role='menuitem'
        title='Share'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='h-6 w-6 lg:h-5 lg:w-5'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z'
          ></path>
        </svg>
      </button>
      <button
        className='px-4 py-2 text-sm text-neutral-400 hover:text-white'
        role='menuitem'
        title='Copy URL'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='h-6 w-6 lg:h-5 lg:w-5'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
          ></path>
        </svg>
      </button>
      <AlertDialogBox />
    </div>
  );
};

export default ActionsBtns;
