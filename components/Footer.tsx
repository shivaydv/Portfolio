import React from "react";

import Social from "./Social";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 border-t flex flex-col gap-6 text-center items-center justify-center">
      <div>
        <Link href={"/"} className="font-bold text-lg text-nowrap">
          Shiva Yadav
        </Link>
        <p className="text-muted-foreground text-sm">
          &#169;2024 - All rights reserved.
        </p>
      </div>
      <Social />
    </footer>
  );
};

export default Footer;
