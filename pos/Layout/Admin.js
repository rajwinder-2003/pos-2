import { Navbar } from "../Components/Navbar"

export const Admin = ({ children }) => {
	return (
		<>
			<main>{children}</main>
			<div className="flex">
			<Navbar />
			</div>
		</>
	)
}
