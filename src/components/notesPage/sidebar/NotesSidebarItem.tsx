"use client";

import type React from "react";

import { useEditorContext } from "@/context/EditorContext";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Trash2 } from "lucide-react";

interface Props {
  id: number;
  title: string;
  des: string;
  timestamp: string;
  cardView: boolean;
}

const removeHTMLTags = (html: string) => {
  return html.replace(/<\/?[^>]+(>|$)/g, "");
};

const NotesSidebarItem = ({ title, des, id, timestamp, cardView }: Props) => {
  const { selectedNoteId, selectNote, deleteNote, notes } = useEditorContext();
  const selected = selectedNoteId === id;
  const handleClick = () => selectNote(id);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the button click
    deleteNote(id);
  };

  return (
    <button
      type='button'
      className={cn(
        "p-5 bg-card relative hover:bg-hover transition duration-200 group border border-border rounded-sm max-h-[150px] min-h-[136px] flex",
        selected && "bg-card border border-brand",
        cardView && "max-h-[280px] min-h-[260px] max-w-[164px]"
      )}
      onClick={handleClick}
    >
      <div className='flex gap-2 flex-col items-start'>
        <div className='flex flex-col items-start gap-1'>
          <h4 className='text-sm font-medium text-text text-start max-w-[284px] line-clamp-2 overflow-hidden text-ellipsis'>
            {removeHTMLTags(title || "Untitled")}
          </h4>
          <div
            className={cn(
              "text-text opacity-70 text-left text-[13px] max-w-[272px] h-[40px] line-clamp-2 overflow-hidden text-ellipsis",
              cardView && "line-clamp-[7] h-[176px] max-w-[125px] "
            )}
          >
            {des === "Start writing..." || des === ""
              ? "Add Description"
              : removeHTMLTags(des)}
          </div>
        </div>
        <span className='text-text opacity-70 text-xs mt-2'>
          {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
        </span>
      </div>
      {notes.length > 1 && (
        <span
          className='absolute top-3 right-3 hover:text-error opacity-0 group-hover:opacity-100 duration-200 transition'
          onClick={handleDelete}
        >
          <Trash2 size={18} />
        </span>
      )}
    </button>
  );
};

export default NotesSidebarItem;
