"use client";
import type { Card } from "@/types/TabCardType";

import DeleteEntry from "../DeleteEntry";
import { copyToClipboard } from "@/lib/handle-copy";
import { toast } from "react-toastify";
interface DownloadCardProps {
  data: Card;
}

const DownloadCard = ({ data }: DownloadCardProps) => {
  const { title, icon, path, id } = data;
  const handleCopy = () => {
    copyToClipboard(
      path ?? "",
      () => toast.success("URL copied to clipboard!"),
      () => toast.error("URL is not copied")
    );
  };
  return (
    <div className='p-6 border-border border group rounded-lg bg-card flex gap-5 mb-4 relative cursor-pointer'>
      <div className='h-[32px] w-[32px]'>
        <img src={icon} alt={title} className='h-[32px] w-[32px] dark:invert' />
      </div>
      <div className='grow flex items-center justify-between'>
        <div>
          <h3 className='font-semibold text-text'>{title}</h3>
          <a
            href={path}
            target='_blank'
            rel='noopener noreferrer'
            className='text-sm hover:underline text-brand hover:text-brand-hover'
            onClick={(e) => e.stopPropagation()}
          >
            {path}
          </a>
        </div>
        <div className='flex items-center gap-2'>
          <button className='btn rounded mt-4' onClick={handleCopy}>
            Copy link
          </button>
          <button className='btn rounded mt-4'>Show folder</button>
        </div>
      </div>
      <DeleteEntry
        id={id}
        text='Download Successfully Deleted'
        className='absolute top-1.5 right-2  transition duration-200'
      />
    </div>
  );
};

export default DownloadCard;
