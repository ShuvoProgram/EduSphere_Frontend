"use client";

import Meta from "../../../utils/Meta";
import OrdersAnalytics from "../../../components/admin/orders-analytics/OrdersAnalytics";

const page = () => {
  return (
    <div>
      <Meta title="Order Analytics - EduSphere" />
      <OrdersAnalytics />
    </div>
  );
};

export default page;