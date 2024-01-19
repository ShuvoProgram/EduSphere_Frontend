"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Box, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../redux/hook";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import avatarDefault from "../../../public/assets/avatar.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import WebIcon from "@mui/icons-material/Web";
import QuizIcon from "@mui/icons-material/Quiz";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useLazyLogoutQuery } from "../../redux/api/auth/authApi";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";

interface ItemProps {
  title: string;
  to: string;
  icon: JSX.Element;
  selected: string;
  setSelected: (value: string) => void;
  path?: string;
}

const Item = ({ title, to, icon, selected, setSelected }: ItemProps) => {
  const activePath = usePathname();
  return (
    <Link href={to} className={`${activePath === to ? "text-[#37a39a]" : ""}`}>
      <MenuItem
        active={selected === title}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography className="text-[16px] font-Poppins">{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const AdminSidebar = () => {
  const { user } = useAppSelector((state: any) => state.auth);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const [logout, { isLoading, error, isSuccess }] = useLazyLogoutQuery();
  const { data } = useSession();

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
    <Box
      sx={{
        "&.pro-sidebar-inner": {
          background: `${
            theme === "dark" ? "#111C43 !important" : "#fff !important"
          }`,
        },

        "&.pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },

        "&.pro-inner-item:hover": {
          color: "#868dfb !important",
        },

        "&.pro-menu-item.active": {
          color: "#6870fa !important",
        },
        "&.pro-inner-item": {
          padding: "px 35px 5px 20px !important",
          opacity: 1,
        },

        "&.pro-menu-item": {
          color: `${theme !== "dark" ? "#000" : ""}`,
        },
      }}
      className="bg-white dark:bg-[#111C43] z-[1000]"
    >
      <Sidebar
        collapsed={isCollapsed}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: isCollapsed ? "0%" : "16%",
          zIndex: 1000,
          backgroundColor: `${theme === "dark" ? "" : ""}`,
        }}
      >
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <ArrowForwardIosIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Link href="/">
                  <h3 className="text-[25px] font-Poppins uppercase  text-black">
                    Learnify
                  </h3>
                </Link>
                <IconButton
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="inline-block"
                >
                  <ArrowBackIosIcon className="text-black dark:text-[#ffffffc1]" />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <Image
                  alt="profile-user"
                  src={user.avatar ? user.avatar.url : avatarDefault}
                  width={80}
                  height={80}
                  className="w-[80px] h-[80px] cursor-pointer border-[3px] border-[#37a39a]   rounded-full"
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  className="text-[20px] text-black "
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user?.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ m: "10px 0 0 0" }}
                  className="text-[20px] text-black  capitalize"
                >
                  {user?.role}
                </Typography>
              </Box>
            </Box>
          )}

          <Box>
            <Item
              title="Dashboard"
              to="/admin"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="text-[18px] text-black dark:text-[#ffffffc1] capitalize font-[400]"
              >
                Data
              </Typography>
            )}

            <Item
              title="Users"
              to="/admin/users"
              icon={<GroupsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices"
              to="/admin/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="text-[18px] text-black dark:text-[#ffffffc1] capitalize font-[400]"
              >
                Content
              </Typography>
            )}

            <Item
              title="Create Course"
              to="/admin/create-course"
              icon={<VideoCallIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Live Courses"
              to="/admin/courses"
              icon={<OndemandVideoIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="text-[18px] text-black dark:text-[#ffffffc1] capitalize font-[400]"
              >
                Customization
              </Typography>
            )}

            <Item
              title="Hero"
              to="/admin/hero"
              icon={<WebIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="FAQ"
              to="/admin/faq"
              icon={<QuizIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="h5"
                sx={{ m: "15px 0 5px 25px" }}
                className="text-[18px] text-black dark:text-[#ffffffc1] capitalize font-[400]"
              >
                Controllers
              </Typography>
            )}
            <Item
              title="Manage Team"
              to="/admin/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              className="text-[18px] text-black dark:text-[#ffffffc1] capitalize font-[400]"
              sx={{ m: "15px 0 5px 20px" }}
            >
              {!isCollapsed && "Analytics"}
            </Typography>
            <Item
              title="Courses Analytics"
              to="/admin/courses-analytics"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Orders Analytics"
              to="/admin/orders-analytics"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Users Analytics"
              to="/admin/users-analytics"
              icon={<ManageHistoryIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {!isCollapsed && (
              <Typography
                variant="h6"
                className="text-[18px] text-black dark:text-[#ffffffc1] capitalize font-[400]"
                sx={{ margin: "15px 0 5px 20px" }}
              >
                Extras
              </Typography>
            )}

            <div onClick={logoutHandler}>
              <Item
                title="Logout"
                to="/"
                icon={<ExitToAppIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </div>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AdminSidebar;
