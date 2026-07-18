"use client";

import { useSidebar } from "@/context/SidebarContext";
import AppHeader from "@/layout/AppHeader";
import AppSidebar from "@/layout/AppSidebar";
import Backdrop from "@/layout/Backdrop";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[290px]"
      : "lg:ml-[90px]";

  return (
    <div className="min-h-screen xl:flex">
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
      </div>
    </div>
  );
}



// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import { useSidebar } from "@/context/SidebarContext";
// import AppHeader from "@/layout/AppHeader";
// import AppSidebar from "@/layout/AppSidebar";
// import Backdrop from "@/layout/Backdrop";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);

//   const { isExpanded, isHovered, isMobileOpen } = useSidebar();

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       router.replace("/signin");
//       return;
//     }

//     setLoading(false);
//   }, [router]);

//   if (loading) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   // Dynamic class for main content margin based on sidebar state
//   const mainContentMargin = isMobileOpen
//     ? "ml-0"
//     : isExpanded || isHovered
//       ? "lg:ml-[290px]"
//       : "lg:ml-[90px]";

//   return (
//     <div className="min-h-screen xl:flex">
//       {/* Sidebar */}
//       <AppSidebar />

//       {/* Mobile Backdrop */}
//       <Backdrop />

//       {/* Main Content */}
//       <div
//         className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin}`}
//       >
//         {/* Header */}
//         <AppHeader />

//         {/* Page Content */}
//         <div className="mx-auto max-w-screen-2xl p-4 md:p-6">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }