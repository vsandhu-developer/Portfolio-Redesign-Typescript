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

interface navItemsType {
  title: string;
  url: string;
}

export const navItems: navItemsType[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Resume",
    url: "/resume",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blogs",
    url: "/blogs",
  },
];

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6 w-full h-[90px] px-10">
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
        <MenuDrawer />
      </div>
    </div>
  );
}
