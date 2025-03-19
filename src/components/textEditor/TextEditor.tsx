"use client";

import type React from "react";

import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Heading from "@tiptap/extension-heading";
import { useState, useCallback, useRef } from "react";
import {
  Bold,
  Italic,
  UnderlineIcon,
  Strikethrough,
  List,
  ListOrdered,
  Quote,
  Code,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Heading1,
  Heading2,
  Heading3,
  ImageIcon,
  LinkIcon,
  TableIcon,
  Unlink,
  Palette,
  Upload,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import "./editor.styles.css";

export default function RichTextEditor() {
  const [linkUrl, setLinkUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Disable the built-in heading extension
        heading: false,
        paragraph: {
          HTMLAttributes: {
            class: "paragraph",
          },
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: true,
          HTMLAttributes: {
            class: "bullet-list",
          },
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: true,
          HTMLAttributes: {
            class: "ordered-list",
          },
        },
        listItem: {
          HTMLAttributes: {
            class: "list-item",
          },
        },
        blockquote: {
          HTMLAttributes: {
            class: "blockquote",
          },
        },
        codeBlock: {
          HTMLAttributes: {
            class: "code-block",
          },
        },
        code: {
          HTMLAttributes: {
            class: "code",
          },
        },
        horizontalRule: {
          HTMLAttributes: {
            class: "horizontal-rule",
          },
        },
      }),
      // Add a custom heading extension with proper class handling
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class: (attributes: { level: number }) => `h${attributes.level}`,
        },
      }),
      Underline.configure({
        HTMLAttributes: {
          class: "underline",
        },
      }),
      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: "link text-primary underline cursor-pointer",
        },
        validate: (href) =>
          /^https?:\/\//.test(href) ||
          href.startsWith("/") ||
          href.startsWith("#"),
      }),
      Image.configure({
        HTMLAttributes: {
          class: "image rounded-md max-w-full",
        },
        allowBase64: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: "rich-table",
        },
      }),
      TableRow.configure({
        HTMLAttributes: {
          class: "rich-table-row",
        },
      }),
      TableHeader.configure({
        HTMLAttributes: {
          class: "rich-table-header",
        },
      }),
      TableCell.configure({
        HTMLAttributes: {
          class: "rich-table-cell",
        },
      }),
      TextStyle.configure({
        HTMLAttributes: {
          class: "text-style",
        },
      }),
      Color,
    ],
    content: `
      <h1>Welcome to the Rich Text Editor!</h1>
      <p>Try formatting some text, adding lists, or inserting images.</p>
    `,
    onUpdate: () => {
      // This is optional - you can use it to save content as it changes
      // console.log(editor.getHTML());
    },
  });

  const setLink = useCallback(() => {
    if (!editor) return;

    if (linkUrl === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // Add https:// if it doesn't exist and it's not a relative URL
    const url =
      !linkUrl.startsWith("http") &&
      !linkUrl.startsWith("/") &&
      !linkUrl.startsWith("#")
        ? `https://${linkUrl}`
        : linkUrl;

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setLinkUrl("");
  }, [editor, linkUrl]);

  const addImage = useCallback(() => {
    if (!editor) return;

    if (imageUrl) {
      editor.chain().focus().setImage({ src: imageUrl }).run();
      setImageUrl("");
    }
  }, [editor, imageUrl]);

  const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!editor || !event.target.files || event.target.files.length === 0)
        return;

      const file = event.target.files[0];
      if (!file.type.startsWith("image/")) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") {
          editor.chain().focus().setImage({ src: e.target.result }).run();
        }
      };
      reader.readAsDataURL(file);

      // Reset the file input
      if (event.target) {
        event.target.value = "";
      }
    },
    [editor]
  );

  const triggerImageUpload = () => {
    fileInputRef.current?.click();
  };

  const addTable = useCallback(() => {
    if (!editor) return;

    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className='border border-border rounded-md w-full'>
      <div className='p-2 border-b bg-muted/40 sticky top-0 z-10'>
        <div className='flex flex-wrap gap-1 mb-2'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={cn(editor.isActive("bold") ? "bg-muted" : "")}
            title='Bold'
          >
            <Bold className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={cn(editor.isActive("italic") ? "bg-muted" : "")}
            title='Italic'
          >
            <Italic className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={cn(editor.isActive("underline") ? "bg-muted" : "")}
            title='Underline'
          >
            <UnderlineIcon className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={cn(editor.isActive("strike") ? "bg-muted" : "")}
            title='Strikethrough'
          >
            <Strikethrough className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='mx-1 h-6' />

          <Button
            variant='ghost'
            size='icon'
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={cn(
              editor.isActive("heading", { level: 1 }) ? "bg-muted" : ""
            )}
            title='Heading 1'
          >
            <Heading1 className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={cn(
              editor.isActive("heading", { level: 2 }) ? "bg-muted" : ""
            )}
            title='Heading 2'
          >
            <Heading2 className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={cn(
              editor.isActive("heading", { level: 3 }) ? "bg-muted" : ""
            )}
            title='Heading 3'
          >
            <Heading3 className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='mx-1 h-6' />

          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={cn(editor.isActive("bulletList") ? "bg-muted" : "")}
            title='Bullet List'
          >
            <List className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={cn(editor.isActive("orderedList") ? "bg-muted" : "")}
            title='Ordered List'
          >
            <ListOrdered className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={cn(editor.isActive("blockquote") ? "bg-muted" : "")}
            title='Blockquote'
          >
            <Quote className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={cn(editor.isActive("codeBlock") ? "bg-muted" : "")}
            title='Code Block'
          >
            <Code className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='mx-1 h-6' />

          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            className={cn(
              editor.isActive({ textAlign: "left" }) ? "bg-muted" : ""
            )}
            title='Align Left'
          >
            <AlignLeft className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={cn(
              editor.isActive({ textAlign: "center" }) ? "bg-muted" : ""
            )}
            title='Align Center'
          >
            <AlignCenter className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            className={cn(
              editor.isActive({ textAlign: "right" }) ? "bg-muted" : ""
            )}
            title='Align Right'
          >
            <AlignRight className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().setTextAlign("justify").run()}
            className={cn(
              editor.isActive({ textAlign: "justify" }) ? "bg-muted" : ""
            )}
            title='Justify'
          >
            <AlignJustify className='h-4 w-4' />
          </Button>

          <Separator orientation='vertical' className='mx-1 h-6' />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant='ghost'
                size='icon'
                className={cn(editor.isActive("link") ? "bg-muted" : "")}
                title='Add Link'
              >
                <LinkIcon className='h-4 w-4' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[22rem]'>
              <div className='grid gap-4'>
                <div className='space-y-2'>
                  <h4 className='font-medium leading-none'>Insert Link</h4>
                </div>
                <div className='grid gap-2'>
                  <div className='flex flex-col  gap-2'>
                    <label htmlFor='link-url'>URL</label>
                    <input
                      id='link-url'
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      placeholder='https://example.com'
                      className='col-span-2 input'
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          setLink();
                        }
                      }}
                    />
                  </div>
                  <div className='flex justify-between mt-3'>
                    <Button
                      variant='outline'
                      onClick={() =>
                        editor
                          .chain()
                          .focus()
                          .extendMarkRange("link")
                          .unsetLink()
                          .run()
                      }
                      disabled={!editor.isActive("link")}
                    >
                      <Unlink className='h-4 w-4 mr-2' />
                      Remove Link
                    </Button>
                    <Button
                      onClick={setLink}
                      className='bg-text text-card hover:opacity-90'
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant='ghost' size='icon' title='Insert Image'>
                <ImageIcon className='h-4 w-4' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[22rem]'>
              <div className='grid gap-4'>
                <div className='space-y-2'>
                  <h4 className='font-medium leading-none'>Insert Image</h4>
                </div>
                <div className='grid gap-2'>
                  <div className='flex flex-col gap-2'>
                    <label htmlFor='image-url'>Image URL</label>
                    <input
                      id='image-url'
                      value={imageUrl}
                      className='input'
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder='https://example.com/image.jpg'
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addImage();
                        }
                      }}
                    />
                  </div>
                  <div className='flex justify-between items-center mt-2'>
                    <Button
                      variant='outline'
                      onClick={triggerImageUpload}
                      className='flex items-center gap-2'
                    >
                      <Upload className='h-4 w-4' />
                      Upload from Computer
                    </Button>
                    <input
                      ref={fileInputRef}
                      type='file'
                      accept='image/*'
                      onChange={handleImageUpload}
                      className='hidden input'
                    />
                    <Button
                      onClick={addImage}
                      className='bg-text text-card hover:opacity-90'
                    >
                      Insert URL
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button
            variant='ghost'
            size='icon'
            onClick={addTable}
            title='Insert Table'
          >
            <TableIcon className='h-4 w-4' />
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant='ghost' size='icon' title='Text Color'>
                <Palette className='h-4 w-4' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-64'>
              <div className='grid gap-4'>
                <div className='space-y-2'>
                  <h4 className='font-medium leading-none'>Text Color</h4>
                  <div className='grid grid-cols-5 gap-2'>
                    {[
                      "#000000",
                      "#ef4444",
                      "#22c55e",
                      "#3b82f6",
                      "#a855f7",
                      "#ec4899",
                      "#f97316",
                      "#eab308",
                      "#14b8a6",
                      "#64748b",
                    ].map((color) => (
                      <button
                        key={color}
                        className='w-8 h-8 rounded-md border'
                        style={{ backgroundColor: color }}
                        onClick={() =>
                          editor.chain().focus().setColor(color).run()
                        }
                      />
                    ))}
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Separator orientation='vertical' className='mx-1 h-6' />

          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            title='Undo'
          >
            <Undo className='h-4 w-4' />
          </Button>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            title='Redo'
          >
            <Redo className='h-4 w-4' />
          </Button>
        </div>
      </div>

      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          shouldShow={({ from, to }) => {
            // Only show the bubble menu for selections that are not empty
            return from !== to;
          }}
        >
          <div className='flex items-center rounded-md border bg-background shadow-md'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(
                editor.isActive("bold") ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <Bold className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={cn(
                editor.isActive("italic") ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <Italic className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={cn(
                editor.isActive("underline") ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <UnderlineIcon className='h-4 w-4' />
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant='ghost'
                  size='sm'
                  className={cn(
                    editor.isActive("link") ? "bg-muted" : "",
                    "rounded-none"
                  )}
                >
                  <LinkIcon className='h-4 w-4' />
                </Button>
              </PopoverTrigger>
              <PopoverContent className='w-80'>
                <div className='grid gap-4'>
                  <div className='grid gap-2'>
                    <div className='grid grid-cols-3 items-center gap-4'>
                      <label htmlFor='bubble-link-url' className='text-right'>
                        URL
                      </label>
                      <input
                        id='bubble-link-url'
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                        placeholder='https://example.com'
                        className='col-span-2 input'
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            setLink();
                          }
                        }}
                      />
                    </div>
                    <div className='flex justify-between'>
                      <Button
                        variant='outline'
                        onClick={() =>
                          editor
                            .chain()
                            .focus()
                            .extendMarkRange("link")
                            .unsetLink()
                            .run()
                        }
                        disabled={!editor.isActive("link")}
                      >
                        <Unlink className='h-4 w-4 mr-2' />
                        Remove
                      </Button>
                      <Button onClick={setLink}>Apply</Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </BubbleMenu>
      )}

      {editor && (
        <FloatingMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          shouldShow={({ state }) => {
            // Show only when the selection is empty and at the start of a line
            const { selection } = state;
            const { empty, $anchor } = selection;
            return (
              empty &&
              $anchor.parent.type.name === "paragraph" &&
              $anchor.pos === $anchor.start()
            );
          }}
        >
          <div className='flex items-center rounded-md border bg-background shadow-md'>
            <Button
              variant='ghost'
              size='sm'
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={cn(
                editor.isActive("heading", { level: 1 }) ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <Heading1 className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={cn(
                editor.isActive("heading", { level: 2 }) ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <Heading2 className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={cn(
                editor.isActive("bulletList") ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <List className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={cn(
                editor.isActive("orderedList") ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <ListOrdered className='h-4 w-4' />
            </Button>
            <Button
              variant='ghost'
              size='sm'
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={cn(
                editor.isActive("blockquote") ? "bg-muted" : "",
                "rounded-none"
              )}
            >
              <Quote className='h-4 w-4' />
            </Button>
          </div>
        </FloatingMenu>
      )}

      <div className='p-4 prose prose-sm sm:prose max-w-none editor-content'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
