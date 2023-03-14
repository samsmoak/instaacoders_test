import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import BeautyHealth from "./HomeSideBarComponents/BeautyHealth";
import HomeNKitchen from "./HomeSideBarComponents/HomeNKitchen";
import MensfashionButton from "./HomeSideBarComponents/MensfashionButton";
import ToysNKidsFashion from "./HomeSideBarComponents/ToysNKidsFashion";
import WomensFashion from "./HomeSideBarComponents/WomensFashion";
// import { Menu } from "@headlessui/react";

function HomeSideBar() {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	return (
		<div className='w-full z-30 space-y-5'>
			<div className='w-full'>
				<div className='py-2  w-full capitalize text-center font-bold text-sm'>
					top category
				</div>

				<div className='w-full px-1 space-y-1'>
					<MensfashionButton />
					<WomensFashion />
					<HomeNKitchen />
					<ToysNKidsFashion />
					<BeautyHealth />
				</div>
			</div>

			<div className='w-full'>
				<div className='py-2  w-full capitalize text-center font-bold text-sm'>
					More Categories
				</div>

				<div className='w-full px-1 space-y-1'>
					<MensfashionButton />
					<WomensFashion />
					<HomeNKitchen />
					<ToysNKidsFashion />
					<BeautyHealth />
				</div>
			</div>

			<div className='w-full'>
				<div className='py-2  w-full capitalize text-center font-bold text-sm'>
					Trending searhes
				</div>

				<div className='w-full px-1 space-y-1'>
					<MensfashionButton />
					<WomensFashion />
					<HomeNKitchen />
					<ToysNKidsFashion />
					<BeautyHealth />
				</div>
			</div>
		</div>
	);
}

export default HomeSideBar;
