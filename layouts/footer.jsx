import { IconBrandFacebookFilled, IconBrandTwitterFilled, IconBrandInstagram, IconBrandPinterest, IconBrandDribbble } from "@tabler/icons-react";

export default function () {
	return (
		<div className="bg-[#24324a]">
			<div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
					<p className="text-[#8a99b3] w-full max-w-96">
						Founded as an independents brokerage firm and real estate services provider to offer a carefully curated support system for housing
						solutions.
					</p>
				</div>
				<div>
					<p className="text-white font-bold text-2xl mb-4">Follow Us</p>
					<div className="flex gap-4 mb-6">
						<IconBrandFacebookFilled size={18} color="#999" />
						<IconBrandTwitterFilled size={18} color="#999" />
						<IconBrandInstagram size={18} color="#999" />
						<IconBrandPinterest size={18} color="#999" />
						<IconBrandDribbble size={18} color="#999" />
					</div>
					<p className="text-white font-bold text-2xl mb-4">Subscribe</p>
					<input type="text" className="border border-[#8a99b3] bg-[#24324a] px-4 py-2 w-full max-w-96" placeholder="Enter your email" />
				</div>
			</div>
		</div>
	);
}
