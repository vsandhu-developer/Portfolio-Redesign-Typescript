import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import { navItems } from "./Header";

export default function MenuDrawer() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <Button variant="outline" size="icon" name="Hamburger Menu Icon">
          <HamburgerMenuIcon className="h-4 w-4" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <div>
              <DrawerTitle className="text-2xl text-start">
                Vinaypartap Singh
              </DrawerTitle>
              <DrawerDescription className="text-start">
                Professional
                <span className="text-red-500"> Web Developer </span> with
                <span className="text-red-500"> 2+</span> years of experience
              </DrawerDescription>
            </div>
            <div>
              <DrawerClose>
                <Button variant="outline" size={"icon"}>
                  <Cross2Icon className="w-4 h-4" />
                </Button>
              </DrawerClose>
            </div>
          </div>

          {/* NavItems */}
          <nav className="mt-24">
            <ul className="space-y-24 text-end px-20">
              {navItems.map(({ title, url }, index) => {
                return (
                  <li className="decimalLeadingZero" key={index}>
                    <Link href={`${url}`} className="text-3xl">
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <Button asChild>
            <Link href={"/blogs"}>Read Blogs</Link>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
