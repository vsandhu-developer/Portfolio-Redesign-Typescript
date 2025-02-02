import type { Metadata } from "next";
import { ovo } from "../layout";

export const metadata: Metadata = {
  title: "Vinaypartap Singh | Web Developer Resume",
  description:
    "Explore VinayPartap Singh's web development resume, showcasing experience, skills, and contact information.",
  keywords:
    "Web Developer, Resume, VinayPartap Singh, React, React Native, WordPress, WooCommerce, Shopify, HTML, CSS, JavaScript, Figma, Adobe XD",
};

interface projectDataProps {
  companyName: string;
  type: string;
  role: string;
  description: string;
  timePeriod: string;
}

interface contactInfo {
  title: string;
}

interface education {
  schoolName: string;
  subject: string;
  percentage: string;
}

interface WhatILike {
  title: string;
  type: string;
  favourite: string;
}

interface Skills {
  tool?: string;
  skill?: string;
}
export default function page() {
  const data: projectDataProps[] = [
    {
      companyName: "Kide Learn",
      type: "Internship",
      role: "Web Developer",
      description:
        "In 2022, as a web developer for Kide Learn, I orchestrated the creation of a dynamic e-commerce website using WordPress and WooCommerce.",
      timePeriod: "February 2022 - May 2022",
    },
    {
      companyName: "Oplakart",
      type: "Full Time",
      role: "Web Developer",
      description:
        "Oplakart is a vibrant and dynamic e-commerce platform meticulously crafted using WordPress and WooCommerce.",
      timePeriod: "June 2022 - September 2022",
    },
    {
      companyName: "Codepaper",
      type: "Full Time",
      role: "Web Developer",
      description:
        "In my tenure at CodePaper, I had the privilege of contributing to a diverse array of projects, showcasing the versatility of my skills and expertise.",
      timePeriod: "September 2022 - January 2023",
    },
    {
      companyName: "Ultra10",
      type: "Part Time",
      role: "Web Developer",
      description:
        "Ultra 10, a pioneering company specializing in top-notch e-commerce services, proudly operates on a robust online platform meticulously crafted using WordPress and WooCommerce.",
      timePeriod: "February 2023 - June 2023",
    },
  ];

  const contactInfo: contactInfo[] = [
    {
      title: "vinay.netlify.app",
    },
    {
      title: "developervsandhu@gmail.com",
    },
    {
      title: "+1 (647) 924-6141",
    },
  ];

  const education: education[] = [
    {
      schoolName: "Guru Arjan Dev Khalsa College",
      subject: "Physics, Chemistry & Maths",
      percentage: "84.6%",
    },
    {
      schoolName: "Georgian@ILAC",
      subject: "Computer Programming",
      percentage: "Not Disclosed",
    },
  ];

  const WhatILike: WhatILike[] = [
    {
      title: "For better Communication",
      type: "Reading",
      favourite: "Favourite Book: Steve Jobs",
    },
    {
      title: "For better Communication",
      type: "Listening Podcasts",
      favourite: "Favourite Poscast: Action Hero Vidyut Jammwal",
    },
    {
      title: "Learnings",
      type: "Technology & Daily News",
      favourite:
        "I follow daily.dev chrome extension to get latest tech news daily.",
    },
  ];

  const UIUX: Skills[] = [
    {
      tool: "Figma",
    },
    {
      tool: "Adobe XD",
    },
  ];

  const Coding: Skills[] = [
    {
      skill: "Html, Css, Javscript",
    },
    {
      skill: "React JS",
    },
    {
      skill: "Next JS",
    },
    {
      skill: "React Native",
    },
  ];

  const Backend: Skills[] = [
    {
      skill: "Node JS",
    },
    {
      skill: "Express JS",
    },
    {
      skill: "MongoDB",
    },
    {
      skill: "Postgresql",
    },
    {
      skill: "Redis",
    },
    {
      skill: "Prisma",
    },
  ];

  const CMS: Skills[] = [
    {
      tool: "WordPress",
    },
    {
      tool: "Shopify",
    },
    {
      tool: "Liquid (Theme Development)",
    },
  ];

  const others: Skills[] = [
    {
      tool: "Canva",
    },
    {
      tool: "Google Sites",
    },
    {
      tool: "MongoDB",
    },
  ];

  return (
    <div>
      <div className="max-w-5xl m-auto lg:px-0 px-10">
        <div className="py-24 space-y-6">
          <h1
            className={`text-red-500 text-4xl font-semibold uppercase ${ovo.className}`}
          >
            Resume
          </h1>
          <h2 className="text-4xl tracking-wider">
            A look at my professional Experience
          </h2>
          <p className="leading-10 text-justify">
            {/* eslint-disable-next-line react/no-unescaped-entities */}I am
            Vinaypartap Singh. Whether you're looking for a straightforward
            website or a sophisticated e-commerce platform, I have the knowledge
            and expertise required to realise your vision. Utilise my web
            development services to help you grow your company. Specialised in
            Shopify, WordPress, HTML, CSS, Javascript, React JS, React Native,
            and more.
          </p>
          <button className="border-2 py-2 px-8 rounded-md dark:bg-red-500 dark:text-white border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all mt-5">
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1vXiQ64bsy40LD5mkzylpFe2cgMTBgAk9/view?usp=sharing"
            >
              View Resume
            </a>
          </button>
          <p className="text-red-500 font-light tracking-widest">
            PDF | Preview Available | 342 KB | 1 Page
          </p>
        </div>

        {/* Resume Section */}

        <div className="space-y-4 lg:w-full md:w-4/5 md:m-auto ">
          <h1 className="text-4xl">Vinaypartap Singh</h1>
          <p className="text-xl tracking-wider">
            <span className="text-red-500 font-bold">web developer</span>{" "}
            passionate for new challanges and technologies.
            <br /> changing the world one pixel at a time.
          </p>
          {/* Sections */}
          <div className="w-full sm:w-full lg:w-4/5 flex flex-col lg:flex-row gap-14 customMargin4em">
            <div>
              <h5 className="text-red-500 font-bold text-xl">experience</h5>
              <div>
                {data.map((data, index) => {
                  return (
                    <div key={index} className="space-y-2 customMargin">
                      <h5 className="text-xl font-medium text-gray-600 dark:text-gray-300">
                        {data.role}
                      </h5>
                      <div className="flex justify-between items-center">
                        <h5 className="text-lg text-gray-600 dark:text-gray-300">
                          {data.companyName}
                        </h5>
                        <h5 className="text-md text-gray-400 dark:text-gray-300 italic">
                          {data.timePeriod}
                        </h5>
                      </div>
                      <p className="text-lg tracking-wider text-gray-600 dark:text-gray-300">
                        &quot;In my tenure at CodePaper, I had the privilege of
                        contributing to a diverse array of projects, showcasing
                        the versatility of my skills and expertise.&quot;
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:pl-8 space-y-8">
              {/* Contact */}
              <div>
                <h5 className="text-red-500 font-bold text-xl">contact</h5>
                <div className="space-y-1 customMargin7">
                  {contactInfo.map(({ title }, index) => {
                    return (
                      <p
                        key={index}
                        className="text-md tracking-wider text-gray-600 dark:text-gray-300"
                      >
                        {title}
                      </p>
                    );
                  })}
                </div>
              </div>
              {/* Education */}

              <div>
                <h5 className="text-red-500 font-bold text-xl">education</h5>
                <div className="space-y-4 customMargin7">
                  {education.map(
                    ({ schoolName, subject, percentage }, index) => {
                      return (
                        <div className="space-y-1" key={index}>
                          <p
                            key={index}
                            className="text-md tracking-wider text-gray-600 font-medium dark:text-gray-300"
                          >
                            {schoolName}
                          </p>

                          <p className="text-md tracking-wider text-gray-600 dark:text-gray-300">
                            {subject}
                          </p>
                          {percentage && (
                            <p className="text-md tracking-wider text-gray-600 dark:text-gray-300">
                              {percentage}
                            </p>
                          )}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
              {/* What I Like */}

              <div>
                <h5 className="text-red-500 font-bold text-xl">What I Like</h5>
                <div className="space-y-4 customMargin7">
                  {WhatILike.map(({ title, type, favourite }, index) => {
                    return (
                      <div className="space-y-2" key={index}>
                        <p
                          key={index}
                          className="text-md tracking-wider text-gray-600 font-semibold dark:text-gray-300"
                        >
                          {title}
                        </p>

                        <p className="text-md tracking-wider text-gray-600 dark:text-gray-300">
                          {type}
                        </p>

                        <p className="text-md tracking-wider text-gray-600 dark:text-gray-300">
                          {favourite}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl m-auto px-5 mt-10 mb-20">
        <h5 className="text-red-500 font-bold text-xl">skills & tools</h5>
        <div className="mt-5 flex justify-between lg:w-4/5 flex-wrap gap-5">
          <div>
            <h5 className="font-bold">UI/UX</h5>
            <div className="space-y-1 mt-2">
              {UIUX.map(({ tool }, index) => {
                return <p key={index}>{tool}</p>;
              })}
            </div>
          </div>
          <div>
            <h5 className="font-bold">Coding</h5>
            <div className="space-y-1 mt-2">
              {Coding.map(({ skill }, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </div>
          </div>
          <div>
            <h5 className="font-bold">Backend</h5>
            <div className="space-y-1 mt-2">
              {Backend.map(({ skill }, index) => {
                return <p key={index}>{skill}</p>;
              })}
            </div>
          </div>

          <div>
            <h5 className="font-bold">CMS</h5>
            <div className="space-y-1 mt-2">
              {CMS.map(({ tool }, index) => {
                return <p key={index}>{tool}</p>;
              })}
            </div>
          </div>

          <div>
            <h5 className="font-bold">Others</h5>
            <div className="space-y-1 mt-2">
              {others.map(({ tool }, index) => {
                return <p key={index}>{tool}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
