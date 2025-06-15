import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const counters = [
  {
    counterid: "CNT001",
    counterName: "Counter 1",
  },
  {
    counterid: "CNT002",
    counterName: "Counter 2",
  },
  {
    counterid: "CNT003",
    counterName: "Counter 3",
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

const CounterSelection = () => {
    const navigate = useNavigate()
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200 p-6">
      <motion.div
        className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Select Counter
        </h1>
        <div className="flex flex-col space-y-4">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.counterid}
              className="cursor-pointer border border-gray-200 rounded p-4 hover:shadow-lg transition"
              variants={itemVariant}
              initial="hidden"
              animate="visible"
              custom={index}
              onClick={() =>navigate('/dashboard')}
            >
              <h2 className="text-lg font-semibold text-blue-600">
                {counter.counterid}
              </h2>
              <p className="text-gray-700">{counter.counterName}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CounterSelection;
