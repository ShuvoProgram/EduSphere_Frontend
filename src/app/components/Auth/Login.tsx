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
import { useLoginMutation } from "../../redux/api/auth/authApi";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { CircularProgress } from "@mui/material";

type Props = {
  setRoute: (route: string) => void;
  setOpen: (open: boolean) => void;
};

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email!")
    .required("Please enter your email!"),
  password: Yup.string().required("Please enter your password!").min(6),
});

const Login = ({ setRoute, setOpen }: Props) => {
  const [show, setShow] = useState(false);
  const [login, { error, isSuccess, isLoading }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Login Successfully!");
      setOpen(false);
    }

    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error, setOpen]);

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      const data = {
        email,
        password,
      };

      await login(data);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="w-full">
      <h1 className={`${styles.title} dark:text-white `}>
        Login with Learnify
      </h1>
      <form onSubmit={handleSubmit}>
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
          className={`dark:text-white ${
            errors.email && touched.email ? "border-red-500" : ""
          } ${styles.input}`}
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
            className={`dark:text-white ${
              errors.password && touched.password ? "border-red-500" : ""
            } ${styles.input}`}
          />
          {!show ? (
            <AiOutlineEyeInvisible
              className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white"
              size={20}
              onClick={() => setShow(true)}
            />
          ) : (
            <AiOutlineEye
              className="absolute bottom-3 right-2 z-1 cursor-pointer dark:text-white"
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
              "Login"
            )}
          </button>
        </div>

        <br />
        <h5 className="text-center pt-4 font-Poppins text-[14px] text-black dark:text-white">
          Or join with
        </h5>
        <div className="flex items-center justify-center my-3">
          <FcGoogle
            size={30}
            onClick={() => signIn("google")}
            className="cursor-pointer mr-2"
          />
          <AiFillGithub
            size={30}
            onClick={() =>
              signIn("github", {
                callbackUrl: "https://learnify-v1.vercel.app",
              })
            }
            className="cursor-pointer ml-2 dark:text-white"
          />
        </div>
        <h5 className="text-center pt-4 font-Poppins text-[14px] dark:text-white">
          Not have any account?{" "}
          <span
            className="text-[#2190ff] pl-1 cursor-pointer"
            onClick={() => setRoute("Sign-Up")}
          >
            Sign up
          </span>
        </h5>
      </form>
      <br />
    </div>
  );
};

export default Login;
