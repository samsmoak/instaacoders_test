import { createContext, useReducer, useEffect, useState } from "react";
import Reducer from "./Reducer";
import lodash from "lodash";

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem("user")) || null,
	isFetching: false,
	error: false,
};
const Another_State = [];

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
	const [betslip, setBetslip] = useState(Another_State);
	const [signupOpen, setSignupOpen] = useState(false);
	const [signinOpen, setSigninOpen] = useState(false);
	const betHandler = (ProductName, ProductPrice, ProductImage, ProductId) => {
		const objy = { ProductName, ProductPrice, ProductImage, ProductId };
		setBetslip([...betslip, objy]);
		console.log(betslip);

		// if (betslip.find((dt) => lodash.isEqual(dt.name, name))) {
		// 	console.log("ncontained");
		// 	console.log(betslip.find((dt) => lodash.isEqual(dt.name, name)));

		// 	betslip.filter((element) => {
		// 		return element.name !== name;
		// 	});

		// 	// if (betslip.find((dt) => lodash.isEqual(dt.name, objy.name))) {
		// 	// 	console.log("n sec");
		// 	// 	betslip.filter((element) => {
		// 	// 		return element.rowid == rowid;
		// 	// 	});
		// 	// }
		// } else {
		// 	setBetslip([...betslip, objy]);
		// 	console.log(betslip);
		// }
	};
	const deleteBetSlip = (
		ProductName,
		ProductPrice,
		ProductImage,
		ProductId
	) => {
		setBetslip((betslip) =>
			betslip.filter((element) => {
				return element.ProductName !== ProductName;
			})
		);
	};
	const deleteAllBetSlip = () => {
		setBetslip([]);
		console.log("deleteed");
	};
	const signupOpenHandler = () => {
		setSignupOpen(!signupOpen);
	};
	const signinOpenHandler = () => {
		setSigninOpen(!signinOpen);
	};
	useEffect(() => {
		localStorage.setItem("user", JSON.stringify(state.user));
	}, [state.user]);
	return (
		<Context.Provider
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
				betslip,
				betHandler,
				deleteBetSlip,
				deleteAllBetSlip,
				signupOpen,
				signinOpen,
				signupOpenHandler,
				signinOpenHandler,
			}}
		>
			{children}
		</Context.Provider>
	);
};
