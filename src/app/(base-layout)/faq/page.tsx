"use client";
import FAQ from "@/app/components/faq/FAQ";
import Meta from "../../utils/Meta";
import PageBanner from "@/app/components/PageBanner";

const page = () => {
  return (
    <div>
      <Meta title="FAQ - EduSphere" />
      <PageBanner
          pageTitle="FAQ"
          homePageUrl="/"
          homePageText="Home"
          activePageText="FAQ"
          />
      <FAQ />
    </div>
  );
};

export default page;