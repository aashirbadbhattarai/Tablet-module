import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const companies = [
  {
    shortName: "ABC",
    fullName: "ABC Corporation Pvt Ltd",
    startDate: "2021-01-01",
    endDate: "2025-12-31",
  },
  {
    shortName: "XYZ",
    fullName: "XYZ Technologies",
    startDate: "2020-06-15",
    endDate: "2024-11-30",
  },
  {
    shortName: "LMN",
    fullName: "LMN Global Inc.",
    startDate: "2019-03-01",
    endDate: "2023-09-15",
  },
];

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const CompanySelection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <motion.div
        className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Select Company
        </h1>
        <div className="flex flex-col space-y-4">
          {companies.map((company, index) => (
            <motion.div
              key={company.shortName}
              className="cursor-pointer border border-gray-200 rounded p-4 hover:shadow-lg transition"
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              custom={index}
              onClick={() => navigate("/counter-selection")}
            >
              <h2 className="text-lg font-semibold text-blue-600">
                {company.shortName}
              </h2>
              <p className="text-gray-700">{company.fullName}</p>
              <div className="mt-2 text-sm text-gray-500">
                <span>Start: {company.startDate}</span> |{" "}
                <span>End: {company.endDate}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CompanySelection;
