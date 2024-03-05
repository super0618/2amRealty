"use client";

import { useEffect, useRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import { ChevronDown } from "react-feather";

export default function () {
	const headerRef = useRef(null);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 250) {
				headerRef.current.style.backgroundColor = "#fff";
				headerRef.current.classList.add("shadow-xl");
				headerRef.current.style.color = "#666";
			} else {
				headerRef.current.style.backgroundColor = "#fff0";
				headerRef.current.style.color = "#fff";
				headerRef.current.classList.remove("shadow-xl");
			}
		};
	}, []);

	return (
		<div className="fixed top-0 left-0 right-0 z-50 duration-200 text-white" ref={headerRef}>
			<div className="container mx-auto p-4 flex justify-between h-20 items-center">
				<div className="font-black text-2xl">2amRealty</div>
				<div className="flex">
					<div className="py-2 px-3 text-xl font-bold">Home</div>
					<Popover.Root>
						<Popover.Trigger>
							<div className="py-2 px-3 text-xl font-bold flex items-center gap-1">
								<div>Buy</div>
								<ChevronDown />
							</div>
						</Popover.Trigger>
						<Popover.Content>
							<div className="bg-white py-2 text-black shadow-lg">
								<div className="py-2 px-4 font-bold">Buy With Us</div>
								<div className="py-2 px-4 font-bold">All Listings</div>
								<div className="py-2 px-4 font-bold">Featured Listings</div>
							</div>
						</Popover.Content>
					</Popover.Root>
					<Popover.Root>
						<Popover.Trigger>
							<div className="py-2 px-3 text-xl font-bold flex items-center gap-1">
								<div>Sell</div>
								<ChevronDown />
							</div>
						</Popover.Trigger>
						<Popover.Content>
							<div className="bg-white py-2 text-black shadow-lg">
								<div className="py-2 px-4 font-bold">Sell My Home</div>
								<div className="py-2 px-4 font-bold">Market Snapshot</div>
								<div className="py-2 px-4 font-bold">Home Valuation</div>
							</div>
						</Popover.Content>
					</Popover.Root>
					<Popover.Root>
						<Popover.Trigger>
							<div className="py-2 px-3 text-xl font-bold flex items-center gap-1">
								<div>About</div>
								<ChevronDown />
							</div>
						</Popover.Trigger>
						<Popover.Content>
							<div className="bg-white py-2 text-black shadow-lg">
								<div className="py-2 px-4 font-bold">About Us</div>
								<div className="py-2 px-4 font-bold">Contact Us</div>
								<div className="py-2 px-4 font-bold">Partner With Us</div>
							</div>
						</Popover.Content>
					</Popover.Root>
					<div className="py-2 px-3 text-xl font-bold">SignIn</div>
					<div className="py-2 px-3 text-xl font-bold">SignUp</div>
				</div>
			</div>
		</div>
	);
}
