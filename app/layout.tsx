import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <title>Lucas Bossard - Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Soon-to-be entrepreneur building something great!"
        />
      </head>
      <body className="bg-taupe-500">
        <header />
        {children}
        <footer />
      </body>
    </html>
  );
}
