import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Oluwole Oluwole — Developer Portfolio",
  description:
    "Professional Web & Mobile App Developer with expertise in React, React Native, TypeScript, and Cybersecurity.",
  metadataBase: new URL("https://portfolio-tm-one.vercel.app"),
  openGraph: {
    title: "Oluwole Oluwole — Developer Portfolio",
    description:
      "Professional Web & Mobile App Developer with expertise in React, React Native, TypeScript, and Cybersecurity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
