import Link from "next/link";

export default function () {
  return (
    <div className="container py-8">
      <p className="text-[#25185E] text-center">
        2am Realty operates in the state of Texas under 2am Realty, LLC. TREC
        brokerage license number 9014227.{" "}
      </p>
      <p className="mb-4 text-[#25185E] text-center">
        The Texas Real Estate Commission (TREC) regulates real estate brokers
        and sales agents, real estate inspectors, home warranty companies,
        easement and right-of-way agents, and timeshare interest providers. You
        can find more information and check the status of a license holder
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
  );
}
