'use client'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './TechSection.sass'

export default function TechSection() {
    return (
        <section>
            <div className="card_image">
                <h1>TECHNOLOGIES & HARDWARE</h1>
                <h2>USED BY HYDRA VR.</h2>
                <button className='Button'> <Image src='/images/icons/arrow-below.png' alt='arrow below' width={25} height={12.5} className='text-[#433D60]' /> </button>
            </div>

            <div className='icons'>
                <Swiper
                    pagination={{ clickable: true }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        1024: { slidesPerView: 4, centeredSlides: false },
                        768: { slidesPerView: 2, centeredSlides: true },
                        0: { slidesPerView: 1, centeredSlides: true },
                    }}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <Image src='/images/icons/hydra-icon-1.png' alt='hydra icon' width={174} height={174} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/images/icons/hydra-icon-2.png' alt='hydra icon' width={252} height={252} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/images/icons/hydra-icon-3.png' alt='hydra icon' width={263} height={263} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src='/images/icons/hydra-icon-4.png' alt='hydra icon' width={282} height={282} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}