import { GoStarFill, GoStar } from "react-icons/go";

const StarRating = ({ ratings, length }: any) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((a, i) => (
          <div key={i} className="text-yellow-400">
            {length === 0 ? (
              <GoStar className="text-[20.5px] " />
            ) : (
              <div>
                {ratings >= i + 1 ? (
                  <GoStarFill />
                ) : (
                  <GoStar className="text-[16.5px]" />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
