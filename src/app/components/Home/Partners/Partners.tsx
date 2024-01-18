import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { PartnersData } from "@/app/mock/PartnersData";

function Partners() {
  return (
    <div className="bg-[#F6FAFB] pt-20 pb-40">
      <div className="container mx-auto">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 4,
            },
            576: {
              slidesPerView: 3,
              spaceBetween: 4,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 6,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 6,
            },
          }}
          className="tpartner-slide"
        >
          {PartnersData.length > 0 &&
            PartnersData.map((partner) => (
              <SwiperSlide key={partner.id}>
                <motion.div
                  className="p-4"
                  initial="hidden"
                  whileInView="visible"
                  transition={{
                    type: "spring",
                    duration: 3,
                    bounce: 0.3,
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 0, scale: 0 },
                  }}
                >
                  <img
                    src={partner.partner_image}
                    alt={partner.name}
                    className="w-full h-auto"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Partners;
