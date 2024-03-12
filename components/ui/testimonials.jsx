"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "@/components/testimonial";

export default function () {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Testimonials</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={10}
				slidesPerView={1}
				centeredSlides
				pagination={{ clickable: true }}
				style={{ paddingBottom: 64 }}
				loop
			>
				<SwiperSlide>
					<Testimonial
						avatar="/assets/images/testimonials/1.png"
						name="Augusta Silva"
						role="Sales Manager"
						content="Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Testimonial
						avatar="/assets/images/testimonials/2.png"
						name="Augusta Silva"
						role="Sales Manager"
						content="Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Testimonial
						avatar="/assets/images/testimonials/3.png"
						name="Augusta Silva"
						role="Sales Manager"
						content="Aliquam dictum elit vitae mauris facilisis at dictum urna dignissim donec vel lectus vel felis."
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
