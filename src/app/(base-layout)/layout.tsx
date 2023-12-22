"use client";
import Header from "../components/Header";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <div>
      </div>
    </>
  );
}
