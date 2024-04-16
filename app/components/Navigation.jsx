"use client";

import { useState } from "react";

const Navigation = () => {
  const navLinks = [
    {
      name: "Dashboard",
      icon: "/dashboard.svg",
      path: "/admin/",
    },
    {
      name: "Agencies",
      icon: "/agency.svg",
      path: "/admin/",
    },
    {
      name: "Subscriptions",
      icon: "/subs.svg",
      path: "/admin/",
    },
    {
      name: "Settings",
      icon: "/setting.svg",
      path: "/admin/",
    },
    {
      name: "Transactions",
      icon: "/transaction.svg",
      path: "/admin/",
    },
    {
      name: "Support",
      icon: "/support.svg",
      path: "/admin/",
    },
    {
      name: "Team",
      icon: "/team.svg",
      path: "/admin/",
    },
  ];

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleModeToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <nav
      className={`${
        isCollapsed ? "w-40" : "w-1/5"
      } m-0 bg-gradient-to-b from-[#453750] to-[#0C0910] hidden lg:block absolute z-10 w-1/5 border-r-2 duration-200 ${isCollapsed ? "mr-12":"mr-0"}`}
    >
      <div
        className={`flex items-center ${
          isCollapsed ? "justify-start ml-8" : "justify-center"
        } my-8`}
      >
        <img src="/logo.svg" className="w-20" />
        <span
          className={`${
            isCollapsed ? "hidden" : "block"
          } text-[24px] text-white`}
        >
          CliManage
        </span>
      </div>

      <ul className="space-y-6">
        {navLinks.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              setCurrentItem(index);
            }}
            className={`py-2 flex items-center justify-start cursor-pointer ${
              currentItem === index && !isCollapsed
                ? "bg-[#ffffff1a]"
                : "bg-none"
            } pl-12`}
          >
            <span
              className={`p-1 rounded-lg ${
                currentItem === index && isCollapsed
                  ? "bg-[#ffffff1a]"
                  : "bg-none"
              }`}
            >
              <img src={link.icon} className="h-8 w-8" />
            </span>
            <a
              className={`${
                isCollapsed ? "hidden" : "block"
              } text-white text-[22px] ml-4`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="absolute flex flex-col pt-8 gap-4 border-t border-gray-700 m-8">
        <label className="relative inline-flex cursor-pointer select-none ml-4 items-center">
          <input
            type="checkbox"
            name="autoSaver"
            className="sr-only"
            checked={isCollapsed}
            onChange={handleCollapse}
          />
          <span
            className={`slider mr-3 flex h-[26px] w-[56px] items-center rounded-full p-1 duration-200 shadow-inner shadow-black bg-[#3f3f3f]`}
          >
            <span
              className={`dot h-[18px] w-[18px] rounded-full duration-200 ${
                isCollapsed ? "translate-x-7 bg-[#B7FB49]" : "bg-white"
              }`}
            ></span>
          </span>
          <span
            className={`${
              isCollapsed ? "hidden" : "flex"
            } items-center text-[22px] text-white`}
          >
            Collapse
          </span>
        </label>

        <button className="flex items-center justify-start ml-4 w-full py-4 text-white text-[22px]">
          <img src="/logout.svg" className="h-8 w-8" />
          <span className={`${isCollapsed ? "hidden" : "block"} ml-4`}>
            Logout
          </span>
        </button>

        <label className="relative inline-flex cursor-pointer select-none ml-4 items-center">
          <input
            type="checkbox"
            name="autoSaver"
            className="sr-only"
            checked={isDark}
            onChange={handleModeToggle}
          />
          <span
            className={`slider mr-3 flex h-[34px] w-[72px] items-center rounded-full p-1 duration-200 shadow-inner shadow-black bg-white`}
          >
            <span className="flex items-center justify-around w-full">
              <span className={`${!isDark ? "bg-black p-1 rounded-full" : ""}`}>
                <img
                  src="/sun.svg"
                  className={`h-4 w-4 duration-200 ${!isDark ? "brightness-200":"brightness-50"}`}
                />
              </span>
              <span className={`${isDark ? "bg-black p-1 rounded-full":""}`}>
                <img src="/moon.svg" className={`h-4 w-4 duration-200 ${isDark ? "brightness-200":"brightness-50"}`} />
              </span>
            </span>
          </span>
        </label>
      </div>
    </nav>
  );
};

export default Navigation;
