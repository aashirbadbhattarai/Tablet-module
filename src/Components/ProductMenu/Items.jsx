import React from 'react'
import food from '../../assets/pizza.jpg'


const Items = ({ onClick }) => {
  const itemData={
    name: "Pizza",
    price: 350,
    image:food,
  };
  return (
    <div
      onClick={() => onClick && onClick(itemData)}
      className='w-[10rem] h-[10rem] outline-1 p-2 cursor-pointer'
    >        <img src={food} alt="Food" className='w-[60%] h-[60%] rounded-2xl' />
        <div className='flex flex-col item-center'>
            <span>Pizza</span>
            <span>Rs350.00</span>
        </div>
    </div>
  )
}

export default Items
