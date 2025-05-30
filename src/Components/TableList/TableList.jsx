import React from 'react';
import menu from '../../assets/menu-button.png';
import refresh from '../../assets/refresh.png';
import './TableList.css'; 
import TableAvailable from './TableAvailable';
import TableOccupied from './TableOccupied';
import TableNoService from './TableNoService';
import TableReceipt from './TableReceipt';
import TableReserved from './TableReserved';
import PageWrapper from '../PageWrapper/PageWrapper';

const TableList = () => {

  return (
    <PageWrapper>
    <div className="p-2">
      <div className="flex items-center bg-[#ebebeb] rounded-4xl px-3 py-1 max-w-full table-status">
        
        {/* Menu Icon - Always visible */}
        <img
          src={menu}
          alt="Menu"
          className="w-6 h-6 flex-shrink-0 mr-4"
        />

        {/* Scrollable Menu Items */}
        <div className="overflow-x-auto ml-4">
          <ul className="flex items-center gap-x-24 min-w-max">
            <li><a href="#">All</a></li>
            <li><a href="#">Available</a></li>
            <li><a href="#">Occupied</a></li>
            <li><a href="#">Reserved</a></li>
            <li><a href="#">Receipt</a></li>
            <li><a href="#">No Service</a></li>
          </ul>
        </div>

        {/* Refresh Button - Always visible, right-aligned */}
        <img
          src={refresh}
          alt="Refresh"
          className="w-7 h-7 ml-auto transition-transform duration-300 hover:rotate-180 cursor-pointer"
        />

      </div>
    </div>
    <div className='flex flex-wrap space-x-28 space-y-10'>
      <TableAvailable/>
      <TableOccupied/>
      <TableNoService/>
      <TableReceipt/>
      <TableReserved/>
      <TableAvailable/>
      <TableOccupied/>
      <TableNoService/>
      <TableReceipt/>
      <TableReserved/>
      <TableAvailable/>
      <TableOccupied/>
      <TableNoService/>
      <TableReceipt/>
      <TableReserved/>
      <TableAvailable/>
      <TableOccupied/>
      <TableNoService/>
      <TableReceipt/>
      <TableReserved/>                  
    </div>
    </PageWrapper>
  );
};

export default TableList;
