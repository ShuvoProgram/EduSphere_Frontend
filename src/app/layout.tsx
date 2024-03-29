"use client";
import "./globals.css";
import "./responsive.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import LoaderProvider from "./LoaderProvider";
import { ReactNode } from "react";
import ReduxProvider from "./ReduxProvider";
import "swiper/css";
import "swiper/css/bundle";

type Props = {
  children: ReactNode;
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({ children }: Props) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className={`${josefin.variable} !bg-white bg-no-repeat duration-300`}
        >
          <SessionProvider>

            <ThemeProvider attribute="class" enableSystem>
                <LoaderProvider>{children}</LoaderProvider>
                <Toaster />
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
