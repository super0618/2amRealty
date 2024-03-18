import Link from "next/link";

export default function ({ thumb, user, username, type, title, description }) {
	return (
		<div className="rounded-md bg-white shadow-lg max-w-[400px] mx-auto">
			<div className="p-4 border-b">
				<img src={thumb} alt="thumb1" className="rounded-md mb-2" />
				<div className="text-[#ff5a5f] mb-3">{type}</div>
				<Link href="/blog/detail" className="font-bold mb-2 text-2xl text-nowrap overflow-hidden text-ellipsis hover:text-[#ff5a5f] block">
					{title}
				</Link>
				<div className="text-[#666] text-sm">{description}</div>
			</div>
			<div className="py-7 px-6 flex justify-between items-center">
				<Link href="/agent/detail" className="flex items-center gap-2">
					<img src={user} alt="user" className="rounded-full" width={36} />
					<p className="text-[#666] text-sm hover:text-[#ff5a5f]">{username}</p>
				</Link>
				<p>1 year ago</p>
			</div>
		</div>
	);
}
