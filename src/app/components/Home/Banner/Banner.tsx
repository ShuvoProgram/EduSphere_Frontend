import React from 'react';
import { motion } from "framer-motion";
import SearchForm from '../SearchForm/SearchForm';
import Link from 'next/link';

function Banner() {
    const variants = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };

    const pVariants = {
        hidden: {
            scale: 0.8,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: 1.9,
            },
        },
    };

    const item = {
        hidden: {
            y: "200%",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
        },
        visible: {
            y: 0,
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
        },
    };

    return (
        <div className="banner-area bg-1">
            <div className="container-fluid">
                <div className="flex flex-wrap items-center">
                    <div className="w-full lg:w-6/12">
                        <div className="banner-img">
                            <motion.img
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                src="/assets/images/banner/banner-img-1.png"
                                alt="banner"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={variants}
                            className="banner-content"
                        >
                            <span className="overflow-hidden inline-block my-4">
                                <motion.span className="inline-block text-5xl md:text-6xl lg:text-7xl font-bold text-white" variants={item}>
                                    Improve Your Online Learning Experience Better Instantly
                                </motion.span>
                            </span>
                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={pVariants}
                            >
                                We have <span className="font-bold">40k+</span> Online courses &{" "}
                                <span className="font-bold">500K+</span> Online registered student.
                                Find your desired Courses from them.
                            </motion.p>

                            {/* <SearchForm formClass="search-form" banner={true} /> */}
                            <div className="flex mr-2">
                                <img className="border-2 border-white rounded-full h-10 w-10 -mr-3" src="https://randomuser.me/api/portraits/men/32.jpg" alt="" />
                                <img className="border-2 border-white rounded-full h-10 w-10 -mr-3" src="https://randomuser.me/api/portraits/women/31.jpg" alt="" />
                                <img className="border-2 border-white rounded-full h-10 w-10 -mr-3" src="https://randomuser.me/api/portraits/men/33.jpg" alt="" />

                                <p className='font-bold ml-6'>
                                    500K+ People already trusted us.{" "}
                                    <Link href="/courses">
                                        <span className="read-more underline">
                                            View Courses{" "}
                                            <i className="ri-arrow-right-line"></i>
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <img
                src="/assets/images/banner/shape-1.svg"
                className="shape shape-1"
                alt="banner"
            />
            <img
                src="/assets/images/banner/shape-2.svg"
                className="shape shape-2"
                alt="banner"
            />
            <img
                src="/assets/images/banner/shape-3.svg"
                className="shape shape-3"
                alt="banner"
            />
        </div>
    );
}

export default Banner;
