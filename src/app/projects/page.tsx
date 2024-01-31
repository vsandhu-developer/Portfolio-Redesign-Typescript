import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { PiArrowSquareOutFill } from "react-icons/pi";
import { projectData } from "@/data/ProjectData";
import { Button } from "@/components/ui/button";
import type {Metadata} from "next";

export const metadata: Metadata = {
  title: "React Native, WordPress, Shopify and many other projects by Vinaypartap Singh.",
  description: "Discover a collection of React Native projects, including a Laundry application, Job Finder app, Image and Video Uploading app, and a YouTube UI Clone.",
  keywords: "React Native, Laundry App, Job Finder, Image Upload, Video Upload, YouTube UI Clone, Daily1Blog, Blog Website, Full Stack Development."
};

export default function Projects() {
  return (
    <div>
      <div className="min-h-screen pt-10 max-w-4xl m-auto">
        <div className="px-10 lg:px-0">
          <h1 className="text-2xl">Projects</h1>
          <p className="mt-5 leading-8">
            I have worked on various projects and had the opportunity to explore
            new technologies, while trying to solve new problems. This
            experience has been great and has helped me improve myself on a
            daily basis.
          </p>
        </div>

        <div className="mt-10 px-5 grid gap-y-4 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 bg-red-50  bg-transparent">
          {projectData.map((data, index) => {
            return (
              <div
                key={index}
                className={`cursor-pointer shadow-md hover:shadow-xl h-fit text-3xl flex flex-col justify-center items-center transition-all rounded-md my-6 projectDataSection`}
              >
                <div className=" w-full h-full p-5 rounded-md space-y-4">
                  <div className="flex flex-wrap justify-between items-center">
                    <h4 className="text-lg tracking-widest my-6">
                      {data.name}
                    </h4>
                    <div className="flex gap-2 items-center">
                      <Link href={`/projects/${data.id}`}>
                        <PiArrowSquareOutFill className="text-sm flex items-center gap-1" />
                      </Link>
                      {data.github && (
                        <Link
                          href={data.github}
                          className="text-sm flex items-center gap-1"
                        >
                          <FaGithub />
                        </Link>
                      )}
                      {data.websiteURL && (
                        <Link
                          href={data.websiteURL}
                          className="text-sm flex items-center gap-1"
                        >
                          <CiGlobe />
                        </Link>
                      )}
                    </div>
                  </div>

                  <h5 className="text-sm truncate">{data.technology}</h5>
                  <div className="flex gap-4 items-center">
                    {data.github && (
                      <Button
                        asChild
                        // className="text-sm flex items-center gap-1"
                      >
                        <Link href={data.github}>
                          Github <FaGithub className="ml-2" />
                        </Link>
                      </Button>
                    )}
                    {data.websiteURL && (
                      <Button
                        variant={"outline"}
                        className="bg-transparent"
                        asChild
                        // className="text-sm flex items-center gap-1"
                      >
                        <Link
                          href={data.websiteURL}
                          className="text-sm flex items-center gap-1"
                        >
                          Visit Now <CiGlobe />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
