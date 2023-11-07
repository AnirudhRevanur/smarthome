import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import TopBar from "./TopBar";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "Smart Home",
	description:
		"Powering for a green future",
};

export default function RootLayout({
	children,
}) {
	return (
		<html lang="en">
			<body
				className={
					`${inter.className}` +
					" bg-gradient-to-b from-[#f0f0f0] to-[#00a7e1] from-90% text-[#00171f] h-screen"
				}
			>
				<TopBar />
				<Provider>
					{children}
				</Provider>
			</body>
		</html>
	);
}
