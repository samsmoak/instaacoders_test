import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
	Autoplay,
	EffectCube,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination,
} from "swiper";

function HomeSwipper() {
	const [adviews, setAdviews] = useState([
		{
			id: 1,
			topic: "House of Barca",
			AdImage:
				"https://cdn.pixabay.com/photo/2016/02/08/07/42/diamond-1186139_1280.jpg",
			AdInfo: "Bet on a big bash and win amazing prizes",
		},
		{
			id: 2,
			topic: "first deposit mega bonus",
			AdImage:
				"https://cdn.pixabay.com/photo/2016/11/29/07/16/balancing-1868051_1280.jpg",
			AdInfo: "welcome package upto $100",
		},
		{
			id: 3,
			topic: "amazing offer",
			AdImage:
				"https://cdn.pixabay.com/photo/2020/05/12/08/59/shoes-5161935_1280.jpg",
			AdInfo: "dont wait , take action",
		},
		{
			id: 4,
			topic: "first deposit mega bonus",
			AdImage:
				"https://cdn.pixabay.com/photo/2018/05/20/01/33/background-3414801_1280.jpg",
			AdInfo: "Bet on a big bash and win amazing prizes",
		},
		{
			id: 5,
			topic: "amazing offer",
			AdImage:
				"https://cdn.pixabay.com/photo/2022/09/07/17/26/vintage-pocket-watch-7439236_1280.jpg",
			AdInfo: "welcome package upto $100",
		},
	]);
	return (
		<div className=''>
			{/* {console.log()} */}
			<div className='sm:w-full md:w-full h-full   relative  '>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					longSwipes={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
					// autoplay={{
					// 	delay: 5000,
					// 	disableOnInteraction: false,
					// }}
					className=' !w-full bg-slate-500    '
				>
					{adviews.map((v, i) => {
						return (
							<SwiperSlide className=' !h-64 !w-full '>
								<div className={` !w-full  !h-full relative`}>
									<img src={v.AdImage} alt='' className='!w-full !h-full' />
									<div className='absolute top-0 right-0 left-0 bottom-0'>
										<div className='w-full h-full flex flex-col pl-14 justify-end items-center  space-y-4 text-white'>
											<div className='font-extrabold text-4xl capitalize'>
												{v.topic}
											</div>
											<div>{v.AdInfo}</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default HomeSwipper;
