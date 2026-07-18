// import React from "react";

// export default function SidebarWidget() {
//   return (
//     <div
//       className={`
//         mx-auto mb-10 w-full max-w-60 rounded-2xl bg-gray-50 px-4 py-5 text-center dark:bg-white/[0.03]`}
//     >
//       <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
//         Smart Street Light
//       </h3>
//       {/* <p className="mb-4 text-gray-500 text-theme-sm dark:text-gray-400">

//       </p> */}
//       {/* <a
//         href="https://tailadmin.com/pricing"
//         target="_blank"
//         rel="nofollow"
//         className="flex items-center justify-center p-3 font-medium text-white rounded-lg bg-brand-500 text-theme-sm hover:bg-brand-600"
//       >
//         Upgrade To Pro
//       </a> */}
//     </div>
//   );
// }



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