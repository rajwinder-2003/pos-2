import Head from "next/head"
import { Admin } from "../Layout/admin"
import { MenuItem } from '../Components/MenuItem'
import { TableCart } from '../Components/TableCart'
import { useState } from "react"
import { Popup } from '../Components/Popup'

export default function Menu() {

	let newPrice = 0;

	const [cartItem, setCartItem] = useState([]);
	const [showBillingPopup, setShowBillingPopup] = useState(false);
	const [showKotPopup, setshowKotPopup] = useState(false);

	const addItem = item => {

		newPrice = item.price;
		item.newPrice = newPrice;
		item.quantity = 1;

		const AlreadyAdded = cartItem.findIndex(function (array) {
			return array.id === item.id;
		});

		if (AlreadyAdded !== -1) {
			alert(`${item.name} already added in cart`, {
				type: "error",
			});
			return;
		}
		setCartItem([...cartItem, item]);
	};

	const removeItem = (item) => {
		setCartItem(cartItem.filter((singleItem) => singleItem.id !== item.id));
	};

	const inCrese = (item) => {
		const newItem = cartItem.map(obj => {
			if (obj.id === item.id) {
				return { ...obj, newPrice: item.newPrice + item.price, quantity: item.quantity + 1 };
			}

			return obj;
		});

		setCartItem(newItem);
	};

	const deCrese = (item) => {
		const newItem = cartItem.map(obj => {
			if (obj.id === item.id && item.newPrice > item.price) {
				return { ...obj, newPrice: item.newPrice - item.price, quantity: item.quantity - 1 };
			}

			return obj;
		});

		setCartItem(newItem);
	};

	const billing = async (creadential, itemdetail) => {
		await localStorage.setItem("billing", JSON.stringify([cartItem, creadential, itemdetail]));
		await setShowBillingPopup(true);
	};

	const kot = async (creadential, itemdetail) => {
		await localStorage.setItem("tablekot", JSON.stringify([cartItem, creadential, itemdetail]));
		await setshowKotPopup(true);
	};

	const closePopup = () => {
		setShowBillingPopup(false);
		setshowKotPopup(false);
		setCartItem([]);
	};


	return (
		<>
			<Head>
				<title>Menu Order</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Admin>
				<main className="">
					<div className="h-[90vh] overflow-auto">
						<div className=" flex-row lg:flex justify-between px-2 py-5 md:px-8 lg:px-4 lg:py-2">
							<div className="flex w-full">
								<MenuItem addItem={addItem} />
							</div>
							<div className="flex w-full">
								<TableCart cartItem={cartItem} removeItem={removeItem} inCrese={inCrese} deCrese={deCrese} billing={billing} kot={kot} />
							</div>
						</div>
						{showBillingPopup ? (
							<>
								<Popup close={closePopup} name="You Order successfully checkout to Billing Counter" />

							</>
						) : (
							<>

							</>
						)}
						{showKotPopup ? (
							<>
								<Popup cancel={closePopup} close={closePopup} name="You Order successfully checkout to Kitchen" />

							</>
						) : (
							<>

							</>
						)}
					</div>
				</main>
			</Admin>
		</>
	)
}
