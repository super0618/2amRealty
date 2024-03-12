import Service from "@/components/service";
import { CreditCard, Check, Briefcase, Activity } from "react-feather";

export default function ({ size = "lg" }) {
	return (
		<div className="bg-[#efefef]">
			<div className="container mx-auto px-4 py-16">
				<div className="text-4xl font-bold text-[#333] mb-2 text-center">Our Services</div>
				<div className="text-lg text-[#666] mb-12 text-center">Navigate the World of Real Estate with Excellence</div>
				<div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ${size == "lg" ? "gap-8" : "gap-4"}`}>
					<Service
						icon={<CreditCard size={48} />}
						title="Buying"
						size={size}
						description="We offer comprehensive home buying services with a dedicated team of experts committed to guiding you through every step of way. From personalized property searches to expert negotiations, we are here to help you find your dream home."
					/>
					<Service
						icon={<Check size={48} />}
						title="Renting"
						size={size}
						description="Our rental services offer a diverse range of properties that match your preferences, lifestyle, and budget. Our experts can guide you through a hassle-free transaction with a personalized approach to renting your dream space."
					/>
					<Service
						icon={<Briefcase size={48} />}
						title="Selling"
						size={size}
						description="Our tailored services are designed to maximize the value of your property in today’s dynamic market. From strategic marketing to expert negotiations, our proven expertise will help you take the first step towards a profitable and stress-free sale."
					/>
					<Service
						icon={<Activity size={48} />}
						title="Market Analysis"
						size={size}
						description="Unlock the power of informed decision-making with the latest market trends, data analytics, and industry insights. Whether you’re looking to buy, sell, or invest, we can empower you with the knowledge to make strategic decisions."
					/>
				</div>
			</div>
		</div>
	);
}
