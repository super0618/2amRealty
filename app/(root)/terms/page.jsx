import Link from "next/link";
import Landing from "@/components/landing";

export default function () {
	return (
		<>
			<Landing
				bgImage="/images/about/bg.jpg"
				height={320}
				content={<div className="text-center z-0 text-5xl font-bold mb-4">Terms &amp; Conditions</div>}
			/>
			<div className="bg-gray-50 py-16">
				<div className="container grid grid-cols-3 gap-6">
					<div className="col-span-3 md:col-span-2 space-y-6">
						<div className="bg-white p-6 rounded-md border shadow-sm">
							<h2 className="text-xl font-bold mb-6">Privacy Policy</h2>
							<p className="mb-4">
								Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
								Mauris risus lectus, tristique at nisl at, pharetra tristique enim.
							</p>
							<p className="mb-4">
								Nullam this is a link nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat
								eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat. Curabitur adipiscing erat vel libero tempus congue. Nam pharetra
								interdum vestibulum. Aenean gravida mi non aliquet porttitor. Praesent dapibus, nisi a faucibus tincidunt, quam dolor
								condimentum metus, in convallis libero ligula ut
							</p>
							<h2 className="text-xl font-bold mb-6">Our Terms</h2>
							<p className="mb-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis et sem sed sollicitudin. Donec non odio neque. Aliquam
								hendrerit sollicitudin purus, quis rutrum mi accumsan nec. Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.
								Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.
							</p>
							<p className="mb-4">
								Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante.
								Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
								ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros
								porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris
								sollicitudin et.
							</p>
						</div>
					</div>
					<div className="hidden md:block space-y-6">
						<div className="bg-white p-6 rounded-md border shadow-sm">
							<h2 className="text-xl font-bold mb-6">Navigation</h2>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Welcome Text
								</Link>
								<div className="text-xs">6 properties</div>
							</div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Our Teams
								</Link>
								<div className="text-xs">9 properties</div>
							</div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Conditions
								</Link>
								<div className="text-xs">12 properties</div>
							</div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Your Privacy
								</Link>
								<div className="text-xs">3 properties</div>
							</div>
							<div className="flex justify-between items-center">
								<Link href="#" className="text-blue-400 text-sm py-1">
									Information We Collect
								</Link>
								<div className="text-xs">12 properties</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
