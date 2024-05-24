import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { FileDown } from "lucide-react";

const Resume = ({ className }: { className?: string }) => {
  return (
    <Button asChild className={`gap-2 ${className}`}>
      <Link href="/Shiva-Resume.pdf" download="Shiva-Resume">
        Resume <FileDown size={20} />
      </Link>
    </Button>
  );
};

export default Resume;
