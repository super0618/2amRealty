"use client";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import FeaturedSlide from "@/components/featured-slide";
import { Swiper, SwiperSlide } from "swiper/react";

export default function () {
	return (
		<div className="bg-gray-50">
			<div className="container py-16">
				<div className="text-4xl font-bold mb-2 text-center">Featured Listings</div>
				<div className="text-lg text-[#666] mb-12 text-center">Handpicked properties by our team.</div>
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
						<FeaturedSlide
							thumb="/images/featureds/thumb1.jpg"
							user="/images/featureds/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							name="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedSlide
							thumb="/images/featureds/thumb2.jpg"
							user="/images/featureds/user2.png"
							username="Ali Tufan"
							type="Bungalow"
							name="Renovated Apartment"
							location="1421 San Pedro St, Los Angeles"
							beds={4}
							baths={5}
							price={1800}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedSlide
							thumb="/images/featureds/thumb3.jpg"
							user="/images/featureds/user3.png"
							username="Ali Tufan"
							type="Bungalow"
							name="Single Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={3}
							baths={2}
							price={2700}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedSlide
							thumb="/images/featureds/thumb1.jpg"
							user="/images/featureds/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							name="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1600}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedSlide
							thumb="/images/featureds/thumb2.jpg"
							user="/images/featureds/user2.png"
							username="Ali Tufan"
							type="Bungalow"
							name="Renovated Apartment"
							location="1421 San Pedro St, Los Angeles"
							beds={4}
							baths={5}
							price={1200}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<FeaturedSlide
							thumb="/images/featureds/thumb3.jpg"
							user="/images/featureds/user3.png"
							username="Ali Tufan"
							type="Bungalow"
							name="Single Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={3}
							baths={2}
							sqft={3280}
							price={3200}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
