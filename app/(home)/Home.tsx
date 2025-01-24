"use client";

import Avatar from "@/components/Avatar";
import AvatarRain from "@/components/AvatarRain";
import Card from "@/components/Card";
import SocialLinks from "@/components/SocialLinks/SocialLinks";
import { SocialLink } from "@/models/SocialLink";
import { Size } from "@/types/size";
import { SocialPlatform } from "@/types/socialPlatform";
import React, { useState } from "react";

const Home = () => {
  const [showParticles, setShowParticles] = useState(false);

  const socialLinks: SocialLink[] = [
    {
      url: "https://github.com/iamlucasb",
      alt: "GitHub",
      platform: SocialPlatform.GitHub,
    },
    {
      url: "mailto:contact@lucasbossard.dev",
      alt: "Email",
      platform: SocialPlatform.Email,
    },
  ];

  return (
    <main className="grid h-screen place-items-center bg-taupe-500">
      <div className="flex flex-col">
        <AvatarRain
          setShowParticles={setShowParticles}
          showParticles={showParticles}
        />
        <div className="z-10">
          <Card>
            <div className="flex items-center justify-center">
              <Avatar
                src="/images/avatar.jpg"
                alt="Avatar Lucas Bossard"
                size={Size.Medium}
                onClick={() => setShowParticles(true)}
              />
            </div>
            <div className="flex flex-col justify-center md:max-w-52 gap-4 md:gap-5">
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold md:text-5xl sm:text-2xl tracking-wider font-montserrat text-center md:text-left">
                  Lucas <span className="text-taupe-700">Bossard</span>
                </h1>
                <p className="text-lg italic text-center md:text-left font-crimson ml-1">
                  Soon-to-be entrepreneur
                </p>
              </div>
              <SocialLinks socialLinks={socialLinks} />
            </div>
          </Card>
          <p className="mt-6 text-taupe-100 text-center mx-auto max-w-52 md:max-w-full">
            👷🏻‍♂️ Building something great! Come back later to see my portfolio.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
