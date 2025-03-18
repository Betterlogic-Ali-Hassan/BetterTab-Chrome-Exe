import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { categoriesData } from "@/constant/categoriesData";
import { cn } from "@/lib/utils";
import { useState } from "react";

const TagAlertBox = ({ disabled }: { disabled?: boolean }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [notificationText, setNotificationText] = useState("");
  const [showNotificationText, setShowNotificationText] = useState(false);
  const toggleTags = (tag: string) => {
    setSelectedTags((prev) => {
      const isTagSelected = prev.includes(tag);

      setNotificationText(
        isTagSelected ? `Removed: Tag "${tag}"` : `Added: Tag "${tag}"`
      );
      setShowNotificationText(true);

      setTimeout(() => {
        setShowNotificationText(false);
      }, 1000);

      return isTagSelected ? prev.filter((t) => t !== tag) : [...prev, tag];
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className='hover:bg-white/5 w-full py-3 px-4 text-left whitespace-nowrap flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50'
        disabled={disabled}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          className='h-5 w-5 text-neutral-400 shrink-0'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
          ></path>
        </svg>
        Edit tags
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-3xl  transform overflow-hidden rounded-md bg-neutral-800 border-transparent px-4 pb-4 pt-5 text-left shadow-black/90 transition-all sm:my-8 w-full sm:p-6'>
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className='flex gap-3 items-center overflow-hidden h-5'>
              <label
                htmlFor='tags'
                className='text-white block text-sm font-medium'
              >
                Tags
              </label>
              <div
                className={cn(
                  "ml-auto text-sm text-neutral-500 dark:text-neutral-200 flex items-center gap-1.5 opacity-100 transition-all duration-300 translate-y-[0%] whitespace-nowrap text-ellipsis",
                  !showNotificationText && "opacity-0 translate-y-[10%]"
                )}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='w-5 h-5 text-green-400 dark:text-green-300'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  ></path>
                </svg>
                {notificationText}
              </div>
            </div>
            <div className='mt-2 flex rounded mb-6'>
              <input
                type='text'
                name='tags'
                id='multi-tags-editor-input'
                className='control block w-full rounded-none rounded-l bg-[#ffffff0d] focus:ring-[#60a5fa] focus:ring-2 text-sm text-white font-medium border-0  input-shadow py-1.5 px-3 outline-none h-[36px] '
                placeholder='Search or add new tag'
              />
              <button
                type='button'
                className='rounded-r bg-[#ffffff0d] flex items-center text-sm text-white input-shadow hover:bg-[#fff3]  font-medium border-0 outline-none ml-[1px] h-[36px] py-2 px-3 gap-1.5'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  className='h-5 w-5 text-neutral-400'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M12 4.5v15m7.5-7.5h-15'
                  ></path>
                </svg>
                Add
              </button>
            </div>
            <div className='flex flex-wrap justify-center gap-1.5 overflow-hidden py-1'>
              {categoriesData.slice(0, 5).map((category, id) => (
                <button
                  type='button'
                  key={id}
                  className={cn(
                    "flex-none cursor-pointer inline-block whitespace-nowrap truncate hover:bg-[#fff3] max-w-xs tag selected text-white bg-[#ffffff1a] py-2 px-3 rounded-[0.25rem] text-sm font-semibold ",
                    selectedTags.includes(category.name) &&
                      "bg-[#60a5fa] hover:bg-[#93c5fd]"
                  )}
                  onClick={() => toggleTags(category.name)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter className='flex items-center gap-3 mt-6 border-t border-t-neutral-700 pt-4'>
          <div className='hidden sm:flex gap-1.5 items-center text-neutral-300 text-xs'>
            <span className='rounded-full bg-blue-400 h-4 w-4 border border-none'></span>
            <span>assigned</span>
          </div>
          <div className='hidden sm:flex gap-1.5 items-center text-neutral-300 text-xs'>
            <span className='rounded-full bg-white/10 h-4 w-4 border border-none'></span>
            <span>not assigned</span>
          </div>
          <div className='flex gap-1.5 items-center text-neutral-300 text-xs'>
            <span className='rounded-full partially-assigned-bg h-4 w-4 border border-none'></span>
            <span>partially assigned</span>
          </div>
          <div className='grow'></div>
          <div className='gap-3 flex'>
            <AlertDialogAction className="sm:mt-0 sm:w-auto mt-3 inline-flex w-full justify-center bg-[#ffffff1a] border-transparent text-white hover:bg-[#fff3] hover:text-white px-3 py-2 h-[36px]'">
              Cancel
            </AlertDialogAction>
            <AlertDialogCancel className="sm:mt-0 sm:w-auto mt-3 inline-flex w-full justify-center bg-[#60a5fa] border-transparent text-white hover:bg-[#93c5fd] hover:text-white px-3 py-2 h-[36px]'">
              Save
            </AlertDialogCancel>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default TagAlertBox;
