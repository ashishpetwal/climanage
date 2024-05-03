'use client'
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useStateContext } from "@/app/context/state";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import EditCouponCode from "@/app/components/Editcoupon";
import Settings from "../components/Settings";

const SettingsPage = () => {

    const { isCollapsed } = useStateContext();

    return (
        <section className="relative flex justify-center md:justify-between lg:justify-start gap-8">
            <Navbar />
            <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""}`}>
                <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
                <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
                <Header />
                <section className="grid grid-cols-1 gap-4 py-4">
                    <div className="flex flex-col gap-4 justify-between p-4">
                        <h2 className="text-2xl font-medium">Settings</h2>
                    </div>
                </section>
                <section className="bg-white rounded-lg space-y-8 mx-4 mb-8 py-4">
                    <Settings />
                    <div className="px-4 pb-4 mx-4">
                        <button type="button" class="text-[#424242] bg-[#B7FB49] w-full hover:bg-opacity-90 font-semibold rounded-lg text-lg py-4">Save</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default SettingsPage;