import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Snap-Mart | 10 minutes Grocery Delivery App",
  description: "10 minutes Grocery Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen bg-gradient-to-b from-green-100 to-white">
        {children}
      </body>
    </html>
  );
}
