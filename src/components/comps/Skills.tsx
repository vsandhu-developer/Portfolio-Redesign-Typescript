import React from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { CiDatabase } from "react-icons/ci";
import {
  FaBezierCurve,
  FaCss3Alt,
  FaFigma,
  FaHtml5,
  FaPenNib,
  FaPython,
  FaShopify,
  FaSwift,
  FaWordpress,
} from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import {
  IoLogoFirebase,
  IoLogoJavascript,
  IoLogoNodejs,
} from "react-icons/io5";

import { GiWireframeGlobe } from "react-icons/gi";
import {
  SiAppwrite,
  SiKotlin,
  SiMongodb,
  SiSanity,
  SiSquarespace,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface skillsType {
  skill: string;
  icon: React.ReactNode;
  color: string;
}

export default function Skills() {
  const skills: skillsType[] = [
    {
      skill: "HTML",
      icon: <FaHtml5 color="#e34c26" />,
      color: "#e34c26",
    },
    {
      skill: "CSS",
      icon: <FaCss3Alt color="#264de4" />,
      color: "#264de4",
    },
    {
      skill: "Javascript",
      icon: <IoLogoJavascript color="#F0DB4F" />,
      color: "#F0DB4F",
    },
    {
      skill: "Typescript",
      icon: <BiLogoTypescript color="#007acc" />,
      color: "#007acc",
    },
    {
      skill: "React JS",
      icon: <FaReact color="#61dbfb" />,
      color: "#61dbfb",
    },
    {
      skill: "React Native",
      icon: <FaReact color="#61dbfb" />,
      color: "#61dbfb",
    },
    {
      skill: "Firebase",
      icon: <IoLogoFirebase color="#F57C00" />,
      color: "#F57C00",
    },

    {
      skill: "Express JS",
      icon: <IoLogoNodejs color="#3C873A" />,
      color: "#3C873A",
    },
    {
      skill: "Node JS",
      icon: <IoLogoNodejs color="#3C873A" />,
      color: "#3C873A",
    },
    {
      skill: "Tailwind Css",
      icon: <SiTailwindcss color="#06b6d4" />,
      color: "#06b6d4",
    },
    {
      skill: "Supabase",
      icon: <CiDatabase color="#2D9F6B" />,
      color: "#2D9F6B",
    },
    {
      skill: "Next JS",
      icon: <TbBrandNextjs color="#000000" />,
      color: "#000000",
    },
    {
      skill: "WordPress",
      icon: <FaWordpress color="#00749C" />,
      color: "#00749C",
    },
    {
      skill: "Shopify",
      icon: <FaShopify color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Liquid",
      icon: <FaShopify color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Shopify Theme Development",
      icon: <FaShopify color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Figma",
      icon: <FaFigma color="#95BF47" />,
      color: "#95BF47",
    },
    {
      skill: "Adobe XD",
      icon: <FaBezierCurve color="#2D001D" />,
      color: "#2D001D",
    },
    {
      skill: "Canva",
      icon: <FaPenNib color="#2A89DA" />,
      color: "#2A89DA",
    },
    {
      skill: "SquareSpace",
      icon: <SiSquarespace color={"#000000"} />,
      color: "#000000",
    },
    {
      skill: "Appwrite",
      icon: <SiAppwrite color={"#fd366e"} />,
      color: "#fd366e",
    },
    {
      skill: "Kotlin",
      icon: <SiKotlin color="#E24462" />,
      color: "#E24462",
    },
    {
      skill: "Swift UI",
      icon: <FaSwift color="#03D4FF" />,
      color: "#03D4FF",
    },
    {
      skill: "Wireframing",
      icon: <GiWireframeGlobe color="#FF9900 " />,
      color: "#FF9900 ",
    },
    {
      skill: "Python",
      icon: <FaPython color="#4584b6" />,
      color: "#4584b6",
    },
    {
      skill: "Mongo DB",
      icon: <SiMongodb color="#589636" />,
      color: "#589636",
    },
    {
      skill: "Sanity",
      icon: <SiSanity color="#EF3E2E" />,
      color: "#EF3E2E",
    },
  ];
  return (
    <div id="skills" className="mb-32">
      <div className="max-w-4xl m-auto mt-32 px-10 lg:px-0">
        <h1 className={`text-2xl`}>What I Know</h1>
        <div className="flex flex-wrap justify-start gap-x-14 pt-12 gap-y-6">
          {skills.map(({ skill, icon, color }, index) => {
            const borderColor = `border-[${color}]`;
            return (
              <div
                key={index}
                className={`flex items-center underline hover:cursor-pointer hover:text-black text-black/90 font-medium dark:text-white gap-2`}
              >
                {icon}
                {skill}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
