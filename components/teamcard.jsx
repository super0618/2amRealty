import Image from "next/image";

export default function ({ avatar, name, role, description }) {
	return (
		<div className="px-8 pb-12 text-center cursor-pointer max-w-[480px] mx-auto">
			<img src={avatar} alt="avatar" className="rounded-full mb-4 w-10/12 mx-auto max-w-60" />
			<p className="text-4xl text-[#666] mb-4 font-bold">{name}</p>
			<p className="text-xl text-[#aadb71] mb-8 font-bold">{role}</p>
			<p className="text-[#666] text-justify text-lg">{description}</p>
		</div>
	);
}
