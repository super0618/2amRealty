export default function ({ avatar, name, role, content }) {
	return (
		<div className="text-center max-w-[450px] p-6 mx-auto cursor-pointer">
			<img src={avatar} alt="avatar" className="w-32 h-32 border-[6px] border-white rounded-full mx-auto block mb-2" />
			<h2 className="text-xl text-[#666] mb-2 font-bold">{name}</h2>
			<h2 className="text-[#666] mb-2">{role}</h2>
			<p className="text-[#666]">{content}</p>
		</div>
	);
}
