import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Exit from '../../assets/close.png'
import tick from '../../assets/greentick.png'


const TicketPrinting = ({onClose}) => {
  const[show, setShow] = useState(false)

  useEffect(() => {
    // Trigger animation on mount
    const enterTimer = setTimeout(() => setShow(true), 10);

    const closeTimer = setTimeout(()=>{
      setShow(false);
      setTimeout(() => {
        onClose();
      },300);
    },3000);

    return () =>{
      clearTimeout(enterTimer);
      clearTimeout(closeTimer);
    };
  },[onClose]);

  return (
   
    <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
      <div
        className={`bg-[#f4f0f0] shadow-xl rounded-lg p-6 w-[40%] border border-gray-300 relative transform transition-all duration-300 ease-out
          ${show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}
        `}
      >
        <img src={Exit} alt="Close" className="w-5 h-5 cursor-pointer right-2 top-2 absolute" onClick={onClose}/>
        <h2 className="text-lg font-bold mb-4 text-center">Ticket Printed Sucessfully</h2>
        <div>
          <img src={tick} alt="Success" className="w-24 h-24 mx-auto mb-4 rounded-lg" />
        </div>

      </div>
    </div>
    
  )
}
TicketPrinting.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TicketPrinting
