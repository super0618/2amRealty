"use client";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import TeamSlide from "@/components/team-slide";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ({ large = true }) {
	return (
		<div className="container py-16">
			<div className="text-4xl font-bold mb-2 text-center">Meet the team</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
				spaceBetween={30}
				breakpoints={{
					750: { slidesPerView: 2 },
					1050: { slidesPerView: 3 },
				}}
				centeredSlides
				pagination={{ clickable: true }}
				style={{ paddingBottom: 64 }}
				autoplay
				loop
			>
				<SwiperSlide>
					<TeamSlide
						avatar="/images/teams/member1.png"
						name="Ashley Andrews"
						role="CEO"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<TeamSlide
						avatar="/images/teams/member2.png"
						name="Deidra Hopkins"
						role="Realtor"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<TeamSlide
						avatar="/images/teams/member3.png"
						name="Kevin Jones"
						role="Broker-of-Record"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
				<SwiperSlide>
					<TeamSlide
						avatar="/images/teams/member4.png"
						name="Loretta Sercy"
						role="Realtor"
						large={large}
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
