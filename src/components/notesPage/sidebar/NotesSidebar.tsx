import { useState } from "react";

import NotesSidebarHeader from "./NotesSidebarHeader";
import NotesSidebarItem from "./NotesSidebarItem";
import { cn } from "@/lib/utils";

import { useEditorContext } from "@/context/EditorContext";

const NotesSidebar = () => {
  const { notes } = useEditorContext();
  const [cardView, setCardView] = useState(false);

  return (
    <div className='w-[358px] min-w-[280px] max-w-[358px]  h-screen bg-transparent ml-[64px] '>
      <NotesSidebarHeader setCardView={setCardView} />

      <div
        className={cn(
          "flex flex-col  py-1 px-4 gap-2 overflow-y-auto max-h-[calc(100vh-100px)] pb-6 pt-1 no-scrollbar",
          cardView && "grid grid-cols-2"
        )}
      >
        {notes.map((note) => (
          <NotesSidebarItem
            cardView={cardView}
            key={note.id}
            id={note.id}
            title={note.title}
            des={note.des}
            timestamp={note.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesSidebar;
