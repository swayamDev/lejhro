import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Statistical Approaches for Balancing Data Privacy & Innovation | Lejhro",
  description:
    "Stay ahead with the advancements that have the potential to revolutionize industries.",
  keywords:
    "cloud computing technologies, personal data, foster innovation, data privacy, exponential growth, big data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
