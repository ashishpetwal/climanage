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
                <section className="grid grid-cols-1 p-4">
                    <div className="flex justify-between p-4">
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
                    <div className="flex justify-between items-center p-4 gap-4">
                        <div className="flex gap-4 items-center">
                            <div className="flex px-3 py-2 rounded-lg bg-gray-400 gap-2">
                                <div>
                                    <form className="max-w-24 mx-auto">
                                        <select id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                                        <select id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
                                        <select id="options" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option selected>Filter by</option>
                                            <option value="1">Option 1</option>
                                            <option value="2">Option 2</option>
                                            <option value="3">Option 3</option>
                                            <option value="4">Option 4</option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            <div>
                                <button type="button" className="flex items-center gap-1 px-5 py-3 text-base text-center text-white bg-[#736589] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add New<IoMdAdd /></button>
                            </div>
                        </div>
                        <div className="flex">
                            <button type="button" className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Active (53)</button>
                            <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Inactive (53)</button>
                            <button type="button" className="text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Trashed (53)</button>

                            <form class="max-w-md">
                                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div class="relative">
                                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-[#e9e9e9] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
                                </div>
                            </form>

                        </div>
                    </div>
                </section>
                <div className="grid grid-cols-1 p-4">
                    <Table />
                    <div className="flex gap-2 px-4 items-center justify-end">
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