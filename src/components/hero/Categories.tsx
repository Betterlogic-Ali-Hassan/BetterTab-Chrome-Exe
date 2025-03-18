import { categoriesData } from "@/constant/categoriesData";
const Categories = () => {
  return (
    <div className='hidden lg:block w-[260px] justify-self-end overflow-x-hidden overflow-y-auto no-scrollbar py-2'>
      <div className='flex flex-col gap-1.5 lg:gap-0 lg:items-end lg:pr-2'>
        {categoriesData.map((category, i) => (
          <div key={i}>
            <button
              type='button'
              className='text-neutral-300 hover:text-white group focus:outline-none max-w-[260px] cursor-pointer flex gap-0.5 text-sm items-center'
            >
              <span className='group-focus-visible:ring-1 ring-0 rounded ring-inset ring-neutral-300 leading-1 whitespace-nowrap truncate grow text-right p-2'>
                {category.name}
              </span>
              <span className='w-8 text-left shrink whitespace-nowrap truncate text-neutral-600'>
                {category.count}
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
