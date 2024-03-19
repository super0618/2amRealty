import Landing from "@/components/landing";
import Link from "next/link";

export default function () {
	return (
		<>
			<Landing bgImage="/images/about/bg.jpg" height={320} content={<div className="text-center z-0 text-5xl font-bold mb-4">Disclosures</div>} />
			<div className="container py-16">
				<p className="font-bold text-[#B63437] mb-4">Texas | License No. 9014227</p>
				<p className="text-[#25185E] mb-12">
					2am Realty operates in the state of Texas under 2am Realty, LLC and maintains the brokerage license number 9014227 as ACTIVE with the Texas
					Real Estate Commission (“TREC”). You can find more information and check the status of a license holder online at: www.trec.texas.gov
				</p>
				<Link href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf" className="font-bold text-[#B63437] block mb-4">
					TREC | CONSUMER PROTECTION NOTICE
				</Link>
				<Link href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf" className="font-bold text-[#B63437] block mb-12">
					TREC | INFORMATION ABOUT BROKERAGE SERVICES
				</Link>
				<p className="mb-12 text-[#25185E]">
					<span className="font-bold text-[#B63437]">Important notice for Fair Housing:</span> 2am Realty, LLC is committed to and abides by the Fair
					Housing Act and Equal Opportunity Act. Read 2am Realty’s <span className="font-bold text-[#B63437]">Fair Housing Policy.</span>
				</p>
				<p className="mb-12 text-[#25185E]">
					<span className="font-bold text-[#B63437]">Important notice regarding REALTORS®:</span> 2am Realty’s employees, independent contractors and
					real estate agents may be active members of REALTOR® associations where required by federal, state, and/or local law to conduct business.
				</p>
				<p className="mb-4 text-[#25185E]">
					<span className="font-bold text-[#B63437]">Important notice regarding Real Estate Commissions:</span> In most geographic areas, a local Real
					Estate Commission regulates real estate brokers and sales agents, real estate inspectors, home warranty companies, easement and right-of-way
					agents, and timeshare interest providers.
				</p>
				<img src="/images/footerlogo.png" className="block mx-auto mb-4" />
				<p className="font-bold text-[#B63437] text-center mb-4">CONTACT 2am REALTY</p>
				<p className="mb-12 text-[#25185E] text-center">
					We are continuously working to improve the accessibility of our web experience for everyone and we welcome feedback and accommodation
					requests. If you wish to ask a question, report an issue or seek an accommodation, please{" "}
					<Link href="https://2amrealty.com/contact-us" className="font-bold text-[#B63437]">
						CONTACT US HERE.
					</Link>
				</p>
				<p className="text-[#25185E] text-center">
					2am Realty operates in the state of Texas under 2am Realty, LLC. TREC brokerage license number 9014227.{" "}
				</p>
				<p className="mb-4 text-[#25185E] text-center">
					The Texas Real Estate Commission (TREC) regulates real estate brokers and sales agents, real estate inspectors, home warranty companies,
					easement and right-of-way agents, and timeshare interest providers. You can find more information and check the status of a license holder
					online at: www.trec.texas.gov
				</p>
				<p className="text-[#B63437] text-center">
					<Link href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-5_0.pdf">
						Texas Real Estate Commission Consumer Protection Notice
					</Link>
					<span className="px-4">|</span>
					<Link href="https://drive.google.com/file/d/1UH8WP7vcvBPoS-JKGxNi9qCwezA2H0pV/view?usp=sharing">
						Texas Real Estate Commission Information about Brokerage Services
					</Link>
				</p>
			</div>
		</>
	);
}
