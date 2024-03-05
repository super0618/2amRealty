export default function () {
	return (
		<div className="bg-[url('/asssets/images/bg.jpg')] relative object-cover bg-center h-[960px] grid place-items-center text-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#1d293e] before:opacity-60">
			<div className="text-center z-0">
				<div className="text-6xl font-bold mb-4">Find Your Dream Home</div>
				<div className="text-xl font-semibold mb-12">From as low as $10 per day with limited time offer discounts.</div>
				<div className="text-[#333] max-w-[960px] relative p-8 pt-12 bg-white rounded-lg w-11/12 space-y-6 before:content-[''] before:absolute before:-top-3 before:-left-3 before:-right-3 before:-bottom-3 before:bg-[#fff2] before:rounded-lg before:-z-10 mx-auto">
					<div className="flex">
						<input type="text" className="grow border py-2 px-4 border-gray-300" placeholder="City, Country, Subdivision, etc" />
						<div className="basis-32 bg-[#ff5a5f] grid place-items-center text-white font-bold text-lg cursor-pointer">Search</div>
					</div>
					<div className="grid grid-cols-5 gap-6">
						<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Min Price" />
						<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Max Price" />
						<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Beds" />
						<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Baths" />
						<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Property Type" />
					</div>
				</div>
			</div>
		</div>
	);
}
