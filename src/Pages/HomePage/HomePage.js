import React, { useState } from "react";
import Footer from "../../components/Footer";
import Swipperslide from "./HomePageComponents/HomeSwipper";
import HomeSideBar from "./HomePageComponents/HomeSideBar";
import HomeSwipper from "./HomePageComponents/HomeSwipper";
import HomeProSlider from "./HomePageComponents/HomeProSlider";
import HomeSnapAdd from "./HomePageComponents/HomeSnapAdd";

function HomePage() {
	const [open, setOpen] = useState(true);
	return (
		<div className='w-full  lg:px-10'>
			<div className='w-full grid grid-cols-8 gap-x-2  relative  h-full'>
				{/* the sidebar is generally specific to the page for example the livepage also has its sidebar with data
			displayed with respect to that page
			*/}
				<div
					className={` absolute  z-40 md:hidden duration-200   ${
						true ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className='relative'>
						<div className='w-40'>
							<HomeSideBar />
						</div>

						<div
							className='absolute cursor-pointer top-0 z-30 -right-4  '
							onClick={() => {
								setOpen(!open);
							}}
						>
							{/* <i class='fa-solid fa-square-caret-left font-extrabold text-xl text-rose-600'></i> */}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6 text-rose-600'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className=' hidden md:flex md:col-span-1  h-full overflow-y-scroll  '>
					<HomeSideBar />
				</div>

				{/* the sportContainer component contain the table for the sporpage. live Container also has one. */}
				<div className='col-span-full md:col-span-7   overflow-y-scroll overflow-x-scroll '>
					<div className='w-full h-full'>
						<div className='flex w-full space-x-2 '>
							<div className=' w-full'>
								<HomeSwipper />
							</div>
							<div className='w-52 h-10 bg-cyan-500'>dsdsdxs</div>
						</div>
						<div className='w-full flex justify-start bg-red-400 py-10'>
							<HomeProSlider />
						</div>
						<div className='text-black '>
							<div>
								mamamajkvjhvlkhvlvjkckhhgcjvjcgjhkjjkjkjjkcnksncksnknsknskcnksncksncknskncknscksncnksncknskcnksnckns
								cksncksncknsc cknkcnsknc sknkcnkscn
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<HomeSnapAdd />
			</div>

			<div>
				<Footer />
			</div>
		</div>
	);
}

export default HomePage;
