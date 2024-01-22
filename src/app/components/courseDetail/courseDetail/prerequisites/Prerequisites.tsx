import { IoCheckmarkDoneOutline } from "react-icons/io5";

const Prerequisites = ({ prerequisites }: any) => {
  return (
    <div>
      {prerequisites?.map((item: any, index: number) => (
        <div className="w-full flex 800px:items-center py-2" key={index}>
          <div className="w-[15px] mr-1">
            <IoCheckmarkDoneOutline
              size={20}
              className=""
            />
          </div>
          <p className="pl-2 ">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Prerequisites;
