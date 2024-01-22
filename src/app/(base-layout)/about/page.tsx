import PageBanner from "@/app/components/PageBanner";
import About from "@/app/components/about/About";
import Meta from "@/app/utils/Meta";

const page = () => {
  return (
    <div>
      <Meta title="About - EduSphere" />
      {/* <PageBanner
          pageTitle="About"
          homePageUrl="/"
          homePageText="Home"
          activePageText="About"
          /> */}
      <About />
    </div>
  );
};

export default page;
