import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Mohanapriya Porfolio</title>
        <meta
          name="description"
          content="Experienced Frontend Developer skilled in React, Next.js, and responsive design. Specializing in UI, dynamic websites, and seamless user experiences."
        ></meta>
        <meta
          name="keywords"
          content="portfolio,my portfolio,select portfolio,portfolio website,portfolio examples"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        {/* open graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mohanapriya Portfolio" />
        <meta
          property="og:url"
          content="https://mohanapriyamyilsamyportfolio.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://mohanapriyamyilsamyportfolio.netlify.app/_next/image?url=%2Fprofile.jpeg&w=640&q=75"
        />
        <meta
          property="og:description"
          content="Experienced Frontend Developer skilled in React, Next.js, and responsive design. Specializing in UI, dynamic websites, and seamless user experiences."
        />
        <meta name="language" content="English"></meta>
        {/* Google tag (gtag.js)  */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-40RP3MWSFL"
        ></script>
        <script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-40RP3MWSFL');
            `}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
