import React from "react";
import toast from "react-hot-toast";
import { styles } from "../../../styles/style";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

type Props = {
  benefits: { title: string }[];
  setBenefits: React.Dispatch<React.SetStateAction<{ title: string }[]>>;
  prerequisites: { title: string }[];
  setPrerequisites: React.Dispatch<React.SetStateAction<{ title: string }[]>>;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const CourseData: React.FC<Props> = ({
  benefits,
  setBenefits,
  prerequisites,
  setPrerequisites,
  active,
  setActive,
}: Props) => {
  const handleBenefitChange = (index: number, value: string) => {
    setBenefits((prevBenefits) => {
      const updatedBenefits = [...prevBenefits];
      updatedBenefits[index] = { title: value };
      return updatedBenefits;
    });
  };

  const handleAddBenefit = () => {
    setBenefits((prevBenefits) => [...prevBenefits, { title: "" }]);
  };

  const handlePrerequisitesChange = (index: number, value: string) => {
    setPrerequisites((prevPrerequisites) => {
      const updatedPrerequisites = [...prevPrerequisites];
      updatedPrerequisites[index] = { title: value };
      return updatedPrerequisites;
    });
  };

  const handleAddPrerequisites = () => {
    setPrerequisites((prevPrerequisites) => [
      ...prevPrerequisites,
      { title: "" },
    ]);
  };

  const prevButton = () => {
    if (active > 0) {
      setActive((prevActive) => prevActive - 1);
    }
  };

  const handleOptions = () => {
    if (benefits.length === 0) {
      toast.error("Please add benefits.");
    } else if (
      prerequisites.length === 0 ||
      prerequisites[prerequisites.length - 1]?.title === ""
    ) {
      toast.error("Please fill the fields before going to the next step.");
    } else {
      setActive((prevActive) => prevActive + 1);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 block">
      <div>
        <label className={`${styles.label} text-[20px]`} htmlFor="Benefit">
          What are the benefits for students in this course?
        </label>
        <br />
        {benefits.map((benefit: any, index: number) => (
          <input
            type="text"
            key={index}
            name="Benefit"
            placeholder="You will be able to build a full stack LMS Platform..."
            required
            className={`${styles.input} my-2`}
            value={benefit.title}
            onChange={(e) => handleBenefitChange(index, e.target.value)}
          />
        ))}
        <AddCircleOutlineIcon
          sx={{ fontSize: 60 }}
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddBenefit}
        />
      </div>
      <div>
        <label
          className={`${styles.label} text-[20px]`}
          htmlFor="prerequisites"
        >
          What are the prerequisites for students in this course?
        </label>
        <br />
        {prerequisites.map((prerequisite: any, index: number) => (
          <input
            type="text"
            key={index}
            name="prerequisites"
            placeholder="You need basic knowledge of MERN Stack"
            required
            className={`${styles.input} my-2`}
            value={prerequisite.title}
            onChange={(e) => handlePrerequisitesChange(index, e.target.value)}
          />
        ))}
        <AddCircleOutlineIcon
          sx={{ fontSize: 60 }}
          style={{ margin: "10px 0px", cursor: "pointer", width: "30px" }}
          onClick={handleAddPrerequisites}
        />
      </div>
      <div className="w-full flex items-center justify-between">
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => prevButton()}
        >
          Prev
        </div>
        <div
          className="w-full 800px:w-[180px] flex items-center justify-center h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          onClick={() => handleOptions()}
        >
          Next
        </div>
      </div>
    </div>
  );
};

export default CourseData;