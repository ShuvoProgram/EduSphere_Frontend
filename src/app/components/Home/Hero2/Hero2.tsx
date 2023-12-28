import React from 'react';
import dataAnalytics from '../../../../../public/assets/images/Data-analyst.png';
import WebDesign from '../../../../../public/assets/images/Web-Design.png';
import heroImg from '../../../../../public/assets/images/hero-feature2.png';
import bg from '../../../../../public/assets/images/hero-shape-2.svg'
import group from '../../../../../public/assets/images/Group.png';
import Image from 'next/image';

function Hero2() {
  return (
    <div className="flex sm:flex-col-reverse relative w-[375px] h-[915px] md:w-full md:h-[700px] bg-white">
    <div className="absolute w-[331px] h-[329px] top-[41px] left-[24px] md:w-[650px] md:h-[595px] md:top-[54px] md:left-[584px]">
      <div className="absolute w-[520px] h-[550px] top-0 left-[146px] bg-[#005792] rounded-[295px]" />
      <Image width={520} height={550} className="absolute w-[520px] h-[550px] top-0 left-[146px]" alt="Mask group" src={heroImg} />
      <div className="absolute w-[329px] h-[254px] top-[341px] left-0">
        <div className="relative h-[184px] md:h-[254px]">
          <div className="absolute w-[329px] h-[213px] top-[41px] left-0 bg-white rounded-[8px] shadow-[10px_20px_24px_#3395a01a]" />
          <div className="absolute w-[195px] h-[50px] top-[124px] left-[10px] md:w-[202px] md:h-[60px] md:top-[75px] md:left-[20px]">
            <div className="absolute w-[60px] h-[60px] top-0 left-0 bg-[#005792] rounded-[8px]">
              <Image
              width={32}
              height={32}
                className="absolute w-[32px] h-[32px] top-[14px] left-[14px]"
                alt="Data analyst"
                src={dataAnalytics}
              />
            </div>
            <div className="absolute top-[4px] left-[76px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-[#0e2b3f] text-[18px] tracking-[0.50px] leading-[normal]">
              Data Analyst
            </div>
            <div className="absolute top-[35px] left-[102px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#0e2b3f] text-[14px] tracking-[0.50px] leading-[normal]">
              2145 Reviews
            </div>
            <Image width={18} height={18} className="absolute w-[18px] h-[18px] top-[35px] left-[76px]" alt="Group" src={group} />
          </div>
          <div className="absolute w-[224px] h-[60px] top-[165px] left-[20px]">
            <div className="absolute w-[60px] h-[60px] top-0 left-0 bg-[#f98149] rounded-[8px]">
              <Image
              width={32}
              height={32}
                className="absolute w-[32px] h-[33px] top-[13px] left-[14px]"
                alt="Web design"
                src={WebDesign}
              />
            </div>
            <div className="absolute top-[4px] left-[76px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-[#0e2b3f] text-[18px] tracking-[0.50px] leading-[normal]">
              Website Design
            </div>
            <div className="absolute top-[35px] left-[102px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#0e2b3f] text-[14px] tracking-[0.50px] leading-[normal]">
              2145 Reviews
            </div>
            <Image width={18} height={18} className="absolute w-[18px] h-[18px] top-[35px] left-[76px]" alt="Group" src={group} />
          </div>
          <div className="absolute w-[160px] h-[49px] top-0 left-[40px] md:w-[189px] md:h-[58px] md:top-0 md:left-[71px]">
            <div className="relative w-[187px] h-[58px] bg-[#f88048] rounded-[8px]">
              <div className="absolute top-[16px] left-[44px] [font-family:'Open_Sans-Bold',Helvetica] font-bold text-white text-[18px] tracking-[0.50px] leading-[normal]">
                Best seller
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute w-[442px] h-[397px] top-[95px] left-[120px]">
      <p className="absolute w-[407px] top-0 left-0 [font-family:'Open_Sans-ExtraBold',Helvetica] font-extrabold text-[#0e2b3f] text-[72px] tracking-[0.50px] leading-[100px]">
        Improve your skill with us
      </p>
      <p className="absolute w-[438px] top-[331px] left-0 [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#8a938b] text-[18px] tracking-[0] leading-[33px]">
        Learn anytime anywhere with our best-selected mentor for your future
      </p>
    </div>
    <div className="absolute w-[185px] h-[60px] top-[549px] left-[120px]">
      <div className="relative w-[183px] h-[60px] bg-[#f88048] rounded-[8px]">
        <div className="absolute top-[18px] left-[40px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0.50px] leading-[normal]">
          Get started
        </div>
      </div>
    </div>
    <div className="absolute w-[185px] h-[60px] top-[549px] left-[324px]">
      <div className="relative w-[183px] h-[60px] rounded-[8px] border border-solid border-[#f88048]">
        <div className="absolute top-[17px] left-[63px] [font-family:'Open_Sans-SemiBold',Helvetica] font-semibold text-[#f88048] text-[18px] tracking-[0.50px] leading-[normal]">
          Log in
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero2
