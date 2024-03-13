export default function () {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Our Partners</div>
			<div className="text-lg text-[#666] mb-12 text-center">We only work with the best companies around the globe</div>
			<div className="grid grid-cols-2 sm:grid-cols-5 gap-y-8">
				<div>
					<img src="/assets/images/partners/1.png" alt="partner1" className="block mx-auto" />
				</div>
				<div>
					<img src="/assets/images/partners/2.png" alt="partner2" className="block mx-auto" />
				</div>
				<div>
					<img src="/assets/images/partners/3.png" alt="partner3" className="block mx-auto" />
				</div>
				<div>
					<img src="/assets/images/partners/4.png" alt="partner4" className="block mx-auto" />
				</div>
				<div>
					<img src="/assets/images/partners/5.png" alt="partner5" className="block mx-auto" />
				</div>
			</div>
		</div>
	);
}
