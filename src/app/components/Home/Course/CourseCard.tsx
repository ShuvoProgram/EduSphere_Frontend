import StarRating from "@/app/utils/StarRating";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineUnorderedList } from "react-icons/ai";
type Props = {
  course: any;
  isProfile?: boolean;
};
const CourseCard = ({ course, isProfile }: Props) => {
  return (
    <Link
      href={`${
        isProfile ? `/course-access/${course?._id}` : `/course/${course?._id}`
      }`}
    >
      <div
        className="w-full min-h-[30vh] dark:bg-slate-500 dark:bg-opacity-20 backdrop-blur border dark:border-[#ffffff1d] border-[#00000015] dark:shadow-[bg-slate-700] rounded-lg p-3 shadow-sm 
        dark:shadow-inner"
      >
        <div className="relative">
          <Image
            src={course?.thumbnail?.url}
            width={500}
            height={500}
            className="rounded w-full h-44"
            alt=""
          />
          <span className="absolute top-2 right-0 rounded-sm py-[1px] px-2 text-white bg-[#090D16] text-sm">
            {course?.level}
          </span>
        </div>
        <br />
        <h1 className="font-Poppins text-black font-[500] text-[16px] dark:text-[#fff] capitalize">
          {course?.name}
        </h1>
        <div className="mt-1">
          <StarRating ratings={course?.ratings} />
        </div>
        <div className={`w-full flex items-center justify-between  pt-3`}>
          {!isProfile && (
            <div className="flex items-center">
              <h3
                className={`text-black font-medium ${
                  course?.price > 0 ? "" : ""
                } dark:text-[#fff]`}
              >
                {course?.price > 0 ? `${course?.price}$` : "Free"}
              </h3>
              <h5 className="pl-3 text-[14px]  line-through opacity-80 text-black dark:text-[#fff]">
                {course?.estimatedPrice}$
              </h5>
            </div>
          )}
          <div className="flex items-center ">
            <AiOutlineUnorderedList
              size={20}
              className="dark:text-white text-black"
            />
            <h5 className="pl-2 text-black dark:text-[#fff]">
              {course?.courseData?.length} Lectures
            </h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
