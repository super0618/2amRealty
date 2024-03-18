import Link from "next/link";

export default function ({ thumb, type, price }) {
	return (
		<Link href="/property/detail" className="rounded-md bg-white border cursor-pointer max-w-[400px] mx-auto">
			<div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 rounded-md overflow-hidden">
				<img src={thumb} alt="thumb1" width="100%" className="object-cover" />
				<div className="absolute bottom-0 left-0 p-3 text-white z-50">
					<div className="text-sm">${price} / mo</div>
					<div className="font-bold">{type}</div>
				</div>
			</div>
		</Link>
	);
}
