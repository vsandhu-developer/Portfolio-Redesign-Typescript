"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(
  () => import("jodit-react"),
  { ssr: false } // This will prevent server-side rendering
);

export default function UploadBlog() {
  const initialState = {
    title: "",
    content: "",
    category: "",
  };
  const [content, setContent] = useState("");
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [blog, setBlog] = useState(initialState);

  const categories = [
    {
      title: "Technology",
    },
    {
      title: "Science",
    },
    {
      title: "Health",
    },
    {
      title: "Business",
    },
    {
      title: "Entertainment",
    },
    {
      title: "Sports",
    },
    {
      title: "Education",
    },
    {
      title: "Travel",
    },
    {
      title: "Lifestyle",
    },
  ];
  return (
    <div>
      <div className="max-w-4xl m-auto py-10">
        <h1 className="text-4xl">
          Upload --{" "}
          <span className="text-sm">
            Share your new thoughts with other&apos;s
          </span>
        </h1>

        <div className="m-auto mt-10 shadow-sm px-4 bg-white py-6 rounded-md space-y-6">
          <input className="p-3 rounded-lg w-full border" placeholder="Title" />
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          <fieldset className="space-y-4">
            <legend>Choose Category</legend>
            <select className="p-3 rounded-lg w-full border">
              {categories.map((category) => (
                <option key={category.title}>{category.title}</option>
              ))}
            </select>
          </fieldset>
          <Button className="bg-red-600">Upload Now</Button>
        </div>
      </div>
    </div>
  );
}
