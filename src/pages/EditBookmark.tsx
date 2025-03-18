"use client";
import PasteLinkInput from "@/components/addNewCard/PasteLinkInput";
import TagBoxContent from "@/components/addNewCard/TagBoxContent";
import TextBoxInputs from "@/components/addNewCard/TextBoxInputs";
import EditActionBtns from "@/components/EditActionBtns";
import { X, Edit } from "lucide-react";
import { DialogClose } from "@/components/ui/dialog";
import { useBookmarks } from "@/context/BookmarkContext";

import type { Card } from "@/types/TabCardType";
import { toast } from "react-toastify";
import { useFormContext } from "@/context/from-Context";

interface EditBookmarkProps {
  activeTabData?: Card;
}

const EditBookmark = ({ activeTabData }: EditBookmarkProps) => {
  const { resetForm, setIsLoading, formData } = useFormContext();
  const { updateCard } = useBookmarks();

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
    <div className='flex items-center justify-center h-screen bg-black/70'>
      <div className='w-full'>
        <div className='flex items-center justify-between'>
          <h2 className='px-4 py-6 sm:p-8 text-xl font-semibold leading-7 text-text flex items-center gap-3 text-white'>
            <Edit className='h-5 w-5' />
            Edit Bookmark
          </h2>
        </div>

        <div className='bg-white dark:bg-neutral-900 shadow-sm dark:bg-shadow-none ring-1 ring-neutral-900/5 dark:ring-0 sm:rounded-lg dark:border dark:border-neutral-800'>
          <DialogClose className='bg-card p-3 rounded-full text-text w-full flex justify-end opacity-80 hover:opacity-100 '>
            <X className='h-6 w-6' />
          </DialogClose>
          <PasteLinkInput
            actionBtns
            className='sm:px-8 sm:pb-0 pt-4'
            notAllowTitle
          />
          <TextBoxInputs
            actionBtns
            className='sm:px-8 sm:py-0 sm:pt-2'
            notAllowTitle
          />
          <TagBoxContent
            actionBtns
            className='sm:px-8 sm:pt-2'
            tag={activeTabData?.tags}
          />
          <EditActionBtns savBtnAction={handleSaveBtn} />
        </div>
      </div>
    </div>
  );
};

export default EditBookmark;
