import type { Metadata } from "next";
import { Geist, Geist_Mono, Lobster } from "next/font/google";
import "@/assets/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lobster = Lobster({
  variable: "--font-lobster",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uzbek Pie Quiz",
  description: "Discover your inner samsa!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${lobster.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
