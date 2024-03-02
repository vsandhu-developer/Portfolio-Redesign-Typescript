"use client";

import { Button } from "@/components/ui/button";
import { collection, doc, getDocs } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";

interface Blog {
  id: String;
  category: String;
  title: String;
  content: String;
}

export default function BlogsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));

      const fetchedBlogs: Blog[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        category: doc.data().category,
        publishedTime: doc.data().publishedTime,
        title: doc.data().title,
        content: doc.data().content,
      }));

      setBlogs(fetchedBlogs);
    };

    getAllPosts();
  }, []);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {blogs && (
          <div className="-my-8 divide-y-2 divide-gray-100">
            {blogs.map((data, index) => {
              // Limit content to 50 words
              const limitedContent =
                data.content.split(" ").slice(0, 18).join(" ") + "...";

              return (
                <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-gray-700 dark:text-gray-300">
                      {data.category}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 dark:text-gray-300">
                      {data.title}
                    </h2>
                    <p
                      className="leading-relaxed dark:text-gray-400"
                      dangerouslySetInnerHTML={{ __html: limitedContent }}
                    />
                    <Button
                      asChild
                      variant={"link"}
                      className="p-0 text-red-600"
                    >
                      <Link href={`/blogs/${data.id}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
