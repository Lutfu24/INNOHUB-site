import { motion, AnimatePresence } from "framer-motion";

function ErrorMessage({ message }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.2 }}
          className="text-red-500 text-sm mt-1"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ErrorMessage;
