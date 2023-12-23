"use client";
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
    </div>
  );
};

export default Page;