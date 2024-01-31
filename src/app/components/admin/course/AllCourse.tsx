import { useGetAllCourseQuery } from '@/app/redux/api/courses/coursesApi';
import { Button } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react'
import { format } from "date-fns";
import { AiOutlineDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import DataTable from '@/app/utils/DataTable';
import CustomModal from '@/app/utils/CustomModal';
import DeleteUser from '../users/Actions/DeleteUser';

function AllCourse() {
    const { data, isLoading, error } = useGetAllCourseQuery(undefined);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [id, setId] = useState("");

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "title", headerName: "Course Title", flex: 1 },
    { field: "ratings", headerName: "Ratings", flex: 0.5 },
    { field: "purchased", headerName: "Purchased", flex: 0.5 },
    { field: "createdAt", headerName: "Created At", flex: 0.5 },
    {
      field: "edit",
      headerName: "Edit",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <Link href={`/admin/edit-course/${params.row.id}`}>
            <BsPencil className=" text-black" size={20} />
          </Link>
        );
      },
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 0.2,
      renderCell: (params: any) => {
        return (
          <Button
            onClick={() => {
              setId(params.row.id);
              setDeleteOpen(!deleteOpen);
            }}
          >
            <AiOutlineDelete
              className="■ text-black"
              size={20}
            />
          </Button>
        );
      },
    },
  ];

  const rows: {}[] = [];

  if (data?.data) {
    data.data.forEach((course: any) => {
      rows.push({
        id: course._id,
        title: course.name,
        purchased: course.purchased,
        createdAt: format(new Date(course.createdAt), "dd MMM yyyy"),
      });
    });
  }

  return (
    <>
    {rows.length > 0 && <DataTable rows={rows} columns={columns} />}
      {deleteOpen && (
        <CustomModal
          open={deleteOpen}
          setOpen={setDeleteOpen}
          component={DeleteUser}
          id={id}
          deletingCourse={true}
        />
      )}
    </>
  )
}

export default AllCourse;