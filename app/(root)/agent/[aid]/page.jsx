"use client";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	IconBrandFacebookFilled,
	IconBrandTwitterFilled,
	IconBrandInstagram,
	IconBrandPinterest,
	IconBrandDribbble,
	IconStarFilled,
	IconStarHalfFilled,
	IconStar,
} from "@tabler/icons-react";
import Link from "next/link";
import FeaturedSide from "@/components/featuredside";
import ViewedSide from "@/components/viewedside";
import AgentListing from "@/components/agent-listing";

export default function () {
	return (
		<div className="pt-32 pb-12 bg-gray-50">
			<div className="container mb-4">
				<div className="flex justify-between items-center mb-4">
					<h2 className="font-bold text-2xl">Agent</h2>
				</div>
			</div>
			<div className="container grid grid-cols-3 gap-6">
				<div className="col-span-3 md:col-span-2 space-y-6">
					<div className="bg-white rounded-md border shadow-sm p-6">
						<div className="grid grid-cols-3 gap-4">
							<div>
								<img src="/images/agents/1.jpg" alt="agent" className="h-full object-cover rounded-lg" />
							</div>
							<div className="col-span-2">
								<Link href="/agent/sfsef" className="font-bold text-[#666x] block cursor-pointer mb-1 hover:text-[#ff5a5f]">
									Renovated Apart
								</Link>
								<h2 className="text-[#ff5a5f] text-sm mb-2">Broker</h2>
								<div className="text-sm mb-1">Office: 134 456 3210</div>
								<div className="text-sm mb-1">Mobile: 891 456 9874</div>
								<div className="text-sm mb-1">Fax: 342 654 1258</div>
								<div className="text-sm mb-1">Email: pakulla@realtor.com</div>
								<div className="flex gap-2 py-2">
									<IconBrandFacebookFilled size={16} color="#999" />
									<IconBrandTwitterFilled size={16} color="#999" />
									<IconBrandInstagram size={16} color="#999" />
									<IconBrandPinterest size={16} color="#999" />
									<IconBrandDribbble size={16} color="#999" />
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-md shadow-sm border p-6">
						<div className="text-xl font-bold mb-6">Description</div>
						<div>
							<p className="mb-4">
								Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see the
								views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.
							</p>
							<p className="mb-4">
								Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large
								living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the
								interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master
								suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
							</p>
							<p className="mb-4">
								Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large
								living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the
								interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master
								suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
							</p>
							<p>
								Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a large
								living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows. Despite the
								interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room. The master
								suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
							</p>
						</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<div className="text-xl font-bold mb-6">Listing</div>
						<AgentListing
							thumb="/images/featureds/thumb1.jpg"
							type="Apartment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
						/>
						<AgentListing
							thumb="/images/featureds/thumb2.jpg"
							type="Apartment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
						/>
						<AgentListing
							thumb="/images/featureds/thumb3.jpg"
							type="Apartment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
						/>
					</div>

					<div className="bg-white rounded-md shadow-sm border p-6">
						<div className="flex gap-1 items-center mb-6">
							<p className="text-xl font-bold pr-6">896 Reviews</p>
							<IconStarFilled color="#ff5a5f" size={18} />
							<IconStarFilled color="#ff5a5f" size={18} />
							<IconStarFilled color="#ff5a5f" size={18} />
							<IconStarFilled color="#ff5a5f" size={18} />
							<IconStarHalfFilled color="#ff5a5f" size={18} />
							<p className="text-sm text-[#666]">(4.5 out of 5)</p>
						</div>

						<div className="space-y-4">
							<div className="text-md font-bold text-[#666]">Write a Review</div>
							<div className="flex items-center gap-6">
								<div className="flex gap-1">
									<IconStarFilled color="#ff5a5f" size={16} />
									<IconStarFilled color="#ff5a5f" size={16} />
									<IconStarFilled color="#ff5a5f" size={16} />
									<IconStarHalfFilled color="#ff5a5f" size={16} />
									<IconStar color="#ff5a5f" size={16} />
								</div>
								<p className="text-sm">Your Rating & Review</p>
							</div>
							<input type="text" className="border rounded-lg w-full py-1 px-4" placeholder="Review Title" />
							<textarea className="border rounded-lg py-3 px-4 w-full h-36" placeholder="Your Review"></textarea>
							<div className="bg-[#ff5a5f] py-3 px-8 text-center inline-block text-white rounded-lg cursor-pointer hover:bg-[#e94c51]">
								Submit Review
							</div>
						</div>
					</div>
				</div>
				<div className="hidden md:block space-y-6">
					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold mb-4">Contact with Agent</h2>
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Your Name" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Phone" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Email" />
						<textarea className="px-4 py-2 border border-gray-300 rounded-md mb-4 w-full h-36 resize-none" placeholder="Your Message"></textarea>
						<div className="bg-[#ff5a5f] py-2 text-center text-white rounded-lg w-full cursor-pointer hover:bg-[#e94c51]">Search</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold mb-3">Featured Properties</h2>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
							spaceBetween={10}
							centeredSlides
							pagination={{ clickable: true }}
							style={{ paddingBottom: 10 }}
							autoplay
							loop
						>
							<SwiperSlide>
								<FeaturedSide thumb="/images/featureds/thumb1.jpg" type="Aprtment" price={1500} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/images/featureds/thumb2.jpg" type="Bungalow" price={1800} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/images/featureds/thumb3.jpg" type="Bungalow" price={2700} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/images/featureds/thumb1.jpg" type="Aprtment" price={1600} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/images/featureds/thumb2.jpg" type="Bungalow" price={1200} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/images/featureds/thumb3.jpg" type="Bungalow" price={3200} />
							</SwiperSlide>
						</Swiper>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold mb-3">Categories Property</h2>
						<div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1 hover:text-blue-600">
									Apartment
								</Link>
								<div className="text-xs">6 properties</div>
							</div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1 hover:text-blue-600">
									Condo
								</Link>
								<div className="text-xs">9 properties</div>
							</div>
							<div className="flex justify-between items-center py-1">
								<Link href="#" className="text-blue-400 text-sm py-1 hover:text-blue-600">
									Family House
								</Link>
								<div className="text-xs">12 properties</div>
							</div>
							<div className="flex justify-between items-center py-1">
								<Link href="#" className="text-blue-400 text-sm py-1 hover:text-blue-600">
									Modern Villa
								</Link>
								<div className="text-xs">3 properties</div>
							</div>
							<div className="flex justify-between items-center py-1">
								<Link href="#" className="text-blue-400 text-sm py-1 hover:text-blue-600">
									Town House
								</Link>
								<div className="text-xs">12 properties</div>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold mb-3">Recently Viewed</h2>
						<div className="space-y-4">
							<ViewedSide thumb="/images/featureds/thumb1.jpg" beds={2} baths={3} type="Bungalow" price={3200} />
							<ViewedSide thumb="/images/featureds/thumb2.jpg" beds={2} baths={3} type="Bungalow" price={3200} />
							<ViewedSide thumb="/images/featureds/thumb3.jpg" beds={2} baths={3} type="Bungalow" price={3200} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
