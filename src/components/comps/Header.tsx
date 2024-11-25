import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { Button } from "../ui/button";
import { TextAlignRightIcon } from "@radix-ui/react-icons";
import { DarkModeToggle } from "./Toggle";
import MenuDrawer from "./MenuDrawer";
import BottomNavigation from "./BottomNavigation";
import React from "react";
import { BookOpenText, Code, HomeIcon, NotebookPen } from "lucide-react";

interface navItemsType {
  title: string;
  url: string;
  icon?: React.ReactNode;
}

export const navItems: navItemsType[] = [
  {
    title: "Home",
    url: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Resume",
    url: "/resume",
    icon: <BookOpenText className="h-4 w-4" />,
  },
  {
    title: "Projects",
    url: "/projects",
    icon: <Code className="h-4 w-4" />,
  },
  {
    title: "Blogs",
    url: "/blogs",
    icon: <NotebookPen className="h-4 w-4" />,
  },
];

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 w-full h-[90px] sticky top-0 px-10 bg-white/60 backdrop-blur-md z-10">
      <h2 className="font-bold text-lg">Vinaypartap Singh</h2>
      <div className="hidden md:flex space-x-10 items-center">
        <ul className="flex space-x-10">
          {navItems.map(({ title, url }, index) => {
            return (
              <li
                key={index}
                className="cursor-pointer text-sm decimalLeadingZero"
              >
                <Link href={`${url}`}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Button asChild>
          <Link href={"/contact"}>Contact Me</Link>
        </Button>
        <DarkModeToggle />
      </div>
      <div className="md:hidden flex items-center gap-x-4">
        <DarkModeToggle />
        {/* <MenuDrawer /> */}
        <BottomNavigation />
      </div>
    </header>
  );
}
