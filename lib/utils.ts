import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { projectdata } from "./data";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function filterProjects(category: string) {
  return category==="All"?projectdata: projectdata.filter((project) => project.category.includes(category));
}