import Link from "next/link";
import { Button } from "../ui/button";
import { navItems } from "./Header";
import { HomeIcon } from "lucide-react";

export default function BottomNavigation() {
  return (
    <div className="absolute bottom-0 left-0 z-50 w-full bg-white border-t border-gray-200 dark:bg-gray-900 dark:border-gray-900 py-4">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navItems.map((data, index) => {
          return (
            <Button
              variant={"link"}
              key={index}
              type="button"
              className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
              asChild
            >
              <Link href={`${data.url}`}>
                <span className="flex items-center flex-col text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
                  {data.icon} {data.title}
                </span>
              </Link>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
