import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedBox({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0.2, y: 100, scale: 1.05 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: delay / 1000, duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Middle() {
  return (
    <div className="flex justify-center items-center w-screen h-[700px] mt-15 gap-x-70">
      {[100, 300].map((delay, index) => (
        <AnimatedBox key={index} delay={delay}>
          <div className="w-[350px] h-[550px] card-spotlight rounded-2xl flex flex-col items-center justify-center gap-4 p-4">
            <input
              className="w-[300px] px-4 py-2 border text-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
              type="text"
              placeholder={
                index === 0 ? "Write questions" : "Type to generate Image"
              }
            />
            <button className="bg-purple-700 text-white px-4 py-2 rounded">
              Send
            </button>
            <div className="w-[300px] text-white mt-2 h-[300px] overflow-y-auto border border-purple-600 p-2 rounded">
              <h1>Works in Progress 🥲</h1>
            </div>
          </div>
        </AnimatedBox>
      ))}
    </div>
  );
}

export default Middle;
