import React from 'react'

const BillingAmount = () => {
  return (
    <>
    <div className='text-[12px]'>
    <div className='flex justify-between mb-2'>
        <span className="font-medium ml-[3rem]">Discount</span>
        <span className="font-medium mr-[4rem]">Service Charge</span>
    </div>

    <div className='flex justify-between mb-2'>
        <span className='w-[45%] rounded-xl bg-blue-200 p-2 text-center mb-2'>123</span>
        <span className='w-[45%] rounded-xl bg-blue-200 p-2 text-center mb-2'>Table name</span>
    </div>

    <div className='flex justify-between mb-2'>
        <span className="font-medium ml-[3rem]">VAT(13%)</span>
        <span className="font-medium mr-[4rem]">Term Amount</span>        
    </div>  

    <div className='flex justify-between mb-2'>
        <span className='w-[45%] rounded-xl bg-blue-200 p-2 text-center'>123</span>
        <span className='w-[45%] rounded-xl bg-blue-200 p-2 text-center'>Table name</span>
    </div>
    </div>
    <div className='flex mt-4 justify-between'>
        <span>Grand Total</span>
        <input type = "text" className='border border-solid border-black bg-white rounded-[10px] shadow-xl pl-4'></input>
    </div>
    


    </>
 
  )
}

export default BillingAmount

