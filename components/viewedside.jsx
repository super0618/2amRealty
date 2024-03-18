import Link from "next/link";

export default function ({ thumb, type, name, price }) {
	return (
		<Link href="/property/detail" className="block rounded-md bg-white shadow-2xl max-w-[400px] mx-auto">
			<div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 rounded-md overflow-hidden hover:opacity-95">
				<img src={thumb} alt="thumb1" width="100%" className="object-cover" />
				<div className="absolute top-0 left-0 p-3 z-50 flex gap-2 text-white">
					<div className="text-sm">${price} / mo</div>
				</div>
				<div className="absolute bottom-0 left-0 p-3 text-white z-50">
					<div className="text-sm">{type}</div>
					<div className="font-bold">{name}</div>
				</div>
			</div>
		</Link>
	);
}
