import Link from "next/link";
import { IconPencil, IconTrash, IconStarFilled, IconStarHalfFilled, IconStar } from "@tabler/icons-react";
import Law from "@/components/law";

export default function () {
	return (
		<div className="bg-gray-50 pt-32 pb-12">
			<div className="container mb-4 flex justify-between items-center">
				<h2 className="text-2xl font-bold">My Reviews</h2>
			</div>
			<div className="container bg-white rounded-md shadow-sm border py-12 px-6 space-y-6">
				<div className="flex gap-4">
					<img src="/images/review/1.png" alt="user" className="w-24 h-24 rounded-full" />
					<div>
						<div className="flex items-center justify-between">
							<p className="font-bold">
								You reviewed on{" "}
								<Link href="/blog/detail" className="text-[#B63437] hover:text-[#e23e43]">
									Villa called Archagel
								</Link>
							</p>
							<div className="flex gap-1">
								<IconStarFilled color="#B63437" size={16} />
								<IconStarFilled color="#B63437" size={16} />
								<IconStarFilled color="#B63437" size={16} />
								<IconStarHalfFilled color="#B63437" size={16} />
								<IconStar color="#B63437" size={16} />
							</div>
						</div>
						<p className="text-[#666] mb-6">December 28, 2020</p>
						<p className="text-[#666] mb-6">
							Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back
							during the cooler seasons! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptates eum, velit recusandae,
							ducimus earum aperiam commodi error officia optio aut et quae nam nostrum!
						</p>
						<div className="flex gap-4">
							<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#B63437] rounded-md p-2">
								<IconPencil size={18} />
							</div>
							<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#B63437] rounded-md p-2">
								<IconTrash size={18} />
							</div>
						</div>
					</div>
				</div>

				<div className="flex gap-4">
					<img src="/images/review/2.png" alt="user" className="w-24 h-24 rounded-full" />
					<div>
						<div className="flex items-center justify-between">
							<p className="font-bold">
								You reviewed on <span className="text-[#B63437]">Villa called Archagel</span>
							</p>
							<div className="flex gap-1">
								<IconStarFilled color="#B63437" size={16} />
								<IconStarFilled color="#B63437" size={16} />
								<IconStarFilled color="#B63437" size={16} />
								<IconStarHalfFilled color="#B63437" size={16} />
								<IconStar color="#B63437" size={16} />
							</div>
						</div>
						<p className="text-[#666] mb-6">December 28, 2020</p>
						<p className="text-[#666] mb-6">
							Beautiful home, very picturesque and close to everything in jtree! A little warm for a hot weekend, but would love to come back
							during the cooler seasons! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium voluptates eum, velit recusandae,
							ducimus earum aperiam commodi error officia optio aut et quae nam nostrum!
						</p>
						<div className="flex gap-4">
							<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#B63437] rounded-md p-2">
								<IconPencil size={18} />
							</div>
							<div className="bg-gray-100 hover:bg-gray-200 cursor-pointer text-[#B63437] rounded-md p-2">
								<IconTrash size={18} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<Law />
		</div>
	);
}
