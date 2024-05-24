import { Button } from "@/components/ui/button";
import { Mail, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-[100dvh]  pt-28 md:pt-32">
      <div className="w-full grid  gap-8  ">
        <div className="flex flex-col items-center justify-center">
          <Image
            alt="User Avatar"
            className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover"
            height={500}
            src="/images/hero1.jpg"
            style={{
              aspectRatio: "300/300 ",
              objectFit: "cover",
            }}
            width={500}
          />
        </div>
        <div className="space-y-6 mx-auto max-w-md">
          <div className=" w-full text-center ">
            <h1 className="text-4xl font-bold">Shiva Yadav</h1>
            <p className="text-muted-foreground">
              Web Developer & Designer
            </p>
          </div>

          <p className="md:font-semibold text-center ">
            Hi there! I'm Shiva Yadav, a self-taught web developer passionate
            about building awesome websites. I focus on creating modern websites
            that work well on any device.
          </p>

          <div className="flex flex-col  gap-4 md:gap-4 py-2 md:flex-row md:justify-evenly">
            <Button className="gap-2" size={"lg"} asChild>
              <Link href="/contact">
                Contact Me
                <Mail className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant={"secondary"} className="gap-2" size={"lg"} asChild>
              <Link href="/projects">
                View My Work
                <MoveRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
