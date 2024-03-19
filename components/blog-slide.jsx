import Link from "next/link";

export default function ({ thumb, user, username, type, title, description }) {
	return (
		<div className="rounded-md bg-white shadow-lg max-w-[400px] mx-auto">
			<div className="p-4 border-b">
				<img src={thumb} alt="thumb1" className="rounded-md mb-2" />
				<div className="text-[#B63437] mb-3">{type}</div>
				<Link href="/blog/detail" className="font-bold mb-2 text-2xl overflow-hidden h-8 hover:text-[#B63437] block">
					{title}
				</Link>
				<div className="text-[#666] text-sm h-10 overflow-hidden">{description}</div>
			</div>
			<div className="py-7 px-6 flex justify-between items-center">
				<Link href="/agent/detail" className="flex items-center gap-2">
					<img src={user} alt="user" className="rounded-full" width={36} />
					<p className="text-[#666] text-sm hover:text-[#B63437]">{username}</p>
				</Link>
				<p>1 year ago</p>
			</div>
		</div>
	);
}
