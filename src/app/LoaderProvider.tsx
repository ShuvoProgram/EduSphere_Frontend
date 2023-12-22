import dynamic from "next/dynamic";
import Loader from "./components/loader/Loader";
import { useLoadUserQuery } from "./redux/api/apiSlice";
import { ReactNode } from "react";
import { useSocialAuthMutation } from "./redux/api/auth/authApi";

const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useLoadUserQuery({});

  return <>{isLoading ? <Loader /> : children}</>;
};

export default dynamic(() => Promise.resolve(LoaderProvider), { ssr: false });
