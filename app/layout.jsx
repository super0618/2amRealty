import { Montserrat } from "next/font/google";
import "@/app/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
	title: "2Am Realty",
	description: "This is a Real Estate Platform",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
