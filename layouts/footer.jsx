import { IconBrandFacebookFilled, IconBrandTwitterFilled, IconBrandInstagram, IconBrandPinterest, IconBrandDribbble } from "@tabler/icons-react";

export default function () {
	return (
		<div className="bg-[#24324a]">
			<div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				<div>
					<p className="text-white font-bold text-2xl mb-4">Discover</p>
					<p className="text-[#ccc] mb-2 cursor-pointer inline-block">Explore Housing</p>
					<br />
					<p className="text-[#ccc] mb-2 cursor-pointer inline-block">Partner With Us</p>
				</div>
				<div>
					<p className="text-white font-bold text-2xl mb-4">The Details</p>
					<p className="text-[#ccc] mb-2 cursor-pointer inline-block">Site Map</p>
					<br />
					<p className="text-[#ccc] mb-2 cursor-pointer inline-block">Privacy Policy</p>
					<br />
					<p className="text-[#ccc] mb-2 cursor-pointer inline-block">Disclosures</p>
				</div>
				<div>
					<p className="text-white font-bold text-2xl mb-4">About Us</p>
					<p className="text-[#ccc] w-full max-w-96">
						Founded as an independents brokerage firm and real estate services provider to offer a carefully curated support system for housing
						solutions.
					</p>
				</div>
				<div>
					<p className="text-white font-bold text-2xl mb-4">Subscribe</p>
					<input type="text" className="border border-[#ccc] text-[#ccc] bg-[#24324a] px-4 py-2 w-full max-w-96" placeholder="Enter your email" />
				</div>
			</div>
			<div className="container flex flex-col sm:flex-row gap-2 justify-between">
				<div className="text-white flex items-center">© - ALL RIGHTS RESERVED - 2023</div>
				<div></div>
				<div className="flex items-center justify-start md:justify-end gap-4 mb-6">
					<IconBrandFacebookFilled size={18} color="#ccc" />
					<IconBrandTwitterFilled size={18} color="#ccc" />
					<IconBrandInstagram size={18} color="#ccc" />
					<IconBrandPinterest size={18} color="#ccc" />
					<IconBrandDribbble size={18} color="#ccc" />
				</div>
			</div>
		</div>
	);
}
