import { Modal, Box } from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  activeItem?: any;
  setRoute?: (route: string) => void;
  component: any;
  id?: string;
  deletingCourse?: boolean;
};

const CustomModal = ({
  activeItem,
  open,
  setOpen,
  setRoute,
  component: Component,
  id,
  deletingCourse = false,
}: Props) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-desription"
    >
      <Box className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-full 800px:w-[450px] bg-white dark:bg-slate-900 runded-[8px] shadow p-4 outline-none">
        <Component
          setOpen={setOpen}
          setRoute={setRoute}
          id={id}
          deletingCourse={deletingCourse}
        />
      </Box>
    </Modal>
  );
};

export default CustomModal;
