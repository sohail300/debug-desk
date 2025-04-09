import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debug Desk",
  description: "Detect. Debug. Deploy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased animated-dotted-background flex flex-col items-center justify-center min-h-screen py-2 bg-white relative`}
      >
        {children}
      </body>
    </html>
  );
}
