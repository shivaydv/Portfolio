import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { projectDataProps } from "@/lib/data";
import { ArrowUpRight, Github } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

const ProjectCard: React.FC<projectDataProps> = ({
  title,
  github,
  description,
  link,
  src,
}) => {
  return (
    <CardContainer className=" p-2 h-full ">
      <CardBody className=" flex flex-col gap-4">
        <CardItem translateZ={-20}>
          <h4 className="heading-1 text-xl ">{title}</h4>
        </CardItem>

        <CardItem translateZ={40} className="flex justify-center ">
          <Image
            src={src}
            alt={title}
            width={500}
            height={500}
            className="rounded-lg aspect-video object-cover w-full"
          />
        </CardItem>

        <CardItem translateZ={-20}>
          <p className="text-sm text-muted-foreground font-semibold h-10  line-clamp-2">
            {description}
          </p>
        </CardItem>

        <CardItem translateZ={30} className="flex justify-between w-full">
          {github ? (
            <Link
              href={github ? github : "#"}
              className={`flex justify-center gap-1 items-center ${buttonVariants(
                { variant: "secondary" }
              )}`}
            >
              <Github size={15} />
              <p>Github Repo →</p>
            </Link>
          ) : (
            <Button
              variant={"secondary"}
              disabled
              className="flex justify-center gap-1 items-center "
            >
              <Github size={15} />
              <p>Github Repo →</p>
            </Button>
          )}

          {link ? (
            <Link
              href={link}
              className={`flex justify-center gap-1 items-center ${buttonVariants(
                { variant: "outline" }
              )}`}
            >
              <p>Live Link</p>
              <ArrowUpRight size={15} />
            </Link>
          ) : (
            <Button
              variant={"outline"}
              disabled
              className="flex justify-center gap-1 items-center "
            >
              <p>Live Link</p>
              <ArrowUpRight size={15} />
            </Button>
          )}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
