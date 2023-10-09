"use client";

import React from "react";
import { delay, motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      // className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
      // initial={{ opacity: 0, y: 100 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ delay: 0.125 }}

      className="relative h-[50px] w-[30px] rounded-3xl border-2 border-gray-300 hidden my-40 sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <motion.div
        before
        className="absolute top-7 left-[11px] h-[5px] w-[5px] rounded-full bg-gray-500 animate-wheel"
      ></motion.div>
    </motion.div>
  );
}
