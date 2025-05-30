import React, { useState, useEffect } from 'react';
import Up from '../../assets/up-arrow.png';
import Down from '../../assets/down-arrow.png';

const ProductBilling = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Reset quantity when a new item is selected
    setQuantity(1);
  }, [item]);

  if (!item) return null;

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = quantity * item.price;

  return (
    <div className="product-billing">
      <div className="flex justify-between mt-2 text-[15px] border-b-2 border-[#D7D7D7] pb-2">
        <span>{item.name}</span>

        <div className="flex items-center gap-1">
          <span>{quantity}</span>
          <div className="flex flex-col">
            <img
              src={Up}
              alt="Decrease"
              className="w-4 h-3 ml-1 cursor-pointer"
              onClick={decrement}
            />
            <img
              src={Down}
              alt="Increase"
              className="w-4 h-3 ml-1 cursor-pointer"
              onClick={increment}
            />
          </div>
        </div>

        <span>Rs{item.price.toFixed(2)}</span>
        <span>Rs{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default ProductBilling;
