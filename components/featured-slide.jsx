import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";

export default function ({ thumb, user, username, type, name, location, beds, baths, price }) {
	return (
		<div className="rounded-md bg-white shadow-lg max-w-[400px] mx-auto">
			<div className="p-4 border-b">
				<div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 mb-2 rounded-md overflow-hidden">
					<img src={thumb} alt="thumb1" width="100%" className="object-cover" />
					<div className="absolute top-4 left-4 z-50 flex gap-2">
						<div className="px-4 py-1 rounded-md bg-[#3e4c66] text-white text-sm">Featured</div>
						<div className="px-4 py-1 rounded-md bg-[#ff5a5f] text-white text-sm">Sale</div>
					</div>
					<div className="absolute bottom-4 left-4 text-white z-50">${price} / mo</div>
				</div>
				<div className="text-[#ff5a5f] px-2 mb-1 text-md">{type}</div>
				<Link href="/property/detail" className="px-2 font-bold block mb-2 hover:text-[#ff5a5f]">
					{name}
				</Link>
				<div className="px-2 flex items-center mb-2">
					<IconMapPin size={20} style={{ padding: 2 }} />
					<p className="text-sm">{location}</p>
				</div>
				<div className="px-2 grid grid-cols-3">
					<div>Beds: {beds}</div>
					<div>Baths: {baths}</div>
				</div>
			</div>
			<div className="py-3 px-6 flex justify-between items-center">
				<Link href="/agent/detail" className="flex items-center gap-2">
					<img src={user} alt="user" className="rounded-full" width="36px" />
					<p className="text-[#666] text-sm hover:text-[#ff5a5f]">{username}</p>
				</Link>
				<p>1 year ago</p>
			</div>
		</div>
	);
}
