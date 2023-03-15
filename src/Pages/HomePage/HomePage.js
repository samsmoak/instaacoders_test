import React, { useContext, useState } from "react";
import Footer from "../../components/Footer";
import Swipperslide from "./HomePageComponents/HomeSwipper";
import HomeSideBar from "./HomePageComponents/HomeSideBar/HomeSideBar";
import HomeSwipper from "./HomePageComponents/HomeSwipper";
import HomeProSlider from "./HomePageComponents/HomeProSlider";
import HomeSnapAdd from "./HomePageComponents/HomeSnapAdd";
import { Context } from "../../context/Context";

function HomePage() {
	const [open, setOpen] = useState(true);
	const { betslip } = useContext(Context);
	const miniarray = betslip.slice(-3);
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
				<div className=' hidden md:flex md:col-span-1  h-full   '>
					<HomeSideBar />
				</div>

				{/* the sportContainer component contain the table for the sporpage. live Container also has one. */}
				<div className='col-span-full md:col-span-7   overflow-y-scroll overflow-x-scroll '>
					<div className='w-full h-full'>
						<div className='flex w-full space-x-2 '>
							<div className=' w-full'>
								<HomeSwipper />
							</div>
							<div className='w-48'>
								<div className=' h-10  text-sm capitalize text-center'>
									your Cart
								</div>
								<div>
									{miniarray.map((v) => {
										return (
											<div>
												<div className='flex items-center'>
													<div className='w-72 h-10'>
														<img
															src={v.ProductImage}
															className='h-full w-full  bg-contain '
															alt=''
														/>
													</div>
													<div className='truncate'>{v.ProductName}</div>
												</div>
												<div>{v.ProductPrice}</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
						<div className='w-full flex justify-start bg-red-400 py-10'>
							<HomeProSlider />
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
			<div className='text-gray-400 text-xs mb-40 '>
				<div>
					Men: Shirts for Men / Casual Shirts for Men / Formal Shirts for Men /
					Hoodies for Men / Cotton Shirts for Men / T Shirts for Men / Polo T
					shirts / Kurta Pajama for Men / White Shirt / Black Shirt / Lower for
					Men / Trousers for Men / Jacket for Men / Formal Pants for Men /
					Tracksuit for Men / Jeans for Men / Kurta Payjama Sets / Kurta for Men
					/ Blazer for Men / Sweater for Men Women: Tops for Women / Kurti /
					Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees /
					Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar Suit
					/ Bra / Jacket for Women / Night Dress for Women / Sweatshirt for
					Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for
					Women / Shirts for Women / Skirts for Women / Ethnic wear for Women /
					Western Dresses for Women / Leggings for Women Footwear: Men's
					Footwear / Casual Shoes for Men / Formal Shoes for Men / Loafers for
					Men / Slippers for Men / Boots for Men / Sandals for Men / Footwear
					for Women / Heels for Women / Sandals for Women / Shoes for Women /
					Sandals for Women / Slippers for Women / Boots for Women / Jutti for
					Women / Sports Shoes for Women Home & Kitchen: Wall Painting / Wall
					Stickers / Dream Catcher / Rangoli Designs / Clock / Wall Clock /
					Alarm Clock / Diya / Bean Bag / Laptop Table / Study Table / Wall
					Hanging / Ceiling Lights / Table Lamp / Hanging Lights / LED Bulbs /
					Torch Light / LED Lights / Flower Vase / Keychain / Rudraksha /
					Screwdriver Watch: Watch For Men / Womens Watches / Smart Watch / Boys
					Watch / Girls Watch Home Furnishing: Bed Sheet / Mosquito Net /
					Mattress / Curtains / Sofa Cover / Blanket / Pillow / Carpet / Apron /
					Quilt / Floor Mat / Towel / Pillow Cover Electronics: Bluetooth
					Speakers / Headphones / Earphone / Ceiling Fan / Geysers / Trimmer /
					Hair Straightner / Hair Dryer / Water Purifier / Mixer Grinder / Gas
					Stove / Electric Kettle / Computer Mouse / Computer Keyboard / USB &
					HDMI Cables / Computer Antivirus Mobiles Accessories: Mobile Covers /
					Leather Mobile Covers / Printed Back Covers / Tempered Glass Snapdeal
					is India's leading pure-play value Ecommerce platform. Founded in 2010
					by Kunal Bahl and Rohit Bansal, Snapdeal is one of the top four online
					lifestyle shopping destinations of India. Snapdeal brings together a
					wide assortment of good quality and value- priced merchandise on its
					platform. Snapdeal's vision is to enable the shoppers of Bharat to
					experience the joy of living their aspirations through reliable,
					value-for-money shopping. With a personalized, multilingual interface
					and cutting edge technology, Snapdeal has simplified the shopping
					experience for its value-conscious buyers by showcasing the most
					relevant products- products that are a good functional fit with their
					needs and of a quality that lasts- thereby delivering true value to
					its customers. With its commitment to high service standards, Snapdeal
					suppliers operate under a well structured ecosystem that enables them
					to offer great quality products at affordable prices. With majority of
					the value-seeking, middle-income, price-conscious buyers coming from
					the non-metros, Snapdeal’s logistics networks powered by third party
					logistics cover more than 96% of India’s pin codes enabling order
					deliveries to more than 2500 towns and cities and expanding. Further,
					Snapdeal's mission is to become India’s value lifestyle omni-channel
					leader. We are excited about continuing to build a complete ecosystem
					around value commerce, where we can serve Bharat consumers wherever
					they are on their offline to online shopping journey. Snapdeal is part
					of the AceVector Group and one of India’s best-known e-commerce
					companies with an exclusive focus on the value segment.
				</div>
			</div>
		</div>
	);
}

export default HomePage;
