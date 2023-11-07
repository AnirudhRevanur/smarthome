"use client";
import React, {
	useEffect,
	useState,
} from "react";
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
} from "recharts";
import data from './data'

function LineGraph() {

	const [dbResp, setDbResp] = useState(null);
	const [timeSpan, setTimeSpan] =
		useState("Week");

		
	const power = async () => {
		const res = await fetch("http://localhost:5000/getAll");
		const load = await res.json()
		// console.log(load)
		setDbResp(load[load.length - 1])
	}

	useEffect(() => {
		power();
		console.log("hello world")
	}, []);

	return (
		<div className="flex flex-col items-center justify-center">
			<div className=" text-2xl font-semibold flex flex-row">
				Your Energy Consumption
				This {timeSpan}
			</div>

			<div className={`${timeSpan === "Day" ? " " : " hidden"}`}>
				You have used{" "}
				{/* {JSON.stringify(dbResp)} */}
				{dbResp?.power_value}{" "} 
				power up until now
			</div>

			<ResponsiveContainer
				width="100%"
				aspect={5}
				className={
					timeSpan === "Week"
						? " "
						: " hidden"
				}
			>
				<LineChart
					data={data}
					width={500}
					height={300}
					margin={{
						top: 50,
						right: 30,
						left: 30,
						bottom: 5,
					}}
				>
					<XAxis
						dataKey="name"
						interval={
							"preserveStartEnd"
						}
					/>
					<YAxis />
					<Tooltip />
					<Line
						dataKey="students"
						activeDot={{
							r: 6,
						}}
					/>
				</LineChart>
			</ResponsiveContainer>

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
			</div>
		</div>
	);
}

export default LineGraph;
