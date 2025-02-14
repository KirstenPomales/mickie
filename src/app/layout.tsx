import "./globals.css";

import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontHeading = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | MickieAI",
    default: "MickieAI",
  },
  description: "The framework for autonomous trading agents",
  openGraph: {
    title: "MickieAIe",
    description: "The framework for autonomous trading agents",
    images: [
      {
        url: "/images/meta-image.png",
        width: 1200,
        height: 630,
        alt: "MickieAI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MickieAI",
    description: "The framework for autonomous trading agents",
    images: ["/images/meta-image.png"], // Optional
  },
  icons: {
    icon: [
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
