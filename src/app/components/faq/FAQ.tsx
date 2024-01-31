import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { motion } from "framer-motion";
import { HiMinus, HiPlus } from "react-icons/hi";
import { useState } from "react";
import { useTheme } from "next-themes";
import { useGetHeroDataQuery } from "@/app/redux/api/layout/layoutApi";

const FAQ = () => {
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, type: "spring", duration: 1 },
    },
    hidden: { opacity: 0, scale: 0 },
  };
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
      <motion.div
        className="section-title text-center mb-14 md:mb-20 lg:mb-24 xl:mb-28"
        initial="hidden"
        whileInView="visible"
        variants={variants}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Frequently asked question</h2>
      </motion.div>
      <div className="mt-10">
        {data?.data?.faq?.map((q: any, i: any) => (
          <Accordion
            key={i}
            className=" py-2 mt-2  "
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
                  <HiMinus className=" text-black" />
                ) : (
                  <HiPlus className=" text-black" />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <p className="font-Poppins text-black">
                {q.question}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="font-Poppins text-black">
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