import Service from "@/components/service";
import { CreditCard, Check, Briefcase, Activity } from "react-feather";

export default function () {
	return (
		<div className="bg-gray-50">
			<div className="container py-16">
				<div className="text-4xl font-bold text-[#333] mb-2 text-center">Our Services</div>
				<div className="text-lg text-[#666] mb-12 text-center">Navigate the World of Real Estate with Excellence</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-6">
					<Service
						icon={<CreditCard size={36} />}
						title="Buying"
						description="We offer comprehensive home buying services with a dedicated team of experts committed to guiding you through every step of way. From personalized property searches to expert negotiations, we are here to help you find your dream home."
					/>
					<Service
						icon={<Check size={36} />}
						title="Renting"
						description="Our rental services offer a diverse range of properties that match your preferences, lifestyle, and budget. Our experts can guide you through a hassle-free transaction with a personalized approach to renting your dream space."
					/>
					<Service
						icon={<Briefcase size={36} />}
						title="Selling"
						description="Our tailored services are designed to maximize the value of your property in today’s dynamic market. From strategic marketing to expert negotiations, our proven expertise will help you take the first step towards a profitable and stress-free sale."
					/>
					<Service
						icon={<Activity size={36} />}
						title="Market Analysis"
						description="Unlock the power of informed decision-making with the latest market trends, data analytics, and industry insights. Whether you’re looking to buy, sell, or invest, we can empower you with the knowledge to make strategic decisions."
					/>
				</div>
			</div>
		</div>
	);
}
