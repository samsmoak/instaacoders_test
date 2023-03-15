import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { Context } from "../../context/Context";

function CartPage() {
	const { betslip, deleteBetSlip } = useContext(Context);
	return (
		<div>
			<div className='w-screen flex justify-center mb-14'>
				<div className='w-10/12'>
					<div className='w-full '>
						{betslip.length === 0 ? (
							<div className='w-full text-center py-12 capitalize font-extrabold'>
								Your Cart is empty
							</div>
						) : (
							<div className='w-full text-center py-12 capitalize font-extrabold'>
								you have {betslip.length} item in your cart
							</div>
						)}
						<div className='w-full font-light text-sm '>
							<div className='w-full flex border-b-4 mb-4 py-2 font-light text-lg capitalize'>
								<div className='w-6/12 capitalize px-4'>item details</div>

								<div className='w-2/12'>price</div>
								<div className='w-2/12'>quantity</div>
								<div className='w-2/12'>charges</div>
								<div className='w-2/12'>subtotal</div>
							</div>
							{betslip.map((p) => {
								return (
									<div className='w-full flex items-center mb-5 '>
										<div className='w-6/12 flex space-x-2'>
											<div className='w-40'>
												<div className=''>
													<img
														src={p.ProductImage}
														alt=''
														className='w-full h-full object-contain'
													/>
												</div>
											</div>
											<div className='w-72   flex flex-col space-y-5 items-center justify-center'>
												<Link to={`/product/${p.ProductId}`}>
													<div className='w-full'>{p.ProductName}</div>
												</Link>
												<div className='w-full flex'>
													<button
														onClick={
															// console.log(row.cells.indexOf(cell))

															() =>
																deleteBetSlip(
																	p.ProductName,
																	p.ProductPrice,
																	p.ProductImage
																)
														}
														className='p-1   bg-rose-200'
													>
														remove x
													</button>
												</div>
											</div>
										</div>
										<div className='w-2/12'>{p.ProductPrice}</div>
										<div className='w-2/12'>1</div>
										<div className='w-2/12'>20</div>
										<div className='w-2/12'>null</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default CartPage;
