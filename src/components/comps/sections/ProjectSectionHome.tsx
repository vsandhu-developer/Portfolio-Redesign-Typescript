import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { projectData } from "@/data/ProjectData";
import Image from "next/image";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { PiArrowSquareOutFill } from "react-icons/pi";

export default function ProjectsHome() {
  return (
    <div>
      <div className="min-h-screen pt-10 mt-10 max-w-4xl m-auto">
        <div className="px-10 lg:px-0">
          <h1 className={`text-2xl`}>Picked Projects</h1>
        </div>

        <div className="mt-10 px-5 grid gap-y-4 gap-x-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 bg-red-50 bg-transparent">
          {projectData.map((data, index) => {
            return (
              <Card
                key={index}
                className={`cursor-pointer h-fit text-3xl flex flex-col justify-center items-center transition-all rounded-md my-6 projectDataSection`}
              >
                <div className="bg-white dark:bg-black w-full h-full rounded-md space-y-2">
                  <Image
                    priority={true}
                    className={"w-full rounded-sm"}
                    src={data.image}
                    alt={`${data.name} Image`}
                    width={400}
                    height={200}
                  />
                  <div className="flex flex-wrap justify-between items-center px-5">
                    <h4 className="text-lg tracking-widest my-3">
                      {data.name}
                    </h4>
                    <div className="flex gap-2 items-center">
                      <Link
                        href={`/projects/${data.id}`}
                        aria-label={
                          data.name + " " + "created using " + data.technology
                        }
                      >
                        <PiArrowSquareOutFill className="text-sm flex items-center gap-1" />
                      </Link>
                      {data.github && (
                        <Link
                          aria-label={`${data.name} Github URL`}
                          href={data.github}
                          className="text-sm flex items-center gap-1"
                        >
                          <FaGithub />
                        </Link>
                      )}
                      {data.websiteURL && (
                        <Link
                          aria-label={`${data.name} Website URL`}
                          href={data.websiteURL}
                          className="text-sm flex items-center gap-1"
                        >
                          <CiGlobe />
                        </Link>
                      )}
                    </div>
                  </div>
                  <h5 className="text-sm truncate px-5">{data.technology}</h5>
                  <div className="flex gap-4 items-center justify-between px-5 pb-4 mt-10">
                    <div className="space-x-3">
                      {data.github && (
                        <Button
                          asChild
                          aria-label={`${data.name} Github URL`}
                          // className="text-sm flex items-center gap-1"
                        >
                          <Link
                            href={data.github}
                            aria-label={`${data.name} Github URL`}
                          >
                            Github <FaGithub className="ml-2" />
                          </Link>
                        </Button>
                      )}
                      {data.websiteURL && (
                        <Button
                          aria-label={"Website URL"}
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
                    <div>
                      <Button
                        aria-label={"Website URL"}
                        variant={"link"}
                        asChild
                        // className="text-sm flex items-center gap-1"
                      >
                        <Link
                          href={`/projects/${data.id}`}
                          className="text-sm flex items-center gap-1"
                        >
                          Project Info
                          <PiArrowSquareOutFill className="text-sm flex items-center gap-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
        <div className="text-center mb-20 mt-10">
          <Button aria-label="View Projects" variant={"outline"} asChild>
            <Link href={"/projects"} aria-label="View Projects">
              View All
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
