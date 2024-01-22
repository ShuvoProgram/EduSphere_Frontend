import React from 'react';
import { motion } from 'framer-motion';

type Props = {
    course: any;
    isProfile?: boolean;
};

function CourseCard({ course, isProfile }: Props) {
  return (
    <div className="lg:w-1/4 md:w-1/2">
      <div className="single-courses">
        <div className="courses-main-img">
          <img src={course?.thumbnail?.url} alt="Image" />
        </div>
        <div className="courses-content">
          <h3>{course?.name}</h3>
          <ul className="admin">
            <li>
              {/* <img
                src={
                  user.profile_photo
                    ? user.profile_photo
                    : "/images/admin-1.jpg"
                }
                className="rounded-full"
                alt={user.first_name}
                style={{ height: "25px", width: "25px" }}
              /> */}
            </li>
            <li>
              <span>By</span>
            </li>
            {/* <li>{`${user.first_name} ${user.last_name}`}</li> */}
          </ul>
          {/* <h4>
            {before_price > 0 && <del>${before_price}</del>} ${latest_price}
          </h4> */}
        </div>

        <div className="courses-hover-content">
          <div className="sk">
            <div>
              <h3>
                {/* <Link href={`/course/${slug}`}>
                  <a>{title}</a>
                </Link> */}
              </h3>
              {/* <p>{short_desc.slice(0, 108)}</p> */}

              <div className="courses-btn flex justify-between items-center">
                {/* {buy ? (
                  <button
                    className="default-btn"
                    onClick={() =>
                      router.push(`/learning/course/${slug}`)
                    }
                  >
                    View My Course
                  </button>
                ) : (
                  <>
                    {add ? (
                      <button
                        className="default-btn"
                        onClick={() => router.push("/checkout")}
                      >
                        View Cart
                      </button>
                    ) : (
                      <button
                        className="default-btn"
                        onClick={() => onAddCart(course)}
                      >
                        Add To Cart
                      </button>
                    )}
                  </>
                )} */}
                {/* {fav ? (
                  <motion.button
                    whileTap={{ scale: 3 }}
                    transition={{ duration: 0.5 }}
                    className="default-btn wish"
                    onClick={() => {
                      onUnFav(id);
                      setfavs(!fav);
                    }}
                  >
                    <i className="ri-heart-fill"></i>
                    <i className="ri-heart-fill hover"></i>
                  </motion.button>
                ) : (
                  <motion.button
                    whileTap={{ scale: 3 }}
                    transition={{ duration: 0.5 }}
                    className="default-btn wish"
                    onClick={() => {
                      onFav(id);
                      setfavs(!fav);
                    }}
                  >
                    <i className="ri-heart-line"></i>
                    <i className="ri-heart-fill hover"></i>
                  </motion.button>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
