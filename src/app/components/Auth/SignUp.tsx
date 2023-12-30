import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  AiFillGithub,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { styles } from "../../styles/style";
import { useRegisterMutation } from "../../redux/api/auth/authApi";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

type Props = {
  setRoute: (route: string) => void;
};

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const SignUp = ({ setRoute }: Props) => {
  const [show, setShow] = useState(false);
  const [register, { isLoading, data, isSuccess, error }] =
    useRegisterMutation();

  useEffect(() => {
    if (isSuccess) {
      const message = data?.message || "Registration successful";
      toast.success(message);
      setRoute("Verification");
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      } else {
        toast.error("An error occurred.");
      }
    }
  }, [isSuccess, error, setRoute, data?.message]);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async ({ name, email, password }) => {
      const data = {
        name,
        email,
        password,
      };

      await register(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title} dark:text-white`}>Join to Learnify</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className={`${styles.label} dark:text-white`} htmlFor="email">
            Enter your Name
          </label>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            id="name"
            placeholder="john doe"
            className={`${
              errors.name && touched.name ? "border-red-500" : ""
            } ${styles.input} dark:text-white`}
          />
          {errors.name && touched.name && (
            <span className="text-red-500 pt-2 block">{errors.name}</span>
          )}
        </div>
        <label className={`${styles.label} dark:text-white`} htmlFor="email">
          Enter your Email
        </label>
        <input
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${
            errors.email && touched.email ? "border-red-500" : ""
          } ${styles.input} dark:text-white`}
        />
        {errors.email && touched.email && (
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}

        <div className="w-full mt-5 relative mb-1">
          <label
            className={`${styles.label} dark:text-white`}
            htmlFor="password"
          >
            Enter your password
          </label>
          <input
            type={show ? "text" : "password"}
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="password!@%"
            className={`${
              errors.password && touched.password ? "border-red-500" : ""
            } ${styles.input} dark:text-white`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white text-black"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white text-black"
              size={20}
              onClick={() => setShow(false)}
            />
          )}
        </div>
        {errors.password && touched.password && (
          <span className="text-red-500 pt-2 block">{errors.password}</span>
        )}

        <div className="mt-5 w-full ">
          <button
            type="submit"
            disabled={isLoading}
            className={`${styles.button} cursor-pointer`}
          >
            {isLoading ? (
              <CircularProgress
                sx={{
                  color: "#fff",
                }}
                size={23}
              />
            ) : (
              "Sign Up"
            )}
          </button>
        </div>

        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle size={30} className="cursor-pointer mr-2" />
          <AiFillGithub
            size={30}
            className="cursor-pointer ml-2 dark:text-white text-black"
          />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px] dark:text-white text-black">
          Already have an account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Login")}
          >
            Login
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default SignUp;
