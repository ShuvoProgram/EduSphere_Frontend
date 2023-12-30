"use client";
import React, { useState, useEffect } from "react";
import SideBarProfile from "./SidebarProfile";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import EnrolledCourses from "./EnrolledCourses";
import { useLazyLogoutQuery } from "../../redux/api/auth/authApi";
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

const Profile = ({ user }: { user: any }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);

  const [logout, { isSuccess }] = useLazyLogoutQuery();
  const { data } = useSession();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }

  const logoutHandler = async () => {
    if (data) {
      await signOut({ redirect: false });
      await logout(1);
      return localStorage.removeItem("hasSocial");
    }
    logout(1);
  };
  useEffect(() => {
    if (isSuccess) {
      toast.success("Logged out successfully");
      redirect("/");
    }
  }, [isSuccess]);

  return (
    <div className="w-[85%] flex mx-auto">
      <div
        className={`w-[60px] 800px:w-[310px] h-[450px] bg-white dark:bg-slate-900 bg-opacity-90 border dark:border-[#ffffff1d] border-[#00000014] rounded-[5px]  shadow-sm mt-[80px] mb-[80px] sticky ${
          scroll ? "top-[120px]" : "top-[30px]"
        } left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logoutHandler={logoutHandler}
        />
      </div>
      {active === 1 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ProfileInfo avatar={avatar} user={user} />
        </div>
      )}
      {active === 2 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <ChangePassword />
        </div>
      )}
      {active === 3 && (
        <div className="w-full h-full bg-transparent mt-[80px]">
          <EnrolledCourses user={user} />
        </div>
      )}
    </div>
  );
};

export default Profile;
