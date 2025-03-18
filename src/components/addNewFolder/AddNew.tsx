import SelectFolder from "./SelectFolder";

const AddNew = () => {
  return (
    <div className=' flex items-center justify-center  '>
      <div className=' rounded-md bg-card  w-full relative'>
        <h2 className=' text-text font-semibold text-lg pb-2'>
          Add Folder to Bookmarks bar
        </h2>
        <div className=' flex flex-col mt-4'>
          <label
            htmlFor='name'
            className='text-text font-semibold text-sm mb-4'
          >
            Name
          </label>
          <input
            type='text'
            id='name'
            name='title'
            required
            placeholder='Enter folder name'
            className='flex h-12 w-full rounded border bg-transparent px-3 py-3 text-base transition-colors focus-visible:outline-none   md:text-sm border-border  text-text'
          />
        </div>
        <label
          htmlFor='name'
          className='text-text font-semibold text-sm mb-4 mt-6 block'
        >
          Parent Folder
        </label>
        <SelectFolder />
      </div>
    </div>
  );
};

export default AddNew;
