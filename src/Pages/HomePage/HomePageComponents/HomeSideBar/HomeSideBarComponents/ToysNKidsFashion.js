import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ToysNKidsFashion() {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	return (
		<div
			className={` w-full py-1 flex text-black items-center relative z-30 space-x-2 hover:bg-gray-100 hover:text-black border border-l-2 hover:border-l-rose-600 ${
				location.pathname.substr(0, 13) === "/sport/sports"
					? " text-neutral-400 "
					: null
			} `}
			onMouseEnter={() => setOpen(!open)}
			onMouseLeave={() => setOpen(!open)}
		>
			<div className='w-full capitalize'>Toys and kid's Fashion</div>
			<div
				className={`absolute top-0 -right-80 z-20 -translate-x-1 px-4 py-4 w-[20rem] h-[20rem] bg-white text-black ${
					open ? "block" : "hidden"
				}`}
			>
				<div>itemone</div>
				<div>itemone</div>
				<div>itemone</div>
				<div>itemone</div>
			</div>
		</div>
	);
}

export default ToysNKidsFashion;
