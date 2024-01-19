import React, { useEffect } from "react";
import { styles } from "../../../../styles/style";

import { useDeleteUserMutation } from "../../../../redux/api/user/userApi";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";
import { useDeleteCourseMutation } from "../../../../redux/api/courses/coursesApi";

type Props = {
  setOpen: (state: boolean) => void;
  id: string;
  deletingCourse: boolean;
};

const DeleteUser = ({ setOpen, id, deletingCourse }: Props) => {
  const [deleteUser, { isLoading, isSuccess, error }] = useDeleteUserMutation();

  const [
    deleteCourse,
    { isLoading: deleteLoading, isSuccess: deleteSuccess, error: deleteError },
  ] = useDeleteCourseMutation();

  const handleDelete = async () => {
    if (deletingCourse) {
      await deleteCourse(id);
    } else {
      await deleteUser(id);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("User deleted");
      setOpen(false);
    }
    if (error) {
      const errorData = error as any;
      toast.error(errorData.data.message);
    }
  }, [isSuccess, error, setOpen]);

  useEffect(() => {
    if (deleteSuccess) {
      toast.success("Course deleted");
      setOpen(false);
    }
    if (deleteError) {
      const errorData = deleteError as any;
      toast.error(errorData.data.message);
    }
  }, [deleteSuccess, deleteError, setOpen]);

  return (
    <div className="w-full">
      <h1 className={`${styles.title} !text-left dark:text-white text-black`}>
        {deletingCourse
          ? "Are you sure delete this course?"
          : " Are you sure delete this user?"}
      </h1>
      <div className="mt-5 flex gap-5 justify-end">
        <button
          onClick={() => setOpen(false)}
          className={`${styles.button} !mb-0 z-[1000] !bg-transparent  !rounded-sm dark:text-white text-black !py-1`}
        >
          Cancel
        </button>
        <button
          onClick={handleDelete}
          className={`${styles.button} !mb-0 z-[1000] !bg-red-800 !rounded-sm text-white !py-1`}
        >
          {isLoading || deleteLoading ? (
            <CircularProgress
              sx={{
                color: "#fff",
              }}
              size={20}
            />
          ) : (
            " Yes"
          )}
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
