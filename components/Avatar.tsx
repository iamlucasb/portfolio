import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Size } from "@/types/size";

interface Props {
  src: string;
  alt: string;
  size: Size.Medium | Size.Small;
  onClick?: () => void;
}
const Avatar = ({ src, size, alt, onClick }: Props) => {
  return (
    <div
      className={clsx("relative ", {
        "w-32 h-32 md:w-40 md:h-40": size === Size.Medium,
        "w-16 h-16 md:w-24 md:h-24": size === Size.Small,
      })}
    >
      <Image
        className="border-2 rounded-full shadow-md border-taupe-700 hover:border-amber-500 transition duration-700 shadow-gray-400"
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 8rem, (min-width: 641px) 10rem, (min-width: 768px) 14rem"
        onClick={onClick}
        priority
      />
    </div>
  );
};

export default Avatar;
