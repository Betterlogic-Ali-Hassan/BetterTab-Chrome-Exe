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
  createdAt: string;
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
  setNotes: (notes: Notes) => void;
};

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const currentTime = new Date().toISOString();
  const DEFAULT_TITLE = "Untitled";

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: DEFAULT_TITLE,
      des: "",
      content: `<h1>${DEFAULT_TITLE}</h1><p>Start writing...</p>`,
      updatedAt: currentTime,
      createdAt: currentTime,
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

      // Get the current note's title or use default
      const currentNote = notes.find((note) => note.id === selectedNoteId);
      let newTitle = currentNote?.title || DEFAULT_TITLE;
      let newDescription = "";
      let firstHeadingFound = false;

      // Extract title from first heading if it exists
      jsonContent.forEach((block) => {
        if (block.type === "heading" && !firstHeadingFound) {
          // Only update title if the heading has actual text content
          const headingText = block.content?.[0]?.text?.trim();
          if (headingText) {
            newTitle = headingText;
            firstHeadingFound = true;
          }
        } else if (block.content) {
          newDescription +=
            block.content.map((c) => c.text || "").join(" ") + " ";
        }
      });

      // Ensure title is never empty
      if (!newTitle || newTitle.trim() === "") {
        newTitle = DEFAULT_TITLE;
      }

      // If no heading is found in the content, ensure there's a heading at the top
      if (!firstHeadingFound) {
        // Check if the first block is a paragraph that might have been a heading
        const firstBlock = jsonContent[0];
        if (firstBlock && firstBlock.type === "paragraph") {
          const paragraphText = firstBlock.content?.[0]?.text?.trim();
          if (paragraphText) {
            newTitle = paragraphText;

            // Convert the paragraph back to a heading in the editor
            setTimeout(() => {
              const { from, to } = editor.state.selection;
              editor
                .chain()
                .focus()
                .setNodeSelection(0)
                .setNode("heading", { level: 1 })
                .run();
              // Fix the setTextSelection command to use an object with from and to properties
              editor.commands.setTextSelection({ from, to });
            }, 0);
          }
        }
      }

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
    const currentTime = new Date().toISOString();
    const newNote = {
      id: Date.now(),
      title: DEFAULT_TITLE,
      des: "",
      content: `<h1>${DEFAULT_TITLE}</h1><p>Start writing...</p>`,
      updatedAt: currentTime,
      createdAt: currentTime,
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
        setNotes,
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
