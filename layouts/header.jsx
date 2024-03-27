"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavItem from "@/components/navitem";

export default function () {
	const headerRef = useRef(null);
	const pathname = usePathname();
	const [loggedIn, setLoggedIn] = useState(true);
	const expandUrls = ["/", "/about", "/contact", "/compare", "/faq", "/plan", "/service", "/terms", "/disclosures"];

	const setHeaderStyle = () => {
		if (headerRef) {
			if (window.scrollY > 80) {
				headerRef.current.style.backgroundColor = "#fff";
				headerRef.current.classList.add("shadow-sm");
				headerRef.current.style.color = "#666";
			} else {
				headerRef.current.style.backgroundColor = "#fff0";
				headerRef.current.style.color = "#fff";
				headerRef.current.classList.remove("shadow-sm");
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
			headerRef.current.classList.add("shadow-sm");
			headerRef.current.style.color = "#666";
		}
		return () => {
			window.onscroll = () => {};
		};
	}, [pathname]);

	return (
		<div className="fixed top-0 left-0 right-0 z-[999] duration-200 text-white" ref={headerRef}>
			<div className="container flex justify-between h-20 items-center">
				<Link href="/" className="flex items-center">
					<img src="/images/logo.png" className="w-32"></img>
				</Link>
				<div className="flex">
					<NavItem
						label="Buy & Sell"
						dropdown={
							<div className="bg-white py-2 text-black border border-gray-100 flex flex-col min-w-[150px]">
								<Link href="/buyerguide" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									Buyer Guide
								</Link>
								<Link href="/sellerguide" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									Seller Guide
								</Link>
								<Link href="/properties" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									All Listings
								</Link>
								<Link href="/properties" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									Featured Listings
								</Link>
							</div>
						}
						arrowdown
					/>
					<NavItem
						label="About"
						dropdown={
							<div className="bg-white py-2 text-black border border-gray-100 flex flex-col min-w-[150px]">
								<Link href="/about" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									About Us
								</Link>
								<Link href="/terms" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									Privacy
								</Link>
								<Link href="/service" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									Service
								</Link>
								<Link href="/blogs" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
									Our Blogs
								</Link>
							</div>
						}
						arrowdown
					/>
					<NavItem label="ContactUs" href="/contact" />
					<NavItem label="Disclosures" href="/disclosures" />
					<NavItem label="Faq" href="/faq" />
					{loggedIn ? (
						<NavItem
							label={<div className="w-10 h-10 grid place-items-center border-2 rounded-full">AB</div>}
							dropdown={
								<div className="bg-white py-2 text-black border border-gray-100 flex flex-col min-w-[150px]">
									<Link href="/listings" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
										My Listings
									</Link>
									<Link href="/reviews" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
										My Reviews
									</Link>
									<Link href="/favourites" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
										My Favourites
									</Link>
									<Link href="/plan" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
										My Plan
									</Link>
									<Link href="/blog-create" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
										Post a Blog
									</Link>
									<Link href="/logout" className="py-2 px-4 hover:bg-[#ccc] text-[#555] duration-200">
										Logout
									</Link>
								</div>
							}
						/>
					) : (
						<>
							<NavItem label="SignIn" href="/signin" />
							<NavItem label="SignUp" href="/signup" />
						</>
					)}
				</div>
			</div>
		</div>
	);
}
