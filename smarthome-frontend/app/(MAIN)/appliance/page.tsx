"use client";
import React, { useState } from "react";

function ApplianceTotal() {
	const [timeSpan, setTimeSpan] =
		useState("Week");

	const data = [
		{
			name: "John",
			age: 25,
		},
		{
			name: "Jane",
			age: 30,
		},
		// ...more data
	];

	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<div className="text-2xl font-semibold">
				Have a look at how much
				each appliance used in
				this {timeSpan}
			</div>

			<table className="w-6/12 bg-white border border-gray-300">
				<thead className="bg-gray-100">
					<tr>
						<th className="px-4 py-2 font-semibold text-center bg-[#bec8da]">
							Appliance
						</th>
						<th className="px-4 py-2 font-semibold text-center bg-[#bec8da]">
							Power
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map(
						(
							row,
							index
						) => (
							<tr
								key={
									index
								}
								className={
									index %
										2 ===
									0
										? "bg-gray-50"
										: null
								}
							>
								<td className="px-4 py-2 border-t border-gray-300 text-center bg-[same-color]">
									{
										row.name
									}
								</td>
								<td className="px-4 py-2 border-t border-gray-300 text-center bg-[same-color]">
									{
										row.age
									}
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>

			<div className="flex flex-row gap-2">
				<button
					className={`p-2 bg-[#17264f] rounded-lg text-[#f0f0f0] ${
						timeSpan ===
						"Day"
							? " cursor-not-allowed bg-gray-600"
							: " hover:scale-105 active:scale-95"
					}`}
					onClick={() =>
						setTimeSpan(
							"Day"
						)
					}
				>
					Daily View
				</button>
				<button
					className={`p-2 bg-[#17264f] rounded-lg text-[#f0f0f0] ${
						timeSpan ===
						"Week"
							? " cursor-not-allowed bg-gray-600"
							: " hover:scale-105 active:scale-95"
					}`}
					onClick={() =>
						setTimeSpan(
							"Week"
						)
					}
				>
					Weekly View
				</button>
				<button
					className={`p-2 bg-[#17264f] rounded-lg text-[#f0f0f0] ${
						timeSpan ===
						"Month"
							? " cursor-not-allowed bg-gray-600"
							: " hover:scale-105 active:scale-95"
					}`}
					onClick={() =>
						setTimeSpan(
							"Month"
						)
					}
				>
					Monthly View
				</button>
			</div>
		</div>
	);
}

export default ApplianceTotal;
