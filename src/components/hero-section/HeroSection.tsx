'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.sass";
import Button from "../UI/button/button";
import { IData } from "@/interfaces/IData";

export default function HeroSection({ text }: IData) {
    console.log(text)
    return (
        <div className="hero-section">
            <main>
                <section className="text-content">
                    <h2>
                        <span>Dive</span> Into The Depths
                        Of <span>Virtual Reality</span>
                    </h2>
                    <p>
                        {text}
                    </p>
                    <div className="build-button">
                        <Button text="BUILD YOUR WORLD" />
                        <Image src="/images/icon-arrow.png" alt="arrow" width={42} height={33} />
                    </div>
                </section>
                <div className="image-container">
                    <Image src="/images/main-image.png" alt="main-image" width={490} height={426} />
                </div>
            </main>

            <div className="contact-us">

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
                        768: { slidesPerView: 3 },
                        0: { slidesPerView: 1 },
                    }}
                    className="swiper-container"
                >
                    <SwiperSlide>
                        <div className="small-cards">
                            <Image src="/images/icons/location.png" alt="location" width={41} height={61} />
                            <div>
                                <h2>Pay Us a Visit</h2>
                                <p>Union St, Seattle, WA 98101, United States</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="small-cards">
                            <Image src="/images/icons/call.png" alt="call" width={44} height={44} />
                            <div>
                                <h2>Give Us a Call</h2>
                                <p>(110) 1111-1010</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="small-cards">
                            <Image src="/images/icons/mail.png" alt="mail" width={49} height={38} />
                            <div>
                                <h2>Send Us a Message</h2>
                                <p>Contact@HydraVTech.com</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-buttons">
                    <button className="custom-next">
                        <Image src="/images/icons/icon-arrow-right.png" alt="next" width={30} height={30} />
                    </button>
                </div>
            </div>
        </div>
    );
}
