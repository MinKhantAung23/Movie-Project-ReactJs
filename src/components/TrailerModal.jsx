/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";

const TrailerModal = ({ videoKey, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 top-12 bg-black bg-opacity-75 flex items-center justify-center"
    >
      <div className="relative w-full max-w-4xl h-3/4">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          &#x2715;
        </button>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </motion.div>
  );
};

export default TrailerModal;
