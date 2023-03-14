import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { A11y, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";

function HomeProSlider() {
	const [butter, setButter] = useState(false);
	const [Product, setProduct] = useState([
		{
			ProductId: 1,
			ProductName:
				"Bhawna Collection Loard Shiv Trishul Damru Locket With Puchmukhi Rudraksha Mala Gold-plated Brass, Wood For Men & Wome",

			ProductImage:
				"https://n4.sdlcdn.com/imgs/k/e/u/large/Veirdo-100-Cotton-Regular-Fit-SDL302182620-1-f0fac.jpg",
			ProductPrice: "Rs230",
		},
		{
			ProductId: 2,
			ProductName:
				"Veirdo - Green Cotton Regular Fit Men's T-Shirt ( Pack of 1 )",

			ProductImage:
				"https://n1.sdlcdn.com/imgs/i/n/r/large/bhawna-collection-Loard-Shiv-Trishul-SDL890408077-1-86933.jpeg",
			ProductPrice: "Rs100",
		},
		{
			ProductId: 3,
			ProductName: "Maxbell USB Rechargeable Electronic Flameless Lighter",

			ProductImage:
				"https://n2.sdlcdn.com/imgs/i/z/e/Maxbell-USB-Rechargeable-Electronic-Flameless-SDL679184483-1-08e0f.jpg",
			ProductPrice: "Rs499",
		},
		{
			ProductId: 4,
			ProductName:
				"David Miller White Dial Tan Brown PU Strap Men's Watch - DMRCM4C",

			ProductImage:
				"https://n3.sdlcdn.com/imgs/j/p/k/David-Miller-White-Dial-Tan-SDL580697508-1-fe766.jpg",
			ProductPrice: "Rs600",
		},
		{
			ProductId: 4,
			ProductName:
				"David Miller White Dial Tan Brown PU Strap Men's Watch - DMRCM4C",

			ProductImage:
				"https://n3.sdlcdn.com/imgs/j/p/k/David-Miller-White-Dial-Tan-SDL580697508-1-fe766.jpg",
			ProductPrice: "Rs550",
		},
		{
			ProductId: 4,
			ProductName:
				"David Miller White Dial Tan Brown PU Strap Men's Watch - DMRCM4C",

			ProductImage:
				"https://n3.sdlcdn.com/imgs/j/p/k/David-Miller-White-Dial-Tan-SDL580697508-1-fe766.jpg",
			ProductPrice: "Rs1200",
		},
		{
			ProductId: 3,
			ProductName: "Maxbell USB Rechargeable Electronic Flameless Lighter",

			ProductImage:
				"https://n2.sdlcdn.com/imgs/i/z/e/Maxbell-USB-Rechargeable-Electronic-Flameless-SDL679184483-1-08e0f.jpg",
			ProductPrice: "Rs700",
		},
	]);
	const [swiperRef, setSwiperRef] = useState(null);
	const navigationPrevRef9 = React.useRef(null);
	const navigationNextRef9 = React.useRef(null);

	return (
		<div
			className={`w-full  relative hover  `}
			onMouseEnter={() => setButter(!butter)}
			onMouseLeave={() => setButter(!butter)}
		>
			<div className='w-full flex justify-between z-30 absolute px-5 top-40'>
				<button
					id='custom_next'
					className={`py-1 px-1 bg-ShaBlue2-700 text-gray-300  rounded-full transform duration-500 ${
						butter ? "flex duration-500" : "hidden"
					}`}
					ref={navigationNextRef9}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class={`w-4 h-4 text-black`}
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M15.75 19.5L8.25 12l7.5-7.5'
						/>
					</svg>
				</button>
				<button
					id='custom_prev'
					className={`py-1 px-1  bg-ShaBlue2-700 text-gray-300   rounded-full transform duration-500 ${
						butter ? "flex duration-500" : "hidden"
					}`}
					ref={navigationPrevRef9}
				>
					{" "}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-4 h-4 text-black'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</button>
			</div>
			<Swiper
				slidesPerView={4}
				// spaceBetween={2}
				pagination={{
					clickable: true,
				}}
				navigation={{
					prevEl: navigationNextRef9.current,
					nextEl: navigationPrevRef9.current,
				}}
				modules={[Pagination, Navigation, A11y]}
				className={` h-[400px]   w-full `}
			>
				{Product.map((p) => {
					return (
						<SwiperSlide className='w-96 h-full  px-2  rounded-lg'>
							<div className=' '>
								<div className='bg-white w-72   overflow-hidden shadow-md rounded-2xl'>
									<div className='overflow-hidden h-48'>
										<img
											src={p.ProductImage}
											alt=''
											className='h-full w-full object-cover '
										/>
									</div>
									<div className=' text-black  flex flex-col justify-end px-3 py-4 space-y-4'>
										<div>
											<Link
												to={`/post/${p._id}`}
												style={{ textDecoration: "none" }}
											>
												<h1 className=' w-full h-24 truncate font-extrabold text-sm text-black  bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
													{p.ProductName}
												</h1>
											</Link>
										</div>
										<div className='space-y-2'>
											<div>
												<div className='flex space-x-2'>xxxxxx</div>
											</div>
											<h4 className='w-full text-gray-500 text-xs'>
												{p.ProductPrice}
											</h4>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default HomeProSlider;
