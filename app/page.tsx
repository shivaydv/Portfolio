import { Blogs } from "@/components/Blogs";
import { Hero } from "@/components/Hero";
import Logos from "@/components/Logos";
import ProjectProvider from "@/components/ProjectProvider";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <ProjectProvider/>
      <Blogs />
    </>
  );
}
