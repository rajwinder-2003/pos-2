import { useState } from "react";
import { FcRefresh } from 'react-icons/fc'

export const TableCart = ({ cartItem, removeItem, inCrese, deCrese, billing, kot }) => {

  let TotalPrice = 0;
  let Tquantity = 0;

  const Tables = [{ id: 1, name: 1 },
  { id: 2, name: 2 },
  { id: 3, name: 3 },
  { id: 4, name: 4 },
  { id: 5, name: 5 },
  { id: 6, name: 6 },
  { id: 7, name: 7 },
  { id: 8, name: 8 },
  { id: 9, name: 9 },
  { id: 10, name: 10 }
  ];

  const [creadential, setCreadential] = useState({ cname: "", table: "", number: "" });

  cartItem.forEach(element => {
    TotalPrice = parseFloat(TotalPrice) + parseFloat(element.newPrice);
    Tquantity = parseFloat(Tquantity) + parseFloat(element.quantity);
  });

  const onchange = (e) => {
    setCreadential({ ...creadential, [e.target.name]: e.target.value });
  };

  const tableClick = (table) => {
    setCreadential({ ...creadential, table: table.name });
  };

  const refresh = () => {
    setCreadential({ ...creadential, cname: "", table: "", number: "" });
  };

  let itemdetail = { totalprice: TotalPrice, tquantity: Tquantity };


  return (
    <>
      <main className='px-2 w-full'>
        <div className='flex w-full justify-center'>
          <div className='w-full'>
            <h1 className='uppercase text-center'>Tables</h1>
            <div className='flex justify-center space-x-4'>
              <p> <button className='bg-green-500 h-2 w-2 rounded-full'></button> Available </p>
              <p> <button className='bg-orange-500 h-2 w-2 rounded-full'></button> Running </p>
              <p> <button className='bg-red-500 h-2 w-2 rounded-full'></button> Booked </p>
            </div>
            <div className='my-2 lg:my-4 rounded-sm px-2 py-2 grid grid-cols-4 gap-4'>
              {Tables && Tables.map((table) => {
                return (
                  <>
                    <button onClick={() => tableClick(table)} key={table.id} className='py-1 bg-green-500 text-white rounded-sm'>
                      Table {table.name}
                    </button>
                  </>
                )
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-2 gap-2 overflow-x-auto px-2 py-2">
            <input className="outline-none border border-[#494449] rounded-sm px-2 py-1" type="text" value={creadential.table} name="table" id="table" onChange={onchange} placeholder="Table No." />
            <input className="outline-none border border-[#494449] rounded-sm px-2 py-1" type="text" value={creadential.cname} name="cname" id="name" onChange={onchange} placeholder="Customar Name" />
            <input className="outline-none border border-[#494449] rounded-sm px-2 py-1" type="text" value={creadential.number} name="number" id="number" onChange={onchange} placeholder="Phone No." />
            <button className="flex space-x-2" onClick={() => refresh()}>
              <FcRefresh className="inline-block my-auto" scale={30} />
              <span className="my-auto">Reset</span>
            </button>
          </div>
        </div>
        <div className="h-[5rem] md:h-[7rem] lg:h-[10rem] flex-col overflow-auto rounded-sm px-2 py-1 space-y-1 w-full">
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
