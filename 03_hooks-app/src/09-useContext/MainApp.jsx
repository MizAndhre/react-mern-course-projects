import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const MainApp = () => {
	return (
		<>
			<h1>Main App</h1>

			<Navbar />

			<hr />

			<Outlet />
		</>
	);
};
