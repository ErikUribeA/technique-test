'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSection.sass";
import Button from "../UI/button/button";

export default function HeroSection() {
    return (
        <div className="hero-section">
            <main>
                <section className="text-content">
                    <h2>
                        <span>Dive</span> Into The Depths
                        Of <span>Virtual Reality</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae.
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

                <Swiper
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    navigation={true} // Swiper maneja la navegación automáticamente
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
            </div>
        </div>
    );
}
