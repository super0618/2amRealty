import Landing from "@/components/landing";
import Law from "@/components/law";

export default function () {
	return (
		<div>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">Faq</div>} />
			<div className="container py-16">
				<div className="text-4xl font-bold mb-6 text-center">Frequently Asked Questions</div>
				<div className="p-6 bg-white rounded-md border shadow-sm max-w-[700px] mx-auto">
					<details className="cursor-pointer focus:outline-none px-4 py-2">
						<summary className="text-[#B63437]">Contrary to popular belief, Lorem Ipsum is not simply</summary>
						<p className="text-[#25185E] py-3">
							Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis
							condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
							ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet,
							laborum qui nulla quae alias tempora.
						</p>
					</details>
					<details className="cursor-pointer focus:outline-none px-4 py-2">
						<summary className="text-[#B63437]">There are many variations of passages of Lorem</summary>
						<p className="text-[#25185E] py-3">
							Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis
							condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
							ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet,
							laborum qui nulla quae alias tempora.
						</p>
					</details>
					<details className="cursor-pointer focus:outline-none px-4 py-2">
						<summary className="text-[#B63437]">Model sentence structures, to generate</summary>
						<p className="text-[#25185E] py-3">
							Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis
							condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
							ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet,
							laborum qui nulla quae alias tempora.
						</p>
					</details>
					<details className="cursor-pointer focus:outline-none px-4 py-2">
						<summary className="text-[#B63437]">Finibus Bonorum et Malorum by Cicero are also</summary>
						<p className="text-[#25185E] py-3">
							Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis
							condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
							ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet,
							laborum qui nulla quae alias tempora.
						</p>
					</details>
					<details className="cursor-pointer focus:outline-none px-4 py-2">
						<summary className="text-[#B63437]">Letraset sheets containing Lorem Ipsum passages</summary>
						<p className="text-[#25185E] py-3">
							Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis
							condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
							ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet,
							laborum qui nulla quae alias tempora.
						</p>
					</details>
					<details className="cursor-pointer focus:outline-none px-4 py-2">
						<summary className="text-[#B63437]">Model sentence structures, to generate</summary>
						<p className="text-[#25185E] py-3">
							Maecenas quis viverra metus, et efficitur ligula. Nam congue augue et ex congue, sed luctus lectus congue. Integer convallis
							condimentum sem. Duis elementum tortor eget condimentum tempor. Praesent sollicitudin lectus ut pharetra pulvinar. Donec et libero
							ligula. Vivamus semper at orci at placerat.Placeat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod libero amet,
							laborum qui nulla quae alias tempora.
						</p>
					</details>
				</div>
			</div>
			<Law />
		</div>
	);
}
