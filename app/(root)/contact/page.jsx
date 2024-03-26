import Link from "next/link";
import Landing from "@/components/landing";
import { IconBrandFacebookFilled, IconBrandTwitterFilled, IconBrandInstagram, IconBrandPinterest, IconBrandDribbble } from "@tabler/icons-react";
import AgentRegisterForm from "@/components/ui/agent-register-form";
import Law from "@/components/law";

export default function () {
	return (
		<>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">Contact Us</div>} />
			<div className="bg-gray-50">
				<div className="container grid grid-cols-3 py-12 gap-6">
					<div className="col-span-2 bg-white p-6 rounded-md border">
						<h2 className="font-bold mb-4">Send Us An Email</h2>
						<p className="mb-4">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu
							feugiat, sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea
							dictumst.
						</p>
						<div className="grid grid-cols-2 gap-6 mb-6">
							<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Name" />
							<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Email" />
							<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Phone" />
							<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Subject" />
							<textarea className="col-span-2 p-4 border border-gray-300 rounded-md resize-none h-60" placeholder="Your Message"></textarea>
						</div>
						<div className="bg-[#B63437] py-3 px-8 text-center inline-block text-white rounded-lg cursor-pointer hover:bg-[#e94c51]">
							Send Message
						</div>
					</div>
					<div className="bg-white p-6 rounded-md border">
						<h2 className="font-bold mb-6">Contact Us</h2>
						<p className="mb-6">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. habitasse platea dictumst.
						</p>
						<h2 className="font-bold">Address</h2>
						<p>2301 Ravenswood Rd Madison</p>
						<p className="mb-6">WI 53711</p>
						<h2 className="font-bold">Phone</h2>
						<p className="mb-6">(315) 905-2321</p>
						<h2 className="font-bold">Mail</h2>
						<p className="mb-6">info@findhouse.com</p>
						<h2 className="font-bold">Skype</h2>
						<p className="mb-6">2am-realty.com</p>
						<h2 className="font-bold mb-2">Follow Us</h2>
						<div className="flex gap-2 mb-6">
							<Link href="#" className="grid w-8 h-8 place-items-center bg-gray-100 rounded-md hover:bg-gray-200">
								<IconBrandFacebookFilled size={16} />
							</Link>
							<Link href="#" className="grid w-8 h-8 place-items-center bg-gray-100 rounded-md hover:bg-gray-200">
								<IconBrandTwitterFilled size={16} />
							</Link>
							<Link href="#" className="grid w-8 h-8 place-items-center bg-gray-100 rounded-md hover:bg-gray-200">
								<IconBrandInstagram size={16} />
							</Link>
							<Link href="#" className="grid w-8 h-8 place-items-center bg-gray-100 rounded-md hover:bg-gray-200">
								<IconBrandPinterest size={16} />
							</Link>
							<Link href="#" className="grid w-8 h-8 place-items-center bg-gray-100 rounded-md hover:bg-gray-200">
								<IconBrandDribbble size={16} />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24162.438229196097!2d-74.4788125!3d40.7992959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c309932196222d%3A0x43b079beb16f21a1!2sMorristown%2C%20NJ%2007960%2C%20USA!5e0!3m2!1sen!2shk!4v1710230807185!5m2!1sen!2shk"
				className="w-full h-96"
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
			<Law />
			<AgentRegisterForm />
		</>
	);
}
