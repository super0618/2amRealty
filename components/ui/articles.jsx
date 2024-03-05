"use client";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import ArticleCard from "@/components/articlecard";
import { Swiper, SwiperSlide } from "swiper/react";
import thumb1 from "@/public/asssets/images/thumb1.jpg";
import thumb2 from "@/public/asssets/images/thumb2.jpg";
import thumb3 from "@/public/asssets/images/thumb3.jpg";
import user1 from "@/public/asssets/images/user1.png";
import user2 from "@/public/asssets/images/user2.png";
import user3 from "@/public/asssets/images/user3.png";

export default function () {
	return (
		<div className="bg-[#efefef]">
			<div className="container mx-auto px-4 py-16">
				<div className="text-4xl font-bold text-[#333] mb-2 text-center">Articles & Tips</div>
				<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
					spaceBetween={100}
					breakpoints={{
						1024: {
							slidesPerView: 2,
						},
						1280: {
							slidesPerView: 3,
						},
					}}
					centeredSlides
					pagination={{ clickable: true }}
					style={{ paddingBottom: 64 }}
					autoplay
					loop
				>
					<SwiperSlide>
						<ArticleCard thumb={thumb1} user={user1} username="Ali Tufan" type="Business" title="Luxury Family Home" />
					</SwiperSlide>
					<SwiperSlide>
						<ArticleCard thumb={thumb2} user={user2} username="Ali Tufan" type="Construction" title="Renovated Apartment" />
					</SwiperSlide>
					<SwiperSlide>
						<ArticleCard thumb={thumb3} user={user3} username="Ali Tufan" type="Business" title="Single Family Home" />
					</SwiperSlide>
					<SwiperSlide>
						<ArticleCard thumb={thumb1} user={user1} username="Ali Tufan" type="Business" title="Luxury Family Home" />
					</SwiperSlide>
					<SwiperSlide>
						<ArticleCard thumb={thumb2} user={user2} username="Ali Tufan" type="Construction" title="Renovated Apartment" />
					</SwiperSlide>
					<SwiperSlide>
						<ArticleCard thumb={thumb3} user={user3} username="Ali Tufan" type="Construction" title="Single Family Home" />
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
