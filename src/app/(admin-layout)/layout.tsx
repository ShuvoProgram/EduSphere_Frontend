"use client";
import { ReactNode } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardHeader from "../components/admin/DashboardHeader";
import AdminRoutes from "../components/protectedRoutes/AdminRoutes";
import Footer from "../components/Home/footer/Footer";

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <AdminRoutes>
        <div className="flex min-h-screen">
          <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar />
          </div>
          <div className="w-[84%] ">
            <DashboardHeader />
            {children}
            <Footer />
          </div>
        </div>
      </AdminRoutes>
    </>
  );
}