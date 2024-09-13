'use client'
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useStateContext } from "../context/state";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import SubsTable from "../components/Tables/SubsTable";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPaperclip } from "react-icons/tb";
import { VscMic } from "react-icons/vsc";

const Support = () => {

    const { isCollapsed } = useStateContext();
    const pages = [1, 2, 3, 4];
    const [currentItem, setCurrentItem] = useState(0);

    const [chatOpened, setChatOpened] = useState(false);

    const openChat = () => {
        setChatOpened(!chatOpened);
    }

    const chats = [1, 2, 3, 4]

    return (
        <section className="relative flex justify-center md:justify-between lg:justify-start gap-8">
            <Navbar />
            <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""}`}>
                <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
                <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
                <Header />
                <section className="grid grid-cols-1 gap-4 py-4">
                    <div className="flex flex-col justify-between p-4">
                        <h2 className="text-2xl font-medium py-4">Support</h2>
                        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">
                            <div className="flex w-full">
                                <div className={`${chatOpened ? "hidden lg:block lg:w-[40%]" : "w-[100%] lg:block lg:w-[40%]"}`}>
                                    <div className="bg-[#736589] rounded-t-2xl lg:rounded-t-none lg:rounded-tl-2xl">
                                        <div className="flex justify-between items-center border-b border-b-[#cccccc77] py-[17.1px] px-5">
                                            <div className="flex justify-between items-center gap-4">
                                                <Image src="/climanage.svg" width={45} height={45} alt="staredo" />
                                                <div>
                                                    <h3 className="text-lg font-medium text-white">Climanage Support</h3>
                                                    <p className="text-xs text-[#969696]">Last Seen on Apr 9, 2024 at 09:00 pm</p>
                                                </div>
                                            </div>
                                            <button><BsThreeDotsVertical className="text-white text-xl" /></button>
                                        </div>
                                        <div>
                                            <form className="">
                                                <div className="relative py-5 mx-5">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                    </div>
                                                    <input type="search" id="default-search" className="block w-full p-2.5 ps-10 text-sm text-[#5b5b5b] rounded-lg outline-none bg-[#B9B2C4] placeholder:text-[#5B5B5B]" placeholder="Search..." required />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="space-y-4 p-5 bg-white h-screen border border-[#cccccc]">
                                        {
                                            chats.map((chat, index) => {
                                                return <div key={index} className="flex justify-between items-center p-2 w-full border border-gray-400 rounded-2xl cursor-pointer hover:bg-[#B9B2C4] relative" onClick={openChat}>
                                                    <div className="flex items-center gap-2 mx-2">
                                                        <Image
                                                            src="/man.png"
                                                            alt="man"
                                                            width={160}
                                                            height={160}
                                                            className="w-12 h-12 mx-auto"
                                                        />
                                                        <div className="max-w-40 md:max-w-60 mr-4">
                                                            <div className="flex items-center gap-1 lg:flex-row lg:items-center lg:gap-2 justify-start">
                                                                <h3 className="text-sm text-nowrap lg:text-lg text-[#424242] font-medium">
                                                                    John David
                                                                </h3>
                                                                <Image src="/dot.svg" alt="dot" width={4} height={4} />
                                                                <h3 className="text-sm lg:text-lg text-[#424242]">Freelancer</h3>
                                                            </div>
                                                            <p className="text-xs text-wrap text-[#858585]">
                                                                <span className="font-bold text-green-500">Closed</span> on Apr 9,
                                                                2024 at 09:00 pm
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <button className="bg-[#eeeeee] p-2 rounded-full hover:bg-[#736589]">
                                                        <Image
                                                            src="/send.svg"
                                                            alt="send"
                                                            width={6}
                                                            height={6}
                                                            className="w-6 h-6"
                                                        />
                                                    </button>
                                                    <div className={`absolute -top-1 -left-1 ${index != 0 ? "hidden" : ""} w-4 h-4 rounded-full bg-[#644183]`}></div>
                                                </div>
                                            })
                                        }
                                    </div>
                                </div>
                                <div className={`${!chatOpened ? "hidden lg:block lg:w-[60%]" : "w-[100%] lg:block lg:w-[60%]"} rounded-tr-2xl bg-white`}>
                                    <div className="flex justify-between items-center p-4 w-full bg-[#B9B2C4] rounded-t-2xl lg:rounded-t-none lg:rounded-tr-2xl">
                                        <button className="lg:hidden" onClick={openChat}><IoIosArrowBack className="textb-black text-sm font-bold" /></button>
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src="/man.png"
                                                alt="man"
                                                width={160}
                                                height={160}
                                                className="w-12 h-12 mx-auto"
                                            />
                                            <div className="max-w-40 md:max-w-60 mr-4">
                                                <div className="flex items-center gap-1 lg:flex-row lg:items-center lg:gap-2 justify-start">
                                                    <h3 className="text-sm text-nowrap lg:text-lg text-black font-medium">
                                                        John David
                                                    </h3>
                                                    <Image src="/dot.svg" alt="dot" width={4} height={4} />
                                                    <h3 className="text-sm lg:text-lg text-black">Freelancer</h3>
                                                </div>
                                                <p className="text-sm text-wrap text-[#858585]">
                                                    <span className="font-bold text-green-500">Closed</span> on Apr 9,
                                                    2024 at 09:00 pm
                                                </p>
                                            </div>
                                        </div>
                                        <button>
                                            <BsThreeDotsVertical className="text-xl text-[#848484]" />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <div className="space-y-8">
                                            <p className="bg-[#B9B2C4] text-[#3E3E3E] p-1 rounded-lg text-center w-32 mx-auto">Apr 5, 2024</p>
                                            <div className="space-y-4">
                                                <div className="text-[#3e3e3e] bg-[#B9B2C4] px-4 py-2 rounded-b-2xl rounded-tr-2xl max-w-md relative ml-2">
                                                    Hi there,I&apos;m having an issue can you please assist me?
                                                    <span className="text-[#858585] text-right text-sm block">10:00 am</span>
                                                    <div style={
                                                        {
                                                            width: "0",
                                                            height: "0",
                                                            borderLeft: "10px solid transparent",
                                                            borderRight: "10px solid transparent",
                                                            borderBottom: "10px solid #B9B2C4",
                                                            position: "absolute",
                                                            top: "-1.5px",
                                                            left: "-12px"
                                                        }
                                                    } className="rotate-45"></div>
                                                </div>
                                                <div className="text-[#3e3e3e] bg-[#B9B2C4] px-4 py-2 rounded-b-2xl rounded-tl-2xl max-w-md ml-auto relative mr-2">
                                                    Hi John,Sure, It would be great if I could help you.
                                                    Can you please let me know, What kind of issue are you facing.
                                                    <span className="text-[#858585] text-right text-sm mb-0 block">10:00 am</span>
                                                    <div style={{
                                                        width: "0",
                                                        height: "0",
                                                        borderLeft: "10px solid transparent",
                                                        borderRight: "10px solid transparent",
                                                        borderBottom: "10px solid #B9B2C4",
                                                        position: "absolute",
                                                        top: "-1.5px",
                                                        right: "-12px"

                                                    }} className="-rotate-45" ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <div className={`${chatOpened ? "hidden lg:flex lg:w-[40%]" : "w-[100%] lg:flex lg:w-[40%]"} flex justify-between items-center bg-[#736589] rounded-b-xl lg:rounded-b-none lg:rounded-bl-xl rounded-bl-xl p-3.5`}>
                                <div className="flex gap-1.5 lg:mx-4">
                                    <button className="text-nowrap h-full p-1 text-[#30B26C] rounded-md border border-[#13A757] bg-[#B9B2C4]">Closed (53)</button>
                                    <button className="text-nowrap h-full p-1 text-[#813E0E] rounded-md border border-[#813E0E] bg-[#B9B2C4]">Started (53)</button>
                                    <button className="text-nowrap h-full p-1 text-[#453750] rounded-md border border-[#453750] bg-[#B9B2C4]">New (53)</button>
                                </div>
                                <div className="bg-[#B9B2C4] p-2 lg:mx-4 rounded-full">
                                    <IoSettingsOutline className="text-[#7e7e7e] text-xl" />
                                </div>
                            </div>
                            <div className={`${!chatOpened ? "hidden lg:flex lg:w-[60%]" : "w-[100%] lg:flex lg:w-[60%]"} flex justify-between items-center bg-[#B9B2C4] rounded-b-xl lg:rounded-b-none lg:rounded-br-xl py-[.69rem]`}>
                                <div className="p-1.5 mx-4 rounded-full">
                                    <TbPaperclip className="text-[#7e7e7e] size-6" />
                                </div>
                                <form className="w-full">
                                    <div className="relative">
                                        <textarea rows={1} cols={1} type="search" id="default-search" className="block w-full p-2.5 ps-4 text-sm text-black outline-none border border-[#7e7e7e] rounded-lg bg-[#B9B2C4] placeholder-[#6b6b6b] resize-none" placeholder="Type your Message..." required />
                                    </div>
                                </form>
                                <div className="p-1.5 mx-4 rounded-full">
                                    <VscMic className="text-[#7e7e7e] size-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Support;