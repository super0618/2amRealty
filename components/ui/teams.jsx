"use client";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import Team from "@/components/team";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ({ large = true }) {
	return (
		<div className="container py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Meet the team</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<Swiper
				modules={[Pagination, Scrollbar, A11y]}
				spaceBetween={30}
				breakpoints={{
					750: { slidesPerView: 2 },
					1050: { slidesPerView: 3 },
				}}
				centeredSlides
				pagination={{ clickable: true }}
				style={{ paddingBottom: 64 }}
				loop
			>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member1.jpg"
						name="Mary Brown"
						role="Strategy Director"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member2.jpg"
						name="Mary Brown"
						role="Creative Leader"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member3.jpg"
						name="Mary Brown"
						role="CTO"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member4.jpg"
						name="Mary Brown"
						role="Designer"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<Team
						avatar="/assets/images/teams/member5.jpg"
						name="Mary Brown"
						role="Developer"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
