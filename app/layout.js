import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "ShortVideo AI",
  description: "An AI-Powered Short Video Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Provider>
          {children}
          <Toaster richColors />
        </Provider>
      </body>
    </html>
  );
}
