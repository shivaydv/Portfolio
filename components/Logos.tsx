import { logos } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full ">
        <div className="flex flex-col gap-5 items-center justify-center w-full ">
          <h3 className="heading-1 max-md:w-full">
            Technologies I've Worked With
          </h3>
          <div className="mx-auto w-full px-4 md:px-0 ">
            <div
              className="group relative mt-4 flex gap-6 overflow-hidden p-2"
              style={{
                maskImage:
                  "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
              }}
            >
              {Array(8)
                .fill(null)
                .map((_,index) => (
                  <div
                    key={index+1}
                    className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                  >
                    {logos.map((logo, key) => (
                      <Image
                        key={key}
                        src={logo.url}
                        className=" px-2 brightness-0 object-contain dark:invert"
                        width={120}
                        height={120}
                        alt={`${logo.name}`}
                      />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logos;
