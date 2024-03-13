"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "@/components/navitem";

export default function () {
	const headerRef = useRef(null);
	const logoRef = useRef(null);
	const pathname = usePathname();
	const expandUrls = ["/", "/about", "/contact"];

	const setHeaderStyle = () => {
		if (headerRef && logoRef) {
			if (window.scrollY > 100) {
				headerRef.current.style.backgroundColor = "#fff";
				headerRef.current.classList.add("shadow-lg");
				headerRef.current.style.color = "#666";
				logoRef.current.style.color = "#e94c51";
			} else {
				headerRef.current.style.backgroundColor = "#fff0";
				headerRef.current.style.color = "#fff";
				headerRef.current.classList.remove("shadow-lg");
				logoRef.current.style.color = "#fff";
			}
		}
	};

	useEffect(() => {
		if (expandUrls.includes(pathname)) {
			window.onscroll = () => {
				setHeaderStyle();
			};
			setHeaderStyle();
		} else {
			headerRef.current.style.backgroundColor = "#fff";
			headerRef.current.classList.add("shadow-lg");
			headerRef.current.style.color = "#666";
			logoRef.current.style.color = "#e94c51";
		}
		return () => {
			window.onscroll = () => {};
		};
	}, [pathname]);

	return (
		<div className="fixed top-0 left-0 right-0 z-50 duration-200 text-white" ref={headerRef}>
			<div className="container py-4 flex justify-between h-20 items-center">
				<Link href="/" className="font-black text-2xl" ref={logoRef}>
					2amRealty
				</Link>
				<div className="flex">
					<NavItem
						label="Buy"
						dropdown={
							<div className="bg-white py-2 text-black border border-gray-100 flex flex-col">
								<Link href="#" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									Buy With Us
								</Link>
								<Link href="#" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									All Listings
								</Link>
								<Link href="#" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									Featured Listings
								</Link>
							</div>
						}
					/>
					<NavItem
						label="Sell"
						dropdown={
							<div className="bg-white py-2 text-black border border-gray-100 flex flex-col">
								<Link href="#" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									Sell My Home
								</Link>
								<Link href="#" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									Market Snapshot
								</Link>
								<Link href="#" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									Home Valuation
								</Link>
							</div>
						}
					/>
					<NavItem
						label="About"
						dropdown={
							<div className="bg-white py-2 text-black border border-gray-100 flex flex-col">
								<Link href="about" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									About Us
								</Link>
								<Link href="contact" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									Contact Us
								</Link>
								<Link href="partner" className="py-2 px-4 font-bold hover:bg-[#ccc] text-[#333] duration-200">
									Partner With Us
								</Link>
							</div>
						}
					/>
					<NavItem label="SignIn" href="/signin" />
					<NavItem label="SignUp" href="/signup" />
				</div>
			</div>
		</div>
	);
}
