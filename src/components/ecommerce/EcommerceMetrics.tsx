"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { motion } from "framer-motion";
import { Users, ShoppingBag, DollarSign, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";

export const EcommerceMetrics = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const metricsData = [
    {
      title: "Customers",
      value: "3,782",
      change: "11.01%",
      isPositive: true,
      icon: Users,
      glowClass: "glow-brand group-hover:bg-brand-500 group-hover:text-white",
      iconBg: "bg-brand-50 dark:bg-brand-500/10 text-brand-500 dark:text-brand-400",
    },
    {
      title: "Orders",
      value: "5,359",
      change: "9.05%",
      isPositive: false,
      icon: ShoppingBag,
      glowClass: "glow-error group-hover:bg-error-500 group-hover:text-white",
      iconBg: "bg-error-50 dark:bg-error-500/10 text-error-500 dark:text-error-400",
    },
    {
      title: "Revenue",
      value: "$45,231.89",
      change: "18.2%",
      isPositive: true,
      icon: DollarSign,
      glowClass: "glow-success group-hover:bg-success-500 group-hover:text-white",
      iconBg: "bg-success-50 dark:bg-success-500/10 text-success-500 dark:text-success-400",
    },
    {
      title: "Sales Growth",
      value: "25.4%",
      change: "4.3%",
      isPositive: true,
      icon: TrendingUp,
      glowClass: "glow-warning group-hover:bg-warning-500 group-hover:text-white",
      iconBg: "bg-warning-50 dark:bg-warning-500/10 text-warning-500 dark:text-orange-400",
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
    >
      {metricsData.map((item, idx) => {
        const IconComponent = item.icon;
        return (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 hover:border-transparent hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-none"
          >
            {/* Top Border Gradient Hover Glow */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            
            <div className="flex items-center justify-between">
              <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${item.iconBg} ${item.glowClass}`}>
                <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              <Badge color={item.isPositive ? "success" : "error"} variant="light">
                <span className="flex items-center gap-0.5">
                  {item.isPositive ? (
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  ) : (
                    <ArrowDownRight className="w-3.5 h-3.5" />
                  )}
                  {item.change}
                </span>
              </Badge>
            </div>

            <div className="mt-5">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.title}
              </span>
              <h4 className="mt-2 text-2xl font-bold text-gray-800 dark:text-white/90 tracking-tight">
                {item.value}
              </h4>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};
