import Landing from "@/components/landing";
import Services from "@/components/ui/services";
import Teams from "@/components/ui/teams";
import Testimonials from "@/components/ui/testimonials";
import Partners from "@/components/ui/partners";
import AgentRegisterForm from "@/components/ui/agent-register-form";
import Law from "@/components/law";

export default function () {
	return (
		<>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">About Us</div>} />
			<div className="bg-gray-50 py-6">
				<div className="container">
					<p className="font-bold text-2xl text-center text-[#B63437] mb-6">About us</p>
					<p className="mb-4 text-[#25185E]">
						Welcome to 2am Realty, where innovation meets real estate excellence in the heart of Texas. As a trailblazing realty company, we
						redefine the home-buying and selling experience with a commitment to cutting-edge solutions and personalized service.
					</p>
					<p className="mb-6 text-[#25185E]">
						At 2am Realty, we envision a future where every Texan finds their perfect home effortlessly. Through innovation and dedication, we aim
						to set new standards in the real estate industry.
					</p>
					<p className="font-bold text-2xl text-center text-[#B63437] mb-6">Why Choose Us?</p>
					<p className="mb-4 text-[#25185E]">
						<span className="font-bold text-[#B63437]">Innovative Solutions:</span> Harnessing the latest technologies, we bring you innovative
						solutions that streamline your real estate journey. From virtual tours to data-driven insights, we leverage the power of technology for
						your benefit.
					</p>
					<p className="mb-4 text-[#25185E]">
						<span className="font-bold text-[#B63437]">Local Expertise:</span> With a deep understanding of the Texas real estate landscape, our
						team of experts provides insights tailored to your unique needs. Whether you're a first-time homebuyer or a seasoned investor, we've got
						you covered.
					</p>
					<p className="mb-4 text-[#25185E]">
						<span className="font-bold text-[#B63437]">Personalized Service:</span> We believe in a one-on-one approach. Our dedicated agents work
						closely with you, ensuring a personalized experience that goes beyond the transaction. Your goals are our goals, and your satisfaction
						is our top priority.
					</p>
					<p className="mb-4 text-[#25185E]">
						<span className="font-bold text-[#B63437]">Community Commitment:</span> 2am Realty is not just about properties; it's about building
						relationship and building communities. We actively engage with and contribute to the vibrant Texas neighborhoods we serve.
					</p>
					<p className="mb-4 text-[#25185E]">
						<span className="font-bold text-[#B63437]">Discover the 2am Realty Difference:</span> Embark on a real estate journey like never before.
						Join us at 2am Realty and experience the future of realty in Texas. Your dream home awaits, and we're here to make it a reality.
					</p>
				</div>
			</div>
			<Services />
			<Teams />
			<Testimonials />
			<Partners />
			<Law />
			<AgentRegisterForm />
		</>
	);
}
