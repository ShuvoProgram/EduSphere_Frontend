import { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  LinkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { useCreateOrderMutation } from "../../../../redux/api/orders/ordersApi";
import { styles } from "../../../../styles/style";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

type Props = {
  setOpen: any;
  data: any;
  user: any;
};
const CheckoutForm = ({ setOpen, data, user }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const [createOrder, { isSuccess, error, isLoading: createOrderLoading }] =
    useCreateOrderMutation();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (paymentIntent && paymentIntent.status === "succeeded") {
      createOrder({ courseId: data?._id, paymentInfo: paymentIntent });
      setIsLoading(false);
    }

    if (error) {
      toast.error(error.message as string);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Order placed successfully");
      setOpen(false);

      redirect(`/course-access/${data?._id}`);
    }
    if (error) {
      const errorData = error as any;
      toast.error(errorData.data.message);
    }
  }, [isSuccess, setOpen, data, error, user]);

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        options={{ defaultValues: { email: user?.email } }}
        id="link-authentication-element"
      />
      <PaymentElement id="payment-element" className="mt-5 dark:text-black" />
      <button
        disabled={isLoading || !stripe || !elements || createOrderLoading}
        id="submit"
        className={`${styles.button} my-5 !h-[35px] !w-[120px] bg-[#37a39a] text-white`}
      >
        <span id="button-text">{isLoading ? "Paying..." : "Pay now"}</span>
      </button>
    </form>
  );
};

export default CheckoutForm;
