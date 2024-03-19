"use client";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { IconTrash } from "@tabler/icons-react";

export default function () {
	const columns = [
		{
			name: "Title",
			selector: (row) => (
				<div className="flex gap-4 py-4">
					<img src={row.thumbnail} alt="thumbnail" className="hidden md:block w-40 rounded-lg" />
					<div>
						<Link href="/property/detail" className="font-bold text-lg block hover:text-[#B63437] mb-4">
							{row.title}
						</Link>
						<p className="mb-4">{row.location}</p>
						<p>{`$${row.price}/mo`}</p>
					</div>
				</div>
			),
		},
		{
			name: "Publish Date",
			selector: (row) => row.date,
			width: "120px",
		},
		{
			name: "Action",
			selector: (row) => (
				<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#666] rounded-md p-2">
					<IconTrash size={18} />
				</div>
			),
			width: "80px",
		},
	];

	const data = [
		{
			id: 1,
			title: "Luxury Family Home",
			thumbnail: "/images/featureds/thumb1.jpg",
			location: "1421 San Pedro St, Los Angeles",
			price: 1300,
			date: "1/21/2023",
		},
		{
			id: 2,
			title: "Renovated Apartment",
			thumbnail: "/images/featureds/thumb2.jpg",
			location: "1421 San Pedro St, Los Angeles",
			price: 2500,
			date: "1/21/2023",
		},
		{
			id: 3,
			title: "Single Family Home",
			thumbnail: "/images/featureds/thumb3.jpg",
			location: "1421 San Pedro St, Los Angeles",
			price: 1200,
			date: "1/21/2023",
		},
		{
			id: 4,
			title: "Gorgeous Villa Bay View",
			thumbnail: "/images/featureds/thumb1.jpg",
			location: "1421 San Pedro St, Los Angeles",
			price: 3700,
			date: "1/21/2023",
		},
	];

	return (
		<div className="bg-gray-50 pt-32 pb-12">
			<div className="container mb-4 flex justify-between items-center">
				<h2 className="text-2xl font-bold">My Favourites</h2>
			</div>
			<div className="container bg-white rounded-md shadow-sm border p-6">
				<DataTable columns={columns} data={data} />
			</div>
		</div>
	);
}
