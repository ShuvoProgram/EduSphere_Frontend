import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import { useTheme } from "next-themes";
import { HiMinus, HiPlus } from "react-icons/hi";

type Props = {
  courseData: any;
  courseAccessPage?: boolean;
  activeVideo?: any;
  setActiveVideo?: any;
};

const CourseOverview = ({
  courseData,
  courseAccessPage,
  activeVideo,
  setActiveVideo,
}: Props) => {
  const { theme, setTheme } = useTheme();

  // find unique sections,retrieving the section tile
  const uniqueSections = new Set();

  courseData?.forEach((course: any) => {
    uniqueSections.add(course.videoSection);
  });

  // creating an array of the section titles -- ["","",""]
  const uniqueSectionArray: string[] = Array.from(uniqueSections) as string[];

  //   creating group of similar video sectoions
  const sectionObjectsMap: any = {};

  courseData?.forEach((course: any) => {
    const sectionTitle = course.videoSection;

    if (!sectionObjectsMap[sectionTitle]) {
      sectionObjectsMap[sectionTitle] = [];
    }

    sectionObjectsMap[sectionTitle].push(course);
  });

  //   handling plus/minus button on expanding accordion
  const [expanded, setExpanded] = useState<any>({});
  const handleChange = (i: number) => {
    setExpanded((prevExpanded: any) => ({
      ...prevExpanded,
      [i]: !prevExpanded[i],
    }));
  };

  const sectionLectures: number[] = [];

  const handleActiveVdo = (sectionIndex: number, lectureIndex: number) => {
    if (sectionIndex > 0) {
      let total = 0;
      for (let index = 0; index < sectionIndex; index++) {
        total = total + sectionLectures[index];
      }
      setActiveVideo(total + lectureIndex);
    } else {
      setActiveVideo(lectureIndex);
    }
  };

  return (
    <div>
      {uniqueSectionArray.map((sectionTitle: string, sectionIndex: number) => {
        sectionLectures.push(sectionObjectsMap[sectionTitle].length);
        return (
          <Accordion
            key={sectionIndex}
            className=" py-2 mt-2  !dark:bg-opacity-20 "
            onChange={() => handleChange(sectionIndex)}
            sx={{
              bgcolor: `${theme === "dark" ? "#171C24" : "#fff "}`,
              borderRadius: "5px",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded[sectionIndex] ? (
                  <HiMinus className="dark:text-[#37a39a] text-black" />
                ) : (
                  <HiPlus className="dark:text-[#37a39a] text-black" />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div>
                <p className="font-Poppins dark:text-white text-black font-[500]">
                  {sectionTitle}
                </p>
                <p className="text-sm font-[500] text-[#37a39a]">
                  {sectionObjectsMap[sectionTitle].length}{" "}
                  {sectionObjectsMap[sectionTitle].length === 1
                    ? "Lecture"
                    : "Lectures"}
                </p>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              {courseAccessPage ? (
                <div className="flex flex-col gap-y-2 dark:text-white text-black ">
                  {sectionObjectsMap[sectionTitle].map(
                    (lecture: any, lectureIndex: number) => (
                      <button
                        onClick={() =>
                          handleActiveVdo(sectionIndex, lectureIndex)
                        }
                        key={lecture._id}
                        className="flex items-center gap-3  py-3 pl-2 800px:pl-4 hover:bg-slate-100 dark:hover:bg-opacity-5 rounded"
                      >
                        <OndemandVideoIcon sx={{ color: "#37a39a" }} />
                        <p>{lecture.title}</p>
                      </button>
                    )
                  )}
                </div>
              ) : (
                <div className="flex flex-col gap-y-1 dark:text-white text-black">
                  {sectionObjectsMap[sectionTitle].map((lecture: any) => (
                    <div
                      key={lecture._id}
                      className="flex items-center gap-3  py-2 pl-2 800px:pl-4"
                    >
                      <OndemandVideoIcon sx={{ color: "#37a39a" }} />
                      <p>{lecture.title}</p>
                    </div>
                  ))}
                </div>
              )}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
};

export default CourseOverview;
