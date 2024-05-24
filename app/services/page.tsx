import { Button } from "@/components/ui/button";
import { Clapperboard, Code, Megaphone } from "lucide-react";
import Link from "next/link";
import React from "react";


const page = () => {
  return (
    <section className="py-28 md:py-32  ">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
          Our Services
        </h2>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We offer a wide range of services to help you achieve your goals.
        </p>
      </div>

      <div className="mt-6 md:mt-10 grid md:gap-4  sm:grid-cols-2 lg:grid-cols-3">
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-primary p-3 ">
              <Megaphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Marketing</h3>
          </div>
          <p className="mt-4 text-muted-foreground">
            Our marketing experts will help you reach your target audience and
            grow your business.
          </p>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-primary p-3 ">
              <Code className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Development
            </h3>
          </div>
          <p className="mt-4 text-muted-foreground">
            Our skilled developers will bring your ideas to life with
            cutting-edge technology.
          </p>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4">
            <div className="rounded-full bg-primary p-3 ">
              <Clapperboard className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Video Editing
            </h3>
          </div>
          <p className="mt-4 text-muted-foreground">
            Our video editing experts will help you create high-quality videos
            to showcase your brand.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center mt-6 md:mt-20">
        <Button asChild size={"lg"}>
          <Link href="/contact">Hire me</Link>
        </Button>
      </div>
    </section>
  );
};

export default page;
