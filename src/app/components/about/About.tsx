"use client";
import { useTheme } from "next-themes";
import "./About.css";

const About = () => {
  const { theme } = useTheme();

  return (
    <div className="w-[90%] 800px:w-[80%]  mx-auto mt-12 min-h-[70vh]">
      <h1 className="capitalize 800px:text-[40px] text-[25px] text-black dark:text-white font-[500] font-Poppins text-center py-2">
        What is{" "}
        <span
          className={`${
            theme === "dark" ? "text-gradient-dark" : "text-gradient"
          }`}
        >
          Learnify
        </span>
      </h1>
      <div className="mt-10 dark:text-white text-xl text-black">
        <p>
          Are you ready to elevate your programming skills to new heights? Look
          no further than Learnify, the premier programming community dedicated
          to assisting aspiring programmers in achieving their goals and
          unlocking their full potential.
        </p>
        <br />
        <p>
          As the founder and CEO of Learnify, I understand the challenges that
          come with learning and advancing in the programming industry.
          That&apos;s why I established Learnify – to offer aspiring programmers
          the resources and support necessary for success.
        </p>
        <br />
        <p>
          Our YouTube channel is a rich source of informative videos covering
          everything from programming fundamentals to advanced techniques.
          However, this is just the beginning. Our reasonably priced courses are
          crafted to provide you with a high-quality education, enabling you to
          thrive in the industry without straining your budget.
        </p>
        <br />
        <p>
          At Learnify, we believe that financial constraints should never hinder
          anyone from pursuing their dreams. Hence, our courses are affordably
          priced, ensuring accessibility to tools and knowledge for everyone.
        </p>
        <br />
        <p>
          But Learnify is more than just a community - we&apos;re a supportive
          family. Our community of like-minded individuals is committed to
          assisting you at every stage of your programming journey, whether
          you&apos;re just starting out or aiming to advance your skills
          further.
        </p>
        <br />
        <p>
          With Learnify by your side, there are no barriers between you and your
          dream job. Our courses and community offer the guidance, support, and
          motivation needed to unleash your full potential and become a
          proficient programmer.
        </p>
        <br />
        <p>
          So, what are you waiting for? Join the Learnify family today, and
          let&apos;s conquer the programming industry together! With our
          reasonably priced courses, informative videos, and supportive
          community, the possibilities are limitless.
        </p>
      </div>
    </div>
  );
};

export default About;
