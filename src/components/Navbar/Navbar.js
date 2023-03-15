import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";
import { SearchProvider, Results, SearchBox } from "@elastic/react-search-ui";
import { Layout } from "@elastic/react-search-ui-views";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarSigninButton from "./NavbarComponents/NavbarSigninButton";
// import { Context } from "../../context/Context";
import HomeSideBar from "../../Pages/HomePage/HomePageComponents/HomeSideBar/HomeSideBar";
import NavbarHomeAdditionals from "./NavbarComponents/NavbarHomeAdditionals";
// import { Context } from "../../context/Context";

function Navbar(Prop) {
	let location = useLocation();
	const [open, setOpen] = useState(false);

	const [navSide, setNavSide] = useState(true);
	return (
		<div className='h-14 bg-[#E40345] md:px-8 grid items-center '>
			<div className='text-white flex justify-between '>
				<div className='flex w-full items-center '>
					<div className=' cursor-pointer relative mr-3'>
						<div className='' onClick={() => setNavSide(!navSide)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='w-6 h-6'
							>
								<path
									fill-rule='evenodd'
									d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
						{
							<div
								className={`absolute transform duration-300 right-7 top-8 bg-white w-60 h-screen  overflow-y-scroll   ${
									navSide ? "-translate-x-7" : "translate-x-full"
								}`}
							>
								<div className='relative'>
									<HomeSideBar />
									<NavbarHomeAdditionals />
								</div>
							</div>
						}
					</div>
					<div className='w-40 flex space-x-1 items-center'>
						<Link to='/' className='text-2xl font-light'>
							snapdeal
						</Link>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path d='M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z' />
							<path d='M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z' />
							<path d='M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z' />
						</svg>
					</div>
					<div className='flex w-full py-2'>
						<input type='text' placeholder='search' className='w-full' />

						<button className=' px-4 bg-zinc-800'>search</button>
					</div>
				</div>
				<div className=' hidden sm:flex  space-x-10 pl-24 sm:items-center sm:justify-end '>
					<div className=''>
						<Link to='/cart'>
							<div className='flex'>
								<div>cart</div>
								<div className='relative'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										class='w-6 h-6 font-light'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
										/>
									</svg>

									<div className='absolute top-0 bottom-0 right-0 left-0'>
										<div className='w-full h-full flex justify-end items-start  text-black font-extrabold text-xs '>
											<div
												className='bg-white rounded-full w-4 h-4 text-center
											'
											>
												{Prop.lenghter}
											</div>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</div>
					<div>
						<NavbarSigninButton />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
