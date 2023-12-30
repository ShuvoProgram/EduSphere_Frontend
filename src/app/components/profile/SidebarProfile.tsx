import Image from "next/image";
import avatarDefault from "../../../public/assets/avatar.png";
import { RiLockPasswordLine } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from "next/link";
type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logoutHandler: () => void;
};

const SideBarProfile = ({
  user,
  active,
  avatar,
  setActive,
  logoutHandler,
}: Props) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? " bg-slate-100 dark:bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          width={30}
          height={30}
          src={
            user.avatar || avatar ? user?.avatar.url || avatar : avatarDefault
          }
          alt=""
          className="w-[20px] h-[20px] 800px:w-[32px] 800px:h-[32px] cursor-pointer rounded-full"
        />
        <h5 className="pl-2 800px:block hidden font-Poppins dark:text-white text-black ">
          My account
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer text-gray-400 dark:text-white ${
          active === 2 ? "dark:bg-slate-800 bg-slate-100" : "bg-transparent"
        }`}
        onClick={() => setActive(2)}
      >
        <RiLockPasswordLine size={20} />
        <h5 className="pl-2  800px:block hidden dark:text-white text-black">
          Change Password
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer text-gray-400 dark:text-white  ${
          active === 3 ? "dark:bg-slate-800 bg-slate-100" : "bg-transparent"
        }`}
        onClick={() => setActive(3)}
      >
        <SiCoursera size={20} />
        <h5 className="pl-2  800px:block hidden dark:text-white text-black">
          Enrolled Courses
        </h5>
      </div>
      {user.role === "admin" && (
        <Link
          href={"/admin"}
          className={`w-full flex items-center px-3 py-4 cursor-pointer text-gray-400 dark:text-white active:bg-slate-100  ${
            active === 4 ? "dark:bg-slate-800 bg-slate-100" : "bg-transparent"
          }`}
        >
          <MdOutlineAdminPanelSettings size={20} />
          <h5 className="pl-2  800px:block hidden dark:text-white text-black">
            Admin Dashboard
          </h5>
        </Link>
      )}
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer text-gray-400 dark:text-white ${
          active === 5 ? "dark:bg-slate-800 bg-slate-100" : "bg-transparent"
        }`}
        onClick={logoutHandler}
      >
        <AiOutlineLogout size={20} />
        <h5 className="pl-2  800px:block hidden dark:text-white text-black">
          Log Out
        </h5>
      </div>
    </div>
  );
};

export default SideBarProfile;
