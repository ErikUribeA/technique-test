'use client'
import Image from "next/image"
import './ProcessSection.sass'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IData } from "@/interfaces/IData";

export default function ProcessSection( {text}: IData) {
    return (
        <section>
            <div className="top-part">
                <div>
                    <h2>
                        HOW WE BUILD
                    </h2>
                    <div className="flex w-sceen justify-between items-center gap-4">
                        <h3>WITH HYDRA VR?</h3>
                        <Image src='/images/icon-long-arrow.png' alt="longArrow" width={228} height={100} />
                    </div>
                </div>
                <p> {text} </p>
            </div>

            <div className="relative">
                <div className="absolute">
                    <svg viewBox="0 0 1600 100" width="200%">
                        <path
                            d="M 0,50 
                            C 200,20 400,80 600,50 
                            S 1000,20 1200,50 
                            S 1400,80 1600,50"
                            stroke="#9F7AEA"
                            fill="none"
                            strokeWidth="6"
                        />
                    </svg>
                </div>

                {/* Steps */}
                <div className="">
                    <Swiper
                        spaceBetween={20}
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
                        {[
                            { number: "01", title: "3D Conception", subtitle: "& Design" },
                            { number: "02", title: "Interaction", subtitle: "Design" },
                            { number: "03", title: "VR World", subtitle: "User Testing" },
                            { number: "04", title: "Hydra VR", subtitle: "Deploy" },
                        ].map((step) => (
                            <SwiperSlide key={step.number} >
                                <div className="step">
                                    <div className="circule-out">
                                        <div className="circle">
                                            <span>{step.number}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4><Image src='/images/icons/arrow-step.png' alt="arrow step" width={28} height={22} />  {step.title}</h4>
                                        <p>{step.subtitle}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section >
    )
}