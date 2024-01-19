import React from "react";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  AreaChart,
  Tooltip,
  Area,
} from "recharts";
import { styles } from "../../../styles/style";

import { useGetUsersAnalyticsQuery } from "../../../redux/api/analytics/analyticsApi";

const UsersAnalytics = ({ isDashboard }: any) => {
  const { data } = useGetUsersAnalyticsQuery(undefined);

  const analyticsData: any = [];
  data &&
    data?.data?.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, users: item.count });
    });

  const minValue = 0;

  return (
    <div>
      <div
        className={`${
          !isDashboard ? "mt-[50px]" : "mt-[50px]  shadow-sm pb-5 rounded-sm"
        }`}
      >
        <div className={`${isDashboard ? "!ml-8 mb-5" : ""} `}>
          <h1
            className={`${styles.title} ${
              isDashboard && "!text-[20px]"
            } px-5 text-start dark:text-white text-black`}
          >
            Users Analytics
          </h1>
          {!isDashboard && (
            <p className={`${styles.label} px-5 dark:text-white text-black`}>
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
          <AreaChart
            data={analyticsData}
            margin={{
              top: 20,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="users"
              stroke="#fff"
              fill="#37a39a"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsersAnalytics;
