import React from 'react'
import './ProductMenu.css';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../PageWrapper/PageWrapper';
import BillingSection from '../BillingSection/BillingSection';

const ProductMenu = () => {
    const navigate = useNavigate();
  return (
    <PageWrapper>
    <div className='flex justify-between'>
    <div className='w-7/12 bg-[#F4F0F0] h-svh p-4'>
    <div className='w-1/6 p-2 bg-[#DE6363] rounded-4xl m-4 text-center text-white'>
        Occupied
    </div>

    <div className='w-7/12 p-4'>
        <form className="flex items-center max-w-sm mx-auto">   
            <label htmlFor="simple-search" className="sr-only">Search</label>
            <div className="w-full">
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products" required />
             </div>
            <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span className="sr-only">Search</span>
    </button>
</form>
    </div>

    <div className='Menu-Container'>
        <ul className='p-4'>
            <li className='bg-[#E0E0E0] rounded-xl shadow-md mb-6' onClick={()=>navigate('/dashboard/item-menu')}>Japanese Cuisines</li>
            <li className='bg-[#E0E0E0] rounded-xl shadow-md mb-6' onClick={()=>navigate('/dashboard/item-menu')}>Chinese Cuisines</li>
            <li className='bg-[#E0E0E0] rounded-xl shadow-md mb-6' onClick={()=>navigate('/dashboard/item-menu')}>Indian Cuisines</li>
            <li className='bg-[#E0E0E0] rounded-xl shadow-md mb-6' onClick={()=>navigate('/dashboard/item-menu')}>French Cuisines</li>
        </ul>
    </div> 
    </div>

    <div>
    <BillingSection selectedItems={[]} />
    </div>
    </div>
    </PageWrapper>
  )
}

export default ProductMenu
