import { styles } from "@/app/styles/style";
import { useGetCourseAnalyticsQuery } from "../../../redux/api/analytics/analyticsApi";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  LabelList,
  Label,
  Tooltip,
} from "recharts";

const CourseAnalytics = () => {
  const { data } = useGetCourseAnalyticsQuery(undefined);

  const analyticsData: any = [];
  data &&
    data?.data?.last12Months.forEach((item: any) => {
      analyticsData.push({ name: item.month, course: item.count });
    });

  const minValue = 0;
  return (
    <div>
      <div className="h-screen">
        <div className="mt-[50px] ">
          <h1 className={`${styles.title + " px-5 !text-start"}`}>
            Courses Analytics
          </h1>
          <p className={`${styles.label + " px-5"}`}>
            Last 12 months analytics data
          </p>
        </div>
        <div className="w-full h-[90%] flex items-center justify-center">
          <ResponsiveContainer width="90%" height="50%">
            <BarChart width={150} height={300} data={analyticsData}>
              <Tooltip />
              <XAxis dataKey="name">
                <Label offset={0} position="insideBottom" />
              </XAxis>
              <YAxis domain={[minValue, "auto"]} />
              <Bar dataKey="course" fill="#37a39a">
                <LabelList dataKey="course" position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CourseAnalytics;
