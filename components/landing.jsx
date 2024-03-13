export default function ({ bgImage, height, content }) {
	return (
		<div
			className="relative object-cover bg-center grid place-items-center text-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#1d293e] before:opacity-60"
			style={{ background: `url(${bgImage})`, height }}
		>
			{content}
		</div>
	);
}
