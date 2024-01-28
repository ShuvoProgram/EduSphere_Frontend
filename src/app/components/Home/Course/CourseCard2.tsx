import React from "react";
import rating from '../../../../../public/assets/images/RatingContainer.png';
import horizontal from '../../../../../public/assets/images/HorizontalContainer.png';
import advance from '../../../../../public/assets/images/VerticalContainer.png';
import { AiOutlineUnorderedList } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

type Props = {
    course: any;
    isProfile?: boolean;
};

export const CourseCard2 = ({ course, isProfile }: Props) => {
    console.log(course)
    return (
        <motion.div
        className="p-4"
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    type: "spring",
                    duration: 3,
                    bounce: 0.3,
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
        >
        <div className="w-[300px] h-[340px] card">
            <div className="h-[340px] top-0 w-[300px] left-0">
                <div className="relative w-[300px] h-[396px]">
                    <div className="absolute h-[340px] top-[15px] bg-white rounded-[8px] shadow-[0px_20px_40px_#b7bcc840] w-[300px] left-0" />
                    <div className="absolute w-[300px] h-[188px] top-0 left-0 bg-[#e5e6ec] rounded-[8px_8px_0px_0px]" />
                    <div className="absolute w-[300px] h-[115px] top-[80px] left-0 [background:linear-gradient(180deg,rgb(0,0,0)_0%,rgba(0,0,0,0)_100%)] opacity-70" />
                    <div className="absolute w-[300px] h-[16px] top-[320px] left-[25px]">
                        <button className="w-[64px] h-[22px] top-px absolute left-0 all-[unset] box-border">
                            <div className="absolute top-0 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[18px] text-center tracking-[0] leading-[normal]">
                                {!isProfile && (
                                    <div className="flex items-center">
                                        <h3
                                            className={`text-black font-medium ${course?.price > 0 ? "" : ""
                                                } dark:text-[#fff]`}
                                        >
                                            {course?.price > 0 ? `${course?.price}$` : "Free"}
                                        </h3>
                                        <h5 className="pl-3 text-[14px]  line-through opacity-80 text-black dark:text-[#fff]">
                                            {course?.estimatedPrice}$
                                        </h5>
                                    </div>
                                )}
                            </div>
                        </button>
                        <div className="flex items-center absolute w-[115px] h-[24px] top-0 left-[150px]">
                            <AiOutlineUnorderedList
                                size={20}
                                className="dark:text-white text-black"
                            />
                            <h5 className="pl-2 text-black dark:text-[#fff]">
                                {course?.courseData?.length} Lectures
                            </h5>
                        </div>
                    </div>
                    <div className="absolute w-[300px] h-[170px] top-[150px] left-0">
                       <Link href={`${isProfile ? `/course-access/${course?._id}` : `/course/${course?._id}`
                            }`}>
                       <Image
                            width={320}
                            height={320}
                            className="absolute w-[320px] h-[200px] top-[-160px] left-0 object-cover rounded-t-md"
                            alt="Text input"
                            src={course?.thumbnail?.url}
                       
                        />
                       </Link>
                        <Link href={`${isProfile ? `/course-access/${course?._id}` : `/course/${course?._id}`
                            }`} className="absolute mx-2 w-[300px] top-[50px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#1a2134] text-[16px] tracking-[0] leading-[26px] hover:text-teal-600">
                            {course?.name}
                        </Link>
                        <div className="w-[94px] left-[15px] absolute h-[32px] top-[118px]">
                            <div className="absolute w-[32px] h-[32px] top-0 left-0 bg-white rounded-[16px] border border-solid border-[#e6e7ee]">
                                <Image width={16} height={16} src={advance} alt="advance" className="!absolute !w-[16px] !h-[16px] !top-[7px] !left-[7px]" />

                            </div>
                            <div className="absolute top-[8px] left-[40px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#50566b] text-[12px] tracking-[0] leading-[normal]">
                                {course?.level}
                            </div>
                        </div>
                        <div className="w-[56px] left-[138px] absolute h-[32px] top-[118px]">
                            <div className="absolute w-[32px] h-[32px] top-0 left-0 bg-white rounded-[16px] border border-solid border-[#e6e7ee]">
                                <Image
                                    width={16}
                                    height={16}
                                    className="absolute w-[16px] h-[16px] top-[7px] left-[7px]"
                                    alt="Horizontal container"
                                    src={horizontal}
                                />
                            </div>
                            <div className="absolute top-[8px] left-[40px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#50566b] text-[12px] tracking-[0] leading-[normal]">
                                {course?.purchased}
                            </div>
                        </div>
                        <div className="w-[61px] left-[224px] absolute h-[32px] top-[118px]">
                            <div className="absolute w-[32px] h-[32px] top-0 left-0 bg-white rounded-[16px] border border-solid border-[#e6e7ee]">
                                <div className="relative w-[16px] h-[16px] top-[7px] left-[7px]">
                                    <Image width={14} height={13} className="absolute w-[14px] h-[13px] top-px left-px" alt="Rating" src={rating} />
                                </div>
                            </div>
                            <div className="absolute top-[8px] left-[40px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#50566b] text-[12px] tracking-[0] leading-[normal]">
                                {course?.ratings}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    );
};
