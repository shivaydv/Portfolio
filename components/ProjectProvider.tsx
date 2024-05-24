"use client";
import ProjectStore from "@/Context/ProjectStore";
import React from "react";
import ProjectSection from "./ProjectSection";

const ProjectProvider = () => {
  return (
    <ProjectStore>
      <ProjectSection />
    </ProjectStore>
  );
};

export default ProjectProvider;
