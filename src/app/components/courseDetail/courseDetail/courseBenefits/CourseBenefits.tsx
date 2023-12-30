import { IoCheckmarkDoneOutline } from "react-icons/io5";

const CourseBenefits = ({ benefits }: any) => {
  return (
    <div>
      {benefits?.map((item: any, index: number) => (
        <div className="w-full flex 800px:items-center py-2" key={index}>
          <div className="w-[15px] mr-1">
            <IoCheckmarkDoneOutline
              size={20}
              className="text-black dark:text-white"
            />
          </div>
          <p className="pl-2 text-black dark:text-white">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseBenefits;
