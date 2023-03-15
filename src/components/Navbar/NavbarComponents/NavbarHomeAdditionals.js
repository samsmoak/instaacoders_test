import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";
// import { Context } from "../../context/Context";

function NavbarHomeAdditionals() {
	const { betslip } = useContext(Context);
	const { signupOpenHandler, signinOpenHandler } = useContext(Context);
	return (
		<div className='mb-96'>
			<Link to='/cart' className=' px-4 '>
				<div className='flex bg-red-500 w-full py-2'>
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
									{betslip.length}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
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
						onClick={signinOpenHandler}
						className='text-sm py-2 w-full bg-rose-500  '
					>
						login
					</button>
				</div>
			</div>
		</div>
	);
}

export default NavbarHomeAdditionals;