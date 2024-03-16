import Landing from "@/components/landing";

export default function () {
	return (
		<div>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">Compare</div>} />
			<div className="container py-16">
				<div className="text-4xl font-bold mb-2 text-center">Compare Listings</div>
				<div className="text-lg text-[#666] mb-12 text-center">We provide full service at every step</div>
				<div className="max-w-[800px] mx-auto">
					<div className="grid grid-cols-9 gap-6 mb-6">
						<div className="col-start-3 col-span-3 pl-6">
							<img src="/images/featureds/thumb1.jpg" alt="thumb1" className="object-cover h-full rounded-lg shadow-lg" />
						</div>
						<div className="col-span-3 pl-6">
							<img src="/images/featureds/thumb3.jpg" alt="thumb1" className="object-cover h-full rounded-lg shadow-lg" />
						</div>
					</div>
					<div className="grid grid-cols-9">
						<div className="border-t px-4 py-3 text-right col-span-2">City</div>
						<div className="border-t px-4 py-3 text-right col-span-3">New York</div>
						<div className="border-t px-4 py-3 text-right col-span-3">Buffalo</div>
						<div className="border-t px-4 py-3 text-right"></div>
						<div className="border-t px-4 py-3 text-right col-span-2">Beds</div>
						<div className="border-t px-4 py-3 text-right col-span-3">4</div>
						<div className="border-t px-4 py-3 text-right col-span-3">4</div>
						<div className="border-t px-4 py-3 text-right"></div>
						<div className="border-t px-4 py-3 text-right col-span-2">Rooms</div>
						<div className="border-t px-4 py-3 text-right col-span-3">7</div>
						<div className="border-t px-4 py-3 text-right col-span-3">7</div>
						<div className="border-t px-4 py-3 text-right"></div>
						<div className="border-t px-4 py-3 text-right col-span-2">Garage</div>
						<div className="border-t px-4 py-3 text-right col-span-3">1</div>
						<div className="border-t px-4 py-3 text-right col-span-3">2</div>
						<div className="border-t px-4 py-3 text-right"></div>
						<div className="border-t px-4 py-3 text-right col-span-2">Year of Build</div>
						<div className="border-t px-4 py-3 text-right col-span-3">2</div>
						<div className="border-t px-4 py-3 text-right col-span-3">2</div>
						<div className="border-t px-4 py-3 text-right"></div>
						<div className="border-t px-4 py-3 text-right col-span-2">Laundry Room</div>
						<div className="border-t px-4 py-3 text-right col-span-3">Yes</div>
						<div className="border-t px-4 py-3 text-right col-span-3">No</div>
						<div className="border-t px-4 py-3 text-right"></div>
						<div className="border-y px-4 py-3 text-right col-span-2">Status</div>
						<div className="border-y px-4 py-3 text-right col-span-3">Active</div>
						<div className="border-y px-4 py-3 text-right col-span-3">No</div>
						<div className="border-y px-4 py-3 text-right"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
