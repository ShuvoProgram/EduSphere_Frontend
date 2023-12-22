import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useTheme } from "next-themes";

type Props = {
  rows: any;
  columns: any;
  team?: boolean;
};

const DataTable = ({ rows, columns, team }: Props) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${team ? "pt-0" : "pt-20"}`}>
      <Box m="30px">
        <Box
          m="40px 0 0 0"
          height="75vh"
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
    </div>
  );
};

export default DataTable;
