import React from 'react';
import { motion } from "framer-motion";
import Link from 'next/link';

function PageBanner({
	pageTitle,
	homePageUrl,
	homePageText,
	activePageText,
}: any) {
    const variants = {
		hidden: {
			scale: 0.8,
			opacity: 0,
		},
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				delay: 0.2,
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
				delay: 0.4,
			},
		},
	};
  return (
    <>
    <div className="pages-banner-area pt-[100px] pb-[100px]">
				<div className="container">
					<div className="pages-banner-content">
						<motion.h2
							initial="hidden"
							animate="visible"
							variants={variants}
						>
							{activePageText}
						</motion.h2>
						<motion.ul
							initial="hidden"
							animate="visible"
							variants={pVariants}
						>
							<li>
								<Link href={homePageUrl}>
									<span>{homePageText}</span>
								</Link>
							</li>
							<li>{pageTitle}</li>
						</motion.ul>
					</div>
				</div>

				<img
					src="/assets/images/page-banner-shape-1.svg"
					className="shape shape-1"
					alt="courses"
				/>
				<img
					src="/assets/images/page-banner-shape-2.svg"
					className="shape shape-2"
					alt="courses"
				/>
				<img
					src="/assets/images/page-banner-shape-3.svg"
					className="shape shape-3"
					alt="courses"
				/>
			</div>
    </>
  )
}

export default PageBanner;