import CommentItem from "./CommentItem";

type Props = {
  data: any;
  activeVideo: any;
  answer: any;
  setAnswer: any;
  handleAnswerSubmit: any;
  user?: any;
  setQuestionId?: any;
  answerLoad?: any;
  questionId?: string;
};
const CommentReply = ({
  data,
  activeVideo,
  answer,
  setAnswer,
  handleAnswerSubmit,
  setQuestionId,
  answerLoad,
  questionId,
}: Props) => {
  return (
    <div className="w-full my-3">
      {data[activeVideo]?.questions.map((item: any, index: any) => (
        <CommentItem
          key={index}
          data={data}
          activeVideo={activeVideo}
          item={item}
          index={index}
          answer={answer}
          setAnswer={setAnswer}
          handleAnswerSubmit={handleAnswerSubmit}
          setQuestionId={setQuestionId}
          answerLoad={answerLoad}
          questionId={questionId}
        />
      ))}
    </div>
  );
};

export default CommentReply;
