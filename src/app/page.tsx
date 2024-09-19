import Header from "@/components/comps/Header";
import Skills from "@/components/comps/Skills";
import Certifications from "@/components/comps/sections/Certifications";
import HeroSection from "@/components/comps/sections/HeroSection";
import ProjectsHome from "@/components/comps/sections/ProjectSectionHome";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      {/* <Header /> */}
      <HeroSection />
      <Certifications />
      <Skills />
      <ProjectsHome />
    </main>
  );
}
