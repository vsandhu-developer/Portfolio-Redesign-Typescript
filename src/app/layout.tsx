import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/comps/Header";

const inter = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vinaypartap Singh",
  description: "- Web Developer | React.js, Node.js, MongoDB, Firebase, React Native, Shopify Liquid (Theme Development), WordPress, Elementor, Google Sites |",
  keywords: "React Native, Laundry App, Job Finder, Image Upload, Video Upload, YouTube UI Clone, Daily1Blog, Blog Website, Full Stack Development. Full Stack Developer, Front-End Developer, Back-End Developer, Firebase, React JS, Next JS."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className}>
    {/*<div className="bg-[#fbe2e3] dark:bg-[#5b2224] z-[-1] absolute top-[-6rem] right-[11rem] h-[35.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>*/}
    {/*<div className="bg-[#fbe2e3] dark:bg-[#5b2224] z-[-1] absolute top-[-6rem] left-[11rem] h-[35.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>*/}

    <div
        className="hidden sm:block bg-[#fbe2e3] dark:bg-[#5b2224] z-[-1] absolute top-[-6rem] right-[11rem] h-[35.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
    <div
        className="hidden lg:block bg-[#fbe2e3] dark:bg-[#5b2224] z-[-1] absolute top-[-6rem] left-[11rem] h-[35.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

    <Header/>
    {children}
    </body>
    </html>
  );
}
