import React, { useState } from "react";
import Items from "./Items";
import BillingSection from "../BillingSection/BillingSection";
import PageWrapper from "../PageWrapper/PageWrapper";
import Modal from "../Popups/Modal"; 

const Menu = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [modalItem, setModalItem] = useState(null); 

  const handleItemClick = (item) => {
    setModalItem(item); 
  };

  const handleConfirmAdd = (itemWithQuantity) => {
    setSelectedItems((prevItems) => [...prevItems, itemWithQuantity]);
    setModalItem(null);
  };

  const handleCloseModal = () => {
    setModalItem(null);
  };

  return (
    <PageWrapper>
      <div className="flex">
        <div className="flex flex-wrap w-7/12 h-svh bg-[#fff] justify-baseline items-center p-4 gap-4 overflow-y-auto mr-4">
          {[...Array(11)].map((_, index) => (
            <Items key={index} onClick={handleItemClick} />
          ))}
        </div>
        <BillingSection selectedItems={selectedItems} />
      </div>

      {/* Render modal */}
      <Modal
        isOpen={!!modalItem}
        item={modalItem}
        onClose={handleCloseModal}
        onConfirm={handleConfirmAdd}
      />
    </PageWrapper>
  );
};

export default Menu;
