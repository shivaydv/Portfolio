import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewritter from "@/components/Typewritter";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="w-full pt-28 pb-10 md:pt-40 md:pb-20 max-h-[100dvh] mb-20">
      <div className="grid grid-cols-1 gap-10 sm:gap-16 md:gap-10  items-center md:grid-cols-2 ">
        <div className="flex flex-col ">
          <div className="space-y-2">
            <h2 className="font-semibold text-lg lg:text-xl text-muted-foreground ">
              <span className="">Hii👋,</span>
              <br />I am Shiva Yadav.
            </h2>
            <h1 className="font-semibold text-4xl lg:text-6xl text-foreground relative text-nowrap  ">
              A <Typewritter />
            </h1>
          </div>

          <p className="md:text-lg leading-relaxed tracking-tight text-muted-foreground sm:max-w-md text-left py-4 ">
            I specialize in building web applications with modern technologies
            and frameworks. Let&apos;s collaborate and create something extraordinary
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 ">
            <Button size={"lg"} className="gap-2" variant="outline" asChild>
              <Link href="/contact">
                Get in Touch <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
            <Button size={"lg"} className="gap-2" asChild>
              <Link href={"/projects"}>
                View My Work <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        <CardContainer>
          <CardBody className="grid grid-cols-2 gap-8">
            <CardItem translateZ="110" rotateZ={-10}>
              <Image
                src={"/images/hero1.jpg"}
                width={500}
                height={500}
                alt="image"
                className=" object-cover rounded-lg aspect-square "
              />
            </CardItem>
            <CardItem
              rotateZ={10}
              className=" row-span-2 relative flex items-center justify-center"
            >
              <Image
                src={"/images/hero2.jpg"}
                width={500}
                height={500}
                alt="image"
                className="object-cover rounded-lg "
              />
            </CardItem>
            <CardItem translateZ={"-110"} rotateZ={-10}>
              <Image
                src={"/images/hero3.jpg"}
                width={500}
                height={500}
                alt="image"
                className="object-cover rounded-lg aspect-square "
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};
