import React from 'react';
import { motion } from 'framer-motion';
import { useGetUserAllCourseQuery } from '@/app/redux/api/courses/coursesApi';
import { CourseCard2 } from './CourseCard2';
import CardSkeleton from '../../CardSkeleton/CardSkeleton';
import CourseCard from './CourseCard';

function Courses() {
  const { data, isLoading, isSuccess } = useGetUserAllCourseQuery(undefined);
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, type: 'spring', duration: 1 },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div className="courses-area pt-20 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 w-[98%] 800px:w-[98%] m-auto">
      <div className="container mx-auto">
        <motion.div
          className="section-title text-center mb-12 md:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          variants={variants}
        >
          <span className="font-semibold text-xs text-[#208486] uppercase">Popular Courses</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
            Expand Your Career Opportunity {" "}
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
          With Our Courses
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[25px] lg:grid-cols-4 1500px:grid-cols-4 1500px:gap-[35px] mb-12 border-0">
         {/* Check if data is loading */}
         {isLoading ? (
            // Display skeleton cards while loading
            Array.from({ length: 6 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))
          ) : (
            // Display actual course cards when data is available
            data?.data.map((course: any) => (
              <CourseCard2 key={course._id} course={course} />
            ))
          )}
      </div>
      </div>
    </div>
  );
}

export default Courses;
