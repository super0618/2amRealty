import Landing from "@/components/landing";
import Mission from "@/components/ui/mission";
import Services from "@/components/ui/services";
import Teams from "@/components/ui/teams";
import Testimonials from "@/components/ui/testimonials";
import Partners from "@/components/ui/partners";
import AgentRegisterForm from "@/components/ui/agent-register-form";

export default function () {
	return (
		<>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">About Us</div>} />
			<Mission />
			<Services />
			<Teams />
			<Testimonials />
			<Partners />
			<AgentRegisterForm />
		</>
	);
}
