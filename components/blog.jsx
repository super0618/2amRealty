import { IconCalendar } from "@tabler/icons-react";

export default function ({ thumb, title, content, username, date, avatar }) {
	return (
		<div className="border rounded-md bg-white shadow-sm">
			<div className="p-2 mb-2">
				<img src={thumb} alt="blog" />
			</div>
			<h2 className="font-bold px-2 cursor-pointer hover:text-[#ff5a5f]">{title}</h2>
			<p className="text-sm p-2 border-b">{content}</p>
			<div className="grid grid-cols-3 p-4">
				<div className="flex items-center gap-2">
					<img src={avatar} alt="avatar" width="36px" className="rounded-full" />
					<p>{username}</p>
				</div>
				<div className="flex items-center gap-1">
					<IconCalendar size={24} style={{ padding: 1 }} />
					<p>{date}</p>
				</div>
				<div className="text-[#ff5a5f] flex items-center justify-end">Read More</div>
			</div>
		</div>
	);
}
