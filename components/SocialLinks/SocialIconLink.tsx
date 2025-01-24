import { SocialLink } from "@/models/SocialLink";
import { SocialPlatform } from "@/types/socialPlatform";
import React, { ReactNode } from "react";
import { RiMailFill } from "react-icons/ri";
import { TbBrandGithubFilled } from "react-icons/tb";

interface Props {
  socialLink: SocialLink;
}

const SocialIconLink = ({ socialLink }: Props) => {
  // Récupération de l'icone
  let icon: ReactNode;
  switch (socialLink.platform) {
    case SocialPlatform.GitHub:
      icon = <TbBrandGithubFilled size={25} />;
      break;
    default:
      icon = <RiMailFill size={25} />;
      break;
  }

  return (
    <a
      href={socialLink.url}
      className="text-lg font-medium transition duration-200 text-taupe-700 hover:text-amber-500"
      aria-label={socialLink.alt}
    >
      {icon}
    </a>
  );
};

export default SocialIconLink;
