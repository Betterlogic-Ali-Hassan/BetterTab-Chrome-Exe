import ExtensionsBtns from "@/components/settingPage/tipsPage/ExtensionsBtns";

const Tips = () => {
  return (
    <div className='px-4 py-6 sm:p-8'>
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-6'>Browser Extension</h2>
        <p className='hidden md:block mb-4'>
          Install the browser extension to quickly save bookmarks from any
          website.
        </p>
        <p className='block md:hidden'>
          Install the browser extension on your desktop to quickly save
          bookmarks from any website.
        </p>
        <div className='md:hidden'>
          <a
            className='text-brand  whitespace-nowrap flex gap-1.5 items-center'
            href='/docs/getting-started/#installing-the-browser-extension'
            title='Visit the documentation'
          >
            Learn more
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </a>
        </div>
        <ExtensionsBtns />

        <h2 className='text-xl font-semibold mb-6 mt-8'>Mobile App</h2>
        <p>
          Install the mobile app to save and access bookmarks from your phone.
        </p>
        <div className='flex gap-3 mt-3'>
          <a target='_blank' href='#'>
            <img
              src='https://bookmarkmanager.com/brand/Google/GetItOnGooglePlay.png'
              alt='Get It On Google Play'
              className='h-12 m-0'
            />
          </a>
        </div>
        <h2 className='text-xl font-semibold mb-6 mt-8'>Desktop App</h2>
        <p>
          Install the desktop app for quick access to your bookmark manager.
          <a
            className='text-brand  whitespace-nowrap flex gap-1.5 items-center'
            href='/docs/getting-started#installing-on-desktop'
            title='Visit the documentation'
          >
            Learn more
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </a>
        </p>
        <h2 className='text-xl font-semibold mb-6 mt-8'>
          Documentation &amp; Support
        </h2>
        <p className='mb-4'>
          Visit the documentation to learn more.
          <a
            className='text-brand  whitespace-nowrap flex gap-1.5 items-center'
            href='/docs'
            title='Visit the documentation'
          >
            Documentation
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </a>
        </p>
        <p>
          If you have any issues, feedback, or questions, please contact us at
          <a
            className='text-brand  ml-1'
            href='mailto:kevin@bookmarkmanager.com'
          >
            kevin@bookmarkmanager.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Tips;
