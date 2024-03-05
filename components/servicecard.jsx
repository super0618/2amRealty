export default function ({ icon, title, description }) {
	return (
		<div className="bg-white rounded-lg shadow-lg text-center p-8">
			<div className="bg-[#ff5a5f] rounded-full inline-block p-6 text-white mb-2">{icon}</div>
			<p className="font-bold text-3xl mb-8 text-[#666]">{title}</p>
			<p className="text-justify text-[#666]">{description}</p>
		</div>
	);
}
