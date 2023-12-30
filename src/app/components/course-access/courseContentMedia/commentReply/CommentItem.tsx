"use client";
import { format } from "date-fns";
import Image from "next/image";
import avatar from "../../../../../public/assets/avatar.png";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { VscVerifiedFilled } from "react-icons/vsc";

const CommentItem = ({
  item,
  answer,
  setAnswer,
  handleAnswerSubmit,
  setQuestionId,
  answerLoad,
  questionId,
}: any) => {
  const [replyActive, setReplyActive] = useState(false);

  return (
    <div className="my-4">
      <div className="flex mb-2 dark:text-white text-black">
        <div className="w-[40px] h-[40px] bg-slate-600 rounded-[50px] flex items-center justify-center cursor-pointer">
          <Image
            src={item?.user ? item?.user?.avatar?.url : avatar}
            width={40}
            height={40}
            alt=""
            className="rounded-full w-[40px] h-[40px]"
          />
        </div>
        <div className="pl-3">
          <h5 className="text-[18px]">{item?.user?.name}</h5>
          <p className="text-[16px]">{item?.question}</p>
          <small className="text-[#003A55]  dark:text-[#A3b3BC]">
            {format(new Date(item.createdAt), "dd MMM yyyy")} •
          </small>
        </div>
      </div>
      <div className="w-full flex items-center">
        <span
          className="800px: pl-16 text-black dark:text-[#ffffff83] cursor-pointer mr-2"
          onClick={() => {
            setReplyActive(!replyActive);
            setQuestionId(item._id);
          }}
        >
          {!replyActive
            ? item?.questionReplies?.length
              ? "All Replies"
              : "Add Reply"
            : "Hide Replies"}
        </span>

        <span className="pl-1  cursor-pointer text-[#000000b8] dark:text-[#ffffff83]">
          ({item?.questionReplies?.length ? item?.questionReplies?.length : 0}{" "}
          replies)
        </span>
      </div>

      {replyActive && questionId === item?._id && (
        <>
          {item?.questionReplies?.map((reply: any) => (
            <>
              <div
                className="w-full flex 800px: ml-16 my-5 text-black dark:text-white"
                key={reply._id}
              >
                <div>
                  <Image
                    src={reply?.user.avatar ? reply?.user?.avatar.url : avatar}
                    width={30}
                    height={30}
                    alt=""
                    className="w-[30px] h-[30px] rounded-full object-cover"
                  />
                </div>
                <div className="pl-2">
                  <h5 className="text-[20px] flex items-center gap-1">
                    {reply?.user?.name}{" "}
                    {reply?.user?.role === "admin" && (
                      <VscVerifiedFilled className="text-[#37a39a] text-[18px]" />
                    )}
                  </h5>
                  <p>{reply?.answer}</p>
                  <small className="text-[#ffffff83]">
                    {format(new Date(reply?.createdAt), "dd MMM yyyy")} •
                  </small>
                </div>
              </div>
            </>
          ))}
          <>
            <div className="w-full flex relative">
              <input
                type="text"
                placeholder="Enter your answer..."
                value={answer[item?._id] || ""}
                onChange={(e) =>
                  setAnswer({ ...answer, [item?._id]: e.target.value })
                }
                className="block 800px:ml-12 mt-2 outline-none bg-transparent border-b border-[#00000027] dark:border-slate-500 p-[5px] w-[95%] dark:text-white text-black pr-16"
              />
              <button
                type="submit"
                disabled={answerLoad}
                className={`absolute right-0 bottom-1  text-[#37a39a] font-[500] ${
                  answerLoad ? "cursor-no-drop" : ""
                }`}
                onClick={() => handleAnswerSubmit(item?._id)}
              >
                {answerLoad ? (
                  <CircularProgress
                    sx={{
                      color: "#37a39a",
                    }}
                    size={20}
                  />
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default CommentItem;
