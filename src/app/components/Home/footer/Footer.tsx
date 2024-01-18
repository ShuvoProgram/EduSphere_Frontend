import React from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className="footer-area bg-[#F6FAFB] pt-16 pb-16 md:pt-24 md:pb-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1 ml-4">
                            <div className="flex items-center mb-8">
                                <Link href="#" className="logo">
                                    <img
                                        src="/assets/images/logo.png"
                                        className="main-logo"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <p className="text-gray-600">
                            EduSphere 🌐 revolutionizes learning! An interactive LMS fostering personalized education, collaboration, and skill mastery
                            </p>
                        </div>

                        <div className="col-span-1 md:col-span-1">
                            <div className="pl-4 md:pl-10">
                                <h3 className="text-lg font-semibold mb-4">Quick Link</h3>
                                <ul className="import-link">
                                    <motion.li
                                        whileHover={{
                                            scale: 1.1,
                                            originX: 0,
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <Link href="/courses">
                                            <span className="text-gray-600 hover:text-gray-800">Courses</span>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.1,
                                            originX: 0,
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <Link href="/about-us">
                                            <span className="text-gray-600 hover:text-gray-800">About Us</span>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.1,
                                            originX: 0,
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <Link href="/terms-conditions">
                                            <span className="text-gray-600 hover:text-gray-800">Terms & Conditions</span>
                                        </Link>
                                    </motion.li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-1">
                            <div className="pl-4 md:pl-10">
                                <h3 className="text-lg font-semibold mb-4">Help Center</h3>
                                <ul className="import-link">
                                    <motion.li
                                        whileHover={{
                                            scale: 1.1,
                                            originX: 0,
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <Link href="/contact-us">
                                            <span className="text-gray-600 hover:text-gray-800">Support</span>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.1,
                                            originX: 0,
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <Link href="/faq">
                                            <span className="text-gray-600 hover:text-gray-800">Get Help</span>
                                        </Link>
                                    </motion.li>
                                    <motion.li
                                        whileHover={{
                                            scale: 1.1,
                                            originX: 0,
                                            transition: { duration: 0.5 },
                                        }}
                                    >
                                        <Link href="/privacy-policy">
                                            <span className="text-gray-600 hover:text-gray-800">Privacy Policy</span>
                                        </Link>
                                    </motion.li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-1">
                            <div className="flex flex-col pl-4 md:pl-6">
                                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                                <ul className="info">
                                    <li className="text-gray-600">
                                        <span>Call Us:</span>{" "}
                                        <Link href="tel:1-885-665-2022" className="hover:text-gray-800">
                                            1-885-665-2022
                                        </Link>
                                    </li>
                                    <li className="text-gray-600">
                                        <span>Address:</span> Savar, Dhaka, Bangladesh
                                    </li>
                                    <li className="text-gray-600">
                                        <span>Mail Us:</span>{" "}
                                        <Link href="mailto:shuvoprogramer@gmail.com" className="hover:text-gray-800">
                                            shuvoprogramer@gmail.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    src="/assets/images/footer-shape-1.png"
                    className="shape shape-1"
                    alt="footer"
                />
                <img
                    src="/assets/images/footer-shape-2.png"
                    className="shape shape-2"
                    alt="footer"
                />
            </div>

            <div className="copy-right-area bg-[#F6FAFB] py-6">
                <div className="container mx-auto">
                    <p className="text-gray-600">
                        &copy; EduSphere {currentYear} is Proudly Owned by{" "}
                        <Link href="https://shuvo-dev.vercel.app/" target="_blank" className="text-blue-500 hover:text-blue-700">
                            Shuvo Khan
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}

export default Footer;
