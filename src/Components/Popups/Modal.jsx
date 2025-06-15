import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, onConfirm, item }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Reset quantity to 1 when item changes
    setQuantity(1);
    }, [item]);

  if (!isOpen || !item) return null;

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAdd = () => {
    onConfirm({ ...item, quantity }); // Pass quantity along with item
  };

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
      <div className="bg-[#f4f0f0] shadow-xl rounded-lg p-6 w-[20rem] border border-gray-300">
        <h2 className="text-lg font-bold mb-4 text-center">Add Item</h2>
        <img src={item.image} alt={item.name} className="w-24 h-24 mx-auto mb-4 rounded-lg" />
        <p className="text-center font-medium">{item.name}</p>
        <p className="text-center text-gray-600">Rs {item.price}</p>

        <div className="flex justify-center items-center gap-4 mt-4">
            <p>Quantity</p>
          <button onClick={decrement} className="px-3 py-1 bg-gray-200 rounded text-lg">−</button>
          <span className="text-xl font-medium">{quantity}</span>
          <button onClick={increment} className="px-3 py-1 bg-gray-200 rounded text-lg">+</button>
        </div>
        
        <div className='flex mt-4 gap-4'>
            <p>Notes:</p>
            <input type="text" className='bg-white drop-shadow-xl/25 rounded-3xl pl-2'/>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
};

export default Modal;
