import React from 'react';
import Link from 'next/link';
import { FaPlay } from "react-icons/fa";

function Transform() {
  return (
    <div className="transform-area pb-16 md:pb-24 lg:pb-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 wow animate__animated animate__fadeInLeft delay-200 ml-4">
            <div className="transform-conetnt wow animate__animated animate__fadeInLeft delay-800">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Transform Your Life Through Online Education
              </h2>
              <p className="text-gray-700">
                Instructors from around the world teach millions of students on Edmy. We provide the tools and skills to teach what you love. And you can also achieve your goal.
              </p>

              <div className="single-transform flex items-center mt-4">
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
                  <ul className="text-gray-700">
                    <li>My Courses</li>
                  </ul>
                </div>
              </div>

              <Link href="/courses">
                <span className="inline-block mt-4 px-6 py-3 bg-[#208486] text-white rounded-md transition duration-300 ease-in-out hover:bg-[#449c9d] cursor-pointer">
                  Find Out How
                </span>
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 wow animate__animated animate__fadeInRight delay-200 mt-8 md:mt-0">
            <div className="transform-img wow animate__animated animate__fadeInRight delay-800">
              <img
                src="/assets/images/transform-img.png"
                alt="transform"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transform;