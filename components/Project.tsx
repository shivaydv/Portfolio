"use client";
import { filterProjects } from "@/lib/utils";
import React from "react";
import ProjectCard from "./ProjectCard";
import { useProjectStore } from "@/Context/ProjectStore";

const Project = ({ category }: { category?: string }) => {
  const { projectlist } = useProjectStore();
  const Projects = filterProjects(category ? category : projectlist);
  return (
    <div className="w-full min-h-screen py-4">
      {Projects.length > 0 ? (
        <div className=" grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {Projects.map((project, idx) => (
            <ProjectCard
              key={project.title + idx}
              title={project.title}
              github={project.github}
              link={project.link}
              src={project.src}
              description={project.description}
              category={project.category}
            />
          ))}
        </div>
      ) : (
        <h1 className="heading-1 mt-6">No Projects Found</h1>
      )}
    </div>
  );
};

export default Project;
