'use client'
import Header from "@/app/components/Header";
import Navbar from "@/app/components/Navbar"
import { useStateContext } from "@/app/context/state"
import Image from "next/image";

const Details = () => {

    const { isCollapsed } = useStateContext();

    return (
        <section className="relative flex justify-center md:justify-between lg:justify-start gap-8">
            <Navbar />
            <div className={`md:w-4/5 ${isCollapsed ? "md:w-[90%]" : ""} mb-8`}>
                <div className="absolute -z-[10] bg-gradient-to-r rounded-full from-[#C8FC7433] to-[#8673A433] blur-2xl w-[70%] h-[70%]"></div>
                <div className="absolute bottom-0 right-0 -z-[10] bg-gradient-to-r rounded-full from-[#c0e38980] to-[#9db47980] blur-2xl w-[50%] h-[40%]"></div>
                <Header />
                <section className="flex flex-col lg:flex-row gap-4 justify-start md:justify-between items-center p-4 mx-4">
                    <div className="flex items-center gap-3">
                        <Image src="/staredo.png" width={60} height={60} alt="staredo" className="rounded-lg" />
                        <div>
                            <h2 className="text-xl font-medium">Staredo Digital Agency</h2>
                            <p className="text-lg text-gray-500">abc@domain.com</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="px-4 py-2 space-y-1 bg-[#C8FC74] rounded-lg shadow-xl shadow-gray-300">
                            <h3 className="text-sm font-medium">Profile Status</h3>
                            <form class="max-w-sm mx-auto">
                                <select id="countries" class="bg-[#13A757] bg-opacity-30 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-20 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Active</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>

                        </div>
                        <div className="px-4 py-2 space-y-1 bg-[#736589] rounded-lg shadow-xl shadow-gray-300">
                            <h3 className="text-sm text-white font-medium">Subscription</h3>
                            <form class="max-w-sm mx-auto">
                                <select id="countries" class="bg-[#d4d4d4] bg-opacity-20 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Advanced Plan</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </form>

                        </div>
                        <div className="px-4 py-3 space-y-1 bg-[#474747] rounded-lg shadow-xl shadow-gray-300">
                            <h3 className="text-sm text-white font-medium">Number of Clients</h3>
                            <span className="bg-[#d4d4d4] bg-opacity-20 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">55</span>
                        </div>
                        <div className="px-4 py-2 space-y-1 bg-white rounded-lg shadow-xl shadow-gray-300">
                            <h3 className="text-sm text-black font-medium">Registered On</h3>
                            <span className="bg-[#d4d4d4] bg-opacity-20 text-[#7b7b7b] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">Apr 9, 2024</span>
                        </div>
                    </div>
                </section>
                <section className="space-y-8 divide-y divide-[#cccccc]">
                    <section className="p-4 mx-4">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-medium">Profile Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">First name (Owner)</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9]border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Last name (Owner)</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="John" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Phone</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Phone Number" required />
                                </div>

                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Choose Type</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Business Name</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Email</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Enter Email" required />
                                </div>
                                <div>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Website</label>
                                    <input type="text" id="first_name" class="bg-[#f9f9f9] border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5" placeholder="Enter Website" required />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="p-4 mx-4">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-medium">Bank Details:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Are you Registered</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Payment Withdrawal via</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Bank</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Account Number</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Account Holder Name</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">IFSC Code</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">GST No.</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Yes</option>
                                        <option value="2">No</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </section>
                    <section className="p-4 mx-4">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-medium">Address:</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">First Line</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Second Line</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">City</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">District</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Country</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">State</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Pincode</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                                <form>
                                    <label for="first_name" class="block mb-2 text-lg text-[#878787] dark:text-white">Payment Withdrawal via</label>
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5">
                                        <option selected>Choose Type</option>
                                        <option value="1">Type 1</option>
                                        <option value="2">Type 2</option>
                                        <option value="3">Type 3</option>
                                        <option value="4">Type 4</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </section>
                    <div className="p-2 my-4 mx-8 w-full bg-[#B7FB49] text-xl text-[#424242] font-semibold text-center font rounded-xl shadow-xl shadow-gray-300">
                        <button className="w-full">Save</button>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Details;