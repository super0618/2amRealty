import Services from "@/components/ui/services";
import Teams from "@/components/ui/teams";
import Testimonials from "@/components/ui/testimonials";
import Partners from "@/components/ui/partners";

export default function () {
	return (
		<>
			<div className="bg-[url('/assets/images/about/bg.jpg')] relative object-cover bg-center h-96 grid place-items-center text-white before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#1d293e] before:opacity-60">
				<div className="text-center z-0 text-6xl font-bold mb-4">About Us</div>
			</div>
			<div className="bg-[#efefef]">
				<div className="container mx-auto px-4 py-16">
					<div className="text-4xl font-bold text-[#333] mb-2 text-center">Our Mission Is To FindHouse</div>
					<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
					<div className="max-w-[1200px] mx-auto">
						<div className="grid grid-cols-3 sm:grid-cols-5 gap-12">
							<div className="col-span-3 text-justify">
								<h2 className="font-bold text-xl mb-6">
									Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
									tempor.
								</h2>
								<p className="mb-6">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc.
									Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia
									tempor, lectus orci elementum augue, eget auctor metus ante sit amet velit.
								</p>
								<p className="mb-6">
									Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis
									condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et
									libero ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
									libero amet, laborum qui nulla quae alias tempora.
								</p>
							</div>
							<div className="hidden sm:block sm:col-span-2 bg-[url('/assets/images/about/thumb.jpg')] bg-center bg-cover shrink-0 bg-no-repeat rounded-2xl overflow-hidden"></div>
						</div>
						<Services size="sm" />
						<Teams size="sm" />
						<Testimonials />
						<Partners />
					</div>
				</div>
			</div>
		</>
	);
}
