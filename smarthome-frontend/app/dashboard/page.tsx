"use client";
import React from "react";
import {
	useSession,
	signIn,
	signOut,
} from "next-auth/react";

const login = () => {
	const { data: session, status } =
		useSession();
	if (status === "authenticated") {
		return (
			<div className="flex flex-col items-center justify-center gap-4">
				<div className="text-2xl font-bold pt-10">
					Welcome{" "}
					{
						session.user
							?.name
					}
				</div>
				<button
					className="py-2 px-6 bg-cyan-600 rounded-lg hover:scale-110 active:scale-90 transition-all"
					onClick={() =>
						signOut()
					}
				>
					Sign Out
				</button>
			</div>
		);
	}
	else if (status === "loading") {
		return (
			<div>
				Please hang tight as we get you authenticated.
			</div>
		)
	}
	
	else {
		return (
			<div className="flex flex-col h-screen items-center justify-center gap-2">
				<p>
					You are not signed
					In
				</p>
				<button
					className="py-2 px-6 bg-cyan-600 rounded-lg hover:scale-110 active:scale-90 transition-all"
					onClick={() =>
						signIn(
							"google",
							{
								callbackUrl:
									"http://localhost:3000/chart",
							}
						)
					}
				>
					Login
				</button>
			</div>
		);
	}
};

export default login;
