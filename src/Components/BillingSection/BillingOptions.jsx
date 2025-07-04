import React from 'react'
import PropTypes from 'prop-types';

const BillingOptions = ({label,onClick,color}) => {
    const baseClasses = "px-4 py-2 rounded-md shadow transition";
    const colorClassesMap = {
        blue: "bg-[#1f78ff] text-white hover:bg-blue-700",
        red: "bg-[#ff2311] text-black hover:bg-red-400",
        green: "bg-[#009239] text-white hover:bg-green-700",
    };
    const colorClasses = colorClassesMap[color] || colorClassesMap.blue;  
    return (
        <button onClick={onClick} className={`${baseClasses} ${colorClasses}`}>
            {label}
        </button>
  )
}

BillingOptions.propTypes = {
    label: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(['blue', 'red', 'green'])
};

export default BillingOptions

