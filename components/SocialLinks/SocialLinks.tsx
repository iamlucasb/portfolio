import SocialIconLink from "@/components/SocialLinks/SocialIconLink";
import { SocialLink } from "@/models/SocialLink";
import React from "react";

interface Props {
  socialLinks: SocialLink[];
}
const SocialLinks = ({ socialLinks }: Props) => {
  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((socialLink) => {
        return (
          <SocialIconLink socialLink={socialLink} key={socialLink.platform} />
        );
      })}
    </div>
  );
};

export default SocialLinks;
