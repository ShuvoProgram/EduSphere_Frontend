import React from 'react';
import { motion } from "framer-motion";
import CategoryCard from './CategoryCard';
import { CategoryData } from '@/app/mock/category';

function Categories() {
    const variants = {
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, type: "spring", duration: 1 },
        },
        hidden: { opacity: 0, scale: 0 },
    };

    return (
        <div className="courses-area pt-20 pb-14 md:pt-32 md:pb-28 lg:pt-40 lg:pb-36 xl:pt-44 xl:pb-40">
            <div className="container mx-auto">
                <motion.div
                    className="section-title text-center mb-14 md:mb-20 lg:mb-24 xl:mb-28"
                    initial="hidden"
                    whileInView="visible"
                    variants={variants}
                >
                    <span className="font-semibold text-xs text-[#208486] uppercase">Top Categories</span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Browse Top Categories</h2>
                </motion.div>
                <CategoryCard categories={CategoryData}/>
            </div>
        </div>
    );
}

export default Categories;
