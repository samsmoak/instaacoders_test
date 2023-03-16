import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import lodash from "lodash";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";

function HomeProSlider3() {
	const { betHandler, deleteBetSlip, betslip } = useContext(Context);
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
				"Rangita Women Abstract Printed Crepe Saree With Blouse Piece - Black",

			ProductImage:
				"https://n3.sdlcdn.com/imgs/k/l/z/Rangita-Black-Crepe-Saree-With-SDL287202584-1-d8ef2.jpg",
			ProductPrice: "Rs500",
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
			ProductName: "Unitrim Belt for Men & Women (Black; Free Size)",

			ProductImage:
				"https://n2.sdlcdn.com/imgs/j/s/7/large/Unitrim-Belt-for-Men-Women-SDL429550473-1-e971f.jpg",
			ProductPrice: "Rs600",
		},
		{
			ProductId: 5,
			ProductName: "Nokia 8210 4G Dual SIM Feature Phone Grey",

			ProductImage:
				"https://n2.sdlcdn.com/imgs/k/m/a/large/Nokia-8210-4G-Dual-SIM-SDL493058732-1-a017e.png",
			ProductPrice: "Rs12890",
		},
		{
			ProductId: 6,
			ProductName:
				"NightBlue - Green Silk Blend Saree With Blouse Piece ( Pack of 1 )",

			ProductImage:
				"https://n4.sdlcdn.com/imgs/k/h/p/large/NightBlue-Green-Silk-Blend-Saree-SDL921547262-1-4d4f4.webp",
			ProductPrice: "Rs890",
		},
		{
			ProductId: 7,
			ProductName:
				"SareeQueen - Multicolor Georgette Saree With Blouse Piece (Pack of 1)",

			ProductImage:
				"https://n4.sdlcdn.com/imgs/k/h/p/SareeQueen-Multicolor-Georgette-Saree-With-SDL634296218-1-61dac.jpg",
			ProductPrice: "Rs3000",
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
					className={`py-1 px-1 bg-amber-200 text-gray-300  rounded-full transform duration-500 ${
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
						class={`w-4 h-4 text-black font-extrabold`}
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
					className={`py-1 px-1  bg-yellow-200 text-gray-300   rounded-full transform duration-500 ${
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
				autoplay={{
					delay: 10000,
					disableOnInteraction: false,
				}}
				navigation={{
					prevEl: navigationNextRef9.current,
					nextEl: navigationPrevRef9.current,
				}}
				modules={[Pagination, Navigation, A11y, Autoplay]}
				className={` h-[400px]   w-full `}
			>
				{Product.map((p) => {
					return (
						<SwiperSlide className='w-96 h-full  px-2  rounded-lg'>
							<div className=' '>
								<div className='bg-white md:w-72   overflow-hidden shadow-md rounded-lg'>
									<Link
										to={`/product/${p.ProductId}`}
										style={{ textDecoration: "none" }}
									>
										<div className='overflow-hidden h-48'>
											<img
												src={p.ProductImage}
												alt=''
												className='h-full w-full  '
											/>
										</div>
										<div>
											<h1 className=' w-full h-12 pt-2 px-2 pb-4 truncate font-light text-sm text-black  bg-bluelight-300 bg-opacity-70 hover:bg-opacity-100'>
												{p.ProductName}
											</h1>
										</div>
									</Link>
									<div className=' text-black  flex flex-col justify-end px-3 py-4 space-y-4'>
										<div className='space-y-2'>
											<div className='flex justify-end'>
												{betslip.find(
													(e) => e.ProductName === p.ProductName
												) ? (
													<div className='flex space-x-1 items-center'>
														<button
															onClick={
																// console.log(row.cells.indexOf(cell))

																() =>
																	deleteBetSlip(
																		p.ProductName,
																		p.ProductPrice,
																		p.ProductImage,
																		p.ProductId
																	)
															}
															className='flex px-1 items-center rounded-full bg-green-100'
														>
															<div>Incart</div>
															<div className='p-1 rounded-full bg-green-300'>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-6 h-6 text-green-800'
																>
																	<path
																		fill-rule='evenodd'
																		d='M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
														</button>
													</div>
												) : (
													<button
														onClick={
															// console.log(row.cells.indexOf(cell))

															() =>
																betHandler(
																	p.ProductName,
																	p.ProductPrice,
																	p.ProductImage,
																	p.ProductId
																)
														}
													>
														<svg
															xmlns='http://www.w3.org/2000/svg'
															viewBox='0 0 24 24'
															fill='currentColor'
															class='w-6 h-6 '
														>
															<path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
														</svg>
													</button>
												)}
											</div>
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

export default HomeProSlider3;
