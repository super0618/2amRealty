"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import TeamCard from "@/components/teamcard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function () {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Meet the team</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={10}
				breakpoints={{
					1024: {
						slidesPerView: 2,
					},
					1280: {
						slidesPerView: 3,
					},
				}}
				centeredSlides
				navigation
				pagination={{ clickable: true }}
				style={{ paddingBottom: 64 }}
				loop
			>
				<SwiperSlide>
					<TeamCard
						avatar="/asssets/images/member1.jpg"
						name="Mary Brown"
						role="Strategy Director"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<TeamCard
						avatar="/asssets/images/member2.jpg"
						name="Mary Brown"
						role="Creative Leader"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<TeamCard
						avatar="/asssets/images/member3.jpg"
						name="Mary Brown"
						role="CTO"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<TeamCard
						avatar="/asssets/images/member4.jpg"
						name="Mary Brown"
						role="Designer"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<TeamCard
						avatar="/asssets/images/member5.jpg"
						name="Mary Brown"
						role="Developer"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
