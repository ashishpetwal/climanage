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
import { ImAttachment } from "react-icons/im";
import { VscMic } from "react-icons/vsc";

const Support = () => {

    const { isCollapsed } = useStateContext();
    const pages = [1, 2, 3, 4];
    const [currentItem, setCurrentItem] = useState(0);

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
                                <div className="w-[40%] border-r border-[#cccccc]">
                                    <div className="bg-[#736589] p-3 space-y-8 rounded-tl-2xl">
                                        <div className="flex justify-between items-center border-b p-2.5">
                                            <div className="flex justify-between items-center gap-4">
                                                <Image src="/logo.svg" width={45} height={45} alt="staredo" />
                                                <div>
                                                    <h3 className="text-lg font-medium text-white">Climanage Support</h3>
                                                    <p className="text-sm text-[#969696]">Last Seen on Apr 9, 2024 at 09:00 pm</p>
                                                </div>
                                            </div>
                                            <button><BsThreeDotsVertical className="text-white text-xl" /></button>
                                        </div>
                                        <div>
                                            <form className="">
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                                        </svg>
                                                    </div>
                                                    <input type="search" id="default-search" className="block w-full p-2.5 ps-10 text-sm text-[#5b5b5b] border border-gray-300 rounded-lg bg-[#B9B2C4]" placeholder="Search..." required />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="space-y-4 p-4 bg-white">
                                        <div className="flex justify-between items-center p-4 w-full border border-gray-400 rounded-2xl">
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
                                                        <h3 className="text-sm text-nowrap lg:text-lg text-[#424242] font-semibold">
                                                            John David
                                                        </h3>
                                                        <Image src="/dot.svg" alt="dot" width={4} height={4} />
                                                        <h3 className="text-sm text-[#424242]">Freelancer</h3>
                                                    </div>
                                                    <p className="text-sm text-wrap text-[#858585]">
                                                        <span className="font-bold text-green-500">Closed</span> on Apr 9,
                                                        2024 at 09:00 pm
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="bg-gray-300 p-2 rounded-full">
                                                <Image
                                                    src="/send.svg"
                                                    alt="send"
                                                    width={6}
                                                    height={6}
                                                    className="w-6 h-6"
                                                />
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center p-4 w-full border border-gray-400 rounded-2xl">
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
                                                        <h3 className="text-sm text-nowrap lg:text-lg text-[#424242] font-semibold">
                                                            John David
                                                        </h3>
                                                        <Image src="/dot.svg" alt="dot" width={4} height={4} />
                                                        <h3 className="text-sm text-[#424242]">Freelancer</h3>
                                                    </div>
                                                    <p className="text-sm text-wrap text-[#858585]">
                                                        <span className="font-bold text-green-500">Closed</span> on Apr 9,
                                                        2024 at 09:00 pm
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="bg-gray-300 p-2 rounded-full">
                                                <Image
                                                    src="/send.svg"
                                                    alt="send"
                                                    width={6}
                                                    height={6}
                                                    className="w-6 h-6"
                                                />
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center p-4 w-full border border-gray-400 rounded-2xl">
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
                                                        <h3 className="text-sm text-nowrap lg:text-lg text-[#424242] font-semibold">
                                                            John David
                                                        </h3>
                                                        <Image src="/dot.svg" alt="dot" width={4} height={4} />
                                                        <h3 className="text-sm text-[#424242]">Freelancer</h3>
                                                    </div>
                                                    <p className="text-sm text-wrap text-[#858585]">
                                                        <span className="font-bold text-green-500">Closed</span> on Apr 9,
                                                        2024 at 09:00 pm
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="bg-gray-300 p-2 rounded-full">
                                                <Image
                                                    src="/send.svg"
                                                    alt="send"
                                                    width={6}
                                                    height={6}
                                                    className="w-6 h-6"
                                                />
                                            </button>
                                        </div>
                                        <div className="flex justify-between items-center p-4 w-full border border-gray-400 rounded-2xl">
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
                                                        <h3 className="text-sm text-nowrap lg:text-lg text-[#424242] font-semibold">
                                                            John David
                                                        </h3>
                                                        <Image src="/dot.svg" alt="dot" width={4} height={4} />
                                                        <h3 className="text-sm text-[#424242]">Freelancer</h3>
                                                    </div>
                                                    <p className="text-sm text-wrap text-[#858585]">
                                                        <span className="font-bold text-green-500">Closed</span> on Apr 9,
                                                        2024 at 09:00 pm
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="bg-gray-300 p-2 rounded-full">
                                                <Image
                                                    src="/send.svg"
                                                    alt="send"
                                                    width={6}
                                                    height={6}
                                                    className="w-6 h-6"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[60%] bg-white">
                                    <div className="flex justify-between items-center p-4 w-full border border-gray-400 bg-[#B9B2C4] rounded-tr-2xl">
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
                                                    <h3 className="text-sm text-black">Freelancer</h3>
                                                </div>
                                                <p className="text-sm text-wrap text-[#858585]">
                                                    <span className="font-bold text-green-500">Closed</span> on Apr 9,
                                                    2024 at 09:00 pm
                                                </p>
                                            </div>
                                        </div>
                                        <button>
                                            <BsThreeDotsVertical />
                                        </button>
                                    </div>
                                    <div className="p-4">
                                        <div className="space-y-8">
                                            <p className="bg-[#B9B2C4] text-[#3E3E3E] p-1 rounded-lg text-center w-32 mx-auto">Apr 5, 2024</p>
                                            <div className="space-y-4">
                                                <div className="text-[#3e3e3e] bg-[#B9B2C4] p-4 rounded-b-2xl rounded-tr-2xl max-w-md">
                                                    Hi there,I&apos;m having an issue can you please assist me?
                                                </div>
                                                <div className="text-[#3e3e3e] bg-[#B9B2C4] p-4 rounded-b-2xl rounded-tl-2xl max-w-md ml-auto">
                                                    Hi John,Sure, It would be great if I could help you.
                                                    Can you please let me know, What kind of issue are you facing.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <div className="w-[40%] flex justify-between items-center bg-[#736589] rounded-bl-xl p-4">
                                <div className="flex gap-1.5 mx-4">
                                    <button className="text-nowrap h-full p-1 text-[#30B26C] rounded-md border border-[#13A757] bg-[#B9B2C4]">Closed (53)</button>
                                    <button className="text-nowrap h-full p-1 text-[#813E0E] rounded-md border border-[#813E0E] bg-[#B9B2C4]">Started (53)</button>
                                    <button className="text-nowrap h-full p-1 text-[#FE493C] rounded-md border border-[#FE493C] bg-[#B9B2C4]">New (53)</button>
                                </div>
                                <div className="bg-[#B9B2C4] p-2 mx-4 rounded-full">
                                    <IoSettingsOutline className="text-[#7e7e7e] text-xl" />
                                </div>
                            </div>
                            <div className="w-[60%] flex justify-between items-center bg-[#B9B2C4] rounded-br-xl p-4">
                                <div className="p-1.5 mx-4 rounded-full">
                                    <ImAttachment className="text-[#7e7e7e] size-6" />
                                </div>
                                <form className="w-full">
                                    <div className="relative">
                                        <input type="search" id="default-search" className="block w-full p-1.5 ps-4 text-sm text-black outline-none border border-[#7e7e7e] rounded-lg bg-[#B9B2C4] placeholder-[#6b6b6b]" placeholder="Type your Message..." required />
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