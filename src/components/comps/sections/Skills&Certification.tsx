import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Skills from "../Skills";
import Certifications from "./Certifications";

export default function SkillsTabs() {
  return (
    <div className="pt-10 max-w-4xl m-auto">
      <div className="w-full my-10">
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-gray-100 dark:bg-gray-900 p-2 rounded-md">
            <TabsTrigger className="bg-gray-200" value="skills">
              Skills
            </TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>
          <TabsContent value="skills">
            <Skills />
          </TabsContent>
          <TabsContent value="certifications">
            <Certifications />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
