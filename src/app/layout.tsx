import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import { Providers } from "./providers/provider";
import { AuthModalProvider } from "./components/UI/AuthModal";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LuxeGems",
  description: "Ювелирные украшения",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <AuthModalProvider>
            <Header />
            {children}
          </AuthModalProvider>
        </Providers>
      </body>
    </html>
  );
}
