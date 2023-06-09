import React, { useState } from "react";
import { Link } from "react-router-dom";

function AccountSettingSidebar() {
	const [show, setShow] = useState(true);
	const [show1, setShow1] = useState(true);
	const [show2, setShow2] = useState(true);
	const [show3, setShow3] = useState(true);
	const [show4, setShow4] = useState(true);
	return (
		<div className='h-full w-64  overflow-y-scroll   bg-rose-200  space-y-5 px-2 py-2'>
			<div>
				<div className='p-4   w-full bg-rose-700 text-white'>
					<button
						className=' w-full flex  justify-between'
						onClick={() => {
							setShow1(!show1);
						}}
					>
						<div className='text-xs font-bold uppercase'>
							<button>My Account</button>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class={`w-4 h-4 ${show1 && "rotate-180"}`}
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M19.5 8.25l-7.5 7.5-7.5-7.5'
								/>
							</svg>
						</div>
					</button>
				</div>
				{show1 && (
					<div className='w-full pt-2 text-xs font-semibold bg-slate-300'>
						<div className='w-full px-4 flex space-x-2  hover:bg-gray-200'>
							<Link to='personaldetails' className='w-full flex space-x-2 py-2'>
								<div>
									<i class='fa-solid fa-shirt'></i>
								</div>
								<div className='w-full'>Personal Details</div>
							</Link>
						</div>
					</div>
				)}
			</div>
			<div>
				<div className='p-4   w-full bg-rose-700 text-white '>
					<button
						className=' w-full flex  justify-between'
						onClick={() => {
							setShow2(!show2);
						}}
					>
						<div className='text-xs font-bold uppercase'>
							<button>Order</button>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class={`w-4 h-4 ${show2 && "rotate-180"}`}
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M19.5 8.25l-7.5 7.5-7.5-7.5'
								/>
							</svg>
						</div>
					</button>
				</div>
				{show2 && (
					<div className='w-full pt-2 text-xs font-semibold bg-slate-300'>
						<div className='w-full px-4 flex space-x-2  hover:bg-gray-200'>
							<Link to='order' className='w-full flex space-x-2 py-2'>
								<div>
									<i class='fa-solid fa-shirt'></i>
								</div>
								<div className='w-full'>order</div>
							</Link>
						</div>
						<div className='w-full px-4 flex space-x-2  hover:bg-gray-200'>
							<Link to='orderhistory' className='w-full flex space-x-2 py-2'>
								<div>
									<i class='fa-solid fa-shirt'></i>
								</div>
								<div className='w-full'>orderhistory</div>
							</Link>
						</div>
					</div>
				)}
			</div>
			<div>
				<div className='p-4   w-full bg-rose-700 text-white '>
					<button
						className=' w-full flex  justify-between'
						onClick={() => {
							setShow3(!show3);
						}}
					>
						<div className='text-xs font-bold uppercase'>
							<button>Active Promotions</button>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class={`w-4 h-4 ${show3 && "rotate-180"}`}
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M19.5 8.25l-7.5 7.5-7.5-7.5'
								/>
							</svg>
						</div>
					</button>
				</div>
				{show3 && (
					<div className='w-full pt-2 text-xs font-semibold bg-slate-300'>
						<div className='w-full px-4 flex space-x-2  hover:bg-gray-200'>
							<Link to='#' className='w-full flex space-x-2 py-2'>
								<div>
									<i class='fa-solid fa-shirt'></i>
								</div>
								<div className='w-full'>Bonuses</div>
							</Link>
						</div>
						<div className='w-full px-4 flex space-x-2  hover:bg-gray-200'>
							<Link to='#' className='w-full flex space-x-2 py-2'>
								<div>
									<i class='fa-solid fa-shirt'></i>
								</div>
								<div className='w-full'>Coins</div>
							</Link>
						</div>
					</div>
				)}
				<div className='h-[50rem]'></div>
			</div>
		</div>
	);
}

export default AccountSettingSidebar;
