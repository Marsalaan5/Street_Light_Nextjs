

"use client";
import { motion } from "framer-motion";

export default function SidebarWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      whileHover={{ y: -3 }}
      className="mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]"
    >
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Smart Street Light</h3>
    </motion.div>
  );
}