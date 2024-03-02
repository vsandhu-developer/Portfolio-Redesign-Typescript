"use client";

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";

interface propsType {
  params: {
    id: string; // Corrected to lowercase "string" instead of "String"
  };
}

interface Blog {
  title: string;
  category: string;
  content: string;
}

export default function ReadBlog({ params }: propsType) {
  const [blog, setBlog] = useState<Blog | null>(null); // Specify Blog type for state

  useEffect(() => {
    const getBlog = async () => {
      try {
        const docRef = doc(db, "blogs", params.id); // Use params.id directly

        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setBlog({
            title: data.title,
            category: data.category,
            content: data.content,
          });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    getBlog();
  }, [params.id]); // Ensure useEffect re-runs when params.id changes

  if (!blog) {
    return <div className="max-w-4xl m-auto py-12">Loading...</div>;
  }

  return (
    <div>
      <div className="max-w-4xl m-auto py-12">
        <h1 className="text-3xl my-2 font-bold">{blog.title}</h1>
        <p className="text-gray-800 font-medium my-2 dark:text-gray-300">
          {blog.category}
        </p>
        <p
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
