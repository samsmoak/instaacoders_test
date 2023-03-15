import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../../context/Context";

function NavbarSigninButton() {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	const [navSide, setNavSide] = useState(true);
	const { signupOpenHandler } = useContext(Context);
	return (
		<div>
			<div
				className={`  py-1 flex text-white items-center relative space-x-2 ${
					location.pathname.substr(0, 13) === "/sport/sports"
						? " text-neutral-400 "
						: null
				} `}
				onMouseEnter={() => setOpen(!open)}
				onMouseLeave={() => setOpen(!open)}
			>
				<div className='flex'>
					<div className='cursor-pointer'>signin</div>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6'
						>
							<path
								fill-rule='evenodd'
								d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>
				</div>
				<div
					className={`absolute top-8 right-0 -translate-x-1  bg-gray-800 text-white ${
						open ? "block" : "hidden"
					}`}
				>
					<div className='w-40 pt-4 space-y-5'>
						<div className='space-y-4'>
							<div className='flex space-x-2 text-sm pl-1 '>
								<Link to='/account' className='flex space-x-2 text-sm pl-1'>
									<div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-4 h-4'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
											/>
										</svg>
									</div>
									<div className='whitespace-nowrap capitalize text-xs'>
										your account
									</div>
								</Link>
							</div>
							<div className='flex space-x-2 text-sm pl-1 '>
								<Link to='/order' className='flex space-x-2 text-sm pl-1'>
									<div>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-4 h-4'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z'
											/>
										</svg>
									</div>
									<div className='whitespace-nowrap capitalize text-xs '>
										your order
									</div>
								</Link>
							</div>
							{/* <div className='flex space-x-2 text-sm pl-1'>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										class='w-4 h-4'
									>
										<path
											stroke-linecap='round'
											stroke-linejoin='round'
											d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
										/>
									</svg>
								</div>
								<div className='whitespace-nowrap capitalize text-xs'>
									your shortlist
								</div>
							</div> */}
						</div>
						<div className='space-y-1 '>
							<div className='text-xs text-center'>if you are a new user </div>
							<div>
								<div className='w-full text-center'>
									<div className='text-base w-full'>
										<button
											onClick={signupOpenHandler}
											className='text-sm py-2 w-full bg-black '
										>
											Registration
										</button>
									</div>
								</div>
								<div className='text-base w-full'>
									<button
										onClick='{signupOpenHandler}'
										className='text-sm py-2 w-full bg-rose-500  '
									>
										login
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavbarSigninButton;
