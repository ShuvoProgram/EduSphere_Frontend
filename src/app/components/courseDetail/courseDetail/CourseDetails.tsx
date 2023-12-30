import { useAppSelector } from "../../../redux/hook";
import CourseOverview from "./courseOverview/CourseOverview";
import Prerequisites from "./prerequisites/Prerequisites";
import CourseBenefits from "./courseBenefits/CourseBenefits";
import CourseReviews from "./courseReviews/CourseReviews";
import CourseAction from "./courseAction/CourseAction";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import {
  useCreatePaymentIntentMutation,
  useGetStripePublishableKeyQuery,
} from "../../../redux/api/orders/ordersApi";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./checkoutForm/CheckoutForm";
import { useTheme } from "next-themes";
import StarRating from "../../../utils/StarRating";
import toast from "react-hot-toast";

const CourseDetails = ({ data }: any) => {
  const [open, setOpen] = useState(false);
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<any>("");

  const { theme, setTheme } = useTheme();

  const { user }: any = useAppSelector((state) => state.auth);
  const { data: stripeData } = useGetStripePublishableKeyQuery(undefined);
  const [createPaymentIntent, { data: paymentIntentData }] =
    useCreatePaymentIntentMutation();

  const isPurchased = user?.courses?.find(
    (course: any) => course?.courseId?._id === data?._id
  );

  const discountPercentage = (
    ((data?.estimatedPrice - data?.price) / data?.estimatedPrice) *
    100
  ).toFixed(2);

  // stripe data set
  useEffect(() => {
    if (stripeData?.data?.publishableKey) {
      const publishKey = stripeData?.data?.publishableKey;
      setStripePromise(loadStripe(publishKey));
    }

    if (data) {
      const amount = Math.round(data?.price);
      createPaymentIntent(amount);
    }
  }, [data, stripeData, createPaymentIntent]);

  useEffect(() => {
    if (paymentIntentData) {
      setClientSecret(paymentIntentData?.data?.client_secret);
    }
  }, [paymentIntentData]);

  const handleOrder = async () => {
    if (!user) return toast.error("Please login first");
    setOpen(true);
  };
  const appearance: any = {
    theme: "minimal",

    variables: {
      colorPrimary: "#37a39a",
      colorTextSecondary: "#37a39a",
      colorText: `${theme === "dark" ? "white" : "black"}`,
      colorBackground: `${theme === "dark" ? "#171C24" : "white"}`,
      colorDanger: "#df1b41",
      fontFamily: "Ideal Sans, system-ui, sans-serif",
    },
    rules: {
      ".Input, .Block": {
        border: "1.5px solid var(--colorPrimary)",
      },
    },
  };

  return (
    <div>
      <div className="w-[90%] 800px:w-[90%] m-auto py-5 ">
        <div className="w-full flex flex-col-reverse 800px:flex-row">
          <div className="w-full 800px:w-[65%] 800px:pr-5">
            <h1 className="text-[25px] 800px:text-[30px] font-Poppins font-[600] text-black dark:text-white">
              {data?.name}
            </h1>
            <div className="flex justify-between items-center ">
              <StarRating ratings={data?.ratings} />
              <p className="dark:text-white text-black font-[500]">
                ({data?.purchased} students)
              </p>
            </div>
            <br />
            <div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Overview
              </h1>
              <div>
                <CourseOverview courseData={data?.courseData} />
                <br />
                <br />
              </div>
            </div>

            <div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                What you will learn from this course?
              </h1>
              <div>
                <CourseBenefits benefits={data?.benefits} />
                <br />
                <br />
              </div>
            </div>

            <div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                What are the prerequisites for starting this course?
              </h1>
              <div>
                <Prerequisites prerequisites={data?.prerequisites} />
                <br />
                <br />
              </div>
            </div>

            <div>
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Desciption
              </h1>
              <p className="text-[18px] mt-[20px] whitespace-pre-line w-full overflow-hidden text-black dark:text-white">
                {data?.description}
              </p>
              <br />
              <br />
            </div>
            <div className=" ">
              <h1 className="text-[25px] font-Poppins font-[600] text-black dark:text-white">
                Course Reviews ({data?.reviews?.length})
              </h1>
              <div className="mt-[20px] grid grid-cols-1 gap-y-5">
                <CourseReviews reviews={data?.reviews} />
              </div>
            </div>
          </div>
          <CourseAction
            data={data}
            discountPercentage={discountPercentage}
            isPurchased={isPurchased}
            handleOrder={handleOrder}
          />
        </div>
      </div>
      <>
        {stripePromise && (
          <>
            {open && (
              <div className="w-full h-screen bg-[#00000036] fixed top-0 left-0 z-50 flex items-center justify-center backdrop-blur-md bg-black bg-opacity-40">
                <div className="w-[500px] dark:bg-[#171C24]  bg-white rounded-xl shadow p-3 dark:text-white text-black">
                  <div className="w-full flex justify-end">
                    <IoCloseOutline
                      size={40}
                      className="text-black cursor-pointer dark:text-white "
                      onClick={() => setOpen(false)}
                    />
                  </div>
                  {stripePromise && clientSecret && user && (
                    <Elements
                      stripe={stripePromise}
                      options={{ clientSecret, appearance }}
                    >
                      <CheckoutForm data={data} setOpen={setOpen} user={user} />
                    </Elements>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </>
    </div>
  );
};

export default CourseDetails;
