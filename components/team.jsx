export default function ({ avatar, name, role, size, description }) {
	return (
		<div className={`px-8 pb-12 text-center cursor-pointer mx-auto ${size == "lg" ? "max-w-[480px]" : "max-w-[360px]"}`}>
			<img src={avatar} alt="avatar" className={`rounded-full mb-4 w-10/12 mx-auto ${size == "lg" ? "max-w-60" : "max-w-40"}`} />
			<p className={`text-[#666] mb-4 font-bold ${size == "lg" ? "text-4xl" : "text-2xl"}`}>{name}</p>
			<p className="text-xl text-[#aadb71] mb-8 font-bold">{role}</p>
			<p className="text-[#666] text-justify text-lg">{description}</p>
		</div>
	);
}
