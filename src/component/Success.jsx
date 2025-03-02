import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-lg text-center text-gray-800"
      >
        <h1 className="text-3xl font-bold mb-4">✔ Success!</h1>
        <p className="text-lg">Your application has been submitted successfully.</p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
          onClick={() => navigate("/")}
        >
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Success;
