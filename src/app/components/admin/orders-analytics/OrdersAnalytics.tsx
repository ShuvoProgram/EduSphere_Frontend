import React from "react";
import { useGetOrdersAnalyticsQuery } from "../../../redux/api/analytics/analyticsApi";

import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  LabelList,
  Bar,
  Label,
} from "recharts";
import { styles } from "../../../styles/style";

const OrdersAnalytics = ({ isDashboard }: any) => {
  const { data } = useGetOrdersAnalyticsQuery(undefined);

  const analyticsData: any = [];
  data &&
    data?.data?.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, orders: item.count });
    });

  const minValue = 0;

  return (
    <div>
      <div className={isDashboard ? "h-[30vh]" : ""}>
        <div className={isDashboard ? "mt-0 pl-[40px] mb-2" : "mt-[50px]"}>
          <h1
            className={`${styles.title} ${
              isDashboard && "!text-[20px]"
            } px-5 text-start dark:text-white text-black`}
          >
            Orders Analytics
          </h1>
          {!isDashboard && (
            <p className={`${styles.label} px-5`}>
              Last 12 months analytics data
            </p>
          )}
        </div>
      </div>

      <div
        className={`w-full ${
          isDashboard ? "h-[30vh]" : "h-screen"
        } flex items-center justify-center`}
      >
        <ResponsiveContainer
          width={isDashboard ? "100%" : "90%"}
          height={!isDashboard ? "50%" : "100%"}
        >
          <BarChart width={150} height={300} data={analyticsData}>
            <Tooltip />

            <XAxis dataKey="name">
              <Label offset={0} position="insideBottom" />
            </XAxis>

            <YAxis domain={[minValue, "auto"]} />
            <Bar dataKey="orders" fill="#37a39a">
              <LabelList dataKey="orders" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OrdersAnalytics;
