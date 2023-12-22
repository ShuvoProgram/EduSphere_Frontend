import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  activeItem: number;
  isMobile: boolean;
  setActiveItem: (index: number) => void;
};

export const navItemsData = [
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];
const NavItems = ({ activeItem, isMobile, setActiveItem }: Props) => {
  const pathname = usePathname();
  return (
    <>
      <div className="hidden 800px:flex">
        {navItemsData.map((nav, index) => (
          <Link href={`${nav.url}`} key={index}>
            <span
              onClick={() => setActiveItem(index)}
              className={` ${
                pathname === nav.url
                  ? "text-[#37a39a]"
                  : "text-black dark:text-white"
              } text-[16px] px-6 font-Poppins font-[500]`}
            >
              {nav.name}
            </span>
          </Link>
        ))}
      </div>

      {isMobile && (
        <div className=" mt-5 800px:hidden">
          <div className="w-full text-center py-6">
            <Link
              href={"/"}
              passHref
              className="text-[25px] font-Poppins font-[500] text-black dark:text-white"
            >
              Learnify
            </Link>
          </div>
          {navItemsData.map((nav, index) => (
            <Link href={`${nav.url}`} key={index}>
              <span
                onClick={() => setActiveItem(index)}
                className={`${
                  pathname === nav.url
                    ? "text-[#37a39a]"
                    : "text-black dark:text-white"
                } text-[18px] py-5 px-6 block font-Poppins font-[500]`}
              >
                {nav.name}
              </span>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
