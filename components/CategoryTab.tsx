import React from "react";
import { Button } from "./ui/button";
import { categoryList } from "@/lib/data";
import { useProjectStore } from "@/Context/ProjectStore";

const CategoryTab = () => {
  const { setProjectlist, projectlist } = useProjectStore();
  return (
    <div className="flex gap-3 justify-center py-4 flex-wrap  w-full ">
      {categoryList.map((category, idx) => (
        <Button
          key={idx}
          onClick={() => setProjectlist(category)}
          variant={category === projectlist ? "secondary" : "outline"}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryTab;
