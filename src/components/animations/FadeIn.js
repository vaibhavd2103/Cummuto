import React from "react";
import { motion } from "framer-motion";

export default function FadeIn({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      exit={{
        opacity: 0,
        scale: 0,
      }}
      style={{
        display: "flex",
      }}
    >
      {children}
    </motion.div>
  );
}
