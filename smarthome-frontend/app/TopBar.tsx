import Link from "next/link";
import React from "react";

function TopBar() {
	return (
		<div className="w-full z-10 flex flex-col items-center mb-8 bg-[#023e7d] p-4 text-[#f0f0f0]">
			<div className="flex flex-row justify-between w-full">
				<Link
					href="/"
					className="text-3xl font-semibold pt-2"
				>
					SmartHome
				</Link>
				<div className="gap-4 flex items-center">
					<Link
						href="/dashboard"
						className="bg-[#11192d] w-32 py-4 text-center rounded-lg hover:scale-110 active:scale-90"
					>
						Dashboard
					</Link>
					<Link
						href="/chart"
						className="bg-[#11192d] w-32 py-4 text-center rounded-lg hover:scale-110 active:scale-90"
					>
						Charts
					</Link>
					<Link
						href="/bill"
						className="bg-[#11192d] w-32 py-4 text-center rounded-lg hover:scale-110 active:scale-90"
					>
						Bill
					</Link>
					<Link
						href="/appliance"
						className="bg-[#11192d] w-32 py-4 text-center rounded-lg hover:scale-110 active:scale-90"
					>
						Appliances
					</Link>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
