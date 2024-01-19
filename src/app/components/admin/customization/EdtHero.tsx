/* eslint-disable @next/next/no-img-element */
import { CircularProgress } from "@mui/material";
import {
  useEditBannerMutation,
  useGetHeroDataQuery,
} from "../../../redux/api/layout/layoutApi";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useTheme } from "next-themes";
import { styles } from "../../../styles/style";

type error = {
  data: {
    message: string;
  };
};

const EditHero = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const [isEdited, setIsEdited] = useState(false);

  const { data } = useGetHeroDataQuery("banner", {
    refetchOnMountOrArgChange: true,
  });
  const originalTitle = data?.data?.banner.title;
  const originalSubTitle = data?.data?.banner?.subTitle;

  useEffect(() => {
    if (data) {
      setTitle(data.data.banner.title);
      setSubTitle(data.data.banner.subTitle);
    }
  }, [data]);

  const [editBanner, { isLoading, error, isSuccess }] = useEditBannerMutation();

  useEffect(() => {
    if (isSuccess) setIsEdited(false);
    const errorData = error as error;
    if (error) toast.error(errorData.data.message);
  }, [isSuccess, setIsEdited, error]);

  const handleSave = async () => {
    const data = {
      type: "banner",
      bannerTitle: title,
      bannerSubTitle: subTitle,
    };
    const response = (await editBanner(data)) as any;
    if (response.data) toast.success("Hero details updated");
  };
  const { theme } = useTheme();

  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center min-h-[65vh] 800px:min-h-[87vh] relative mt-[70px]">
        <div
          className={`bg-shape bg-gradient-to-t ${
            theme === "dark"
              ? "from-[#101725] via-[#44f5e6a2] to-[#101725]"
              : "from-white via-[#44f5e6a2] to-white"
          } blur-2xl hidden 800px:block`}
        ></div>
        <div className="w-full 800px:w-[55%] flex flex-col item-center ">
          <textarea
            className=" resize-none  px-3 w-full  bg-transparent capitalize font-[700] text-[25px] leading-[35px] sm:text-3xl lg:text-5xl tracking-tight text-center dark:text-white text-black font-Poppins 800px:!leading-[60px] "
            placeholder="Improve Your Online Learning Experience Better Instantly"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              setIsEdited(e.target.value !== originalTitle ? true : false);
            }}
            rows={3}
          ></textarea>

          <textarea
            value={subTitle}
            onChange={(e) => {
              setSubTitle(e.target.value);
              setIsEdited(e.target.value !== originalSubTitle ? true : false);
            }}
            placeholder="We have 40k+ Online courses & 500K+ Online registered students. Find your desired courses from them."
            className="w-full bg-transparent px-4 resize-none font-poppins 800px:text-[22px] 800px:leading-[32px] text-[16px] leading-[23px] font-normal text-[#003A55]  dark:text-[#A3b3BC] text-center mt-5 800px:mt-0"
          ></textarea>
        </div>
        <button
          disabled={!isEdited}
          onClick={handleSave}
          className={`${
            isEdited
              ? "bg-[#37a39a] cursor-pointer"
              : "bg-gray-400 cursor-not-allowed"
          } ${styles.button} !w-[180px]  text-white`}
        >
          {isLoading ? (
            <CircularProgress
              sx={{
                color: "#ffffff",
              }}
              size={20}
            />
          ) : (
            "Save"
          )}
        </button>
      </div>
    </>
  );
};

export default EditHero;
