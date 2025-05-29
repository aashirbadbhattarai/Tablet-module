import React from 'react'
import PageWrapper from '../PageWrapper/PageWrapper'
import Items from './Items'
import BillingSection from '../BillingSection/BillingSection'


const Menu = () => {
  return (
    <PageWrapper>
      <div className='flex'>
        <div className='flex flex-wrap w-7/12 h-svh bg-[#f4f0f0] justify-evenly items-center p-4 gap-4 overflow-y-auto mr-4'>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
            <Items/>
        </div>
      <BillingSection />
      </div>
    </PageWrapper>
  )
}

export default Menu
