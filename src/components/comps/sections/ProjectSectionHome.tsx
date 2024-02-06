import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { PiArrowSquareOutFill } from "react-icons/pi";
import { projectData } from "@/data/ProjectData";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProjectsHome() {
  return (
    <div>
      <div className="min-h-screen pt-10 mt-32 max-w-4xl m-auto">
        <div className="px-10 lg:px-0">
          <h1 className="text-2xl">Picked Projects</h1>
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
                <div className="bg-white w-full h-full rounded-md space-y-2">
                  <Image priority={true} className={"w-full rounded-sm"} src={data.image} alt={`${data.name} Image`} width={400} height={200} />
                  <div className="flex flex-wrap justify-between items-center px-5">
                    <h4 className="text-lg tracking-widest my-3">
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
                  <h5 className="text-sm truncate px-5">{data.technology}</h5>
                  <div className="flex gap-4 items-center px-5 pb-4">
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
        <div className="text-center mb-20 mt-10">
          <Button variant={"outline"} asChild>
            <Link href={"/projects"}>View All</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
