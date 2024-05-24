import { createContext, useContext, useState } from "react";

const Projectcontext = createContext();

export default function ProjectStore({ children }) {
  const [projectlist, setProjectlist] = useState("All");

  return (
    <Projectcontext.Provider value={{ projectlist, setProjectlist }}>
      {children}
    </Projectcontext.Provider>
  );
}

export function useProjectStore() {
  return useContext(Projectcontext);
}
