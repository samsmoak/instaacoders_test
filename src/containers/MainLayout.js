import React, { useContext } from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/NavbarTop/NavbarTop";
import Register from "../components/Register";
import { Context } from "../context/Context";
import Routez from "../Routes";

// import Routess from "../Routes";

function Mainlayout() {
	const { signupOpen, signupOpenHandler } = useContext(Context);
	return (
		<div className='  '>
			<BrowserRouter>
				<div className='w-screen  '>
					<div className='w-full fixed top-0 z-40'>
						<NavbarTop />
						<Navbar />
					</div>
					<div className='mt-24'>
						<Routez />
					</div>
					{signupOpen && <Register />}
				</div>
			</BrowserRouter>
		</div>
	);
}

export default Mainlayout;
