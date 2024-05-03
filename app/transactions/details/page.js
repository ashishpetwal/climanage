'use client'
import { useState } from "react";
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar";
import { useStateContext } from "@/app/context/state";
import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";

const TransactionDetail = () => {

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
                    <div className="flex flex-col items-start md:flex-row gap-4 md:gap-0 justify-between px-4">
                        <h2 className="text-2xl font-medium">Transaction Details</h2>
                        <button className="inline-flex items-center gap-2 border border-[#736589] px-2.5 py-1.5 rounded-lg text-sm text-[#736589] w-auto">
                            Download <span><AiOutlineDownload className="text-xl" /></span>
                        </button>
                    </div>
                </section>
                <section className="bg-white rounded-lg space-y-8 m-4 mb-8 p-4 py-6 px-8">
                    <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:gap-0 md:items-center">
                        <div className="flex items-center gap-4">
                            <Image
                                src="/staredo.png"
                                width={100}
                                height={100}
                                alt="avatar"
                                className="w-14 h-14 rounded-lg"
                            />
                            <span>
                                <p className="text-[#141414] pr-4 font-medium text-xl text-wrap">
                                    Staredo Digital Agency
                                </p>
                                <p className="text-[#969696] text-lg font-normal">
                                    abc@domain.com
                                </p>
                            </span>
                        </div>
                        <div className="text-left md:text-right text-[#878787]">
                            <p>RYY86kK5688f</p>
                            <p>May 01, 2024</p>
                            <p>08:12 PM</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-8 lg:gap-0 justify-between items-center">
                        <div className="space-y-2.5 lg:w-[48%]">
                            <h3 className="text-3xl font-medium">Billed By</h3>
                            <div className="bg-[#f9f9f9] p-4 rounded-lg space-y-2.5">
                                <p className="text-lg font-medium">CliManage</p>
                                <p className="text-lg text-[#878787] max-w-sm">Sasni, Chauraha, Sasni, Hathras, Uttar Pradesh, India (204216)</p>
                            </div>
                        </div>
                        <div className="space-y-2.5 lg:w-[48%]">
                            <h3 className="text-3xl font-medium">Billed To</h3>
                            <div className="bg-[#f9f9f9] p-4 rounded-lg space-y-2.5">
                                <p className="text-lg font-medium">CliManage</p>
                                <p className="text-lg text-[#878787] max-w-sm">Sasni, Chauraha, Sasni, Hathras, Uttar Pradesh, India (204216)</p>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 border-t border-[#cccccc]">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <p
                                        className="block mb-2 text-lg text-[#878787]"
                                    >
                                        Purchased Plan
                                    </p>
                                    <div className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        Pro
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="block mb-2 text-lg text-[#878787]"
                                    >
                                        Cost
                                    </p>
                                    <div className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        ₹1500
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="block mb-2 text-lg text-[#878787]"
                                    >
                                        Payment Mode
                                    </p>
                                    <div className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        Online
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="block mb-2 text-lg text-[#878787]"
                                    >
                                        Start Date
                                    </p>
                                    <div className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        May 01, 2024
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="block mb-2 text-lg text-[#878787]"
                                    >
                                        Expiry Date
                                    </p>
                                    <div className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        30 June, 2024
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="block mb-2 text-lg text-[#878787]"
                                    >
                                        Plan Status
                                    </p>
                                    <div className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        Active
                                    </div>
                                </div>
                                <div>
                                    <p
                                        className="block mb-2 text-lg text-[#878787]"
                                    >
                                        Transaction Status
                                    </p>
                                    <div className="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        Success
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default TransactionDetail;