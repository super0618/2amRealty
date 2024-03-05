import CityCard from "@/components/citycard";
import newyork from "@/public/asssets/images/newyork.jpg";
import miami from "@/public/asssets/images/miami.jpg";
import losangeles from "@/public/asssets/images/losangeles.jpg";
import florida from "@/public/asssets/images/florida.jpg";

export default function () {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Find Properties in These Cities</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-6">
				<CityCard name="Miami" thumb={miami} nums={24} />
				<CityCard name="Los Angeles" thumb={losangeles} nums={18} span={2} />
				<CityCard name="New York" thumb={newyork} nums={89} span={2} />
				<CityCard name="Florida" thumb={florida} nums={47} />
			</div>
		</div>
	);
}
