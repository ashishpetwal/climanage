'use client'
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import { useStateContext } from "../context/state";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";


const Agency = () => {

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
                <section className="grid grid-cols-1 px-4">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between p-4">
                        <h2 className="text-2xl md:texts-3xl font-medium">All Agencies/Freelancers</h2>
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
                    <div className="flex flex-col justify-between items-start lg:flex-row lg:items-center p-4 gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="flex p-2.5 rounded-lg bg-gray-400 gap-2">
                                <div>
                                    <form className="max-w-24 mx-auto">
                                        <select id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                            <option selected>View All</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 4</option>
                                        </select>
                                    </form>
                                </div>
                                <div>
                                    <form className="max-w-24 mx-auto">
                                        <select id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                            <option selected>Action</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 4</option>
                                        </select>
                                    </form>
                                </div>
                                <div>
                                    <form className="max-w-24 mx-auto">
                                        <select id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5">
                                            <option selected>Filter by</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 4</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <button type="button" className="flex items-center text-nowrap gap-1 p-4 text-sm text-center text-white bg-[#736589] rounded-lg">Add New<IoMdAdd className="text-xl hidden md:block" /></button>
                        </div>
                        <div className="flex flex-col mx-auto md:mx-0 justify-center gap-2 md:gap-4 lg:gap-2 items-start lg:flex-row lg:justify-end lg:items-center">
                            <div className="flex gap-2">
                                <button type="button" className="text-green-700 text-nowrap hover:text-white border border-green-700 hover:bg-green-800 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm p-2 md:p-4 text-center">Active (53)</button>
                                <button type="button" className="text-[#813E0E] text-nowrap hover:text-white border border-[#813E0E] hover:bg-red-800 focus:outline-none font-medium rounded-lg text-sm p-2 md:p-4 text-center">Inactive (53)</button>
                                <button type="button" className="text-red-500 text-nowrap hover:text-white border border-red-500 hover:bg-red-500 focus:outline-none font-medium rounded-lg text-sm p-2 md:p-4 text-center">Trashed (53)</button>
                            </div>
                            <form class="w-full lg:w-1/3">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 rounded-xl bg-[#e9e9e9] outline-none" placeholder="Search..." required />
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
                <div className="grid gap-4 grid-cols-1 px-4">
                    <Table />
                    <div className="flex gap-2 px-4 mb-4 items-center justify-start md:justify-end">
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