import React from "react";
import UsersAnalytics from "../users-analytics/UsersAnalytics";
import { BiBorderLeft } from "react-icons/bi";
import { Box, CircularProgress } from "@mui/material";
import { PiUsersFourLight } from "react-icons/pi";
import AllInvoices from "./AllInvoices";
import OrdersAnalytics from "../orders-analytics/OrdersAnalytics";

type Props = {
  open: any;
  setOpen: any;
};

const CircularProgressWithLabel = ({ value, open }: any) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={45}
        sx={{
          color: `${value && value > 99 ? "#37a39a" : "error"}`,
        }}
        thickness={4}
        style={{ zIndex: open ? -1 : 1 }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
};

const DashboardWidget = ({ open, setOpen }: Props) => {
  return (
    <div className="mt-[30px] min-h-screen">
      <div className="grid grid-cols-10 gap-5">
        <div className="p-8 col-span-7">
          <UsersAnalytics isDashboard={true} />
        </div>
        <div className="pt-20 pr-8 col-span-3">
          <div className="w-full rounded-sm shadow">
            <div className="flex items-center p-5 justify-between">
              <div>
                <BiBorderLeft className=" text-[#000] text-[30px]" />
                <h5 className="pt-2 font-Poppins text-[20px] text-black">
                  120
                </h5>
                <h5 className="py-2 font-Poppins text-black text-[20px] font-[400]">
                  Sales Obtained
                </h5>
              </div>
              <div>
                <CircularProgressWithLabel value={100} open={open} />
                <h5 className="text-center pt-4 text-black">
                  +120%
                </h5>
              </div>
            </div>
          </div>
          <div className="w-full  rounded-sm shadow my-8">
            <div className="flex items-center p-5 justify-between">
              <div>
                <PiUsersFourLight className="☐  text-[#000] text-[30px]" />
                <h5 className="pt-2 font-Poppins  text-black text-[20px]">
                  450
                </h5>
                <h5 className="py-2 font-Poppins  text-black text-[20px] font-[400]">
                  New Users
                </h5>
              </div>
              <div>
                <CircularProgressWithLabel value={100} open={open} />
                <h5 className="text-center pt-4  text-black">
                  +150%
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-10 gap-5 mt-[-20px] ">
        <div className="p-8 col-span-6">
          <OrdersAnalytics isDashboard={true} />
        </div>

        <div className=" col-span-4 py-10">
          <h5 className=" text-black text-[20px] font-[600] font-Poppins ">
            Recent Transactions
          </h5>
          <AllInvoices isDashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default DashboardWidget;
