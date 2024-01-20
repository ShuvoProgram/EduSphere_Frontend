"use client";
import { useLoadUserQuery } from "../../../redux/api/apiSlice";
import CourseAccess from "../../../components/course-access/CourseAccess";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import Loader from "../../../components/loader/Loader";
import ProtectedRoutes from "../../../components/protectedRoutes/ProtectedRoutes";
import Meta from "../../../utils/Meta";

const Page = ({ params }: any) => {
  const { data, isLoading, error } = useLoadUserQuery(undefined);

  useEffect(() => {
    if (data) {
      const isPurchased = data?.data?.courses.find(
        (course: any) => course?.courseId?._id === params?.id
      );
      if (!isPurchased) {
        redirect("/");
      }
    }

    if (error) {
      redirect("/");
    }
  }, [data, params, error]);

  return (
    <ProtectedRoutes>
      <div>
        <Meta title="Course Access - EduSphere" />
        {isLoading ? (
          <Loader />
        ) : (
          <CourseAccess id={params?.id} userData={data?.data} />
        )}
      </div>
    </ProtectedRoutes>
  );
};

export default Page;
