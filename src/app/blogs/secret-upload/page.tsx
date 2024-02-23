"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Italic from "@tiptap/extension-italic";
import Bold from "@tiptap/extension-bold";
import Strike from "@tiptap/extension-strike";
import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";
import Document from "@tiptap/extension-document"; // ImpoImport extensions
import { Button } from "@/components/ui/button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../firebase";
import dynamic from "next/dynamic";

const JodiatEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function UploadBlog() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    category: "",
  });

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline],
    content: "Start Typing...",
    onUpdate: ({ editor }) => {
      const newContent = editor.getHTML();
      setBlog((prevBlog) => ({ ...prevBlog, content: newContent }));
    },
  });

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
    setBlog((prevBlog) => ({ ...prevBlog, title: e.target.value }));
  };

  const handleCategoryChange = (e: any) => {
    setCategory(e.target.value);
    setBlog((prevBlog) => ({ ...prevBlog, category: e.target.value }));
  };

  const applyBold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const applyItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };

  const applyUnderline = () => {
    editor?.chain().focus().toggleUnderline().run();
  };

  const applyStrike = () => {
    editor?.chain().focus().toggleStrike().run();
  };

  const applyHeading = () => {
    editor?.chain().focus().setHeading({ level: 1 }).run();
  };

  const applyBulletList = () => {
    editor?.chain().focus().toggleBulletList().run();
  };

  const applyOrderedList = () => {
    editor?.chain().focus().toggleOrderedList().run();
  };

  const richTextEditorButtons = [
    {
      title: "B",
      function: applyBold,
    },
    {
      title: "I",
      function: applyItalic,
    },
    {
      title: "U",
      function: applyUnderline,
    },
    {
      title: "S",
      function: applyStrike,
    },
    {
      title: "H1",
      function: applyHeading,
    },
    {
      title: "UL",
      function: applyBulletList,
    },
    {
      title: "OL",
      function: applyOrderedList,
    },
  ];

  const getBlogsInfo = () => {
    if (!title || !content || !category || category === "Choose Category") {
      alert("Please fill all the fields");
      return;
    } else {
      const documentTitle = title.replace(/\s/g, "").toLowerCase();
      const docRef = doc(db, "blogs", documentTitle);

      setDoc(docRef, {
        title: title,
        content: content,
        category: category,
      });
    }
  };

  const categories = [
    "Choose Category",
    "Technology",
    "Science",
    "Health",
    "Business",
    "Entertainment",
    "Sports",
    "Education",
    "Travel",
    "Lifestyle",
  ];

  return (
    <div>
      <div className="max-w-4xl m-auto py-10">
        <h1 className="text-4xl">
          Upload --{" "}
          <span className="text-sm">Share your new thoughts with others</span>
        </h1>

        <div className="m-auto mt-10 shadow-sm px-4 bg-white py-8 rounded-md space-y-6">
          <input
            className="p-3 rounded-lg w-full border text-black"
            placeholder="Title"
            onChange={handleTitleChange}
          />
          <div>
            {/* Tiptap Editor */}
            {/* {richTextEditorButtons.map((button) => (
              <Button
                key={button.title}
                onClick={button.function}
                className="bg-gray-100 text-black hover:text-white"
              >
                {button.title}
              </Button>
            ))}
          </div> */}
            {/* <EditorContent editor={editor} /> */}

            <JodiatEditor onChange={(newContent) => setContent(newContent)} />
          </div>
          <fieldset className="space-y-4">
            <legend>Choose Category</legend>
            <select
              className="p-3 rounded-lg w-full border"
              onChange={handleCategoryChange}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </fieldset>
          <Button className="bg-red-600" onClick={getBlogsInfo}>
            Upload Now
          </Button>
        </div>
      </div>
    </div>
  );
}
