import Image from "next/image";
import { MapPin } from "react-feather";

export default function ({ thumb, user, username, type, title, location, beds, baths, sqft }) {
	return (
		<div className="rounded-md bg-white shadow-2xl cursor-pointer max-w-[512px] mx-auto">
			<div className="p-4 border-b">
				<div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 mb-2 rounded-md overflow-hidden">
					<img src={thumb} alt="thumb1" width="100%" className="object-cover" />
				</div>
				<div className="text-[#ff5a5f] px-2 font-bold mb-2 text-lg">{type}</div>
				<div className="text-[#333] px-2 font-bold mb-2">{title}</div>
				<div className="px-2 flex items-center gap-1 mb-2">
					<MapPin size={14} />
					<p className="text-sm">{location}</p>
				</div>
				<div className="px-2 grid grid-cols-3">
					<div>Beds: {beds}</div>
					<div>Baths: {baths}</div>
					<div>SqFt: {sqft}</div>
				</div>
			</div>
			<div className="py-3 px-6 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<img src={user} alt="user" className="rounded-full" width="36px" />
					<p className="text-[#666] text-sm">{username}</p>
				</div>
				<p>1 year ago</p>
			</div>
		</div>
	);
}
