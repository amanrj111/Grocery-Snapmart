import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Snap-Mart | 10 minutes grocery delivery app",
  description: "10 minutes Grocery Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
