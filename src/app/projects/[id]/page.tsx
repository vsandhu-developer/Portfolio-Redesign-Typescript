
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { PiArrowSquareOutFill } from "react-icons/pi";
import {projectData} from "@/data/ProjectData";

interface paramsType {
    params: {
        id: number
    },
}

export default function page({ params }: paramsType) {
    const id = params.id;
    const filteredData = projectData.filter(
        (item) => Number(item.id) === Number(id)
    );

    // Assuming projectData is an array of objects with an 'id' property

    return (
        <div className="mb-32 px-10">
            <div className="pt-10 mt-10 max-w-4xl m-auto">
                {filteredData ? (
                    <div>
                        {filteredData.map((data, index) => {
                            return (
                                <div className="space-y-8" key={index}>
                                    <div className="flex items-center justify-between">
                                        <h1 className="text-4xl tracking-wider">{data.name}</h1>
                                        <div className="flex gap-3">
                                            {data.github && (
                                                <Link
                                                    href={data.github}
                                                    className="text-sm flex items-center gap-1  hover:underline hover:text-red-500 transition-all hover:font-bold"
                                                >
                                                    Github <FaGithub />
                                                </Link>
                                            )}
                                            {data.websiteURL && (
                                                <Link
                                                    href={data.websiteURL}
                                                    className="text-md flex items-center gap-1 hover:underline hover:text-red-500 transition-all hover:font-bold"
                                                >
                                                    Visit Now
                                                    <PiArrowSquareOutFill />
                                                </Link>
                                            )}
                                        </div>
                                    </div>

                                    <p className="leading-8 text-lg tracking-wider">
                                        {data.description}
                                    </p>
                                    <p className="tracking-wider">
                                        <span className="font-bold">Role: </span>
                                        {data.role}
                                    </p>
                                    <p className="tracking-wider">
                                        <span className="font-bold">Technology Used: </span>
                                        {data.technology}
                                    </p>
                                    <p className="font-bold">Key Features: </p>
                                    {data.detailedFeatures.map((data, index) => {
                                        return (
                                            <div key={index} className="ml-0 lg:ml-10">
                                                <p className="text-md font-medium">
                                                    {index + 1}: {data.title}
                                                </p>
                                                <ul className="list-decimal ml-0 lg:ml-20">
                                                    {data?.features?.map((data, index) => {
                                                        return (
                                                            <li key={index} className="my-5 space-y-4">
                                                                <p className="font-medium">{data.title}</p>
                                                                <p>{data.description}</p>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        );
                                    })}

                                    <p className="text-lg tracking-wider leading-10">
                                        <span className="font-bold">Challenges: </span>
                                        {data.challenges}
                                    </p>
                                    <p className="text-lg tracking-wider leading-10">
                                        <span className="font-bold">Solution: </span>
                                        {data.solution}
                                    </p>
                                    <p className="text-lg tracking-wider leading-10">
                                        <span className="font-bold">Results: </span>
                                        {data.results}
                                    </p>
                                    <p className="text-lg tracking-wider leading-10">
                                        <span className="font-bold">Learnings: </span>
                                        {data.learnings}
                                    </p>
                                    <p className="text-lg tracking-wider leading-10">
                                        <span className="font-bold">Future Improvements: </span>
                                        {data.futureImprovements}
                                    </p>

                                    <div className="flex gap-3">
                                        {data.github && (
                                            <Link
                                                href={data.github}
                                                className="text-sm flex items-center gap-1  hover:underline hover:text-red-500 transition-all hover:font-bold"
                                            >
                                                Github <FaGithub />
                                            </Link>
                                        )}
                                        {data.websiteURL && (
                                            <Link
                                                href={data.websiteURL}
                                                className="text-md flex items-center gap-1 hover:underline hover:text-red-500 transition-all hover:font-bold"
                                            >
                                                Visit Now
                                                <PiArrowSquareOutFill />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <p>No Information Found</p>
                )}
            </div>
        </div>
    );
}