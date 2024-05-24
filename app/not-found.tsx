import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-1 w-full pt-28 pb-10 md:pt-40 md:pb-20 min-h-[100dvh] flex-col gap-6">
      <h1 className="text-lg font-bold ">Error 404 | Page not found</h1>
      <Button asChild>
        <Link href={"/"}>Go To Home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
