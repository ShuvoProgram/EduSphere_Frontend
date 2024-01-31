import { TestimonialData } from '@/app/mock/TestimonialData';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

function Testimonial() {
  return (
    <div className="testimonial-area pt-20 pb-20 lg:pt-100 lg:pb-70">
      <div className="container mx-auto">
        <div className="lg:flex items-center">
          <div className="lg:w-6/12 mb-10 lg:mb-0">
            <div className="testimonial-img">
              <img
                src="/assets/images/testimonials/testimonial-1.png"
                alt="testimonial"
                className="w-full"
              />
            </div>
          </div>

          <div className="lg:w-6/12">
            <div className="testimonials-conetent">
              <h2 className="text-xl lg:text-4xl font-bold mb-6">
                Our Students Are Our Strength. See What They Say About Us
              </h2>

              <Swiper
			  spaceBetween={30}
			  centeredSlides={true}
			  autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			  }}
                pagination={{
                  clickable: true,
                }}
				
				modules={[Autoplay, Pagination]}
                className="testimonials-slide"
              >
                {TestimonialData.length > 0 &&
                  TestimonialData.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="single-testimonial m-5 lg:m-30">
                        <div className="testimonial-conetent">
                          <p>{testimonial.description}</p>
                        </div>

                        <div className="testimonial-info flex items-center">
                          <img
                            className="rounded-full me-3"
                            src={testimonial.image_url}
                            alt="testimonial"
                            width={50}
                            height={50}
                          />
                          <h4 className="mb-0">
                            {testimonial.name},{' '}
                            <span>{testimonial.designation}</span>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
