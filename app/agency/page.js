'use client'
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import AgencyTable from "../components/Tables/AgencyTable";
import { useStateContext } from "../context/state";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";
import { getAgencyData } from "@/services/agency";


const Agency = () => {

    const { isCollapsed } = useStateContext();
    const pages = [1, 2, 3, 4];
    const [currentItem, setCurrentItem] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAgencyData().then(data => {
            console.log(data);
            setItems(data);
        });
    }, []);

    return (
        <section className="relative flex justify-center md:justify-between lg:justify-start gap-8">
            <Navbar />
            <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""}`}>
                <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
                <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
                <Header />
                <section className="grid grid-cols-1 gap-4 py-4">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between p-4">
                        <h2 className="text-2xl font-medium">All Agencies/Freelancers</h2>
                        <div className="flex gap-2 items-center">
                            <button onClick={() => { if (currentItem !== 0) { setCurrentItem(currentItem - 1) } }} className="bg-[#736589] text-white p-1 rounded-md"><IoIosArrowBack /></button>
                            <div>
                                {
                                    pages.map((page, index) => (
                                        <button onClick={() => { setCurrentItem(index) }} key={index} className={`${(currentItem === index) ? "text-[#736589]" : "text-[#a5a5a5]"} px-1`}>{page}</button>
                                    ))
                                }
                            </div>
                            <button onClick={() => { if (currentItem !== pages.length - 1) { setCurrentItem(currentItem + 1) } }} className="bg-[#736589] text-white p-1 rounded-md"><IoIosArrowForward /></button>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 justify-between px-4">
                        <div className="flex justify-between gap-2">
                            <div className="flex justify-center items-center bg-[#d9d9d9] p-1 rounded-lg gap-2">
                                <form className="">
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                        <option selected>View All</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                        <option value="4">Option 4</option>
                                    </select>
                                </form>
                                <form className="">
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                        <option selected>Action</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                        <option value="4">Option 4</option>
                                    </select>
                                </form>
                                <form className="">
                                    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                        <option selected>Filter by</option>
                                        <option value="1">Option 1</option>
                                        <option value="2">Option 2</option>
                                        <option value="3">Option 3</option>
                                        <option value="4">Option 4</option>
                                    </select>
                                </form>
                            </div>
                            <div>
                                <button className="bg-[#736589] text-nowrap h-full inline-flex px-2 gap-1 items-center text-white rounded-md">Add New <span className="hidden lg:inline"><IoMdAdd /></span></button>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-4 lg:gap-1.5">
                            <div className="flex justify-between gap-1.5">
                                <button className="text-nowrap h-full px-3.5 md:px-4 py-[8.8px] text-[#30B26C] rounded-md border border-[#13A757]">Active (53)</button>
                                <button className="text-nowrap h-full px-3.5 md:px-4 py-[8.8px] text-[#813E0E] rounded-md border border-[#813E0E]">Inactive (53)</button>
                                <button className="text-nowrap h-full px-3.5 md:px-4 py-[8.8px] text-[#FE493C] rounded-md border border-[#FE493C]">Trashed (53)</button>
                            </div>
                            <form className="">
                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-[#E9E9E9]" placeholder="Search..." required />
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
                <div className="grid gap-4 grid-cols-1 py-4">
                    <AgencyTable agencies={items} />
                    <div className="flex gap-2 px-4 mb-12 items-center justify-start md:justify-end">
                        <button onClick={() => { if (currentItem !== 0) { setCurrentItem(currentItem - 1) } }} className="bg-[#736589] text-white p-1 rounded-md"><IoIosArrowBack /></button>
                        <div>
                            {
                                pages.map((page, index) => (
                                    <button onClick={() => { setCurrentItem(index) }} key={index} className={`${(currentItem === index) ? "text-[#736589]" : "text-[#a5a5a5]"} px-1`}>{page}</button>
                                ))
                            }
                        </div>
                        <button onClick={() => { if (currentItem !== pages.length - 1) { setCurrentItem(currentItem + 1) } }} className="bg-[#736589] text-white p-1 rounded-md"><IoIosArrowForward /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Agency;