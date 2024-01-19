import { styles } from "../../../styles/style";
import CoursePlayer from "../../../utils/CoursePlayer";
import { CircularProgress } from "@mui/material";
import React, { FC } from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseData: any;
  handleCourseCreate: any;
  isLoading: boolean;
  isEditing?: boolean;
};

const CoursePreview: FC<Props> = ({
  courseData,
  handleCourseCreate,
  setActive,
  active,
  isLoading,
  isEditing = false,
}) => {
  const estimatedPrice = parseFloat(courseData?.estimatedPrice || 0);
  const price = parseFloat(courseData?.price || 0);

  const discountPercentage = ((estimatedPrice - price) / estimatedPrice) * 100;
  const discountPercentagePrice = discountPercentage?.toFixed(0);

  const prevButton = () => {
    setActive(active - 1);
  };
  const handleCourse = () => {
    !isLoading ? handleCourseCreate() : null;
  };

  return (
    <div className="w-[90%] | m-auto py-5 mb-5">
      <div className="w-full relative">
        <div className="w-full mt-20">
          <CoursePlayer
            title={courseData?.title}
            videoUrl={courseData?.demoUrl}
          />
        </div>
        <div className="flex items-center gap-10 pt-5">
          <h1 className=" text-[25px]">
            {courseData?.price === "Free" ? "Free" : courseData?.price + "$"}
          </h1>
          {courseData?.estimatedPrice && (
            <div className="flex items-center ">
              <h5 className="pl-3 text-[20px]  line-through opacity-80">
                {courseData?.estimatedPrice + "$"}
              </h5>
              <h4 className="pl-5 text-[22px]">
                {`(${discountPercentagePrice}% Off)`}
              </h4>
            </div>
          )}
        </div>
        <div
          className={`${styles.button} !w-[180px] my-3 font-Poppins bg-[crimson] cursor-not-allowed`}
        >
          Buy Now
        </div>
        <div className="flex items-center">
          <input
            type="text"
            name=""
            id=""
            placeholder="Discount code..."
            className={`${styles.input} 1500px:!w-[50%] 1100px:w-[60%] ml-3 mt-0`}
          />
          <div
            className={`${styles.button} !w-[120px] my-3 ml-4 font-Poppins cursor-pointer`}
          >
            Apply
          </div>
        </div>
        <div className="w-full 800px:pr-5">
          <h1 className="text-[25px] font-Poppins font-[600]">
            {courseData?.name}
          </h1>
        </div>
        <div className="mt-3">
          <p className="pb-1">▪️ Source code included</p>
          <p className="pb-1">▪️ Full lifetime access</p>
          <p className="pb-1">▪️ Certificate of completion</p>
          <p className="pb-3 800px:pb-1">▪️ Premium Support</p>
        </div>
        <div className="mt-3">
          {courseData?.benefits && (
            <>
              <h2 className="text-xl font-semibold">
                What you will learn from this course?
              </h2>
              {courseData?.benefits?.map((item: any, index: number) => (
                <div
                  className="w-full flex 800px: items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoCheckmarkDoneOutline size={20} />
                  </div>
                  <p className="pl-2">{item.title}</p>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="mt-3">
          {courseData?.prerequisites && (
            <>
              <h2 className="text-xl font-semibold">
                What are the prerequisites for starting this course?
              </h2>
              {courseData?.prerequisites?.map((item: any, index: number) => (
                <div
                  className="w-full flex 800px: items-center py-2"
                  key={index}
                >
                  <div className="w-[15px] mr-1">
                    <IoCheckmarkDoneOutline size={20} />
                  </div>
                  <p className="pl-2">{item.title}</p>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="w-full mt-3">
          <h1 className="text-xl font-Poppins font-[600]">Course Details</h1>
          <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden">
            {courseData?.description}
          </p>
        </div>

        <div className="w-full flex items-center justify-between">
          <div
            className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
            onClick={() => prevButton()}
          >
            Prev
          </div>

          <button
            disabled={isLoading}
            className={`${
              isLoading ? "!cursor-not-allowed " : "cursor-pointer"
            }w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 `}
            onClick={() => handleCourse()}
          >
            {isLoading ? (
              <CircularProgress
                sx={{
                  color: "#ffffff",
                }}
                size={20}
              />
            ) : (
              <>{isEditing ? "Save Edit" : "Create"}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoursePreview;
