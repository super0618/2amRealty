export default function ({ thumb, user, username, type, title }) {
	return (
		<div className="rounded-md bg-white shadow-2xl cursor-pointer max-w-[512px] mx-auto">
			<div className="p-4 border-b">
				<img src={thumb} alt="thumb1" className="rounded-md mb-2" />
				<div className="text-[#ff5a5f] px-2 font-bold mb-3">{type}</div>
				<div className="text-[#333] px-2 font-bold mb-5 text-2xl text-nowrap overflow-hidden text-ellipsis">{title}</div>
			</div>
			<div className="py-7 px-6 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<img src={user} alt="user" className="rounded-full" width={36} />
					<p className="text-[#666] text-sm">{username}</p>
				</div>
				<p>1 year ago</p>
			</div>
		</div>
	);
}
