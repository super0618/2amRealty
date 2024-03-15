"use client";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Check, PlayCircle, Star, Heart, Share2, Printer } from "react-feather";
import Link from "next/link";
import FeaturedSide from "@/components/featuredside";
import ViewedSide from "@/components/viewedside";

export default function () {
	return (
		<div className="pt-32 pb-12 bg-gray-50">
			<div className="container mb-4">
				<div className="flex justify-between items-center mb-4">
					<div>
						<h2 className="font-bold text-2xl text-[#333]">Luxury Family Home</h2>
						<div className="text-[#666]">1421 San Pedro St, Los Angeles, CA 900015</div>
					</div>
					<div className="text-xl text-[#666]">
						<span className="text-[#444] font-bold">$13000</span> / mo
					</div>
					<div className="flex space-x-4">
						<Heart size={18} color="#ff5a5f" className="cursor-pointer" />
						<Share2 size={18} color="#333" className="cursor-pointer" />
						<Printer size={18} color="#333" className="cursor-pointer" />
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="col-span-2 rounded-lg overflow-hidden cursor-pointer">
						<img src="/assets/images/property/fp1.jpg" width="100%" alt="alt" className="object-cover shadow-lg" />
					</div>
					<div className="grid grid-cols-2 gap-2">
						<img src="/assets/images/property/2.jpg" alt="alt" className="object-cover h-full rounded-lg cursor-pointer shadow-lg" />
						<img src="/assets/images/property/3.jpg" alt="alt" className="object-cover h-full rounded-lg cursor-pointer shadow-lg" />
						<img src="/assets/images/property/4.jpg" alt="alt" className="object-cover h-full rounded-lg cursor-pointer shadow-lg" />
						<img src="/assets/images/property/5.jpg" alt="alt" className="object-cover h-full rounded-lg cursor-pointer shadow-lg" />
						<img src="/assets/images/property/6.jpg" alt="alt" className="object-cover h-full rounded-lg cursor-pointer shadow-lg" />
						<img src="/assets/images/property/7.jpg" alt="alt" className="object-cover h-full rounded-lg cursor-pointer shadow-lg" />
					</div>
				</div>
			</div>
			<div className="container grid grid-cols-3 gap-6">
				<div className="col-span-3 md:col-span-2 space-y-6">
					<div className="bg-white rounded-md shadow-sm border">
						<div className="p-6 border-b">
							<div className="flex gap-4 mb-6">
								<div className="bg-gray-100 py-2 px-4 rounded-lg">Apartment</div>
								<div className="bg-gray-100 py-2 px-4 rounded-lg">Beds: 4</div>
								<div className="bg-gray-100 py-2 px-4 rounded-lg">Baths: 2</div>
								<div className="bg-gray-100 py-2 px-4 rounded-lg">Sq Ft: 5280</div>
							</div>
							<div className="text-xl font-bold text-[#333] mb-6">Description</div>
							<div>
								<p className="mb-4">
									Evans Tower very high demand corner junior one bedroom plus a large balcony boasting full open NYC views. You need to see
									the views to believe them. Mint condition with new hardwood floors. Lots of closets plus washer and dryer.
								</p>
								<p className="mb-4">
									Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a
									large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows.
									Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room.
									The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
								</p>
								<p className="mb-4">
									Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a
									large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows.
									Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room.
									The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
								</p>
								<p>
									Fully furnished. Elegantly appointed condominium unit situated on premier location. PS6. The wide entry hall leads to a
									large living room with dining area. This expansive 2 bedroom and 2 renovated marble bathroom apartment has great windows.
									Despite the interior views, the apartments Southern and Eastern exposures allow for lovely natural light to fill every room.
									The master suite is surrounded by handcrafted milkwork and features incredible walk-in closet and storage space.
								</p>
							</div>
						</div>

						<div className="p-6 border-b">
							<div className="text-xl font-bold text-[#333] mb-6">Property Details</div>
							<div className="grid grid-cols-3 gap-4">
								<div>Property ID : HZ27</div>
								<div>Bedrooms : 8</div>
								<div>Property Type : Apartment</div>
								<div>Price : $130,000</div>
								<div>Bathrooms : 4</div>
								<div>Property Status : For Sale</div>
								<div>Property Size : 1560 Sq Ft</div>
								<div>Garage : 2</div>
								<div>Year Built : 2016-01-09</div>
								<div>Garage Size : 200 SqFt</div>
							</div>
						</div>

						<div className="p-6">
							<div className="text-xl font-bold text-[#333] mb-6">Additional details</div>
							<div className="grid grid-cols-3 gap-4">
								<div>Deposit : 20%</div>
								<div>Last remodel year : 1987</div>
								<div>Pool Size : 300 Sqft</div>
								<div>Amenities : Clubhouse</div>
								<div>Additional Rooms : Guest Bath</div>
								<div>Equipment : Grill - Gas</div>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<div className="text-xl font-bold text-[#333] mb-6">Features</div>
						<div className="grid grid-cols-3 gap-4">
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Air Conditioning
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Lawn
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Swimming Pool
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Barbeque
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Microwave
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> TV Cable
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Dryer
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Outdoor Shower
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Washer
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Gym
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Refrigerator
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> WiFi
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Laundry
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Sauna
							</div>
							<div className="flex items-center gap-2">
								<Check size={16} color="#ff5a5f" /> Window Coverings
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<div className="flex justify-between mb-6">
							<div className="text-xl font-bold text-[#333]">Location</div>
							<div>1421 San Pedro St, Los Angeles, CA 90015</div>
						</div>
						<iframe
							title="map"
							className="gmap_iframe w-full h-96 rounded-lg"
							src="https://www.google.com/maps/d/embed?mid=1tJl0-uRax4AKBfbh1eLPLX5WzOk&amp;hl=en&amp;ehbc=2E312F"
						></iframe>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<div className="text-xl font-bold text-[#333] mb-6">Property Video</div>
						<div className="relative cursor-pointer">
							<img src="/assets/images/property/fp1.jpg" alt="video" className="rounded-lg" />
							<PlayCircle className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2" color="#fff" size={64} />
						</div>
					</div>

					<div className="bg-white rounded-md shadow-sm border">
						<div className="flex gap-1 p-6 items-center">
							<p className="text-xl font-bold text-[#333] pr-6">896 Reviews</p>
							<Star color="#ff5a5f" fill="#ff5a5f" size={18} />
							<Star color="#ff5a5f" fill="#ff5a5f" size={18} />
							<Star color="#ff5a5f" fill="#ff5a5f" size={18} />
							<Star color="#ff5a5f" size={18} />
							<Star color="#ff5a5f" size={18} />
							<p className="text-sm text-[#666]">(4.5 out of 5)</p>
						</div>

						<div className="px-6 space-y-6 pb-6 border-b">
							<div className="flex gap-4">
								<div className="basis-20 shrink-0">
									<img src="/assets/images/property/user.png" alt="user" className="rounded-full" />
								</div>
								<div>
									<div className="flex items-center">
										<p className="font-bold text-[#333] pr-4">Samul Williams</p>
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" size={16} />
									</div>
									<p className="text-[#666]">
										Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to
										come back during the cooler seasons!
									</p>
								</div>
							</div>

							<div className="flex gap-4">
								<div className="basis-20 shrink-0">
									<img src="/assets/images/property/user.png" alt="user" className="rounded-full" />
								</div>
								<div>
									<div className="flex items-center">
										<p className="font-bold text-[#333] pr-4">Samul Williams</p>
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
										<Star color="#ff5a5f" size={16} />
									</div>
									<p className="text-[#666]">
										Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to
										come back during the cooler seasons!
									</p>
								</div>
							</div>
						</div>

						<div className="p-6 space-y-4">
							<div className="text-md font-bold text-[#666]">Write a Review</div>
							<div className="flex items-center gap-6">
								<div className="flex gap-1">
									<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
									<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
									<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
									<Star color="#ff5a5f" fill="#ff5a5f" size={16} />
									<Star color="#ff5a5f" size={16} />
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
						<h2 className="text-lg font-bold text-[#333] mb-3">Listed By</h2>
						<div className="flex gap-4">
							<div className="w-24">
								<img src="/assets/images/property/user.png" alt="user" className="rounded-full" />
							</div>
							<div>
								<h2 className="font-bold text-[#333]">Samul Williams</h2>
								<p className="text-[#666]">(123)456-7890</p>
								<p className="text-[#666]">info@findhouse.com</p>
								<p className="text-[#ff5a5f] text-sm py-2">View My Listing</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold text-[#333] mb-3">Featured Properties</h2>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
							spaceBetween={10}
							centeredSlides
							pagination={{ clickable: true }}
							autoplay
							loop
						>
							<SwiperSlide>
								<FeaturedSide thumb="/assets/images/features/thumb1.jpg" type="Aprtment" price={1500} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/assets/images/features/thumb2.jpg" type="Bungalow" price={1800} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/assets/images/features/thumb3.jpg" type="Bungalow" price={2700} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/assets/images/features/thumb1.jpg" type="Aprtment" price={1600} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/assets/images/features/thumb2.jpg" type="Bungalow" price={1200} />
							</SwiperSlide>
							<SwiperSlide>
								<FeaturedSide thumb="/assets/images/features/thumb3.jpg" type="Bungalow" price={3200} />
							</SwiperSlide>
						</Swiper>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold text-[#333] mb-3">Categories Property</h2>
						<div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Apartment
								</Link>
								<div className="text-xs">6 properties</div>
							</div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Condo
								</Link>
								<div className="text-xs">9 properties</div>
							</div>
							<div className="flex justify-between items-center py-1">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Family House
								</Link>
								<div className="text-xs">12 properties</div>
							</div>
							<div className="flex justify-between items-center py-1">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Modern Villa
								</Link>
								<div className="text-xs">3 properties</div>
							</div>
							<div className="flex justify-between items-center py-1">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Town House
								</Link>
								<div className="text-xs">12 properties</div>
							</div>
						</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold text-[#333] mb-3">Recently Viewed</h2>
						<div className="space-y-4">
							<ViewedSide thumb="/assets/images/features/thumb1.jpg" beds={2} baths={3} type="Bungalow" price={3200} />
							<ViewedSide thumb="/assets/images/features/thumb2.jpg" beds={2} baths={3} type="Bungalow" price={3200} />
							<ViewedSide thumb="/assets/images/features/thumb3.jpg" beds={2} baths={3} type="Bungalow" price={3200} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
