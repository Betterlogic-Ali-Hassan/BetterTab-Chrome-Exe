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
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  allowText?: boolean;
  disabled?: boolean;
}
const AlertDialogBox = ({ className, allowText, disabled }: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={cn(
          "px-4 py-2 text-sm text-neutral-400 hover:text-white",
          className
        )}
        disabled={disabled}
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
            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
          ></path>
        </svg>
        {allowText && "Delete"}
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-lg border-none transform overflow-hidden rounded-md bg-neutral-800 px-4 pb-4 pt-5 text-left shadow-black/90 transition-all sm:my-8 w-full sm:p-6'>
        <AlertDialogHeader>
          <AlertDialogTitle className='sm:flex sm:items-start'>
            <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 sm:mx-0 sm:h-10 sm:w-10'>
              <svg
                className='h-6 w-6 text-red-300'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                ></path>
              </svg>
            </div>
            <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
              <h3
                className='text-base font-semibold leading-6 text-white'
                id='modal-title'
              >
                Delete Bookmark
              </h3>{" "}
              <div className='mt-2'>
                <p className='text-sm text-neutral-400'>
                  Are you sure you want to delete this bookmark?
                </p>
              </div>
            </div>
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className='btn secondary sm:mt-0 sm:w-auto mt-3 inline-flex w-full justify-center bg-[#ffffff1a] border-transparent text-white hover:bg-[#fff3] hover:text-white px-3 py-2 h-[36px]'>
            Cancel
          </AlertDialogAction>
          <AlertDialogCancel className='inline-flex w-full justify-center gap-x-1.5 rounded bg-red-500 px-3 py-2 text-sm font-semibold !text-white shadow-sm hover:bg-red-400 sm:ml-3 sm:w-auto h-[36px] border-transparent'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
              ></path>
            </svg>
            Delete
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogBox;
