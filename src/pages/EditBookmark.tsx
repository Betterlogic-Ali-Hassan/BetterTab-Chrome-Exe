"use client";
import PasteLinkInput from "@/components/addNewCard/PasteLinkInput";
import TagBoxContent from "@/components/addNewCard/TagBoxContent";
import TextBoxInputs from "@/components/addNewCard/TextBoxInputs";
import EditActionBtns from "@/components/EditActionBtns";
import { ChevronDown, Edit } from "lucide-react";

import { useBookmarks } from "@/context/BookmarkContext";

import type { Card } from "@/types/TabCardType";
import { toast } from "react-toastify";
import { useFormContext } from "@/context/from-Context";
import { useFolderSelect } from "@/hooks/use-folder-select";
import { PopoverContent } from "@/components/addNewFolder/PopoverContent";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface EditBookmarkProps {
  activeTabData?: Card;
}

const EditBookmark = ({ activeTabData }: EditBookmarkProps) => {
  const { resetForm, setIsLoading, formData } = useFormContext();
  const { updateCard } = useBookmarks();
  const { selected } = useFolderSelect();
  const [showFolderSelect, setShowFolderSelect] = useState(false);
  const handleSelectFolder = () => {
    setShowFolderSelect(!showFolderSelect);
  };
  const handleSaveBtn = () => {
    if (!activeTabData) return;

    setIsLoading(true);

    const updatedCard: Card = {
      ...activeTabData,
      title: formData.title || activeTabData.title,
      path: formData.url || activeTabData.path,
      des: formData.description || activeTabData.des || "",
      tags:
        formData.tags.length > 0
          ? formData.tags.map((tag) => ({
              id: tag.toLowerCase(),
              name: tag,
            }))
          : activeTabData.tags,
      icon:
        formData.url !== activeTabData.path
          ? `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${formData.url}/&size=32`
          : activeTabData.icon,
    };

    updateCard(updatedCard);
    toast.success("Bookmark Updated");

    setTimeout(() => {
      setIsLoading(false);
      resetForm();
    }, 2000);
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <h2 className='px-4 py-6 sm:p-8  sm:pb-4 text-xl font-semibold leading-7  flex items-center gap-3 text-text'>
          <Edit className='h-5 w-5' />
          Edit Bookmark
        </h2>
      </div>
      <PasteLinkInput
        actionBtns
        className='sm:px-8 sm:pb-0 sm:pt-2 '
        notAllowTitle
      />
      <TextBoxInputs
        actionBtns
        className='sm:px-8 sm:py-0 sm:pt-2'
        notAllowTitle
      />
      <div
        onClick={handleSelectFolder}
        className='w-full  outline-none focus:outline-none ring-0 flex h-12 px-4 text-sm items-center justify-between rounded-sm border border-border bg-transparent text-text mx-8 bg-white max-w-[708px]  placeholder:text-foreground disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 rounded-b-none transition duration-200'
      >
        {selected}
        <span>
          <ChevronDown size={20} />
        </span>
      </div>
      <div
        className={cn(
          "transition-all duration-300 ease-in-out overflow-hidden !mt-0",
          showFolderSelect ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <PopoverContent className='bg-white ml-8 max-w-[708px] rounded-t-none -mt-1 pt-1 ' />
      </div>

      <div className='h-4'></div>
      <TagBoxContent
        actionBtns
        className='sm:px-8 sm:pt-2'
        tag={activeTabData?.tags}
      />
      <EditActionBtns savBtnAction={handleSaveBtn} />
    </>
  );
};

export default EditBookmark;
