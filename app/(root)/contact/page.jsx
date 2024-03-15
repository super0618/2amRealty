import Landing from "@/components/landing";
import ContactForm from "@/components/contactform";
import AgentRegisterForm from "@/components/ui/agent-register-form";

export default function () {
	return (
		<>
			<Landing bgImage="/assets/images/about/bg.jpg" height={400} content={<div className="text-center z-0 text-6xl font-bold mb-4">Contact Us</div>} />
			<ContactForm />
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24162.438229196097!2d-74.4788125!3d40.7992959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c309932196222d%3A0x43b079beb16f21a1!2sMorristown%2C%20NJ%2007960%2C%20USA!5e0!3m2!1sen!2shk!4v1710230807185!5m2!1sen!2shk"
				className="w-full h-96"
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<AgentRegisterForm />
		</>
	);
}
