import React, { useState, useEffect } from "react";
import Exit from "../../assets/close.png";
import cash from "../../assets/dollar.png";
import fonepay from "../../assets/mobilewallet.png";
import checktick from "../../assets/checktick.png";

const Payment = ({ onClose }) => {
  const [show, setShow] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(""); // track selected method

  useEffect(() => {
    const enterTimer = setTimeout(() => setShow(true), 10);
    const closeTimer = setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        onClose();
      }, 300);
    }, 1000000000);
    return () => {
      clearTimeout(enterTimer);
      clearTimeout(closeTimer);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center z-50">
      <div
        className={`bg-[#f4f0f0] top-[-6rem] shadow-xl rounded-lg p-6 w-[40%] border border-gray-300 relative transform transition-all duration-300 ease-out
          ${
            show
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 translate-y-4"
          }
        `}
      >
        <div className="relative flex items-center justify-center w-full h-16 bg-white">
          <h2 className="text-lg font-bold text-center">Payment</h2>
          <img
            src={Exit}
            alt="Close"
            className="w-5 h-5 cursor-pointer absolute top-2 right-2"
            onClick={onClose}
          />
        </div>

        <div className="flex items-center justify-center min-h-[45vh] bg-gray-100">
          <div className="flex flex-col items-center space-y-3 px-4 py-5 w-64">
            {/* Cash Option */}
            <div
              onClick={() => setSelectedMethod("cash")}
              className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-50 cursor-pointer transition"
            >
              <div className="flex items-center space-x-2 w-full h-10 bg-[#d9d9d9] rounded-3xl mt-[-6rem] px-4">
                <img src={cash} alt="cash" className="w-4 h-4" />
                <span className="text-sm text-gray-800 flex-grow font-bold">
                  Cash
                </span>
                {selectedMethod === "cash" && (
                  <img src={checktick} alt="selected" className="w-4 h-4" />
                )}
              </div>
            </div>

            {/* Fonepay Option */}
            <div
              onClick={() => setSelectedMethod("fonepay")}
              className="flex items-center justify-between w-full p-2 rounded-md hover:bg-gray-50 cursor-pointer transition"
            >
              <div className="flex items-center space-x-2 w-full h-10 bg-[#d9d9d9] rounded-3xl px-4">
                <img src={fonepay} alt="fonepay" className="w-4 h-4" />
                <span className="text-sm font-bold text-gray-800 flex-grow">
                  Fonepay
                </span>
                {selectedMethod === "fonepay" && (
                  <img src={checktick} alt="selected" className="w-4 h-4" />
                )}
              </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
