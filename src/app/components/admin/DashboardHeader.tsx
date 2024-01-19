"use client";
import ThemeSwitcher from "../../utils/ThemeSwitcher";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import {
  useGetAllNotificationsQuery,
  useUpdateNotificationStatusMutation,
} from "../../redux/api/notifications/notificationApi";
import { format } from "date-fns";

const DashboardHeader = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const { data }: any = useGetAllNotificationsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 1000,
  });
  const [updateNotificationStatus] = useUpdateNotificationStatusMutation();

  useEffect(() => {
    const unreadNotification = data?.data?.filter(
      (notification: any) => notification.status === "unread"
    );
    setNotifications(unreadNotification);
  }, [data]);

  const hanndleRead = async (id: any) => {
    await updateNotificationStatus(id);
  };

  const notificationRef = useRef(null);
  const notificationIconRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        notificationIconRef.current &&
        (notificationIconRef.current as HTMLElement).contains(
          event.target as Node
        )
      ) {
        setOpen(!open);
      }
      if (
        notificationRef.current &&
        !(notificationRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="w-full flex items-center justify-end p-6 fixed top-0 right-0 z-[39]  bg-white dark:bg-[#111C43]">
      <ThemeSwitcher />
      <div ref={notificationIconRef} className="relative cursor-pointer m-2">
        <IoMdNotificationsOutline className="text-2xl cursor-pointer dark:text-white text-black" />
        <span className="absolute -top-2 -right-2 bg-[#3ccba0] rounded-full w-[20px] h-[20px] text-[12px] flex items-center justify-center text-white">
          {notifications?.length}
        </span>
      </div>
      {open && (
        <div
          ref={notificationRef}
          className="w-[350px] h-[50vh] dark:bg-[#111C43] bg-white shadow-xl absolute top-16 z-[100000000] rounded overflow-y-scroll overflow-x-hidden"
        >
          <h5 className="text-center text-[20px] font-Poppins text-black dark:text-white p-3 sticky top-0 w-full bg-white dark:bg-slate-600">
            Notifications
          </h5>
          {notifications.length > 0 &&
            notifications?.map((notification: any) => (
              <div
                key={notification?._id}
                className="dark:bg-[#2d3a4ea1] bg-[#00000013] font-Poppins border-b dark:border-b-[#ffffff47] border-b-[#0000000f] mt-1"
              >
                <div className="w-full flex items-center justify-between p-2">
                  <p className="text-black dark:text-white">
                    {notification?.title}
                  </p>
                  <p
                    onClick={() => hanndleRead(notification?._id)}
                    className="text-black dark:text-white cursor-pointer"
                  >
                    Mark as read
                  </p>
                </div>
                <p className="px-2 text-black dark:text-white">
                  {notification?.message}
                </p>
                <p className="p-2 text-gray-400 dark:text-white text-[14px]">
                  {format(new Date(notification?.createdAt), "dd MMM yyyy")}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DashboardHeader;
