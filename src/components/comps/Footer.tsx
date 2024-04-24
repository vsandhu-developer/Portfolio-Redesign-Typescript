// type socialIcons = {
//     icon: string,
//     url: string
// }

import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const socialIcons: Array<{
    icon: React.ReactNode;
    title: string;
    url: string;
  }> = [
    {
      title: "Github",
      icon: <GitHubLogoIcon color={"rgb(75,85,99)"} width={25} height={25} />,
      url: "https://github.com/developervinay1/",
    },
    {
      title: "Linked In",
      icon: <LinkedInLogoIcon color={"rgb(75,85,99)"} width={25} height={25} />,
      url: "https://www.linkedin.com/in/developer-vinaysandhu/",
    },
  ];

  return (
    <div
      className={
        "bg-gray-50 dark:bg-black p-10 flex items-center justify-between"
      }
    >
      <p className={"text-gray-600 dark:text-white"}>
        &copy;2024 Vinaypartap Singh | Portfolio
      </p>
      <div className={"flex item-center gap-x-6"}>
        {socialIcons.map(({ title, icon, url }, index) => {
          return (
            <a
              aria-label={title}
              key={index}
              href={url}
              className="rounded-full bg-white hover:scale-110 hover:bg-white transition-all"
            >
              {icon}
            </a>
          );
        })}
      </div>
    </div>
  );
}
