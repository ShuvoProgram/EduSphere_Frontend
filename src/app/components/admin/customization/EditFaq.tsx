import { useState, useEffect } from "react";
import { styles } from "../../../styles/style";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "../../../redux/api/layout/layoutApi";
import { HiMinus, HiPlus } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

type error = {
  data: {
    message: string;
  };
};

const EditFaq = () => {
  const [questions, setQuestions] = useState<any[]>([]);

  const { data } = useGetHeroDataQuery("faq", {
    refetchOnMountOrArgChange: true,
  });

  const [editLayout, { isLoading, isSuccess, error }] = useEditLayoutMutation();

  useEffect(() => {
    if (isSuccess) toast.success("FAQ updated");
    const errorData = error as error;
    if (error) toast.error(errorData.data.message);
  }, [isSuccess, error]);

  useEffect(() => {
    setQuestions(data?.data?.faq);
  }, [setQuestions, data]);

  const toggleQuestion = (id: any) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q._id === id ? { ...q, active: !q.active } : q))
    );
  };

  const handleQuestionChange = (id: any, value: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q._id === id ? { ...q, question: value } : q))
    );
  };

  const handleAnswerChange = (id: any, value: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) => (q._id === id ? { ...q, answer: value } : q))
    );
  };

  const newFaqHandler = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        answer: "",
      },
    ]);
  };

  const areQuestionsUnchanged = (
    originalQuestions: any[],
    newQuestions: any[]
  ) => {
    return JSON.stringify(originalQuestions) === JSON.stringify(newQuestions);
  };

  const isAnyQuestionEmpty = (questions: any[]) => {
    return questions?.some((q) => q.question === "" || q.answer === "");
  };

  const handleEdit = async () => {
    const data = {
      type: "faq",
      faq: questions,
    };
    await editLayout(data);
  };

  return (
    <div className="w-[90%] 800px:w-[80%] m-auto mt-[120px]">
      <div className="mt-12">
        <dl className="space-y-8">
          {questions?.map((q: any, index: number) => (
            <div
              className={`${
                q._id !== questions[0]?._id ? "border-t" : ""
              } border-gray-200 pt-6 dark:text-white text-black`}
              key={index}
            >
              <dt className="text-lg">
                <button
                  className="flex items-start dark:text-white text-black justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(q._id)}
                >
                  <input
                    className={`${styles.input} border-none dark:text-white text-black`}
                    value={q.question}
                    onChange={(e: any) =>
                      handleQuestionChange(q._id, e.target.value)
                    }
                    placeholder="Add your question..."
                  />
                  <span className="ml-6 flex-shrink-0">
                    {q.active ? (
                      <HiMinus className="h-6 w-6 dark:text-[#37a39a] text-black" />
                    ) : (
                      <HiPlus className="h-6 w-6 dark:text-[#37a39a] text-black" />
                    )}
                  </span>
                </button>
              </dt>
              {q.active && (
                <dd className="mt-2 pr-12">
                  <input
                    className={`${styles.input} border-none dark:text-white text-black`}
                    value={q.answer}
                    onChange={(e: any) =>
                      handleAnswerChange(q._id, e.target.value)
                    }
                    placeholder="Add your answer..."
                  />
                  <span className="ml-6 flex-shrink-0">
                    <AiOutlineDelete
                      className="dark:text-white text-black text-[18px] cursor-pointer"
                      onClick={() => {
                        setQuestions((prevQuestions) =>
                          prevQuestions.filter(
                            (item: any) => item._id !== q._id
                          )
                        );
                      }}
                    />
                  </span>
                </dd>
              )}
            </div>
          ))}
        </dl>
        <br />
        <br />
        <IoMdAddCircleOutline
          className="dark:text-white text-black text-[25px] cursor-pointer"
          onClick={newFaqHandler}
        />
      </div>
      <div className=" mt-10 flex justify-end">
        <div
          className={`${
            styles.button
          } !w-[100px] min-h-[40px] h-[40px] !text-white  rounded-sm 
  ${
    areQuestionsUnchanged(data?.data?.faq, questions) ||
    isAnyQuestionEmpty(questions)
      ? "cursor-not-allowed"
      : "cursor-pointer bg-[#37a39a]"
  } rounded `}
          onClick={
            areQuestionsUnchanged(data?.data?.faq, questions) ||
            isAnyQuestionEmpty(questions)
              ? () => null
              : handleEdit
          }
        >
          {isLoading ? (
            <CircularProgress
              sx={{
                color: "#37a39a",
              }}
              size={20}
            />
          ) : (
            "Save"
          )}
        </div>
      </div>
    </div>
  );
};

export default EditFaq;
