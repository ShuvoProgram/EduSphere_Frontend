"use client";
import Companies from "../components/Home/Companies/Companies";
import Courses from "../components/Home/Course/Courses";
import HomeHero from "../components/Home/Hero/hero";
import Meta from "../utils/Meta";

const Page = () => {
  return (
    <div>
      <Meta
        title="Learnify"
        description="Discover Learnify: Your Key to Convenient and Engaging Online Learning. Explore a Diverse Range of Courses and Empower Your Educational Journey with Our User-Friendly, Modern eLearning Platform."
        keywords="Online Learning, E-Learning, Skill Development, Programming, ReactJs, NodeJs, MERN"
      />
      <HomeHero/>
      {/* <Hero2/> */}
      <Companies/>
      <Courses/>
    </div>
  );
};

export default Page;