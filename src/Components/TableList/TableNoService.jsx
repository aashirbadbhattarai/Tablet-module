import React from 'react'
import table from '../../assets/table.png'
import { useNavigate } from 'react-router-dom'

const TableNoService = () => {
  const navigate = useNavigate();
  return (
    <div className='p-2 w-1/12 h-1/12 bg-[#C3C3C3] rounded-2xl mt-4 'onClick={() => navigate('/product-menu')}>  
        <span className='text-xs'>Floor</span>  
        <img src={table}
        alt="Table Image" 
        />
        <span className='text-xs'>Table Name</span>
    </div>
  )
}

export default TableNoService
