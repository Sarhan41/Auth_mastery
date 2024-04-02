import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { sendVerificationEmail } from "@/lib/mail";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Mastery",
  description: "Created by Sarhan Patel for Auth Mastery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
