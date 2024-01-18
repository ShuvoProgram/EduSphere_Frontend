"use client";
import Achievement from "../components/Home/Achivement/Achivement";
import Banner from "../components/Home/Banner/Banner";
import Categories from "../components/Home/Categories/Categories";
import Companies from "../components/Home/Companies/Companies";
import Courses from "../components/Home/Course/Courses";
import Partners from "../components/Home/Partners/Partners";
import Testimonial from "../components/Home/Testimonial/Testimonial";

import Meta from "../utils/Meta";

const Page = () => {
  return (
    <div>
      <Meta
        title="EduSphere"
        description="Discover EduSphere: Your Key to Convenient and Engaging Online Learning. Explore a Diverse Range of Courses and Empower Your Educational Journey with Our User-Friendly, Modern eLearning Platform."
        keywords="Online Learning, E-Learning, Skill Development, Programming, ReactJs, NodeJs, MERN"
      />
      <Banner/>
      <Companies/>
      <Categories/>
      <Courses/>
      <Achievement/>
      <Testimonial/>
      <Partners/>
    </div>
  );
};

export default Page;