import * as React from "react";

import { useRoutes } from "react-router-dom";
import AccountOrder from "./Pages/AccountPage/AccountOrder/AccountOrder";
import AccounOrder from "./Pages/AccountPage/AccountOrder/AccountOrder";
import AccountOrderHistory from "./Pages/AccountPage/AccountOrderHistory/AccountOrderHistory";
import AccountPage from "./Pages/AccountPage/AccountPage";
import AccountPersonalDetails from "./Pages/AccountPage/AccountPersonalDetails/AccountPersonalDetails";
import CartPage from "./Pages/CartPage/CartPage";
import HomePage from "./Pages/HomePage/HomePage";
// import OrderPage from "./Pages/OrderPage/OrderPage";
import ProductPage from "./Pages/SingleProductPage/SingleProductPage";

function Routez() {
	const Arrayroutes = useRoutes([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/product/:id",
			element: <ProductPage />,
		},
		{
			path: "/cart",
			element: <CartPage />,
		},

		{
			path: "/account",
			element: <AccountPage />,
			children: [
				{
					path: "personaldetails",
					element: <AccountPersonalDetails />,
				},
				{
					path: "order",
					element: <AccountOrder />,
				},
				{
					path: "orderhistory",
					element: <AccountOrderHistory />,
				},
			],
		},
	]);
	return Arrayroutes;
}

export default Routez;
