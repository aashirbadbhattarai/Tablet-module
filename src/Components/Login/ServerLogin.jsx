import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Animation Variants
const formVariants = {
  initial: (direction) => ({
    x: direction === "left" ? "-100%" : "100%",
    opacity: 0,
  }),
  animate: {
    x: "0%",
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: (direction) => ({
    x: direction === "left" ? "100%" : "-100%",
    opacity: 0,
    transition: { duration: 0.5 },
  }),
};

// Form 1: Connect to Server
const Form1 = ({ onNext }) => {
  const [server, setServer] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleConnect = (e) => {
    e.preventDefault();
    console.log({ server, username, password });
    onNext();
  };

  return (
    <motion.form
      onSubmit={handleConnect}
      className="absolute inset-0 flex items-center justify-center px-4 bg-[#31b0d5]"
      variants={formVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom="left"
    >
      <div className="bg-white p-6 rounded shadow w-full max-w-[20rem]">
        <h2 className="text-xl font-bold mb-4 text-[#008080]">Connect to Server</h2>
        <input
          type="text"
          placeholder="Server Name"
          value={server}
          onChange={(e) => setServer(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-300"
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#31b0d5] text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Connect
        </button>
      </div>
    </motion.form>
  );
};

Form1.propTypes = {
  onNext: PropTypes.func.isRequired,
};

// Form 2: User Login
const Form2 = ({ onBack }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password, remember });
    navigate('/company-selection')
  };

  return (
    <motion.form
      onSubmit={handleLogin}
      className="absolute inset-0 flex items-center justify-center px-4 bg-[#31b0d5]"
      variants={formVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom="right"
    >
      <div className="bg-white p-6 rounded shadow w-full max-w-[20rem]">
        <h2 className="text-xl font-bold mb-4 text-[#008080]">User Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          required
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={(e) => setRemember(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="remember" className="text-sm text-gray-600">
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-[#31b0d5] text-white py-2 rounded hover:bg-blue-600 transition"
          onClick={()=>navigate('/company-selection')}
        >
          Log In
        </button>
        <button
          type="button"
          onClick={onBack}
          className="mt-3 text-sm text-[#008080] hover:underline"
        >
          Back to Connect
        </button>
      </div>
    </motion.form>
  );
};

Form2.propTypes = {
  onBack: PropTypes.func.isRequired,
};

// Main Component renamed to ServerLogin
export default function ServerLogin() {
  const [showForm1, setShowForm1] = useState(true);

  return (
    <div className="relative w-[24rem] h-[24rem] top-11 mx-auto mt-20 overflow-hidden border border-gray-300 rounded-lg shadow-lg bg-white">
      <AnimatePresence mode="wait" initial={false}>
        {showForm1 ? (
          <Form1 key="form1" onNext={() => setShowForm1(false)} />
        ) : (
          <Form2 key="form2" onBack={() => setShowForm1(true)} />
        )}
      </AnimatePresence>
    </div>
  );
}
