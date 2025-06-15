import React from 'react'
import PropTypes from 'prop-types';
import food from '../../assets/pizza.jpg'
import './Items.css'


const Items = ({ onClick }) => {
  const itemData={
    name: "Pizza",
    price: 350,
    image:food,
  };
  return (
    <div
      onClick={() => onClick && onClick(itemData)}
      className='w-[7rem] h-[9rem] p-2 cursor-pointer product-shadow rounded-4xl'
    >        
        <img src={food} alt="Food" className='w-[60%] h-auto rounded-2xl' />
        <div className='flex flex-col item-center'>
            <span>Pizza</span>
            <span>Rs350.00</span>
        </div>
    </div>
  )
}
Items.propTypes = {
  onClick: PropTypes.func,
};

export default Items
