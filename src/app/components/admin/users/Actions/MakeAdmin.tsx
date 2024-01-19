import React, { useEffect, useState } from "react";
import { styles } from "../../../../styles/style";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Button, CircularProgress, Input } from "@mui/material";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useUpdateRoleMutation } from "../../../../redux/api/user/userApi";
import toast from "react-hot-toast";

const MakeAdmin = ({ setOpen }: { setOpen: (state: boolean) => void }) => {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [updateRole, { isLoading, isSuccess, error }] = useUpdateRoleMutation();

  const handleSave = async (e: any) => {
    e.preventDefault();
    if (!role || !email) toast.error("Provide needed information");
    await updateRole({ email, role });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Role updated");
      setOpen(false);
    }
  }, [isSuccess, error, setOpen]);

  return (
    <div className="w-full">
      <h1 className={`${styles.title}`}>Set Role for users</h1>
      <form className="mt-5" onSubmit={handleSave}>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Enter Email"
          variant="outlined"
          className="w-full "
          size="small"
          sx={{
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: "#37A39A",
              },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#37A39A",
            },
          }}
        />
        <div className="w-full mt-5 relative mb-1">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label"> Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Age"
              onChange={(e) => setRole(e.target.value)}
            >
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            type="submit"
            className={`${styles.button} !mb-0 z-[1000] !bg-[#37A39A] !rounded-sm text-white !py-1`}
          >
            {isLoading ? (
              <CircularProgress
                sx={{
                  color: "#37a39a",
                }}
                size={20}
              />
            ) : (
              " Save"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;
