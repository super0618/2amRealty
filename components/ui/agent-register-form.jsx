import Link from "next/link";

export default function () {
	return (
		<div className="bg-[#B63437]">
			<div className="container py-16 grid grid-cols-2 text-white">
				<div className="text-center grid place-items-center">
					<p className="text-3xl font-bold mb-4">Become a Real Estate Agent</p>
					<p className="text-xl">We only work with the best companies around the globe</p>
				</div>
				<div className="text-center grid place-items-center">
					<Link href="/signup" className="bg-[#fff1] rounded-lg px-8 py-4 text-xl hover:bg-[#fff2]">
						Register Now
					</Link>
				</div>
			</div>
		</div>
	);
}
