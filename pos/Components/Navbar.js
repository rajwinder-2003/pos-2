import Link from "next/link"
import { RxDashboard } from 'react-icons/rx'
import { MdMenuBook, MdOutlinePayments, MdOutlineBookOnline } from 'react-icons/md'
import { GiCook } from 'react-icons/gi'
import { FiShoppingBag } from 'react-icons/fi'
import { useRouter } from "next/router"

export const Navbar = () => {
	const router = useRouter();
	return (
		<>
			<nav className="w-full absolute bottom-0 bg-[#494449] text-white">
				<ul className="flex space-x-8 px-2 py-1 lg:px-4 overflow-auto md:justify-between lg:justify-between">
					<Link className={router.pathname === '/' ? "text-blue-600" : ""} href={'/'}>
						<li>
							<div className="flex justify-center">
								<RxDashboard size={20} />
							</div>
							<span>Dashboard</span>
						</li>
					</Link>
					<Link className={router.pathname === '/menu' ? "text-blue-600" : ""} href={'/menu'}>
						<li>
							<div className="flex justify-center">
								<MdMenuBook size={20} />
							</div>
							<span>Menu</span>
						</li>
					</Link>
					<Link className={router.pathname === '/kot' ? "text-blue-600" : ""} href={'/kot'}>
						<li>
							<div className="flex justify-center">
								<GiCook size={20} />
							</div>
							<span>KOT</span>
						</li>
					</Link>
					<Link className={router.pathname === '/billing' ? "text-blue-600" : ""} href={'/billing'}>
						<li>
							<div className="flex justify-center">
								<MdOutlinePayments size={20} />
							</div>
							<span>Billing</span>
						</li>
					</Link>
					<Link className={router.pathname === '/online-order' ? "text-blue-600" : ""} href={'/online-order'}>
						<li>
							<div className="flex justify-center">
								<MdOutlineBookOnline size={20} />
							</div>
							<span>Online</span>
						</li>
					</Link>
					<Link className={router.pathname === '/pickup' ? "text-blue-600" : ""} href={'/pickup'}>
						<li>
							<div className="flex justify-center">
								<FiShoppingBag size={20} />
							</div>
							<span>Pickup</span>
						</li>
					</Link>
				</ul>
			</nav>
		</>
	)
}
