import { BsFillPatchCheckFill } from 'react-icons/bs'
import {RxCross1} from 'react-icons/rx'

export const Popup = ({ name, close, cancel }) => {
	return (
		<>
			<div className="absolute w-full flex justify-center top-10 bottom-0">
				<div className="p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
					<div className="relative w-full h-full max-w-md md:h-auto">
						<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<div className='flex justify-end px-4 pt-2'>
								<button onClick={() => cancel()}>
								<RxCross1 color='gray'/>
								</button>
							</div>
							<div className="p-6 text-center ">
								<div className='flex justify-center'>
									<BsFillPatchCheckFill color='green' size={25} />
								</div>
								<h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{name}</h3>
								<button onClick={() => close()} type="button" className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-400 dark:focus:ring-green-700 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
									OK
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
