"use client";
import type React from "react";
import type { Card } from "@/types/TabCardType";
import { Switch } from "../ui/switch";
import { BsPin, BsPinFill } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { useState } from "react";
import MoreIconBtn from "../MoreIconBtn";
import { useBookmarkItem } from "@/hooks/use-bookmark-item";
import { toast } from "react-toastify";

interface ExtensionCardProps {
  data: Card;
  setFavoriteExe: (callback: (prev: Card[]) => Card[]) => void;
  favoriteExe: Card[];
}

const ExtensionCard = ({
  data,
  setFavoriteExe,
  favoriteExe,
}: ExtensionCardProps) => {
  const { handleToggle, title, icon } = useBookmarkItem(data);
  const [switchChecked, setSwitchChecked] = useState(false);
  const isFavorite = favoriteExe.some((card) => card.id === data.id);

  const addFavoriteExe = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFavoriteExe((prev) =>
      isFavorite ? prev.filter((card) => card.id !== data.id) : [...prev, data]
    );
    toast.success(
      isFavorite ? "Removed from Favorites!" : "Added to Favorites!"
    );
  };

  const handleSwitch = () => {
    setSwitchChecked(!switchChecked);
  };

  return (
    <div
      className='bg-card rounded-[24px] max-w-[284px] group p-6 flex flex-col relative items-start gap-6 cursor-pointer group'
      onClick={handleToggle}
    >
      <div className='flex justify-between w-full h-[60px]'>
        <img src={icon} alt={title} className='h-[50px] w-[50px]' />
        <div className='flex items-start gap-3'>
          <span
            className={cn(
              "cursor-pointer text-text hidden  group-hover:block mt-[3px] ",
              isFavorite && "block"
            )}
            onClick={addFavoriteExe}
          >
            {isFavorite ? <BsPinFill size={18} /> : <BsPin size={18} />}
          </span>
          <Switch checked={switchChecked} onCheckedChange={handleSwitch} />
          <MoreIconBtn className='!h-0 lg:px-0 ' />
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h2 className='font-semibold text-text'>{title}</h2>
        <p className='text-foreground'>
          A simple journaling app for capturing daily memories with text, photo,
          stickers and video.
        </p>
      </div>
    </div>
  );
};

export default ExtensionCard;
