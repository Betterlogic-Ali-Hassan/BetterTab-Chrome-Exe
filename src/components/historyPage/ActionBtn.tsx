const ActionBtn = ({ text }: { text: string }) => {
  return (
    <button className='border-border  rounded-[20px] border-dotted border-2 bg-card max-sm:w-full  hover:bg-hover px-[18px] py-2 font-semibold text-[10px] '>
      {text}
    </button>
  );
};

export default ActionBtn;
