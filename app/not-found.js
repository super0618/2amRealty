import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import Link from "next/link";

export default function () {
	return (
		<>
			<Header />
			<div className="bg-gray-50 pt-32 pb-12">
				<div className="container grid place-items-center">
					<img src="/images/404/error.png" alt="Failed to Load" width="200px" className="mb-6" />
					<h2 className="font-bold text-3xl mb-4">Ohh! Page Not Found</h2>
					<p className="text-[#666] text-sm mb-6">We can't seem to find the page you're looking for</p>
					<Link href="/" className="inline-block text-white text-sm py-2 px-8 rounded-md bg-[#ff5a5f]">
						Back To Home
					</Link>
				</div>
			</div>
			<Footer />
		</>
	);
}
