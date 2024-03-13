export default function ({ name, thumb, nums, span = 1 }) {
	return (
		<div
			className={`group h-80 col-span-${span} relative after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#1d293e] from-60% after:to-transparent after:to-80% mb-2 text-white rounded-2xl overflow-hidden cursor-pointer`}
		>
			<img src={thumb} alt="city" className="-mt-8 object-cover group-hover:scale-110 group-hover:rotate-3 duration-200 w-full h-[120%]" />
			<div className="absolute left-0 right-0 bottom-0 z-10 p-8 text-center">
				<p className="font-bold mb-2 text-xl">{name}</p>
				<p className="">{nums} Properties</p>
			</div>
		</div>
	);
}
