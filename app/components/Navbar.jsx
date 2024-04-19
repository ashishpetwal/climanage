'use client'
import Image from "next/image";
import { useStateContext } from "../context/state";

const Navbar = () => {
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

  const {
    navBar,
    setNavBar,
    isCollapsed,
    isDark,
    currentItem,
    handleModeToggle,
    toggleNavBar,
    handleCollapse,
    setCurrentItem
  } = useStateContext();

  return (
    <nav
      className={`absolute bg-gradient-to-b from-[#453750] to-[#0C0910] ${
        navBar ? "left-0 h-screen" : "-left-96"
      } md:left-0 duration-200 w-1/2 ${
        isCollapsed ? "md:w-20" : "md:w-[30%] lg:w-[15%]"
      } md:sticky md:h-screen md:top-0 z-20`}
    >
      <div className="flex items-center p-4">
        <Image
          src="/logo.svg"
          alt="logo"
          width={16}
          height={16}
          className="w-12 h-12 md:w-16 md:h-16"
        />
        <span
          className={`text-white text-xl ${
            isCollapsed ? "hidden" : ""
          } font-medium`}
        >
          CliManage
        </span>
      </div>

      <ul className="flex items-start justify-center mx-auto w-full flex-col gap-4">
        {navLinks.map((link, index) => (
          <li
            key={index}
            onClick={() => {
              setCurrentItem(index);
            }}
            className={`relative flex items-center ${
              isCollapsed ? "justify-center" : ""
            } gap-4 px-4 py-2 cursor-pointer ${
              currentItem === index ? "bg-gray-500" : "bg-none"
            } w-full`}
          >
            <Image
              src={link.icon}
              alt="link"
              width={6}
              height={6}
              className="w-6 h-6"
            />
            <span className={`text-white ${isCollapsed ? "hidden" : ""}`}>
              {link.name}
            </span>
            <span
              className={`w-1 h-6 hidden ${
                currentItem === index && !isCollapsed ? "md:block" : "hidden"
              } absolute right-0 bg-[#d9d9d9]`}
            ></span>
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

        <button
          className={`flex items-center justify-start ${
            isCollapsed ? "justify-center" : ""
          } my-4 p-4 text-white`}
        >
          <Image
            src="/logout.svg"
            alt="logout"
            width={6}
            height={6}
            className="h-6 w-6"
          />
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
              <span className={`${isDark ? "bg-black p-1 rounded-full" : ""}`}>
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
        <div className="absolute -z-[1] bg-gradient-to-r rounded-full from-[#CCFF7A33] to-[#330A7433] blur-xl w-full h-40"></div>
      </div>
    </nav>
  );
};

export default Navbar;
