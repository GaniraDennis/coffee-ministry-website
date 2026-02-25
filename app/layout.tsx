import React from "react"
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "The Coffee Ministry | Empowering Children in Kenya",
  description:
    "A faith-based nonprofit organization empowering children in Kenya's marginalized communities through education, mentorship, and community development.",
  icons: {
    icon: "/favicon-white.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link rel="icon" href="/favicon-white.svg" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
