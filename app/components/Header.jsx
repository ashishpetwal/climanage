import { useEffect, useRef } from "react";
import { useStateContext } from "../context/state";
import Image from "next/image";

const Header = () => {
  const btnRef = useRef();

  const { navBar, toggleNavBar, setNavBar } = useStateContext();

  useEffect(() => {
    const closeNavBar = (e) => {
      if (!btnRef.current.contains(e.target)) {
        setNavBar(false);
        document.body.style.overflow = "unset";
      }
    };

    document.body.addEventListener("click", closeNavBar);
    return () => {
      document.body.removeEventListener("click", closeNavBar);
    };
  }, []);

  return (
    <>
      <div className="flex justify-between gap-8 md:justify-between w-full items-center p-8">
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
        <div className="flex justify-center items-center gap-4">
          <div className="flex items-center gap-1 md:gap-2 border border-[#7d7d7d] rounded-full p-1 md:p-2 lg:px-4">
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
          <span>
            <Image
              src="/icon.png"
              alt="icon"
              width={60}
              height={60}
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
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
      <div className="relative flex flex-col gap-4 items-start bg-[#736589] rounded-xl mx-8 my-2 p-4 md:flex-row md:justify-center lg:justify-between md:items-center lg:h-28">
        <div className="relative">
          <Image
            src="/prop-1.svg"
            alt="prop-1"
            width={12}
            height={12}
            className="hidden lg:block mt-14 w-12 h-full"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-start xl:absolute xl:left-20 lg:items-center gap-4 md:gap-8 px-4">
          <p className="text-white font-poppins lg:max-w-md text-sm">
            You have completed your profile successfully, now if you have any
            query or experiencing any issue. Please let us know It would be
            great if we could assist you.
          </p>
          <button className="bg-white px-4 py-2 rounded-full text-sm w-32 h-8 text-nowrap font-poppins font-medium">
            Lets Connect
          </button>
        </div>
        <div>
          <Image
            src="/prop-2.svg"
            alt="prop-2"
            width={32}
            height={32}
            className="hidden lg:block xl:absolute xl:right-20 w-36 xl:bottom-0"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
