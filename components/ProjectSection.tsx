import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Project from "./Project";

const ProjectSection = () => {
  return (
    <div className="w-full py-16 ">
      <div className=" flex flex-col gap-4">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="heading-1 text-2xl">Featured Projects</h4>
          <Button asChild>
            <Link
              href={"/projects"}
              className="gap-4 max-md:hidden"
            >
              View all Projects <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <Project category="Featured" />

        <Button asChild>
          <Link
            href={"/projects"}
            className="gap-4 md:hidden"
          >
            View all Projects <MoveRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectSection;
