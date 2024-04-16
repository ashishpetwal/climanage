"use client";

import { useState } from "react";
import User from "./User";
import Agencies from "./Agencies";
import Payment from "./Payment";
import Subscriptions from "./Subscription";
import Chat from "./Chat";
import Image from "next/image";

const Admin = () => {
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

  const [navBar, setNavBar] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  const handleModeToggle = () => {
    setIsDark(!isDark);
  };

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header className="relative flex justify-center md:justify-between">
      <nav
        className={`absolute bg-gradient-to-b from-[#453750] to-[#0C0910] ${
          navBar ? "left-0 h-screen" : "-left-96"
        } md:left-0 duration-200 w-1/2 ${isCollapsed ?"md:w-20":"md:w-1/5"} md:static z-20`}
      >
        <div className="flex items-center p-4">
          <Image src="/logo.svg" alt="logo" width={12} height={12} className="w-12 h-12" />
          <span className={`text-white ${isCollapsed ?"hidden":""} font-semibold`}>CliManage</span>
        </div>

        <ul className="flex items-start justify-center mx-auto w-full flex-col gap-4">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => {
                setCurrentItem(index);
              }}
              className={`flex items-center gap-4 px-4 py-2 cursor-pointer ${
                currentItem === index ? "bg-gray-500" : "bg-none"
              } w-full`}
            >
              <Image src={link.icon} alt="link" width={6} height={6} className="w-6 h-6" />
              <span className={`text-white ${isCollapsed ?"hidden":""}`}>{link.name}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col py-4 my-4 border-gray-600 border-t">
          <label className="relative hidden md:inline-flex cursor-pointer select-none ml-4 items-center">
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
              } items-center text-white`}
            >
              Collapse
            </span>
          </label>

          <button className="flex items-center justify-start my-4 p-4 text-white">
            <Image src="/logout.svg" alt="logout" width={6} height={6} className="h-6 w-6" />
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
                <span
                  className={`${!isDark ? "bg-black p-1 rounded-full" : ""}`}
                >
                  <Image
                    src="/sun.svg"
                    alt="sun"
                    width={4} 
                    height={4}
                    className={`h-4 w-4 duration-200 ${
                      !isDark ? "brightness-200" : "brightness-50"
                    }`}
                  />
                </span>
                <span
                  className={`${isDark ? "bg-black p-1 rounded-full" : ""}`}
                >
                  <Image
                    src="/moon.svg"
                    alt="moon"
                    width={4}
                    height={4}
                    className={`h-4 w-4 duration-200 ${
                      isDark ? "brightness-200" : "brightness-50"
                    }`}
                  />
                </span>
              </span>
            </span>
          </label>
        </div>
      </nav>
      <div className="md:w-4/5">
        <div className="flex justify-between gap-8 md:justify-between w-full items-center p-8">
          <div className="md:hidden">
            <Image src="/logo.svg" alt="logo" width={12} height={12} className="w-12 h-12" />
          </div>
          <div className="hidden md:block">
            <h2 className="text-2xl font-semibold">Welcome Rio,</h2>
            <h2 className="text-lg font-medium text-gray-600">Admin Dashboard</h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border-2 rounded-full p-1 md:p-3 lg:px-4">
              <Image src="/rupee.svg" alt="rupee" width={4} height={4} className="w-4 h-4" />
              <p className="text-sm md:text-md lg:text-lg">67,000</p>
            </div>
            <span className="bg-gray-300 p-1 md:p-2 rounded-lg">
              <Image src="/notify.svg" alt="notify" width={6} height={6} className="w-6 h-6 " />
            </span>
            <span className="bg-[#B7FB49] p-1 md:p-2 rounded-lg">
              <Image src="/english.svg" alt="english" width={6} height={6} className="w-6 h-6" />
            </span>
            <button
              onClick={() => {
                setNavBar(!navBar);
              }}
              className="md:hidden"
            >
              <Image className="w-6" src={`${navBar ? "/cross.svg":"ham.svg"}`} alt="menu" width={6} height={6} />
            </button>
          </div>
        </div>
        <div className="relative flex flex-col gap-4 items-start bg-[#736589] rounded-xl m-4 p-4 md:flex-row md:justify-center lg:justify-start md:items-center lg:h-28">
          <Image
            src="/prop-1.svg"
            alt="prop-1"
            width={12}
            height={12}
            className="hidden lg:block absolute w-12 h-12 left-8 bottom-0"
          />
          <p className=" text-white md:max-w-sm lg:max-w-md lg:absolute lg:left-[15%]">
            You have completed your profile successfully, now if you have any
            query or experiencing any issue. Please let us know It would be
            great if we could assist you.
          </p>
          <button className="bg-white px-4 py-2 rounded-full text-sm lg:absolute lg:right-[30%]">
            Lets Connect
          </button>
          <Image
            src="/prop-2.svg"
            alt="prop-2"
            width={32}
            height={32}
            className="hidden lg:block absolute w-32 right-12 bottom-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-8">
          <User />
          <User />
          <User />
          <User />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <Agencies />
          <Payment />
          <Subscriptions />
          <Chat />
        </div>
      </div>
    </header>
  );
};

export default Admin;
