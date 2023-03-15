import React, { useContext, useState } from "react";
import Footer from "../../components/Footer";
import { useLocation } from "react-router";
import { Context } from "../../context/Context";

function SingleProductPage() {
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
	const location = useLocation();
	const { betslip, betHandler, deleteBetSlip } = useContext(Context);
	const path = location.pathname.split("/")[2];
	const [buy, setBuy] = useState(false);

	console.log(path);
	const product = Product.find((obj) => {
		return obj.ProductId === Number(path);
	});
	console.log(product);
	return (
		<div>
			<div className='flex flex-col w-screen justify-center items-center'>
				<div className='w-full font-bold text-center'>
					your cart has {betslip.length} item in it
				</div>
				<div className='  w-10/12 grid md:grid-cols-12 text-sm font-light p-10 shadow-lg'>
					<div className='col-span-1 md:col-span-4  flex items-center'>
						<div className='text-black w-full'>
							<img src={product.ProductImage} className='w-full' alt='' />
						</div>
					</div>
					<div className='  col-span-1 md:col-span-8'>
						<div className='w-full p-16 space-y-10'>
							<div>
								<div>{product.ProductName}</div>
								<div>xxxx</div>
								<div>{product.ProductPrice}</div>
							</div>
							<div className='space-y-4'>
								<div className='flex'>
									<div className='w-40'>color</div>
									<div>
										<img src={product.ProductImage} className='w-16' alt='' />
									</div>
								</div>

								<div className='flex'>
									<div className='w-40'>size</div>
									<div className='flex space-x-1'>
										<div className='p-2 border'>23</div>
										<div className='p-2 border'>23</div>
										<div className='p-2 border'>23</div>
										<div className='p-2 border'>23</div>
									</div>
								</div>
								<div className='flex'>
									<div className='w-40 '></div>
									<div className='flex items-center space-x-3 '>
										<div className='text-white'>
											{betslip.find(
												(e) => e.ProductName === product.ProductName
											) ? (
												<div className='flex space-x-1 items-center'>
													<div>Incart</div>
													<button
														onClick={
															// console.log(row.cells.indexOf(cell))

															() =>
																deleteBetSlip(
																	product.ProductName,
																	product.ProductPrice,
																	product.ProductImage
																)
														}
														className='p-1 rounded-full bg-green-200'
													>
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
													</button>
												</div>
											) : (
												<button
													onClick={
														// console.log(row.cells.indexOf(cell))

														() =>
															betHandler(
																product.ProductName,
																product.ProductPrice,
																product.ProductImage
															)
													}
													className='flex px-2 py-1 space-x-2 bg-green-500 rounded-md'
												>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														viewBox='0 0 24 24'
														fill='currentColor'
														class='w-6 h-6 '
													>
														<path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
													</svg>
													<div>Add to cart</div>
												</button>
											)}
										</div>
										<div>
											<button
												className='px-2 py-1 bg-purple-600 text-white'
												onClick={() => {
													setBuy(!buy);
												}}
											>
												Proceed TO Order
											</button>
											{buy && (
												<div className='text-red-600 font-light text-xs'>
													not connected to Backend Api
												</div>
											)}
										</div>
									</div>
								</div>
								<div>
									<div className='w-40'>delivery</div>
									<div>
										<img src='' alt='' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default SingleProductPage;
