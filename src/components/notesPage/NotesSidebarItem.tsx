import { cn } from "@/lib/utils";

const NotesSidebarItem = ({ selected }: { selected?: boolean }) => {
  return (
    <button
      type='button'
      className={cn(
        "p-5 bg-transparent hover:bg-card transition duration-200 border border-transparent  rounded-sm max-h-[136px] min-h-[136px]  ",
        selected && "bg-card border border-brand"
      )}
    >
      <div className='flex gap-2 flex-col items-start'>
        <div className='flex flex-col items-start gap-1'>
          <h4 className='text-sm font-medium text-text'>
            Daily Journal - 3/17/2025
          </h4>
          <div className=' text-text opacity-70 text-left text-[13px] max-w-full line-clamp-2 overflow-hidden text-ellipsis'>
            <span>
              ☀️ AM Fill this section first thing in the morning to set yourself
              up for success! 🎯 Goals What are the top things you want to
              achieve today? Example ... 💚 Fe...
            </span>
          </div>
        </div>
        <span className='text-text opacity-70 text-xs mt-2'>1 hour ago</span>
      </div>
    </button>
  );
};

export default NotesSidebarItem;
