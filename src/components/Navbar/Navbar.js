import React from "react";
import * as mdb from "mdb-ui-kit";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";

function Navbar() {
	return (
		<div className='h-14 bg-[#E40345] px-16 grid items-center '>
			<div className='text-white flex justify-between '>
				<div className='flex w-full'>
					<div className='w-24'>snap deal</div>
					<div className='w-full'>
						<input type='text' placeholder='search' className='w-full' />
					</div>
				</div>
				<div className='flex px-20  '>
					<div className=''>cart</div>
					<div>signin</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
