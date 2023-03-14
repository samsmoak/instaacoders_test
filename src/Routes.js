import * as React from "react";

import { useRoutes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function Routez() {
	const Arrayroutes = useRoutes([
		{
			path: "/",
			element: <HomePage />,
		},
	]);
	return Arrayroutes;
}

export default Routez;
