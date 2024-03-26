import Landing from "@/components/landing";
import Law from "@/components/law";

export default function () {
	return (
		<>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">Service</div>} />
			<div className="bg-gray-50 pt-32 pb-12">
				<div className="container grid grid-cols-3 gap-6">
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/1.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>Redfin Ranks the Most Competitive Neighborhoods of 2020</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/2.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>Why We Should All Support Clear Cooperation</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/3.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>Redfin Ranks the Most Competitive Neighborhoods of 2020</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/4.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>12 Walkable Cities Where You Can Live Affordably</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/5.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>Redfin Unveils the Best Canadian Cities for Biking</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/6.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>You Can Buy The Piano Teacher’s Home from Groundhog Day</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/7.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>Housing Markets That Changed the Most This Decade</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/8.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>Redfin Ranks the Most Competitive Neighborhoods of 2020</p>
					</div>
					<div className="border rounded-md shadow-sm p-2 bg-white">
						<img src="/images/service/9.jpg" width="100%" className="object-cover h-48 mb-4" />
						<p>12 Walkable Cities Where You Can Live Affordably</p>
					</div>
				</div>
				<Law />
			</div>
		</>
	);
}
