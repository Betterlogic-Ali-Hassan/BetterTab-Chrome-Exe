import { categoriesData } from "@/constant/categoriesData";

const TopNav = () => {
  return (
    <div className='lg:h-[3.25rem]'>
      <div className='relative w-full px-2 lg:px-0 py-2 border-b lg:border-none border-neutral-800 bg-neutral-900 lg:bg-black'>
        <div className='flex overflow-hidden items-center'>
          <div className='flex overflow-x-auto no-scrollbar'>
            <button
              className='focus:outline-none focus-visible:ring-1 ring-inset ring-neutral-300 rounded h-9 text-neutral-300 hover:text-white inline-flex items-center text-sm font-semibold pr-2 mr-2'
              title='Clear filters'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M15.75 19.5 8.25 12l7.5-7.5'
                ></path>
              </svg>{" "}
              <span>All</span>
            </button>
            {categoriesData.slice(6, 10).map((category, i) => (
              <button
                className='mr-2 focus:outline-none ring-neutral-300 focus-visible:ring-1 ring-inset rounded h-9 ring-0 flex-none px-3 py-2 text-sm font-normal inline-block whitespace-nowrap truncate max-w-36  text-neutral-300 hover:text-white bg-transparent'
                key={i}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
