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

interface navItemsType {
  title: string;
  url: string;
}

export default function Header() {
  const navItems: navItemsType[] = [
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

  return (
    <div className="flex justify-between items-center py-6 w-full h-[90px] px-10">
      <h2 className="font-bold text-lg">Vinaypartap Singh</h2>
      <div className="hidden md:flex space-x-10 items-center">
        <ul className="flex space-x-10">
          {navItems.map(({ title, url }, index) => {
            return (
              <li key={index} className="cursor-pointer text-sm">
                <Link href={url}>{title}</Link>
              </li>
            );
          })}
        </ul>
        <Button asChild>
          <Link href={"/contact"}>Contact Me</Link>
        </Button>
      </div>
      <Menubar className="md:hidden">
        <MenubarMenu>
          <MenubarTrigger className="border-none outline-none">
            <TextAlignRightIcon />
          </MenubarTrigger>
          <MenubarContent className="mx-10">
            {navItems.map(({ title, url }, index) => {
              return (
                <MenubarItem key={index} asChild className="p-6">
                  <Link href={url}>{title}</Link>
                </MenubarItem>
              );
            })}
            <MenubarItem asChild className="p-6">
              <Button asChild className="cursor-pointer m-[16px]">
                <Link href={"/contact"}>Contact Me</Link>
              </Button>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
