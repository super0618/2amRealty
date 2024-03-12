import { Facebook, Twitter, Instagram, Dribbble, Linkedin } from "react-feather";

export default function () {
	return (
		<div className="container grid grid-cols-3 px-4 gap-6 mx-auto max-w-[1200px]">
			<div className="col-span-2 bg-white p-6 rounded-md shadow-sm">
				<h2 className="font-bold mb-4">Send Us An Email</h2>
				<p className="mb-4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit
					amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet, congue aliquam leo. In hac habitasse platea dictumst.
				</p>
				<div className="grid grid-cols-2 gap-6 mb-6">
					<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Name" />
					<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Email" />
					<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Phone" />
					<input type="text" className="px-4 py-1 border border-gray-300 rounded-md" placeholder="Subject" />
					<textarea className="col-span-2 p-4 border border-gray-300 rounded-md resize-none h-60" placeholder="Your Message"></textarea>
				</div>
				<div className="bg-[#ff5a5f] py-3 px-8 text-center inline-block text-white rounded-lg cursor-pointer hover:bg-[#e94c51]">Send Message</div>
			</div>
			<div className="bg-white p-6 rounded-md shadow-sm">
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
				<p className="flex gap-2 mb-6">
					<div className="grid w-8 h-8 place-items-center bg-[#efefef] rounded-md cursor-pointer">
						<Facebook size={16} fill="#000" />
					</div>
					<div className="grid w-8 h-8 place-items-center bg-[#efefef] rounded-md cursor-pointer">
						<Twitter size={16} />
					</div>
					<div className="grid w-8 h-8 place-items-center bg-[#efefef] rounded-md cursor-pointer">
						<Instagram size={16} />
					</div>
					<div className="grid w-8 h-8 place-items-center bg-[#efefef] rounded-md cursor-pointer">
						<Linkedin size={16} />
					</div>
					<div className="grid w-8 h-8 place-items-center bg-[#efefef] rounded-md cursor-pointer">
						<Dribbble size={16} />
					</div>
				</p>
			</div>
		</div>
	);
}
