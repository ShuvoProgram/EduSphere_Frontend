import React from 'react';

function Features() {
    return (
        <div className="our-features-area bg-[#F6FAFB] pb-20 md:pb-30">
            <div className="container mx-auto">
                <div className="section-title text-center pt-[100px] pb-[80px]">
                    <span className="font-semibold text-xs text-[#208486] uppercase">Our Features</span>
                    <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Why You Should Choose EduSphere</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
                    <div className="col-span-1">
                        <div className="single-features text-center">
                            <img
                                src="/assets/images/features/feature-1.svg"
                                alt="feature"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Expert-Led Video Courses</h3>
                            <p>
                                Instructors from around the world teach millions
                                of students on Edmy through video.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="single-features text-center">
                            <img
                                src="/assets/images/features/feature-2.svg"
                                alt="feature"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">In-Demand Trendy Topics</h3>
                            <p>
                                Instructors from around the world teach millions
                                of students on Edmy through video.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="single-features text-center">
                            <img
                                src="/assets/images/features/feature-3.svg"
                                alt="feature"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Segment Your Learning</h3>
                            <p>
                                Instructors from around the world teach millions
                                of students on Edmy through video.
                            </p>
                        </div>
                    </div>

                    <div className="col-span-1">
                        <div className="single-features text-center">
                            <img
                                src="/assets/images/features/feature-4.svg"
                                alt="feature"
                                className="mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-2">Always Interactive Learning</h3>
                            <p>
                                Instructors from around the world teach millions
                                of students on Edmy through video.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <img
                src="/assets/images/features/feature-shape-1.svg"
                className="shape shape-1 mx-auto mt-8"
                alt="feature"
            />
        </div>
    );
}

export default Features;