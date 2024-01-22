import PageBanner from "@/app/components/PageBanner";
import PrivacyPolicy from "@/app/components/PrivacyPolicy/PrivacyPolicy";
import Meta from "@/app/utils/Meta";
import React from "react";

const page = () => {
  return (
    <div>
      <Meta title="Privacy Policy - EduSphere" />
      {/* <PageBanner
          pageTitle="privacy policy"
          homePageUrl="/"
          homePageText="Home"
          activePageText="Privacy Policy"
          /> */}
      <PrivacyPolicy />
    </div>
  );
};

export default page;