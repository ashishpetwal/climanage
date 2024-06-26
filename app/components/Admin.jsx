"use client";

import { useEffect, useRef, useState } from "react";
import User from "./User";
import Agencies from "./Agencies";
import Payment from "./Payment";
import Subscriptions from "./Subscription";
import Chat from "./Chat";
import Image from "next/image";
import { useStateContext } from "../context/state";
import Navbar from "./Navbar";
import Header from "./Header";

const Admin = () => {
  const btnRef = useRef(null);

  const {
    navBar,
    setNavBar,
    isCollapsed,
    isDark,
    currentItem,
    handleModeToggle,
    toggleNavBar,
    handleCollapse,
  } = useStateContext();

  return (
    <header className="relative flex justify-center md:justify-between lg:justify-start gap-8">
      <Navbar />
      <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""}`}>
        <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
        <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
        {/* <div className="flex justify-between gap-8 md:justify-between w-full items-center p-8">
          <div className="md:hidden">
            <Image
              src="/logo.svg"
              alt="logo"
              width={12}
              height={12}
              className="w-12 h-12"
            />
          </div>
          <div className="-space-y-2 hidden md:block">
            <h2 className="text-[35px] font-semibold">Welcome Rio,</h2>
            <h2 className="text-[22px] font-medium text-[#2C2A29]">
              Admin Dashboard
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 border border-[#7d7d7d] rounded-full p-1 md:p-2 lg:px-4">
              <Image
                src="/rupee.svg"
                alt="rupee"
                width={4}
                height={4}
                className="w-4 h-4 md:w-8 md:h-8"
              />
              <p className="text-sm md:text-lg lg:text-xl">67,000</p>
            </div>
            <span className="bg-gray-300 p-1 md:p-2 rounded-lg">
              <Image
                src="/notify.svg"
                alt="notify"
                width={6}
                height={6}
                className="w-6 h-6 "
              />
            </span>
            <span className=" p-1 md:p-2 rounded-lg">
              <Image
                src="/icon.png"
                alt="icon"
                width={60}
                height={60}
                className="w-10 h-10"
              />
            </span>
            <button ref={btnRef} onClick={toggleNavBar} className="md:hidden">
              <Image
                className="w-6"
                src={`${navBar ? "/cross.svg" : "ham.svg"}`}
                alt="menu"
                width={6}
                height={6}
              />
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
          <p className="text-white md:max-w-xs lg:max-w-md lg:absolute lg:left-[15%] font-poppins text-sm">
            You have completed your profile successfully, now if you have any
            query or experiencing any issue. Please let us know It would be
            great if we could assist you.
          </p>
          <button className="bg-white px-4 py-2 rounded-full text-sm lg:absolute lg:right-[30%] font-poppins font-medium">
            Lets Connect
          </button>
          <Image
            src="/prop-2.svg"
            alt="prop-2"
            width={32}
            height={32}
            className="hidden lg:block absolute w-32 right-12 bottom-0"
          />
        </div> */}
        <Header />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <User />
          <User index={1} />
          <User />
          <User />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4 p-4 mb-12">
          <Agencies />
          {/* <Payment /> */}
          <div className="lg:col-start-1 lg:row-start-2">
            <Subscriptions />
          </div>
          <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1">
            <Chat />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Admin;
