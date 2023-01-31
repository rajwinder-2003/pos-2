import { useState } from "react";

export const OnlineCart = ({ cartItem, removeItem, inCrese, deCrese, billing, kot, tital }) => {

  let TotalPrice = 0;
  let Tquantity = 0;


  const [creadential, setCreadential] = useState({ cname: "", number: ""});

  cartItem.forEach(element => {
    TotalPrice = parseFloat(TotalPrice) + parseFloat(element.newPrice);
    Tquantity = parseFloat(Tquantity) + parseFloat(element.quantity);
  });

  const onchange = (e) => {
    setCreadential({...creadential, [e.target.name]: e.target.value})
  };

  let itemdetail = { totalprice: TotalPrice, tquantity: Tquantity };
  

  return (
    <>
      <main className='px-2 w-full'>
        <div className='flex w-full justify-center'>
          <div className='w-full'>
            <h1 className='uppercase text-center'>{tital}</h1>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-2 gap-2 overflow-x-auto px-2 py-2">
            <input className="outline-none border border-[#494449] rounded-sm px-2 py-1" type="text" value={creadential.cname} name="cname" id="name" onChange={onchange} placeholder="Customar Name" />
            <input className="outline-none border border-[#494449] rounded-sm px-2 py-1" type="text" value={creadential.number} name="number" id="number" onChange={onchange} placeholder="Phone No." />
          </div>
        </div>
        <div className="h-[10rem] md:h-[14rem] lg:h-[25rem] flex-col overflow-auto rounded-sm px-2 py-1 space-y-1 w-full">
          {cartItem && cartItem.map((item) => {
            return (
              <>
                <ul className="flex justify-between lg:justify-between">
                  <li>{item.name}</li>
                  <li>{item.newPrice}₹</li>
                  <li className="flex space-x-1">
                    <button onClick={() => deCrese(item)} className="px-2 border border-[#494449] hover:bg-[#494449] hover:text-white rounded-sm ">-</button>
                    <span className="my-auto">{item.quantity}</span>
                    <button onClick={() => inCrese(item)} className="px-2 border border-[#494449] hover:bg-[#494449] hover:text-white rounded-sm ">+</button>
                  </li>
                  <li>
                    <button onClick={() => removeItem(item)} className="text-sm text-white bg-[#494449] rounded-sm px-2 py-1">
                      Remove
                    </button>
                  </li>
                </ul>
              </>
            )
          })}
        </div>
        <div className="relative top-5 lg:top-6 md:top-6">
          <div className="flex overflow-auto space-x-10 md:justify-between lg:justify-between py-1">
            <div className="flex border px-4 py-1 border-[#494449] ">
              Total <span className="ml-2">{TotalPrice}</span>
            </div>
            <button onClick={() => kot(creadential, itemdetail)} className="bg-[#494449] text-white px-4 py-1 rounded-sm hover:bg-[#3f3c3f]">
              KOT
            </button>
            <button onClick={() => billing(creadential, itemdetail)} className="bg-[#494449] text-white px-4 py-1 rounded-sm hover:bg-[#3f3c3f]">
              Billing
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
