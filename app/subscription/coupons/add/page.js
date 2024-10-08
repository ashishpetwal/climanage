'use client'
import { FaRegEdit } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { useStateContext } from "@/app/context/state";
import Navbar from "@/app/components/Navbar";
import Header from "@/app/components/Header";
import AddCouponCode from "@/app/components/Addcoupon";
import { useState } from "react";
import { createCoupon } from "@/services/coupon";

const AddCoupon = () => {

    const { isCollapsed } = useStateContext();

    const [couponCode, setCouponCode] = useState({
        couponName: "",
        status: "",
        validForPlanId: 0,
        startDate: new Date(),
        expiryDate: new Date(),
    });

    const handleChange = (e) => {
        setCouponCode({
            ...couponCode,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        const payload = {
            ...couponCode,
            status: couponCode.status.toUpperCase(),
            startDate: new Date(couponCode.startDate),
            expiryDate: new Date(couponCode.expiryDate),
        };
        createCoupon(payload).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <section className="relative flex justify-center md:justify-between lg:justify-start gap-8">
            <Navbar />
            <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""}`}>
                <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
                <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
                <Header />
                <section className="grid grid-cols-1 gap-4 py-4">
                    <div className="flex flex-col gap-4 justify-between p-4">
                        <h2 className="text-2xl font-medium">Subscription Plans</h2>
                        <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-between">
                            <div className="flex justify-between text-white bg-[#A394BF] p-4 px-6 rounded-lg w-[100%] lg:w-[32%]">
                                <div className="space-y-4">
                                    <p className="text-xl">Free</p>
                                    <div className="text-4xl font-bold flex items-center">
                                        <FaRupeeSign />
                                        <span>0</span>
                                    </div>
                                    <p className="text-lg">Lifetime</p>
                                </div>
                                <div className="pt-1">
                                    <button><FaRegEdit className="text-xl" /></button>
                                </div>
                            </div>
                            <div className="flex justify-between text-white bg-[#9881AB] p-4 px-6 rounded-lg w-[100%] lg:w-[32%]">
                                <div className="space-y-4">
                                    <p className="text-xl">Plus</p>
                                    <div className="text-4xl font-bold flex items-center">
                                        <FaRupeeSign />
                                        <span>1200</span>
                                    </div>
                                    <p className="text-lg">Per Month</p>
                                </div>
                                <div className="pt-1">
                                    <button><FaRegEdit className="text-xl" /></button>
                                </div>
                            </div>
                            <div className="flex justify-between text-white bg-[#736589] p-4 px-6 rounded-lg w-[100%] lg:w-[32%]">
                                <div className="space-y-4">
                                    <p className="text-xl">Pro</p>
                                    <div className="text-4xl font-bold flex items-center">
                                        <FaRupeeSign />
                                        <span>1500</span>
                                    </div>
                                    <p className="text-lg">Per Month</p>
                                </div>
                                <div className="pt-1">
                                    <button><FaRegEdit className="text-xl" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white rounded-lg space-y-8 m-4 py-4">
                    <AddCouponCode couponCode={couponCode} setCouponCode={setCouponCode} handleChange={handleChange} />
                    <div className="px-4 pb-4 mx-4">
                        <button onClick={handleSave} type="button" class="text-[#424242] bg-[#B7FB49] w-full hover:bg-opacity-90 font-semibold rounded-lg text-lg py-4">Save</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default AddCoupon;