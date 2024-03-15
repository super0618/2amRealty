export default function ({ icon, title, description }) {
	return (
		<div className="bg-white rounded-lg shadow-md text-center p-8 max-w-80 mx-auto">
			<div className="bg-[#ff5a5f] rounded-full inline-block text-white mb-2 p-6">{icon}</div>
			<p className="font-bold text-[#666] text-2xl mb-4">{title}</p>
			<p className="text-justify text-[#666] text-sm">{description}</p>
		</div>
	);
}
