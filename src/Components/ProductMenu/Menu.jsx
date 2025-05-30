import React, { useState } from 'react';
import Items from './Items';
import BillingSection from '../BillingSection/BillingSection';
import PageWrapper from '../PageWrapper/PageWrapper'; // Assuming it adds layout/styling

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    setSelectedItems(prevItems => [...prevItems, item]);
  };

  return (
    <PageWrapper>
    <div className='flex'>
        <div className='flex flex-wrap w-7/12 h-svh bg-[#f4f0f0] justify-evenly items-center p-4 gap-4 overflow-y-auto mr-4'>
          <Items onClick={handleItemClick} />
          <Items onClick={handleItemClick} />
          <Items onClick={handleItemClick} />
          <Items onClick={handleItemClick} />
          <Items onClick={handleItemClick} />
          <Items onClick={handleItemClick} />
        </div>

        <BillingSection selectedItems={selectedItems} />
      </div>

    </PageWrapper>
  )
}

export default Menu
