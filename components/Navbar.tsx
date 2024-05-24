"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FileDown, Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Resume from "./Resume";
import { ModeToggle } from "./ui/ToggleDark";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import Social from "./Social";

export const Navbar = () => {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "About",
      href: "/about",
      description: "",
    },
    {
      title: "Contact",
      href: "/contact",
      description: "",
    },
    {
      title: "More",
      description:
        "Book a project discussion call now and let's make it happen together!",
      items: [
        {
          title: "Projects",
          href: "/projects",
        },
        {
          title: "Services",
          href: "/services",
        },
        {
          title: "Blog",
          href: "https://medium.com/@shivaydv",
        },
        {
          title: "Videos",
          href: "https://www.youtube.com/@shivay1256",
        },
      ],
    },
  ];

  return (
    <header className="w-full z-[90] fixed top-0 left-0 bg-background/80 backdrop-blur-sm ">
      <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
        <div className="flex ">
          <Link href={"/"} className="font-bold text-nowrap">
            Shiva Yadav
          </Link>
        </div>
        <div className="justify-center items-center gap-4 lg:flex hidden flex-row">
          <NavigationMenu className="flex justify-start items-start">
            <NavigationMenuList className="flex justify-start gap-4 flex-row">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.href ? (
                    <Button variant="ghost" asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  ) : (
                    <>
                      <NavigationMenuTrigger className="font-medium text-sm">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="!w-[450px] p-4">
                        <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                          <div className="flex flex-col h-full justify-between">
                            <div className="flex flex-col">
                              <p className="text-base">{item.title}</p>
                              <p className="text-muted-foreground text-sm">
                                {item.description}
                              </p>
                            </div>
                            <Button size="sm" className="mt-10" asChild>
                              <Link
                                target="_blank"
                                href={"https://cal.com/shivaydv/book-a-call"}
                              >
                                Book a call
                              </Link>
                            </Button>
                          </div>
                          <div className="flex flex-col text-sm h-full justify-end">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink
                                href={subItem.href}
                                key={subItem.title}
                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                              >
                                <span>{subItem.title}</span>
                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex justify-end w-full gap-4">
          {/* <Button variant="outline">Sign in</Button> */}
          <ModeToggle />
          <Resume className="max-lg:hidden" />
        </div>

        <Sheet>
          <SheetTrigger className="lg:hidden" asChild>
            <Button variant="ghost" size={"icon"}>
              <Menu className=" h-5 w-5 m-2" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetOverlay className="bg-black/80"></SheetOverlay>
          <SheetContent side={"left"} className="z-[99] lg:hidden">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full justify-between py-8">
              <div className="flex flex-col gap-3">
                {navigationItems.map((item) => (
                  <div key={item.title}>
                    <div className="flex flex-col">
                      {item.href ? (
                        <SheetClose asChild>
                          <Button variant="ghost" asChild>
                            <Link href={item.href} className="text-lg">
                              {item.title}
                            </Link>
                          </Button>
                        </SheetClose>
                      ) : (
                        <Button
                          disabled
                          variant={"link"}
                          className=" text-lg justify-start "
                        >
                          {item.title}
                        </Button>
                      )}

                      {item.items &&
                        item.items?.map((subItem) => (
                          <SheetClose key={subItem.title} asChild>
                            <Button variant="ghost" asChild>
                              <Link
                                
                                href={subItem.href}
                                className="flex justify-between "
                              >
                                <span className="text-sm">{subItem.title}</span>
                                <MoveRight className="w-4 h-4 stroke-2" />
                              </Link>
                            </Button>
                          </SheetClose>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
              <Resume className="lg:hidden" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
