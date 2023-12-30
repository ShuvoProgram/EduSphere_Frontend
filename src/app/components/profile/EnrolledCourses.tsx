import CourseCard from "../home/course/CourseCard";

const EnrolledCourses = ({ user }: any) => {
  return (
    <div className="grid grid-cols-1 800px:grid-cols-3 gap-10 px-4 ">
      {user?.courses?.map((course: any) => (
        <CourseCard
          key={course._id}
          course={course?.courseId}
          isProfile={true}
        />
      ))}
    </div>
  );
};

export default EnrolledCourses;
