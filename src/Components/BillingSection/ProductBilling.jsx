import React,{useState} from 'react'
import Up from '../../assets/up-arrow.png'
import Down from '../../assets/down-arrow.png'


const ProductBilling = () => {
    const [quantity, setQuantity] = useState(1);
    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () =>{
    if(quantity > 0){
      setQuantity(prev => prev - 1);
    }
  }
  const pricePerItem = 150;
  const totalPrice = quantity * pricePerItem;
  return (

    <div>
       <div className='flex justify-between mt-2 text-[15px] border-b-2 border-[#D7D7D7] pb-2'>
        <span>Burger</span>
        <div className="flex items-center gap-1">
          <span>{quantity}</span>
          <div className="flex flex-col">
            <img src={Up} 
              alt="Increase" 
              className={`w-4 h-3 ml-1 cursor-pointer ${
                quantity === 0 ? 'opacity-30 pointer-events-none' :'' }`}
              onClick={decrement} 
            />

            <img src={Down} 
              alt="Decrease" 
              className='w-4 h-3 ml-1 cursor-pointer'
              onClick={increment} 
            />
          </div>
        </div>
        <span>Rs{pricePerItem.toFixed(2)}</span>
        <span>Rs{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default ProductBilling
