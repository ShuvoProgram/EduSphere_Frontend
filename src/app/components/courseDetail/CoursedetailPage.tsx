import { useGetCourseDetailsQuery } from "../../redux/api/courses/coursesApi";
import { useParams } from "next/navigation";
import React from "react";
import CourseDetails from "./courseDetail/CourseDetails";
import Loader from "../loader/Loader";

const CoursedetailPage = () => {
  const { id }: any = useParams();
  const { data, isLoading } = useGetCourseDetailsQuery(id);

  return (
    <div>{isLoading ? <Loader /> : <CourseDetails data={data?.data} />}</div>
  );
};

export default CoursedetailPage;
