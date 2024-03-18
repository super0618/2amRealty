import { IconCalendar } from "@tabler/icons-react";
import Link from "next/link";

export default function ({ thumb, title, content, username, date, avatar, minimized = false }) {
	return (
		<div className="border rounded-md bg-white shadow-sm">
			<div className="p-2 mb-2">
				<img src={thumb} alt="blog" />
			</div>
			<Link href="/blog/detail" className="font-bold px-2 hover:text-[#ff5a5f]">
				{title}
			</Link>
			<p className="text-sm p-2 border-b">{content}</p>
			<div className="grid grid-cols-3 text-sm p-4">
				<Link href="/agent/detail" className={`flex items-center gap-2 hover:text-[#ff5a5f] ${minimized ? "col-span-2" : ""}`}>
					<img src={avatar} alt="avatar" width="36px" className="rounded-full" />
					<p>{username}</p>
				</Link>
				{minimized ? null : (
					<div className="flex items-center gap-1">
						<IconCalendar size={24} style={{ padding: 1 }} />
						<p>{date}</p>
					</div>
				)}
				<Link href="/blog/detail" className="flex items-center justify-end">
					<div className="text-[#ff5a5f] hover:text-[#e23e43]">Read More</div>
				</Link>
			</div>
		</div>
	);
}
