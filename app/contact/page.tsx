"use client";
import Bookcall from "@/components/Bookcall";
import Social from "@/components/Social";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";


const page = () => {
  return (
    <div className="w-full min-h-[100dvh] justify-center items-center  flex">
      <div className="w-full flex justify-center items-center mt-20">
        <div className="grid lg:grid-cols-6 gap-10 max-md:flex max-md:flex-col w-full">
          <div className="flex flex-col gap-6 col-span-2 ">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Get in touch
                </h4>
                <p className=" text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Whether you have a question, want to collaborate, or just want
                  to say hi, feel free to reach out. I will get back to you as
                  soon as possible!
                </p>
              </div>
            </div>

            <div className="flex flex-col  gap-4 ">
              <Button size={"lg"} className="gap-2" variant="outline" asChild>
                <Link href="mailto:shivaydv1256@gmail.com">
                  Send an Email <Mail className="w-5 h-5" />
                </Link>
              </Button>
              <Button size={"lg"} className="gap-2" asChild>
                <Link href={"/services"}>
                  Our Services
                  <MoveRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <Social className="py-4 w-full border-t-2 justify-center items-center max-md:border-b-2 " />
          </div>

          <div className="col-span-4">
            <Bookcall />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
