import Landing from "@/components/landing";
import AgentRegisterForm from "@/components/ui/agent-register-form";

export default function () {
	return (
		<div>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">Membership</div>} />
			<div className="container py-16">
				<div className="text-4xl font-bold mb-2 text-center">Choose Your Perfect Plan</div>
				<div className="text-lg text-[#666] mb-12 text-center">We provide full service at every step</div>
				<div className="container grid grid-cols-3 gap-6">
					<div className="border rounded-lg py-12 text-center">
						<div className="text-4xl text-[#ff787c] font-bold mb-2">$56</div>
						<div className="font-bold mb-8">Standard Plan</div>
						<div className="mb-4 text-[#666] text-sm">50 Property Listings</div>
						<div className="mb-4 text-[#666] text-sm">60 Days Available</div>
						<div className="mb-4 text-[#666] text-sm">20 Featured Property</div>
						<div className="mb-8 text-[#666] text-sm">Limited Support</div>
						<div className="mx-auto py-1 px-12 text-white rounded-md bg-[#ff787c] inline-block">Select</div>
					</div>
					<div className="border rounded-lg py-12 text-center">
						<div className="text-4xl text-[#ff787c] font-bold mb-2">$190</div>
						<div className="font-bold mb-8">Extended Plan</div>
						<div className="mb-4 text-[#666] text-sm">50 Property Listings</div>
						<div className="mb-4 text-[#666] text-sm">60 Days Available</div>
						<div className="mb-4 text-[#666] text-sm">20 Featured Property</div>
						<div className="mb-8 text-[#666] text-sm">Limited Support</div>
						<div className="mx-auto py-1 px-12 text-white rounded-md bg-[#ff787c] inline-block">Select</div>
					</div>
					<div className="border rounded-lg py-12 text-center">
						<div className="text-4xl text-[#ff787c] font-bold mb-2">$291</div>
						<div className="font-bold mb-8">Premium Plan</div>
						<div className="mb-4 text-[#666] text-sm">50 Property Listings</div>
						<div className="mb-4 text-[#666] text-sm">60 Days Available</div>
						<div className="mb-4 text-[#666] text-sm">20 Featured Property</div>
						<div className="mb-8 text-[#666] text-sm">Limited Support</div>
						<div className="mx-auto py-1 px-12 text-white rounded-md bg-[#ff787c] inline-block">Select</div>
					</div>
				</div>
			</div>
			<AgentRegisterForm />
		</div>
	);
}
