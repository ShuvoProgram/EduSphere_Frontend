import Meta from "../../../utils/Meta";
import AllInvoices from "../../../components/admin/dashboard/AllInvoices";

const page = () => {
  return (
    <div className="mt-[100px] px-10">
      <Meta title="Invoices - EduSphere" />
      <AllInvoices />
    </div>
  );
};

export default page;