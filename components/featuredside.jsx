export default function ({ thumb, type, price }) {
	return (
		<div className="rounded-md bg-white border cursor-pointer max-w-[400px] mx-auto">
			<div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[#1d293e] after:opacity-40 rounded-md overflow-hidden">
				<img src={thumb} alt="thumb1" width="100%" className="object-cover" />
				<div className="absolute top-0 left-0 p-3 z-50 flex gap-2">
					<div className="px-3 py-1 rounded-md bg-[#3e4c66] text-white text-sm">Featured</div>
				</div>
				<div className="absolute bottom-0 left-0 p-3 text-white z-50">
					<div className="text-sm">${price} / mo</div>
					<div className="font-bold">{type}</div>
				</div>
			</div>
		</div>
	);
}
