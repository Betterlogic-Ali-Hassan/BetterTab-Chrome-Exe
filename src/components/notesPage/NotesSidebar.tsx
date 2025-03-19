import { useState } from "react";

import NotesSidebarHeader from "./NotesSidebarHeader";
import NotesSidebarItem from "./NotesSidebarItem";
import { cn } from "@/lib/utils";
import { notes } from "@/constant/Notes";

const NotesSidebar = () => {
  const [cardView, setCardView] = useState(false);
  const [selectedNoteId, setSelectedNoteId] = useState<number | string | null>(
    1
  );

  const handleNoteSelect = (id: number | string) => {
    setSelectedNoteId(id);
  };
  return (
    <div className='w-[358px] min-w-[280px] max-w-[358px]  h-screen bg-transparent ml-[64px] '>
      <NotesSidebarHeader setCardView={setCardView} />

      <div
        className={cn(
          "flex flex-col  py-1 px-4 gap-2",
          cardView && "grid grid-cols-2"
        )}
      >
        {notes.map((note) => (
          <NotesSidebarItem
            cardView={cardView}
            key={note.id}
            id={note.id}
            title={note.title}
            des={note.content}
            timestamp={note.timestamp}
            selected={selectedNoteId === note.id}
            onSelect={handleNoteSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default NotesSidebar;
