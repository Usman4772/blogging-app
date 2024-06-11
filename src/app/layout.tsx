import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Context from "@/components/GlobalContext/Context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Js Blogging Application",
  description: "Full stack Next Js blogging application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
 
      <Context>
      <body className={inter.className} style={{overflowX:"hidden"}}>{children}</body>
      </Context>
   
   
    </html>
  );
}
