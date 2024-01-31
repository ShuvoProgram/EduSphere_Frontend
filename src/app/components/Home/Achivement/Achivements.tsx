import React from 'react';
import Link from 'next/link';
import {FaGraduationCap} from 'react-icons/fa'
import { AiFillVideoCamera } from 'react-icons/ai';
import { FaPeopleCarry } from 'react-icons/fa'
import CountUp from 'react-countup';

function Achievements() {
  return (
    <div className="teaching-area pt-36 pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 ml-8">
            <div className="teaching-content mr-4 lg:mr-15">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Achievements
              </h2>
              <p className="text-gray-600">
              Leading Companies use the same courses to help their employees keep skill up
              </p>

              <div className="mt-6 lg:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <ul>
                    <li className="flex items-center justify-center mb-2">
                    <div className="p-4 bg-[#e9f8f3] rounded-xl">
                            <FaGraduationCap size={30} style={{ color:'#208486' }}/>
                        </div>
                        <div className='px-3'>
                        <CountUp delay={2} duration={10} end={100} className='text-2xl font-semibold'/>
                            {/* <h1 className='text-2xl font-semibold'>100 +</h1> */}
                            <p className='text-[#60737a]'>Instructors</p>
                        </div>
                    </li>
                    <li className="flex items-center justify-center">
                    <div className="p-4 bg-[#e9f8f3] rounded-xl">
                            <AiFillVideoCamera size={30} style={{ color:'#208486' }}/>
                        </div>
                        <div className='px-3'>
                        <CountUp delay={2} duration={10} end={10000} className='text-2xl font-semibold'/>
                            {/* <h1 className='text-2xl font-semibold'>10,000 +</h1> */}
                            <p className='text-[#60737a]'>Videos</p>
                        </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="teaching-list">
                    <li className="flex items-center justify-center mb-2">
                    <div className="p-4 bg-[#e9f8f3] rounded-xl">
                            <FaPeopleCarry size={30} style={{ color:'#208486' }}/>
                        </div>
                        <div className='px-3'>
                        <CountUp delay={2} duration={10} end={3000} className='text-2xl font-semibold'/>
                            {/* <h1 className='text-2xl font-semibold'>3000 +</h1> */}
                            <p className='text-[#60737a]'>Users</p>
                        </div>
                    </li>
                    <li className="flex items-center justify-center">
                    <div className="p-4 bg-[#e9f8f3] rounded-xl">
                            <FaGraduationCap size={30} style={{ color:'#208486' }}/>
                        </div>
                        <div className='px-3'>
                        <CountUp delay={2} duration={10} end={300} className='text-2xl font-semibold'/>
                            {/* <h1 className='text-2xl font-semibold'>300 +</h1> */}
                            <p className='text-[#60737a]'>Students</p>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="teaching-img relative">
              <img
                src="/assets/images/teaching-img-shape.png"
                className="teaching-img-shape absolute -top-28 left-0"
                alt="teaching"
              />
              <img
                src="/assets/images/teaching-img.png"
                alt="teaching"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievements;