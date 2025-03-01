'use client'
import Image from "next/image"
import Card from "../UI/card/card"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './ServicesSection.sass'
import { IData } from "@/interfaces/IData";

export default function ServicesSection({ text }: IData) {
    return (
        <section>
            <div className="top-part">
                <div>
                    <h2>
                        WHY BUILD
                    </h2>
                    <div className="flex w-sceen justify-between items-center gap-4">
                        <h3>WITH HYDRA?</h3>
                        <Image src='/images/icon-long-arrow.png' alt="longArrow" width={228} height={100} />
                    </div>
                </div>
                <p> {text} </p>
            </div>

            <div className="cards">

                <div className="swiper-buttons">
                    <button className="custom-prev">
                        <Image src="/images/icons/icon-arrow-left.png" alt="prev" width={30} height={30} />
                    </button>
                </div>

                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: ".custom-next",
                        prevEl: ".custom-prev",
                        enabled: true
                    }}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        1024: { slidesPerView: 4, centeredSlides: false },
                        768: { slidesPerView: 2, centeredSlides: true },
                        0: { slidesPerView: 1, centeredSlides: true },
                    }}
                    className="swiper-container"
                >
                    <SwiperSlide className="swiper-slide">
                        <Card title="SIMULATION" image="/images/first-image.jpeg" position="object-top" />
                    </SwiperSlide >
                    <SwiperSlide className="swiper-slide">
                        <Card title="EDUCATION" image="/images/second-image.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <Card title="SELF-CARE" image="/images/third-image.jpeg" />
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide" >
                        <Card title="OUTDOOR" image="/images/fourth-image.jpeg" />
                    </SwiperSlide>
                </Swiper>
                
                <div className="swiper-buttons">
                    <button className="custom-next">
                        <Image src="/images/icons/icon-arrow-right.png" alt="next" width={30} height={30} />
                    </button>
                </div>
            </div>
        </section>
    )
}