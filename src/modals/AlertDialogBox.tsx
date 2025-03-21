import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";
import React from "react";
import WarningIcon from "../components/svgs/WarningIcon";
import Bin from "../components/svgs/Bin";
import { AlertDialogDescription } from "@radix-ui/react-alert-dialog";
import { DialogClose } from "@/components/ui/dialog";

interface Props {
  className?: string;
  allowText?: boolean;
  disabled?: boolean;
  trigger?: React.ReactNode;
  onClick?: () => void;
}
const AlertDialogBox = ({
  className,
  allowText,
  disabled,
  trigger,
  onClick,
}: Props) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={cn(
          "px-4 py-2 text-sm text-foreground  hover:text-text",
          className
        )}
        disabled={disabled}
      >
        {trigger ? (
          trigger
        ) : (
          <>
            <Bin />
            {allowText && "Delete"}
          </>
        )}
      </AlertDialogTrigger>
      <AlertDialogContent className='max-w-lg border-none transform overflow-hidden rounded-md bg-card  px-4 pb-4 pt-5 text-left shadow-xl dark:shadow-black/90 transition-all sm:my-8 w-full sm:p-6'>
        <AlertDialogHeader>
          <AlertDialogTitle className='sm:flex sm:items-start'>
            <WarningIcon />
            <div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
              <h3
                className='text-base font-semibold leading-6 text-text'
                id='modal-title'
              >
                Delete Bookmark
              </h3>{" "}
              <div className='mt-2'>
                <p className='text-sm text-foreground '>
                  Are you sure you want to delete this bookmark?
                </p>
              </div>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='btn secondary sm:mt-0 sm:w-auto mt-3 inline-flex w-full justify-center  border-transparent text-text  px-3 py-2 h-[36px] bg-card  hover:bg-hover rounded'>
            Cancel
          </AlertDialogCancel>
          <DialogClose
            className='inline-flex w-full justify-center gap-x-1.5 bg-error rounded  px-3 py-2 text-sm font-semibold !text-white shadow-sm bg-red-500 hover:opacity-80 sm:ml-3 sm:w-auto h-[36px] border-transparent'
            onClick={onClick}
          >
            <Bin />
            Delete
          </DialogClose>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogBox;
