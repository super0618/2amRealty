import Link from "next/link";
import { Facebook, Twitter, Instagram, Dribbble, Linkedin } from "react-feather";

export default function () {
	return (
		<div className="rounded-md bg-white shadow-md max-w-[400px] mx-auto">
			<div className="p-4 border-b">
				<img src="/assets/images/agents/1.jpg" alt="agent1" className="rounded-lmd mb-4" />
				<Link href="/agent/sfsef" className="font-bold block text-[#666x] cursor-pointer mb-1 hover:text-[#ff5a5f]">
					Renovated Apart
				</Link>
				<h2 className="text-[#ff5a5f] text-sm mb-2">Broker</h2>
				<div className="text-sm mb-1">Office: 134 456 3210</div>
				<div className="text-sm mb-1">Mobile: 891 456 9874</div>
				<div className="text-sm mb-1">Fax: 342 654 1258</div>
				<div className="text-sm">Email: pakulla@realtor.com</div>
			</div>
			<div className="flex justify-between items-center p-4 pt-2">
				<div className="flex gap-1">
					<Facebook size={14} color="#999" fill="#999" />
					<Twitter size={14} color="#999" fill="#999" />
					<Instagram size={14} color="#999" />
					<Dribbble size={14} color="#999" />
					<Linkedin size={14} color="#999" />
				</div>
				<Link href="/agent/sfsef" className="text-sm text-[#ff5a5f]">
					View Listing
				</Link>
			</div>
		</div>
	);
}