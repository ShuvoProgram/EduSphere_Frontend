"use client";
import { styles } from "../../../styles/style";
import { CircularProgress } from "@mui/material";
import avatar from "../../../../public/assets/avatar.png";
import { format } from "date-fns";

import CoursePlayer from "../../../utils/CoursePlayer";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
  AiOutlineStar,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  useAddNewAnswerMutation,
  useAddNewQuestionMutation,
  useAddReviewInCourseMutation,
} from "../../../redux/api/courses/coursesApi";
import CommentReply from "./commentReply/CommentReply";
import StarRating from "../../../utils/StarRating";

type Props = {
  data: any;
  activeVideo: any;
  setActiveVideo: any;
  id: string;
  user: any;
  reviews: any;
};

const CourseContentMedia = ({
  data,
  activeVideo,
  setActiveVideo,
  id,
  user,
  reviews,
}: Props) => {
  const [activeBar, setActiveBar] = useState(0);
  const [question, setQuestion] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [answer, setAnswer] = useState<Record<string, unknown>>({});
  const [questionId, setQuestionId] = useState("");

  const [addNewQuestion, { isLoading, isSuccess, error }] =
    useAddNewQuestionMutation();

  const [
    addNewAnswer,
    { isLoading: answerLoad, isSuccess: answerSuccess, error: answerError },
  ] = useAddNewAnswerMutation();

  const [
    addReviewInCourse,
    { isLoading: riviewLoad, isSuccess: reviewSuccess, error: reviewError },
  ] = useAddReviewInCourseMutation();

  const handleQuestion = async () => {
    if (question.length === 0) return toast.error("Question can't be empty");

    const questionData = {
      courseId: id,
      contentId: data[activeVideo]?._id,
      question,
    };
    addNewQuestion(questionData);
  };

  const handleAnswerSubmit = async (itemId: string) => {
    if (!answer[itemId]) return toast.error("Answer can't be empty");

    const answerData = {
      courseId: id,
      contentId: data[activeVideo]?._id,
      answer: answer[itemId],
      questionId,
    };
    addNewAnswer(answerData);
  };

  const handleAddReview = async () => {
    if (review.length === 0) return toast.error("Review can't be empty");

    const reviewData = {
      comment: review,
      rating: rating,
    };

    addReviewInCourse({ data: reviewData, courseId: id });
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("Thank you. Soon you'll be replied");
      setQuestion("");
    }
    if (error) {
      toast.error("Some error occuured, try later");
    }
  }, [isSuccess, error]);

  useEffect(() => {
    if (answerSuccess) {
      toast.success("Your reply has been posted");
      setAnswer({});
    }
    if (answerError) {
      toast.error("Some error occuured, try later");
    }
  }, [answerSuccess, answerError]);

  useEffect(() => {
    if (reviewSuccess) {
      toast.success("Thanks for the feedback");
      setReview("");
      setRating(0);
    }
    if (reviewError) {
      toast.error("Some error occuured, try later");
    }
  }, [reviewSuccess, reviewError]);

  const handleNext = () => {
    if (activeVideo < data.length - 1) {
      setActiveVideo(activeVideo + 1);
    }
  };

  return (
    <div className="w-[95%] mx-auto py-4 800px:w-[85%]">
      <CoursePlayer
        title={data[activeVideo]?.title}
        videoUrl={data[activeVideo]?.videoUrl}
        hasAccess={true}
      />
      <div className="w-full flex items-center justify-between my-3">
        <button
          className={`${styles.button} !w-[unset] !min-h-[40px] !py-[unset] ${
            activeVideo === 0 ? "cursor-no-drop opacity-[.8]" : ""
          }`}
          onClick={() => setActiveVideo(activeVideo > 0 ? activeVideo - 1 : 0)}
        >
          <AiOutlineArrowLeft className="mr-2" />
          Prev Lesson
        </button>
        <button
          className={`${styles.button} !w-[unset] min-h-[40px] !py-[unset] ${
            data && data.length - 1 === activeVideo
              ? "cursor-no-drop opacity-[.8]"
              : ""
          }`}
          onClick={handleNext}
        >
          Next Lesson
          <AiOutlineArrowRight className="ml-2" />
        </button>
      </div>
      <h1 className="pt-2 text-[25px] font-[600]">{data[activeVideo].title}</h1>{" "}
      <br />
      <div className="w-full p-4 flex items-center justify-between bg-slate-500 bg-opacity-20 backdrop-blur shadow-[bg-slate-700] rounded shadow-inner">
        {["Overview", "Resources", "Q&A", "Reviews"].map((text, index) => (
          <h5
            key={index}
            className={`800px: text-[20px] cursor-pointer  ${
              activeBar === index ? "text-[#37a39a]" : "dark:text-white"
            }`}
            onClick={() => setActiveBar(index)}
          >
            {text}
          </h5>
        ))}
      </div>
      <br />
      {activeBar === 0 && (
        <p className="text=[18px] whitespace-pre-line mb-3 dark:text-white text-black">
          {data[activeVideo]?.description}
        </p>
      )}
      {activeBar === 1 && (
        <>
          {data[activeVideo].links.map((item: any) => (
            <div className="mb-5" key={item?._id}>
              <h2 className="800px: text-[20px] 800px:inline-block dark:text-white text-black">
                {item.title && item.title + ":"}
              </h2>
              <a
                className="inline-block text-[#4395c4] 800px: text-[20px] 800px:pl-2"
                href={item.url}
                target="_blank"
              >
                {item.url}
              </a>
            </div>
          ))}
        </>
      )}
      {activeBar === 2 && (
        <>
          <div className="flex w-full">
            <Image
              src={user?.avatar ? user?.avatar.url : avatar}
              width={40}
              height={40}
              alt=""
              className="rounded-full w-[40px] h-[40px]"
            />
            <textarea
              name=""
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              id=""
              cols={40}
              rows={5}
              placeholder="Write your question..."
              className="outline-none bg-transparent ml-3 border border-[#00000027] dark:border-slate-500 800px:w-full p-2 rounded w-[90%] 800px:text-[18px] font-Poppins dark:text-white text-black"
            ></textarea>
          </div>
          <div className="w-full flex justify-end">
            <button
              disabled={isLoading}
              className={`${
                styles.button
              } !w-[120px] h-[40px] text-[18px] mt-5 text-white ${
                isLoading ? "cursor-not-allowed" : ""
              }`}
              onClick={handleQuestion}
            >
              {isLoading ? (
                <CircularProgress
                  sx={{
                    color: "#ffffff",
                  }}
                  size={20}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
          <br />
          <br />
          <div className="w-full  ">
            <div>
              <CommentReply
                activeVideo={activeVideo}
                answer={answer}
                setAnswer={setAnswer}
                data={data}
                handleAnswerSubmit={handleAnswerSubmit}
                user={user}
                setQuestionId={setQuestionId}
                answerLoad={answerLoad}
                questionId={questionId}
              />
            </div>
          </div>
        </>
      )}
      {activeBar === 3 && (
        <div className="w-full">
          <div className="flex w-full">
            <Image
              src={user?.avatar ? user.avatar.url : avatar}
              width={40}
              height={40}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px] font-[500] dark:text-white text-black">
                Give a Rating <span className="text-red-500">*</span>
              </h5>
              <div className="flex w-full ml-2 pb-3">
                {[1, 2, 3, 4, 5].map((i) =>
                  rating >= i ? (
                    <AiFillStar
                      key={i}
                      className="mr-1 cursor-pointer text-[20.5px] "
                      color="rgb(246,186,0)"
                      size={20.5}
                      onClick={() => setRating(i)}
                    />
                  ) : (
                    <AiOutlineStar
                      key={i}
                      className="mr-1 cursor-pointer text-[20.5px]"
                      color="rgb(246,186,0)"
                      onClick={() => setRating(i)}
                    />
                  )
                )}
              </div>
              <textarea
                name=""
                value={review}
                onChange={(e) => setReview(e.target.value)}
                id=""
                cols={40}
                rows={5}
                placeholder="Write your review..."
                className="outline-none bg-transparent ml-3 border border-slate-400 800px:w-full p-2 rounded w-[90%] 800px:text-[18px] font-Poppins"
              ></textarea>
              <div className="w-full flex justify-end">
                <button
                  disabled={riviewLoad}
                  className={`${styles.button} !w-[120px] h-[40px] text-[18px] mt-5 text-white`}
                  onClick={handleAddReview}
                >
                  {riviewLoad ? (
                    <CircularProgress
                      sx={{
                        color: "#ffffff",
                      }}
                      size={20}
                    />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
              <div className="w-full my-6">
                {reviews.map((review: any) => (
                  <div
                    className="flex mb-2 text-black dark:text-white"
                    key={review._id}
                  >
                    <div className="w-[40px] h-[40px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer">
                      <Image
                        src={review?.user ? review?.user?.avatar?.url : avatar}
                        width={40}
                        height={40}
                        alt=""
                        className="rounded-full w-[40px] h-[40px]"
                      />
                    </div>
                    <div className="pl-3">
                      <h5 className="text-[18px]">{review?.user?.name}</h5>
                      <StarRating
                        ratings={review?.rating}
                        length={review.length}
                      />
                      <p className="text-[16px]">{review?.comment}</p>
                      <small className="text-[#003A55]  dark:text-[#A3b3BC]">
                        {format(new Date(review?.createdAt), "dd MMM yyyy")} •
                      </small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseContentMedia;
