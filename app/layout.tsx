"use client";
import "./globals.css";

import { useEffect } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <html lang="fr">
      <head>
        <title>Lucas Bossard - Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Soon-to-be entrepreneur building something great!"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
