"use client";

import type React from "react";

import type { Card } from "@/types/TabCardType";
import { Switch } from "../ui/switch";
import { BsPin, BsPinFill } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { useBookmarkItem } from "@/hooks/use-bookmark-item";

interface ExtensionCardProps {
  data: Card;
  setFavoriteExe: (callback: (prev: Card[]) => Card[]) => void;
  favoriteExe: Card[];
}

const ExtensionListViewCard = ({
  data,
  setFavoriteExe,
  favoriteExe,
}: ExtensionCardProps) => {
  const { handleToggle, title, icon, path, tags, des } = useBookmarkItem(data);

  const isFavorite = favoriteExe.some((card) => card.id === data.id);

  const addFavoriteExe = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteExe((prev) =>
      isFavorite ? prev.filter((card) => card.id !== data.id) : [...prev, data]
    );
  };

  return (
    <div
      className='p-6 border-border border group rounded-lg bg-card flex gap-10 mb-4 relative cursor-pointer'
      onClick={handleToggle}
    >
      <div className='h-[38px] w-[38px]'>
        <img src={icon || "/placeholder.svg"} alt={title} />
      </div>
      <div className='grow'>
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
        <p className='mt-6 text-[15px]'>{des}</p>
        <div className='flex items-center justify-between mt-6'>
          <div className='flex items-center gap-4'>
            {tags.map((tag) => (
              <button className='btn rounded' key={tag.id}>
                {tag.name}
              </button>
            ))}
          </div>
          <Switch />
        </div>
      </div>
      <div>
        <span
          className={cn(
            "cursor-pointer hidden group-hover:block text-text absolute top-6 right-6",
            isFavorite && "block"
          )}
          onClick={addFavoriteExe}
        >
          {isFavorite ? <BsPinFill size={20} /> : <BsPin size={20} />}
        </span>
      </div>
    </div>
  );
};

export default ExtensionListViewCard;
