export default function ({ avatar, name, role, description }) {
	return (
		<div className="px-8 pb-12 text-center cursor-pointer mx-auto max-w-[400px]">
			<img src={avatar} alt="avatar" className="rounded-full mb-4 w-10/12 aspect-square mx-auto max-w-40" />
			<p className="text-[#666] mb-2 font-bold text-2xl">{name}</p>
			<p className="text-xl text-[#aadb71] mb-8 font-bold">{role}</p>
			<p className="text-[#666] text-justify text-lg">{description}</p>
		</div>
	);
}
