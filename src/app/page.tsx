import HeroSection from "@/components/comps/sections/HeroSection";
import ProjectsHome from "@/components/comps/sections/ProjectSectionHome";
import SkillsTabs from "@/components/comps/sections/Skills&Certification";

export default function Home() {
  return (
    <main className="">
      {/* <Header /> */}
      <HeroSection />
      <SkillsTabs />
      {/* <Certifications />
      <Skills /> */}
      <ProjectsHome />
    </main>
  );
}
