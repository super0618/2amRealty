import Landing from "@/components/landing";
import Mission from "@/components/ui/mission";
import Services from "@/components/ui/services";
import Teams from "@/components/ui/teams";
import Testimonials from "@/components/ui/testimonials";
import Partners from "@/components/ui/partners";
import Agent from "@/components/ui/agent";

export default function () {
	return (
		<>
			<Landing bgImage="/assets/images/about/bg.jpg" height={400} content={<div className="text-center z-0 text-6xl font-bold mb-4">About Us</div>} />
			<Mission />
			<Services />
			<Teams />
			<Testimonials />
			<Partners />
			<Agent />
		</>
	);
}
