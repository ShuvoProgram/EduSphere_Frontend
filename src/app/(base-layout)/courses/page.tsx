"use client";

import { useGetUserAllCourseQuery } from "../../redux/api/courses/coursesApi";
import Loader from "../../components/loader/Loader";
import Meta from "../../utils/Meta";
import { CourseCard2 } from "@/app/components/Home/Course/CourseCard2";
import PageBanner from "@/app/components/PageBanner";

const Page = () => {
  const { data, isLoading, isSuccess } = useGetUserAllCourseQuery(undefined);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Meta title="Courses - EduSphere" />
          <PageBanner
          pageTitle="Courses"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Courses"
          />
          <div
            className="w-[100%] 800px:w-[100%] mx-auto mt-12 mb-48 min-h-[70vh]"
            id="faq"
          >
            
           
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[25px] lg:grid-cols-4 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
              {data?.data?.map((course: any) => (
                <CourseCard2 key={course?._id} course={course} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Page;
