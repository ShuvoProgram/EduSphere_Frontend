"use client";

import { format } from "date-fns";
import { Box } from "@mui/material";
import { useTheme } from "next-themes";

import { useGetAllOrdersQuery } from "../../../redux/api/orders/ordersApi";
import { DataGrid } from "@mui/x-data-grid";

const AllInvoices = ({ isDashboard }: any) => {
  const { data, isLoading, error } = useGetAllOrdersQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 100000,
  });
  const { theme, setTheme } = useTheme();

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "price", headerName: "Price", flex: 0.5 },
    { field: "createdAt", headerName: "Date", flex: 0.5 },
  ];

  const rows: {}[] = [];

  if (data?.data) {
    data.data.forEach((order: any) => {
      rows.push({
        id: order._id,
        name: order?.userId?.name,
        price: ` $${order?.paymentInfo.amount / 100}`,
        createdAt: format(new Date(order.createdAt), "dd MMM yyyy"),
      });
    });
  }

  return (
    <>
      {rows.length > 0 && (
        <Box paddingRight={4}>
          <Box
            m="40px 0 0 0"
            height={isDashboard ? "50vh" : "75vh"}
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                outline: "none",
              },
              "& .css-pqjvzy-MuiSvg Icon-root-MuiSelect-icon": {
                color: theme === "dark" ? "#fff !important" : "#000",
              },
              "& .MuiDataGrid-sortIcon": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-row": {
                color: theme === "dark" ? "#fff" : "#000",
                borderBottom:
                  theme === "dark"
                    ? "1px solid #ffffff30 !important"
                    : "1px solid #ccc!important",
              },
              "& .MuiTablePagination-root": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column-cell": {
                color: theme === "dark" ? "#fff" : "#000",
              },
              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme === "dark" ? "#111C43" : "#37a39a",
                borderBottom: "none",
                color: theme === "dark" ? "#fff !important" : "#000",
              },
              "& .MuiDataGrid-virtualScroller": {
                backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
              },
              "& .MuiDataGrid-footerContainer": {
                color: theme === "dark" ? "#fff" : "#000",
                borderTop: "none",
                backgroundColor: theme === "dark" ? "#111C43" : "#37a39a",
              },
              "& .MuiCheckbox-root": {
                color:
                  theme === "dark" ? `#b7ebde!important` : ` #000 !important`,
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: " #FF0000 !important",
              },
            }}
          >
            <DataGrid checkboxSelection rows={rows} columns={columns} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default AllInvoices;
