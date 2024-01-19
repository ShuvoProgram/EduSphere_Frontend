"use client";
import AllCourse from "@/app/components/admin/course/AllCourse";
import Meta from "../../../utils/Meta";

const page = () => {
  return (
    <div>
      <Meta title="Courses - EduSphere" />
      <AllCourse />
    </div>
  );
};

export default page;
