import React from "react";

export const HeroResponsive = (): JSX.Element => {
  return (
    <div className="relative w-[375px] h-[915px] bg-white">
      <div className="absolute w-[331px] h-[329px] top-[41px] left-[24px]">
        <p className="absolute w-[327px] top-0 left-0 [font-family:'Open_Sans-ExtraBold',Helvetica] font-extrabold text-[#0e2b3f] text-[48px] tracking-[0.50px] leading-[70px]">
          Improve your skill with us
        </p>
        <p className="absolute w-[292px] top-[230px] left-0 [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#8a938b] text-[18px] tracking-[0] leading-[33px]">
          Learn anytime anywhere with our best-selected mentor for your future
        </p>
      </div>
      <div className="absolute w-[185px] h-[60px] top-[400px] left-[24px]">
        <div className="relative w-[183px] h-[60px] bg-[#f98149] rounded-[8px]">
          <div className="absolute top-[18px] left-[40px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0.50px] leading-[normal]">
            Get started
          </div>
        </div>
      </div>
      <div className="absolute w-[326px] h-[368px] top-[520px] left-[25px]">
        <div className="absolute w-[326px] h-[326px] top-0 left-0 bg-[#005792] rounded-[163px]" />
        <div className="absolute w-[241px] h-[184px] top-[184px] left-0">
          <div className="relative h-[184px]">
            <div className="absolute w-[241px] h-[158px] top-[26px] left-0 bg-white rounded-[8px] shadow-[10px_20px_24px_#3395a01a]" />
            <div className="absolute w-[195px] h-[50px] top-[124px] left-[10px]">
              <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-[#f88048] rounded-[8px]">
                <img
                  className="absolute w-[24px] h-[25px] top-[13px] left-[13px]"
                  alt="Web design"
                  src="web-design.svg"
                />
              </div>
              <div className="absolute top-[3px] left-[62px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-[#0e2b3f] text-[16px] tracking-[0.50px] leading-[normal]">
                Website Design
              </div>
              <div className="absolute top-[29px] left-[79px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#8a948c] text-[12px] tracking-[0.50px] leading-[normal]">
                2145 Reviews
              </div>
              <img className="absolute w-[14px] h-[14px] top-[30px] left-[62px]" alt="Group" src="group.png" />
            </div>
            <div className="absolute w-[173px] h-[50px] top-[63px] left-[10px]">
              <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-[#005792] rounded-[8px]">
                <img
                  className="absolute w-[24px] h-[24px] top-[13px] left-[13px]"
                  alt="Data analyst"
                  src="data-analyst.svg"
                />
              </div>
              <div className="absolute top-[3px] left-[62px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-[#0e2b3f] text-[16px] tracking-[0.50px] leading-[normal]">
                Data analyst
              </div>
              <div className="absolute top-[29px] left-[79px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#8a948c] text-[12px] tracking-[0.50px] leading-[normal]">
                2145 Reviews
              </div>
              <img className="absolute w-[14px] h-[14px] top-[30px] left-[62px]" alt="Group" src="image.png" />
            </div>
            <div className="absolute w-[160px] h-[49px] top-0 left-[40px]">
              <div className="relative w-[158px] h-[49px] bg-[#f88048] rounded-[8px]">
                <div className="absolute top-[15px] left-[40px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[14px] tracking-[0.50px] leading-[normal]">
                  Best seller
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
