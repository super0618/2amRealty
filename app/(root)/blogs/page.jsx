"use client";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Blog from "@/components/blog";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

export default function () {
	const onPageChange = (e) => {
		console.log(e);
	};

	return (
		<div className="bg-gray-50 pt-32 pb-12">
			<div className="container mb-4 flex justify-between items-center">
				<h2 className="text-2xl font-bold">Blog</h2>
			</div>
			<div className="container grid grid-cols-3 gap-6">
				<div className="col-span-3 md:col-span-2 space-y-6">
					<div className="space-y-4">
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<ReactPaginate
							pageCount={7}
							previousLabel={<IconArrowLeft size={16} color="#333" />}
							nextLabel={<IconArrowRight size={16} color="#333" />}
							onPageChange={onPageChange}
							className="col-span-2 own-pagination space-x-2 text-center"
						/>
					</div>
				</div>
				<div className="hidden md:block space-y-6">
					<div className="bg-white p-6 rounded-md border shadow-sm">123</div>
					<div className="bg-white p-6 rounded-md shadow-sm border">
						<h2 className="text-lg font-bold mb-3">Categories Property</h2>
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
				</div>
			</div>
		</div>
	);
}
