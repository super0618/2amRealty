"use client";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import FeaturedCard from "@/components/featuredcard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function () {
	return (
		<div className="bg-[#efefef]">
			<div className="container mx-auto px-4 py-16">
				<div className="text-4xl font-bold text-[#333] mb-2 text-center">Featured Listings</div>
				<div className="text-lg text-[#666] mb-12 text-center">Handpicked properties by our team.</div>
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
						<FeaturedCard
							thumb="/asssets/images/thumb1.jpg"
							user="/asssets/images/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							sqft={8280}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard
							thumb="/asssets/images/thumb2.jpg"
							user="/asssets/images/user2.png"
							username="Ali Tufan"
							type="Bungalow"
							title="Renovated Apartment"
							location="1421 San Pedro St, Los Angeles"
							beds={4}
							baths={5}
							sqft={8180}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard
							thumb="/asssets/images/thumb3.jpg"
							user="/asssets/images/user3.png"
							username="Ali Tufan"
							type="Bungalow"
							title="Single Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={3}
							baths={2}
							sqft={3280}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard
							thumb="/asssets/images/thumb1.jpg"
							user="/asssets/images/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							sqft={8280}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard
							thumb="/asssets/images/thumb2.jpg"
							user="/asssets/images/user2.png"
							username="Ali Tufan"
							type="Bungalow"
							title="Renovated Apartment"
							location="1421 San Pedro St, Los Angeles"
							beds={4}
							baths={5}
							sqft={8180}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedCard
							thumb="/asssets/images/thumb3.jpg"
							user="/asssets/images/user3.png"
							username="Ali Tufan"
							type="Bungalow"
							title="Single Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={3}
							baths={2}
							sqft={3280}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
