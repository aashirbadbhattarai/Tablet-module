import React, {useState} from 'react'
import { useLocation } from 'react-router-dom'
import PageWrapper from '../PageWrapper/PageWrapper'
import ProductBilling from './ProductBilling'
import BillingAmount from './BillingAmount'
import BillingOptions from './BillingOptions'
import{ handleCancel } from './buttonHandler'

import TicketPrinting from '../Popups/TicketPrinting'
import OrderTransfer from '../Popups/OrderTransfer'
import OrderPlacement from '../Popups/OrderPlacement'
import OrderPrint from '../Popups/OrderPrint'
import Payment from '../Popups/Payment'



const BillingSection = ({selectedItems}) => {
  const location = useLocation();
  const isProductMenu = location.pathname.includes('/product-menu');
  const[activeTicket, setActiveTicket] = useState(null);
  return (

    <>
    <div className='bg-[#F4F0F0] w-[25rem] h-svh p-4'>
      <div className='flex justify-between mb-2'>
        <span className="font-medium ml-[3rem]">Order No</span>
        <span className="font-medium mr-[4rem]">Table</span>
      </div>

      <div className='flex justify-between'>
        <span className='w-[45%] rounded-xl bg-blue-200 p-2 text-center'>123</span>
        <span className='w-[45%] rounded-xl bg-blue-200 p-2 text-center'>Table name</span>
      </div>

      <div className='flex justify-between mt-6 font-bold border-b-2 border-[#D7D7D7] pb-2'>
        <span>Item</span>
        <span>Qty</span>
        <span>Rate</span>
        <span>Amount</span>
      </div>
      <div
        className={`overflow-y-auto h-[18rem] transition-opacity duration-500 ${
        isProductMenu ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {selectedItems.map((item, index) => (
        <ProductBilling key={index} item={item} />
  ))}
</div>
      <div className='mt-4'>
        <BillingAmount />
      </div>
    

    <div className='flex mt-6 gap-x-2'>
      <BillingOptions label="Print ticket" color="blue" onClick={() => setActiveTicket('printTicket')} />
      <BillingOptions label="Transfer Order" color="blue" onClick={() => setActiveTicket('orderTransfer')}/>
      <BillingOptions label="Place Order" color="blue" onClick={()=>setActiveTicket('orderPlacement')}/>
    </div>

    <div className='flex mt-2 gap-x-7'>
      <BillingOptions label="Cancel" color="red" onClick={handleCancel}/>
      <BillingOptions label="Print Order" color="green" onClick={() => setActiveTicket('orderPrint')}/>
      <BillingOptions label="Bill Payment" color="green" onClick={()=>setActiveTicket('payment')}/>
    </div>
    </div>
    {activeTicket === 'printTicket' && (
      <TicketPrinting
        isOpen={activeTicket === 'printTicket'}
        onClose={() => setActiveTicket(null)}
      />
    )}

    {activeTicket === 'orderTransfer' && (
      <OrderTransfer
        isOpen={activeTicket === 'orderTransfer'}
        onClose={() => setActiveTicket(null)}
      />
    )}

    {activeTicket === 'orderPlacement' &&(
      <OrderPlacement
        isOpen={activeTicket === 'orderPlacement'}
        onClose ={() => setActiveTicket(null)}

        />
    )}

    {activeTicket === 'orderPrint' &&(
      <OrderPrint
        isOpen={activeTicket === 'orderPlacement'}

        />
    )}

    {activeTicket === 'payment' &&(
      <Payment
        isOpen={activeTicket === 'payment'}
        onClose={ ()=> setActiveTicket(null) }
        />
    )}

    </>

  )
}

export default BillingSection
