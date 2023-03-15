import React, { useContext } from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../components/Login";
import Navbar from "../components/Navbar/Navbar";
import NavbarTop from "../components/NavbarTop/NavbarTop";
import Register from "../components/Register";
import { Context } from "../context/Context";
import Routez from "../Routes";

// import Routess from "../Routes";

function Mainlayout() {
	const { signupOpen, signinOpen, signupOpenHandler } = useContext(Context);
	const { betslip } = useContext(Context);

	return (
		<div className='  '>
			<BrowserRouter>
				<div className='w-screen  '>
					<div className='w-full fixed top-0 z-40'>
						<NavbarTop />
						<Navbar lenghter={betslip.length} />
					</div>
					<div className='mt-24'>
						<Routez />
					</div>
					{signupOpen && <Register />}
					{signinOpen && <Login />}
				</div>
			</BrowserRouter>
		</div>
	);
}

export default Mainlayout;
