import Link from "next/link";
import React from "react";

function Home() {
	return (
		<div className="flex text-[#00171f]  flex-col mt-20 items-center justify-center gap-6">
			<div className="text-6xl text-[#007ea7] flex items-center justify-center font-bold font-serif">
				Home, Smart Home
			</div>
			<div className="text-xl">
				Powering for a green
				tomorrow
			</div>
			<Link
				href="/dashboard"
				className="p-4 rounded-lg bg-gradient-to-br from-[#007ea7] to-[#00a7e1] hover:scale-110 active:scale-90 hover:bg-gradient-to-tl hover:from-[#007ea7] hover:to-[#00a7e1]"
			>
				Get Started
			</Link>
		</div>
	);
}

export default Home;
