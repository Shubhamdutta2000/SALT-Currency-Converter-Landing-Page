import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, Pagination } from 'swiper'
import './TestimonialCarousal.style.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { useStyles } from './TestimonialCarousal.style';
import { testimonialDetails } from '../../dummyData/Testimonials.list'
import TestimonialCard from '../TestimonialCard'

export const TestimonialCarousal = () => {
    const classes = useStyles();
    const isMobile = window.innerWidth < 768;

    return (
        <>
            <Swiper
                className={classes.testimonialCarousal}
                slidesPerView={isMobile ? 1 : 3}
                spaceBetween={30}
                freeMode={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4800,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
            >
                {testimonialDetails.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <TestimonialCard testimonialDetails={testimonial} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
