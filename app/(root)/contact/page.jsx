import Agent from "@/components/ui/agent";
import ContactForm from "@/components/contactform";

export default function () {
	return (
		<>
			<div className="bg-[url('/assets/images/about/bg.jpg')] relative object-cover bg-center h-96 grid place-items-center text-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#1d293e] before:opacity-60">
				<div className="text-center z-0 text-6xl font-bold mb-4">Contact Us</div>
			</div>
			<div className="bg-[#efefef] py-12">
				<ContactForm />
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24162.438229196097!2d-74.4788125!3d40.7992959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c309932196222d%3A0x43b079beb16f21a1!2sMorristown%2C%20NJ%2007960%2C%20USA!5e0!3m2!1sen!2shk!4v1710230807185!5m2!1sen!2shk"
				className="w-full h-96"
				allowfullscreen
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<Agent />
		</>
	);
}
