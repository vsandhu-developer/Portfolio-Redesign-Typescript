import React from "react"
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import MainImage from "../../../assets/Main_Image.png"

interface socialMedia {
  title: string,
  icon: React.ReactNode,
  url: string,
}

export default function HeroSection() {

  const socialMediaItems:socialMedia[] = [
    {
      title: "Github",
      icon: <GitHubLogoIcon color="black" width={25} height={25} />,
      url: "https://github.com/developervinay1/"
    },
    {
      title: "Linked In",
      icon: <LinkedInLogoIcon color={"black"} width={25} height={25} />,
      url: "https://www.linkedin.com/in/developer-vinaysandhu/"
    }
  ]

  return (
    <div className="max-w-7xl m-auto min-h-[75vh] flex items-center px-10">
      <div className="flex justify-center flex-col items-center space-y-10">
        <div className="relative">
          <Image
            src={
              MainImage
            }
            width={92}
            height={92}
            quality={95}
            alt="Vinaypartap Singh Image"
            className="rounded-full border-8 border-white mainImage bg-red-20"
          />
          <span className="absolute bottom-[-10px] left-10 text-2xl">👋</span>
        </div>

        {/* Intro Content */}
        <p className="text-2xl sm:text-4xl text-center mt-10 !leading-[1.5]">
          <span className="font-bold">Hello, I&apos;m Vinay.</span> I&apos;m a{" "}
          <span className="font-bold">Front-End Developer</span> with 2+ years of experience. I enjoy
          building websites and mobile apps. My focus is{" "}
          <span className="font-bold">React (Next JS) and React Native.</span>
        </p>

        <p className={"text-gray-600"}>This portfolio is built using Next JS 14, Tailwind CSS and Typescript.</p>

        {/* Buttons */}

        <div className="space-x-6 flex items-center">
          <Button className="px-10 py-6 rounded-full hover:scale-110 transition-all">
            Contact Me
          </Button>
          <Button asChild className="px-10 py-6 rounded-full hover:scale-110 transition-all bg-white text-black hover:text-white">
            <a target={"_blank"} href={"https://drive.google.com/file/d/1vXiQ64bsy40LD5mkzylpFe2cgMTBgAk9/view"}>
              View CV
            </a>

          </Button>
          {
            socialMediaItems.map(({title, icon, url}, index) => {
              return (
                  <a key={index} href={url} className="rounded-full bg-white hover:scale-110 hover:bg-white transition-all">
                    {icon}
                  </a>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
