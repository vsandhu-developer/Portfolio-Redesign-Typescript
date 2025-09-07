import Certifications from "@/components/comps/sections/Certifications";
import HeroSection from "@/components/comps/sections/HeroSection";
import ProjectsHome from "@/components/comps/sections/ProjectSectionHome";
import Skills from "@/components/comps/Skills";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Certifications />
      <Skills />
      <ProjectsHome />
    </main>
  );
}
