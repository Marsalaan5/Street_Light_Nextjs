// "use client";
// import React, { useEffect, useRef, useState, useCallback } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import { useSidebar } from "../context/SidebarContext";
// import {
//   BoxCubeIcon,
//   CalenderIcon,
//   ChevronDownIcon,
//   GridIcon,
//   HorizontaLDots,
//   ListIcon,
//   PageIcon,
//   PieChartIcon,
//   PlugInIcon,
//   TableIcon,
//   UserCircleIcon,
//   MapIcon,
//   ReportIcon,
//   AlertIcon,
//   LightIcon,
//   ControlIcon
// } from "../icons/index";
// import SidebarWidget from "./SidebarWidget";

// type NavItem = {
//   name: string;
//   icon: React.ReactNode;
//   path?: string;
//   subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
// };

// const navItems: NavItem[] = [
//   {
//     icon: <GridIcon />,
//     name: "Dashboard",
//     subItems: [{ name: "Street Light", path: "/", pro: false }],
//   },
//   // {
//   //   icon: <CalenderIcon />,
//   //   name: "Calendar",
//   //   path: "/calendar",
//   // },
//   {
//     icon: <UserCircleIcon />,
//     name: "User Profile",
//     path: "/profile",
//   },

//   // {
//   //   name: "Forms",
//   //   icon: <ListIcon />,
//   //   subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
//   // },
//   // {
//   //   name: "Tables",
//   //   icon: <TableIcon />,
//   //   subItems: [{ name: "Basic Tables", path: "/basic-tables", pro: false }],
//   // },
//   // {
//   //   name: "Pages",
//   //   icon: <PageIcon />,
//   //   subItems: [
//   //     { name: "Blank Page", path: "/blank", pro: false },
//   //     { name: "404 Error", path: "/error-404", pro: false },
//   //   ],
//   // },
// ];


// const streetLightItems: NavItem[] = [
//   {
//     icon: <LightIcon />,
//     name: "Add Lights",
//     path: "/add",
//     // subItems: [{ name: "Street Light", path: "/", pro: false }],
//   },
//   {
//     icon: <LightIcon />,
//     name: "Light List",
//     path: "/list",
//     // subItems: [{ name: "Street Light", path: "/", pro: false }],
//   },
//   {
//     icon: <CalenderIcon />,
//     name: "Groups",
//     path: "/groups",
//   },
//   {
//     icon: <ControlIcon />,
//     name: "Dimming Control",
//     path: "/dimming-control",
//   },

//   {
//     icon: <ListIcon />,
//     name: "Scheduling",
//     path: "/scheduling"
//     // subItems: [{ name: "Form Elements", path: "/form-elements", pro: false }],
//   },

// ];


// const mapItems: NavItem[] = [
//   {
//     icon: <MapIcon />,
//     name: "Map View",
//     path: "/map",
//     // subItems: [{ name: "Street Light", path: "/", pro: false }],
//   },
// ];

// const reportItems: NavItem[] = [
//   {
//     icon: <ReportIcon />,
//     name: "Reports",
//     subItems: [
//       { name: "Report", path: "/report", pro: false },
//       { name: "Energy Report", path: "/energyreport", pro: false },
//       { name: "Faulty Report", path: "/faultyreport", pro: false },
//       { name: "Communication Report", path: "/communicationreport", pro: false },

//     ],
//   },

// ];

// const alertItems: NavItem[] = [
//   {
//     icon: <AlertIcon />,
//     name: "Alerts & Events",
//     subItems: [
//       { name: "Alerts", path: "/alerts", pro: false },

//     ],
//   },

// ];

// const userItems: NavItem[] = [
//   {
//     icon: <UserCircleIcon />,
//     name: "User Management",
//     subItems: [
//       { name: "Users", path: "/user", pro: false },
//       { name: "Roles", path: "/role", pro: false },
//       { name: "Permissions", path: "/permission", pro: false },

//     ],
//   },

// ];


// const othersItems: NavItem[] = [
//   // {
//   //   icon: <PieChartIcon />,
//   //   name: "Charts",
//   //   subItems: [
//   //     { name: "Line Chart", path: "/line-chart", pro: false },
//   //     { name: "Bar Chart", path: "/bar-chart", pro: false },
//   //   ],
//   // },
//   // {
//   //   icon: <BoxCubeIcon />,
//   //   name: "UI Elements",
//   //   subItems: [
//   //     { name: "Alerts", path: "/alerts", pro: false },
//   //     { name: "Avatar", path: "/avatars", pro: false },
//   //     { name: "Badge", path: "/badge", pro: false },
//   //     { name: "Buttons", path: "/buttons", pro: false },
//   //     { name: "Images", path: "/images", pro: false },
//   //     { name: "Videos", path: "/videos", pro: false },
//   //   ],
//   // },
//   // {
//   //   icon: <PlugInIcon />,
//   //   name: "Authentication",
//   //   subItems: [
//   //     { name: "Sign In", path: "/signin", pro: false },
//   //     { name: "Sign Up", path: "/signup", pro: false },
//   //   ],
//   // },
// ];

// const AppSidebar: React.FC = () => {
//   const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
//   const pathname = usePathname();

//   const renderMenuItems = (
//     navItems: NavItem[],
//     menuType: "main" | "light" | "map" | "reports" | "alerts" | "users" | "others"
//   ) => (
//     <ul className="flex flex-col gap-4">
//       {navItems.map((nav, index) => (
//         <li key={nav.name}>
//           {nav.subItems ? (
//             <button
//               onClick={() => handleSubmenuToggle(index, menuType)}
//               className={`menu-item group  ${openSubmenu?.type === menuType && openSubmenu?.index === index
//                 ? "menu-item-active"
//                 : "menu-item-inactive"
//                 } cursor-pointer ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "lg:justify-start"
//                 }`}
//             >
//               <span
//                 className={` ${openSubmenu?.type === menuType && openSubmenu?.index === index
//                   ? "menu-item-icon-active"
//                   : "menu-item-icon-inactive"
//                   }`}
//               >
//                 {nav.icon}
//               </span>
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <span className={`menu-item-text`}>{nav.name}</span>
//               )}
//               {(isExpanded || isHovered || isMobileOpen) && (
//                 <ChevronDownIcon
//                   className={`ml-auto w-5 h-5 transition-transform duration-200  ${openSubmenu?.type === menuType &&
//                     openSubmenu?.index === index
//                     ? "rotate-180 text-brand-500"
//                     : ""
//                     }`}
//                 />
//               )}
//             </button>
//           ) : (
//             nav.path && (
//               <Link
//                 href={nav.path}
//                 className={`menu-item group ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
//                   }`}
//               >
//                 <span
//                   className={`${isActive(nav.path)
//                     ? "menu-item-icon-active"
//                     : "menu-item-icon-inactive"
//                     }`}
//                 >
//                   {nav.icon}
//                 </span>
//                 {(isExpanded || isHovered || isMobileOpen) && (
//                   <span className={`menu-item-text`}>{nav.name}</span>
//                 )}
//               </Link>
//             )
//           )}
//           {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
//             <div
//               ref={(el) => {
//                 subMenuRefs.current[`${menuType}-${index}`] = el;
//               }}
//               className="overflow-hidden transition-all duration-300"
//               style={{
//                 height:
//                   openSubmenu?.type === menuType && openSubmenu?.index === index
//                     ? `${subMenuHeight[`${menuType}-${index}`]}px`
//                     : "0px",
//               }}
//             >
//               <ul className="mt-2 space-y-1 ml-9">
//                 {nav.subItems.map((subItem) => (
//                   <li key={subItem.name}>
//                     <Link
//                       href={subItem.path}
//                       className={`menu-dropdown-item ${isActive(subItem.path)
//                         ? "menu-dropdown-item-active"
//                         : "menu-dropdown-item-inactive"
//                         }`}
//                     >
//                       {subItem.name}
//                       <span className="flex items-center gap-1 ml-auto">
//                         {subItem.new && (
//                           <span
//                             className={`ml-auto ${isActive(subItem.path)
//                               ? "menu-dropdown-badge-active"
//                               : "menu-dropdown-badge-inactive"
//                               } menu-dropdown-badge `}
//                           >
//                             new
//                           </span>
//                         )}
//                         {subItem.pro && (
//                           <span
//                             className={`ml-auto ${isActive(subItem.path)
//                               ? "menu-dropdown-badge-active"
//                               : "menu-dropdown-badge-inactive"
//                               } menu-dropdown-badge `}
//                           >
//                             pro
//                           </span>
//                         )}
//                       </span>
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </li>
//       ))}
//     </ul>
//   );

//   const [openSubmenu, setOpenSubmenu] = useState<{
//     type: "main" | "light" | "map" | "reports" | "alerts" | "users" | "others";
//     index: number;
//   } | null>(null);
//   const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
//     {}
//   );
//   const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

//   // const isActive = (path: string) => path === pathname;
//   const isActive = useCallback((path: string) => path === pathname, [pathname]);

//   useEffect(() => {
//     // Check if the current path matches any submenu item
//     let submenuMatched = false;
//     ["main", "light", "map", "reports", "alerts", "users", "others"].forEach((menuType) => {
//       const items = menuType === "main" ? navItems : menuType === "light" ? streetLightItems : menuType === "map" ? mapItems : menuType === "reports" ? reportItems : menuType === "alerts" ? alertItems : menuType === "users" ? userItems : menuType === "others" ? othersItems : [];
//       items.forEach((nav, index) => {
//         if (nav.subItems) {
//           nav.subItems.forEach((subItem) => {
//             if (isActive(subItem.path)) {
//               setOpenSubmenu({
//                 type: menuType as "main" | "light" | "map" | "reports" | "alerts" | "users" | "others",
//                 index,
//               });
//               submenuMatched = true;
//             }
//           });
//         }
//       });
//     });

//     // If no submenu item matches, close the open submenu
//     if (!submenuMatched) {
//       setOpenSubmenu(null);
//     }
//   }, [pathname, isActive]);

//   useEffect(() => {
//     // Set the height of the submenu items when the submenu is opened
//     if (openSubmenu !== null) {
//       const key = `${openSubmenu.type}-${openSubmenu.index}`;
//       if (subMenuRefs.current[key]) {
//         setSubMenuHeight((prevHeights) => ({
//           ...prevHeights,
//           [key]: subMenuRefs.current[key]?.scrollHeight || 0,
//         }));
//       }
//     }
//   }, [openSubmenu]);

//   const handleSubmenuToggle = (index: number, menuType: "main" | "light" | "map" | "reports" | "alerts" | "users" | "others") => {
//     setOpenSubmenu((prevOpenSubmenu) => {
//       if (
//         prevOpenSubmenu &&
//         prevOpenSubmenu.type === menuType &&
//         prevOpenSubmenu.index === index
//       ) {
//         return null;
//       }
//       return { type: menuType, index };
//     });
//   };

//   return (
//     <aside
//       className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
//         ${isExpanded || isMobileOpen
//           ? "w-[290px]"
//           : isHovered
//             ? "w-[290px]"
//             : "w-[90px]"
//         }
//         ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
//         lg:translate-x-0`}
//       onMouseEnter={() => !isExpanded && setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div
//         className={`py-8 flex  ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
//           }`}
//       >
//         <Link href="/">
//           {isExpanded || isHovered || isMobileOpen ? (
//             <>
//               <Image
//                 className="dark:hidden"
//                 src="/images/logo/logo.png"
//                 alt="Logo"
//                 width={150}
//                 height={40}
//               />
//               <Image
//                 className="hidden dark:block"
//                 src="/images/logo/logo.png"
//                 alt="Logo"
//                 width={150}
//                 height={40}
//               />
//             </>
//           ) : (
//             <Image
//               src="/images/logo/logo-small.png"
//               alt="Logo"
//               width={32}
//               height={32}
//             />
//           )}
//         </Link>
//       </div>
//       <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
//         <nav className="mb-6">
//           <div className="flex flex-col gap-4">
//             <div>
//               <h2
//                 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "justify-start"
//                   }`}
//               >
//                 {isExpanded || isHovered || isMobileOpen ? (
//                   "Menu"
//                 ) : (
//                   <HorizontaLDots />
//                 )}
//               </h2>
//               {renderMenuItems(navItems, "main")}
//             </div>
//             <div>
//               <h2
//                 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "justify-start"
//                   }`}
//               >
//                 {isExpanded || isHovered || isMobileOpen ? (
//                   "Light Management"
//                 ) : (
//                   <HorizontaLDots />
//                 )}
//               </h2>
//               {renderMenuItems(streetLightItems, "light")}
//             </div>
//             <div>
//               <h2
//                 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "justify-start"
//                   }`}
//               >
//                 {isExpanded || isHovered || isMobileOpen ? (
//                   "Map & View"
//                 ) : (
//                   <HorizontaLDots />
//                 )}
//               </h2>
//               {renderMenuItems(mapItems, "map")}
//             </div>

//             <div className="">
//               <h2
//                 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "justify-start"
//                   }`}
//               >
//                 {isExpanded || isHovered || isMobileOpen ? (
//                   "Reports"
//                 ) : (
//                   <HorizontaLDots />
//                 )}
//               </h2>
//               {renderMenuItems(reportItems, "reports")}
//             </div>
//             <div className="">
//               <h2
//                 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "justify-start"
//                   }`}
//               >
//                 {isExpanded || isHovered || isMobileOpen ? (
//                   "Alerts & Events"
//                 ) : (
//                   <HorizontaLDots />
//                 )}
//               </h2>
//               {renderMenuItems(alertItems, "alerts")}
//             </div>

//             <div className="">
//               <h2
//                 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "justify-start"
//                   }`}
//               >
//                 {isExpanded || isHovered || isMobileOpen ? (
//                   "Users Management"
//                 ) : (
//                   <HorizontaLDots />
//                 )}
//               </h2>
//               {renderMenuItems(userItems, "users")}
//             </div>

//             <div className="">
//               <h2
//                 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered
//                   ? "lg:justify-center"
//                   : "justify-start"
//                   }`}
//               >
//                 {isExpanded || isHovered || isMobileOpen ? (
//                   "Others"
//                 ) : (
//                   <HorizontaLDots />
//                 )}
//               </h2>
//               {renderMenuItems(othersItems, "others")}
//             </div>
//           </div>
//         </nav>
//         {isExpanded || isHovered || isMobileOpen ? <SidebarWidget /> : null}
//       </div>
//     </aside>
//   );
// };

// export default AppSidebar;




"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "../context/SidebarContext";
import {
  BoxCubeIcon, CalenderIcon, ChevronDownIcon, GridIcon, HorizontaLDots,
  ListIcon, PageIcon, PieChartIcon, PlugInIcon, TableIcon, UserCircleIcon,
  MapIcon, ReportIcon, AlertIcon, LightIcon, ControlIcon
} from "../icons/index";
import SidebarWidget from "./SidebarWidget";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; pro?: boolean; new?: boolean }[];
};

const navItems: NavItem[] = [
  { icon: <GridIcon />, name: "Dashboard", subItems: [{ name: "Street Light", path: "/", pro: false }] },
  { icon: <UserCircleIcon />, name: "User Profile", path: "/profile" }
];

const streetLightItems: NavItem[] = [
  { icon: <LightIcon />, name: "Add Lights", path: "/add" },
  { icon: <LightIcon />, name: "Light List", path: "/list" },
  { icon: <CalenderIcon />, name: "Groups", path: "/groups" },
  { icon: <ControlIcon />, name: "Dimming Control", path: "/dimming-control" },
  { icon: <ListIcon />, name: "Scheduling", path: "/scheduling" }
];

const mapItems: NavItem[] = [{ icon: <MapIcon />, name: "Map View", path: "/map" }];

const reportItems: NavItem[] = [
  {
    icon: <ReportIcon />, name: "Reports",
    subItems: [
      { name: "Report", path: "/report", pro: false },
      { name: "Energy Report", path: "/energyreport", pro: false },
      { name: "Faulty Report", path: "/faultyreport", pro: false },
      { name: "Communication Report", path: "/communicationreport", pro: false }
    ]
  }
];

const alertItems: NavItem[] = [
  { icon: <AlertIcon />, name: "Alerts & Events", subItems: [{ name: "Alerts", path: "/alerts", pro: false }] }
];

const userItems: NavItem[] = [
  {
    icon: <UserCircleIcon />, name: "User Management",
    subItems: [
      { name: "Users", path: "/user", pro: false },
      { name: "Roles", path: "/role", pro: false },
      { name: "Permissions", path: "/permission", pro: false }
    ]
  }
];

const othersItems: NavItem[] = [];

type MenuType = "main" | "light" | "map" | "reports" | "alerts" | "users" | "others";

const ActivePill = () => (
  <motion.span
    layoutId="sidebar-active-pill"
    className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-brand-500"
    transition={{ type: "spring", stiffness: 380, damping: 32 }}
  />
);

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = useState<{ type: MenuType; index: number } | null>(null);

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  useEffect(() => {
    let submenuMatched = false;
    (["main", "light", "map", "reports", "alerts", "users", "others"] as MenuType[]).forEach(menuType => {
      const items =
        menuType === "main" ? navItems :
          menuType === "light" ? streetLightItems :
            menuType === "map" ? mapItems :
              menuType === "reports" ? reportItems :
                menuType === "alerts" ? alertItems :
                  menuType === "users" ? userItems : othersItems;
      items.forEach((nav, index) => {
        nav.subItems?.forEach(subItem => {
          if (isActive(subItem.path)) {
            setOpenSubmenu({ type: menuType, index });
            submenuMatched = true;
          }
        });
      });
    });
    if (!submenuMatched) setOpenSubmenu(null);
  }, [pathname, isActive]);

  const handleSubmenuToggle = (index: number, menuType: MenuType) => {
    setOpenSubmenu(prev => (prev && prev.type === menuType && prev.index === index ? null : { type: menuType, index }));
  };

  const renderMenuItems = (items: NavItem[], menuType: MenuType) => (
    <motion.ul
      className="flex flex-col gap-4"
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
    >
      {items.map((nav, index) => {
        const isOpen = openSubmenu?.type === menuType && openSubmenu?.index === index;
        return (
          <motion.li
            key={nav.name}
            variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 26 } } }}
          >
            {nav.subItems ? (
              <button
                onClick={() => handleSubmenuToggle(index, menuType)}
                className={`menu-item group ${isOpen ? "menu-item-active" : "menu-item-inactive"} cursor-pointer ${!isExpanded && !isHovered ? "lg:justify-center" : "lg:justify-start"}`}
              >
                <motion.span whileHover={{ scale: 1.12 }} className={isOpen ? "menu-item-icon-active" : "menu-item-icon-inactive"}>
                  {nav.icon}
                </motion.span>
                {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                {(isExpanded || isHovered || isMobileOpen) && (
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "var(--color-brand-500, #465fff)" : undefined }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="ml-auto"
                  >
                    <ChevronDownIcon className="w-5 h-5" />
                  </motion.span>
                )}
              </button>
            ) : (
              nav.path && (
                <Link href={nav.path} className={`menu-item group relative ${isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"}`}>
                  {isActive(nav.path) && <ActivePill />}
                  <motion.span whileHover={{ scale: 1.12 }} className={isActive(nav.path) ? "menu-item-icon-active" : "menu-item-icon-inactive"}>
                    {nav.icon}
                  </motion.span>
                  {(isExpanded || isHovered || isMobileOpen) && <span className="menu-item-text">{nav.name}</span>}
                </Link>
              )
            )}

            {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <motion.ul
                      className="mt-2 space-y-1 ml-9"
                      initial="hidden"
                      animate="show"
                      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
                    >
                      {nav.subItems.map(subItem => (
                        <motion.li
                          key={subItem.name}
                          variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
                        >
                          <Link
                            href={subItem.path}
                            className={`menu-dropdown-item relative ${isActive(subItem.path) ? "menu-dropdown-item-active" : "menu-dropdown-item-inactive"}`}
                          >
                            {isActive(subItem.path) && <ActivePill />}
                            {subItem.name}
                            <span className="flex items-center gap-1 ml-auto">
                              {subItem.new && (
                                <span className={`ml-auto ${isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"} menu-dropdown-badge`}>new</span>
                              )}
                              {subItem.pro && (
                                <span className={`ml-auto ${isActive(subItem.path) ? "menu-dropdown-badge-active" : "menu-dropdown-badge-inactive"} menu-dropdown-badge`}>pro</span>
                              )}
                            </span>
                          </Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </motion.li>
        );
      })}
    </motion.ul>
  );

  const sections: { label: string; items: NavItem[]; type: MenuType }[] = [
    { label: "Menu", items: navItems, type: "main" },
    { label: "Light Management", items: streetLightItems, type: "light" },
    { label: "Map & View", items: mapItems, type: "map" },
    { label: "Reports", items: reportItems, type: "reports" },
    { label: "Alerts & Events", items: alertItems, type: "alerts" },
    { label: "Users Management", items: userItems, type: "users" },
    { label: "Others", items: othersItems, type: "others" }
  ];

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className={`py-8 flex ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}
      >
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <>
              <Image className="dark:hidden" src="/images/logo/logo.png" alt="Logo" width={150} height={40} />
              <Image className="hidden dark:block" src="/images/logo/logo.png" alt="Logo" width={150} height={40} />
            </>
          ) : (
            <Image src="/images/logo/logo-small.png" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </motion.div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            {sections.map(section => (
              <div key={section.label}>
                <h2 className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${!isExpanded && !isHovered ? "lg:justify-center" : "justify-start"}`}>
                  {isExpanded || isHovered || isMobileOpen ? section.label : <HorizontaLDots />}
                </h2>
                {renderMenuItems(section.items, section.type)}
              </div>
            ))}
          </div>
        </nav>
        {(isExpanded || isHovered || isMobileOpen) && <SidebarWidget />}
      </div>
    </aside>
  );
};

export default AppSidebar;