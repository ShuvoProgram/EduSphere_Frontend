import { useLoadUserQuery } from "../../redux/api/apiSlice";
import Loader from "../loader/Loader";
import { redirect } from "next/navigation";

const AdminRoutes = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useLoadUserQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }
  if (!data?.data) return redirect("/");

  if (data?.data?.role === "admin") return children;

  return redirect("/");
};

export default AdminRoutes;
