"use client";

import ProjectStore from "@/Context/ProjectStore";
import CategoryTab from "@/components/CategoryTab";
import Project from "@/components/Project";
import React from "react";


const page = () => {
  return (
    <ProjectStore>
      <div className="w-full">
        <section>
          <div className="mt-20 md:mt-24 w-full  ">
            <h1 className="heading-1 text-3xl">Projects</h1>
            <p className="md:text-lg text-muted-foreground">
              Here are some of the projects I have worked on.
            </p>
          </div>
          <CategoryTab />
        </section>
        <Project />
      </div>
    </ProjectStore>
  );
};

export default page;
