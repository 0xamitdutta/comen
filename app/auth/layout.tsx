import AuthLayout from "@/components/Authlayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ".././globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Comen",
  description: "A platform for mentees to connect with mentors to transform their journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.ico" />
      <body className={inter.className}>
        <AuthLayout>
          {children}
        </AuthLayout>
      </body>
    </html>
  );
}
