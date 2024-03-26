import City from "@/components/city";

export default function () {
	return (
		<div className="container py-16">
			<div className="text-4xl font-bold mb-2 text-center">Find Properties in These Cities</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-6">
				<City name="Frisco" thumb="/images/cities/richardson.png" nums={24} />
				<City name="Texas" thumb="/images/cities/texas.png" nums={18} span={2} />
				<City name="Plano" thumb="/images/cities/frisco.png" nums={89} span={2} />
				<City name="Richardson" thumb="/images/cities/plano.png" nums={47} />
			</div>
		</div>
	);
}
