"use client";
import Header from "../components/Header";
import { ReactNode } from "react";
import Footer from "../components/Home/footer/Footer";
import FooterDemo from "../components/Home/footer/FooterDemo";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <div>
        {/* <Footer/> */}
        <FooterDemo/>
      </div>
    </>
  );
}
