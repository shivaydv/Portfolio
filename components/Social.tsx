import { socialProfiles } from "@/lib/data";
import Link from "next/link";
import React from "react";

type SocialProps = {
  className?: string;
};

const Social = ({ className }: SocialProps) => {
  return (
    <div className={`flex ${className} gap-6 text-foreground`}>
      {socialProfiles.map((profile, index) => (
        <Link key={index} href={profile.link}>
          {profile.icon({ size: 22 })}
        </Link>
      ))}
    </div>
  );
};

export default Social;
