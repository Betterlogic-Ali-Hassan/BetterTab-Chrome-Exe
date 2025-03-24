import ActionBtn from "./ActionBtn";

const ActionsBtns = () => {
  return (
    <div className='w-full flex items-center justify-between my-4 flex-wrap gap-4 '>
      <p className='text-lg font-bold text-text'>
        Wednesday, 2025/03/05 09:00 PM
      </p>
      <div className='flex items-center gap-4 flex-wrap'>
        <ActionBtn
          text=' Export CSV'
          className='bg-export-bg text-export-text'
        />
        <ActionBtn
          text=' Export HTML'
          className='bg-export-bg text-export-text'
        />
        <ActionBtn
          text=' Delete Entire Date'
          className='bg-delete-bg text-delete-text'
        />
      </div>
    </div>
  );
};

export default ActionsBtns;
