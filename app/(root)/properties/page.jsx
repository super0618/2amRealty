"use client";
import { useState } from "react";
import { Grid, List } from "react-feather";
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Property from "@/components/property";
import FeaturedSide from "@/components/featuredside";
import ViewedSide from "@/components/viewedside";
import ReactPaginate from "react-paginate";
import { ArrowLeft, ArrowRight } from "react-feather";

export default function () {
	const [listMode, setListMode] = useState(false);

	const onPageChange = (e) => {
		console.log(e);
	};

	return (
		<div className="bg-gray-50 pt-32 pb-12">
			<div className="container mb-4 flex justify-between items-center">
				<h2 className="text-2xl font-bold text-[#333]">All Properties</h2>
				<div className="flex space-x-2">
					<div className="rounded-md grid place-items-center bg-gray-200 p-2 cursor-pointer" onClick={() => setListMode(false)}>
						<Grid fill="#999" color="#999" size={16} />
					</div>
					<div className="rounded-md grid place-items-center bg-gray-200 p-2 cursor-pointer" onClick={() => setListMode(true)}>
						<List fill="#999" color="#999" size={16} />
					</div>
				</div>
			</div>
			<div className="container grid grid-cols-3 gap-6">
				<div className="hidden md:block space-y-6">
					<div className="bg-white p-6 rounded-md border shadow-sm">
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Keyword" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Location" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Status" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Property Type" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Bathrooms" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Bedrooms" />
						<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4 w-full" placeholder="Property Type" />
						<div className="grid grid-cols-2 gap-6">
							<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4" placeholder="Min Price" />
							<input type="text" className="px-4 py-1 border border-gray-300 rounded-md mb-4" placeholder="Max Price" />
						</div>
						<div className="bg-[#ff5a5f] py-2 text-center text-white rounded-lg cursor-pointer hover:bg-[#e94c51]">Clear Filters</div>
					</div>

					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold text-[#333] mb-3">Featured Properties</h2>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
							spaceBetween={10}
							centeredSlides
							pagination={{ clickable: true }}
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
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Family House
								</Link>
								<div className="text-xs">12 properties</div>
							</div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Modern Villa
								</Link>
								<div className="text-xs">3 properties</div>
							</div>
							<div className="flex justify-between items-center">
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
				<div className="col-span-3 md:col-span-2 space-y-6">
					<div className="flex justify-between items-center bg-white px-6 py-2 rounded-md shadow-sm border">
						<div>10 Results</div>
						<select className="border text-sm py-1.5 w-32 px-3">
							<option value="1">All</option>
							<option value="2">Sale</option>
							<option value="3">Rent</option>
						</select>
					</div>
					<div className="grid grid-cols-2 gap-6">
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<Property
							thumb="/assets/images/features/thumb1.jpg"
							user="/assets/images/features/user1.png"
							username="Ali Tufan"
							type="Aprtment"
							title="Luxury Family Home"
							location="1421 San Pedro St, Los Angeles"
							beds={1}
							baths={1}
							price={1500}
							list={listMode}
						/>
						<ReactPaginate
							pageCount={7}
							previousLabel={<ArrowLeft size={16} color="#333" />}
							nextLabel={<ArrowRight size={16} color="#333" />}
							onPageChange={onPageChange}
							className="col-span-2 own-pagination space-x-2 text-center"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
