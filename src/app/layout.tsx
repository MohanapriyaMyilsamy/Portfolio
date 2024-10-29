import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohanapriya Portfolio",
  description:
    "Experienced Frontend Developer skilled in React, Next.js, and responsive design. Specializing in UI, dynamic websites, and seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Mohanapriya Portfolio" />
        <meta
          name="description"
          content="Experienced Frontend Developer skilled in React, Next.js, and responsive design. Specializing in UI, dynamic websites, and seamless user experiences."
        />
        <meta
          name="keywords"
          content="portfolio website, portfolio, portfolio design, portfolio website templates, portfolio template, Nextjs portfolio, mohanapriya portfolio"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
