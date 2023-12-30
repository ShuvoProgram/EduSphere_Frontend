import StarRating from "../../../../utils/StarRating";
import { format } from "date-fns";
import React from "react";

const CourseReviews = ({ reviews }: any) => {
  const reversedReviews = reviews ? [...reviews].reverse() : [];
  return (
    <div>
      {reversedReviews?.map((review: any, index: number) => (
        <div
          className=" p-4  w-full h-max dark:bg-slate-500 dark:bg-opacity-20 border border-[#00000028] dark:border-[#ffffff1d] backdrop-blur shadow-[bg-slate-700] rounded-lg shadow-inner mt-1"
          key={index}
        >
          <div className="flex">
            <div className="w-[50px] h-[50px]">
              <div className="w-[50px] h-[50px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer">
                <h1 className="uppercase text-[18px] text-black dark:text-white">
                  {review?.user?.name ? review.user.name.slice(0, 2) : ""}
                </h1>
              </div>
            </div>
            <div className=" pl-2 ">
              <div className="flex flex-col">
                <p className="text-black dark:text-white">
                  {review?.user?.name}
                </p>
                <StarRating ratings={review?.rating} length={reviews?.length} />
              </div>
              <p className="text-black dark:text-white">{review?.comment}</p>
              <small className="text-[#000000d1] dark:text-[#ffffff83]">
                {format(new Date(review?.createdAt), "dd MMM yyyy")}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseReviews;
