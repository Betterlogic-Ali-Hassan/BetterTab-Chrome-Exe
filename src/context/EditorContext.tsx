"use client";

import type React from "react";

import {
  createContext,
  type RefObject,
  useContext,
  useRef,
  useState,
} from "react";
import { useEditor, type Editor } from "@tiptap/react";
import { editorExtensions } from "@/components/textEditor/EditorExtensions";

type Notes = {
  id: number;
  title: string;
  content: string;
  updatedAt: string;
  des: string;
}[];

type EditorContextProps = {
  editor: Editor;
  linkUrl: string;
  setLinkUrl: (url: string) => void;
  imageUrl: string;
  setImageUrl: (url: string) => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
  notes: Notes;
  selectedNoteId: number;
  addNewNote: () => void;
  deleteNote: (id: number) => void;
  selectNote: (id: number) => void;
};

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Untitled",
      des: "",
      content: "<h1 >Untitled</h1><p>Start writing...</p>",
      updatedAt: new Date().toISOString(),
    },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedNoteId, setSelectedNoteId] = useState(1);
  const editor = useEditor({
    extensions: editorExtensions,
    content: notes.find((note) => note.id === selectedNoteId)?.content || "",
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
      const jsonContent = editor.getJSON().content || [];

      let newTitle =
        notes.find((note) => note.id === selectedNoteId)?.title || "Untitled";
      let newDescription = "";
      let firstHeadingFound = false;

      jsonContent.forEach((block) => {
        if (block.type === "heading" && !firstHeadingFound) {
          newTitle = block.content?.[0]?.text || "Untitled";
          firstHeadingFound = true;
        } else if (block.content) {
          newDescription +=
            block.content.map((c) => c.text || "").join(" ") + " ";
        }
      });

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === selectedNoteId
            ? {
                ...note,
                title: newTitle,
                des: newDescription.trim(),
                content: htmlContent,
                updatedAt: new Date().toISOString(),
              }
            : note
        )
      );
    },
  });

  const addNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled",
      des: "",
      content: "<h1>Untitled</h1><p>Start writing...</p>",
      updatedAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
    setSelectedNoteId(newNote.id);
    editor?.commands.setContent(newNote.content);
  };

  const deleteNote = (id: number) => {
    if (notes.length === 1) return;

    const noteIndex = notes.findIndex((note) => note.id === id);

    const updatedNotes = notes.filter((note) => note.id !== id);

    if (selectedNoteId === id) {
      let newSelectedIndex;
      if (noteIndex > 0) {
        newSelectedIndex = noteIndex - 1;
      } else {
        newSelectedIndex = 0;
      }

      const newSelectedId = updatedNotes[newSelectedIndex].id;
      setSelectedNoteId(newSelectedId);
      editor?.commands.setContent(updatedNotes[newSelectedIndex].content);
    }

    setNotes(updatedNotes);
  };

  const selectNote = (id: number) => {
    setSelectedNoteId(id);
    const selectedNote = notes.find((note) => note.id === id);
    if (selectedNote) {
      editor?.commands.setContent(selectedNote.content);
    }
  };

  if (!editor) return null;

  return (
    <EditorContext.Provider
      value={{
        linkUrl,
        setLinkUrl,
        notes,
        imageUrl,
        setImageUrl,
        selectedNoteId,
        fileInputRef,
        editor,
        addNewNote,
        deleteNote,
        selectNote,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error(
      "useEditorContext must be used within a EditorContextProvider"
    );
  }
  return context;
};
