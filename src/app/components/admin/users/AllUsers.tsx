import { format } from "date-fns";
import { useGetAllUsersQuery } from "../../../redux/api/user/userApi";
import DataTable from "../../../utils/DataTable";
import { Button } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { styles } from "../../../styles/style";
import CustomModal from "../../../utils/CustomModal";
import { useState } from "react";
import MakeAdmin from "./Actons/MakeAdmin";
import DeleteUser from "./Actons/DeleteUser";

const AllUsers = ({ team = false }: { team?: boolean }) => {
  const { data, isLoading, error } = useGetAllUsersQuery(undefined);
  const [adminOpen, setAdminOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [id, setId] = useState("");

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 0.5 },
    { field: "email", headerName: "Email", flex: 0.5 },
    { field: "role", headerName: "Role", flex: 0.3 },
    { field: "courses", headerName: "Purchased Courses", flex: 0.3 },
    { field: "joinedAt", headerName: "Joined At", flex: 0.5 },
    {
      field: "",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <>
            <Button
              onClick={() => {
                setId(params.row.id);
                setDeleteOpen(!deleteOpen);
              }}
            >
              <AiOutlineDelete
                className="dark:text-white text-black"
                size={20}
              />
            </Button>
          </>
        );
      },
    },
  ];

  const FnFilter = (array: any) => {
    array.forEach((user: any) => {
      rows.push({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        courses: user.courses.length,
        joinedAt: format(new Date(user.createdAt), "dd MMM yyyy"),
      });
    });
  };

  const rows: {}[] = [];

  if (data?.data && team) {
    const newData = data.data.filter((user: any) => user.role === "admin");
    FnFilter(newData);
  } else {
    if (data?.data) {
      FnFilter(data.data);
    }
  }

  return (
    <>
      {team && (
        <div className="flex justify-start pt-20 ml-8 ">
          <button
            onClick={() => setAdminOpen(!adminOpen)}
            className={`${styles.button} !w-[220px] !mb-0 z-[1000] !bg-[#37A39A] !rounded-sm text-white !py-1`}
          >
            Set Role
          </button>
        </div>
      )}
      {rows.length > 0 && (
        <DataTable rows={rows} columns={columns} team={team} />
      )}

      {adminOpen && (
        <CustomModal
          open={adminOpen}
          setOpen={setAdminOpen}
          component={MakeAdmin}
        />
      )}
      {deleteOpen && (
        <CustomModal
          open={deleteOpen}
          setOpen={setDeleteOpen}
          component={DeleteUser}
          id={id}
        />
      )}
    </>
  );
};

export default AllUsers;
