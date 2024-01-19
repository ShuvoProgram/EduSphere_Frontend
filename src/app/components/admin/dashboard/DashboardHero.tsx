import React, { useState } from "react";
import DashboardWidget from "./DashboardWidget";

const DashboardHero = ({ isDashboard }: any) => {
  const [open, setOpen] = useState();
  return (
    <div>
      {isDashboard && <DashboardWidget open={open} setOpen={setOpen} />}
    </div>
  );
};

export default DashboardHero;
