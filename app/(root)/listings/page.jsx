"use client";
import Link from "next/link";
import DataTable from "react-data-table-component";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import Law from "@/components/law";

export default function () {
	const columns = [
		{
			name: "Title",
			selector: (row) => (
				<div className="flex gap-4 py-4">
					<img src={row.thumbnail} alt="thumbnail" className="hidden md:block w-40 rounded-lg" />
					<div>
						<Link href="/property/detail" className="font-bold text-lg mb-4 hover:text-[#B63437]">
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
			name: "Status",
			selector: (row) => {
				if (row.status == "pending") {
					return <div className="p-1 bg-red-500 text-white rounded-md">{row.status}</div>;
				} else if (row.status == "approved") {
					return <div className="p-1 bg-green-500 text-white rounded-md">{row.status}</div>;
				}
			},
			width: "105px",
		},
		{
			name: "Action",
			selector: (row) => (
				<div className="flex gap-2">
					<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#666] rounded-md p-2">
						<IconPencil size={18} />
					</div>
					<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#666] rounded-md p-2">
						<IconTrash size={18} />
					</div>
				</div>
			),
			width: "110px",
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
			status: "pending",
		},
		{
			id: 2,
			title: "Renovated Apartment",
			thumbnail: "/images/featureds/thumb2.jpg",
			location: "1421 San Pedro St, Los Angeles",
			price: 2500,
			date: "1/21/2023",
			status: "pending",
		},
		{
			id: 3,
			title: "Single Family Home",
			thumbnail: "/images/featureds/thumb3.jpg",
			location: "1421 San Pedro St, Los Angeles",
			price: 1200,
			date: "1/21/2023",
			status: "approved",
		},
		{
			id: 4,
			title: "Gorgeous Villa Bay View",
			thumbnail: "/images/featureds/thumb1.jpg",
			location: "1421 San Pedro St, Los Angeles",
			price: 3700,
			date: "1/21/2023",
			status: "pending",
		},
	];

	return (
		<div className="bg-gray-50 pt-32 pb-12">
			<div className="container mb-4 flex justify-between items-center">
				<p className="text-2xl font-bold">My Listings</p>
				<Link href="listing-create" className="bg-blue-400 text-white px-4 py-2 text-sm rounded-lg shadow-md">
					Ceate New Listing
				</Link>
			</div>
			<div className="container bg-white rounded-md shadow-sm border p-6">
				<DataTable columns={columns} data={data} />
			</div>
			<Law />
		</div>
	);
}
