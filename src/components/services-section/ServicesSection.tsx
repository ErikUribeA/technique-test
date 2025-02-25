'use client'
import Image from "next/image"
import Card from "../UI/card/card"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './ServicesSection.sass'

export default function ServicesSection() {
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
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
            </div>

            <div className="cards">
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
            </div>
        </section>
    )
}