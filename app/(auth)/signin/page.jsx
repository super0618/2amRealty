"use client";
import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ArrowLeft } from "react-feather";

export default function () {
	return (
		<div className="bg-gray-200 grid place-items-center h-screen">
			<div className="grid grid-cols-5 w-[90%] h-[90%] max-w-[900px] max-h-[800px] shadow-xl">
				<div className="col-span-2 hidden sm:block rounded-l-xl bg-[url('/assets/images/sidebg.jpg')] bg-cover bg-center overflow-hidden relative before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[#1d293e] before:opacity-60">
					<div className="absolute top-6 left-6 text-white">
						<Tooltip.TooltipProvider>
							<Tooltip.Root delayDuration={0}>
								<Tooltip.Trigger>
									<Link href="/">
										<ArrowLeft />
									</Link>
								</Tooltip.Trigger>
								<Tooltip.Content>
									<div className="px-2 py-1 bg-[#333] rounded-md">Go to Home</div>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.TooltipProvider>
					</div>
				</div>
				<div className="flex flex-col justify-between col-span-5 sm:col-span-3 bg-white rounded-xl sm:rounded-r-xl sm:rounded-l-none px-6 pt-20 pb-6 text-[#333]">
					<div>
						<p className="text-4xl font-bold text-center mb-8">Sign In</p>
						<div className="w-full max-w-96 mx-auto">
							<div className="w-full px-4 py-3 rounded-md mb-6 border-[#ff5a5f] border-2 text-[#ff5a5f] font-bold text-center cursor-pointer duration-200 hover:bg-[#ff5a5f] hover:text-white">
								Continue with Google
							</div>
							<div className="w-full px-4 py-3 rounded-md mb-6 border-[#1d293e] border-2 text-[#1d293e] font-bold text-center cursor-pointer duration-200 hover:bg-[#1d293e] hover:text-white">
								Continue with Facebook
							</div>
							<div className="bg-gray-300 h-[1px] mb-6"></div>
							<input type="text" className="w-full border px-4 py-3 rounded-md mb-6 border-gray-400" placeholder="Username" />
							<input type="password" className="w-full border px-4 py-3 rounded-md mb-6 border-gray-400" placeholder="Password" />
							<div className="flex justify-between items-center">
								<label className="flex items-center gap-2">
									<input type="checkbox" name="checkbox" className="w-4 h-4" />
									Remember Me
								</label>
								<Link href="/forgot" className="text-[#8b91dd] hover:text-[#ff5a5f]">
									Forgot Password?
								</Link>
							</div>
						</div>
					</div>
					<div>
						<div className="w-full max-w-96 mx-auto text-center">
							<div className="w-full px-4 py-3 rounded-md mb-2 border-[#ff5a5f] bg-[#ff5a5f] border-2 text-white font-bold text-center cursor-pointer duration-200 hover:bg-[#c44448]">
								Login
							</div>
							<Link href="/signup" className="text-[#8b91dd] hover:text-[#ff5a5f]">
								Create account
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
