import City from "@/components/city";

export default function () {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Find Properties in These Cities</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6">
				<City name="Miami" thumb="/assets/images/cities/miami.jpg" nums={24} />
				<City name="Los Angeles" thumb="/assets/images/cities/losangeles.jpg" nums={18} span={2} />
				<City name="New York" thumb="/assets/images/cities/newyork.jpg" nums={89} span={2} />
				<City name="Florida" thumb="/assets/images/cities/florida.jpg" nums={47} />
			</div>
		</div>
	);
}
