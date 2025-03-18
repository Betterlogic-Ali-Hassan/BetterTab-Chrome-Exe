import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import { useTheme } from "./theme-provider";
const TextEditor = () => {
  const editorRef = useRef(null);
  const { theme } = useTheme();
  return (
    <Editor
      apiKey='ziq8wybho2zao8qc2jp3voxchhb0lb8owbvwmuvu2co4916f'
      onInit={(_evt, editor) => (editorRef.current = editor)}
      initialValue='<p>This is the initial content of the editor.</p>'
      init={{
        menubar: false,

        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],

        width: "100%",
        branding: false,
        statusbar: false,
        skin: theme === "dark" ? "oxide-dark" : "oxide",
        contextmenu: "link image inserttable table charmap emoticons",
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | " +
          "removeformat | help",
        content_style: `
          body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
            font-size: 16px; 
            ${theme === "dark" ? "background-color: #000; color: #f8f8f8;" : ""}
          }
        `,
      }}
    />
  );
};

export default TextEditor;
