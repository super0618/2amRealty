"use client";
import { useRouter } from "next/navigation";
import Landing from "@/components/landing";
import Featureds from "@/components/ui/featureds";
import Cities from "@/components/ui/cities";
import Services from "@/components/ui/services";
import Teams from "@/components/ui/teams";
import Blogs from "@/components/ui/blogs";
import AgentRegisterForm from "@/components/ui/agent-register-form";

export default function Home() {
	const router = useRouter();

	const onSearch = () => {
		router.push("/properties");
	};

	return (
		<>
			<Landing
				bgImage="/images/bg.jpg"
				height={960}
				content={
					<div className="text-center z-0">
						<div className="text-6xl font-bold mb-4">Find Your Dream Home</div>
						<div className="text-xl font-semibold mb-12">From as low as $10 per day with limited time offer discounts.</div>
						<div className="max-w-[960px] relative p-8 pt-12 bg-white rounded-lg w-11/12 space-y-6 before:content-[''] before:absolute before:-top-3 before:-left-3 before:-right-3 before:-bottom-3 before:bg-[#fff2] before:rounded-lg before:-z-10 mx-auto">
							<div className="flex">
								<input type="text" className="grow border py-2 px-4 border-gray-300" placeholder="City, Country, Subdivision, etc" />
								<div
									className="basis-32 bg-[#B63437] grid place-items-center text-white font-bold text-lg cursor-pointer hover:bg-[#e23e43]"
									onClick={onSearch}
								>
									Search
								</div>
							</div>
							<div className="grid grid-cols-5 gap-6">
								<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Min Price" />
								<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Max Price" />
								<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Beds" />
								<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Baths" />
								<input type="text" className="border py-2 px-4 border-gray-300 min-w-0 shrink" placeholder="Property Type" />
							</div>
						</div>
					</div>
				}
			/>
			<Featureds />
			<Cities />
			<Services />
			<Teams />
			<Blogs />
			<AgentRegisterForm />
		</>
	);
}
