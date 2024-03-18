"use client";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import BlogSlide from "@/components/blog-slide";
import { Swiper, SwiperSlide } from "swiper/react";

export default function () {
	return (
		<div className="bg-gray-50">
			<div className="container py-16">
				<div className="text-4xl font-bold mb-2 text-center">Blogs & Tips</div>
				<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
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
						<BlogSlide
							thumb="/images/blogs/thumb1.jpg"
							user="/images/blogs/user1.png"
							username="Ali Tufan"
							type="Business"
							title="Luxury Family Home"
							description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<BlogSlide
							thumb="/images/blogs/thumb2.jpg"
							user="/images/blogs/user2.png"
							username="Ali Tufan"
							type="Construction"
							title="Renovated Apartment"
							description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<BlogSlide
							thumb="/images/blogs/thumb3.jpg"
							user="/images/blogs/user3.png"
							username="Ali Tufan"
							type="Business"
							title="Single Family Home"
							description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<BlogSlide
							thumb="/images/blogs/thumb1.jpg"
							user="/images/blogs/user1.png"
							username="Ali Tufan"
							type="Business"
							title="Luxury Family Home"
							description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<BlogSlide
							thumb="/images/blogs/thumb2.jpg"
							user="/images/blogs/user2.png"
							username="Ali Tufan"
							type="Construction"
							title="Renovated Apartment"
							description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
						/>
					</SwiperSlide>
					<SwiperSlide>
						<BlogSlide
							thumb="/images/blogs/thumb3.jpg"
							user="/images/blogs/user3.png"
							username="Ali Tufan"
							type="Construction"
							title="Single Family Home"
							description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Duis Mol"
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}
