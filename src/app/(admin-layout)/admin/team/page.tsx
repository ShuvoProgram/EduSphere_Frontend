"use client";
import Meta from "../../../utils/Meta";
import AllUsers from "../../../components/admin/users/AllUsers";

const page = () => {
  return (
    <div>
      <Meta title="Manage Team - EduSphere" />
      <AllUsers team={true} />
    </div>
  );
};

export default page;