import { useGetCourseContentQuery } from "../../redux/api/courses/coursesApi";
import CourseContentMedia from "./courseContentMedia/CourseContentMedia";

import { useState } from "react";
import Loader from "../loader/Loader";
import CourseOverview from "../courseDetail/courseDetail/courseOverview/CourseOverview";

const CourseAccess = ({ id, userData }: any) => {
  const { data, isLoading, error } = useGetCourseContentQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full grid 800px:grid-cols-10 ">
          <div className="col-span-7">
            <CourseContentMedia
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
              data={data?.data?.courseData}
              id={id}
              user={userData}
              reviews={data?.data?.reviews}
            />
          </div>
          <div className="800px:col-span-3  col-span-10">
            <CourseOverview
              activeVideo={activeVideo}
              setActiveVideo={setActiveVideo}
              courseData={data?.data?.courseData}
              courseAccessPage={true}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CourseAccess;
