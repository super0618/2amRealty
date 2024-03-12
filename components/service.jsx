export default function ({ icon, title, size, description }) {
	return (
		<div className={`bg-white rounded-lg shadow-lg text-center ${size == "lg" ? "p-8" : "px-4 py-8"}`}>
			<div className={`bg-[#ff5a5f] rounded-full inline-block text-white mb-2 ${size == "lg" ? "p-6" : "p-4"}`}>{icon}</div>
			<p className={`font-bold text-[#666] ${size == "lg" ? "text-3xl mb-8" : "text-xl mb-4"}`}>{title}</p>
			<p className={`text-justify text-[#666] ${size == "lg" ? "text-base" : "text-sm"}`}>{description}</p>
		</div>
	);
}
