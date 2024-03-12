"use client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Team from "@/components/team";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ({ size = "lg" }) {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Meet the team</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
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
					<Team
						avatar="/assets/images/teams/member1.jpg"
						name="Mary Brown"
						role="Strategy Director"
						size={size}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member2.jpg"
						name="Mary Brown"
						role="Creative Leader"
						size={size}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member3.jpg"
						name="Mary Brown"
						role="CTO"
						size={size}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member4.jpg"
						name="Mary Brown"
						role="Designer"
						size={size}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member5.jpg"
						name="Mary Brown"
						role="Developer"
						size={size}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
