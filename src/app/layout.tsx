import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Kaleem Shaik | Software Engineer",
  description:
    "Software Engineer with 1+ year of experience building scalable backend systems using Java, Spring Boot, Node.js, and React. Specializing in REST APIs, Redis caching, and cloud deployments.",
  keywords: [
    "Abdul Kaleem Shaik",
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "Java",
    "Spring Boot",
    "React",
    "Full Stack",
    "MongoDB",
    "Redis",
    "AWS",
  ],
  authors: [{ name: "Abdul Kaleem Shaik" }],
  openGraph: {
    title: "Abdul Kaleem Shaik | Software Engineer",
    description:
      "Software Engineer specializing in scalable backend systems, REST APIs, and cloud deployments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0f] text-white`}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
