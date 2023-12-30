import { styles } from "../../../../styles/style";
import CoursePlayer from "../../../../utils/CoursePlayer";
import Link from "next/link";

type Props = {
  data: any;
  discountPercentage: number | string;
  isPurchased: boolean;
  handleOrder: any;
};

const CourseAction = ({
  data,
  discountPercentage,
  isPurchased,
  handleOrder,
}: Props) => {
  return (
    <div className="w-full 800px:w-[35%] relative mx-auto ">
      <div className="sticky top-[100px] left-0 z-50 w-full mx-auto ">
        <CoursePlayer title={data?.title} videoUrl={data?.demoUrl} />
        <div className="flex items-center gap-10 pt-5 text-black dark:text-white">
          <h1 className=" text-[25px]">
            {data?.price === "Free" ? "Free" : data?.price + "$"}
          </h1>
          {data?.estimatedPrice && (
            <div className="flex items-center ">
              <h5 className="pl-3 text-[20px]  line-through opacity-80">
                {data?.estimatedPrice + "$"}
              </h5>
              <h4 className="pl-5 text-[22px]">
                {`(${discountPercentage}% Off)`}
              </h4>
            </div>
          )}
        </div>
        <div className="flex items-center">
          {isPurchased ? (
            <Link
              className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer   text-white`}
              href={`/course-access/${data?._id}`}
            >
              Enter Course
            </Link>
          ) : (
            <div
              className={`${styles.button} !w-[180px] my-3 font-Poppins cursor-pointer bg-[crimson] text-white`}
              onClick={handleOrder}
            >
              Buy Now {data?.price}$
            </div>
          )}
        </div>
        <div className="mt-3 dark:text-white text-black">
          <p className="pb-1">▪️ Source code included</p>
          <p className="pb-1">▪️ Full lifetime access</p>
          <p className="pb-1">▪️ Certificate of completion</p>
          <p className="pb-3 800px:pb-1">▪️ Premium Support</p>
        </div>
      </div>
    </div>
  );
};

export default CourseAction;
