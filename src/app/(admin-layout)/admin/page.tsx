"use client";
import DashboardHero from "../../components/admin/dashboard/DashboardHero";
import Meta from "../../utils/Meta";
import React from "react";

const AdminPage = () => {
  return (
    <div>
      <Meta
        title="EduSphere - Admin"
        description="EduSphere is a platform for students to learn and get help from teachers"
        keywords="Programming, MERN, Redux, Machine Learning"
      />
      <DashboardHero isDashboard={true} />
    </div>
  );
};

export default AdminPage;
