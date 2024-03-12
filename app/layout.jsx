import { Nunito } from "next/font/google";
import "@/app/globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
	title: "2Am Realty",
	description: "This is a Real Estate Platform",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={nunito.className}>{children}</body>
		</html>
	);
}
