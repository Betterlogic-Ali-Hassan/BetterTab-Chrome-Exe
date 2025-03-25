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
  favorite?: boolean;
}

const ExtensionListViewCard = ({
  data,
  setFavoriteExe,
  favoriteExe,
  favorite,
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
      className={cn(
        "p-4 rounded-xl shadow-sm  border-border border group  bg-card flex gap-4 mb-4 relative cursor-pointer",
        isFavorite && favorite && isFavorite && favorite && "bg-[#85bbfd3a]  "
      )}
      onClick={handleToggle}
    >
      <div className='h-[48px] w-[48px]'>
        <img
          src={icon || "/placeholder.svg"}
          alt={title}
          className='rounded-lg shadow-sm'
        />
      </div>
      <div className='grow'>
        <div className='flex items-center justify-between'>
          <h3 className='font-semibold text-text'>{title}</h3>
          <div className='flex items-center gap-6'>
            <Switch />
            <span
              className={cn(
                "cursor-pointer opacity-0 group-hover:opacity-100 text-text ",
                isFavorite && "block"
              )}
              onClick={addFavoriteExe}
            >
              {isFavorite ? <BsPinFill size={20} /> : <BsPin size={20} />}
            </span>
          </div>
        </div>
        <a
          href={path}
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm hover:underline text-brand hover:text-brand-hover'
          onClick={(e) => e.stopPropagation()}
        >
          {path}
        </a>
        <p className='mt-3 text-sm'>{des}</p>
        <div className='flex items-center justify-between mt-2'>
          <div className='flex items-center gap-2'>
            {tags.map((tag) => (
              <button
                className=' inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white text-brand border border-brand/90'
                key={tag.id}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtensionListViewCard;
