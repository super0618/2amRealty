import Link from "next/link";
import { IconMapPin } from "@tabler/icons-react";

export default function ({ thumb, type, title, location, beds, baths, price }) {
	return (
		<div className="rounded-md col-span-2 bg-white cursor-pointer mx-auto mb-6 grid grid-cols-5 gap-x-6 pb-4 border-b">
			<div className="col-span-2 relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 rounded-md overflow-hidden">
				<img src={thumb} alt="thumb1" className="object-cover h-full" />
			</div>
			<div className="col-span-3">
				<div className="flex justify-between items-center">
					<div className="px-4 py-1 rounded-sm bg-[#B63437] text-white text-sm inline-block mb-1">Sale</div>
					<div className="p-3 text-[#666]">
						<span className="font-bold">${price}</span> / mo
					</div>
				</div>
				<div className="text-[#B63437] mb-1 text-md">{type}</div>
				<Link href="/property/soieeh" className="font-bold cursor-pointer mb-2 hover:text-[#B63437]">
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
			</div>
		</div>
	);
}
