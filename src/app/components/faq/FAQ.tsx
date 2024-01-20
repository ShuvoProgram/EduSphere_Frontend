import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useGetHeroDataQuery } from "@/app/redux/api/layout/layoutApi";

const FAQ = () => {
  // handle icon toggle
  const [expanded, setExpanded] = useState<any>({});
  const handleChange = (i: number) => {
    setExpanded((prevExpanded: any) => ({
      ...prevExpanded,
      [i]: !prevExpanded[i],
    }));
  };

  const { data } = useGetHeroDataQuery("faq");

  const { theme, setTheme } = useTheme();

  return (
    <div className="w-[90%] 800px:w-[60%]  mx-auto mt-12" id="faq">
      <h1 className="capitalize 800px:text-[40px] text-[25px] text-black dark:text-white font-[700] font-Poppins text-center py-2">
        Frequently asked question
      </h1>
      <div className="mt-10">
        {data?.data?.faq?.map((q: any, i: any) => (
          <Accordion
            key={i}
            className=" py-2 mt-2  !dark:bg-opacity-20 "
            onChange={() => handleChange(i)}
            sx={{
              bgcolor: `${theme === "dark" ? "#171C24" : "#fff "}`,
              borderRadius: "5px",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded[i] ? (
                  <HiMinus className="dark:text-[#37a39a] text-black" />
                ) : (
                  <HiPlus className="dark:text-[#37a39a] text-black" />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="font-Poppins dark:text-white text-black">
                {q.question}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-Poppins dark:text-white text-black">
                {q.answer}
              </p>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
