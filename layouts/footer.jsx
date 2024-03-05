export default function () {
	return (
		<div className="bg-[#24324a]">
			<div className="container mx-auto px-4 py-16 grid grid-cols-2 xl:grid-cols-4 gap-6">
				<div>
					<p className="text-white font-bold text-2xl mb-4">Discover</p>
					<p className="text-[#8a99b3] mb-2 cursor-pointer inline-block">Explore Housing</p>
					<br />
					<p className="text-[#8a99b3] mb-2 cursor-pointer inline-block">Partner With Us</p>
				</div>
				<div>
					<p className="text-white font-bold text-2xl mb-4">The Details</p>
					<p className="text-[#8a99b3] mb-2 cursor-pointer inline-block">Site Map</p>
					<br />
					<p className="text-[#8a99b3] mb-2 cursor-pointer inline-block">Privacy Policy</p>
					<br />
					<p className="text-[#8a99b3] mb-2 cursor-pointer inline-block">Disclosures</p>
				</div>
				<div>
					<p className="text-white font-bold text-2xl mb-4">About Us</p>
					<p className="text-[#8a99b3]">
						Founded as an independents brokerage firm and real estate services provider to offer a carefully curated support system for housing
						solutions.
					</p>
				</div>
				<div>
					<p className="text-white font-bold text-2xl mb-4">Listing Access</p>
					<p className="text-[#8a99b3] mb-2">Full Name</p>
					<input type="text" className="mb-3 px-4 py-1 w-full" placeholder="Enter Your Name" />
					<p className="text-[#8a99b3] mb-2">Email</p>
					<input type="text" className="mb-3 px-4 py-1 w-full" placeholder="Enter mail" />
					<div className="text-white bg-[#4d6286] px-4 py-2 inline-block cursor-pointer my-4">Submit</div>
				</div>
			</div>
			<div className="col-span-2"></div>
		</div>
	);
}
