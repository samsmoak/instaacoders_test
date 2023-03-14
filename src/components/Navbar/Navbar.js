import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarSigninButton from "./NavbarComponents/NavbarSigninButton";

function Navbar() {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	return (
		<div className='h-14 bg-[#E40345] px-16 grid items-center '>
			<div className='text-white flex justify-between '>
				<div className='flex w-full'>
					<div className='w-24'>snap deal</div>
					<div className='w-full'>
						<input type='text' placeholder='search' className='w-full' />
					</div>
				</div>
				<div className='flex  space-x-10 pl-24 items-center justify-end '>
					<div className=''>cart</div>
					<div>
						<NavbarSigninButton />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
