"use client";
import PasteLinkInput from "@/components/addNewCard/PasteLinkInput";
import TagBoxContent from "@/components/addNewCard/TagBoxContent";
import TextBoxInputs from "@/components/addNewCard/TextBoxInputs";
import EditActionBtns from "@/components/EditActionBtns";
import { Edit } from "lucide-react";
import SelectFolder from "@/components/addNewFolder/SelectFolder";
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
      <SelectFolder
        triggerClassName='!font-normal w-full rounded-none rounded bg-input focus:ring-brand focus:ring-2 text-sm text-text font-medium border-0 input-shadow py-1.5 px-3 outline-none   '
        className='mx-8 '
        popoverClassName='max-w-[708px] bg-white  '
      />
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
