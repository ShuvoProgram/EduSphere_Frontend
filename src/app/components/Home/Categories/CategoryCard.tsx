import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';


function CategoryCard({ categories }: any) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {categories?.length > 0 &&
        categories.map((cat: any) => (
          <motion.div
            key={cat.id}
            className="col-span-1 p-4 rounded-lg transition-transform transform hover:scale-105"
            whileHover={{
              scale: 1.02,
              originX: 0,
              transition: { duration: 0.5 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{
              type: 'spring',
              duration: 1,
              bounce: 0.3,
            }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Link href={`/category/${cat.id}`}>
              <span className="single-categorie block p-4 shadow-md cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                <i className="flaticon-developer"></i>
              </span>
            </Link>
          </motion.div>
        ))}

      <div className="col-span-full text-center">
        <p className="text-base">
          Browse All{' '}
          <Link href="/courses">
            <span className="text-[#208486] cursor-pointer read-more">
              Courses <i className="ri-arrow-right-line"></i>
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
