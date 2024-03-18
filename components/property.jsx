import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";

export default function ({ thumb, user, username, type, title, location, beds, baths, price, list = false }) {
	return list ? (
		<div className="rounded-md col-span-2 bg-white border mx-auto p-4 grid grid-cols-5 gap-x-6 shadow-sm">
			<div className="col-span-2 relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 rounded-md overflow-hidden">
				<img src={thumb} alt="thumb1" className="object-cover h-full" />
				<div className="absolute top-0 left-0 p-3 z-50 flex gap-2 flex-wrap">
					<div className="px-3 py-1 rounded-md bg-[#3e4c66] text-white text-sm">Featured</div>
					<div className="px-3 py-1 rounded-md bg-[#ff5a5f] text-white text-sm">Sale</div>
				</div>
				<div className="absolute bottom-0 left-0 p-3 text-white z-50">${price} / mo</div>
			</div>
			<div className="col-span-3">
				<div className="text-[#ff5a5f] mb-1 text-md">{type}</div>
				<Link href="/property/detail" className="font-bold mb-2 hover:text-[#ff5a5f]">
					{title}
				</Link>
				<div className="flex mb-2">
					<IconMapPin size={20} style={{ padding: 2 }} />
					<p className="text-sm">{location}</p>
				</div>
				<div className="grid grid-cols-3 pb-2">
					<div>Beds: {beds}</div>
					<div>Baths: {baths}</div>
				</div>
				<div className="pt-2 flex justify-between items-center">
					<Link href="/agent/detail" className="flex items-center gap-2">
						<img src={user} alt="user" className="rounded-full" width="36px" />
						<p className="text-[#666] text-sm hover:text-[#ff5a5f]">{username}</p>
					</Link>
					<p>1 year ago</p>
				</div>
			</div>
		</div>
	) : (
		<div className="rounded-md bg-white border mx-auto shadow-sm">
			<div className="p-4 border-b">
				<div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 mb-2 rounded-md overflow-hidden">
					<img src={thumb} alt="thumb1" width="100%" className="object-cover" />
					<div className="absolute top-3 left-3 z-50 flex gap-2">
						<div className="px-3 py-1 rounded-md bg-[#3e4c66] text-white text-sm">Featured</div>
						<div className="px-3 py-1 rounded-md bg-[#ff5a5f] text-white text-sm">Sale</div>
					</div>
					<div className="absolute bottom-3 left-3 text-white z-50">${price} / mo</div>
				</div>
				<div className="text-[#ff5a5f] mb-1 text-md">{type}</div>
				<Link href="/property/detail" className="block font-bold mb-2 hover:text-[#ff5a5f]">
					{title}
				</Link>
				<div className="flex mb-2">
					<IconMapPin size={20} style={{ padding: 2 }} />
					<p className="text-sm">{location}</p>
				</div>
				<div className="grid grid-cols-3">
					<div>Beds: {beds}</div>
					<div>Baths: {baths}</div>
				</div>
			</div>
			<div className="py-3 px-4 flex justify-between items-center">
				<Link href="/agent/detail" className="flex items-center gap-2">
					<img src={user} alt="user" className="rounded-full" width="36px" />
					<p className="text-[#666] text-sm hover:text-[#ff5a5f]">{username}</p>
				</Link>
				<p>1 year ago</p>
			</div>
		</div>
	);
}
