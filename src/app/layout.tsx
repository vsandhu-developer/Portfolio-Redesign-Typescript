import Footer from "@/components/comps/Footer";
import Header from "@/components/comps/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vinaypartap.netlify.com"),
  title: "Vinaypartap Singh",
  description:
    "- Web Developer | React.js, Node.js, MongoDB, Firebase, React Native, Shopify Liquid (Theme Development), WordPress, Elementor, Google Sites |",
  keywords:
    "React Native, Laundry App, Job Finder, Image Upload, Video Upload, YouTube UI Clone, Daily1Blog, Blog Website, Full Stack Development. Full Stack Developer, Front-End Developer, Back-End Developer, Firebase, React JS, Next JS.",
  openGraph: {
    title: "Vinaypartap Singh - Web Developer Portfolio",
    description:
      "Explore the portfolio of Vinaypartap Singh, a versatile web developer skilled in React.js, Node.js, MongoDB, Firebase, React Native, Shopify, WordPress, and more.",
    url: "https://www.vinaypartap.netlify.app",
    type: "website",
    locale: "en_US",
    siteName: "Vinaypartap Singh Portfolio",
    images: [
      {
        url: "/Main_Image.png",
        width: 1200,
        height: 630,
        alt: "Vinaypartap Singh Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinaypartap Singh - Web Developer Portfolio",
    description:
      "Explore the portfolio of Vinaypartap Singh, a versatile web developer skilled in React.js, Node.js, MongoDB, Firebase, React Native, Shopify, WordPress, and more.",
    images: ["/Main_Image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "BUtc-1brXh5W4hzlZUFOe-6ncKWgmj1uOFEIuasS6vs",
  },
  alternates: {
    canonical: "https://www.vinaypartap.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className}`}>
        {/* <div className="hidden sm:block bg-[#fbe2e3] dark:bg-gray-800 z-[-1] absolute top-[-6rem] right-[11rem] h-[35.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="hidden lg:block bg-[#fbe2e3] dark:bg-gray-900 z-[-1] absolute top-[-6rem] left-[11rem] h-[35.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div> */}
        <NextTopLoader
          color="#EF4444"
          initialPosition={0.08}
          crawlSpeed={500}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #EF4455,0 0 5px #EF4466"
          zIndex={1600}
          showAtBottom={false}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
