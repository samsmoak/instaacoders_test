import * as React from "react";

import { useRoutes } from "react-router-dom";
import AccountPage from "./Pages/AccountPage/AccountPage";
import CartPage from "./Pages/CartPage/CartPage";
import HomePage from "./Pages/HomePage/HomePage";
import OrderPage from "./Pages/OrderPage/OrderPage";
import ProductPage from "./Pages/ProductPage/ProductPage";

function Routez() {
	const Arrayroutes = useRoutes([
		{
			path: "/",
			element: <HomePage />,
		},
		{
			path: "/product:id",
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
					path: "order",
					element: <OrderPage />,
				},
			],
		},
	]);
	return Arrayroutes;
}

export default Routez;
