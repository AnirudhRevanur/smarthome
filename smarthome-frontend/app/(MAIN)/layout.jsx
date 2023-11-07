import { Inter } from "next/font/google";
import {
	getServerSession,
	Session,
} from "next-auth";
import { AuthOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";


const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "Smart Home",
	description:
		"Powering for a green future",
};

export default async function RootLayout({
	children,
}) {
	const session =
		await getServerSession(
			AuthOptions
		);

	if (session == null) {
		redirect("/dashboard");
	} else {
		return <div>{children}</div>;
	}
}
