import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <article className="flex flex-col p-8 md:p-12 gap-3 md:gap-10 border border-gray-300 shadow-lg shadow-taupe-700 md:flex-row rounded-xl bg-neutral-100">
      {children}
    </article>
  );
};

export default Card;
