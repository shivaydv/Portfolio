"use client";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export const Blogs = () => {
  const [posts, setPosts] = useState([]);

  const extractImageUrl = (content: string) => {
    const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgTagMatch ? imgTagMatch[1] : null;
  };
  const extractdescription = (content: string) => {
    const pTagMatch = content.match(/<p>(.*?)<\/p>/);
    return pTagMatch ? pTagMatch[0] : null;
  };

  const getPostData = () => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@shivaydv"
      )
      .then((res) => {
        setPosts(res.data.items.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div className="w-full pb-10 lg:pb-20 ">
      <div className=" flex flex-col gap-8">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="heading-1 text-2xl">Latest articles</h4>
          <Button asChild>
            <Link
              href={"https://medium.com/@shivaydv"}
              className="gap-4 max-md:hidden"
            >
              View all articles <MoveRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 ">
          {posts.map((post: any) => {
            const imageUrl = extractImageUrl(post.content);
            const description = extractdescription(post.content);
            return (
              <CardContainer key={post.guid}>
                <CardBody>
                  <Link
                    href={post.link}
                    
                    className="flex flex-col gap-2 "
                  >
                    {imageUrl && (
                      <CardItem translateZ={30}>
                        <Image
                          src={imageUrl}
                          alt="Post image"
                          width={500}
                          height={500}
                          className="bg-muted rounded-md aspect-video mb-2 w-full"
                        />
                      </CardItem>
                    )}
                    <h3 className="heading-1 text-sm md:text-lg  text-wrap line-clamp-2">
                      {post.title}
                    </h3>
                    {/* {description && (
                  <div
                  className="line-clamp-2 text-sm text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: description }}
                  />
                )} */}
                  </Link>
                </CardBody>
              </CardContainer>
            );
          })}
        </div>

        <Button asChild>
          <Link
            href={"https://medium.com/@shivaydv"}
            className="gap-4 md:hidden"
          >
            View all articles <MoveRight className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
