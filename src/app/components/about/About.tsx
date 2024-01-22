import Link from 'next/link';
import React from 'react';
import { FaPlay } from "react-icons/fa";
import PageBanner from '../PageBanner';

function About() {
  return (
    <div className="transform-area pt-16 pb-20">

      <div className="container ml-4 mr-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <div className="transform-conetnt">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                We Are <span className="text-[#37a39a]">EduSphere!</span> The Best Online Learning Platform
              </h2>
              <p className="text-gray-600">
                Instructors from around the world teach millions of students on Edmy. We provide the tools and skills to teach what you love. And you can also achieve your goal.
              </p>

              <div className="single-transform flex items-center mt-6">
              <div className="transform-video-img !flex-shrink-0">
                  <img
                    src="/assets/images/courses/course-16.jpg"
                    alt="about"
                    className="w-24 md:w-32 h-24 md:h-32 object-cover rounded-lg"
                  />
                  <Link href="/learning/my-courses">
                    <span className="video-btns popup-youtube cursor-pointer">
                    <FaPlay className="ri-play-circle-fill text-white"/>
                    </span>
                  </Link>
                </div>

                <div className="transform-video-content flex-grow-1 ml-4">
                  <h3>
                    <Link href="/learning/my-courses">
                      <span className="popup-youtube cursor-pointer">
                        Watch Video From the Community How Edmy Change Their Life
                      </span>
                    </Link>
                  </h3>
                  <ul className="text-gray-600">
                    <li>My Courses</li>
                  </ul>
                </div>
              </div>

              <Link href="/courses">
                <span className="default-btn mt-6 bg-[#37a39a] text-white py-2 px-4 rounded-full inline-block">
                  Find Out How
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 wow animate__animated animate__fadeInRight delay-200">
            <div className="transform-img wow animate__animated animate__fadeInRight delay-800">
              <img
                src="/assets/images/transform-img-2.png"
                alt="about"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] 800px:w-[80%]  mx-auto mt-12 min-h-[70vh]'>
      <div className="mt-10 dark:text-white text-xl text-black">
        <p>
          Are you ready to elevate your programming skills to new heights? Look
          no further than EduSphere, the premier programming community dedicated
          to assisting aspiring programmers in achieving their goals and
          unlocking their full potential.
        </p>
        <br />
        <p>
          As the founder and CEO of EduSphere, I understand the challenges that
          come with learning and advancing in the programming industry.
          That&apos;s why I established EduSphere – to offer aspiring programmers
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
          At EduSphere, we believe that financial constraints should never hinder
          anyone from pursuing their dreams. Hence, our courses are affordably
          priced, ensuring accessibility to tools and knowledge for everyone.
        </p>
        <br />
        <p>
          But EduSphere is more than just a community - we&apos;re a supportive
          family. Our community of like-minded individuals is committed to
          assisting you at every stage of your programming journey, whether
          you&apos;re just starting out or aiming to advance your skills
          further.
        </p>
        <br />
        <p>
          With EduSphere by your side, there are no barriers between you and your
          dream job. Our courses and community offer the guidance, support, and
          motivation needed to unleash your full potential and become a
          proficient programmer.
        </p>
        <br />
        <p>
          So, what are you waiting for? Join the EduSphere family today, and
          let&apos;s conquer the programming industry together! With our
          reasonably priced courses, informative videos, and supportive
          community, the possibilities are limitless.
        </p>
      </div>
      </div>
    </div>
  );
}

export default About;
