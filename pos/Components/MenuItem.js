/* eslint-disable @next/next/no-img-element */
import { ImSpoonKnife } from 'react-icons/im'
import { MdFastfood } from 'react-icons/md'
import { BiDrink } from 'react-icons/bi'
import { FaIceCream } from 'react-icons/fa'
import { useState } from 'react'

export const MenuItem = ({addItem}) => {

  const [showStater, setShowStater] = useState(true);
  const [showMainCorse, setShowMainCorse] = useState(false);
  const [showDrinks, setShowDrinks] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const StaterItems = [{ id: 1, name: "Burger", price: 80, img: "/food.jpeg" },
  { id: 2, name: "Soup", price: 70, img: "/food.jpeg" },
  { id: 3, name: "Noodle", price: 50, img: "/food.jpeg" },
  { id: 4, name: "Fingers", price: 120, img: "/food.jpeg" },
  { id: 5, name: "Pizza", price: 200, img: "/food.jpeg" },
  { id: 6, name: "Coffie", price: 90, img: "/food.jpeg" },
  { id: 7, name: "Juice", price: 60, img: "/food.jpeg" },
  { id: 8, name: "ICeCreme", price: 80, img: "/food.jpeg" },
  { id: 9, name: "Pasta", price: 150, img: "/food.jpeg" },
  { id: 10, name: "Rise", price: 100, img: "/food.jpeg" }
  ]

  const MainCorseItems = [{ id: 11, name: "Burger", price: 80, img: "/food.jpeg" },
  { id: 12, name: "Soup", price: 70, img: "/food.jpeg" },
  { id: 13, name: "Noodle", price: 50, img: "/food.jpeg" },
  { id: 14, name: "Fingers", price: 120, img: "/food.jpeg" },
  { id: 15, name: "Pizza", price: 200, img: "/food.jpeg" },
  { id: 16, name: "Coffie", price: 90, img: "/food.jpeg" },
  { id: 17, name: "Juice", price: 60, img: "/food.jpeg" },
  { id: 18, name: "ICeCreme", price: 80, img: "/food.jpeg" },
  { id: 19, name: "Pasta", price: 150, img: "/food.jpeg" },
  { id: 20, name: "Rise", price: 100, img: "/food.jpeg" }
  ]

  const DrinksItems = [{ id: 21, name: "Burger", price: 80, img: "/food.jpeg" },
  { id: 22, name: "Soup", price: 70, img: "/food.jpeg" },
  { id: 23, name: "Noodle", price: 50, img: "/food.jpeg" },
  { id: 24, name: "Fingers", price: 120, img: "/food.jpeg" },
  { id: 25, name: "Pizza", price: 200, img: "/food.jpeg" },
  { id: 26, name: "Coffie", price: 90, img: "/food.jpeg" },
  { id: 27, name: "Juice", price: 60, img: "/food.jpeg" },
  { id: 28, name: "ICeCreme", price: 80, img: "/food.jpeg" },
  { id: 29, name: "Pasta", price: 150, img: "/food.jpeg" },
  { id: 30, name: "Rise", price: 100, img: "/food.jpeg" }
  ]

  const OtherItems = [{ id: 31, name: "Burger", price: 80, img: "/food.jpeg" },
  { id: 32, name: "Soup", price: 70, img: "/food.jpeg" },
  { id: 33, name: "Noodle", price: 50, img: "/food.jpeg" },
  { id: 34, name: "Fingers", price: 120, img: "/food.jpeg" },
  { id: 35, name: "Pizza", price: 200, img: "/food.jpeg" },
  { id: 36, name: "Coffie", price: 90, img: "/food.jpeg" },
  { id: 37, name: "Juice", price: 60, img: "/food.jpeg" },
  { id: 38, name: "ICeCreme", price: 80, img: "/food.jpeg" },
  { id: 39, name: "Pasta", price: 150, img: "/food.jpeg" },
  { id: 40, name: "Rise", price: 100, img: "/food.jpeg" }
  ]

  return (
    <>
      <main className='w-full'>
        {/* item btn */}
        <div className='flex space-x-3 md:space-x-10 lg:space-x-5 overflow-x-auto py-2 px-2 md:justify-center lg:justify-center'>
          <button onClick={() => {
            setShowStater(true);
            setShowDrinks(false);
            setShowMainCorse(false);
            setShowOther(false);
          }} className={showStater ? 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 bg-[#494449] text-white' : 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 hover:bg-[#494449] hover:text-white'}>
            Stater
            <span className='my-auto ml-1'><ImSpoonKnife size={20} /></span>
          </button>
          <button onClick={() => {
            setShowMainCorse(true);
            setShowDrinks(false);
            setShowStater(false);
            setShowOther(false);
          }} className={showMainCorse ? 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 bg-[#494449] text-white' : 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 hover:bg-[#494449] hover:text-white'}>
            MainCorse
            <span className='my-auto ml-1'><MdFastfood size={20} /></span>
          </button>
          <button onClick={() => {
            setShowDrinks(true);
            setShowMainCorse(false);
            setShowStater(false);
            setShowOther(false);
          }} className={showDrinks ? 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 bg-[#494449] text-white' : 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 hover:bg-[#494449] hover:text-white'}>
            Drink
            <span className='my-auto ml-1'><BiDrink size={20} /></span>
          </button>
          <button onClick={() => {
            setShowOther(true);
            setShowDrinks(false);
            setShowMainCorse(false);
            setShowStater(false);
          }} className={showOther ? 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 bg-[#494449] text-white' : 'flex uppercase outline outline-[#494449] rounded-sm text-xl px-2 py-1 hover:bg-[#494449] hover:text-white'}>
            Other
            <span className='my-auto ml-1'><FaIceCream size={20} /></span>
          </button>
        </div>

        {/* stater item */}
        <div className={showStater ? 'px-2' : "hidden"}>
          <h1 className='uppercase text-center'>Stater item</h1>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-2 overflow-y-auto lg:overflow-y-auto h-[30vh] md:h-[40vh] lg:h-[75vh] scroll-smooth justify-center'>
            {StaterItems && StaterItems.map((item) => {
              return (
                <>
                  <div key={item.id} className='flex my-4 justify-center'>
                    <button onClick={() => addItem(item)} className='border'>
                      <img className='w-28 h-28' src={item.img} alt="item image" />
                      <p className='upercase'>{item.name}</p>
                      <p className='upercase'>{item.price} ₹</p>
                    </button>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        {/* MainCorse item */}
        <div className={showMainCorse ? 'px-2' : "hidden"}>
          <h1 className='uppercase text-center'>MainCorse</h1>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-2 overflow-y-auto h-[30vh] md:h-[40vh] lg:h-[75vh] scroll-smooth justify-center'>
            {MainCorseItems && MainCorseItems.map((item) => {
              return (
                <>
                  <div key={item.id} className='flex my-4 justify-center'>
                    <button onClick={() => addItem(item)} className='border'>
                      <img className='w-28 h-28' src={item.img} alt="item image" />
                      <p className='upercase'>{item.name}</p>
                      <p className='upercase'>{item.price} ₹</p>
                    </button>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        {/* Drinks item */}
        <div className={showDrinks ? 'px-2' : "hidden"}>
          <h1 className='uppercase text-center'>Drinks</h1>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-2 overflow-y-auto lg:overflow-y-auto h-[30vh] md:h-[40vh] lg:h-[75vh] scroll-smooth justify-center'>
            {DrinksItems && DrinksItems.map((item) => {
              return (
                <>
                  <div key={item.id} className='flex my-4 justify-center'>
                    <button onClick={() => addItem(item)} className='border'>
                      <img className='w-28 h-28' src={item.img} alt="item image" />
                      <p className='upercase'>{item.name}</p>
                      <p className='upercase'>{item.price} ₹</p>
                    </button>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        {/* Other item */}
        <div className={showOther ? 'px-2' : "hidden"}>
          <h1 className='uppercase text-center'>Other item</h1>
          <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-2 lg:gap-2 overflow-y-auto lg:overflow-y-auto h-[30vh] md:h-[40vh] lg:h-[75vh] scroll-smooth justify-center'>
            {OtherItems && OtherItems.map((item) => {
              return (
                <>
                  <div key={item.id} className='flex my-4 justify-center'>
                    <button onClick={() => addItem(item)} className='border'>
                      <img className='w-28 h-28' src={item.img} alt="item image" />
                      <p className='upercase'>{item.name}</p>
                      <p className='upercase'>{item.price} ₹</p>
                    </button>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </main>
    </>
  )
}
