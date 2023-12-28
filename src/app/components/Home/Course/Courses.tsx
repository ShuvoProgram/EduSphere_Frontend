import { useGetUserAllCourseQuery } from "../../../redux/api/courses/coursesApi";
import CourseCard from "./CourseCard";
import { useTheme } from "next-themes";
import { CourseCard2 } from "./CourseCard2";

const Courses = () => {
  const { data, isLoading, isSuccess } = useGetUserAllCourseQuery(undefined);
  const { theme } = useTheme();

  return (
    <div className="w-[90%] 800px:w-[80%] m-auto">
      <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white text-black font-[700] tracking-tight 800px:!leading-[60px]">
        Expand Your Career{" "}
        <span
          className={`${
            theme === "dark" ? "text-gradient-dark " : "text-gradient "
          }`}
        >
          Opportunity
        </span>
        <br />
        With Diverse Course Offerings.
      </h1>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
        {data?.data.map((course: any) => (
          <CourseCard2 key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
