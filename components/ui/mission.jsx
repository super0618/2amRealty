export default function () {
	return (
		<div className="container py-16">
			<div className="text-4xl font-bold text-[#333] mb-2 text-center">Our Mission Is To FindHouse</div>
			<div className="text-lg text-[#666] mb-12 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
			<div className="grid grid-cols-3 md:grid-cols-5 gap-12">
				<div className="col-span-3 text-justify max-w-[512px] mx-auto">
					<h2 className="font-bold text-xl mb-6">
						Mauris ac consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor.
					</h2>
					<p className="mb-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis ligula eu lectus vulputate porttitor sed feugiat nunc. Mauris ac
						consectetur ante, dapibus gravida tellus. Nullam aliquet eleifend dapibus. Cras sagittis, ex euismod lacinia tempor, lectus orci
						elementum augue, eget auctor metus ante sit amet velit.
					</p>
					<p className="mb-6">
						Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis condimentum
						sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero ligula. Vivamus
						semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet, laborum qui nulla quae
						alias tempora.
					</p>
				</div>
				<div className="hidden md:block md:col-span-2 bg-[url('/assets/images/about/thumb.jpg')] bg-center bg-cover shrink-0 bg-no-repeat rounded-2xl overflow-hidden"></div>
			</div>
		</div>
	);
}
